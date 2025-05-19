
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef(null);
  
  useEffect(() => {
    // Initialize Typed.js for animated text
    const typed = new Typed(typedRef.current, {
      strings: [
        'lead generation',
        'workflow automation',
        'client onboarding',
        'cold outreach',
        'sales automation',
        'CRM cleanups',
        'follow-up systems',
        'AI SDRs'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 300,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true,
    });

    // Clean up on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  const scrollToWhatWeDeliver = () => {
    const section = document.getElementById('what-we-deliver');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Enhanced background elements with more gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50/20 to-white"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-green-50/70 to-blue-50/30 blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-blue-50/40 to-green-50/30 blur-3xl opacity-50 -z-10"></div>
      
      {/* Creative floating elements */}
      <div className="absolute top-1/4 left-1/5 w-32 h-32 bg-gradient-to-br from-green-100/30 to-blue-100/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/5 w-40 h-40 bg-gradient-to-tl from-green-100/20 to-blue-100/10 rounded-full blur-xl animate-float-delay-1"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-yellow-50/30 to-green-50/20 rounded-full blur-lg animate-float-delay-2"></div>
      
      {/* Main content */}
      <div className="container mx-auto container-padding">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          {/* Hero badge */}
          <div className="relative">
            <span className="inline-block py-1 px-3 rounded-full bg-green-100 border border-green-200 text-green-700 font-medium text-sm mb-5 animate-fade-in">
              B2B GROWTH SYSTEMS
            </span>
          </div>
          
          {/* Main headline with rotating text */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight animate-slide-up relative">
            <div className="mb-4">Your Growth Partner In</div>
            <div className="relative inline-flex items-center justify-center">
              <span className="text-green-600 font-bold min-h-[60px] inline-block" ref={typedRef}></span>
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600 rounded"></div>
              
              {/* Subtle decoration elements around typed text */}
              <Sparkles className="absolute -right-10 -top-10 text-green-400/70 w-6 h-6 animate-pulse" />
            </div>
          </h1>
          
          <p className="text-xl text-monochrome-700 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "200ms" }}>
            Automate your outbound engine. Book 2–5 qualified meetings per month. Save 10+ hours weekly with AI-driven workflows.
          </p>
          
          {/* Stats visualization mini-card with trending arrows */}
          <div className="w-full max-w-md mx-auto mb-10 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-green-100 shadow-sm">
              <div className="grid grid-cols-3 gap-2">
                <div className="flex flex-col items-center">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-green-600">2-5</span>
                    <TrendingUp className="ml-2 h-4 w-4 text-green-500" />
                  </div>
                  <span className="text-xs text-monochrome-600">Weekly Meetings</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-green-600">10+</span>
                    <TrendingUp className="ml-2 h-4 w-4 text-blue-500" />
                  </div>
                  <span className="text-xs text-monochrome-600">Hours Saved</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-green-600">100%</span>
                    <TrendingUp className="ml-2 h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-xs text-monochrome-600">Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "400ms" }}>
            <Button asChild className="bg-green-600 text-white hover:bg-green-700 px-6 py-6 rounded-lg font-medium transition-all shadow-md hover:shadow-lg hover:translate-y-[-2px] flex items-center text-lg">
              <Link to="/assessment">
                Get My Growth Plan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              className="border-2 border-monochrome-800 text-monochrome-800 hover:bg-monochrome-800 hover:text-white px-6 py-6 rounded-lg font-medium transition-all text-lg"
              onClick={scrollToWhatWeDeliver}
            >
              See How It Works
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative visual elements */}
      <div className="hidden md:block absolute bottom-10 left-10 w-24 h-24">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="#36a269" strokeWidth="1" strokeDasharray="5 5" className="animate-spin-slow" style={{ animationDuration: "20s" }}/>
          <circle cx="50" cy="50" r="30" stroke="#56bc85" strokeWidth="1" strokeDasharray="3 3" className="animate-spin-slow" style={{ animationDuration: "15s", animationDirection: "reverse" }}/>
          <circle cx="50" cy="50" r="20" stroke="#8fd8ae" strokeWidth="1" className="animate-pulse" style={{ animationDuration: "4s" }}/>
        </svg>
      </div>
      
      <div className="hidden md:block absolute bottom-10 right-10 w-28 h-28">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full border-t-2 border-green-400/60 rounded-full animate-spin-slow" style={{ animationDuration: "8s" }}></div>
          <div className="absolute top-3 left-3 right-3 bottom-3 border-r-2 border-green-500/60 rounded-full animate-spin-slow" style={{ animationDuration: "12s", animationDirection: "reverse" }}></div>
          <div className="absolute top-6 left-6 right-6 bottom-6 border-b-2 border-green-600/60 rounded-full animate-spin-slow" style={{ animationDuration: "10s" }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
