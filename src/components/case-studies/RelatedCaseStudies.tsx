
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface RelatedCase {
  id: string;
  title: string;
  industry: string;
  logo: string;
  teaser: string;
}

interface RelatedCaseStudiesProps {
  cases: RelatedCase[];
}

const RelatedCaseStudies: React.FC<RelatedCaseStudiesProps> = ({ cases }) => {
  if (cases.length === 0) return null;

  return (
    <div className="my-16">
      <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
      
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {cases.map((caseStudy) => (
            <CarouselItem key={caseStudy.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <Link 
                to={`/case-studies/${caseStudy.id}`} 
                className="block bg-white rounded-lg overflow-hidden border border-monochrome-100 hover:shadow-md transition-shadow"
              >
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <img 
                      src={caseStudy.logo} 
                      alt={`${caseStudy.title} logo`}
                      className="h-8 object-contain"
                    />
                    <span className="text-xs bg-monochrome-100 text-monochrome-700 px-2 py-1 rounded-full">
                      {caseStudy.industry}
                    </span>
                  </div>
                  
                  <h3 className="font-bold mb-2">{caseStudy.title}</h3>
                  <p className="text-monochrome-600 text-sm line-clamp-2">{caseStudy.teaser}</p>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </div>
      </Carousel>
    </div>
  );
};

export default RelatedCaseStudies;
