
import React from 'react';

// Replace with actual company logos when available
const companyLogos = [
  {
    name: "TechFlow",
    logo: "🏢",
    industry: "SaaS"
  },
  {
    name: "GrowthX",
    logo: "🏙️",
    industry: "Marketing"
  },
  {
    name: "DataSync",
    logo: "📊",
    industry: "Analytics"
  },
  {
    name: "InnovateAI",
    logo: "🤖",
    industry: "AI"
  },
  {
    name: "CloudServe",
    logo: "☁️",
    industry: "Cloud"
  },
  {
    name: "SecureShield",
    logo: "🛡️",
    industry: "Security"
  },
  {
    name: "FinLeap",
    logo: "💰",
    industry: "Fintech"
  },
  {
    name: "MediTech",
    logo: "⚕️",
    industry: "Healthcare"
  },
  {
    name: "EduSmart",
    logo: "🎓",
    industry: "Education"
  },
  {
    name: "GreenEco",
    logo: "🌱",
    industry: "Sustainability"
  }
];

const AnimatedLogoCarousel = () => {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...companyLogos, ...companyLogos];
  
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-green-600 font-medium mb-2 block">CLIENT SUCCESS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Companies That <span className="text-fancy">Trust</span> LEADEA
          </h2>
          <p className="text-lg text-monochrome-700">
            We've helped businesses across multiple industries achieve predictable growth.
          </p>
        </div>
      </div>
      
      <div className="relative">
        {/* Gradient overlay for seamless scroll effect */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
        
        {/* First row - scrolling right */}
        <div className="overflow-hidden py-8 relative">
          <div className="flex animate-marquee">
            {duplicatedLogos.map((company, index) => (
              <div 
                key={`row1-${index}`} 
                className="flex-shrink-0 w-[250px] mx-6"
              >
                <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-monochrome-50 transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center text-3xl bg-monochrome-50 rounded-lg group-hover:bg-white transition-colors">
                    {company.logo}
                  </div>
                  <div>
                    <p className="font-bold text-monochrome-800">{company.name}</p>
                    <p className="text-xs text-monochrome-500">{company.industry}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Second row - scrolling left */}
        <div className="overflow-hidden py-8 relative">
          <div className="flex animate-marquee" style={{ animationDirection: 'reverse' }}>
            {[...duplicatedLogos].reverse().map((company, index) => (
              <div 
                key={`row2-${index}`} 
                className="flex-shrink-0 w-[250px] mx-6"
              >
                <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-monochrome-50 transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center text-3xl bg-monochrome-50 rounded-lg group-hover:bg-white transition-colors">
                    {company.logo}
                  </div>
                  <div>
                    <p className="font-bold text-monochrome-800">{company.name}</p>
                    <p className="text-xs text-monochrome-500">{company.industry}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto container-padding mt-10">
        <div className="text-center">
          <a 
            href="#" 
            className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
          >
            View our case studies
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AnimatedLogoCarousel;
