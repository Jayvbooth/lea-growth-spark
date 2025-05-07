
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LeadAssessmentForm from '@/components/assessment/LeadAssessmentForm';

const AssessmentPage = () => {
  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      <Navbar />
      <main>
        {/* Hero section with form introduction */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-monochrome-900 to-monochrome-800 text-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 left-0 w-full h-full network-grid-bg opacity-10"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-500/10 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-green-500/10 rounded-full blur-3xl opacity-30"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
                Let's Discover Your Growth <span className="text-fancy text-green-400">Opportunities</span>
              </h1>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in">
                Complete this quick assessment to get a personalized growth strategy tailored to your business needs.
              </p>
            </div>
          </div>
        </section>
        
        <LeadAssessmentForm />
      </main>
      <Footer />
    </div>
  );
};

export default AssessmentPage;
