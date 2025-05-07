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

const LeadAssessmentForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  // Fix: Replace process.env with a default empty string or a placeholder
  const [webhookUrl, setWebhookUrl] = useState(""); // Removed process.env reference
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
  
  const PainPointCheckbox = ({ id, label }: { id: string, label: string }) => {
    const { control } = form;
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
      <div 
        className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 flex items-center ${
          painPoints.includes(id)
            ? 'border-green-500/50 bg-green-50 shadow-sm'
            : 'border-gray-200 hover:border-green-300'
        }`}
        onClick={() => togglePainPoint(id)}
      >
        <div 
          className={`w-5 h-5 rounded border flex-shrink-0 mr-3 flex items-center justify-center ${
            painPoints.includes(id)
              ? 'bg-green-500 border-green-500'
              : 'border-gray-300'
          }`}
        >
          {painPoints.includes(id) && (
            <Check className="w-3 h-3 text-white" />
          )}
        </div>
        <span className="text-gray-800">{label}</span>
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
                            <RadioGroup 
                              onValueChange={field.onChange} 
                              defaultValue={field.value} 
                              className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2"
                            >
                              {[
                                "B2B Services", 
                                "B2B Products", 
                                "B2C Services", 
                                "B2C Products", 
                                "Agency/Consulting", 
                                "SaaS/Technology", 
                                "Healthcare", 
                                "Other"
                              ].map((type) => (
                                <FormItem key={type} className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value={type} />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">{type}</FormLabel>
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
                      name="employees"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>How many employees do you have?</FormLabel>
                          <FormControl>
                            <RadioGroup 
                              onValueChange={field.onChange} 
                              defaultValue={field.value} 
                              className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2"
                            >
                              {[
                                "1-10 employees", 
                                "11-50 employees", 
                                "51-200 employees", 
                                "201-500 employees",
                                "501+ employees"
                              ].map((range) => (
                                <FormItem key={range} className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value={range} />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">{range}</FormLabel>
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
                      name="revenue"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What is your annual revenue?</FormLabel>
                          <FormControl>
                            <RadioGroup 
                              onValueChange={field.onChange} 
                              defaultValue={field.value} 
                              className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2"
                            >
                              {[
                                "Less than $100K", 
                                "$100K - $500K", 
                                "$500K - $1M", 
                                "$1M - $5M",
                                "$5M - $10M",
                                "$10M+"
                              ].map((range) => (
                                <FormItem key={range} className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value={range} />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">{range}</FormLabel>
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
                            <RadioGroup 
                              onValueChange={field.onChange} 
                              defaultValue={field.value} 
                              className="space-y-3 pt-2"
                            >
                              {[
                                "Lead Generation", 
                                "Business Automation", 
                                "Both Lead Generation & Automation", 
                                "Not sure yet - Need guidance"
                              ].map((option) => (
                                <FormItem key={option} className="flex items-start space-x-3 space-y-0 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                                  <FormControl>
                                    <RadioGroupItem value={option} />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">{option}</FormLabel>
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
                      name="painPoints"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What challenges are you facing? (Select all that apply)</FormLabel>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                            <PainPointCheckbox id="not_enough_leads" label="Not generating enough leads" />
                            <PainPointCheckbox id="low_quality_leads" label="Poor quality leads" />
                            <PainPointCheckbox id="manual_processes" label="Too many manual processes" />
                            <PainPointCheckbox id="sales_conversion" label="Low sales conversion rates" />
                            <PainPointCheckbox id="marketing_roi" label="Poor marketing ROI" />
                            <PainPointCheckbox id="team_efficiency" label="Team efficiency issues" />
                            <PainPointCheckbox id="data_silos" label="Disconnected systems & data" />
                            <PainPointCheckbox id="scaling" label="Difficulty scaling operations" />
                          </div>
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
                            <RadioGroup 
                              onValueChange={field.onChange} 
                              defaultValue={field.value} 
                              className="space-y-3 pt-2"
                            >
                              {[
                                "Immediate (ASAP)", 
                                "Within 1 month", 
                                "1-3 months", 
                                "3-6 months",
                                "6+ months",
                                "Just researching options"
                              ].map((option) => (
                                <FormItem key={option} className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value={option} />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">{option}</FormLabel>
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
