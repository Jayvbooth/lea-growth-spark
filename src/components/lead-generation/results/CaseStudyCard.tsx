
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

interface ResultMetric {
  metric: string;
  value: string;
}

interface CaseStudyDetail {
  id: string;
  name: string;
  industry: string;
  size: string;
  challenge: string;
  results: ResultMetric[];
  quote: string;
  author: string;
  position: string;
  emoji: string;
}

interface CaseStudyCardProps {
  caseStudy: CaseStudyDetail;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  return (
    <Card className="overflow-hidden rounded-2xl border-0 shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column - Case Study Details */}
        <div className="bg-gray-900 p-8 md:p-12 text-white">
          <div className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full text-white text-sm font-medium mb-6">
            <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            FEATURED CASE STUDY
          </div>
          
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">
              {caseStudy.emoji}
            </div>
            <div className="ml-4">
              <h3 className="text-white font-bold">{caseStudy.name}</h3>
              <p className="text-gray-300 text-sm">{caseStudy.industry} • {caseStudy.size}</p>
            </div>
          </div>
          
          <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
            From Manual Chaos to Streamlined Growth
          </h4>
          
          <p className="text-gray-300 mb-8">
            {caseStudy.challenge}
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <div className="bg-white/10 p-2 rounded-lg mt-1">
                <Check className="h-4 w-4 text-green-400" />
              </div>
              <div className="ml-4">
                <p className="text-white">Implemented AI-powered lead generation</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-white/10 p-2 rounded-lg mt-1">
                <Check className="h-4 w-4 text-green-400" />
              </div>
              <div className="ml-4">
                <p className="text-white">Connected CRM with marketing automation</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-white/10 p-2 rounded-lg mt-1">
                <Check className="h-4 w-4 text-green-400" />
              </div>
              <div className="ml-4">
                <p className="text-white">Created custom analytics dashboard</p>
              </div>
            </div>
          </div>
          
          <Button 
            className="bg-white text-gray-900 hover:bg-green-500 hover:text-white transition-colors"
            asChild
          >
            <Link to={`/case-studies/${caseStudy.id}`}>
              Read Full Case Study <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
        
        {/* Right Column - Results */}
        <div className="bg-white p-8 md:p-12">
          <h4 className="text-xl font-bold text-gray-900 mb-6">
            Results After 90 Days
          </h4>
          
          <div className="space-y-6">
            {caseStudy.results.map((result, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">{result.metric}</span>
                  <span className="text-green-600 font-bold">{result.value}</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-green-600 rounded-full" 
                    style={{ width: `${75 + (index * 5)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-100">
            <p className="text-gray-700 italic">
              "{caseStudy.quote}"
            </p>
            <div className="mt-3 flex items-center">
              <p className="text-gray-900 font-bold">{caseStudy.author}</p>
              <span className="mx-2 text-gray-400">•</span>
              <p className="text-gray-600">{caseStudy.position}, {caseStudy.name}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CaseStudyCard;
