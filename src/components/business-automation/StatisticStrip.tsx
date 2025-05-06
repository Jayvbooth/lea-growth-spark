
import React from 'react';
import { cn } from '@/lib/utils';

interface Statistic {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface StatisticStripProps {
  statistics: Statistic[];
  className?: string;
}

const StatisticStrip: React.FC<StatisticStripProps> = ({ statistics, className }) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statistics.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl p-6 shadow-md border border-monochrome-100 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            {stat.icon && (
              <div className="w-10 h-10 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3">
                {stat.icon}
              </div>
            )}
            
            <p className="text-2xl md:text-3xl font-bold text-green-600 mb-1">{stat.value}</p>
            <p className="text-sm text-monochrome-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticStrip;
