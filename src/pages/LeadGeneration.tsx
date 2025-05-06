
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import AnimatedBeam from "@/components/ui/AnimatedBeam";
import CTASection from '@/components/home/CTASection';
import { Check, ArrowRight, ChevronDown } from "lucide-react";
import LogoCarousel from '@/components/lead-generation/LogoCarousel';
import ROICalculator from '@/components/lead-generation/ROICalculator';
import IndustryTabs from '@/components/lead-generation/IndustryTabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LeadGeneration = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* 1. Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
          <div className="container mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative z-10">
                <span className="text-green-600 font-medium mb-4 block">B2B LEAD GENERATION</span>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  AI-Powered <span className="text-highlight">Lead Generation</span> That <span className="text-fancy">Delivers</span> Results
                </h1>
                
                <p className="text-lg text-monochrome-700 mb-8 max-w-lg">
                  Stop wasting time on low-quality leads. Get a steady flow of qualified appointments via LinkedIn & email.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-green-600 text-white hover:bg-green-700 px-6 py-6 rounded-lg font-medium transition-all shadow-md hover:shadow-lg flex items-center text-lg">
                    Book Your Strategy Session
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-6 mt-8">
                  <div className="bg-green-50 px-4 py-3 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">94%</p>
                    <p className="text-sm text-monochrome-700">Client Satisfaction</p>
                  </div>
                  <div className="bg-green-50 px-4 py-3 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">3.2×</p>
                    <p className="text-sm text-monochrome-700">Average ROI</p>
                  </div>
                  <div className="flex items-center bg-green-50 px-4 py-3 rounded-lg">
                    <div className="bg-green-600 p-2 rounded-full mr-2">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-sm text-monochrome-700 font-medium">
                      Guaranteed Results or We Work for Free
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-green-50 to-green-100 border border-monochrome-100 shadow-3d">
                <AnimatedBeam />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-xl p-6 w-full max-w-md card-shadow mx-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-bold text-monochrome-800">Lead Generation Dashboard</h4>
                      <span className="text-xs text-green-600 px-2 py-1 bg-green-50 rounded-full">LIVE</span>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-monochrome-100 p-4 rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-monochrome-700">Total Leads</span>
                          <span className="text-sm font-bold text-green-600">+12% ↑</span>
                        </div>
                        <div className="h-4 bg-white rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-green-600 to-green-400 w-[65%]"></div>
                        </div>
                        <div className="flex justify-between mt-1">
                          <span className="text-xs text-monochrome-700">Previous: 142</span>
                          <span className="text-xs font-medium text-monochrome-800">Current: 159</span>
                        </div>
                      </div>
                      
                      <div className="bg-monochrome-100 p-4 rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-monochrome-700">Qualified Appointments</span>
                          <span className="text-sm font-bold text-green-600">+18% ↑</span>
                        </div>
                        <div className="h-4 bg-white rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-green-500 to-green-300 w-[75%]"></div>
                        </div>
                        <div className="flex justify-between mt-1">
                          <span className="text-xs text-monochrome-700">Previous: 21</span>
                          <span className="text-xs font-medium text-monochrome-800">Current: 27</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-monochrome-100 p-3 rounded-lg text-center">
                          <span className="text-xs text-monochrome-700">Response Rate</span>
                          <p className="text-lg font-bold text-green-600">32%</p>
                        </div>
                        <div className="bg-monochrome-100 p-3 rounded-lg text-center">
                          <span className="text-xs text-monochrome-700">Meetings Booked</span>
                          <p className="text-lg font-bold text-green-500">42</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Client logos carousel */}
          <div className="mt-12">
            <LogoCarousel />
          </div>
          
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-green-100 to-transparent rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-t from-green-50 to-transparent rounded-full blur-3xl opacity-30"></div>
        </section>

        {/* 2. Industry-Specific Solutions */}
        <section className="py-20 bg-monochrome-50">
          <div className="container mx-auto container-padding">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Industry-Specific Lead Generation Solutions
              </h2>
              <p className="text-lg text-monochrome-700">
                Customized approach for your industry's unique challenges and opportunities.
              </p>
            </div>
            
            <IndustryTabs />
          </div>
        </section>

        {/* 3. How Our Lead Generation Works */}
        <section className="py-20">
          <div className="container mx-auto container-padding">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How Our Lead Generation Works
              </h2>
              <p className="text-lg text-monochrome-700">
                We combine AI-powered prospecting with human expertise to deliver high-quality leads that convert.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">AI-Powered Targeting</h3>
                <p className="text-monochrome-700">
                  Our proprietary algorithms analyze 50+ data points to identify your ideal decision-makers based on your successful customers.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Firmographic data analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Technographic profiling</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Intent signal tracking</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">LinkedIn & Email Outreach</h3>
                <p className="text-monochrome-700">
                  Personalized messaging at scale — no manual copy-pasting. Our multi-channel approach reaches prospects where they're most responsive.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Personalized connection requests</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Automated follow-up sequences</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">A/B tested messaging</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Real-Time Analytics</h3>
                <p className="text-monochrome-700">
                  Dashboard with open rates, reply rates, appointment bookings. Full transparency with every campaign.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Live performance tracking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Weekly optimization reports</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Conversion funnel analysis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Integration & Tech Stack */}
        <section className="py-20 bg-monochrome-50">
          <div className="container mx-auto container-padding">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Seamless CRM & Tool Integrations
              </h2>
              <p className="text-lg text-monochrome-700 mb-8">
                Plug into Salesforce, HubSpot, Make, Zapier, and 20+ other platforms in minutes — no developer needed.
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 mt-10">
                {/* Integration logos */}
                <div className="bg-white p-4 rounded-lg w-24 h-24 flex items-center justify-center">
                  <img src="https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" alt="Salesforce" className="h-10" />
                </div>
                <div className="bg-white p-4 rounded-lg w-24 h-24 flex items-center justify-center">
                  <img src="https://cdn.worldvectorlogo.com/logos/hubspot.svg" alt="HubSpot" className="h-10" />
                </div>
                <div className="bg-white p-4 rounded-lg w-24 h-24 flex items-center justify-center">
                  <img src="https://cdn.worldvectorlogo.com/logos/zapier-1.svg" alt="Zapier" className="h-10" />
                </div>
                <div className="bg-white p-4 rounded-lg w-24 h-24 flex items-center justify-center">
                  <img src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" alt="LinkedIn" className="h-10" />
                </div>
                <div className="bg-white p-4 rounded-lg w-24 h-24 flex items-center justify-center">
                  <img src="https://cdn.worldvectorlogo.com/logos/microsoft-outlook-2019-present-.svg" alt="Outlook" className="h-10" />
                </div>
                <div className="bg-white p-4 rounded-lg w-24 h-24 flex items-center justify-center">
                  <img src="https://cdn.worldvectorlogo.com/logos/gmail-icon.svg" alt="Gmail" className="h-10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Lead Generation Case Studies */}
        <section className="py-20">
          <div className="container mx-auto container-padding">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Lead Generation Case Studies
              </h2>
              <p className="text-lg text-monochrome-700">
                Real results for businesses like yours.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Case Study 1 */}
              <div className="bg-white rounded-xl overflow-hidden card-shadow-hover border border-monochrome-100">
                <div className="p-6 border-b border-monochrome-100">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-2xl mr-4">
                      🏢
                    </div>
                    <div>
                      <h3 className="font-bold text-monochrome-800">TechFlow Solutions</h3>
                      <p className="text-sm text-monochrome-600">SaaS • 50-100 employees</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-medium text-monochrome-800 mb-2">Challenge:</h4>
                    <p className="text-monochrome-600 text-sm">
                      Manual prospecting wasting 30+ hours weekly with only 5-7 qualified meetings per month.
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-monochrome-800 mb-2">Solution:</h4>
                    <ul className="text-sm text-monochrome-600 space-y-2">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span>AI-powered targeting of high-fit accounts</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span>Multi-channel outreach automation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span>HubSpot integration for seamless handoffs</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 mb-4">
                    <h4 className="font-medium text-monochrome-800 mb-2">Results:</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-monochrome-600">Meetings/week:</p>
                        <p className="font-bold text-green-600">1-2 → 6-8</p>
                      </div>
                      <div>
                        <p className="text-monochrome-600">Response rate:</p>
                        <p className="font-bold text-green-600">8% → 27%</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-monochrome-600 italic">
                    "We've seen a 42% increase in qualified meetings since working with Leadea. Their targeting is spot-on."
                  </div>
                  <div className="text-xs text-monochrome-500 mt-1">- David Chen, CMO</div>
                </div>
              </div>
              
              {/* Case Study 2 */}
              <div className="bg-white rounded-xl overflow-hidden card-shadow-hover border border-monochrome-100">
                <div className="p-6 border-b border-monochrome-100">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-2xl mr-4">
                      🏗️
                    </div>
                    <div>
                      <h3 className="font-bold text-monochrome-800">MarketSphere</h3>
                      <p className="text-sm text-monochrome-600">Marketing Agency • 10-50 employees</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-medium text-monochrome-800 mb-2">Challenge:</h4>
                    <p className="text-monochrome-600 text-sm">
                      Poor lead quality resulting in wasted sales efforts and low 4% conversion rate.
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-monochrome-800 mb-2">Solution:</h4>
                    <ul className="text-sm text-monochrome-600 space-y-2">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span>Data-driven ideal customer profiling</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span>Personalized LinkedIn outreach campaign</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span>Follow-up sequence optimization</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 mb-4">
                    <h4 className="font-medium text-monochrome-800 mb-2">Results:</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-monochrome-600">Conversion rate:</p>
                        <p className="font-bold text-green-600">4% → 17%</p>
                      </div>
                      <div>
                        <p className="text-monochrome-600">Revenue growth:</p>
                        <p className="font-bold text-green-600">+37%</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-monochrome-600 italic">
                    "Their lead quality is exceptional. We're closing deals faster and with higher values."
                  </div>
                  <div className="text-xs text-monochrome-500 mt-1">- Sarah Johnson, Sales Director</div>
                </div>
              </div>
              
              {/* Case Study 3 */}
              <div className="bg-white rounded-xl overflow-hidden card-shadow-hover border border-monochrome-100">
                <div className="p-6 border-b border-monochrome-100">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-2xl mr-4">
                      📊
                    </div>
                    <div>
                      <h3 className="font-bold text-monochrome-800">DataCore Analytics</h3>
                      <p className="text-sm text-monochrome-600">Data Services • 100-250 employees</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-medium text-monochrome-800 mb-2">Challenge:</h4>
                    <p className="text-monochrome-600 text-sm">
                      Unable to scale lead generation while maintaining quality. Inconsistent results.
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-monochrome-800 mb-2">Solution:</h4>
                    <ul className="text-sm text-monochrome-600 space-y-2">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span>Scalable outreach with quality controls</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span>Salesforce integration for sales handoff</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span>Performance-based pricing model</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 mb-4">
                    <h4 className="font-medium text-monochrome-800 mb-2">Results:</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-monochrome-600">Meetings/week:</p>
                        <p className="font-bold text-green-600">4 → 15+</p>
                      </div>
                      <div>
                        <p className="text-monochrome-600">ROI:</p>
                        <p className="font-bold text-green-600">3.2×</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-monochrome-600 italic">
                    "We're consistently getting 15+ quality meetings weekly. The ROI has been incredible."
                  </div>
                  <div className="text-xs text-monochrome-500 mt-1">- Michael Torres, CEO</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Summary Metrics Banner */}
        <section className="py-16 bg-green-600 text-white">
          <div className="container mx-auto container-padding">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold mb-2">78%</p>
                <p className="text-lg">Higher-Quality Leads</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">3.2×</p>
                <p className="text-lg">Conversion Rate</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">10+</p>
                <p className="text-lg">Meetings Weekly</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">95%</p>
                <p className="text-lg">Average Response Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Interactive ROI Calculator */}
        <section className="py-20">
          <div className="container mx-auto container-padding">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Calculate Your Lead Generation ROI
              </h2>
              <p className="text-lg text-monochrome-700">
                Estimate your 3× ROI in under 90 days.
              </p>
            </div>
            
            <ROICalculator />
          </div>
        </section>

        {/* 8. Frequently Asked Questions */}
        <section className="py-20 bg-monochrome-50">
          <div className="container mx-auto container-padding">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Frequently Asked Questions
                </h2>
              </div>
              
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="bg-white border border-monochrome-200 rounded-lg">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <h3 className="text-lg font-medium text-left">How do you guarantee meetings?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-monochrome-700">
                    <p>
                      We use a performance-based model where we only succeed if you do. If we don't deliver the agreed number of qualified meetings, we continue to work for free until we meet the target. Our refund policy ensures that you're never paying for results you don't receive.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="bg-white border border-monochrome-200 rounded-lg">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <h3 className="text-lg font-medium text-left">Which CRMs & platforms do you integrate with?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-monochrome-700">
                    <p>
                      We integrate seamlessly with all major CRMs including Salesforce, HubSpot, Pipedrive, and Zoho. We also work with Microsoft Outlook, Gmail, LinkedIn, and dozens more platforms via Zapier/Make integrations. Our team will handle the setup process for you.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="bg-white border border-monochrome-200 rounded-lg">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <h3 className="text-lg font-medium text-left">When can I expect to see results?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-monochrome-700">
                    <p>
                      Most clients begin seeing qualified meetings within 4-6 weeks of campaign launch. After our initial setup and calibration period, you can expect a consistent flow of 10+ qualified meetings per month, depending on your package. We provide weekly reporting to track progress throughout.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="bg-white border border-monochrome-200 rounded-lg">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <h3 className="text-lg font-medium text-left">What if we miss our KPI?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-monochrome-700">
                    <p>
                      If we don't hit the agreed KPIs, we work for free until we do. It's that simple. We're fully aligned with your success and only charge when we deliver results. This performance-based approach eliminates your risk and ensures we're motivated to optimize your campaign continuously.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5" className="bg-white border border-monochrome-200 rounded-lg">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <h3 className="text-lg font-medium text-left">Is there a minimum commitment?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-monochrome-700">
                    <p>
                      We offer month-to-month contracts with the ability to cancel anytime after the first 30 days. However, most clients see the best results after 90 days when our targeting and messaging have been fully optimized based on campaign data.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
        
        {/* 9. Final Call to Action */}
        <section className="py-16 bg-gradient-to-br from-green-700 to-green-900 text-white">
          <div className="container mx-auto container-padding">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Ready for 10+ Qualified Meetings?
              </h2>
              
              <Button className="bg-white text-green-700 hover:bg-green-50 px-8 py-6 rounded-lg text-lg font-medium shadow-lg">
                Book Your Strategy Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-monochrome-200 shadow-lg py-3 px-4 md:px-8 z-40">
          <div className="container mx-auto flex justify-between items-center">
            <div className="hidden md:block">
              <p className="text-lg font-bold text-green-700">Ready to boost your lead generation?</p>
            </div>
            <Button className="bg-green-600 text-white hover:bg-green-700 px-6 py-2 rounded-lg font-medium transition-all shadow-sm hover:shadow-md">
              Book Your Strategy Session
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* CTA Section */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LeadGeneration;
