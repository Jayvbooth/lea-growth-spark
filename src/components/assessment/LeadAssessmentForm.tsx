
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Check, ArrowRight, Building, Mail, User, Users, Send, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";

// Define form validation schema
const formSchema = z.object({
  // Step 1: Personal Information
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  companyName: z.string().min(1, { message: "Please enter your company name" }),
  website: z.string().optional(),
  
  // Step 2: Business Information
  businessType: z.string().min(1, { message: "Please select your business type" }),
  employees: z.string().min(1, { message: "Please select your company size" }),
  revenue: z.string().min(1, { message: "Please select your revenue range" }),
  
  // Step 3: Needs Assessment
  primaryInterest: z.string().min(1, { message: "Please select your primary interest" }),
  painPoints: z.array(z.string()).min(1, { message: "Please select at least one pain point" }),
  
  // Step 4: Goals & Timeline
  goals: z.string().min(5, { message: "Please describe your goals" }),
  timeline: z.string().min(1, { message: "Please select your timeline" }),
  additionalInfo: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

// Option types for visual interactive elements
type SituationOption = {
  icon: string;
  title: string;
  description: string;
  value: string;
};

type SelectableOption = {
  icon: string;
  label: string;
  value: string;
};

const LeadAssessmentForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState("");
  const totalSteps = 4;
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      companyName: "",
      website: "",
      businessType: "",
      employees: "",
      revenue: "",
      primaryInterest: "",
      painPoints: [],
      goals: "",
      timeline: "",
      additionalInfo: "",
    },
  });
  
  // Business situation options with emojis
  const situationOptions: SituationOption[] = [
    {
      icon: "⚡️",
      title: "B2B Services",
      description: "You provide services to other businesses",
      value: "B2B Services"
    },
    {
      icon: "📦",
      title: "B2B Products",
      description: "You sell products to other businesses",
      value: "B2B Products"
    },
    {
      icon: "👥",
      title: "B2C Services",
      description: "You provide services to consumers",
      value: "B2C Services"
    },
    {
      icon: "🛍️",
      title: "B2C Products",
      description: "You sell products to consumers",
      value: "B2C Products"
    },
    {
      icon: "🏢",
      title: "Agency/Consulting",
      description: "You provide professional expertise",
      value: "Agency/Consulting"
    },
    {
      icon: "💻",
      title: "SaaS/Technology",
      description: "You provide software solutions",
      value: "SaaS/Technology"
    },
    {
      icon: "🏥",
      title: "Healthcare",
      description: "You provide healthcare services",
      value: "Healthcare"
    },
    {
      icon: "🔄",
      title: "Other",
      description: "None of the above",
      value: "Other"
    }
  ];
  
  // Company size options
  const employeeOptions: SelectableOption[] = [
    { icon: "👤", label: "1-10 employees", value: "1-10 employees" },
    { icon: "👥", label: "11-50 employees", value: "11-50 employees" },
    { icon: "🏢", label: "51-200 employees", value: "51-200 employees" },
    { icon: "🏙️", label: "201-500 employees", value: "201-500 employees" },
    { icon: "🌆", label: "501+ employees", value: "501+ employees" }
  ];
  
  // Revenue options
  const revenueOptions: SelectableOption[] = [
    { icon: "💰", label: "Less than $100K", value: "Less than $100K" },
    { icon: "💰💰", label: "$100K - $500K", value: "$100K - $500K" },
    { icon: "💰💰💰", label: "$500K - $1M", value: "$500K - $1M" },
    { icon: "💰💰💰💰", label: "$1M - $5M", value: "$1M - $5M" },
    { icon: "💰💰💰💰💰", label: "$5M - $10M", value: "$5M - $10M" },
    { icon: "💰💰💰💰💰💰", label: "$10M+", value: "$10M+" }
  ];
  
  // Primary interest options
  const interestOptions: SituationOption[] = [
    {
      icon: "🎯",
      title: "Lead Generation",
      description: "Get more qualified prospects for your business",
      value: "Lead Generation"
    },
    {
      icon: "⚙️",
      title: "Business Automation",
      description: "Streamline your operations and processes",
      value: "Business Automation"
    },
    {
      icon: "🔄",
      title: "Both",
      description: "Need help with both lead gen and automation",
      value: "Both Lead Generation & Automation"
    },
    {
      icon: "❓",
      title: "Not Sure Yet",
      description: "Need guidance on what would help most",
      value: "Not sure yet - Need guidance"
    }
  ];
  
  // Pain point options
  const painPointOptions = [
    { id: "not_enough_leads", label: "Not generating enough leads", icon: "📉" },
    { id: "low_quality_leads", label: "Poor quality leads", icon: "👎" },
    { id: "manual_processes", label: "Too many manual processes", icon: "⚙️" },
    { id: "sales_conversion", label: "Low sales conversion rates", icon: "💸" },
    { id: "marketing_roi", label: "Poor marketing ROI", icon: "📊" },
    { id: "team_efficiency", label: "Team efficiency issues", icon: "👥" },
    { id: "data_silos", label: "Disconnected systems & data", icon: "🔌" },
    { id: "scaling", label: "Difficulty scaling operations", icon: "📈" }
  ];
  
  // Timeline options
  const timelineOptions: SelectableOption[] = [
    { icon: "⚡", label: "Immediate (ASAP)", value: "Immediate (ASAP)" },
    { icon: "🔜", label: "Within 1 month", value: "Within 1 month" },
    { icon: "📅", label: "1-3 months", value: "1-3 months" },
    { icon: "📆", label: "3-6 months", value: "3-6 months" },
    { icon: "🗓️", label: "6+ months", value: "6+ months" },
    { icon: "🔍", label: "Just researching options", value: "Just researching options" }
  ];
  
  const handleNextStep = async () => {
    let fieldsToValidate: string[] = [];
    
    switch(currentStep) {
      case 1:
        fieldsToValidate = ["fullName", "email", "companyName"];
        break;
      case 2:
        fieldsToValidate = ["businessType", "employees", "revenue"];
        break;
      case 3:
        fieldsToValidate = ["primaryInterest", "painPoints"];
        break;
      case 4:
        fieldsToValidate = ["goals", "timeline"];
        break;
    }
    
    const result = await form.trigger(fieldsToValidate as any);
    
    if (result) {
      if (currentStep < totalSteps) {
        setCurrentStep(prev => prev + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        handleSubmit();
      }
    }
  };
  
  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  
  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      
      if (!webhookUrl) {
        toast.error("Webhook URL is not configured");
        setIsSubmitting(false);
        return;
      }
      
      const formData = form.getValues();
      
      // Send data to webhook
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // Handle CORS
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          source: window.location.href,
        }),
      });
      
      console.log("Form submitted:", formData);
      
      // Since we're using no-cors, we'll assume success
      setShowSuccessDialog(true);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error submitting your assessment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const renderStepIndicator = () => {
    return (
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
                  ? 'bg-green-500'
                  : index + 1 < currentStep
                    ? 'bg-green-300'
                    : 'bg-gray-200'
              }`}
            ></div>
          ))}
        </div>
      </div>
    );
  };
  
  // Interactive business type selector
  const BusinessTypeSelector = () => {
    const selectedValue = form.watch("businessType");
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {situationOptions.map((option, index) => (
          <div 
            key={index}
            className={`p-5 border rounded-xl cursor-pointer transition-all duration-200 ${
              selectedValue === option.value
                ? 'border-green-500 bg-green-50 shadow-md'
                : 'border-gray-200 hover:border-green-300 hover:shadow-sm'
            }`}
            onClick={() => form.setValue("businessType", option.value)}
          >
            <div className="flex items-start">
              <div className="text-3xl mr-4">{option.icon}</div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">{option.title}</h4>
                <p className="text-sm text-gray-600">{option.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  // Interactive company size selector
  const CompanySizeSelector = () => {
    const selectedValue = form.watch("employees");
    
    return (
      <div className="space-y-3">
        {employeeOptions.map((option, index) => (
          <div 
            key={index}
            className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 flex items-center ${
              selectedValue === option.value
                ? 'border-green-500 bg-green-50 shadow-sm'
                : 'border-gray-200 hover:border-green-300'
            }`}
            onClick={() => form.setValue("employees", option.value)}
          >
            <div className="text-2xl mr-4">{option.icon}</div>
            <span className="text-gray-800">{option.label}</span>
          </div>
        ))}
      </div>
    );
  };
  
  // Interactive revenue selector
  const RevenueSelector = () => {
    const selectedValue = form.watch("revenue");
    
    return (
      <div className="space-y-3">
        {revenueOptions.map((option, index) => (
          <div 
            key={index}
            className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 flex items-center ${
              selectedValue === option.value
                ? 'border-green-500 bg-green-50 shadow-sm'
                : 'border-gray-200 hover:border-green-300'
            }`}
            onClick={() => form.setValue("revenue", option.value)}
          >
            <div className="text-lg mr-4">{option.icon}</div>
            <span className="text-gray-800">{option.label}</span>
          </div>
        ))}
      </div>
    );
  };
  
  // Interactive primary interest selector
  const PrimaryInterestSelector = () => {
    const selectedValue = form.watch("primaryInterest");
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {interestOptions.map((option, index) => (
          <div 
            key={index}
            className={`p-5 border rounded-xl cursor-pointer transition-all duration-200 ${
              selectedValue === option.value
                ? 'border-green-500 bg-green-50 shadow-md'
                : 'border-gray-200 hover:border-green-300 hover:shadow-sm'
            }`}
            onClick={() => form.setValue("primaryInterest", option.value)}
          >
            <div className="flex items-start">
              <div className="text-3xl mr-4">{option.icon}</div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">{option.title}</h4>
                <p className="text-sm text-gray-600">{option.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  // Interactive pain point selector
  const PainPointSelector = () => {
    const painPoints = form.watch("painPoints") || [];
    
    const togglePainPoint = (id: string) => {
      const currentPainPoints = form.getValues("painPoints") || [];
      if (currentPainPoints.includes(id)) {
        form.setValue("painPoints", currentPainPoints.filter(item => item !== id));
      } else {
        form.setValue("painPoints", [...currentPainPoints, id]);
      }
    };
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {painPointOptions.map((option) => (
          <div 
            key={option.id}
            className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 flex items-center ${
              painPoints.includes(option.id)
                ? 'border-green-500 bg-green-50 shadow-sm'
                : 'border-gray-200 hover:border-green-300'
            }`}
            onClick={() => togglePainPoint(option.id)}
          >
            <div className="text-2xl mr-3">{option.icon}</div>
            <div 
              className={`w-5 h-5 rounded border flex-shrink-0 mr-3 flex items-center justify-center ${
                painPoints.includes(option.id)
                  ? 'bg-green-500 border-green-500'
                  : 'border-gray-300'
              }`}
            >
              {painPoints.includes(option.id) && (
                <Check className="w-3 h-3 text-white" />
              )}
            </div>
            <span className="text-gray-800">{option.label}</span>
          </div>
        ))}
      </div>
    );
  };
  
  // Interactive timeline selector
  const TimelineSelector = () => {
    const selectedValue = form.watch("timeline");
    
    return (
      <div className="space-y-3">
        {timelineOptions.map((option, index) => (
          <div 
            key={index}
            className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 flex items-center ${
              selectedValue === option.value
                ? 'border-green-500 bg-green-50 shadow-sm'
                : 'border-gray-200 hover:border-green-300'
            }`}
            onClick={() => form.setValue("timeline", option.value)}
          >
            <div className="text-2xl mr-4">{option.icon}</div>
            <span className="text-gray-800">{option.label}</span>
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100">
          {/* Progress Bar */}
          <div className="w-full bg-gray-100">
            <div 
              className="bg-gradient-to-r from-green-400 to-green-500 h-1.5 transition-all duration-500 ease-out"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
          
          <div className="p-6 md:p-8">
            {renderStepIndicator()}
            
            <Form {...form}>
              <form>
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Let's Get Acquainted
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Start by sharing some basic information about you and your business.
                    </p>
                    
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input 
                                {...field} 
                                placeholder="Your full name" 
                                className="pl-10"
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input 
                                {...field} 
                                type="email" 
                                placeholder="you@company.com" 
                                className="pl-10"
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input 
                                {...field} 
                                placeholder="Your company name" 
                                className="pl-10"
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Website <span className="text-gray-400">(optional)</span></FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="https://www.yourcompany.com" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
                
                {/* Step 2: Business Information */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Tell Us About Your Business
                    </h2>
                    <p className="text-gray-600 mb-6">
                      This information helps us understand your business context better.
                    </p>
                    
                    <FormField
                      control={form.control}
                      name="businessType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What best describes your business?</FormLabel>
                          <FormControl>
                            <BusinessTypeSelector />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="employees"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>How many employees do you have?</FormLabel>
                          <FormControl>
                            <CompanySizeSelector />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="revenue"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What is your annual revenue?</FormLabel>
                          <FormControl>
                            <RevenueSelector />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
                
                {/* Step 3: Needs Assessment */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Your Challenges & Needs
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Help us understand what you're looking to achieve.
                    </p>
                    
                    <FormField
                      control={form.control}
                      name="primaryInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What are you primarily interested in?</FormLabel>
                          <FormControl>
                            <PrimaryInterestSelector />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="painPoints"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What challenges are you facing? (Select all that apply)</FormLabel>
                          <FormControl>
                            <PainPointSelector />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
                
                {/* Step 4: Goals & Timeline */}
                {currentStep === 4 && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Your Goals & Timeline
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Help us understand your objectives and timeframe.
                    </p>
                    
                    <FormField
                      control={form.control}
                      name="goals"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What specific goals are you looking to achieve?</FormLabel>
                          <FormControl>
                            <Textarea 
                              {...field} 
                              placeholder="E.g., Increase qualified leads by 30%, automate our sales follow-up process, etc." 
                              className="min-h-[100px]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="timeline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What's your implementation timeline?</FormLabel>
                          <FormControl>
                            <TimelineSelector />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="additionalInfo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Anything else you'd like to share? <span className="text-gray-400">(optional)</span></FormLabel>
                          <FormControl>
                            <Textarea 
                              {...field} 
                              placeholder="Any additional context that would help us understand your needs better..." 
                              className="min-h-[100px]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
                
                {/* Navigation Buttons */}
                <div className="flex justify-between mt-10">
                  {currentStep > 1 ? (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handlePreviousStep}
                      disabled={isSubmitting}
                    >
                      Back
                    </Button>
                  ) : (
                    <div></div> // Empty div to maintain layout
                  )}
                  
                  <Button
                    type="button"
                    onClick={handleNextStep}
                    disabled={isSubmitting}
                    className="bg-green-500 hover:bg-green-600"
                  >
                    {isSubmitting ? (
                      <Spinner size="sm" className="mr-2" />
                    ) : currentStep < totalSteps ? (
                      <>
                        Next
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Submit Assessment
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
                
                {/* For development: Webhook URL input (would be hidden in production) */}
                <div className="mt-12 pt-6 border-t border-gray-100">
                  <div className="text-sm text-gray-500 mb-2">Webhook URL (for development only)</div>
                  <Input
                    type="text"
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                    placeholder="Enter Zapier webhook URL"
                    className="text-xs"
                  />
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
      
      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">Assessment Completed!</DialogTitle>
            <DialogDescription className="text-center">
              Thank you for completing your growth assessment.
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex flex-col items-center justify-center py-8">
            <div className="mb-6 bg-green-100 p-4 rounded-full">
              <Check className="h-10 w-10 text-green-500" />
            </div>
            
            <h3 className="text-xl font-medium mb-2">Next Steps:</h3>
            <p className="text-gray-600 text-center mb-6">
              Our team will review your assessment and prepare a personalized growth strategy. 
              Let's schedule a call to discuss your tailored plan.
            </p>
            
            <Button 
              className="bg-green-500 hover:bg-green-600 w-full flex items-center justify-center"
              onClick={() => {
                // In a real implementation, this would link to a calendar booking tool
                window.location.href = "/pre-call";
              }}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Strategy Session
            </Button>
            
            <p className="text-sm text-gray-500 text-center mt-4">
              You'll receive a confirmation email with the call details.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default LeadAssessmentForm;
