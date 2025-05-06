import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  title: string;
}

export const BreadcrumbTrail: React.FC<BreadcrumbProps> = ({ title }) => {
  return (
    <div className="flex items-center text-sm text-monochrome-500 mb-8 overflow-hidden">
      <Link to="/" className="hover:text-green-600 transition-colors whitespace-nowrap">Home</Link>
      <ChevronRight className="h-4 w-4 mx-2 flex-shrink-0" />
      <Link to="/case-studies" className="hover:text-green-600 transition-colors whitespace-nowrap">Case Studies</Link>
      <ChevronRight className="h-4 w-4 mx-2 flex-shrink-0" />
      <span className="text-monochrome-800 truncate">{title}</span>
    </div>
  );
};

export const CaseStudyNavigation: React.FC<{ prevCase?: {id: string, title: string}, nextCase?: {id: string, title: string} }> = ({ prevCase, nextCase }) => {
  return (
    <div className="flex items-center justify-between border-t border-monochrome-100 mt-10 pt-6">
      <div>
        {prevCase && (
          <Link 
            to={`/case-studies/${prevCase.id}`}
            className="flex items-center text-monochrome-600 hover:text-green-600 transition-colors"
          >
            <ChevronLeft className="h-5 w-5 mr-2" />
            <div>
              <div className="text-xs">Previous Case Study</div>
              <div className="font-medium">{prevCase.title}</div>
            </div>
          </Link>
        )}
      </div>
      
      <Link
        to="/case-studies"
        className="text-green-600 font-medium hover:text-green-700 transition-colors"
      >
        All Case Studies
      </Link>
      
      <div>
        {nextCase && (
          <Link
            to={`/case-studies/${nextCase.id}`}
            className="flex items-center text-monochrome-600 hover:text-green-600 transition-colors"
          >
            <div className="text-right">
              <div className="text-xs">Next Case Study</div>
              <div className="font-medium">{nextCase.title}</div>
            </div>
            <ChevronRight className="h-5 w-5 ml-2" />
          </Link>
        )}
      </div>
    </div>
  );
};

interface MetricCardProps {
  label: string;
  before: string;
  after: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ label, before, after }) => {
  return (
    <div className="bg-white rounded-lg p-5 shadow-soft border border-monochrome-100">
      <p className="text-monochrome-600 text-sm mb-3">{label}</p>
      <div className="flex items-center">
        <div className="text-monochrome-400 font-semibold">
          {before}
        </div>
        <ChevronRight className="h-5 w-5 mx-3 text-green-500" />
        <div className="text-green-600 font-bold text-xl">
          {after}
        </div>
      </div>
    </div>
  );
};

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => {
  return (
    <div className="border-l-2 border-green-200 pl-5 pb-8 relative">
      <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm">
        {number}
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-monochrome-600">{description}</p>
    </div>
  );
};

interface PullQuoteProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const PullQuote: React.FC<PullQuoteProps> = ({ quote, author, role, company }) => {
  return (
    <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
      <p className="text-lg italic mb-4">"{quote}"</p>
      <div className="flex items-center">
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-sm text-monochrome-600">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

interface TechnicalDetailProps {
  title: string;
  items: string[];
}

export const TechnicalDetail: React.FC<TechnicalDetailProps> = ({ title, items }) => {
  return (
    <div className="mb-4">
      <h4 className="font-medium mb-2">{title}</h4>
      <ul className="list-disc list-inside space-y-1">
        {items.map((item, index) => (
          <li key={index} className="text-monochrome-600 text-sm">{item}</li>
        ))}
      </ul>
    </div>
  );
};
