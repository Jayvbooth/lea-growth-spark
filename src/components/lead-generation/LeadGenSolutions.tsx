
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Users, Target, Mail, Briefcase, ChartBar, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface LeadGenSolutionsProps {
  className?: string;
}

const solutions = [
  {
    title: "B2B Account-Based Marketing",
    description: "Target specific accounts with precision outreach campaigns tailored to decision-makers.",
    icon: <Target className="h-6 w-6" />,
    features: [
      "Identify target accounts with AI-powered scoring",
      "Multi-channel outreach (email, LinkedIn, phone)",
      "Personalized messaging for each decision maker",
      "Performance tracking and optimization"
    ]
  },
  {
    title: "Email Automation Campaigns",
    description: "Sophisticated email sequences that adapt based on recipient behavior and engagement.",
    icon: <Mail className="h-6 w-6" />,
    features: [
      "Dynamic content personalization",
      "Behavior-triggered follow-ups",
      "A/B testing for subject lines and content",
      "Deliverability optimization"
    ]
  },
  {
    title: "LinkedIn Outreach",
    description: "Professional social selling campaigns that leverage LinkedIn's powerful networking capabilities.",
    icon: <Users className="h-6 w-6" />,
    features: [
      "Profile optimization for outreach",
      "Connection request campaigns with personalization",
      "InMail and messaging sequences",
      "Content engagement automation"
    ]
  },
  {
    title: "Industry-Specific Lead Generation",
    description: "Custom lead generation solutions tailored to the unique challenges of your industry.",
    icon: <Briefcase className="h-6 w-6" />,
    features: [
      "Industry-specific prospect databases",
      "Messaging templates proven in your sector",
      "Compliance with industry regulations",
      "Benchmarking against industry standards"
    ]
  },
  {
    title: "Pipeline Development & Qualification",
    description: "Turn cold prospects into qualified opportunities through strategic nurturing.",
    icon: <ChartBar className="h-6 w-6" />,
    features: [
      "Lead qualification frameworks",
      "Automated nurturing sequences",
      "Meeting scheduling and confirmation",
      "CRM integration for seamless handoff"
    ]
  },
  {
    title: "Data Enrichment & List Building",
    description: "Build high-quality prospect lists and enrich existing data for better targeting.",
    icon: <Database className="h-6 w-6" />,
    features: [
      "Custom list building with multiple data sources",
      "Contact and company data enrichment",
      "Data cleaning and validation",
      "Ongoing database maintenance"
    ]
  }
];

const LeadGenSolutions: React.FC<LeadGenSolutionsProps> = ({ className }) => {
  return (
    <section className={cn("py-16 bg-monochrome-50", className)}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comprehensive Lead Generation Solutions
          </h2>
          <p className="text-lg text-monochrome-700">
            We offer a complete suite of lead generation services tailored to your industry, target audience, and growth goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md border border-monochrome-100 hover:shadow-lg transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-5">
                <div className="text-green-600">
                  {solution.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
              <p className="text-monochrome-600 mb-5">{solution.description}</p>

              <ul className="space-y-2 mb-6">
                {solution.features.map((feature, featIndex) => (
                  <li key={featIndex} className="flex items-start">
                    <svg 
                      className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-monochrome-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
            <Link to="/assessment">
              Get a Custom Strategy
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LeadGenSolutions;
