import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "react-router-dom";
import { 
  Code, 
  Bot, 
  Zap, 
  Search, 
  Puzzle, 
  Database,
  Smartphone,
  Globe,
  Cpu,
  Cloud,
  Shield,
  BarChart3
} from "lucide-react";

const Services = () => {
  const webDevServices = [
    {
      icon: <Code size={40} />,
      title: "React.js Development",
      description: "Modern, responsive web applications built with React.js and latest technologies.",
      features: ["Component-based architecture", "State management", "Performance optimization", "SEO-friendly"]
    },
    {
      icon: <Database size={40} />,
      title: "Laravel Development",
      description: "Robust backend solutions using Laravel's elegant PHP framework.",
      features: ["MVC architecture", "Database migrations", "API development", "Security best practices"]
    },
    {
      icon: <Globe size={40} />,
      title: "WordPress Solutions",
      description: "Custom WordPress themes, plugins, and complete website solutions.",
      features: ["Custom themes", "Plugin development", "E-commerce integration", "Performance optimization"]
    },
    {
      icon: <Zap size={40} />,
      title: "Node.js Backend",
      description: "Scalable server-side applications with Node.js and Express.js.",
      features: ["RESTful APIs", "Real-time applications", "Database integration", "Microservices architecture"]
    }
  ];

  const aiServices = [
    {
      icon: <Bot size={40} />,
      title: "AI-Powered Websites",
      description: "Intelligent websites with AI features like chatbots, recommendations, and automation.",
      features: ["Chatbot integration", "Content personalization", "Automated workflows", "Predictive analytics"]
    },
    {
      icon: <Cpu size={40} />,
      title: "Custom AI Solutions",
      description: "Tailored AI implementations for specific business needs and processes.",
      features: ["Machine learning models", "Natural language processing", "Computer vision", "Data analysis"]
    },
    {
      icon: <Puzzle size={40} />,
      title: "Third-Party AI APIs",
      description: "Integration with popular AI services like OpenAI, Google AI, and AWS AI.",
      features: ["OpenAI integration", "Google Cloud AI", "AWS AI services", "Custom API wrappers"]
    },
    {
      icon: <BarChart3 size={40} />,
      title: "AI Analytics",
      description: "Advanced analytics and insights powered by artificial intelligence.",
      features: ["Predictive modeling", "Pattern recognition", "Automated reporting", "Business intelligence"]
    }
  ];

  const otherServices = [
    {
      icon: <Search size={40} />,
      title: "SEO Optimization",
      description: "Comprehensive SEO strategies to improve your search engine rankings.",
      features: ["On-page SEO", "Technical SEO", "Content optimization", "Link building"]
    },
    {
      icon: <Smartphone size={40} />,
      title: "API Development",
      description: "Custom APIs for mobile apps, web applications, and third-party integrations.",
      features: ["RESTful APIs", "GraphQL endpoints", "API documentation", "Rate limiting & security"]
    },
    {
      icon: <Cloud size={40} />,
      title: "Cloud Solutions",
      description: "Cloud deployment, scaling, and infrastructure management services.",
      features: ["AWS deployment", "Azure solutions", "Docker containers", "CI/CD pipelines"]
    },
    {
      icon: <Shield size={40} />,
      title: "Security Services",
      description: "Comprehensive security audits and implementation of security best practices.",
      features: ["Security audits", "Penetration testing", "SSL implementation", "Data encryption"]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Comprehensive IT solutions designed to accelerate your business growth and digital transformation.
            </p>
            <Button variant="hero" size="xl" className="animate-fade-in" style={{ animationDelay: "400ms" }} asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Web Development Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              <span className="text-primary">Web Development</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
              Modern web applications built with the latest technologies and frameworks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {webDevServices.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              <span className="text-primary">AI Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
              Intelligent systems that automate processes and enhance user experiences with AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiServices.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              <span className="text-primary">Additional Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
              Complete digital solutions including SEO, APIs, cloud deployment, and security.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherServices.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
              A proven methodology that ensures successful project delivery from concept to deployment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your requirements, goals, and technical needs through detailed consultation."
              },
              {
                step: "02", 
                title: "Planning",
                description: "Creating detailed project roadmap, timeline, and technical architecture documentation."
              },
              {
                step: "03",
                title: "Development",
                description: "Agile development process with regular updates and milestone deliveries."
              },
              {
                step: "04",
                title: "Deployment",
                description: "Testing, optimization, deployment, and ongoing support for your solution."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-primary-foreground text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
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
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Let's discuss your project requirements and create a custom solution that fits your needs perfectly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Button variant="secondary" size="xl" asChild>
              <Link to="/contact">Request Quote</Link>
            </Button>
            <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;