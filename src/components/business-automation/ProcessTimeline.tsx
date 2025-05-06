
import React from 'react';
import { cn } from '@/lib/utils';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
  className?: string;
}

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ steps, className }) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="relative group"
          >
            {/* Connection Line (except for last item) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-monochrome-200 z-0 transform -translate-x-1/2">
                <div 
                  className="absolute top-0 left-0 h-full bg-green-500 transition-all duration-700" 
                  style={{ 
                    width: "0%", 
                  }}
                />
              </div>
            )}
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-monochrome-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative z-10">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-700 font-bold text-lg">{step.number}</span>
              </div>
              
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-monochrome-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
