import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Code, Bot, Globe, Smartphone } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Full-stack e-commerce solution built with React.js and Laravel, featuring AI-powered product recommendations.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React.js", "Laravel", "MySQL", "AI Integration"],
      icon: <Globe size={24} />,
      color: "bg-gradient-primary"
    },
    {
      title: "AI Chatbot Integration",
      category: "AI Solutions",
      description: "Intelligent customer service chatbot with natural language processing and automated response system.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      tech: ["OpenAI API", "Node.js", "React", "NLP"],
      icon: <Bot size={24} />,
      color: "bg-gradient-secondary"
    },
    {
      title: "Healthcare Management System",
      category: "Web Application",
      description: "Comprehensive healthcare management platform with patient records, appointments, and analytics.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      tech: ["Laravel", "Vue.js", "PostgreSQL", "Charts.js"],
      icon: <Code size={24} />,
      color: "bg-gradient-accent"
    },
    {
      title: "Mobile API Gateway",
      category: "API Development",
      description: "Scalable API gateway serving multiple mobile applications with authentication and rate limiting.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      tech: ["Node.js", "Express", "Redis", "JWT"],
      icon: <Smartphone size={24} />,
      color: "bg-gradient-primary"
    },
    {
      title: "Real Estate Portal",
      category: "WordPress",
      description: "Custom WordPress solution for real estate listings with advanced search and virtual tours.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      tech: ["WordPress", "Custom Plugins", "Maps API", "SEO"],
      icon: <Globe size={24} />,
      color: "bg-gradient-secondary"
    },
    {
      title: "Analytics Dashboard",
      category: "Data Visualization",
      description: "Interactive analytics dashboard with real-time data processing and beautiful visualizations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["React", "D3.js", "Python", "WebSockets"],
      icon: <Code size={24} />,
      color: "bg-gradient-accent"
    }
  ];

  const categories = ["All", "Web Development", "AI Solutions", "API Development", "WordPress"];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Explore our recent projects and see how we've helped businesses transform their digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                      <Button size="sm" variant="secondary" className="opacity-90">
                        <ExternalLink size={16} className="mr-2" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="opacity-90 bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-primary font-medium">{project.category}</span>
                    <div className={`${project.color} rounded-full p-2 text-white`}>
                      {project.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Project <span className="text-primary">Statistics</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "25+", label: "Technologies Used" },
              { number: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Technologies We <span className="text-primary">Use</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
              We work with cutting-edge technologies to deliver modern, scalable solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "React.js", "Laravel", "Node.js", "WordPress", "CodeIgniter", "Yii2",
              "OpenAI", "AWS", "Docker", "MySQL", "PostgreSQL", "Redis",
              "TypeScript", "PHP", "Python", "GraphQL", "REST API", "WebSocket"
            ].map((tech, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg p-4 text-center hover:shadow-card transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-sm font-medium text-card-foreground group-hover:text-primary transition-colors">
                  {tech}
                </div>
              </div>
            ))}
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
            Let's create something amazing together. Contact us to discuss your project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Button variant="secondary" size="xl" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;