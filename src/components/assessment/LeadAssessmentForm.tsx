
import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Check, ArrowRight, Building, Mail, User, Users, Send, Calendar, Link } from "lucide-react";
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
import CalendarBooking from './CalendarBooking';

// Define the webhook URL for Make.com (replace with your actual webhook URL)
const MAKE_WEBHOOK_URL = "https://hook.eu1.make.com/your-webhook-id"; // Replace with your Make.com webhook

// Define form validation schema
const formSchema = z.object({
  // Step 1: Initial Interest Selection
  primaryInterest: z.string().min(1, { message: "Please select your primary interest" }),
  
  // Step 2: Personal & Business Information
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  companyName: z.string().min(1, { message: "Please enter your company name" }),
  website: z.string().min(1, { message: "Please enter your company website" }),
  businessType: z.string().min(1, { message: "Please select your business type" }),
  revenue: z.string().min(1, { message: "Please select your revenue range" }),
  
  // Step 3: Business Pain Points
  painPoints: z.array(z.string()).min(1, { message: "Please select at least one pain point" }),
  
  // Step 4: Lead Generation Specific (conditional)
  leadSources: z.array(z.string()).optional(),
  currentLeadVolume: z.string().optional(),
  
  // Step 5: Business Automation Specific (conditional)
  currentSystems: z.array(z.string()).optional(),
  manualProcesses: z.string().optional(),
  
  // Step 6: Goals & Timeline (always shown)
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
  const [showCalendar, setShowCalendar] = useState(false);
  const [formPath, setFormPath] = useState<"both" | "leadgen" | "automation" | null>(null);
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

  // Determine total steps based on selected path
  const getTotalSteps = () => {
    if (!formPath) return 6;
    if (formPath === "both") return 6;
    if (formPath === "leadgen") return 5;
    if (formPath === "automation") return 5;
    return 6;
  };
  
  const totalSteps = getTotalSteps();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      companyName: "",
      website: "",
      businessType: "",
      revenue: "",
      primaryInterest: "",
      painPoints: [],
      leadSources: [],
      currentLeadVolume: "",
      currentSystems: [],
      manualProcesses: "",
      goals: "",
      timeline: "",
      additionalInfo: "",
    },
  });
  
  // Watch the primary interest to determine the form path
  const primaryInterest = form.watch("primaryInterest");
  
  useEffect(() => {
    if (primaryInterest === "Lead Generation") {
      setFormPath("leadgen");
    } else if (primaryInterest === "Business Automation") {
      setFormPath("automation");
    } else if (primaryInterest === "Both Lead Generation & Automation") {
      setFormPath("both");
    }
  }, [primaryInterest]);
  
  // Primary interest options - this determines the path
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
  
  // Revenue options
  const revenueOptions: SelectableOption[] = [
    { icon: "💰", label: "Less than $100K", value: "Less than $100K" },
    { icon: "💰💰", label: "$100K - $500K", value: "$100K - $500K" },
    { icon: "💰💰💰", label: "$500K - $1M", value: "$500K - $1M" },
    { icon: "💰💰💰💰", label: "$1M - $5M", value: "$1M - $5M" },
    { icon: "💰💰💰💰💰", label: "$5M - $10M", value: "$5M - $10M" },
    { icon: "💰💰💰💰💰💰", label: "$10M+", value: "$10M+" }
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
  
  // Lead Generation specific options
  const leadSourceOptions = [
    { id: "cold_email", label: "Cold Email", icon: "📧" },
    { id: "linkedin", label: "LinkedIn Outreach", icon: "👔" },
    { id: "paid_ads", label: "Paid Advertising", icon: "💵" },
    { id: "seo", label: "SEO/Content Marketing", icon: "🔍" },
    { id: "social_media", label: "Social Media", icon: "📱" },
    { id: "referrals", label: "Referrals", icon: "👋" },
    { id: "events", label: "Events/Networking", icon: "🎪" },
    { id: "other_source", label: "Other", icon: "🔄" },
  ];
  
  // Lead volume options
  const leadVolumeOptions: SelectableOption[] = [
    { icon: "🔍", label: "0-10 leads per month", value: "0-10 leads per month" },
    { icon: "📊", label: "11-50 leads per month", value: "11-50 leads per month" },
    { icon: "📈", label: "51-200 leads per month", value: "51-200 leads per month" },
    { icon: "📊📈", label: "201+ leads per month", value: "201+ leads per month" }
  ];
  
  // Business Automation specific options
  const systemsOptions = [
    { id: "crm", label: "CRM (Salesforce, HubSpot, etc)", icon: "👥" },
    { id: "marketing", label: "Marketing Automation", icon: "📣" },
    { id: "erp", label: "ERP System", icon: "🏢" },
    { id: "project_mgmt", label: "Project Management", icon: "📝" },
    { id: "accounting", label: "Accounting Software", icon: "💲" },
    { id: "custom", label: "Custom/Proprietary System", icon: "🔧" },
    { id: "spreadsheets", label: "Spreadsheets/Manual", icon: "📊" },
    { id: "none", label: "No systems in place", icon: "❌" }
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
        fieldsToValidate = ["primaryInterest"];
        break;
      case 2:
        fieldsToValidate = ["fullName", "email", "companyName", "website", "businessType", "revenue"];
        break;
      case 3:
        fieldsToValidate = ["painPoints"];
        break;
      case 4:
        // Validate based on path
        if (formPath === "leadgen") {
          fieldsToValidate = ["leadSources", "currentLeadVolume"];
        } else if (formPath === "automation") {
          fieldsToValidate = ["currentSystems", "manualProcesses"];
        }
        break;
      case 5:
      case 6:
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
      
      const formData = form.getValues();
      setSubmittedData(formData);
      
      // Send data to Make.com webhook
      const response = await fetch(MAKE_WEBHOOK_URL, {
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
  
  // Interactive primary interest selector (first step)
  const PrimaryInterestSelector = () => {
    const selectedValue = form.watch("primaryInterest");
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
  
  // Interactive lead sources selector
  const LeadSourcesSelector = () => {
    const leadSources = form.watch("leadSources") || [];
    
    const toggleLeadSource = (id: string) => {
      const currentSources = form.getValues("leadSources") || [];
      if (currentSources.includes(id)) {
        form.setValue("leadSources", currentSources.filter(item => item !== id));
      } else {
        form.setValue("leadSources", [...currentSources, id]);
      }
    };
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {leadSourceOptions.map((option) => (
          <div 
            key={option.id}
            className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 flex items-center ${
              leadSources.includes(option.id)
                ? 'border-green-500 bg-green-50 shadow-sm'
                : 'border-gray-200 hover:border-green-300'
            }`}
            onClick={() => toggleLeadSource(option.id)}
          >
            <div className="text-2xl mr-3">{option.icon}</div>
            <div 
              className={`w-5 h-5 rounded border flex-shrink-0 mr-3 flex items-center justify-center ${
                leadSources.includes(option.id)
                  ? 'bg-green-500 border-green-500'
                  : 'border-gray-300'
              }`}
            >
              {leadSources.includes(option.id) && (
                <Check className="w-3 h-3 text-white" />
              )}
            </div>
            <span className="text-gray-800">{option.label}</span>
          </div>
        ))}
      </div>
    );
  };
  
  // Interactive lead volume selector
  const LeadVolumeSelector = () => {
    const selectedValue = form.watch("currentLeadVolume");
    
    return (
      <div className="space-y-3">
        {leadVolumeOptions.map((option, index) => (
          <div 
            key={index}
            className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 flex items-center ${
              selectedValue === option.value
                ? 'border-green-500 bg-green-50 shadow-sm'
                : 'border-gray-200 hover:border-green-300'
            }`}
            onClick={() => form.setValue("currentLeadVolume", option.value)}
          >
            <div className="text-2xl mr-4">{option.icon}</div>
            <span className="text-gray-800">{option.label}</span>
          </div>
        ))}
      </div>
    );
  };
  
  // Interactive systems selector
  const SystemsSelector = () => {
    const currentSystems = form.watch("currentSystems") || [];
    
    const toggleSystem = (id: string) => {
      const systems = form.getValues("currentSystems") || [];
      if (systems.includes(id)) {
        form.setValue("currentSystems", systems.filter(item => item !== id));
      } else {
        form.setValue("currentSystems", [...systems, id]);
      }
    };
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {systemsOptions.map((option) => (
          <div 
            key={option.id}
            className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 flex items-center ${
              currentSystems.includes(option.id)
                ? 'border-green-500 bg-green-50 shadow-sm'
                : 'border-gray-200 hover:border-green-300'
            }`}
            onClick={() => toggleSystem(option.id)}
          >
            <div className="text-2xl mr-3">{option.icon}</div>
            <div 
              className={`w-5 h-5 rounded border flex-shrink-0 mr-3 flex items-center justify-center ${
                currentSystems.includes(option.id)
                  ? 'bg-green-500 border-green-500'
                  : 'border-gray-300'
              }`}
            >
              {currentSystems.includes(option.id) && (
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
          
          {!showCalendar ? (
            <div className="p-6 md:p-8">
              {renderStepIndicator()}
              
              <Form {...form}>
                <form>
                  {/* Step 1: Choose Primary Interest (this determines the form path) */}
                  {currentStep === 1 && (
                    <div className="space-y-6 animate-fade-in">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        What can we help you with?
                      </h2>
                      <p className="text-gray-600 mb-6">
                        This will help us tailor the assessment to your specific needs.
                      </p>
                      
                      <FormField
                        control={form.control}
                        name="primaryInterest"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <PrimaryInterestSelector />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}
                  
                  {/* Step 2: Business Information (combined on one page as requested) */}
                  {currentStep === 2 && (
                    <div className="space-y-6 animate-fade-in">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Tell Us About Your Business
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Let's get to know you and your business better.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                              <FormLabel>Company Website</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Link className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                  <Input 
                                    {...field} 
                                    placeholder="https://www.yourcompany.com" 
                                    className="pl-10"
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
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
                  
                  {/* Step 3: Pain Points (always shown) */}
                  {currentStep === 3 && (
                    <div className="space-y-6 animate-fade-in">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Your Business Challenges
                      </h2>
                      <p className="text-gray-600 mb-6">
                        What challenges are you currently facing in your business?
                      </p>
                      
                      <FormField
                        control={form.control}
                        name="painPoints"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Select all that apply:</FormLabel>
                            <FormControl>
                              <PainPointSelector />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}
                  
                  {/* Step 4: Lead Generation Specific Questions */}
                  {currentStep === 4 && (formPath === "leadgen" || formPath === "both") && (
                    <div className="space-y-6 animate-fade-in">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Your Lead Generation Process
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Tell us about how you currently generate leads for your business.
                      </p>
                      
                      <FormField
                        control={form.control}
                        name="leadSources"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>How do you currently acquire customers? (Select all that apply)</FormLabel>
                            <FormControl>
                              <LeadSourcesSelector />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="currentLeadVolume"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>What is your current lead volume?</FormLabel>
                            <FormControl>
                              <LeadVolumeSelector />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}
                  
                  {/* Step 4: Business Automation Specific Questions */}
                  {currentStep === 4 && (formPath === "automation" || formPath === "both") && formPath !== "leadgen" && (
                    <div className="space-y-6 animate-fade-in">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Your Current Systems & Processes
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Tell us about your existing business systems and workflows.
                      </p>
                      
                      <FormField
                        control={form.control}
                        name="currentSystems"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>What systems do you currently use? (Select all that apply)</FormLabel>
                            <FormControl>
                              <SystemsSelector />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="manualProcesses"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>What manual processes would you like to automate?</FormLabel>
                            <FormControl>
                              <Textarea 
                                {...field} 
                                placeholder="Describe the workflows or tasks you'd like to automate..." 
                                className="min-h-[100px]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}
                  
                  {/* Step 5/6: Goals & Timeline (always shown) */}
                  {(currentStep === 5 || currentStep === 6) && currentStep === totalSteps && (
                    <div className="space-y-6 animate-fade-in">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Your Goals & Timeline
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Let us understand your objectives and timeframe.
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
                </form>
              </Form>
            </div>
          ) : (
            <div className="p-6 md:p-8">
              <CalendarBooking leadData={submittedData || {}} />
            </div>
          )}
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
                setShowSuccessDialog(false);
                setShowCalendar(true);
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
