import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RelatedCaseStudies from '@/components/case-studies/RelatedCaseStudies';
import { 
  BreadcrumbTrail, 
  MetricCard, 
  ProcessStep, 
  PullQuote, 
  TechnicalDetail,
  CaseStudyNavigation
} from '@/components/case-studies/DetailSections';
import { caseStudies, getRelatedCaseStudies } from '@/data/caseStudiesData';
import { ArrowRight, Download, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudyDetail: React.FC = () => {
  const { id } = useParams<{id: string}>();
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState<any>(null);
  const [relatedCases, setRelatedCases] = useState<any[]>([]);
  const [prevNextCase, setPrevNextCase] = useState<{prev?: any, next?: any}>({});
  
  useEffect(() => {
    // Find the case study based on ID
    const caseIndex = caseStudies.findIndex(cs => cs.id === id);
    
    if (caseIndex >= 0) {
      const foundCase = caseStudies[caseIndex];
      setCaseStudy(foundCase);
      
      // Get related case studies
      const related = getRelatedCaseStudies(id as string, foundCase.industryValue);
      setRelatedCases(related);
      
      // Set up prev/next navigation
      const prevCase = caseIndex > 0 ? 
        { id: caseStudies[caseIndex - 1].id, title: caseStudies[caseIndex - 1].title } : 
        undefined;
      
      const nextCase = caseIndex < caseStudies.length - 1 ? 
        { id: caseStudies[caseIndex + 1].id, title: caseStudies[caseIndex + 1].title } : 
        undefined;
      
      setPrevNextCase({ prev: prevCase, next: nextCase });
      
      // Scroll to top
      window.scrollTo(0, 0);
    } else {
      // No case study found, redirect to main case studies page
      navigate('/case-studies');
    }
  }, [id, navigate]);
  
  if (!caseStudy) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <p>Loading case study...</p>
      </div>
    );
  }
  
  return (
    <div className="bg-monochrome-50 min-h-screen">
      <Helmet>
        <title>{caseStudy.title} | Case Study</title>
        <meta name="description" content={caseStudy.teaser} />
      </Helmet>
      
      <Navbar />
      
      <div className="container mx-auto px-4 py-10 pt-32">
        {/* Breadcrumb */}
        <BreadcrumbTrail title={caseStudy.title} />
        
        {/* Hero Section */}
        <div className="bg-white rounded-xl overflow-hidden shadow-soft mb-12">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10">
              <div className="flex items-center mb-6">
                <div className="h-12 w-32 flex items-center mr-4">
                  <img 
                    src={caseStudy.logo} 
                    alt={`${caseStudy.title} logo`}
                    className="h-12 max-w-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg';
                      target.onerror = null;
                    }}
                  />
                </div>
                <span className="text-sm bg-monochrome-100 text-monochrome-700 px-3 py-1.5 rounded-full whitespace-nowrap">
                  {caseStudy.industry}
                </span>
              </div>
              
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                {caseStudy.title}
              </h1>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {caseStudy.metrics.map((metric: any, index: number) => (
                  <div key={index} className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-monochrome-600 mb-1">{metric.label}</p>
                    <p className="text-xl font-bold text-green-600">{metric.value}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-4 mt-6">
                <Button className="btn-primary">
                  Get Similar Results
                </Button>
                
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download PDF
                </Button>
              </div>
            </div>
            
            {caseStudy.featuredImage && (
              <div className="bg-monochrome-100 h-64 md:h-auto">
                <img 
                  src={caseStudy.featuredImage} 
                  alt={caseStudy.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                    target.onerror = null;
                  }}
                />
              </div>
            )}
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {/* Challenge & Objectives */}
            <section className="bg-white rounded-xl p-8 shadow-soft mb-10">
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-monochrome-700 mb-8 leading-relaxed">
                {caseStudy.challenge}
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                {caseStudy.objectives.map((objective: any, index: number) => (
                  <div key={index} className="border border-monochrome-100 rounded-lg p-4">
                    <div className="text-2xl mb-2">{objective.icon}</div>
                    <p className="text-monochrome-600 text-sm">{objective.label}</p>
                    <p className="font-medium">{objective.value}</p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Our Solution */}
            <section className="bg-white rounded-xl p-8 shadow-soft mb-10">
              <h2 className="text-2xl font-bold mb-6">Our Solution</h2>
              
              <div className="pl-4">
                {caseStudy.solution.map((step: any) => (
                  <ProcessStep 
                    key={step.step}
                    number={step.step}
                    title={step.title}
                    description={step.description}
                  />
                ))}
              </div>
            </section>
            
            {/* Results */}
            <section className="bg-white rounded-xl p-8 shadow-soft mb-10">
              <h2 className="text-2xl font-bold mb-6">Results & Impact</h2>
              
              <div className="grid md:grid-cols-2 gap-5 mb-8">
                {caseStudy.results.map((result: any, index: number) => (
                  <MetricCard 
                    key={index}
                    label={result.label}
                    before={result.before}
                    after={result.after}
                  />
                ))}
              </div>
              
              <PullQuote 
                quote={caseStudy.testimonial.quote}
                author={caseStudy.testimonial.author}
                role={caseStudy.testimonial.role}
                company={caseStudy.industry}
              />
            </section>
            
            {/* Technical Details (Accordion) */}
            {caseStudy.technicalDetails && (
              <section className="bg-white rounded-xl p-8 shadow-soft mb-10">
                <h2 className="text-2xl font-bold mb-6">Technical Deep-Dive</h2>
                
                <div className="space-y-6">
                  {caseStudy.technicalDetails.map((detail: any, index: number) => (
                    <TechnicalDetail 
                      key={index}
                      title={detail.title}
                      items={detail.items}
                    />
                  ))}
                </div>
              </section>
            )}
            
            {/* Navigation between case studies */}
            <CaseStudyNavigation 
              prevCase={prevNextCase.prev} 
              nextCase={prevNextCase.next} 
            />
          </div>
          
          <div>
            {/* Sidebar */}
            <div className="bg-white rounded-xl p-6 shadow-soft mb-6 sticky top-24">
              <h3 className="font-bold mb-4">Share This Case Study</h3>
              <div className="flex gap-2 mb-6">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <LinkIcon className="h-4 w-4" />
                  Copy Link
                </Button>
              </div>
              
              <div className="border-t border-monochrome-100 my-6 pt-6">
                <h3 className="font-bold mb-4">Need Similar Results?</h3>
                <p className="text-monochrome-600 text-sm mb-4">
                  Book a strategy call to discuss how we can help your business achieve similar outcomes.
                </p>
                <Button className="btn-primary w-full">
                  Book Your Call
                </Button>
              </div>
              
              <div className="border-t border-monochrome-100 my-6 pt-6">
                <h3 className="font-bold mb-4">Related Services</h3>
                <div className="space-y-2">
                  {caseStudy.serviceType.map((service: string, index: number) => (
                    <Link 
                      key={index}
                      to={`/business-automation`}
                      className="flex items-center justify-between p-2 rounded-md text-monochrome-800 hover:bg-monochrome-50 transition-colors"
                    >
                      <span>{service}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Case Studies */}
        <RelatedCaseStudies cases={relatedCases} />
        
        {/* Final CTA */}
        <div className="bg-green-50 rounded-xl p-8 md:p-12 text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-lg text-monochrome-700 mb-8 max-w-2xl mx-auto">
            See how our proven methodologies can help you achieve similar or better results for your business.
          </p>
          <Button className="btn-primary text-lg px-8 py-6">
            Book Your Free Strategy Session
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
