
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import PainPoints from '@/components/home/PainPoints';
import ServicesShowcase from '@/components/home/ServicesShowcase';
import ProcessSteps from '@/components/home/ProcessSteps';
import ResultsShowcase from '@/components/home/ResultsShowcase';
import Testimonials from '@/components/home/Testimonials';
import Assessment from '@/components/home/Assessment';
import CaseStudies from '@/components/home/CaseStudies';
import FAQ from '@/components/home/FAQ';
import CTASection from '@/components/home/CTASection';
import AnimatedLogoCarousel from '@/components/home/AnimatedLogoCarousel';
import WhatWeDeliver from '@/components/home/WhatWeDeliver';
import MetricsDashboard from '@/components/home/MetricsDashboard';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      <Helmet>
        <title>Growth Spark | B2B Growth Systems & Marketing Automation</title>
        <meta name="description" content="Growth Spark helps B2B companies generate qualified meetings and automate their workflows. Increase revenue with our lead generation and business automation solutions." />
        <meta name="keywords" content="b2b growth, lead generation, marketing automation, sales automation, workflow optimization, business automation, qualified meetings" />
        <meta property="og:title" content="Growth Spark | B2B Growth Systems & Marketing Automation" />
        <meta property="og:description" content="Generate qualified B2B meetings and automate your marketing and sales workflows with Growth Spark's solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <link rel="canonical" href="/" />
      </Helmet>
      
      <Navbar />
      <main>
        {/* Updated Hero component with semantic HTML structure */}
        <h1 className="sr-only">Growth Spark - B2B Growth Systems & Marketing Automation</h1>
        <Hero />
        
        {/* Trust indicators */}
        <div className="relative">
          <AnimatedLogoCarousel />
          <div className="absolute inset-0 gradient-overlay pointer-events-none"></div>
        </div>
        
        {/* Main content sections */}
        <PainPoints />
        
        <div className="relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-50 rounded-full blur-3xl opacity-60"></div>
          <ServicesShowcase />
        </div>
        
        <div className="relative overflow-hidden">
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-50 rounded-full blur-3xl opacity-60"></div>
          <WhatWeDeliver />
        </div>
        
        <ProcessSteps />
        
        <div className="relative overflow-hidden grain-overlay">
          <div className="absolute top-1/3 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-green-100/30 to-green-200/20 blur-xl"></div>
          <div className="absolute bottom-1/3 -left-20 w-64 h-64 rounded-full bg-gradient-to-tl from-green-100/30 to-green-200/20 blur-xl"></div>
          <MetricsDashboard />
        </div>
        
        <ResultsShowcase />
        
        <div className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-50/30 to-transparent"></div>
          <Testimonials />
        </div>
        
        <Assessment />
        <CaseStudies />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
