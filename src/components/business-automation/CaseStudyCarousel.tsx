
import React from 'react';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CaseStudy {
  clientName: string;
  clientLogo?: string;
  challenge: string;
  solution: string[];
  results: {
    before: string;
    after: string;
    label: string;
  }[];
  testimonial?: string;
  authorName?: string;
  authorRole?: string;
}

interface CaseStudyCarouselProps {
  caseStudies: CaseStudy[];
  className?: string;
}

const CaseStudyCarousel: React.FC<CaseStudyCarouselProps> = ({ caseStudies, className }) => {
  return (
    <div className={cn("w-full", className)}>
      <Carousel className="w-full">
        <CarouselContent>
          {caseStudies.map((caseStudy, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-1">
              <div className="bg-white rounded-xl shadow-md border border-monochrome-100 h-full flex flex-col">
                <div className="p-6 border-b border-monochrome-100">
                  <div className="flex items-center space-x-4 mb-4">
                    {caseStudy.clientLogo && (
                      <img 
                        src={caseStudy.clientLogo} 
                        alt={caseStudy.clientName} 
                        className="h-10 w-auto"
                      />
                    )}
                    <h3 className="font-bold text-lg">{caseStudy.clientName}</h3>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2 text-monochrome-600">Challenge</h4>
                    <p>{caseStudy.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2 text-monochrome-600">Solution</h4>
                    <ul className="space-y-2">
                      {caseStudy.solution.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2 text-monochrome-600">Results</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {caseStudy.results.map((result, i) => (
                        <div key={i} className="bg-monochrome-50 p-3 rounded-lg">
                          <p className="text-xs text-monochrome-600">{result.label}</p>
                          <p className="font-medium">
                            <span className="text-red-500 line-through mr-2">{result.before}</span>
                            <span className="text-green-600">{result.after}</span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {caseStudy.testimonial && (
                  <div className="p-6 bg-monochrome-50 border-t border-monochrome-100 mt-auto">
                    <div className="flex items-start">
                      <svg className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <div>
                        <p className="italic text-monochrome-700 mb-2">{caseStudy.testimonial}</p>
                        {(caseStudy.authorName || caseStudy.authorRole) && (
                          <p className="text-sm font-medium">
                            {caseStudy.authorName}
                            {caseStudy.authorName && caseStudy.authorRole && ", "}
                            {caseStudy.authorRole}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
};

export default CaseStudyCarousel;
