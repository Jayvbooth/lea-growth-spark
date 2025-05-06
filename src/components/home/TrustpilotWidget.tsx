
import React from 'react';
import { Star, ExternalLink } from "lucide-react";

const TrustpilotWidget = () => {
  return (
    <section className="py-16 bg-monochrome-50">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-block bg-white px-4 py-2 rounded-lg shadow-soft mb-4">
            <div className="flex items-center gap-2">
              <svg 
                className="h-6 w-6" 
                viewBox="0 0 24 24" 
                fill="#00b67a" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0L8.91 8.6H0l7.27 5.29-2.77 8.51L12 16.6l7.5 5.8-2.77-8.51L24 8.6h-8.91L12 0z" />
              </svg>
              <span className="font-bold text-monochrome-800">Trustpilot</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Growing B2B Companies
          </h2>
          <div className="flex items-center justify-center mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-6 w-6 fill-[#00b67a] text-[#00b67a]" />
            ))}
          </div>
          <p className="text-monochrome-600">
            <strong>4.9 out of 5</strong> based on <strong>142 reviews</strong>
          </p>
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="https://www.trustpilot.com" 
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-white px-6 py-3 rounded-lg shadow-soft text-green-600 font-medium hover:shadow-hover transition-all duration-300"
          >
            View All Reviews On Trustpilot
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustpilotWidget;
