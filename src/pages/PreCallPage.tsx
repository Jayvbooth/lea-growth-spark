
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PreCallPage = () => {
  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Preparing for Your Strategy Session</h1>
              <p className="text-xl text-gray-600">
                We're excited to meet with you! Here's everything you need to know before our call.
              </p>
            </div>
            
            {/* Call Information */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8 mb-10">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                <div className="bg-green-50 rounded-full p-5">
                  <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl font-bold mb-3">Your Strategy Session</h2>
                  <p className="text-gray-600 mb-4">
                    You've taken the first step toward transforming your growth strategy!
                    We've received your assessment and are preparing a customized approach for your business.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="mb-2">
                      <span className="font-medium text-gray-700">Date & Time:</span> 
                      <span className="ml-2">[Calendar will show selected time]</span>
                    </div>
                    <div className="mb-2">
                      <span className="font-medium text-gray-700">Duration:</span> 
                      <span className="ml-2">30 minutes</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Meeting Link:</span>
                      <span className="ml-2 text-green-600">[Video conference link will appear here]</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-500">
                    Need to reschedule? No problem! Click the button below to find another time.
                  </p>
                  <Button variant="outline" className="mt-4">
                    Reschedule Meeting
                  </Button>
                </div>
              </div>
            </div>
            
            {/* What to Expect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">What to Expect on the Call</h2>
              <div className="grid gap-6">
                {[
                  {
                    title: "Tailored Growth Strategy",
                    description: "We'll present a customized plan based on your assessment responses, focusing on your specific needs."
                  },
                  {
                    title: "Implementation Roadmap",
                    description: "You'll receive a clear timeline and action steps to achieve your growth goals."
                  },
                  {
                    title: "ROI Projection",
                    description: "We'll provide estimates of potential returns based on similar businesses we've helped."
                  },
                  {
                    title: "Q&A Session",
                    description: "Time will be reserved for your questions and to address any specific concerns."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 bg-green-50 rounded-full p-2">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Preparation Tips */}
            <div className="bg-blue-50 rounded-xl p-6 md:p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6">How to Prepare</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  To make the most of our session, consider:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Having key business metrics and goals handy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Writing down specific questions you want answered</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Being ready to discuss your current marketing and sales processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Having decision-makers present if possible</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Additional Resources */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">While You Wait</h2>
              <p className="text-gray-600 mb-8">
                Explore these resources to learn more about our approach and success stories:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <Button variant="outline" asChild className="h-auto py-3 flex-col">
                  <Link to="/case-studies">
                    <span className="block font-bold">Case Studies</span>
                    <span className="text-sm text-gray-500">See our client success stories</span>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-auto py-3 flex-col">
                  <Link to="/blog">
                    <span className="block font-bold">Blog</span>
                    <span className="text-sm text-gray-500">Expert insights and tips</span>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-auto py-3 flex-col">
                  <Link to="/business-automation">
                    <span className="block font-bold">Services</span>
                    <span className="text-sm text-gray-500">Explore our solutions</span>
                  </Link>
                </Button>
              </div>
              
              <Button asChild className="bg-green-500 hover:bg-green-600">
                <a href="tel:+123456789">
                  Have Questions? Call Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PreCallPage;
