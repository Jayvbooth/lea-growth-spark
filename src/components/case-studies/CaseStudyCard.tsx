
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export interface CaseStudyCardProps {
  id: string;
  logo: string;
  title: string;
  industry: string;
  metrics: Array<{
    label: string;
    value: string;
  }>;
  teaser: string;
  className?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  id,
  logo,
  title,
  industry,
  metrics,
  teaser,
  className,
}) => {
  return (
    <Card className={cn(
      "overflow-hidden border border-monochrome-100 transition-all duration-300 hover:shadow-card-hover hover:translate-y-[-5px] hover:border-green-300/50",
      className
    )}>
      <CardContent className="p-0">
        <div className="p-5 border-b border-monochrome-100">
          <div className="flex items-center justify-between mb-3">
            <div className="h-10 w-32 flex items-center">
              <img 
                src={logo} 
                alt={`${title} logo`} 
                className="h-10 max-w-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.svg';
                  target.onerror = null;
                }}
              />
            </div>
            <span className="text-xs font-medium bg-monochrome-100 text-monochrome-700 px-3 py-1.5 rounded-full whitespace-nowrap">
              {industry}
            </span>
          </div>
          <h3 className="text-lg font-bold mb-3 line-clamp-2">{title}</h3>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {metrics.map((metric, index) => (
              <span 
                key={index} 
                className="inline-flex items-center text-xs bg-green-100 text-green-700 px-2.5 py-1.5 rounded-full whitespace-nowrap"
              >
                <span className="mr-1">{metric.label}:</span> {metric.value}
              </span>
            ))}
          </div>
          
          <p className="text-monochrome-600 text-sm mb-4 line-clamp-3">
            {teaser}
          </p>
        </div>
        
        <Link 
          to={`/case-studies/${id}`} 
          className="flex items-center justify-between p-3 bg-white hover:bg-monochrome-50 transition-colors text-green-600 font-medium text-sm"
        >
          Read Full Story
          <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default CaseStudyCard;
