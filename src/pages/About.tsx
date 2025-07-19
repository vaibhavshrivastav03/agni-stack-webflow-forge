import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  Users, 
  Award, 
  Code2, 
  Lightbulb,
  Heart,
  Zap
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Lightbulb size={32} />,
      title: "Innovation",
      description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions."
    },
    {
      icon: <Heart size={32} />,
      title: "Client-Centric",
      description: "Your success is our priority. We build lasting relationships through exceptional service."
    },
    {
      icon: <Award size={32} />,
      title: "Quality",
      description: "We maintain the highest standards in code quality, design, and project delivery."
    },
    {
      icon: <Zap size={32} />,
      title: "Agility",
      description: "Fast, flexible, and responsive development that adapts to your changing needs."
    }
  ];

  const team = [
    {
      name: "Technical Leadership",
      role: "Full-Stack Development",
      description: "Expert team specializing in modern web technologies and frameworks."
    },
    {
      name: "AI Specialists",
      role: "Artificial Intelligence",
      description: "Innovative AI solutions and machine learning implementations."
    },
    {
      name: "Design Team",
      role: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces that users love."
    },
    {
      name: "DevOps Engineers",
      role: "Infrastructure",
      description: "Reliable deployment, scaling, and maintenance of your applications."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              About <span className="text-primary">AgniStack</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
              We are a passionate team of developers, designers, and innovators dedicated to 
              transforming your digital vision into powerful, scalable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground h-full">
                <Target size={48} className="mb-6 text-secondary" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-primary-foreground/90 leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and digital transformation. We believe in making complex technology 
                  accessible and valuable for every organization.
                </p>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="bg-gradient-accent rounded-2xl p-8 text-accent-foreground h-full">
                <Eye size={48} className="mb-6 text-secondary" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg text-accent-foreground/90 leading-relaxed">
                  To be the leading IT partner that bridges the gap between imagination and 
                  implementation, creating digital experiences that inspire and transform 
                  industries worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
                Our <span className="text-primary">Story</span>
              </h2>
              <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "200ms" }}>
                Founded with a vision to democratize technology and make it accessible to businesses of all sizes.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card animate-fade-in" style={{ animationDelay: "400ms" }}>
              <div className="flex items-start space-x-4 mb-6">
                <Code2 size={32} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">The Beginning</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    AgniStack was born from a simple observation: many businesses struggle to harness 
                    the full potential of technology. Our founders, experienced developers and tech 
                    enthusiasts, decided to bridge this gap by creating solutions that are both 
                    powerful and accessible.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 mb-6">
                <Users size={32} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">Growing Together</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Over the years, we've grown from a small team to a diverse group of specialists. 
                    Each project has taught us something new, and every client has helped shape our 
                    approach to delivering exceptional digital solutions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Zap size={32} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">The Future</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Today, we continue to push boundaries with AI integration, modern web technologies, 
                    and innovative development practices. Our commitment remains the same: delivering 
                    technology solutions that truly make a difference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
              The principles that guide our work and shape our relationships with clients and partners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-primary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
              A diverse group of talented professionals passionate about creating exceptional digital experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-card rounded-lg p-6 text-center group hover:shadow-card transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary text-sm mb-3 font-medium">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
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
            Let's Work Together
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Ready to transform your digital presence? We'd love to hear about your project 
            and discuss how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Button variant="secondary" size="xl" asChild>
              <Link to="/contact">Start a Project</Link>
            </Button>
            <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;