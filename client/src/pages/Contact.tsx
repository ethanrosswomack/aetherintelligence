import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PageLayout } from "@/components/layout/PageLayout";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
    },
    onError: () => {
      toast({
        title: "Unable to send message",
        description: "Please try again later or email us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <PageLayout>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-emerald-500" />
            </div>
            <h1 
              className="text-3xl font-bold text-foreground mb-4"
              data-testid="text-success-title"
            >
              Message Received
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Thank you for your inquiry. We will review your message and 
              respond within 3-5 business days if appropriate.
            </p>
            <Button 
              variant="outline"
              onClick={() => setIsSubmitted(false)}
              data-testid="button-send-another"
            >
              Send Another Message
            </Button>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <h1 
                className="text-4xl font-bold text-foreground mb-6"
                data-testid="text-page-title"
              >
                Contact
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-8">
                For substantive inquiries about Aether Intelligence capabilities, 
                research collaboration, or system consultation.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    Email
                  </h3>
                  <p className="text-muted-foreground">
                    contact@aetherintelligence.net
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    Response Time
                  </h3>
                  <p className="text-muted-foreground">
                    We respond to qualified inquiries within 3-5 business days.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    What to Include
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A clear description of your inquiry, relevant context, 
                    and what you hope to accomplish. Specificity enables 
                    meaningful response.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <Card className="p-8 bg-card border-card-border" data-testid="card-contact-form">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your name" 
                                data-testid="input-name"
                                {...field} 
                              />
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
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input 
                                type="email"
                                placeholder="you@example.com" 
                                data-testid="input-email"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="organization"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Organization (Optional)</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your organization" 
                              data-testid="input-organization"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Brief description of your inquiry" 
                              data-testid="input-subject"
                              {...field} 
                            />
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
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe your inquiry, relevant context, and what you hope to accomplish..."
                              className="min-h-[150px] resize-none"
                              data-testid="input-message"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={mutation.isPending}
                      data-testid="button-submit"
                    >
                      {mutation.isPending ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Inquiry
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
