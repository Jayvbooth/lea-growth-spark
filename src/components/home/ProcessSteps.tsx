
import React from 'react';
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We analyze your business, goals, and current systems to develop a tailored growth plan.",
    icon: (
      <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Custom Solution Design",
    description: "Our team creates a bespoke growth solution combining lead generation and automation strategies.",
    icon: (
      <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Implementation & Integration",
    description: "We set up and integrate all systems, connecting your existing tools into a streamlined workflow.",
    icon: (
      <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    number: "04",
    title: "Optimization & Scaling",
    description: "We continuously analyze data, optimize for better performance, and scale activities as your business grows.",
    icon: (
      <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

const ProcessSteps = () => {
  return (
    <section className="py-20 bg-leadea-navy text-white relative overflow-hidden">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Data-Driven Approach
          </h2>
          <p className="text-lg text-white/80">
            We follow a proven methodology that combines strategic planning, cutting-edge technology, and continuous optimization.
          </p>
        </div>
        
        <div className="relative">
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 card-shadow-hover transition-all duration-300 hover:bg-white/10"
              >
                <div className="bg-gradient-to-br from-leadea-green to-leadea-teal rounded-full h-16 w-16 flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                
                <div className="flex items-center mb-4">
                  <span className="text-sm font-bold text-leadea-gold">STEP</span>
                  <span className="ml-2 text-2xl font-bold text-white">{step.number}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white">
                  {step.title}
                </h3>
                
                <p className="text-white/80">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Connecting Lines - Desktop Only */}
          <div className="hidden lg:block absolute top-[30%] left-[calc(25%-30px)] right-[calc(25%-30px)] h-0.5 bg-gradient-to-r from-leadea-green via-leadea-teal to-leadea-gold"></div>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <Button className="bg-white text-leadea-navy hover:bg-leadea-gold hover:text-white transition-colors px-6 py-3 rounded-lg font-medium shadow-lg">
            Schedule Your Strategy Call
          </Button>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-leadea-green/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-leadea-teal/20 rounded-full blur-3xl opacity-30"></div>
      </div>
    </section>
  );
};

export default ProcessSteps;
