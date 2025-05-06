
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import AnimatedBeam from "@/components/ui/AnimatedBeam";
import CTASection from '@/components/home/CTASection';

const LeadGeneration = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
          <div className="container mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative z-10">
                <span className="text-green-600 font-medium mb-4 block">B2B LEAD GENERATION</span>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  <span className="block">
                    AI-Powered <span className="text-highlight">Lead Generation</span>
                  </span>
                  <span className="block">
                    That <span className="text-fancy">Delivers</span> Results
                  </span>
                </h1>
                
                <p className="text-lg text-monochrome-700 mb-8 max-w-lg">
                  Stop wasting time on low-quality leads. Our performance-based approach guarantees 
                  a steady flow of qualified appointments with decision-makers.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-green-600 text-white hover:bg-green-700 px-6 py-6 rounded-lg font-medium transition-all shadow-md hover:shadow-lg flex items-center text-lg">
                    Book Your Strategy Session
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
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
          
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-green-100 to-transparent rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-t from-green-50 to-transparent rounded-full blur-3xl opacity-30"></div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-monochrome-50">
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
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">AI-Powered Targeting</h3>
                <p className="text-monochrome-700">
                  Our proprietary algorithms identify ideal prospects based on 50+ data points and your best customers.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Multi-Channel Outreach</h3>
                <p className="text-monochrome-700">
                  We engage prospects via email, LinkedIn, and phone using personalized messaging that resonates.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Real-Time Analytics</h3>
                <p className="text-monochrome-700">
                  Track campaign performance with our dashboard that shows real-time metrics and conversion rates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20">
          <div className="container mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Proven Results For <span className="gradient-text">B2B Companies</span>
                </h2>
                
                <p className="text-lg text-monochrome-700 mb-8">
                  Our clients see measurable results within the first 30 days. We guarantee quality 
                  meetings with decision-makers or we work for free.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>78% higher quality leads compared to traditional methods</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>3.2x higher conversion rate from lead to opportunity</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>10+ qualified appointments weekly, guaranteed</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>100% performance-based pricing with guaranteed results</span>
                  </li>
                </ul>
                
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="bg-green-50 px-4 py-3 rounded-lg">
                    <p className="text-3xl font-bold text-green-600">78%</p>
                    <p className="text-sm text-monochrome-700">Higher Quality Leads</p>
                  </div>
                  <div className="bg-green-50 px-4 py-3 rounded-lg">
                    <p className="text-3xl font-bold text-green-600">3.2x</p>
                    <p className="text-sm text-monochrome-700">Conversion Rate</p>
                  </div>
                  <div className="bg-green-50 px-4 py-3 rounded-lg">
                    <p className="text-3xl font-bold text-green-600">10+</p>
                    <p className="text-sm text-monochrome-700">Meetings Weekly</p>
                  </div>
                </div>
                
                <Button className="btn-primary">
                  Schedule a Demo
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl border border-monochrome-200 card-shadow-hover">
                  <div className="flex items-start">
                    <div className="text-4xl mr-4">⭐️</div>
                    <div>
                      <h3 className="font-bold text-lg">TechFlow Solutions</h3>
                      <p className="text-monochrome-700 mb-2">"We've seen a 42% increase in qualified meetings since working with Leadea. Their targeting is spot-on."</p>
                      <p className="text-sm text-monochrome-500">David Chen, CMO</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-monochrome-200 card-shadow-hover">
                  <div className="flex items-start">
                    <div className="text-4xl mr-4">⭐️</div>
                    <div>
                      <h3 className="font-bold text-lg">MarketSphere</h3>
                      <p className="text-monochrome-700 mb-2">"Their lead quality is exceptional. We're closing deals faster and with higher values."</p>
                      <p className="text-sm text-monochrome-500">Sarah Johnson, Sales Director</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-monochrome-200 card-shadow-hover">
                  <div className="flex items-start">
                    <div className="text-4xl mr-4">⭐️</div>
                    <div>
                      <h3 className="font-bold text-lg">DataCore Analytics</h3>
                      <p className="text-monochrome-700 mb-2">"We're consistently getting 15+ quality meetings weekly. The ROI has been incredible."</p>
                      <p className="text-sm text-monochrome-500">Michael Torres, CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-monochrome-50">
          <div className="container mx-auto container-padding">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Simple, Performance-Based Pricing
              </h2>
              <p className="text-lg text-monochrome-700">
                We only succeed when you do. No long-term contracts, no setup fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8 border border-monochrome-200 card-shadow-hover">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Standard</h3>
                  <div className="text-4xl font-bold mb-1">$2,500</div>
                  <p className="text-monochrome-600">per month</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>10 qualified appointments monthly</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Full access to analytics dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Multi-channel outreach</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Weekly reporting</span>
                  </li>
                </ul>
                
                <div className="text-center">
                  <Button className="btn-primary w-full">
                    Get Started
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 border-2 border-green-500 card-shadow-hover relative">
                <div className="absolute -top-4 right-8 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Premium</h3>
                  <div className="text-4xl font-bold mb-1">$4,500</div>
                  <p className="text-monochrome-600">per month</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>20+ qualified appointments monthly</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Advanced analytics & reporting</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Personalized messaging strategy</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>CRM integration included</span>
                  </li>
                </ul>
                
                <div className="text-center">
                  <Button className="bg-green-600 hover:bg-green-700 text-white w-full py-6 rounded-lg font-medium shadow-lg">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-monochrome-600">
                Need a custom solution? <a href="#" className="text-green-600 font-medium hover:underline">Contact us</a> for enterprise pricing.
              </p>
            </div>
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
