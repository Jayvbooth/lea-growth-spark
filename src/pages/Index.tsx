
import React from 'react';
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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <ServicesShowcase />
        <ProcessSteps />
        <ResultsShowcase />
        <Testimonials />
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
