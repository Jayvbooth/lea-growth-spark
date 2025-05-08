
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import MetricsGrid from '@/components/lead-generation/results/MetricsGrid';
import CaseStudySelector from '@/components/lead-generation/results/CaseStudySelector';
import CaseStudyCard from '@/components/lead-generation/results/CaseStudyCard';
import { caseStudiesData, metricsData } from '@/components/lead-generation/results/caseStudiesData';

const ResultsShowcase: React.FC = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState(caseStudiesData[0].id);
  const currentCase = caseStudiesData.find(cs => cs.id === activeCaseStudy) || caseStudiesData[0];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Data-Driven Results You Can <span className="text-green-600">Measure</span>
          </h2>
          <p className="text-lg text-gray-700">
            We're obsessed with metrics and measurable outcomes. Here's what our clients typically achieve.
          </p>
        </div>
        
        {/* Metrics Grid */}
        <MetricsGrid metrics={metricsData} />
        
        {/* Case Study Selector */}
        <CaseStudySelector 
          caseStudies={caseStudiesData}
          activeCaseStudy={activeCaseStudy}
          setActiveCaseStudy={setActiveCaseStudy}
        />
        
        {/* Case Study Card */}
        <CaseStudyCard caseStudy={currentCase} />
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            asChild
          >
            <Link to="/case-studies#top">
              View All Case Studies <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcase;
