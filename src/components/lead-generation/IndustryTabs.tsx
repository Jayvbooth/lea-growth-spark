
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, TrendingUp, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const industryData = {
  saas: {
    painPoints: [
      "Low trial-to-paid conversion rates",
      "High churn on cold outreach campaigns",
      "Difficulty identifying product-qualified leads"
    ],
    approach: [
      "Technographic data to identify compatible tech stacks",
      "Behavior-based intent signals",
      "Recent funding & growth indicators"
    ],
    channelStrategy: [
      "LinkedIn connection + value-add content",
      "Personalized email sequence with case studies",
      "Auto-scheduling for product demos"
    ],
    result: {
      metric: "+42% MQL→SQL in 60 days",
      description: "Increased qualified demo bookings by targeting decision-makers during adoption phases"
    }
  },
  professional: {
    painPoints: [
      "Long sales cycles with multiple decision-makers",
      "Difficulty scaling personalized outreach",
      "Limited industry-specific targeting"
    ],
    approach: [
      "Organizational chart mapping for multi-thread campaigns",
      "Industry-specific content & messaging",
      "Trigger event monitoring (funding, leadership changes)"
    ],
    channelStrategy: [
      "Industry-segmented LinkedIn outreach",
      "Value-driven content nurturing sequence",
      "Referral-focused messaging strategies"
    ],
    result: {
      metric: "3.1× pipeline growth in 90 days",
      description: "Shorter sales cycles through parallel engagement of multiple stakeholders"
    }
  },
  manufacturing: {
    painPoints: [
      "Traditional sales approaches with low digital adoption",
      "Difficulty identifying modernization opportunities",
      "Resistance to new vendor relationships"
    ],
    approach: [
      "Supply chain relationship mapping",
      "Industry-specific pain point targeting",
      "Competitor customer identification"
    ],
    channelStrategy: [
      "Educational content focused on ROI & efficiency",
      "Multi-channel approach with phone follow-up",
      "Case study & social proof emphasis"
    ],
    result: {
      metric: "37% increase in qualified meetings",
      description: "Breaking through traditional procurement barriers with ROI-focused messaging"
    }
  }
};

const IndustryTabs = () => {
  return (
    <Tabs defaultValue="saas" className="w-full">
      <TabsList className="grid grid-cols-3 mb-8 bg-monochrome-100 p-1 rounded-lg">
        <TabsTrigger value="saas" className="data-[state=active]:bg-white py-3">
          SaaS
        </TabsTrigger>
        <TabsTrigger value="professional" className="data-[state=active]:bg-white py-3">
          Professional Services
        </TabsTrigger>
        <TabsTrigger value="manufacturing" className="data-[state=active]:bg-white py-3">
          Manufacturing
        </TabsTrigger>
      </TabsList>
      
      {/* SaaS Content */}
      <TabsContent value="saas">
        <IndustryTabContent 
          title="SaaS Lead Generation"
          data={industryData.saas}
        />
      </TabsContent>
      
      {/* Professional Services Content */}
      <TabsContent value="professional">
        <IndustryTabContent 
          title="Professional Services Lead Generation"
          data={industryData.professional}
        />
      </TabsContent>
      
      {/* Manufacturing Content */}
      <TabsContent value="manufacturing">
        <IndustryTabContent 
          title="Manufacturing Lead Generation"
          data={industryData.manufacturing}
        />
      </TabsContent>
    </Tabs>
  );
};

interface IndustryTabContentProps {
  title: string;
  data: {
    painPoints: string[];
    approach: string[];
    channelStrategy: string[];
    result: {
      metric: string;
      description: string;
    };
  };
}

const IndustryTabContent: React.FC<IndustryTabContentProps> = ({ title, data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white rounded-xl p-8 shadow-md space-y-8">
        <div>
          <h3 className="font-bold text-xl mb-4">Common Pain Points</h3>
          <ul className="space-y-3">
            {data.painPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="bg-red-100 text-red-600 p-1 rounded-full mr-3 flex-shrink-0">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                <span className="text-monochrome-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold text-xl mb-4">Our Data-Driven Approach</h3>
          <ul className="space-y-3">
            {data.approach.map((point, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                <span className="text-monochrome-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold text-xl mb-4">Multi-Channel Cadence</h3>
          <ul className="space-y-3">
            {data.channelStrategy.map((point, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-green-100 rounded-full p-1 mr-3 flex-shrink-0">
                  <ChevronRight className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-monochrome-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="flex flex-col">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 shadow-md mb-6 flex-grow">
          <div className="flex items-center mb-6">
            <TrendingUp className="h-10 w-10 text-green-600 mr-4" />
            <h3 className="font-bold text-xl">Key Result Example</h3>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <p className="text-2xl font-bold text-green-600 mb-2">{data.result.metric}</p>
            <p className="text-monochrome-700">{data.result.description}</p>
          </div>
          
          <div className="mt-8">
            <p className="text-sm text-green-700 mb-2 font-medium">Our approach includes:</p>
            <ul className="text-sm space-y-2">
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center mr-2 text-xs">1</div>
                <span>Ideal customer profile development</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center mr-2 text-xs">2</div>
                <span>Data-driven prospect identification</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center mr-2 text-xs">3</div>
                <span>Personalized multi-channel outreach</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center mr-2 text-xs">4</div>
                <span>CRM integration and sales handoff</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Button className="bg-green-600 text-white hover:bg-green-700">
          Learn About Our {title}
        </Button>
      </div>
    </div>
  );
};

export default IndustryTabs;
