
import React from 'react';
import { Star } from "lucide-react";

// Mock reviews to simulate Trustpilot data
const reviews = [
  {
    name: "Michael Johnson",
    company: "TechFlow Solutions",
    rating: 5,
    comment: "Working with LEADEA transformed our lead generation process. We're now getting 3x more qualified leads than before."
  },
  {
    name: "Sarah Williams",
    company: "Growth Partners Inc",
    rating: 5,
    comment: "The automation solutions they implemented saved our team over 20 hours per week on manual tasks. ROI was visible within the first month."
  },
  {
    name: "David Chen",
    company: "Ascend Marketing",
    rating: 5,
    comment: "Their strategic approach to B2B growth is unmatched. We've doubled our pipeline within 90 days of working with them."
  },
  {
    name: "Rebecca Taylor",
    company: "Innovate SaaS",
    rating: 4,
    comment: "Great team with excellent communication. They delivered quality leads consistently and helped us optimize our sales process."
  }
];

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-soft hover:shadow-hover transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-bold text-monochrome-800">{review.name}</h4>
                  <p className="text-sm text-monochrome-500">{review.company}</p>
                </div>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#00b67a] text-[#00b67a]" />
                  ))}
                </div>
              </div>
              <p className="text-monochrome-600">{review.comment}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="#" 
            className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
          >
            Read more reviews on Trustpilot
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustpilotWidget;
