
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ROICalculator from '@/components/lead-generation/ROICalculator';
import IndustryTabs from '@/components/lead-generation/IndustryTabs';
import LogoCarousel from '@/components/lead-generation/LogoCarousel';
import IntegrationGrid from '@/components/lead-generation/IntegrationGrid';
import LeadGenSolutions from '@/components/lead-generation/LeadGenSolutions';
import ClientLogoCarousel from '@/components/home/ClientLogoCarousel';
import CTASection from '@/components/home/CTASection';
import CaseStudySelector from '@/components/lead-generation/results/CaseStudySelector';

import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const LeadGeneration = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { label: "Avg. Deal Value", value: "$15,000" },
    { label: "Satisfaction Guarantee", value: "100%" },
    { label: "Meetings per Month", value: "25+" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-white to-monochrome-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-green-600 font-medium mb-4 block">LEAD GENERATION</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  <span className="block">Generate Qualified</span>
                  <span className="block">B2B <span className="text-green-600">Appointments</span></span>
                  <span className="block">That Close</span>
                </h1>
                <p className="text-lg text-monochrome-700 mb-8 max-w-lg">
                  Our performance-based lead generation combines AI and human expertise to deliver high-quality meetings with decision-makers in your target market.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white px-4 py-3 rounded-lg shadow-sm border border-monochrome-100">
                      <p className="text-2xl font-bold text-green-600">{stat.value}</p>
                      <p className="text-sm text-monochrome-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                    <a href="#calculator">Calculate Your ROI</a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="#how-it-works">How It Works</a>
                  </Button>
                </div>
              </div>
              
              <div className="relative mt-8 lg:mt-0">
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-monochrome-100">
                  <div className="flex justify-between items-center mb-5">
                    <h3 className="text-lg font-bold">Lead Generation Dashboard</h3>
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">LIVE</span>
                  </div>
                  
                  <div className="space-y-5">
                    <div className="bg-monochrome-50 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Monthly Target</span>
                        <span className="text-sm font-medium text-green-600">80% Complete</span>
                      </div>
                      <div className="h-2 bg-monochrome-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-monochrome-50 p-3 rounded-lg">
                        <span className="text-xs text-monochrome-600 block mb-1">Qualified Meetings</span>
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-bold">16</span>
                          <span className="text-xs text-green-600 font-medium">+4 this week</span>
                        </div>
                      </div>
                      <div className="bg-monochrome-50 p-3 rounded-lg">
                        <span className="text-xs text-monochrome-600 block mb-1">Pipeline Value</span>
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-bold">$120K</span>
                          <span className="text-xs text-green-600 font-medium">↑ 12%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-monochrome-50 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Recent Meetings</span>
                        <a href="#" className="text-xs font-medium text-green-600">View all</a>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                              <span className="text-xs font-bold text-green-600">AC</span>
                            </div>
                            <span className="text-sm">Acme Corp</span>
                          </div>
                          <span className="text-xs text-monochrome-500">Today</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                              <span className="text-xs font-bold text-blue-600">TI</span>
                            </div>
                            <span className="text-sm">Tech Innovations</span>
                          </div>
                          <span className="text-xs text-monochrome-500">Yesterday</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full">View Full Dashboard</Button>
                  </div>
                </div>
                
                {/* Badge */}
                <div className="absolute -bottom-4 right-10 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg">
                  <p className="text-sm font-medium">100% Satisfaction Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Client Logos */}
        <section className="py-10">
          <ClientLogoCarousel title="Companies we've helped grow" />
        </section>
        
        {/* Lead Generation Solutions */}
        <LeadGenSolutions />

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How Our Lead Generation Works</h2>
              <p className="text-lg text-monochrome-700">
                We combine advanced technology with human expertise to deliver qualified meetings with decision-makers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md border border-monochrome-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-green-600 text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Identify Target Accounts</h3>
                <p className="text-monochrome-600 mb-4">
                  We research and build a custom list of ideal prospect companies based on your criteria and business goals.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Industry & market segment targeting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Company size & revenue filters</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Decision-maker identification</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-monochrome-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-green-600 text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Multi-Channel Outreach</h3>
                <p className="text-monochrome-600 mb-4">
                  We execute personalized outreach sequences across email, LinkedIn, and phone to connect with key decision-makers.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Custom messaging tailored to your ICP</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Automated follow-up sequences</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">A/B testing for optimization</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-monochrome-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-green-600 text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Qualified Meetings</h3>
                <p className="text-monochrome-600 mb-4">
                  We qualify, schedule, and prepare briefing documents for each meeting to ensure high-quality conversations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Calendar integration & scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Prospect research & briefing docs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">CRM integration & reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* ROI Calculator */}
        <section id="calculator" className="py-20 bg-monochrome-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Calculate Your Potential ROI</h2>
              <p className="text-lg text-monochrome-700">
                See the potential revenue impact of our lead generation services for your business.
              </p>
            </div>
            
            <ROICalculator />
          </div>
        </section>

        {/* Industry Specific */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Industry-Specific Lead Generation</h2>
              <p className="text-lg text-monochrome-700">
                We understand the unique challenges and opportunities in your industry.
              </p>
            </div>
            
            <IndustryTabs />
          </div>
        </section>
        
        {/* Results & Case Studies */}
        <section className="py-20 bg-monochrome-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Real Results for Real Businesses</h2>
              <p className="text-lg text-monochrome-700">
                See how our lead generation services have transformed these businesses.
              </p>
            </div>
            
            <CaseStudySelector />
          </div>
        </section>
        
        {/* Integrations */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <IntegrationGrid />
          </div>
        </section>
        
        {/* CTA Section */}
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default LeadGeneration;
