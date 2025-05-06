
import React from 'react';
import MetricsCounter from './MetricsCounter';

interface HighlightProps {
  totalHours: number;
  avgROI: number;
  industriesCovered: number;
  automationsBuilt: number;
}

const HighlightStrip: React.FC<HighlightProps> = ({
  totalHours,
  avgROI,
  industriesCovered,
  automationsBuilt,
}) => {
  return (
    <div className="w-full bg-green-50 py-10 px-4 my-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <MetricsCounter end={totalHours} suffix="+" />
            <p className="text-monochrome-600 mt-2">Total Hours Saved</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center">
              <MetricsCounter end={avgROI} decimals={1} />
              <span className="font-bold text-3xl md:text-4xl">×</span>
            </div>
            <p className="text-monochrome-600 mt-2">Avg. ROI</p>
          </div>
          
          <div className="flex flex-col items-center">
            <MetricsCounter end={industriesCovered} />
            <p className="text-monochrome-600 mt-2">Industries Covered</p>
          </div>
          
          <div className="flex flex-col items-center">
            <MetricsCounter end={automationsBuilt} suffix="+" />
            <p className="text-monochrome-600 mt-2">Automations Built</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightStrip;
