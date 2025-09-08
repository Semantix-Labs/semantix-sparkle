import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  budget: string;
  message: string;
}

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Initialize Supabase client
const supabase = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
);

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { 
      status: 405, 
      headers: corsHeaders 
    });
  }

  try {
    // Get client IP and user agent
    const clientIP = req.headers.get("x-forwarded-for") || 
                    req.headers.get("x-real-ip") || 
                    "unknown";
    const userAgent = req.headers.get("user-agent") || "unknown";

    // Parse request body
    const { name, email, budget, message }: ContactFormData = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Processing contact form submission:", { name, email, budget: budget || "Not specified" });

    // Insert into database
    const { data: dbData, error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        name,
        email,
        budget: budget || null,
        message,
        source_page: "/",
        ip_address: clientIP,
        user_agent: userAgent,
        status: "new"
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save submission" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Contact submission saved to database:", dbData.id);

    // Prepare email content
    const emailTo = Deno.env.get("EMAIL_TO") || "info@semantixlabs.com";
    const emailCC = Deno.env.get("EMAIL_CC") || "";
    const emailFrom = Deno.env.get("EMAIL_FROM") || "Semantix Labs <onboarding@resend.dev>";

    const ccEmails = emailCC ? emailCC.split(",").map(email => email.trim()).filter(email => email) : [];

    const emailSubject = `New Contact Form Submission from ${name}`;
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Submission ID:</strong> ${dbData.id}</p>
      <hr>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
      <p><strong>Message:</strong></p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
        ${message.replace(/\n/g, '<br>')}
      </div>
      <hr>
      <p><strong>Submission Details:</strong></p>
      <ul>
        <li><strong>IP Address:</strong> ${clientIP}</li>
        <li><strong>User Agent:</strong> ${userAgent}</li>
        <li><strong>Source Page:</strong> /</li>
        <li><strong>Submitted At:</strong> ${new Date().toISOString()}</li>
      </ul>
    `;

    // Send notification email
    const emailPayload: any = {
      from: emailFrom,
      to: [emailTo],
      subject: emailSubject,
      html: emailHtml,
    };

    if (ccEmails.length > 0) {
      emailPayload.cc = ccEmails;
    }

    const emailResponse = await resend.emails.send(emailPayload);

    if (emailResponse.error) {
      console.error("Email sending error:", emailResponse.error);
      // Don't fail the request if email fails, as the submission is already saved
    } else {
      console.log("Notification email sent successfully:", emailResponse.data?.id);
    }

    // Send confirmation email to user
    try {
      await resend.emails.send({
        from: emailFrom,
        to: [email],
        subject: "Thank you for contacting Semantix Labs!",
        html: `
          <h1>Thank you for contacting us, ${name}!</h1>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p><strong>Your message:</strong></p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <p>Best regards,<br>
          The Semantix Labs Team</p>
          <hr>
          <p style="font-size: 12px; color: #666;">
            Semantix Labs - Digital Service Agency<br>
            Email: hello@semantixlabs.com<br>
            Phone: +94 72 813 3311<br>
            Location: Colombo, Sri Lanka
          </p>
        `,
      });
      console.log("Confirmation email sent to user");
    } catch (confirmationError) {
      console.error("Failed to send confirmation email:", confirmationError);
      // Don't fail the request if confirmation email fails
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Your message has been sent successfully!",
        submissionId: dbData.id
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);