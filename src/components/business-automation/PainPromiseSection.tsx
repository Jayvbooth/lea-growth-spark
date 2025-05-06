
import React from 'react';
import { cn } from '@/lib/utils';

interface PainItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface PainPromiseSectionProps {
  painItems: PainItem[];
  promiseTitle?: string;
  promiseDescription: string;
  className?: string;
}

const PainPromiseSection: React.FC<PainPromiseSectionProps> = ({
  painItems,
  promiseTitle = "Our Promise",
  promiseDescription,
  className
}) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {painItems.map((item, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl p-6 shadow-md border border-monochrome-100 transform transition-all duration-300 hover:shadow-lg"
          >
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              {item.icon}
            </div>
            
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-monochrome-600">{item.description}</p>
          </div>
        ))}
        
        <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-xl p-6 shadow-md transform transition-all duration-300 hover:shadow-xl">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h3 className="font-bold text-lg mb-2">{promiseTitle}</h3>
          <p className="text-white/90">{promiseDescription}</p>
          
          <div className="mt-6 pt-6 border-t border-white/20">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-medium">100% Success Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PainPromiseSection;
