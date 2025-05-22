
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Check, CheckCircle } from 'lucide-react';

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
      window.scrollTo(0, 0);
    }
  };
  
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo(0, 0);
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
    <section className="py-24 bg-gradient-to-br from-monochrome-50 to-monochrome-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 network-grid-bg"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-500/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-green-500/10 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-monochrome-900 animate-fade-in">
            Discover Your <span className="text-fancy text-green-600">Growth Opportunities</span>
          </h2>
          <p className="text-lg md:text-xl text-monochrome-700 max-w-3xl mx-auto animate-fade-in">
            Complete this quick assessment to identify your biggest growth opportunities and receive a custom plan tailored to your business.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-2xl card-shadow overflow-hidden border border-leadea-gray/30 animate-fade-in">
          {/* Progress Bar */}
          <div className="w-full bg-leadea-gray/30">
            <div 
              className="bg-gradient-to-r from-green-600 to-green-400 h-1.5 transition-all duration-500 ease-out"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
          
          <div className="p-8 md:p-10">
            {/* Step Indicator */}
            <div className="flex items-center justify-between mb-8">
              <p className="font-medium text-monochrome-800">
                Step {currentStep} of {totalSteps}
              </p>
              <div className="flex space-x-2">
                {Array.from({ length: totalSteps }).map((_, index) => (
                  <div 
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index + 1 === currentStep
                        ? 'bg-green-500 scale-110'
                        : index + 1 < currentStep
                          ? 'bg-green-300'
                          : 'bg-gray-200'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Step 1: Current Situation */}
            {currentStep === 1 && (
              <div className="animate-fade-in">
                <h3 className="text-xl md:text-2xl font-bold text-monochrome-900 mb-6">
                  What's your biggest growth challenge?
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {situationOptions.map((option, index) => (
                    <div 
                      key={index}
                      className={`p-5 border rounded-xl cursor-pointer transition-all duration-200 relative ${
                        selectedSituation === index
                          ? 'border-green-500 bg-green-50 shadow-md'
                          : 'border-gray-200 hover:border-green-300 hover:shadow-sm'
                      }`}
                      onClick={() => handleSituationSelect(index)}
                    >
                      {selectedSituation === index && (
                        <div className="absolute top-3 right-3 text-green-500">
                          <Check className="w-5 h-5" />
                        </div>
                      )}
                      <div className="flex items-start">
                        <div className="text-3xl mr-4">{option.icon}</div>
                        <div>
                          <h4 className="font-bold text-monochrome-900 mb-1">{option.title}</h4>
                          <p className="text-sm text-monochrome-700">{option.description}</p>
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
                <h3 className="text-xl md:text-2xl font-bold text-monochrome-900 mb-6">
                  What are your primary growth goals?
                </h3>
                <p className="text-monochrome-700 mb-6">Select all that apply to your business.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {goalOptions.map(goal => (
                    <div 
                      key={goal.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 flex items-center ${
                        selectedGoals.includes(goal.id)
                          ? 'border-green-500 bg-green-50 shadow-sm'
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                      onClick={() => handleGoalToggle(goal.id)}
                    >
                      <div 
                        className={`w-5 h-5 rounded-md border flex-shrink-0 mr-3 flex items-center justify-center ${
                          selectedGoals.includes(goal.id)
                            ? 'bg-green-500 border-green-500'
                            : 'border-gray-300'
                        }`}
                      >
                        {selectedGoals.includes(goal.id) && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <span className="text-monochrome-900">{goal.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Step 3: Current Tools */}
            {currentStep === 3 && (
              <div className="animate-fade-in">
                <h3 className="text-xl md:text-2xl font-bold text-monochrome-900 mb-6">
                  What tools are you currently using?
                </h3>
                <p className="text-monochrome-700 mb-6">Select all tools you use for your business operations.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {toolOptions.map(tool => (
                    <div 
                      key={tool.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 flex items-center ${
                        selectedTools.includes(tool.id)
                          ? 'border-green-500 bg-green-50 shadow-sm'
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                      onClick={() => handleToolToggle(tool.id)}
                    >
                      <div 
                        className={`w-5 h-5 rounded-md border flex-shrink-0 mr-3 flex items-center justify-center ${
                          selectedTools.includes(tool.id)
                            ? 'bg-green-500 border-green-500'
                            : 'border-gray-300'
                        }`}
                      >
                        {selectedTools.includes(tool.id) && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <span className="text-monochrome-900">{tool.label}</span>
                    </div>
                  ))}
                </div>
                
                {/* What You'll Receive Preview */}
                <div className="bg-green-50 p-6 rounded-lg mb-8 border border-green-100">
                  <h4 className="font-bold text-monochrome-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </span>
                    What You'll Receive:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-monochrome-800">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Custom Growth Strategy Report</span>
                    </li>
                    <li className="flex items-center text-monochrome-800">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Personalized Solutions Recommendation</span>
                    </li>
                    <li className="flex items-center text-monochrome-800">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>ROI Calculator Based On Your Inputs</span>
                    </li>
                    <li className="flex items-center text-monochrome-800">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>30-Minute Strategy Call With Our Team</span>
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
                  className="border-gray-300 text-monochrome-800 hover:bg-gray-100 flex items-center"
                  onClick={handlePrevStep}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              ) : (
                <div></div> // Empty div to maintain layout
              )}
              
              {currentStep < totalSteps ? (
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white flex items-center"
                  onClick={handleNextStep}
                  disabled={isNextDisabled()}
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white flex items-center" 
                  onClick={handleSubmit}
                >
                  Get Your Custom Growth Plan
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-sm text-monochrome-600 mb-6">Trusted by 200+ B2B companies</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <div className="w-24 h-12 bg-monochrome-300/30 rounded flex items-center justify-center">Logo 1</div>
            <div className="w-24 h-12 bg-monochrome-300/30 rounded flex items-center justify-center">Logo 2</div>
            <div className="w-24 h-12 bg-monochrome-300/30 rounded flex items-center justify-center">Logo 3</div>
            <div className="w-24 h-12 bg-monochrome-300/30 rounded flex items-center justify-center">Logo 4</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assessment;
