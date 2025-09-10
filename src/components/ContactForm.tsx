import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { ArrowRight, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';

// EmailJS configuration - Replace these with your actual EmailJS IDs
const EMAILJS_SERVICE_ID = 'Service_p1h919r';
const EMAILJS_TEMPLATE_ID = 'template_p33g5sj';
const EMAILJS_PUBLIC_KEY = 'CRAmrq28QnM3736WD';

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      budget: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      console.log('Attempting to send email with EmailJS...');
      
      // Initialize EmailJS (in case it's not initialized)
      emailjs.init(EMAILJS_PUBLIC_KEY);
      
      // Send email using EmailJS - remove to_email as it's handled in template
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          budget: data.budget || 'Not specified',
          message: data.message,
        }
      );

      console.log('EmailJS result:', result);

      toast({
        title: "Message sent successfully!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      form.reset();
    } catch (error: any) {
      console.error('Detailed EmailJS error:', error);
      console.error('Error status:', error.status);
      console.error('Error text:', error.text);
      
      let errorMessage = "Something went wrong. Please try again later.";
      
      if (error.status === 400) {
        errorMessage = "Invalid form data. Please check your inputs.";
      } else if (error.status === 403) {
        errorMessage = "Email service configuration error. Please contact support.";
      }
      
      toast({
        title: "Error sending message",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-card p-8 rounded-xl">
      <h3 className="text-xl font-semibold mb-6">Start Your Project</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" placeholder="Your Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Project Budget (Optional)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us about your project..." 
                    className="min-h-[120px] resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full btn-primary text-lg py-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};
