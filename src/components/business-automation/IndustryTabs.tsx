
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Industry {
  id: string;
  name: string;
  painPoints: string[];
  solutions: string[];
  resultMetric: string;
  icon?: React.ReactNode;
}

interface IndustryTabsProps {
  industries: Industry[];
  className?: string;
}

const IndustryTabs: React.FC<IndustryTabsProps> = ({ industries, className }) => {
  const [activeTab, setActiveTab] = useState(industries[0]?.id || '');

  return (
    <Tabs 
      defaultValue={industries[0]?.id} 
      className={cn("w-full", className)}
      onValueChange={setActiveTab}
    >
      <TabsList className="grid grid-cols-3 sm:grid-cols-4 mb-6">
        {industries.map((industry) => (
          <TabsTrigger 
            key={industry.id} 
            value={industry.id}
            className={cn(
              "data-[state=active]:bg-green-600 data-[state=active]:text-white"
            )}
          >
            {industry.name}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {industries.map((industry) => (
        <TabsContent 
          key={industry.id} 
          value={industry.id}
          className={cn(
            "animate-fade-in",
          )}
        >
          <div className="bg-white rounded-xl p-6 shadow-md border border-monochrome-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h3 className="font-bold mb-2 text-monochrome-800">Pain Points</h3>
                <ul className="space-y-2">
                  {industry.painPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-bold mb-2 text-monochrome-800">Our Solutions</h3>
                <ul className="space-y-2">
                  {industry.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="text-center p-6 bg-green-50 rounded-xl border border-green-100">
                  <h3 className="font-bold text-lg mb-2">Result</h3>
                  <p className="text-2xl font-bold text-green-600">{industry.resultMetric}</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default IndustryTabs;
