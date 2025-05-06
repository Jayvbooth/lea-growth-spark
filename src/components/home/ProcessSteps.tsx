
import React from 'react';
import { Button } from "@/components/ui/button";

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
    <section className="py-20 bg-monochrome-50 relative overflow-hidden">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-green-600 font-medium mb-2 block">OUR METHODOLOGY</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="underline decoration-green-500 decoration-4 underline-offset-8">Data-Driven</span>{" "}
            <span className="italic">Process</span> <br className="hidden md:block" />
            For <span className="text-fancy">Predictable</span> Growth
          </h2>
          <p className="text-lg text-monochrome-700">
            A systematic approach that turns growth challenges into measurable results.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 hover:translate-y-[-5px] border border-monochrome-100"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center text-2xl mb-6 shadow-soft">
                  {step.icon}
                </div>
                <div className="flex items-center mb-4">
                  <span className="text-4xl font-bold text-monochrome-200">{step.number}</span>
                  <span className="ml-3 text-xl font-bold text-monochrome-800">{step.title}</span>
                </div>
                <p className="text-monochrome-600">{step.description}</p>
              </div>
              
              {/* Connection Line (visible on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full h-0.5 bg-green-200 w-1/2 -translate-y-1/2 -translate-x-6">
                  <div className="absolute right-0 -translate-y-1/2 w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-green-500 hover:bg-green-600 text-white shadow-soft">
            Learn About Our Process
          </Button>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-green-50 rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-green-50 rounded-full blur-3xl opacity-60 -z-10"></div>
    </section>
  );
};

export default ProcessSteps;
