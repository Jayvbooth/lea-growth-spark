
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface FeaturedCase {
  id: string;
  title: string;
  image: string;
  stat: string;
}

interface FeaturedCaseCarouselProps {
  cases: FeaturedCase[];
}

const FeaturedCaseCarousel: React.FC<FeaturedCaseCarouselProps> = ({ cases }) => {
  return (
    <div className="w-full px-4 md:px-0">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {cases.map((caseItem) => (
            <CarouselItem key={caseItem.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <div className="relative w-full h-60 rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10" />
                
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">{caseItem.title}</h3>
                  <p className="font-medium text-green-300 mb-4">{caseItem.stat}</p>
                  
                  <Button asChild size="sm" className="w-fit opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link to={`/case-studies/${caseItem.id}`}>
                      View Case Study
                    </Link>
                  </Button>
                </div>
              </div>
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

export default FeaturedCaseCarousel;
