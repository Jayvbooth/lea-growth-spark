
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tools?: string[];
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  tools = [],
  className
}) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl p-6 shadow-md border border-monochrome-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-monochrome-600 mb-4">{description}</p>
      
      {tools.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {tools.map((tool, index) => (
            <span key={index} className="text-xs bg-monochrome-100 px-2 py-1 rounded-full">
              {tool}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
