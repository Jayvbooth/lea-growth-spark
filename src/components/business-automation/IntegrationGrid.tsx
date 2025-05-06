
import React from 'react';
import { cn } from '@/lib/utils';

interface Integration {
  name: string;
  logo: string;
}

interface IntegrationGridProps {
  integrations: Integration[];
  className?: string;
}

const IntegrationGrid: React.FC<IntegrationGridProps> = ({ integrations, className }) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {integrations.map((integration, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg p-4 shadow-sm border border-monochrome-100 flex items-center justify-center h-24 transition-all duration-300 hover:shadow-md filter grayscale hover:grayscale-0"
          >
            <img 
              src={integration.logo} 
              alt={integration.name} 
              className="max-h-12 max-w-[80%]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationGrid;
