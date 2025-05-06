
import React from 'react';
import { cn } from '@/lib/utils';

interface ComparisonItem {
  feature: string;
  manual: string;
  automated: string;
}

interface ComparisonTableProps {
  items: ComparisonItem[];
  className?: string;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ items, className }) => {
  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-monochrome-100">
        <table className="w-full">
          <thead>
            <tr className="bg-monochrome-50">
              <th className="px-6 py-4 text-left font-bold text-monochrome-700">Feature</th>
              <th className="px-6 py-4 text-left font-bold text-red-700">Manual Process</th>
              <th className="px-6 py-4 text-left font-bold text-green-700">With Our Automations</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-monochrome-50'}>
                <td className="px-6 py-4 font-medium">{item.feature}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item.manual}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item.automated}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;
