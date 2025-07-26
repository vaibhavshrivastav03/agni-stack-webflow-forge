import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Users,
  Zap
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly at info@agnistack.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      value: "info@agnistack.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      value: "123 Tech Hub Street",
      description: "Innovation City, IC 12345"
    },
    {
      icon: <Clock size={24} />,
      title: "Business Hours",
      value: "Mon-Fri: 9AM-6PM",
      description: "Weekend support available"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Zap size={32} />,
      title: "Quick Response",
      description: "We respond to all inquiries within 24 hours"
    },
    {
      icon: <Users size={32} />,
      title: "Expert Team",
      description: "Work directly with experienced developers"
    },
    {
      icon: <MessageSquare size={32} />,
      title: "Free Consultation",
      description: "Get expert advice at no cost"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Ready to start your project? Let's discuss your requirements and create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Send Us a <span className="text-primary">Message</span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="ai-solutions">AI Solutions</option>
                        <option value="api-development">API Development</option>
                        <option value="seo-services">SEO Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                      rows={6}
                      className="w-full"
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                    <Send size={20} className="mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    Contact <span className="text-primary">Information</span>
                  </h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    We're here to help you transform your digital vision into reality. 
                    Reach out to us through any of the following channels.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index} 
                      className="flex items-start space-x-4 p-4 bg-card rounded-lg hover:shadow-card transition-all duration-300 group"
                    >
                      <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                          {info.title}
                        </h3>
                        <p className="text-lg font-medium text-foreground">
                          {info.value}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Why Choose Us */}
                <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
                  <h3 className="text-xl font-bold mb-6">Why Choose AgniStack?</h3>
                  <div className="space-y-4">
                    {whyChooseUs.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="text-secondary flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{item.title}</h4>
                          <p className="text-primary-foreground/80 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. We provide detailed timelines during consultation."
              },
              {
                question: "Do you provide ongoing support and maintenance?",
                answer: "Yes, we offer comprehensive support packages including bug fixes, updates, security monitoring, and feature enhancements."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "We specialize in React.js, Laravel, Node.js, WordPress, AI integrations, and modern web technologies. Our team stays updated with the latest industry trends."
              },
              {
                question: "Can you help with existing projects?",
                answer: "Absolutely! We can audit, improve, or completely rebuild existing applications. We also offer code reviews and optimization services."
              },
              {
                question: "What's your pricing model?",
                answer: "We offer flexible pricing based on project scope - fixed price for defined projects or hourly rates for ongoing work. Contact us for a custom quote."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="bg-card rounded-lg p-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-semibold text-lg mb-3 text-card-foreground">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Ready to transform your business with cutting-edge technology? 
            Get started with a free consultation today.
          </p>
          <Button variant="secondary" size="xl" className="animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Phone className="mr-2" />
            Schedule Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;