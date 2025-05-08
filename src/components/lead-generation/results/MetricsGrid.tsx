
import React from 'react';

interface Metric {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface MetricsGridProps {
  metrics: Metric[];
}

const MetricsGrid: React.FC<MetricsGridProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {metrics.map((metric, index) => (
        <div 
          key={index} 
          className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] border border-gray-100"
        >
          <div className="bg-green-50 h-16 w-16 rounded-full flex items-center justify-center mb-4">
            {metric.icon}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
            {metric.value}
          </h3>
          <p className="text-gray-800 font-medium">
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MetricsGrid;
