
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  title: string;
}

export const BreadcrumbTrail: React.FC<BreadcrumbProps> = ({ title }) => {
  return (
    <div className="flex items-center text-sm text-monochrome-500 mb-8">
      <a href="/" className="hover:text-green-600 transition-colors">Home</a>
      <ChevronRight className="h-4 w-4 mx-2" />
      <a href="/case-studies" className="hover:text-green-600 transition-colors">Case Studies</a>
      <ChevronRight className="h-4 w-4 mx-2" />
      <span className="text-monochrome-800 truncate max-w-[200px]">{title}</span>
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
