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
  TrendingUp,
  Sparkles,
  Globe,
  Users
} from "lucide-react";
import itTechBanner from "@/assets/it-tech-banner.jpg";
import techCircuit from "@/assets/tech-circuit.jpg";
import teamWork from "@/assets/team-work.jpg";
import codingLaptop from "@/assets/coding-laptop.jpg";

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
      <section className="relative min-h-[100vh] bg-gradient-hero text-primary-foreground pt-24 pb-16 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${itTechBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero/70 backdrop-blur-[1px]"></div>
        </div>
        
        {/* Digital Matrix Rain Effect */}
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-primary font-mono text-sm animate-[matrix-rain_10s_linear_infinite]"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              {Array.from({ length: 20 }).map((_, j) => (
                <div key={j} className="mb-2">
                  {Math.random() > 0.5 ? '1' : '0'}
                </div>
              ))}
            </div>
          ))}
        </div>
        
        {/* Animated Tech Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 rounded-2xl overflow-hidden animate-hologram opacity-30 border border-primary/30">
          <img src={techCircuit} alt="" className="w-full h-full object-cover animate-glitch" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
        </div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full overflow-hidden animate-cyber-pulse opacity-40 border-2 border-secondary/50" style={{ animationDelay: "1s" }}>
          <img src={codingLaptop} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-transparent"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-secondary/20 rounded-full animate-neon-glow backdrop-blur-sm border border-secondary" style={{ animationDelay: "2s" }}>
          <div className="w-full h-full flex items-center justify-center">
            <Sparkles className="text-secondary-glow animate-glitch" size={24} />
          </div>
        </div>
        <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-accent/20 rounded-full animate-cyber-pulse backdrop-blur-sm border border-accent" style={{ animationDelay: "3s" }}>
          <div className="w-full h-full flex items-center justify-center">
            <Globe className="text-accent-glow animate-spin-slow" size={20} />
          </div>
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-primary/30 rotate-45 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-8 h-8 bg-accent/30 rounded-full animate-bounce-subtle"></div>
        <div className="absolute top-2/3 left-1/5 w-4 h-4 bg-secondary/30 rounded-sm animate-pulse-slow"></div>

        <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="inline-block animate-fade-in opacity-100" style={{ animationDelay: "0ms" }}>
                  Ignite
                </span>{" "}
                <span className="inline-block animate-fade-in opacity-100" style={{ animationDelay: "200ms" }}>
                  Your
                </span>{" "}
                <span className="inline-block animate-fade-in opacity-100" style={{ animationDelay: "400ms" }}>
                  Digital
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-secondary-glow animate-fade-in opacity-100 animate-pulse-slow" style={{ animationDelay: "600ms" }}>
                  Transformation
                </span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-fade-in-up max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: "300ms" }}>
              AgniStack delivers cutting-edge IT solutions from web development to AI integration. 
              Transform your digital vision into reality with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in" style={{ animationDelay: "600ms" }}>
              <Button variant="secondary" size="xl" className="group shadow-glow hover:shadow-[0_0_50px_hsl(var(--secondary)_/_0.5)] transition-all duration-300" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button variant="hero" size="xl" className="border-2 border-primary-foreground/50 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm animate-neon-glow" asChild>
                <Link to="/portfolio">
                  View Our Work
                  <Sparkles className="ml-2 animate-pulse" size={20} />
                </Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 text-primary-foreground/70 animate-fade-in" style={{ animationDelay: "900ms" }}>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-secondary" />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} className="text-accent" />
                <span>50+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={20} className="text-secondary-glow" />
                <span>100+ Projects Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-primary rounded-full animate-cyber-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary rounded-full animate-neon-glow"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-accent rounded-full animate-hologram"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-scale-in group cursor-pointer" 
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-500 group-hover:scale-105 border border-primary/20 group-hover:border-primary/50 animate-cyber-pulse">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-3 animate-glitch group-hover:animate-neon-glow">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm md:text-base group-hover:text-primary transition-colors">
                    {stat.label}
                  </div>
                </div>
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
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent rounded-full animate-float"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="text-primary">AgniStack?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We combine technical expertise with creative innovation to deliver solutions 
                that not only meet your requirements but exceed your expectations.
              </p>
              
              <div className="space-y-6 mb-10">
                {[
                  "Expert team with 5+ years of experience",
                  "Cutting-edge technologies and frameworks",
                  "Custom solutions tailored to your needs",
                  "24/7 support and maintenance",
                  "Agile development methodology",
                  "Competitive pricing and timely delivery"
                ].map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-4 group animate-fade-in-up" 
                    style={{ animationDelay: `${index * 100 + 300}ms` }}
                  >
                    <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      <CheckCircle className="text-primary flex-shrink-0" size={18} />
                    </div>
                    <span className="text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              
              <Button variant="hero" size="lg" className="shadow-glow hover:shadow-[0_0_40px_hsl(var(--primary)_/_0.4)] transition-all duration-300" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="space-y-8">
                {/* Team Image */}
                <div className="relative group">
                  <div className="rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-glow transition-all duration-500">
                    <img 
                      src={teamWork} 
                      alt="Our team working together" 
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-semibold text-lg">Expert Team</h4>
                      <p className="text-sm opacity-90">Dedicated professionals</p>
                    </div>
                  </div>
                </div>
                
                {/* Stats Card */}
                <div className="bg-gradient-primary rounded-3xl p-8 text-primary-foreground relative overflow-hidden shadow-glow">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full overflow-hidden opacity-30">
                    <img src={techCircuit} alt="" className="w-full h-full object-cover animate-spin-slow" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <Star className="text-secondary mr-3 animate-pulse-slow" size={28} />
                      <h3 className="text-2xl font-semibold">Client Success</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2 animate-bounce-subtle">98%</div>
                        <div className="text-primary-foreground/80 text-sm">Client Satisfaction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2 animate-bounce-subtle" style={{ animationDelay: "0.5s" }}>100%</div>
                        <div className="text-primary-foreground/80 text-sm">On-Time Delivery</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2 animate-bounce-subtle" style={{ animationDelay: "1s" }}>50+</div>
                        <div className="text-primary-foreground/80 text-sm">Technologies</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <TrendingUp className="mr-2 animate-pulse" size={24} />
                        </div>
                        <div className="text-primary-foreground/80 text-sm">Growing Fast</div>
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
            <Button variant="hero" size="xl" className="border-2 border-primary-foreground/50 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm animate-neon-glow" asChild>
              <Link to="/services">
                Explore Services
                <ArrowRight className="ml-2 animate-pulse" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;