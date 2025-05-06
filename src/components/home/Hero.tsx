
import React from 'react';
import { Button } from "@/components/ui/button";
import AnimatedBeam from "@/components/ui/AnimatedBeam";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden network-grid-bg">
      <div className="container mx-auto container-padding">
        {/* Floating elements for depth */}
        <div className="hidden lg:block absolute top-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-br from-green-100/50 to-green-200/30 animate-float-slow blur-xl"></div>
        <div className="hidden lg:block absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-tr from-green-50/40 to-green-100/20 animate-float blur-xl"></div>
        <div className="hidden lg:block absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-green-200/20 to-green-300/10 animate-float-delay-1 blur-lg"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-green-100 border border-green-200 text-green-700 font-medium text-sm mb-5 animate-fade-in">B2B GROWTH SYSTEMS</span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up" style={{ animationDelay: "100ms" }}>
              <span className="block">
                <span className="text-highlight">10+ qualified</span>
              </span>
              <span className="block">
                <span className="text-fancy">appointments</span> weekly
              </span>
              <span className="text-balance text-monochrome-500 font-medium">or we work for free</span>
            </h1>
            
            <p className="text-lg md:text-xl text-monochrome-700 mb-8 max-w-lg animate-slide-up" style={{ animationDelay: "200ms" }}>
              Data-driven lead generation combined with business automation to accelerate your growth and save valuable time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "300ms" }}>
              <Button className="bg-green-600 text-white hover:bg-green-700 px-6 py-6 rounded-lg font-medium transition-all shadow-md hover:shadow-lg hover:translate-y-[-2px] flex items-center text-lg">
                Book Your Strategy Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" className="border-2 border-monochrome-800 text-monochrome-800 hover:bg-monochrome-800 hover:text-white px-6 py-6 rounded-lg font-medium transition-all text-lg">
                See How It Works
              </Button>
            </div>
          </div>
          
          {/* Right Content - Data Flow Visualization */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-monochrome-50 to-green-50 border border-monochrome-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] animate-fade-in" style={{ animationDelay: "400ms" }}>
            <AnimatedBeam />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative z-10 grid grid-cols-3 gap-5 p-6">
                {/* Connection nodes */}
                <div className="bg-white rounded-xl p-4 card-elevated animate-float">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-2 shadow-sm">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-monochrome-800">Lead Gen</h3>
                </div>
                
                <div className="bg-white rounded-xl p-4 card-elevated animate-float" style={{ animationDelay: '0.2s' }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-2 shadow-sm">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-monochrome-800">Analytics</h3>
                </div>
                
                <div className="bg-white rounded-xl p-4 card-elevated animate-float" style={{ animationDelay: '0.4s' }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-2 shadow-sm">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-monochrome-800">Calendar</h3>
                </div>
                
                <div className="bg-white rounded-xl p-4 card-elevated animate-float" style={{ animationDelay: '0.3s' }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-2 shadow-sm">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-monochrome-800">Email</h3>
                </div>
                
                <div className="bg-white rounded-xl p-4 card-elevated animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-2 shadow-sm">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-monochrome-800">CRM</h3>
                </div>
                
                <div className="bg-white rounded-xl p-4 card-elevated animate-float" style={{ animationDelay: '0.6s' }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-2 shadow-sm">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-monochrome-800">Results</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
