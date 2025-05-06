
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import AnimatedBeam from "@/components/ui/AnimatedBeam";
import CTASection from '@/components/home/CTASection';

const BusinessAutomation = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
          <div className="container mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative z-10">
                <span className="text-green-600 font-medium mb-4 block">BUSINESS AUTOMATION</span>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  <span className="block">
                    Custom <span className="text-highlight">Automation</span>
                  </span>
                  <span className="block">
                    That <span className="text-fancy">Saves</span> Time & Money
                  </span>
                </h1>
                
                <p className="text-lg text-monochrome-700 mb-8 max-w-lg">
                  Eliminate manual tasks and connect your business systems. Our custom automation solutions 
                  reduce busy work and help you scale efficiently.
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
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-xl w-full max-w-md card-shadow">
                    <div className="px-6 py-4 border-b border-monochrome-100">
                      <h4 className="font-bold text-monochrome-800">Automation Workflow</h4>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-monochrome-100 flex items-center justify-center">
                          <svg className="h-5 w-5 text-monochrome-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div className="h-0.5 flex-grow bg-green-200 mx-2"></div>
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="pl-5 border-l-2 border-green-200 ml-5 mb-4">
                        <div className="bg-monochrome-100 p-3 rounded-lg mb-2">
                          <span className="text-xs font-medium text-monochrome-800">Lead enters system</span>
                        </div>
                        <div className="bg-monochrome-100 p-3 rounded-lg">
                          <span className="text-xs font-medium text-monochrome-800">Auto-welcome email sent</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="h-0.5 flex-grow bg-green-200 mx-2"></div>
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="pl-5 border-l-2 border-green-200 ml-5 mb-4">
                        <div className="bg-monochrome-100 p-3 rounded-lg mb-2">
                          <span className="text-xs font-medium text-monochrome-800">Meeting scheduled</span>
                        </div>
                        <div className="bg-monochrome-100 p-3 rounded-lg">
                          <span className="text-xs font-medium text-monochrome-800">CRM updated automatically</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-green-100 to-transparent rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-t from-green-50 to-transparent rounded-full blur-3xl opacity-30"></div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-monochrome-50">
          <div className="container mx-auto container-padding">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Automate Your Business Processes
              </h2>
              <p className="text-lg text-monochrome-700">
                We connect your tools and create custom workflows that save time, reduce errors, and scale your operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Custom Workflows</h3>
                <p className="text-monochrome-700">
                  We build automated workflows tailored to your exact business processes and requirements.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">System Integration</h3>
                <p className="text-monochrome-700">
                  Connect your CRM, email, calendar, invoicing, and other tools for seamless data flow.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Process Optimization</h3>
                <p className="text-monochrome-700">
                  We analyze your workflows and implement improvements that maximize efficiency and results.
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
                  Proven <span className="gradient-text">ROI</span> Through Automation
                </h2>
                
                <p className="text-lg text-monochrome-700 mb-8">
                  Our clients save an average of 20+ hours weekly through our custom automation solutions, 
                  allowing them to focus on growth and strategy instead of repetitive tasks.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom workflow automation tailored to your business</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Integration with your existing tech stack</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Automated lead nurturing and follow-up sequences</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Data synchronization across all platforms</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Scalable solutions that grow with your business</span>
                  </li>
                </ul>
                
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="bg-green-50 px-4 py-3 rounded-lg">
                    <p className="text-3xl font-bold text-green-600">20+</p>
                    <p className="text-sm text-monochrome-700">Hours Saved Weekly</p>
                  </div>
                  <div className="bg-green-50 px-4 py-3 rounded-lg">
                    <p className="text-3xl font-bold text-green-600">45%</p>
                    <p className="text-sm text-monochrome-700">Increased Efficiency</p>
                  </div>
                  <div className="bg-green-50 px-4 py-3 rounded-lg">
                    <p className="text-3xl font-bold text-green-600">3.5x</p>
                    <p className="text-sm text-monochrome-700">ROI Average</p>
                  </div>
                </div>
                
                <Button className="btn-primary">
                  Schedule a Demo
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl border border-monochrome-200 card-shadow-hover">
                  <div className="flex items-start">
                    <div className="text-4xl mr-4">⚙️</div>
                    <div>
                      <h3 className="font-bold text-lg">CRM Integration</h3>
                      <p className="text-monochrome-700">Connect your CRM with email, calendar, and other tools for seamless data flow.</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="text-xs bg-monochrome-100 px-2 py-1 rounded-full">Salesforce</span>
                        <span className="text-xs bg-monochrome-100 px-2 py-1 rounded-full">HubSpot</span>
                        <span className="text-xs bg-monochrome-100 px-2 py-1 rounded-full">Pipedrive</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-monochrome-200 card-shadow-hover">
                  <div className="flex items-start">
                    <div className="text-4xl mr-4">📧</div>
                    <div>
                      <h3 className="font-bold text-lg">Email Automation</h3>
                      <p className="text-monochrome-700">Set up triggered email sequences based on user actions and behaviors.</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="text-xs bg-monochrome-100 px-2 py-1 rounded-full">Gmail</span>
                        <span className="text-xs bg-monochrome-100 px-2 py-1 rounded-full">Outlook</span>
                        <span className="text-xs bg-monochrome-100 px-2 py-1 rounded-full">Mailchimp</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-monochrome-200 card-shadow-hover">
                  <div className="flex items-start">
                    <div className="text-4xl mr-4">📊</div>
                    <div>
                      <h3 className="font-bold text-lg">Reporting Automation</h3>
                      <p className="text-monochrome-700">Automate data collection and reporting across your business tools.</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="text-xs bg-monochrome-100 px-2 py-1 rounded-full">Google Analytics</span>
                        <span className="text-xs bg-monochrome-100 px-2 py-1 rounded-full">Power BI</span>
                        <span className="text-xs bg-monochrome-100 px-2 py-1 rounded-full">Tableau</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-monochrome-50">
          <div className="container mx-auto container-padding">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Implementation Process
              </h2>
              <p className="text-lg text-monochrome-700">
                We follow a proven methodology to ensure successful automation implementation.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl border border-monochrome-200 card-shadow-hover text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-700 font-bold">1</span>
                  </div>
                  <h3 className="font-bold mb-2">Discovery</h3>
                  <p className="text-sm text-monochrome-700">We analyze your current processes and identify automation opportunities.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-monochrome-200 card-shadow-hover text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-700 font-bold">2</span>
                  </div>
                  <h3 className="font-bold mb-2">Design</h3>
                  <p className="text-sm text-monochrome-700">We design custom automation workflows tailored to your specific needs.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-monochrome-200 card-shadow-hover text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-700 font-bold">3</span>
                  </div>
                  <h3 className="font-bold mb-2">Implementation</h3>
                  <p className="text-sm text-monochrome-700">We build and deploy the automation solutions with minimal disruption.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-monochrome-200 card-shadow-hover text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-700 font-bold">4</span>
                  </div>
                  <h3 className="font-bold mb-2">Optimization</h3>
                  <p className="text-sm text-monochrome-700">We continuously monitor, refine, and enhance your automation.</p>
                </div>
              </div>
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

export default BusinessAutomation;
