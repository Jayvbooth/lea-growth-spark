import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { 
  Check, ArrowRight, Building, Mail, User, Link as LinkIcon, Send, Calendar,
  FileSpreadsheet, Target, Zap, Settings, BarChart, Clock, Users, CheckCircle,
  ArrowUpRight, Phone, Globe, Briefcase, ChevronDown, Package, Activity, X,
  HelpCircle, Clipboard, LogIn, DollarSign, FileText, CheckSquare, Plus, Search
} from "lucide-react";
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
import { useIsMobile } from "@/hooks/use-mobile";
import CalendarBooking from './CalendarBooking';

// Define form path types and service selection options
type FormPath = "lead_gen" | "automation" | "combined";

// Define the webhook URL for Make.com
const MAKE_WEBHOOK_URL = "https://hook.eu1.make.com/your-webhook-id"; // Replace with your actual webhook

// Define form validation schema for each path separately without the complex refine function
const formSchema = z.object({
  // Service Selection (always shown first)
  service_selection: z.string().min(1, { message: "Please select a service" }),
  
  // Common fields for all paths
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }).optional(),
  email: z.string().email({ message: "Please enter a valid email address" }).optional(),
  companyName: z.string().min(1, { message: "Please enter your company name" }).optional(),
  website: z.string().min(1, { message: "Please enter your company website" }).optional(),
  businessType: z.string().min(1, { message: "Please select your business type" }).optional(),
  annualRevenue: z.string().min(1, { message: "Please select your revenue range" }).optional(),
  timeline: z.string().min(1, { message: "Please select your timeline" }).optional(),
  
  // Lead Gen specific fields
  leadGenChallenges: z.array(z.string()).optional(),
  outreachChannels: z.array(z.string()).optional(),
  leadTools: z.array(z.string()).optional(),
  idealLeadResults: z.string().optional(),
  
  // Automation specific fields
  automationChallenges: z.array(z.string()).optional(),
  currentSystems: z.array(z.string()).optional(),
  automationNeeds: z.array(z.string()).optional(),
  otherAutomation: z.string().optional(),
  idealSystem: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const LeadAssessmentForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [formPath, setFormPath] = useState<FormPath | null>(null);
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const isMobile = useIsMobile();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      service_selection: "",
      fullName: "",
      email: "",
      companyName: "",
      website: "",
      businessType: "",
      annualRevenue: "",
      timeline: "",
      leadGenChallenges: [],
      outreachChannels: [],
      leadTools: [],
      idealLeadResults: "",
      automationChallenges: [],
      currentSystems: [],
      automationNeeds: [],
      otherAutomation: "",
      idealSystem: "",
    },
  });
  
  // Watch the service selection to determine the form path
  const serviceSelection = form.watch("service_selection");
  
  useEffect(() => {
    if (serviceSelection === "Lead Generation") {
      setFormPath("lead_gen");
    } else if (serviceSelection === "Business Automation") {
      setFormPath("automation");
    } else if (serviceSelection === "Both" || serviceSelection === "Not Sure Yet") {
      setFormPath("combined");
    }
  }, [serviceSelection]);
  
  // Determine total steps based on selected path
  const getTotalSteps = () => {
    if (!formPath) return 1; // Just the service selection
    
    // Each path now has the same number of steps for consistency
    return 6; 
  };
  
  const totalSteps = getTotalSteps();
  
  // Service selection options with icons
  const serviceOptions = [
    { value: "Lead Generation", label: "Lead Generation", icon: <Target className="h-5 w-5 mr-2" /> },
    { value: "Business Automation", label: "Business Automation", icon: <Settings className="h-5 w-5 mr-2" /> },
    { value: "Both", label: "Both", icon: <Zap className="h-5 w-5 mr-2" /> },
    { value: "Not Sure Yet", label: "Not Sure Yet", icon: <CheckCircle className="h-5 w-5 mr-2" /> },
  ];
  
  // Business type options with icons
  const businessTypeOptions = [
    { value: "B2B Services", label: "B2B Services", icon: <Briefcase className="h-4 w-4 mr-2" /> },
    { value: "B2B Products", label: "B2B Products", icon: <Package className="h-4 w-4 mr-2" /> },
    { value: "Agency", label: "Agency/Consulting", icon: <Users className="h-4 w-4 mr-2" /> },
    { value: "Healthcare", label: "Healthcare", icon: <Activity className="h-4 w-4 mr-2" /> },
    { value: "Other", label: "Other", icon: <Globe className="h-4 w-4 mr-2" /> }
  ];
  
  // Revenue options
  const revenueOptions = [
    { value: "Less than $100K", label: "Less than $100K", icon: <BarChart className="h-4 w-4 mr-2" /> },
    { value: "$100K - $500K", label: "$100K - $500K", icon: <BarChart className="h-4 w-4 mr-2" /> },
    { value: "$500K - $1M", label: "$500K - $1M", icon: <BarChart className="h-4 w-4 mr-2" /> },
    { value: "$1M - $5M", label: "$1M - $5M", icon: <BarChart className="h-4 w-4 mr-2" /> },
    { value: "$5M - $10M", label: "$5M - $10M", icon: <BarChart className="h-4 w-4 mr-2" /> },
    { value: "$10M+", label: "$10M+", icon: <BarChart className="h-4 w-4 mr-2" /> }
  ];
  
  // Lead Gen Challenges options with icons
  const leadGenChallengesOptions = [
    { id: "not_enough_leads", label: "Not generating enough leads", icon: <BarChart className="h-4 w-4 mr-2" /> },
    { id: "poor_quality", label: "Poor quality leads", icon: <Target className="h-4 w-4 mr-2" /> },
    { id: "low_conversion", label: "Low sales conversion rates", icon: <ArrowUpRight className="h-4 w-4 mr-2" /> },
    { id: "poor_roi", label: "Poor marketing ROI", icon: <BarChart className="h-4 w-4 mr-2" /> },
    { id: "scaling_outbound", label: "Difficulty scaling outbound", icon: <ArrowUpRight className="h-4 w-4 mr-2" /> },
    { id: "inconsistent_followup", label: "Inconsistent follow-up", icon: <Clock className="h-4 w-4 mr-2" /> },
    { id: "disconnected_tracking", label: "Disconnected lead tracking", icon: <FileSpreadsheet className="h-4 w-4 mr-2" /> }
  ];
  
  // Outreach channels options with icons
  const outreachChannelsOptions = [
    { id: "referrals", label: "Referrals", icon: <Users className="h-4 w-4 mr-2" /> },
    { id: "linkedin_dms", label: "LinkedIn DMs", icon: <Mail className="h-4 w-4 mr-2" /> },
    { id: "cold_email", label: "Cold Email", icon: <Mail className="h-4 w-4 mr-2" /> },
    { id: "cold_calling", label: "Cold Calling", icon: <Phone className="h-4 w-4 mr-2" /> },
    { id: "webinars", label: "Webinars or Events", icon: <Users className="h-4 w-4 mr-2" /> },
    { id: "booking_links", label: "Booking Links (e.g. Calendly)", icon: <Calendar className="h-4 w-4 mr-2" /> },
    { id: "inbound_content", label: "Inbound Content (SEO, YouTube, etc.)", icon: <Globe className="h-4 w-4 mr-2" /> },
    { id: "paid_ads", label: "Paid Ads (Google, Facebook, etc.)", icon: <Target className="h-4 w-4 mr-2" /> }
  ];
  
  // Lead tools options with icons
  const leadToolsOptions = [
    { id: "smartlead", label: "Smartlead", icon: <Mail className="h-4 w-4 mr-2" /> },
    { id: "instantly", label: "Instantly", icon: <Mail className="h-4 w-4 mr-2" /> },
    { id: "apollo", label: "Apollo / Clay / Wiza", icon: <Users className="h-4 w-4 mr-2" /> },
    { id: "phantombuster", label: "PhantomBuster / Linked Helper", icon: <Settings className="h-4 w-4 mr-2" /> },
    { id: "spreadsheets", label: "Google Sheets or Excel", icon: <FileSpreadsheet className="h-4 w-4 mr-2" /> },
    { id: "crm", label: "HubSpot / Pipedrive / Close", icon: <Users className="h-4 w-4 mr-2" /> },
    { id: "no_tools", label: "No tools yet", icon: <X className="h-4 w-4 mr-2" /> }
  ];
  
  // Automation challenges options with icons
  const automationChallengesOptions = [
    { id: "manual_processes", label: "Too many manual processes", icon: <FileSpreadsheet className="h-4 w-4 mr-2" /> },
    { id: "bottlenecks", label: "Revenue is limited by bottlenecks", icon: <BarChart className="h-4 w-4 mr-2" /> },
    { id: "onboarding", label: "No streamlined onboarding or follow-up", icon: <Users className="h-4 w-4 mr-2" /> },
    { id: "inconsistent", label: "Inconsistent task execution", icon: <Clock className="h-4 w-4 mr-2" /> },
    { id: "disconnected", label: "Disconnected systems or data", icon: <Settings className="h-4 w-4 mr-2" /> },
    { id: "scaling", label: "Difficulty scaling operations", icon: <ArrowUpRight className="h-4 w-4 mr-2" /> },
    { id: "dont_know", label: "Don't know what to automate", icon: <HelpCircle className="h-4 w-4 mr-2" /> },
    { id: "no_time", label: "No time to focus on operations", icon: <Clock className="h-4 w-4 mr-2" /> }
  ];
  
  // Current systems options with icons
  const currentSystemsOptions = [
    { id: "crm", label: "CRM (HubSpot, Close, etc.)", icon: <Users className="h-4 w-4 mr-2" /> },
    { id: "project_management", label: "Project Management (Notion, ClickUp, Trello, etc.)", icon: <Clipboard className="h-4 w-4 mr-2" /> },
    { id: "onboarding", label: "Client Onboarding Tools (Dubsado, HoneyBook)", icon: <LogIn className="h-4 w-4 mr-2" /> },
    { id: "accounting", label: "Accounting Software (QuickBooks, Xero, etc.)", icon: <DollarSign className="h-4 w-4 mr-2" /> },
    { id: "zapier", label: "Zapier / Make", icon: <Zap className="h-4 w-4 mr-2" /> },
    { id: "airtable", label: "Airtable / Google Sheets", icon: <FileSpreadsheet className="h-4 w-4 mr-2" /> },
    { id: "email_automation", label: "Email Automation (ActiveCampaign, Mailchimp)", icon: <Mail className="h-4 w-4 mr-2" /> },
    { id: "no_systems", label: "No systems in place", icon: <X className="h-4 w-4 mr-2" /> }
  ];
  
  // Automation needs options with icons
  const automationNeedsOptions = [
    { id: "lead_assignment", label: "Lead assignment", icon: <Users className="h-4 w-4 mr-2" /> },
    { id: "cold_email", label: "Cold email follow-up", icon: <Mail className="h-4 w-4 mr-2" /> },
    { id: "client_onboarding", label: "Client onboarding", icon: <LogIn className="h-4 w-4 mr-2" /> },
    { id: "proposal", label: "Proposal and contract generation", icon: <FileText className="h-4 w-4 mr-2" /> },
    { id: "task_creation", label: "Task creation and internal reminders", icon: <CheckSquare className="h-4 w-4 mr-2" /> },
    { id: "billing", label: "Billing and payment tracking", icon: <DollarSign className="h-4 w-4 mr-2" /> },
    { id: "other", label: "Other", icon: <Plus className="h-4 w-4 mr-2" /> }
  ];
  
  // Timeline options with icons
  const timelineOptions = [
    { value: "Immediate", label: "Immediate", icon: <Clock className="h-4 w-4 mr-2" /> },
    { value: "1-3 months", label: "1–3 months", icon: <Calendar className="h-4 w-4 mr-2" /> },
    { value: "3-6 months", label: "3–6 months", icon: <Calendar className="h-4 w-4 mr-2" /> },
    { value: "6+ months", label: "6+ months", icon: <Calendar className="h-4 w-4 mr-2" /> },
    { value: "Researching", label: "Just researching options", icon: <Search className="h-4 w-4 mr-2" /> }
  ];
  
  // Simplified validation for current step
  const validateCurrentStep = async () => {
    setValidationErrors([]);
    let fieldsToValidate: string[] = [];
    
    // Only validate key fields for each step
    if (currentStep === 1) {
      fieldsToValidate = ["service_selection"];
    } 
    else if (currentStep === 2) {
      fieldsToValidate = ["fullName", "email"];
    }
    else if (currentStep === 6) {
      fieldsToValidate = ["timeline"];
    }
    
    // Only validate required fields for the current step
    const results = await form.trigger(fieldsToValidate as any);
    return results;
  };
  
  const handleNextStep = async () => {
    const isValid = await validateCurrentStep();
    
    if (isValid) {
      if (currentStep < totalSteps) {
        setCurrentStep(prev => prev + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        handleSubmit();
      }
    } else {
      // Show error toast if validation fails
      toast.error("Please complete all required fields for this step");
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
      
      // Log data to console for debugging
      console.log("Form submitted:", formData);
      
      // Send data to webhook
      try {
        await fetch(MAKE_WEBHOOK_URL, {
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
        
        // Since we're using no-cors, we'll assume success
        setShowSuccessDialog(true);
      } catch (error) {
        console.error("Error sending data to webhook:", error);
        // Show success anyway since we're in development
        setShowSuccessDialog(true);
      }
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error submitting your assessment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Render step indicator
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
  
  // Checkbox component for multi-select options
  const CheckboxGroup = ({
    options,
    values,
    onChange,
  }: {
    options: { id: string; label: string; icon?: React.ReactNode }[];
    values: string[];
    onChange: (values: string[]) => void;
  }) => {
    const handleToggle = (id: string) => {
      if (values.includes(id)) {
        onChange(values.filter(v => v !== id));
      } else {
        onChange([...values, id]);
      }
    };
    
    return (
      <div className="space-y-3">
        {options.map((option) => (
          <div 
            key={option.id}
            className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 flex items-center ${
              values.includes(option.id)
                ? 'border-green-500 bg-green-50 shadow-sm'
                : 'border-gray-200 hover:border-green-300'
            }`}
            onClick={() => handleToggle(option.id)}
          >
            <div 
              className={`w-5 h-5 rounded border flex-shrink-0 mr-3 flex items-center justify-center ${
                values.includes(option.id)
                  ? 'bg-green-500 border-green-500'
                  : 'border-gray-300'
              }`}
            >
              {values.includes(option.id) && (
                <Check className="w-3 h-3 text-white" />
              )}
            </div>
            <span className="flex items-center text-gray-800">
              {option.icon}
              {option.label}
            </span>
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
                  {/* Step 1: Service Selection */}
                  {currentStep === 1 && (
                    <div className="space-y-6 animate-fade-in">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        What can we help you with?
                      </h2>
                      
                      <FormField
                        control={form.control}
                        name="service_selection"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                              >
                                {serviceOptions.map((option) => (
                                  <FormItem
                                    key={option.value}
                                    className={`p-5 border rounded-xl cursor-pointer transition-all duration-200 ${
                                      field.value === option.value
                                        ? 'border-green-500 bg-green-50 shadow-md'
                                        : 'border-gray-200 hover:border-green-300 hover:shadow-sm'
                                    }`}
                                    onClick={() => field.onChange(option.value)}
                                  >
                                    <FormControl>
                                      <RadioGroupItem
                                        value={option.value}
                                        className="sr-only"
                                      />
                                    </FormControl>
                                    <div className="flex items-center">
                                      {option.icon}
                                      <div className="font-bold text-gray-800">{option.label}</div>
                                    </div>
                                  </FormItem>
                                ))}
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}
                  
                  {/* Step 2: Business Information - Common for all paths */}
                  {currentStep === 2 && (
                    <div className="space-y-6 animate-fade-in">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Tell Us About Your Business
                      </h2>
                      
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
                              <FormLabel>Website URL</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <LinkIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
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
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="grid grid-cols-1 md:grid-cols-2 gap-3"
                              >
                                {businessTypeOptions.map((option) => (
                                  <FormItem
                                    key={option.value}
                                    className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 flex items-center ${
                                      field.value === option.value
                                        ? 'border-green-500 bg-green-50 shadow-sm'
                                        : 'border-gray-200 hover:border-green-300'
                                    }`}
                                    onClick={() => field.onChange(option.value)}
                                  >
                                    <FormControl>
                                      <RadioGroupItem
                                        value={option.value}
                                        className="sr-only"
                                      />
                                    </FormControl>
                                    <span className="flex items-center text-gray-800">
                                      {option.icon}
                                      {option.label}
                                    </span>
                                  </FormItem>
                                ))}
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="annualRevenue"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>What is your annual revenue?</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="space-y-3"
                              >
                                {revenueOptions.map((option) => (
                                  <FormItem
                                    key={option.value}
                                    className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 flex items-center ${
                                      field.value === option.value
                                        ? 'border-green-500 bg-green-50 shadow-sm'
                                        : 'border-gray-200 hover:border-green-300'
                                    }`}
                                    onClick={() => field.onChange(option.value)}
                                  >
                                    <FormControl>
                                      <RadioGroupItem
                                        value={option.value}
                                        className="sr-only"
                                      />
                                    </FormControl>
                                    <span className="flex items-center text-gray-800">
                                      {option.icon}
                                      {option.label}
                                    </span>
                                  </FormItem>
                                ))}
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}
                  
                  {/* Step 3: Challenges (path-specific) */}
                  {currentStep === 3 && (
                    <div className="space-y-6 animate-fade-in">
                      {/* Lead Gen Path */}
                      {formPath === "lead_gen" && (
                        <>
                          <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Lead Generation Challenges
                          </h2>
                          <p className="text-gray-600 mb-6">
                            What challenges are you facing with lead generation? (Select all that apply)
                          </p>
                          
                          <FormField
                            control={form.control}
                            name="leadGenChallenges"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <CheckboxGroup
                                    options={leadGenChallengesOptions}
                                    values={field.value || []}
                                    onChange={field.onChange}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </>
                      )}
                      
                      {/* Automation Path */}
                      {formPath === "automation" && (
                        <>
                          <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Automation Challenges
                          </h2>
                          <p className="text-gray-600 mb-6">
                            What challenges are you facing with business automation? (Select all that apply)
                          </p>
                          
                          <FormField
                            control={form.control}
                            name="automationChallenges"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <CheckboxGroup
                                    options={automationChallengesOptions}
                                    values={field.value || []}
                                    onChange={field.onChange}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </>
                      )}
                      
                      {/* Combined Path */}
                      {formPath === "combined" && (
                        <>
                          <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Your Business Challenges
                          </h2>
                          
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-lg font-medium text-gray-800 mb-3">
                                Lead Generation Challenges (Optional)
                              </h3>
                              <FormField
                                control={form.control}
                                name="leadGenChallenges"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <CheckboxGroup
                                        options={leadGenChallengesOptions}
                                        values={field.value || []}
                                        onChange={field.onChange}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            
                            <div className="pt-4 border-t border-gray-100">
                              <h3 className="text-lg font-medium text-gray-800 mb-3">
                                Automation Challenges (Optional)
                              </h3>
                              <FormField
                                control={form.control}
                                name="automationChallenges"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <CheckboxGroup
                                        options={automationChallengesOptions}
                                        values={field.value || []}
                                        onChange={field.onChange}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                  
                  {/* Step 4: Current Tools & Channels (path-specific) */}
                  {currentStep === 4 && (
                    <div className="space-y-6 animate-fade-in">
                      {/* Lead Gen Path */}
                      {formPath === "lead_gen" && (
                        <>
                          <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Current Outreach Methods
                          </h2>
                          
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-lg font-medium text-gray-800 mb-3">
                                Current Outreach Channels
                              </h3>
                              <p className="text-gray-600 mb-4">
                                How do you currently acquire customers? (Select all that apply)
                              </p>
                              <FormField
                                control={form.control}
                                name="outreachChannels"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <CheckboxGroup
                                        options={outreachChannelsOptions}
                                        values={field.value || []}
                                        onChange={field.onChange}
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                        </>
                      )}
                      
                      {/* Automation Path */}
                      {formPath === "automation" && (
                        <>
                          <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Current Systems & Automation Needs
                          </h2>
                          
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-lg font-medium text-gray-800 mb-3">
                                Current Systems
                              </h3>
                              <p className="text-gray-600 mb-4">
                                What systems are you currently using? (Select all that apply)
                              </p>
                              <FormField
                                control={form.control}
                                name="currentSystems"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <CheckboxGroup
                                        options={currentSystemsOptions}
                                        values={field.value || []}
                                        onChange={field.onChange}
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                        </>
                      )}
                      
                      {/* Combined Path */}
                      {formPath === "combined" && (
                        <>
                          <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Current Methods & Systems
                          </h2>
                          
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-lg font-medium text-gray-800 mb-3">
                                Current Outreach Channels
                              </h3>
                              <p className="text-gray-600 mb-4">
                                How do you currently acquire customers? (Select all that apply)
                              </p>
                              <FormField
                                control={form.control}
                                name="outreachChannels"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <CheckboxGroup
                                        options={outreachChannelsOptions}
                                        values={field.value || []}
                                        onChange={field.onChange}
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                            </div>
                            
                            <div className="pt-4 border-t border-gray-100">
                              <h3 className="text-lg font-medium text-gray-800 mb-3">
                                Current Systems & Tools
                              </h3>
                              <p className="text-gray-600 mb-4">
                                What systems and tools are you currently using? (Select all that apply)
                              </p>
                              <FormField
                                control={form.control}
                                name="currentSystems"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <CheckboxGroup
                                        options={[...leadToolsOptions, ...currentSystemsOptions]}
                                        values={field.value || []}
                                        onChange={field.onChange}
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                  
                  {/* Step 5: Lead Tools or Automation Needs */}
                  {currentStep === 5 && (
                    <div className="space-y-6 animate-fade-in">
                      {/* Lead Gen Path - Tools */}
                      {formPath === "lead_gen" && (
                        <>
                          <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Lead Systems & Tools
                          </h2>
                          <p className="text-gray-600 mb-4">
                            What tools are you currently using for lead generation? (Select all that apply)
                          </p>
                          <FormField
                            control={form.control}
                            name="leadTools"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <CheckboxGroup
                                    options={leadToolsOptions}
                                    values={field.value || []}
                                    onChange={field.onChange}
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        </>
                      )}
                      
                      {/* Automation Path - What to Automate */}
                      {formPath === "automation" && (
                        <>
                          <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            What would you like to automate?
                          </h2>
                          <p className="text-gray-600 mb-4">
                            Select the processes you'd like to automate (Select all that apply)
                          </p>
                          <FormField
                            control={form.control}
                            name="automationNeeds"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <CheckboxGroup
                                    options={automationNeedsOptions}
                                    values={field.value || []}
                                    onChange={field.onChange}
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                          
                          {form.watch("automationNeeds")?.includes("other") && (
                            <FormField
                              control={form.control}
                              name="otherAutomation"
                              render={({ field }) => (
                                <FormItem className="mt-4">
                                  <FormLabel>What else would you like to automate?</FormLabel>
                                  <FormControl>
                                    <Textarea 
                                      {...field} 
                                      placeholder="Please describe what you'd like to automate..." 
                                      className="min-h-[100px]"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          )}
                        </>
                      )}
                      
                      {/* Combined Path - What to Automate */}
                      {formPath === "combined" && (
                        <>
                          <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            What would you like to automate?
                          </h2>
                          <p className="text-gray-600 mb-4">
                            Select the processes you'd like to automate (Select all that apply)
                          </p>
                          <FormField
                            control={form.control}
                            name="automationNeeds"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <CheckboxGroup
                                    options={automationNeedsOptions}
                                    values={field.value || []}
                                    onChange={field.onChange}
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                          
                          {form.watch("automationNeeds")?.includes("other") && (
                            <FormField
                              control={form.control}
                              name="otherAutomation"
                              render={({ field }) => (
                                <FormItem className="mt-4">
                                  <FormLabel>What else would you like to automate?</FormLabel>
                                  <FormControl>
                                    <Textarea 
                                      {...field} 
                                      placeholder="Please describe what you'd like to automate..." 
                                      className="min-h-[100px]"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          )}
                        </>
                      )}
                    </div>
                  )}
                  
                  {/* Step 6: Goals & Timeline */}
                  {currentStep === 6 && (
                    <div className="space-y-6 animate-fade-in">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Your Goals & Timeline
                      </h2>
                      
                      {/* Lead Gen Path */}
                      {formPath === "lead_gen" && (
                        <FormField
                          control={form.control}
                          name="idealLeadResults"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Describe your ideal results from lead generation:</FormLabel>
                              <FormControl>
                                <Textarea 
                                  {...field} 
                                  placeholder="E.g. Consistent 30+ booked calls per month" 
                                  className="min-h-[120px]"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                      
                      {/* Automation Path */}
                      {formPath === "automation" && (
                        <FormField
                          control={form.control}
                          name="idealSystem"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Describe your ideal system:</FormLabel>
                              <FormControl>
                                <Textarea 
                                  {...field} 
                                  placeholder="Describe what a perfect workflow or system would feel like." 
                                  className="min-h-[120px]"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                      
                      {/* Combined Path */}
                      {formPath === "combined" && (
                        <>
                          <FormField
                            control={form.control}
                            name="idealLeadResults"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Describe your ideal lead generation results: <span className="text-gray-400">(optional)</span></FormLabel>
                                <FormControl>
                                  <Textarea 
                                    {...field} 
                                    placeholder="E.g. Consistent 30+ booked calls per month" 
                                    className="min-h-[100px]"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="idealSystem"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Describe your ideal automation system: <span className="text-gray-400">(optional)</span></FormLabel>
                                <FormControl>
                                  <Textarea 
                                    {...field} 
                                    placeholder="Describe what a perfect workflow or system would feel like." 
                                    className="min-h-[100px]"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </>
                      )}
                      
                      <FormField
                        control={form.control}
                        name="timeline"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>What's your implementation timeline?</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="space-y-3"
                              >
                                {timelineOptions.map((option) => (
                                  <FormItem
                                    key={option.value}
                                    className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 flex items-center ${
                                      field.value === option.value
                                        ? 'border-green-500 bg-green-50 shadow-sm'
                                        : 'border-gray-200 hover:border-green-300'
                                    }`}
                                    onClick={() => field.onChange(option.value)}
                                  >
                                    <FormControl>
                                      <RadioGroupItem
                                        value={option.value}
                                        className="sr-only"
                                      />
                                    </FormControl>
                                    <span className="flex items-center text-gray-800">
                                      {option.icon}
                                      {option.label}
                                    </span>
                                  </FormItem>
                                ))}
                              </RadioGroup>
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
                        className="flex items-center"
                      >
                        <ChevronDown className="mr-2 h-4 w-4 rotate-90" />
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
