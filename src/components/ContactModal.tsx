import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Mail, 
  Send,
  Sparkles,
  X
} from "lucide-react";

interface ContactModalProps {
  trigger?: React.ReactNode;
}

const ContactModal = ({ trigger }: ContactModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [statusMessage, setStatusMessage] = useState<{
    text: string;
    type: 'success' | 'error';
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);
    
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow" as RequestRedirect
      };

      const response = await fetch("https://mail.agnistack.com/index.php", requestOptions);
      
      if (response.ok) {
        setStatusMessage({
          text: "Message sent successfully! We'll get back to you within 24 hours.",
          type: 'success'
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        });
        // Auto-close modal after success
        setTimeout(() => {
          setIsOpen(false);
          setStatusMessage(null);
        }, 2000);
      } else {
        throw new Error(`Server responded with status: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
      setStatusMessage({
        text: "Failed to send message. Please try again later.",
        type: 'error'
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const defaultTrigger = (
    <Button 
      variant="secondary" 
      size="xl" 
      className="group relative overflow-hidden shadow-glow hover:shadow-[0_0_50px_hsl(var(--secondary)_/_0.5)] transition-all duration-500 animate-pulse-slow"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-accent/20 to-secondary/20 animate-[shimmer_2s_infinite]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      <Mail className="mr-3 group-hover:animate-bounce" size={24} />
      <span className="relative z-10 font-semibold">Quick Contact</span>
      <Sparkles className="ml-3 group-hover:animate-spin transition-transform duration-500" size={20} />
    </Button>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-card/95 backdrop-blur-xl border-primary/20 shadow-2xl animate-scale-in">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-lg"></div>
        <DialogHeader className="relative z-10">
          <DialogTitle className="text-2xl font-bold text-center mb-2">
            Let's Start Your <span className="text-primary animate-pulse">Project</span>
          </DialogTitle>
          <p className="text-muted-foreground text-center">
            Tell us about your vision and we'll make it reality
          </p>
        </DialogHeader>
        
        <div className="relative z-10">
          {statusMessage && (
            <div className={`p-4 rounded-lg mb-6 animate-fade-in ${
              statusMessage.type === 'success' 
                ? 'bg-green-50 text-green-800 border border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800' 
                : 'bg-red-50 text-red-800 border border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800'
            }`}>
              {statusMessage.text}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                <label htmlFor="modal-name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <Input
                  id="modal-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                />
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                <label htmlFor="modal-email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <Input
                  id="modal-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
                <label htmlFor="modal-phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <Input
                  id="modal-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  className="w-full focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                />
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
                <label htmlFor="modal-service" className="block text-sm font-medium mb-2">
                  Service Interested In
                </label>
                <select
                  id="modal-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
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
            
            <div className="animate-fade-in" style={{ animationDelay: "500ms" }}>
              <label htmlFor="modal-message" className="block text-sm font-medium mb-2">
                Project Details *
              </label>
              <Textarea
                id="modal-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                rows={4}
                className="w-full focus:ring-2 focus:ring-primary/50 transition-all duration-300"
              />
            </div>
            
            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="w-full group relative overflow-hidden animate-fade-in hover:shadow-glow transition-all duration-500" 
              style={{ animationDelay: "600ms" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Send size={20} className="mr-2 group-hover:animate-bounce" />
              <span className="relative z-10">Send Message</span>
              <Sparkles className="ml-2 group-hover:animate-spin" size={16} />
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;