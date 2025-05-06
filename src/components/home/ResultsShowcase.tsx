
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const metrics = [
  {
    value: "78%",
    label: "Higher Quality Leads",
    icon: (
      <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 8l-6-6-6 6m0 0v12m12-12v12" />
      </svg>
    )
  },
  {
    value: "20+",
    label: "Hours Saved Weekly",
    icon: (
      <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    value: "3.5x",
    label: "Average ROI",
    icon: (
      <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    value: "42%",
    label: "Increased Conversion Rate",
    icon: (
      <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
];

const caseStudies = [
  {
    id: "techflow",
    name: "TechFlow Solutions",
    industry: "B2B SaaS Company",
    size: "50-100 employees",
    challenge: "Manual prospecting and data entry consuming 30+ hours weekly",
    results: [
      { metric: "Lead Quality", value: "+185%" },
      { metric: "Time Saved", value: "25 hrs/week" },
      { metric: "Sales Conversion", value: "+42%" },
      { metric: "Revenue Growth", value: "+37%" }
    ],
    quote: "LEADEA helped us eliminate manual tasks while significantly improving our lead quality. We're now closing larger deals with better clients, and our team has more time to focus on strategic initiatives.",
    author: "Sarah Johnson",
    position: "VP of Sales",
    emoji: "🏢"
  },
  {
    id: "marketsphere",
    name: "MarketSphere",
    industry: "Marketing Agency",
    size: "10-50 employees",
    challenge: "Poor lead quality resulting in wasted sales efforts and low conversion rates",
    results: [
      { metric: "Qualified Meetings", value: "+120%" },
      { metric: "Deal Size", value: "+35%" },
      { metric: "Close Rate", value: "+42%" },
      { metric: "Pipeline Value", value: "+68%" }
    ],
    quote: "The quality of leads we now receive has transformed our business. Our sales team is more productive and our conversion rates have increased dramatically.",
    author: "Michael Chen",
    position: "CEO",
    emoji: "🏗️"
  },
  {
    id: "datacore",
    name: "DataCore Analytics",
    industry: "Data Services",
    size: "100-250 employees",
    challenge: "Unable to scale lead generation while maintaining quality standards",
    results: [
      { metric: "Weekly Appointments", value: "15+" },
      { metric: "ROI", value: "3.2x" },
      { metric: "Team Efficiency", value: "+48%" },
      { metric: "Annual Growth", value: "+22%" }
    ],
    quote: "LEADEA's systems allowed us to scale our outreach without sacrificing quality. We're now booking more meetings with better prospects than ever before.",
    author: "Rebecca Torres",
    position: "Growth Director",
    emoji: "📊"
  }
];

const ResultsShowcase = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState(caseStudies[0].id);
  const currentCase = caseStudies.find(cs => cs.id === activeCaseStudy) || caseStudies[0];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Data-Driven Results You Can <span className="text-green-600">Measure</span>
          </h2>
          <p className="text-lg text-gray-700">
            We're obsessed with metrics and measurable outcomes. Here's what our clients typically achieve.
          </p>
        </div>
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] border border-gray-100"
            >
              <div className="bg-green-50 h-16 w-16 rounded-full flex items-center justify-center mb-4">
                {metric.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                {metric.value}
              </h3>
              <p className="text-gray-800 font-medium">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
        
        {/* Case Study Selector */}
        <div className="mb-10 flex flex-wrap gap-3 justify-center">
          {caseStudies.map((study) => (
            <button
              key={study.id}
              onClick={() => setActiveCaseStudy(study.id)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-colors border", 
                activeCaseStudy === study.id 
                  ? "bg-green-600 text-white border-green-600" 
                  : "bg-white text-gray-700 border-gray-200 hover:bg-green-50"
              )}
            >
              {study.name}
            </button>
          ))}
        </div>
        
        {/* Case Study Card */}
        <Card className="overflow-hidden rounded-2xl border-0 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column - Case Study Details */}
            <div className="bg-gray-900 p-8 md:p-12 text-white">
              <div className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full text-white text-sm font-medium mb-6">
                <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                FEATURED CASE STUDY
              </div>
              
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">
                  {currentCase.emoji}
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-bold">{currentCase.name}</h3>
                  <p className="text-gray-300 text-sm">{currentCase.industry} • {currentCase.size}</p>
                </div>
              </div>
              
              <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
                From Manual Chaos to Streamlined Growth
              </h4>
              
              <p className="text-gray-300 mb-8">
                {currentCase.challenge}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-lg mt-1">
                    <Check className="h-4 w-4 text-green-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-white">Implemented AI-powered lead generation</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-lg mt-1">
                    <Check className="h-4 w-4 text-green-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-white">Connected CRM with marketing automation</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-lg mt-1">
                    <Check className="h-4 w-4 text-green-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-white">Created custom analytics dashboard</p>
                  </div>
                </div>
              </div>
              
              <Button 
                className="bg-white text-gray-900 hover:bg-green-500 hover:text-white transition-colors"
                onClick={() => window.open(`/case-studies/${currentCase.id}`, '_self')}
              >
                Read Full Case Study <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            
            {/* Right Column - Results */}
            <div className="bg-white p-8 md:p-12">
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                Results After 90 Days
              </h4>
              
              <div className="space-y-6">
                {currentCase.results.map((result, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{result.metric}</span>
                      <span className="text-green-600 font-bold">{result.value}</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-600 rounded-full" 
                        style={{ width: `${75 + (index * 5)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-100">
                <p className="text-gray-700 italic">
                  "{currentCase.quote}"
                </p>
                <div className="mt-3 flex items-center">
                  <p className="text-gray-900 font-bold">{currentCase.author}</p>
                  <span className="mx-2 text-gray-400">•</span>
                  <p className="text-gray-600">{currentCase.position}, {currentCase.name}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            onClick={() => window.open('/case-studies', '_self')}
          >
            View All Case Studies <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcase;
