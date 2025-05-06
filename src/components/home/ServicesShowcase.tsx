
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import AnimatedBeam from "@/components/ui/AnimatedBeam";
import { Link } from 'react-router-dom';

const serviceFeatures = {
  leadGeneration: [
    "AI-powered prospecting that finds your ideal customers",
    "Multi-channel outreach (email, LinkedIn, phone)",
    "Performance-based pricing with guaranteed results",
    "Full transparency with real-time analytics dashboard",
    "Continuous optimization based on data insights"
  ],
  automation: [
    "Custom workflow automation tailored to your business",
    "Integration with your existing tech stack",
    "Automated lead nurturing and follow-up sequences",
    "Data synchronization across all platforms",
    "Scalable solutions that grow with your business"
  ]
};

const ServicesShowcase = () => {
  const [activeTab, setActiveTab] = useState<'leadGeneration' | 'automation'>('leadGeneration');

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Growth Solutions for Forward-Thinking B2B Companies
          </h2>
          <p className="text-lg text-leadea-navy opacity-80">
            Combine powerful lead generation with efficient automation for predictable growth.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-leadea-gray rounded-lg">
            <button
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'leadGeneration'
                  ? 'bg-white text-leadea-green shadow-md'
                  : 'text-leadea-navy hover:text-leadea-green'
              }`}
              onClick={() => setActiveTab('leadGeneration')}
            >
              Lead Generation
            </button>
            <button
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'automation'
                  ? 'bg-white text-leadea-green shadow-md'
                  : 'text-leadea-navy hover:text-leadea-green'
              }`}
              onClick={() => setActiveTab('automation')}
            >
              Business Automation
            </button>
          </div>
        </div>

        {/* Lead Generation Content */}
        <div className={`transition-all duration-500 ${activeTab === 'leadGeneration' ? 'opacity-100' : 'opacity-0 hidden'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
                AI-Powered Lead Generation That Delivers Results
              </h3>
              <p className="text-lg text-leadea-navy opacity-80 mb-8">
                Stop wasting time on low-quality leads. Our performance-based approach guarantees a steady flow of qualified appointments with decision-makers.
              </p>
              
              <ul className="space-y-4 mb-8">
                {serviceFeatures.leadGeneration.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg 
                      className="h-6 w-6 text-leadea-green mr-3 flex-shrink-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-leadea-navy">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="bg-leadea-green/10 px-4 py-3 rounded-lg">
                  <p className="text-3xl font-bold text-leadea-green">78%</p>
                  <p className="text-sm text-leadea-navy">Higher Quality Leads</p>
                </div>
                <div className="bg-leadea-teal/10 px-4 py-3 rounded-lg">
                  <p className="text-3xl font-bold text-leadea-teal">3.2x</p>
                  <p className="text-sm text-leadea-navy">Conversion Rate</p>
                </div>
                <div className="bg-leadea-gold/10 px-4 py-3 rounded-lg">
                  <p className="text-3xl font-bold text-leadea-gold">10+</p>
                  <p className="text-sm text-leadea-navy">Meetings Weekly</p>
                </div>
              </div>

              <Link to="/lead-generation">
                <Button variant="default" className="btn-primary">
                  Learn More
                </Button>
              </Link>
            </div>
            
            <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-leadea-navy/5 to-leadea-teal/10 border border-leadea-navy/10 card-shadow">
              <AnimatedBeam />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-xl p-6 w-full max-w-md card-shadow">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-leadea-navy">Lead Generation Dashboard</h4>
                    <span className="text-xs text-leadea-green px-2 py-1 bg-leadea-green/10 rounded-full">LIVE</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-leadea-gray p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-leadea-navy opacity-70">Total Leads</span>
                        <span className="text-sm font-bold text-leadea-green">+12% ↑</span>
                      </div>
                      <div className="h-4 bg-white rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-leadea-green to-leadea-teal w-[65%]"></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-leadea-navy">Previous: 142</span>
                        <span className="text-xs font-medium text-leadea-navy">Current: 159</span>
                      </div>
                    </div>
                    
                    <div className="bg-leadea-gray p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-leadea-navy opacity-70">Qualified Appointments</span>
                        <span className="text-sm font-bold text-leadea-green">+18% ↑</span>
                      </div>
                      <div className="h-4 bg-white rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-leadea-gold to-leadea-teal w-[75%]"></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-leadea-navy">Previous: 21</span>
                        <span className="text-xs font-medium text-leadea-navy">Current: 27</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-leadea-gray p-3 rounded-lg text-center">
                        <span className="text-xs text-leadea-navy opacity-70">Response Rate</span>
                        <p className="text-lg font-bold text-leadea-green">32%</p>
                      </div>
                      <div className="bg-leadea-gray p-3 rounded-lg text-center">
                        <span className="text-xs text-leadea-navy opacity-70">Meetings Booked</span>
                        <p className="text-lg font-bold text-leadea-teal">42</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Automation Content */}
        <div className={`transition-all duration-500 ${activeTab === 'automation' ? 'opacity-100' : 'opacity-0 hidden'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
                Custom Automation That Saves Time & Drives Growth
              </h3>
              <p className="text-lg text-leadea-navy opacity-80 mb-8">
                Eliminate manual tasks and connect your business systems. Our custom automation solutions reduce busy work and help you scale efficiently.
              </p>
              
              <ul className="space-y-4 mb-8">
                {serviceFeatures.automation.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg 
                      className="h-6 w-6 text-leadea-green mr-3 flex-shrink-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-leadea-navy">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="bg-leadea-green/10 px-4 py-3 rounded-lg">
                  <p className="text-3xl font-bold text-leadea-green">20+</p>
                  <p className="text-sm text-leadea-navy">Hours Saved Weekly</p>
                </div>
                <div className="bg-leadea-teal/10 px-4 py-3 rounded-lg">
                  <p className="text-3xl font-bold text-leadea-teal">45%</p>
                  <p className="text-sm text-leadea-navy">Increased Efficiency</p>
                </div>
                <div className="bg-leadea-gold/10 px-4 py-3 rounded-lg">
                  <p className="text-3xl font-bold text-leadea-gold">3.5x</p>
                  <p className="text-sm text-leadea-navy">ROI Average</p>
                </div>
              </div>

              <Link to="/business-automation">
                <Button variant="default" className="btn-primary">
                  Learn More
                </Button>
              </Link>
            </div>
            
            <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-leadea-navy/5 to-leadea-teal/10 border border-leadea-navy/10 card-shadow">
              <AnimatedBeam />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-xl w-full max-w-md card-shadow">
                  <div className="px-6 py-4 border-b border-leadea-navy/10">
                    <h4 className="font-bold text-leadea-navy">Automation Workflow</h4>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-leadea-navy/10 flex items-center justify-center">
                        <svg className="h-5 w-5 text-leadea-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div className="h-0.5 flex-grow bg-leadea-teal/20 mx-2"></div>
                      <div className="w-10 h-10 rounded-full bg-leadea-teal/10 flex items-center justify-center">
                        <svg className="h-5 w-5 text-leadea-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="pl-5 border-l-2 border-leadea-teal/20 ml-5 mb-4">
                      <div className="bg-leadea-gray p-3 rounded-lg mb-2">
                        <span className="text-xs font-medium text-leadea-navy">Lead enters system</span>
                      </div>
                      <div className="bg-leadea-gray p-3 rounded-lg">
                        <span className="text-xs font-medium text-leadea-navy">Auto-welcome email sent</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-leadea-teal/10 flex items-center justify-center">
                        <svg className="h-5 w-5 text-leadea-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="h-0.5 flex-grow bg-leadea-teal/20 mx-2"></div>
                      <div className="w-10 h-10 rounded-full bg-leadea-green/10 flex items-center justify-center">
                        <svg className="h-5 w-5 text-leadea-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="pl-5 border-l-2 border-leadea-teal/20 ml-5 mb-4">
                      <div className="bg-leadea-gray p-3 rounded-lg mb-2">
                        <span className="text-xs font-medium text-leadea-navy">Meeting scheduled</span>
                      </div>
                      <div className="bg-leadea-gray p-3 rounded-lg">
                        <span className="text-xs font-medium text-leadea-navy">CRM updated automatically</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-leadea-green/10 flex items-center justify-center">
                        <svg className="h-5 w-5 text-leadea-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <Button className="btn-primary">
            Explore Our Approach
          </Button>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-1/4 h-1/4 bg-gradient-to-b from-leadea-green/10 to-transparent rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-1/3 left-0 w-1/4 h-1/4 bg-gradient-to-t from-leadea-teal/10 to-transparent rounded-full blur-3xl opacity-50"></div>
    </section>
  );
};

export default ServicesShowcase;
