
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import AnimatedBeam from "@/components/ui/AnimatedBeam";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
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
      <div className="container mx-auto container-padding">
        {/* Floating elements for depth */}
        <div className="hidden lg:block absolute top-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-br from-green-100/50 to-green-200/30 animate-float-slow blur-xl"></div>
        <div className="hidden lg:block absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-tr from-green-50/40 to-green-100/20 animate-float blur-xl"></div>
        <div className="hidden lg:block absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-green-200/20 to-green-300/10 animate-float-delay-1 blur-lg"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content - Text Block */}
          <div className="relative z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-green-100 border border-green-200 text-green-700 font-medium text-sm mb-5 animate-fade-in">B2B GROWTH SYSTEMS</span>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight animate-slide-up">
              <span className="block">Your B2B Growth Partner in</span>
              <span className="block text-green-600">Lead Gen, Automation & Outreach</span>
            </h1>

            <p className="text-xl mb-3 animate-slide-up" style={{ animationDelay: "100ms" }}>
              Perfect for <span ref={typedRef} className="text-green-600 font-medium"></span>
            </p>
            
            <p className="text-lg md:text-xl text-monochrome-700 mb-8 max-w-lg animate-slide-up" style={{ animationDelay: "200ms" }}>
              Automate your outbound engine. Book 2–5 qualified meetings per month. Save 10+ hours weekly with AI-driven workflows.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "300ms" }}>
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
          
          {/* Right Content - Visual/Animated Workflow */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-monochrome-50 to-green-50 border border-monochrome-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] animate-fade-in" style={{ animationDelay: "400ms" }}>
            <AnimatedBeam />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative z-10 w-full max-w-lg px-8">
                {/* Animated Workflow Visualization */}
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-monochrome-100 shadow-lg animate-float">
                  <h3 className="font-medium text-lg mb-4 text-monochrome-800">Your Growth System</h3>
                  
                  <div className="space-y-6">
                    {/* Step 1 */}
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                        <span className="font-medium text-green-700">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-monochrome-800 mb-1">AI-Powered Lead Generation</h4>
                        <div className="h-2 w-full bg-monochrome-100 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full animate-pulse" style={{width: '85%'}}></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Step 2 */}
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                        <span className="font-medium text-green-700">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-monochrome-800 mb-1">Automated Workflows</h4>
                        <div className="h-2 w-full bg-monochrome-100 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full animate-pulse" style={{width: '70%', animationDelay: '0.5s'}}></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Step 3 */}
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                        <span className="font-medium text-green-700">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-monochrome-800 mb-1">Data-Driven Optimization</h4>
                        <div className="h-2 w-full bg-monochrome-100 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full animate-pulse" style={{width: '60%', animationDelay: '1s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-monochrome-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-monochrome-600">Meetings Generated</p>
                        <p className="font-bold text-xl text-green-600">2-5 per month</p>
                      </div>
                      <div>
                        <p className="text-sm text-monochrome-600">Hours Saved</p>
                        <p className="font-bold text-xl text-green-600">10+ weekly</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Network lines effect in the background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
        <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-green-500 to-transparent"></div>
        <div className="absolute left-3/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-green-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
