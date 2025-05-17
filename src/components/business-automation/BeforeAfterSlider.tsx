
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface BeforeAfterSliderProps {
  className?: string;
  beforeTitle: string;
  afterTitle: string;
  beforeDescription: string;
  afterDescription: string;
  stats: {
    label: string;
    value: string;
  }[];
  autoAnimate?: boolean;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  className,
  beforeTitle,
  afterTitle,
  beforeDescription,
  afterDescription,
  stats,
  autoAnimate = true
}) => {
  const [position, setPosition] = useState(50);
  const [direction, setDirection] = useState<'left' | 'right'>('left');

  // Auto-animation effect
  useEffect(() => {
    if (!autoAnimate) return;
    
    const interval = setInterval(() => {
      setPosition(prev => {
        if (prev >= 80) {
          setDirection('right');
          return 79;
        } else if (prev <= 20) {
          setDirection('left');
          return 21;
        }
        return direction === 'left' ? prev + 1 : prev - 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [autoAnimate, direction]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPosition(parseInt(e.target.value));
  };

  return (
    <div className={cn("w-full max-w-4xl mx-auto", className)}>
      {/* Slider Title */}
      <div className="flex justify-between mb-4">
        <div className="text-center">
          <h4 className="text-lg font-bold">Before: {beforeTitle}</h4>
          <p className="text-monochrome-600 text-sm">{beforeDescription}</p>
        </div>
        <div className="text-center">
          <h4 className="text-lg font-bold">After: {afterTitle}</h4>
          <p className="text-monochrome-600 text-sm">{afterDescription}</p>
        </div>
      </div>
      
      {/* Slider */}
      <div className="relative h-80 bg-monochrome-100 rounded-xl overflow-hidden">
        {/* Before Image (Manual Process) */}
        <div 
          className="absolute inset-0 p-6 flex items-center justify-center bg-monochrome-100"
        >
          <div className="bg-white rounded-lg p-6 shadow-md w-full max-w-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-monochrome-200 rounded-full flex items-center justify-center mr-4">
                <svg className="h-5 w-5 text-monochrome-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold">Manual Process</h3>
                <p className="text-sm text-monochrome-600">Slow, error-prone, resource intensive</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>30+ hours/week on data entry</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>15-20% error rate</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>24+ hour response times</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Limited scalability</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* After Image (Automated Process) */}
        <div 
          className="absolute inset-0 p-6 flex items-center justify-center bg-green-50"
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        >
          <div className="bg-white rounded-lg p-6 shadow-md w-full max-w-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold">Automated Process</h3>
                <p className="text-sm text-monochrome-600">Fast, accurate, scalable</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>5 hours/week monitoring</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>&lt;1% error rate</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Instant responses</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Unlimited scalability</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sliding Control Line */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white z-10 cursor-ew-resize" 
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
            <svg className="h-4 w-4 text-monochrome-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </div>
        
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={handleSliderChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
        />
      </div>
      
      {/* Stats Overlay */}
      <div className="flex flex-wrap justify-center mt-6 gap-3 md:gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white px-3 py-2 md:px-4 md:py-2 rounded-full shadow-md border border-monochrome-100">
            <span className="font-bold text-green-600 text-sm md:text-base">{stat.label}</span>
            <span className="mx-1 text-monochrome-600">•</span>
            <span className="text-sm md:text-base">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
