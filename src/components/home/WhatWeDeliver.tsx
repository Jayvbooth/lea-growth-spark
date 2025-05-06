
import React, { useState } from 'react';
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const strategicProcess = [
  {
    title: "Discovery & Analysis",
    description: "In-depth research analyzing your business, industry landscape, competitive positioning, and unique selling points.",
    icon: "🔍"
  },
  {
    title: "Strategic Planning",
    description: "Based on our findings, we develop a comprehensive roadmap designed to capitalize on your unique strengths.",
    icon: "📈"
  },
  {
    title: "Positioning & Messaging",
    description: "We craft compelling messaging frameworks that elevate your brand and resonate with your ideal clients.",
    icon: "💬"
  },
  {
    title: "Implementation",
    description: "Our team executes the strategy with precision, implementing systems designed to convert opportunities.",
    icon: "⚙️"
  },
  {
    title: "Optimization",
    description: "Through continuous data collection and testing, we optimize every element to maximize performance.",
    icon: "📊"
  },
  {
    title: "Scale & Dominate",
    description: "With proven systems in place, we focus on scaling your success to establish market leadership.",
    icon: "🚀"
  }
];

const companyStats = [
  { 
    value: "20+",
    label: "Clients Served"
  },
  { 
    value: "10+",
    label: "Industries"
  },
  { 
    value: "7+",
    label: "Years Experience"
  },
];

const WhatWeDeliver = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-green-600 font-medium mb-2 block">OUR APPROACH</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What We <span className="text-fancy underline decoration-green-500 decoration-2 underline-offset-4">Deliver</span>{" "}
            For Your <span className="italic">Growth</span>
          </h2>
          <p className="text-lg text-monochrome-700 max-w-2xl mx-auto">
            As your strategic growth partner, we implement a proven methodology that combines deep strategy and relentless optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Interactive Process Description */}
          <div>
            <div className="space-y-6">
              {strategicProcess.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex gap-4 p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                    activeStep === index ? 'bg-green-50 shadow-soft' : 'hover:bg-monochrome-50'
                  }`}
                  onClick={() => setActiveStep(activeStep === index ? null : index)}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className={`w-12 h-12 rounded-full ${
                      activeStep === index ? 'bg-green-100' : 'bg-green-50'
                    } flex items-center justify-center text-2xl shadow-soft transition-all duration-300`}>
                      {step.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-monochrome-800 mb-2 flex items-center">
                      {step.title}
                      <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-700 font-medium">
                        STEP {index + 1}
                      </span>
                    </h3>
                    <p className={`text-monochrome-600 transition-all duration-300 ${
                      activeStep === index ? 'max-h-40 opacity-100' : 'max-h-20 sm:max-h-12 overflow-hidden'
                    }`}>
                      {step.description}
                    </p>
                    {activeStep === index && (
                      <div className="mt-2 animate-fade-in">
                        <span className="text-green-600 flex items-center text-sm font-medium">
                          Learn more <ArrowRight className="ml-1 h-4 w-4" />
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <Button className="btn-primary">
                Book Your Strategy Session
              </Button>
            </div>
          </div>
          
          {/* Right: Company Showcase */}
          <div className="relative">
            <div className="card-3d p-8 bg-white relative z-10 hover:shadow-hover transition-all duration-300">
              <div className="mb-8">
                <span className="text-green-600 font-medium">WHO WE ARE</span>
                <h3 className="text-2xl font-bold text-monochrome-800 mt-2">Strategic Growth Partners</h3>
                <p className="text-monochrome-600 mt-3">
                  We combine data-driven lead generation with intelligent business automation to help B2B companies scale efficiently.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                {companyStats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="text-center p-4 bg-monochrome-50 rounded-lg hover:shadow-soft transition-all duration-300 hover:bg-monochrome-100/50"
                  >
                    <div className="text-3xl font-bold text-green-600 mb-1">{stat.value}</div>
                    <div className="text-sm text-monochrome-600">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-monochrome-100 pt-6">
                <h4 className="font-bold text-monochrome-800 mb-3">Why clients choose us:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start group">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-all" />
                    <span className="text-monochrome-600">Performance-based pricing with guaranteed results</span>
                  </li>
                  <li className="flex items-start group">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-all" />
                    <span className="text-monochrome-600">Custom-built solutions for your specific business needs</span>
                  </li>
                  <li className="flex items-start group">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-all" />
                    <span className="text-monochrome-600">Full transparency with real-time performance data</span>
                  </li>
                </ul>
              </div>
              
              {/* Experience Label */}
              <div className="absolute -right-4 -bottom-4 bg-green-50 px-4 py-2 rounded-lg shadow-lg border border-green-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-monochrome-600">Working since</p>
                    <p className="font-bold text-monochrome-800">2016</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 3D Effect Elements */}
            <div className="absolute top-6 right-6 -z-10 w-full h-full bg-monochrome-200 rounded-xl"></div>
            <div className="absolute top-3 right-3 -z-10 w-full h-full bg-monochrome-100 rounded-xl"></div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50 -z-10"></div>
    </section>
  );
};

export default WhatWeDeliver;
