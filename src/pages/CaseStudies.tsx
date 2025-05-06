
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';
import HighlightStrip from '@/components/case-studies/HighlightStrip';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { caseStudies } from '@/data/caseStudiesData';
import { Helmet } from 'react-helmet';

const CaseStudiesPage: React.FC = () => {
  // Filter categories
  const leadGenStudies = caseStudies.filter(study => 
    study.serviceValues.includes('lead-generation')
  );
  
  const automationStudies = caseStudies.filter(study => 
    study.serviceValues.includes('workflow-automation')
  );
  
  return (
    <div className="bg-monochrome-50 min-h-screen">
      <Helmet>
        <title>Case Studies | Success Stories and Client Results</title>
        <meta name="description" content="Browse our collection of client success stories across various industries. See real results, metrics, and ROI from our automation and lead generation solutions." />
      </Helmet>
      
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h1>
          <p className="text-lg text-monochrome-600">
            Real results, real businesses. See how our solutions have transformed operations and driven growth.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="mb-8">
            <TabsTrigger value="all">All Case Studies</TabsTrigger>
            <TabsTrigger value="lead-gen">Lead Generation</TabsTrigger>
            <TabsTrigger value="automation">Business Automation</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard
                  key={caseStudy.id}
                  id={caseStudy.id}
                  logo={caseStudy.logo}
                  title={caseStudy.title}
                  industry={caseStudy.industry}
                  metrics={caseStudy.metrics}
                  teaser={caseStudy.teaser}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="lead-gen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadGenStudies.map((caseStudy) => (
                <CaseStudyCard
                  key={caseStudy.id}
                  id={caseStudy.id}
                  logo={caseStudy.logo}
                  title={caseStudy.title}
                  industry={caseStudy.industry}
                  metrics={caseStudy.metrics}
                  teaser={caseStudy.teaser}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="automation">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationStudies.map((caseStudy) => (
                <CaseStudyCard
                  key={caseStudy.id}
                  id={caseStudy.id}
                  logo={caseStudy.logo}
                  title={caseStudy.title}
                  industry={caseStudy.industry}
                  metrics={caseStudy.metrics}
                  teaser={caseStudy.teaser}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Highlight Strip */}
        <HighlightStrip 
          totalHours={1200}
          avgROI={3.8}
          industriesCovered={6}
          automationsBuilt={120}
        />
        
        {/* Final CTA */}
        <section className="max-w-3xl mx-auto py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-lg text-monochrome-600 mb-8">
            See how our automated solutions can transform your business with measurable results.
          </p>
          <Button className="btn-primary text-lg px-8 py-6">
            Book Your Strategy Session
          </Button>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
