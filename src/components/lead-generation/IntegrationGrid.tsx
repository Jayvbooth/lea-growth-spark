
import React from 'react';
import { cn } from '@/lib/utils';

interface IntegrationGridProps {
  className?: string;
  title?: string;
}

const integrations = [
  { name: 'Gmail', logo: 'https://cdn.worldvectorlogo.com/logos/gmail-icon.svg' },
  { name: 'Outlook', logo: '/lovable-uploads/f93527f8-c179-427f-b33f-23a0e89395c4.png' },
  { name: 'LinkedIn', logo: 'https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg' },
  { name: 'HubSpot', logo: 'https://cdn.worldvectorlogo.com/logos/hubspot.svg' },
  { name: 'Salesforce', logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg' },
  { name: 'Clay', logo: '/lovable-uploads/c49165ff-c5ae-4c3d-a596-189762e81140.png' },
  { name: 'Smartlead', logo: 'https://smartlead.ai/wp-content/uploads/2020/06/smartlead_favicon.png' },
  { name: 'Instantly', logo: '/lovable-uploads/c59f6d87-8309-4682-9885-d8b36fc0d321.png' },
  { name: 'Zapier', logo: 'https://cdn.worldvectorlogo.com/logos/zapier-1.svg' },
  { name: 'Make', logo: '/lovable-uploads/5b87a8c2-45e5-477b-8dbb-b4ccab1d5036.png' },
  { name: 'Pipedrive', logo: 'https://cdn.worldvectorlogo.com/logos/pipedrive.svg' },
  { name: 'Microsoft Teams', logo: '/lovable-uploads/bd84f938-f672-469c-8d46-fdb3dab50e04.png' },
];

const IntegrationGrid: React.FC<IntegrationGridProps> = ({ 
  className,
  title = "We connect with your favorite tools"
}) => {
  return (
    <div className={cn("py-10", className)}>
      {title && (
        <h3 className="text-2xl font-bold text-center mb-10">{title}</h3>
      )}
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {integrations.map((integration, index) => (
          <div 
            key={index} 
            className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center border border-monochrome-100 hover:shadow-md transition-all"
          >
            <img 
              src={integration.logo} 
              alt={`${integration.name} logo`} 
              className="h-12 w-12 object-contain mb-3"
            />
            <p className="text-sm font-medium text-monochrome-700">{integration.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationGrid;
