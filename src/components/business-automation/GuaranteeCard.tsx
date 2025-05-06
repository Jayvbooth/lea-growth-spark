
import React from 'react';
import { cn } from '@/lib/utils';

interface GuaranteeCardProps {
  title: string;
  description: string;
  features?: string[];
  className?: string;
}

const GuaranteeCard: React.FC<GuaranteeCardProps> = ({
  title,
  description,
  features = [],
  className
}) => {
  return (
    <div className={cn("w-full max-w-3xl mx-auto", className)}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-200 transform transition-all hover:shadow-2xl">
        <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 text-white text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h3 className="text-xl font-bold">Our Guarantee</h3>
          </div>
          <p className="text-2xl font-bold">{title}</p>
        </div>
        
        <div className="p-6">
          <p className="text-monochrome-700 mb-6">{description}</p>
          
          {features.length > 0 && (
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="px-6 py-4 bg-green-50 border-t border-green-200">
          <div className="flex items-center">
            <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-monochrome-800 font-medium">60-day performance guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeCard;
