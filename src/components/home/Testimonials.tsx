
import React, { useState, useEffect, useRef } from 'react';

// Mock testimonials data
const testimonials = [
  {
    quote: "LEADEA transformed our lead generation process. We're now getting 3x more qualified leads and our sales team is closing deals faster than ever.",
    name: "Alex Thompson",
    position: "CEO",
    company: "DataSync Technologies",
    image: "👨‍💼"
  },
  {
    quote: "The automation solutions saved our team 25+ hours per week on manual tasks. The ROI was visible within the first month.",
    name: "Sophia Chen",
    position: "Operations Director",
    company: "Quantum Solutions",
    image: "👩‍💼"
  },
  {
    quote: "Working with LEADEA gave us access to decision-makers we couldn't reach before. Their data-driven approach made all the difference.",
    name: "Marcus Johnson",
    position: "VP of Sales",
    company: "Elevate Software",
    image: "👨‍💻"
  },
  {
    quote: "The strategy session alone was worth it. They identified gaps in our process we hadn't seen and provided actionable solutions right away.",
    name: "Elena Rodriguez",
    position: "Marketing Director",
    company: "InnoTech Systems",
    image: "👩‍💻"
  },
  {
    quote: "After six months with LEADEA, we've doubled our MRR and cut customer acquisition costs by 40%. Their approach to lead gen is unlike anything we've seen before.",
    name: "David Wilson",
    position: "Founder",
    company: "Growth Accelerator",
    image: "👨‍🚀"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    setActiveIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    setActiveIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    
    setIsAnimating(true);
    setActiveIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Start automatic rotation
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 8000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Pause on hover
  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 8000);
  };

  return (
    <section className="py-20 bg-leadea-gray relative overflow-hidden">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-leadea-navy opacity-80">
            Don't just take our word for it. Hear from the businesses we've helped.
          </p>
        </div>
        
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Testimonial Slider */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="min-w-full bg-white rounded-2xl card-shadow"
                >
                  <div className="p-10 md:p-12">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      {/* Avatar */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-leadea-green/10 rounded-full flex items-center justify-center text-4xl">
                          {testimonial.image}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div>
                        <svg className="h-10 w-10 text-leadea-gold/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        
                        <blockquote className="text-xl md:text-2xl font-medium text-leadea-navy mb-6">
                          "{testimonial.quote}"
                        </blockquote>
                        
                        <div>
                          <h4 className="font-bold text-leadea-navy">{testimonial.name}</h4>
                          <p className="text-leadea-navy/70">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button 
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-leadea-navy p-2 rounded-full shadow-lg transition-all duration-200 z-10"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-leadea-navy p-2 rounded-full shadow-lg transition-all duration-200 z-10"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-leadea-green scale-125' 
                    : 'bg-leadea-navy/20 hover:bg-leadea-navy/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-leadea-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-leadea-green/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Testimonials;
