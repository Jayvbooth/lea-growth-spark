
import React from 'react';
import { cn } from "@/lib/utils";

interface CaseStudy {
  id: string;
  name: string;
}

interface CaseStudySelectorProps {
  caseStudies: CaseStudy[];
  activeCaseStudy: string;
  setActiveCaseStudy: (id: string) => void;
}

const CaseStudySelector: React.FC<CaseStudySelectorProps> = ({ 
  caseStudies, 
  activeCaseStudy, 
  setActiveCaseStudy 
}) => {
  return (
    <div className="mb-10 flex flex-wrap gap-3 justify-center">
      {caseStudies.map((study) => (
        <button
          key={study.id}
          onClick={() => setActiveCaseStudy(study.id)}
          className={cn(
            "px-5 py-2 rounded-full text-sm font-medium transition-colors border", 
            activeCaseStudy === study.id 
              ? "bg-green-600 text-white border-green-600" 
              : "bg-white text-gray-700 border-gray-200 hover:bg-green-50"
          )}
        >
          {study.name}
        </button>
      ))}
    </div>
  );
};

export default CaseStudySelector;
