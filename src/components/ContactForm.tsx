import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { ArrowRight, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';

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
      const { data: result, error } = await supabase.functions.invoke('send-contact-email', {
        body: data,
      });

      if (error) {
        throw error;
      }

      // Check email delivery status
      const { emailStatus } = result;
      
      if (emailStatus?.adminEmailSent && emailStatus?.userEmailSent) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for contacting us. We'll get back to you soon.",
        });
      } else if (emailStatus?.adminEmailSent && !emailStatus?.userEmailSent) {
        toast({
          title: "Message received!",
          description: "Your message was saved and we've been notified. However, we couldn't send you a confirmation email.",
          variant: "default",
        });
      } else if (!emailStatus?.adminEmailSent && emailStatus?.userEmailSent) {
        toast({
          title: "Message sent with issues",
          description: "Your message was saved and you'll receive confirmation, but there was an issue notifying our team.",
          variant: "default",
        });
      } else {
        toast({
          title: "Message saved!",
          description: "Your message was saved successfully, though there were email delivery issues. We'll still get back to you!",
          variant: "default",
        });
      }

      form.reset();
    } catch (error: any) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error sending message",
        description: error.message || "Something went wrong. Please try again.",
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