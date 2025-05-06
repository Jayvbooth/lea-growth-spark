
import React from 'react';
import { cn } from '@/lib/utils';

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tools: string[];
  className?: string;
  animationDelay?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  tools, 
  className,
  animationDelay 
}) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl p-6 shadow-soft hover:shadow-card-hover transition-all duration-300 hover:translate-y-[-5px]",
        className
      )}
      style={{ animationDelay }}
    >
      <div className="text-green-600 mb-4 text-3xl">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-monochrome-600 mb-4 text-sm">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {tools.map((tool, index) => (
          <span 
            key={index}
            className="text-xs bg-monochrome-100 text-monochrome-700 px-2 py-1 rounded-full"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
