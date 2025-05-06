
import React, { useState, useEffect, useRef } from 'react';

interface MetricsCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

const MetricsCounter: React.FC<MetricsCounterProps> = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0,
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (startedRef.current || !countRef.current) return;
      
      const rect = countRef.current.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
      
      if (isInView) {
        startedRef.current = true;
        
        const startTime = Date.now();
        const endTime = startTime + duration;
        
        const updateCounter = () => {
          const now = Date.now();
          const progress = Math.min(1, (now - startTime) / duration);
          
          const currentCount = progress * end;
          setCount(currentCount);
          
          if (now < endTime) {
            requestAnimationFrame(updateCounter);
          } else {
            setCount(end);
          }
        };
        
        requestAnimationFrame(updateCounter);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [end, duration]);
  
  const formattedCount = count.toFixed(decimals);
  
  return (
    <div ref={countRef} className="font-bold text-3xl md:text-4xl">
      {prefix}{formattedCount}{suffix}
    </div>
  );
};

export default MetricsCounter;
