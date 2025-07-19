import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "react-router-dom";
import { 
  Code, 
  Bot, 
  Zap, 
  Search, 
  Puzzle, 
  ArrowRight, 
  CheckCircle, 
  Star,
  TrendingUp
} from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: "Web Development",
      description: "Full-stack web applications with modern frameworks and technologies.",
      features: ["React.js & Node.js", "Laravel & CodeIgniter", "WordPress Solutions", "Yii2 Framework"]
    },
    {
      icon: <Bot size={40} />,
      title: "AI Solutions",
      description: "Intelligent systems that automate processes and enhance user experiences.",
      features: ["AI-powered websites", "Custom AI integrations", "Third-party API integration", "Machine Learning models"]
    },
    {
      icon: <Zap size={40} />,
      title: "API Development",
      description: "Robust and scalable APIs for mobile and web applications.",
      features: ["RESTful APIs", "GraphQL endpoints", "Real-time solutions", "Database optimization"]
    },
    {
      icon: <Search size={40} />,
      title: "SEO Services",
      description: "Comprehensive SEO strategies to boost your online visibility.",
      features: ["On-page optimization", "Off-page strategies", "Technical SEO", "Performance optimization"]
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Ignite Your Digital
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                Transformation
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: "200ms" }}>
              AgniStack delivers cutting-edge IT solutions from web development to AI integration. 
              Transform your digital vision into reality with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "400ms" }}>
              <Button variant="secondary" size="xl" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-primary-foreground/20 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
              Comprehensive IT solutions tailored to your business needs. From concept to deployment, 
              we've got you covered.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="text-primary">AgniStack?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine technical expertise with creative innovation to deliver solutions 
                that not only meet your requirements but exceed your expectations.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Expert team with 5+ years of experience",
                  "Cutting-edge technologies and frameworks",
                  "Custom solutions tailored to your needs",
                  "24/7 support and maintenance",
                  "Agile development methodology",
                  "Competitive pricing and timely delivery"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="hero" size="lg" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <Star className="text-secondary mr-2" size={24} />
                    <h3 className="text-2xl font-semibold">Client Success</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold mb-2">98%</div>
                      <div className="text-primary-foreground/80">Client Satisfaction</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">100%</div>
                      <div className="text-primary-foreground/80">On-Time Delivery</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">50+</div>
                      <div className="text-primary-foreground/80">Technologies</div>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <TrendingUp className="mr-2" size={20} />
                        <span className="text-primary-foreground/80">Growing Fast</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Let's discuss your requirements and turn your ideas into reality. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Button variant="secondary" size="xl" asChild>
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;