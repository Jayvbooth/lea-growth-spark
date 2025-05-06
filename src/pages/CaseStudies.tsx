
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import FilterBar from '@/components/case-studies/FilterBar';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';
import HighlightStrip from '@/components/case-studies/HighlightStrip';
import FeaturedCaseCarousel from '@/components/case-studies/FeaturedCaseCarousel';
import PaginationControls from '@/components/case-studies/Pagination';
import { industries, services, metrics, caseStudies, featuredCaseStudies } from '@/data/caseStudiesData';
import { Helmet } from 'react-helmet';

const CaseStudiesPage: React.FC = () => {
  const [filteredStudies, setFilteredStudies] = useState(caseStudies);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  const [filters, setFilters] = useState({
    industry: '',
    service: '',
    metric: '',
    search: '',
  });
  
  useEffect(() => {
    // Apply filters
    const newFilteredStudies = caseStudies.filter((study) => {
      // Filter by industry
      if (filters.industry && study.industryValue !== filters.industry) {
        return false;
      }
      
      // Filter by service
      if (filters.service && !study.serviceValues.includes(filters.service)) {
        return false;
      }
      
      // Filter by metric
      if (filters.metric && !study.metricValues.includes(filters.metric)) {
        return false;
      }
      
      // Filter by search query
      if (filters.search && !study.title.toLowerCase().includes(filters.search.toLowerCase()) && 
          !study.teaser.toLowerCase().includes(filters.search.toLowerCase())) {
        return false;
      }
      
      return true;
    });
    
    setFilteredStudies(newFilteredStudies);
    setCurrentPage(1); // Reset to first page when filters change
  }, [filters]);
  
  const handleFilterChange = (newFilters: any) => {
    setFilters({ ...filters, ...newFilters });
  };
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of grid
    document.getElementById('case-study-grid')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredStudies.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredStudies.length / itemsPerPage);
  
  return (
    <div className="bg-monochrome-50 min-h-screen">
      <Helmet>
        <title>Case Studies | Success Stories and Client Results</title>
        <meta name="description" content="Browse our collection of client success stories across various industries. See real results, metrics, and ROI from our automation and lead generation solutions." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-white py-16 border-b border-monochrome-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Real-World Wins with Our Automation & Lead Gen
            </h1>
            <p className="text-lg md:text-xl text-monochrome-600 mb-8 text-balance">
              Browse success stories by industry, service type, or metric.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Case Studies Carousel */}
      <section className="py-12 container mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Featured Success Stories</h2>
          <FeaturedCaseCarousel cases={featuredCaseStudies} />
        </div>
        
        {/* Filters */}
        <FilterBar 
          industries={industries}
          services={services}
          metrics={metrics}
          onFilterChange={handleFilterChange}
        />
        
        {/* Case Study Grid */}
        <div id="case-study-grid" className="mb-8">
          {currentItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentItems.map((caseStudy) => (
                <CaseStudyCard
                  key={caseStudy.id}
                  id={caseStudy.id}
                  logo={caseStudy.logo}
                  title={caseStudy.title}
                  industry={caseStudy.industry}
                  metrics={caseStudy.metrics}
                  teaser={caseStudy.teaser}
                  className="animate-fade-in"
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No case studies found</h3>
              <p className="text-monochrome-600 mb-6">Try adjusting your filters to see more results.</p>
              <Button 
                onClick={() => setFilters({industry: '', service: '', metric: '', search: ''})}
                variant="outline"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
        
        {/* Pagination */}
        {filteredStudies.length > itemsPerPage && (
          <PaginationControls 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </section>
      
      {/* Highlight Strip */}
      <HighlightStrip 
        totalHours={1200}
        avgROI={3.8}
        industriesCovered={6}
        automationsBuilt={120}
      />
      
      {/* Final CTA */}
      <section className="container mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-lg text-monochrome-600 mb-8">
            See how our automated solutions can transform your business with measurable results.
          </p>
          <Button className="btn-primary text-lg px-8 py-6">
            Book Your Strategy Session
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
