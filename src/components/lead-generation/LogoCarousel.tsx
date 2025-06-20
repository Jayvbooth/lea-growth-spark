
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoCarouselProps {
  title?: string;
  className?: string;
  grayscaleHoverEffect?: boolean;
}

const logos = [
  { name: 'Microsoft', src: 'https://cdn.worldvectorlogo.com/logos/microsoft-5.svg' },
  { name: 'Deloitte', src: 'https://cdn.worldvectorlogo.com/logos/deloitte-2.svg' },
  { name: 'Salesforce', src: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg' },
  { name: 'Adobe', src: 'https://cdn.worldvectorlogo.com/logos/adobe-2.svg' },
  { name: 'Oracle', src: 'https://cdn.worldvectorlogo.com/logos/oracle-6.svg' },
  { name: 'IBM', src: 'https://cdn.worldvectorlogo.com/logos/ibm-1.svg' },
  { name: 'SAP', src: 'https://cdn.worldvectorlogo.com/logos/sap-3.svg' },
  { name: 'Cisco', src: 'https://cdn.worldvectorlogo.com/logos/cisco-1.svg' },
];

const LogoCarousel: React.FC<LogoCarouselProps> = ({ 
  title = "Trusted by industry leaders",
  className,
  grayscaleHoverEffect = true
}) => {
  return (
    <div className={cn("relative overflow-hidden py-10", className)}>
      <div className="relative max-w-7xl mx-auto px-4">
        {title && <p className="text-center text-monochrome-600 mb-8">{title}</p>}
        
        <div className="relative">
          {/* Gradient overlays for infinite scroll effect */}
          <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-white to-transparent"></div>
          
          {/* Logo marquee */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll whitespace-nowrap">
              {logos.map((logo, index) => (
                <div key={index} className="mx-8 flex items-center justify-center">
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className={cn(
                      "h-12 w-auto transition-all duration-300",
                      grayscaleHoverEffect ? "opacity-60 grayscale hover:opacity-100 hover:grayscale-0" : ""
                    )}
                  />
                </div>
              ))}
              
              {/* Duplicate logos for infinite effect */}
              {logos.map((logo, index) => (
                <div key={`repeat-${index}`} className="mx-8 flex items-center justify-center">
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className={cn(
                      "h-12 w-auto transition-all duration-300",
                      grayscaleHoverEffect ? "opacity-60 grayscale hover:opacity-100 hover:grayscale-0" : ""
                    )}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
