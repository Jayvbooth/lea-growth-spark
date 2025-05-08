
import React, { useState } from 'react';
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const systemCards = [
  {
    number: 1,
    title: "Integrated",
    description: "No hand-offs—leads auto-flow into your CRM.",
    icon: "🔄"
  },
  {
    number: 2,
    title: "Scalable",
    description: "Add new automations as you win more deals.",
    icon: "📈"
  },
  {
    number: 3,
    title: "Predictable",
    description: "Model ROI up front—no surprises.",
    icon: "🔮"
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
    <section id="what-we-deliver" className="py-20 bg-white relative overflow-hidden">
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

        {/* System Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {systemCards.map((card) => (
            <div key={card.number} className="bg-white rounded-xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 border border-monochrome-100">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-sm mr-3">
                  {card.number}
                </div>
                <h3 className="text-xl font-bold text-monochrome-800">{card.title}</h3>
                <div className="ml-auto text-2xl">{card.icon}</div>
              </div>
              <p className="text-monochrome-600">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Interactive Process Description */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Strategic Process</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-4 rounded-xl transition-all duration-300 cursor-pointer bg-green-50 shadow-soft">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl shadow-soft transition-all duration-300">
                    🔍
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-monochrome-800 mb-2 flex items-center">
                    Discovery & Analysis
                    <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-700 font-medium">
                      STEP 1
                    </span>
                  </h3>
                  <p className="text-monochrome-600">
                    In-depth research analyzing your business, industry landscape, competitive positioning, and unique selling points.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 rounded-xl transition-all duration-300 cursor-pointer hover:bg-monochrome-50">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-2xl shadow-soft transition-all duration-300">
                    ⚙️
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-monochrome-800 mb-2 flex items-center">
                    Implementation
                    <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-700 font-medium">
                      STEP 2
                    </span>
                  </h3>
                  <p className="text-monochrome-600 max-h-12 overflow-hidden">
                    Our team executes the strategy with precision, implementing systems designed to convert opportunities.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 rounded-xl transition-all duration-300 cursor-pointer hover:bg-monochrome-50">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-2xl shadow-soft transition-all duration-300">
                    🚀
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-monochrome-800 mb-2 flex items-center">
                    Scale & Dominate
                    <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-700 font-medium">
                      STEP 3
                    </span>
                  </h3>
                  <p className="text-monochrome-600 max-h-12 overflow-hidden">
                    With proven systems in place, we focus on scaling your success to establish market leadership.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium">
                <Link to="/assessment">
                  Get My Growth Plan
                </Link>
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
