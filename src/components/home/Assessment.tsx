
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Check, CheckCircle, Building, Mail, User, Briefcase, Package, Users, Activity, Globe, BarChart } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";

// Service selection options
const serviceOptions = [
  {
    value: "Lead Generation",
    label: "Lead Generation",
    icon: "🎯",
    description: "Generate qualified leads consistently"
  },
  {
    value: "Business Automation",
    label: "Business Automation",
    icon: "⚙️",
    description: "Automate repetitive tasks and processes" 
  },
  {
    value: "Both",
    label: "Both Services",
    icon: "🚀",
    description: "Comprehensive growth solution"
  },
  {
    value: "Not Sure Yet",
    label: "Not Sure Yet",
    icon: "🤔",
    description: "Get expert recommendations"
  }
];

// Business type options
const businessTypeOptions = [
  { value: "B2B Services", label: "B2B Services", icon: <Briefcase className="h-4 w-4 mr-2" /> },
  { value: "B2B Products", label: "B2B Products", icon: <Package className="h-4 w-4 mr-2" /> },
  { value: "Agency", label: "Agency/Consulting", icon: <Users className="h-4 w-4 mr-2" /> },
  { value: "Healthcare", label: "Healthcare", icon: <Activity className="h-4 w-4 mr-2" /> },
  { value: "Other", label: "Other", icon: <Globe className="h-4 w-4 mr-2" /> }
];

const Assessment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    companyName: '',
    businessType: '',
  });
  
  const totalSteps = 2;
  
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
  
  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
  };

  const handleInputChange = (name: string, value: string) => {
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const isNextDisabled = () => {
    if (currentStep === 1 && !selectedService) return true;
    if (currentStep === 2 && (!formValues.fullName || !formValues.email)) return true;
    return false;
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
            Apply to <span className="text-fancy text-green-600">Work With Us</span>
          </h2>
          <p className="text-lg md:text-xl text-monochrome-700 max-w-3xl mx-auto animate-fade-in">
            Complete this quick assessment to see if we're a good fit and receive a custom plan tailored to your business.
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
            
            {/* Step 1: Service Selection */}
            {currentStep === 1 && (
              <div className="animate-fade-in">
                <h3 className="text-xl md:text-2xl font-bold text-monochrome-900 mb-6">
                  What can we help you with?
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {serviceOptions.map((option, index) => (
                    <div 
                      key={index}
                      className={`p-5 border rounded-xl cursor-pointer transition-all duration-200 relative ${
                        selectedService === option.value
                          ? 'border-green-500 bg-green-50 shadow-md'
                          : 'border-gray-200 hover:border-green-300 hover:shadow-sm'
                      }`}
                      onClick={() => handleServiceSelect(option.value)}
                    >
                      {selectedService === option.value && (
                        <div className="absolute top-3 right-3 text-green-500">
                          <Check className="w-5 h-5" />
                        </div>
                      )}
                      <div className="flex items-start">
                        <div className="text-3xl mr-4">{option.icon}</div>
                        <div>
                          <h4 className="font-bold text-monochrome-900 mb-1">{option.label}</h4>
                          <p className="text-sm text-monochrome-700">{option.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Step 2: Basic Information */}
            {currentStep === 2 && (
              <div className="animate-fade-in space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-monochrome-900 mb-6">
                  Tell Us About Your Business
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-medium text-monochrome-800">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input 
                        id="fullName"
                        value={formValues.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="Your full name" 
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-monochrome-800">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input 
                        id="email"
                        type="email" 
                        value={formValues.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="you@company.com" 
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="companyName" className="text-sm font-medium text-monochrome-800">Company Name</label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      id="companyName"
                      value={formValues.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      placeholder="Your company name" 
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-monochrome-800">What best describes your business?</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {businessTypeOptions.map((option) => (
                      <div 
                        key={option.value}
                        className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 flex items-center ${
                          formValues.businessType === option.value
                            ? 'border-green-500 bg-green-50 shadow-sm'
                            : 'border-gray-200 hover:border-green-300'
                        }`}
                        onClick={() => handleInputChange('businessType', option.value)}
                      >
                        <div 
                          className={`w-5 h-5 rounded-md border flex-shrink-0 mr-3 flex items-center justify-center ${
                            formValues.businessType === option.value
                              ? 'bg-green-500 border-green-500'
                              : 'border-gray-300'
                          }`}
                        >
                          {formValues.businessType === option.value && (
                            <Check className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <span className="flex items-center text-monochrome-900">
                          {option.icon}
                          {option.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* What You'll Receive Preview */}
                <div className="bg-green-50 p-6 rounded-lg my-8 border border-green-100">
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
                  asChild
                >
                  <Link to="/assessment">
                    Continue Your Application
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <div className="bg-white/60 p-4 rounded-lg backdrop-blur-sm inline-block mb-4">
            <p className="text-sm text-monochrome-800 font-medium flex items-center justify-center">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
              100% Satisfaction Guarantee - We deliver results or you don't pay
            </p>
          </div>
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
