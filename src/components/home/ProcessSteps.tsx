
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We analyze your business, industry, and competition to identify opportunities.",
    icon: "🔍"
  },
  {
    number: "02",
    title: "Strategy",
    description: "We develop a tailored growth roadmap based on your unique strengths.",
    icon: "📈"
  },
  {
    number: "03",
    title: "Implementation",
    description: "Our team executes with precision, implementing systems that convert.",
    icon: "⚙️"
  },
  {
    number: "04",
    title: "Optimization",
    description: "We continuously test, refine, and optimize to maximize performance.",
    icon: "📊"
  }
];

const ProcessSteps = () => {
  return (
    <section className="py-20 bg-[#FAFBFC] relative overflow-hidden grain-overlay">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-green-50 rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-green-50 rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-br from-green-100/10 to-green-200/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto container-padding relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-green-100 border border-green-200 text-green-700 font-medium text-sm mb-5 animate-fade-in">OUR METHODOLOGY</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
            <span className="relative after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-1 after:bg-green-500/30 after:-z-10">Data-Driven</span>{" "}
            <span className="italic">Process</span> <br className="hidden md:block" />
            For <span className="text-fancy">Predictable</span> Growth
          </h2>
          <p className="text-lg text-monochrome-700 animate-fade-in" style={{ animationDelay: "200ms" }}>
            A systematic approach that turns growth challenges into measurable results.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="card-elevated group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-8 relative z-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:shadow-md transition-all">
                  {step.icon}
                </div>
                <div className="flex items-center mb-4">
                  <span className="text-4xl font-bold text-green-100">{step.number}</span>
                  <span className="ml-3 text-xl font-bold text-monochrome-800">{step.title}</span>
                </div>
                <p className="text-monochrome-600">{step.description}</p>
              </div>
              
              {/* Connection Line (visible on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 h-0.5 bg-gradient-to-r from-green-200 to-green-300/50 w-8 -translate-y-1/2 z-0">
                  <div className="absolute right-0 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-green-500 shadow-glow"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "800ms" }}>
          <Button className="bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all px-6 py-3 rounded-lg flex items-center mx-auto">
            Learn About Our Process
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
