import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

const ServiceCard = ({ icon, title, description, features, delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className="group bg-card border border-border rounded-lg p-6 hover:shadow-card transition-all duration-300 hover:border-primary/30 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-muted-foreground">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:bg-secondary transition-colors"></div>
            {feature}
          </li>
        ))}
      </ul>
      
      <Button 
        variant="outline" 
        size="sm" 
        className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
      >
        Learn More
        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};

export default ServiceCard;