
import React from 'react';
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-monochrome-900 to-monochrome-800 text-white relative overflow-hidden">
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="text-fancy text-green-400">Transform</span> Your Growth Strategy?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Get a personalized plan that combines powerful lead generation with efficient automation. Book your strategy session today.
          </p>
          
          <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-lg text-lg font-medium shadow-lg">
            Book Your Strategy Session
          </Button>
          
          <p className="mt-8 flex items-center justify-center">
            <svg className="w-6 h-6 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-white/90">
              Guaranteed Results or We Work for Free
            </span>
          </p>
          
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400 mb-2">94%</p>
              <p className="text-sm text-white/70">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400 mb-2">3.2x</p>
              <p className="text-sm text-white/70">Average ROI</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400 mb-2">100%</p>
              <p className="text-sm text-white/70">Guarantee</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-500/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-green-500/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1/4 h-1/4 bg-green-400/10 rounded-full blur-3xl opacity-20"></div>
      </div>
    </section>
  );
};

export default CTASection;
