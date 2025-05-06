
import React from 'react';
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    client: "TechFlow Solutions",
    industry: "SaaS",
    size: "50-100 employees",
    challenge: "Manual prospecting and disconnected systems wasting 30+ hours weekly",
    result: "185% increase in lead quality, 25 hours saved weekly",
    icon: "🏢"
  },
  {
    client: "MarketSphere",
    industry: "Marketing Agency",
    size: "10-50 employees",
    challenge: "Poor lead quality resulting in wasted sales efforts and low conversion",
    result: "42% higher conversion rate, 37% revenue growth",
    icon: "🏗️"
  },
  {
    client: "DataCore Analytics",
    industry: "Data Services",
    size: "100-250 employees",
    challenge: "Unable to scale lead generation while maintaining quality",
    result: "3.2x ROI, 15+ qualified appointments weekly",
    icon: "📊"
  }
];

const CaseStudies = () => {
  return (
    <section className="py-20 bg-leadea-gray">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Success Stories
          </h2>
          <p className="text-lg text-leadea-navy opacity-80">
            Real results for businesses like yours.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden card-shadow-hover transition-all duration-300 hover:translate-y-[-5px] border border-leadea-gray/30"
            >
              <div className="p-6 border-b border-leadea-gray/30">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-leadea-green/10 rounded-full flex items-center justify-center text-3xl mr-4">
                    {study.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-leadea-navy">{study.client}</h3>
                    <p className="text-sm text-leadea-navy/70">
                      {study.industry} • {study.size}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-medium text-leadea-navy mb-2">Challenge:</h4>
                  <p className="text-leadea-navy/70 text-sm">
                    {study.challenge}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-leadea-navy mb-2">Results:</h4>
                  <div className="bg-leadea-green/10 rounded-lg p-3">
                    <p className="text-leadea-green font-medium">
                      {study.result}
                    </p>
                  </div>
                </div>
                
                <a 
                  href="#" 
                  className="text-leadea-green font-medium hover:text-leadea-teal transition-colors flex items-center"
                >
                  Read More
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="btn-primary">
            Explore All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
