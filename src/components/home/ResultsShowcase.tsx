
import React from 'react';
import { Button } from "@/components/ui/button";

const metrics = [
  {
    value: "78%",
    label: "Higher Quality Leads",
    icon: (
      <svg className="h-8 w-8 text-leadea-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 8l-6-6-6 6m0 0v12m12-12v12" />
      </svg>
    )
  },
  {
    value: "20+",
    label: "Hours Saved Weekly",
    icon: (
      <svg className="h-8 w-8 text-leadea-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    value: "3.5x",
    label: "Average ROI",
    icon: (
      <svg className="h-8 w-8 text-leadea-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    value: "42%",
    label: "Increased Conversion Rate",
    icon: (
      <svg className="h-8 w-8 text-leadea-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
];

const ResultsShowcase = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Data-Driven Results You Can Measure
          </h2>
          <p className="text-lg text-leadea-navy opacity-80">
            We're obsessed with metrics and measurable outcomes. Here's what our clients typically achieve.
          </p>
        </div>
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 card-shadow-hover transition-all duration-300 hover:translate-y-[-5px] border border-leadea-gray/50"
            >
              <div className="bg-leadea-green/10 h-16 w-16 rounded-full flex items-center justify-center mb-4">
                {metric.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-leadea-green mb-2">
                {metric.value}
              </h3>
              <p className="text-leadea-navy font-medium">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
        
        {/* Case Study Highlight */}
        <div className="bg-gradient-to-br from-leadea-navy to-leadea-navy/90 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column - Case Study Details */}
            <div className="p-10 md:p-12">
              <div className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full text-white text-sm font-medium mb-6">
                <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                FEATURED CASE STUDY
              </div>
              
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">
                  🏢
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-bold">TechFlow Solutions</h3>
                  <p className="text-white/70 text-sm">B2B SaaS Company • 50-100 employees</p>
                </div>
              </div>
              
              <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
                From Manual Chaos to Streamlined Growth Machine
              </h4>
              
              <p className="text-white/80 mb-8">
                TechFlow was spending 30+ hours weekly on manual prospecting and data entry, with poor lead quality and a disjointed sales process.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <svg className="h-6 w-6 text-leadea-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-medium">Implemented AI-powered lead generation</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <svg className="h-6 w-6 text-leadea-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-medium">Connected CRM with marketing automation</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <svg className="h-6 w-6 text-leadea-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-medium">Created custom analytics dashboard</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-white text-leadea-navy hover:bg-leadea-gold hover:text-white transition-colors">
                Read Full Case Study
              </Button>
            </div>
            
            {/* Right Column - Results */}
            <div className="bg-white/5 p-10 md:p-12 flex items-center">
              <div className="w-full">
                <h4 className="text-xl font-bold text-white mb-6">
                  Results After 90 Days
                </h4>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">Lead Quality</span>
                      <span className="text-leadea-teal font-bold">+185%</span>
                    </div>
                    <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-leadea-teal rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">Time Saved</span>
                      <span className="text-leadea-teal font-bold">25 hrs/week</span>
                    </div>
                    <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-leadea-teal rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">Sales Conversion</span>
                      <span className="text-leadea-teal font-bold">+42%</span>
                    </div>
                    <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-leadea-teal rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">Revenue Growth</span>
                      <span className="text-leadea-teal font-bold">+37%</span>
                    </div>
                    <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-leadea-teal rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 rounded-lg p-4 border border-white/10">
                  <p className="text-white italic">
                    "LEADEA helped us eliminate manual tasks while significantly improving our lead quality. We're now closing larger deals with better clients, and our team has more time to focus on strategic initiatives."
                  </p>
                  <div className="mt-3 flex items-center">
                    <p className="text-white font-bold">Sarah Johnson</p>
                    <span className="mx-2 text-white/50">•</span>
                    <p className="text-white/70">VP of Sales, TechFlow</p>
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

export default ResultsShowcase;
