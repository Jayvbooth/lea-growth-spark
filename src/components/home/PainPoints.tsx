
import React from 'react';

const painPoints = [
  {
    icon: (
      <svg className="h-10 w-10 text-leadea-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Manual Processes Waste Time",
    description: "Teams spend 40% of their time on repetitive tasks that could be automated, decreasing productivity and focus on high-value activities.",
    stat: "40%",
    statLabel: "Time Wasted"
  },
  {
    icon: (
      <svg className="h-10 w-10 text-leadea-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    title: "Low-Quality Leads Don't Convert",
    description: "Traditional lead generation methods yield only 10-15% qualified prospects, resulting in wasted sales effort and poor conversion rates.",
    stat: "85%",
    statLabel: "Lead Wastage"
  },
  {
    icon: (
      <svg className="h-10 w-10 text-leadea-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Disconnected Systems Create Inefficiency",
    description: "The average B2B company uses 7+ disconnected tools, creating data silos, duplicate work, and missed opportunities for growth.",
    stat: "7+",
    statLabel: "Disconnected Tools"
  }
];

const PainPoints = () => {
  return (
    <section className="py-20 bg-leadea-gray">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The 3 Biggest Growth Bottlenecks for B2B Companies
          </h2>
          <p className="text-lg text-leadea-navy opacity-80">
            These common challenges prevent businesses from scaling efficiently and predictably.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 card-shadow-hover transition-all duration-300 hover:translate-y-[-5px]"
            >
              <div className="bg-leadea-green/10 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-6">
                {point.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-leadea-navy">
                {point.title}
              </h3>
              
              <p className="text-leadea-navy opacity-80 mb-6">
                {point.description}
              </p>
              
              <div className="flex items-center">
                <span className="text-3xl font-bold text-leadea-gold">
                  {point.stat}
                </span>
                <span className="ml-2 text-leadea-navy font-medium">
                  {point.statLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
