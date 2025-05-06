
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

// Step 1: Current Situation
const situationOptions = [
  {
    icon: "⏱️",
    title: "Manual Processes",
    description: "Too much time spent on repetitive tasks"
  },
  {
    icon: "🎯",
    title: "Lead Quality",
    description: "Struggling to find qualified prospects"
  },
  {
    icon: "🔄",
    title: "Disconnected Systems",
    description: "Using multiple tools that don't work together"
  },
  {
    icon: "📊",
    title: "Growth Plateaued",
    description: "Unable to scale predictably"
  }
];

// Step 2: Goals
const goalOptions = [
  { id: 1, label: "Generate more qualified leads" },
  { id: 2, label: "Automate repetitive tasks" },
  { id: 3, label: "Integrate existing systems" },
  { id: 4, label: "Improve conversion rates" },
  { id: 5, label: "Reduce wasted time" },
  { id: 6, label: "Scale predictable growth" }
];

// Step 3: Current Tools
const toolOptions = [
  { id: 1, label: "CRM (Salesforce, HubSpot, etc.)" },
  { id: 2, label: "Marketing Automation" },
  { id: 3, label: "Email Marketing" },
  { id: 4, label: "Meeting Scheduler" },
  { id: 5, label: "Social Media Tools" },
  { id: 6, label: "Analytics Platform" },
  { id: 7, label: "Project Management" },
  { id: 8, label: "Communication Tools" }
];

const Assessment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSituation, setSelectedSituation] = useState<number | null>(null);
  const [selectedGoals, setSelectedGoals] = useState<number[]>([]);
  const [selectedTools, setSelectedTools] = useState<number[]>([]);
  
  const totalSteps = 3;
  
  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };
  
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };
  
  const handleSituationSelect = (index: number) => {
    setSelectedSituation(index);
  };
  
  const handleGoalToggle = (id: number) => {
    setSelectedGoals(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };
  
  const handleToolToggle = (id: number) => {
    setSelectedTools(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };
  
  const isNextDisabled = () => {
    if (currentStep === 1 && selectedSituation === null) return true;
    if (currentStep === 2 && selectedGoals.length === 0) return true;
    return false;
  };
  
  const handleSubmit = () => {
    // Handle form submission - in a real app, this would send data to backend
    console.log({
      situation: selectedSituation !== null ? situationOptions[selectedSituation] : null,
      goals: selectedGoals.map(id => goalOptions.find(goal => goal.id === id)),
      tools: selectedTools.map(id => toolOptions.find(tool => tool.id === id))
    });
    
    // Reset the form
    setCurrentStep(1);
    setSelectedSituation(null);
    setSelectedGoals([]);
    setSelectedTools([]);
    
    // Show success message or redirect
    alert("Thanks for completing the assessment! We'll prepare your custom growth plan.");
  };
  
  return (
    <section className="py-20">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Discover Your Growth Opportunities
          </h2>
          <p className="text-lg text-leadea-navy opacity-80">
            Take our quick assessment to identify your biggest growth opportunities and receive a custom plan.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-2xl card-shadow overflow-hidden border border-leadea-gray/30">
          {/* Progress Bar */}
          <div className="w-full bg-leadea-gray/30">
            <div 
              className="bg-gradient-to-r from-leadea-green to-leadea-teal h-1.5 transition-all duration-500 ease-out"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
          
          <div className="p-8 md:p-10">
            {/* Step Indicator */}
            <div className="flex items-center justify-between mb-8">
              <p className="font-medium text-leadea-navy">
                Step {currentStep} of {totalSteps}
              </p>
              <div className="flex space-x-2">
                {Array.from({ length: totalSteps }).map((_, index) => (
                  <div 
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full ${
                      index + 1 === currentStep
                        ? 'bg-leadea-green'
                        : index + 1 < currentStep
                          ? 'bg-leadea-green/50'
                          : 'bg-leadea-gray/50'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Step 1: Current Situation */}
            {currentStep === 1 && (
              <div className="animate-fade-in">
                <h3 className="text-xl md:text-2xl font-bold text-leadea-navy mb-6">
                  What's your biggest growth challenge?
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {situationOptions.map((option, index) => (
                    <div 
                      key={index}
                      className={`p-5 border rounded-xl cursor-pointer transition-all duration-200 ${
                        selectedSituation === index
                          ? 'border-leadea-green/50 bg-leadea-green/5 shadow-md'
                          : 'border-leadea-gray/30 hover:border-leadea-green/30 hover:shadow-sm'
                      }`}
                      onClick={() => handleSituationSelect(index)}
                    >
                      <div className="flex items-start">
                        <div className="text-3xl mr-4">{option.icon}</div>
                        <div>
                          <h4 className="font-bold text-leadea-navy mb-1">{option.title}</h4>
                          <p className="text-sm text-leadea-navy/70">{option.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Step 2: Goals */}
            {currentStep === 2 && (
              <div className="animate-fade-in">
                <h3 className="text-xl md:text-2xl font-bold text-leadea-navy mb-6">
                  What are your primary growth goals?
                </h3>
                <p className="text-leadea-navy/70 mb-6">Select all that apply to your business.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {goalOptions.map(goal => (
                    <div 
                      key={goal.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 flex items-center ${
                        selectedGoals.includes(goal.id)
                          ? 'border-leadea-green/50 bg-leadea-green/5 shadow-sm'
                          : 'border-leadea-gray/30 hover:border-leadea-green/30'
                      }`}
                      onClick={() => handleGoalToggle(goal.id)}
                    >
                      <div 
                        className={`w-5 h-5 rounded border flex-shrink-0 mr-3 flex items-center justify-center ${
                          selectedGoals.includes(goal.id)
                            ? 'bg-leadea-green border-leadea-green'
                            : 'border-leadea-gray/50'
                        }`}
                      >
                        {selectedGoals.includes(goal.id) && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="text-leadea-navy">{goal.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Step 3: Current Tools */}
            {currentStep === 3 && (
              <div className="animate-fade-in">
                <h3 className="text-xl md:text-2xl font-bold text-leadea-navy mb-6">
                  What tools are you currently using?
                </h3>
                <p className="text-leadea-navy/70 mb-6">Select all tools you use for your business operations.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {toolOptions.map(tool => (
                    <div 
                      key={tool.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 flex items-center ${
                        selectedTools.includes(tool.id)
                          ? 'border-leadea-green/50 bg-leadea-green/5 shadow-sm'
                          : 'border-leadea-gray/30 hover:border-leadea-green/30'
                      }`}
                      onClick={() => handleToolToggle(tool.id)}
                    >
                      <div 
                        className={`w-5 h-5 rounded border flex-shrink-0 mr-3 flex items-center justify-center ${
                          selectedTools.includes(tool.id)
                            ? 'bg-leadea-green border-leadea-green'
                            : 'border-leadea-gray/50'
                        }`}
                      >
                        {selectedTools.includes(tool.id) && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="text-leadea-navy">{tool.label}</span>
                    </div>
                  ))}
                </div>
                
                {/* Preview */}
                <div className="bg-leadea-gray/30 p-5 rounded-lg mb-8">
                  <h4 className="font-bold text-leadea-navy mb-3">What You'll Receive:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-leadea-navy">
                      <svg className="w-5 h-5 text-leadea-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Custom Growth Strategy Report
                    </li>
                    <li className="flex items-center text-leadea-navy">
                      <svg className="w-5 h-5 text-leadea-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Personalized Solutions Recommendation
                    </li>
                    <li className="flex items-center text-leadea-navy">
                      <svg className="w-5 h-5 text-leadea-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      ROI Calculator Based On Your Inputs
                    </li>
                  </ul>
                </div>
              </div>
            )}
            
            {/* Navigation Buttons */}
            <div className="flex justify-between">
              {currentStep > 1 ? (
                <Button
                  variant="outline"
                  className="border-leadea-navy/20 text-leadea-navy hover:bg-leadea-navy/5"
                  onClick={handlePrevStep}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </Button>
              ) : (
                <div></div> // Empty div to maintain layout
              )}
              
              {currentStep < totalSteps ? (
                <Button
                  className="btn-primary"
                  onClick={handleNextStep}
                  disabled={isNextDisabled()}
                >
                  Next
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              ) : (
                <Button className="btn-primary" onClick={handleSubmit}>
                  Get Your Custom Growth Plan
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assessment;
