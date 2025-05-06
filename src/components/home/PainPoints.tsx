
import React from 'react';

const painPoints = [
  {
    icon: (
      <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    <section className="py-20 bg-[#FAFBFC] relative overflow-hidden grain-overlay">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-40 -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-40 -z-10"></div>
      
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
            The 3 Biggest Growth Bottlenecks for B2B Companies
          </h2>
          <p className="text-lg text-monochrome-700 animate-fade-in" style={{ animationDelay: "100ms" }}>
            These common challenges prevent businesses from scaling efficiently and predictably.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="card-elevated group relative bg-white"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-t-xl"></div>
              
              <div className="p-8">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all">
                  {point.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-monochrome-800 group-hover:text-green-700 transition-colors">
                  {point.title}
                </h3>
                
                <p className="text-monochrome-600 mb-6">
                  {point.description}
                </p>
                
                <div className="flex items-center">
                  <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-500">
                    {point.stat}
                  </span>
                  <span className="ml-2 text-monochrome-700 font-medium">
                    {point.statLabel}
                  </span>
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 border border-green-500/0 rounded-xl group-hover:border-green-500/50 pointer-events-none transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
