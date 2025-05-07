
import React from 'react';
import { Button } from "@/components/ui/button";
import AnimatedBeam from "@/components/ui/AnimatedBeam";
import { ArrowRight, BarChart2, Zap, Rocket, Database, BrainCircuit, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";

const Hero = () => {
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
          {/* Left Content */}
          <div className="relative z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-green-100 border border-green-200 text-green-700 font-medium text-sm mb-5 animate-fade-in">B2B GROWTH SYSTEMS</span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up" style={{ animationDelay: "100ms" }}>
              <span className="block">
                Scalable <span className="text-fancy text-green-600">Growth</span>
              </span>
              <span className="block">
                Through <span className="text-fancy text-green-600">AI</span> and
              </span>
              <span className="block">
                <span className="text-fancy text-green-600">Automation</span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-monochrome-700 mb-8 max-w-lg animate-slide-up" style={{ animationDelay: "200ms" }}>
              Integrate data-driven lead generation with powerful business automation to accelerate growth while saving valuable time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "300ms" }}>
              <Button asChild className="bg-green-600 text-white hover:bg-green-700 px-6 py-6 rounded-lg font-medium transition-all shadow-md hover:shadow-lg hover:translate-y-[-2px] flex items-center text-lg">
                <Link to="/assessment">
                  Apply to Work With Us
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
            
            {/* Feature Highlights */}
            <div className="grid grid-cols-3 gap-3 mt-10 animate-slide-up" style={{ animationDelay: "400ms" }}>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="flex flex-col items-center p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-monochrome-100 shadow-sm hover:shadow-md transition-all cursor-pointer">
                    <Zap className="h-6 w-6 text-green-600 mb-2" />
                    <span className="text-sm font-medium text-monochrome-800">Lead Gen</span>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-monochrome-800">AI-Powered Lead Generation</h4>
                    <p className="text-sm text-monochrome-600">Identify and connect with your ideal customers using sophisticated data analysis and multi-channel outreach.</p>
                  </div>
                </HoverCardContent>
              </HoverCard>
              
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="flex flex-col items-center p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-monochrome-100 shadow-sm hover:shadow-md transition-all cursor-pointer">
                    <BarChart2 className="h-6 w-6 text-green-600 mb-2" />
                    <span className="text-sm font-medium text-monochrome-800">Automation</span>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-monochrome-800">Business Process Automation</h4>
                    <p className="text-sm text-monochrome-600">Streamline workflows, eliminate manual tasks, and integrate your tech stack for seamless operation.</p>
                  </div>
                </HoverCardContent>
              </HoverCard>
              
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="flex flex-col items-center p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-monochrome-100 shadow-sm hover:shadow-md transition-all cursor-pointer">
                    <Rocket className="h-6 w-6 text-green-600 mb-2" />
                    <span className="text-sm font-medium text-monochrome-800">Growth</span>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-monochrome-800">Scalable Growth Systems</h4>
                    <p className="text-sm text-monochrome-600">Data-driven strategies to accelerate your business growth with measurable ROI and continuous optimization.</p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          
          {/* Right Content - B2B Growth Systems Visualization */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-monochrome-50 to-green-50 border border-monochrome-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] animate-fade-in" style={{ animationDelay: "400ms" }}>
            <AnimatedBeam />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative z-10 w-full max-w-lg px-8">
                <h3 className="text-center font-semibold text-xl text-monochrome-800 mb-8">Integrated B2B Growth Systems</h3>
                
                <div className="grid grid-cols-3 gap-6">
                  <Card className="bg-white/80 backdrop-blur-sm border border-monochrome-100 shadow-lg hover:shadow-xl transition-all animate-float">
                    <CardContent className="p-4 flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                        <BrainCircuit className="h-6 w-6 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-sm text-monochrome-800">AI Lead Generation</h4>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/80 backdrop-blur-sm border border-monochrome-100 shadow-lg hover:shadow-xl transition-all animate-float" style={{ animationDelay: '0.2s' }}>
                    <CardContent className="p-4 flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                        <Database className="h-6 w-6 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-sm text-monochrome-800">Workflow Automation</h4>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/80 backdrop-blur-sm border border-monochrome-100 shadow-lg hover:shadow-xl transition-all animate-float" style={{ animationDelay: '0.4s' }}>
                    <CardContent className="p-4 flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                        <LineChart className="h-6 w-6 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-sm text-monochrome-800">Data-Driven Growth</h4>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex justify-center mt-8">
                  <div className="relative">
                    <svg width="280" height="70" viewBox="0 0 280 70" className="opacity-80">
                      <path d="M10,35 C50,0 230,0 270,35 C230,70 50,70 10,35" fill="none" stroke="rgba(34, 197, 94, 0.3)" strokeWidth="1" strokeDasharray="5,5" />
                      <path d="M10,35 C50,0 230,0 270,35 C230,70 50,70 10,35" fill="none" stroke="rgba(34, 197, 94, 0.8)" strokeWidth="2" strokeDasharray="0" strokeDashoffset="1000" className="animate-[dash_3s_ease-in-out_forwards]" />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium">
                      Continuous Optimization
                    </div>
                  </div>
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
