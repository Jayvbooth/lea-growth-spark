
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-monochrome-900 to-monochrome-800 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full network-grid-bg opacity-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-500/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-green-500/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/3 right-1/4 w-1/4 h-1/4 bg-green-400/10 rounded-full blur-3xl opacity-20"></div>
      
      {/* Floating accent shapes */}
      <div className="hidden md:block absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-green-400/20 to-green-500/10 animate-float"></div>
      <div className="hidden md:block absolute bottom-1/4 right-1/3 w-24 h-24 rounded-full bg-gradient-to-r from-green-400/20 to-green-500/10 animate-float-delay-1"></div>
      <div className="hidden md:block absolute top-2/3 right-1/4 w-12 h-12 rounded-lg rotate-45 bg-gradient-to-r from-green-400/20 to-green-500/10 animate-float-delay-2"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            Ready for <span className="text-fancy text-green-400">2–5</span> meetings/mo + <span className="text-fancy text-green-400">10+</span> hrs freed?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
            Get a personalized plan that combines powerful lead generation with efficient automation. Book your strategy session today.
          </p>
          
          <Button asChild className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all animate-fade-in flex items-center mx-auto" style={{ animationDelay: "200ms" }}>
            <Link to="/assessment">
              Get My Growth Plan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <p className="mt-8 flex items-center justify-center animate-fade-in" style={{ animationDelay: "300ms" }}>
            <svg className="w-6 h-6 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-white/90">
              Guaranteed Results or We Work for Free
            </span>
          </p>
          
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div className="text-center relative group animate-fade-in" style={{ animationDelay: "400ms" }}>
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300 mb-2">94%</p>
              <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">Client Satisfaction</p>
              <div className="absolute -inset-4 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <div className="text-center relative group animate-fade-in" style={{ animationDelay: "500ms" }}>
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300 mb-2">3.2x</p>
              <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">Average ROI</p>
              <div className="absolute -inset-4 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <div className="text-center relative group animate-fade-in" style={{ animationDelay: "600ms" }}>
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300 mb-2">100%</p>
              <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">Guarantee</p>
              <div className="absolute -inset-4 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
