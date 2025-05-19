
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// Sample data for the automation metrics chart
const automationData = [
  { name: 'Mon', leads: 12, hours: 5 },
  { name: 'Tue', leads: 19, hours: 6 },
  { name: 'Wed', leads: 15, hours: 4 },
  { name: 'Thu', leads: 22, hours: 7 },
  { name: 'Fri', leads: 28, hours: 8 },
  { name: 'Sat', leads: 18, hours: 5 },
  { name: 'Sun', leads: 15, hours: 4 },
];

const chartConfig = {
  leads: {
    label: "Leads Generated",
    theme: {
      light: "hsl(143, 85%, 58%)",
      dark: "hsl(143, 85%, 58%)",
    },
  },
  hours: {
    label: "Hours Saved",
    theme: {
      light: "hsl(209, 100%, 60%)",
      dark: "hsl(209, 100%, 60%)",
    },
  },
};

const Hero = () => {
  const typedRef = useRef(null);
  const [activeMetric, setActiveMetric] = useState('leads');
  
  useEffect(() => {
    // Initialize Typed.js for animated text
    const typed = new Typed(typedRef.current, {
      strings: [
        'lead generation',
        'workflow automation',
        'client onboarding',
        'cold outreach',
        'sales automation',
        'CRM cleanups',
        'follow-up systems',
        'AI SDRs'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 300,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true,
    });

    // Clean up on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  const scrollToWhatWeDeliver = () => {
    const section = document.getElementById('what-we-deliver');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background elements and gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50/20 to-white"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-green-50 blur-3xl opacity-50 -z-10"></div>
      
      <div className="container mx-auto container-padding">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          {/* Hero badge */}
          <span className="inline-block py-1 px-3 rounded-full bg-green-100 border border-green-200 text-green-700 font-medium text-sm mb-5 animate-fade-in">
            B2B GROWTH SYSTEMS
          </span>
          
          {/* Main headline with rotating text */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight animate-slide-up">
            <span className="block mb-4">Your Growth Partner In</span>
            <span className="relative">
              <span className="text-green-600 font-bold inline-block min-h-[60px]" ref={typedRef}></span>
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600 rounded"></span>
            </span>
          </h1>
          
          <p className="text-xl text-monochrome-700 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "200ms" }}>
            Automate your outbound engine. Book 2–5 qualified meetings per month. Save 10+ hours weekly with AI-driven workflows.
          </p>
          
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "300ms" }}>
            <Button asChild className="bg-green-600 text-white hover:bg-green-700 px-6 py-6 rounded-lg font-medium transition-all shadow-md hover:shadow-lg hover:translate-y-[-2px] flex items-center text-lg">
              <Link to="/assessment">
                Get My Growth Plan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              className="border-2 border-monochrome-800 text-monochrome-800 hover:bg-monochrome-800 hover:text-white px-6 py-6 rounded-lg font-medium transition-all text-lg"
              onClick={scrollToWhatWeDeliver}
            >
              See How It Works
            </Button>
          </div>
        </div>
        
        {/* Automation metrics card */}
        <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "500ms" }}>
          <div className="relative bg-white rounded-xl overflow-hidden border border-monochrome-100 shadow-xl backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-green-50/40 to-blue-50/40 opacity-70"></div>
            
            <div className="relative p-6 md:p-8 z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-monochrome-800">Growth Automation Impact</h3>
                  <p className="text-monochrome-500">Real-time metrics dashboard</p>
                </div>
                
                {/* Toggle between metrics */}
                <div className="flex mt-4 md:mt-0 space-x-2 bg-monochrome-100/70 p-1 rounded-lg">
                  <button 
                    onClick={() => setActiveMetric('leads')}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition ${
                      activeMetric === 'leads' 
                        ? 'bg-white text-green-600 shadow-sm' 
                        : 'text-monochrome-600 hover:text-monochrome-800'
                    }`}
                  >
                    Leads Generated
                  </button>
                  <button 
                    onClick={() => setActiveMetric('hours')}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition ${
                      activeMetric === 'hours' 
                        ? 'bg-white text-green-600 shadow-sm' 
                        : 'text-monochrome-600 hover:text-monochrome-800'
                    }`}
                  >
                    Hours Saved
                  </button>
                </div>
              </div>
              
              {/* Chart visualization */}
              <div className="h-[280px] w-full">
                <ChartContainer config={chartConfig} className="h-[280px]">
                  <AreaChart data={automationData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(143, 85%, 58%)" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="hsl(143, 85%, 58%)" stopOpacity={0.2}/>
                      </linearGradient>
                      <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(209, 100%, 60%)" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="hsl(209, 100%, 60%)" stopOpacity={0.2}/>
                      </linearGradient>
                    </defs>
                    <XAxis 
                      dataKey="name" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#6B7280', fontSize: 12 }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#6B7280', fontSize: 12 }}
                    />
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    {activeMetric === 'leads' && (
                      <Area 
                        type="monotone" 
                        dataKey="leads" 
                        stroke="hsl(143, 85%, 58%)" 
                        fillOpacity={1} 
                        fill="url(#colorLeads)" 
                      />
                    )}
                    {activeMetric === 'hours' && (
                      <Area 
                        type="monotone" 
                        dataKey="hours" 
                        stroke="hsl(209, 100%, 60%)" 
                        fillOpacity={1} 
                        fill="url(#colorHours)" 
                      />
                    )}
                  </AreaChart>
                </ChartContainer>
              </div>
              
              {/* Metrics summary */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="bg-monochrome-50/70 p-3 rounded-lg">
                  <p className="text-sm text-monochrome-600">Weekly Meetings</p>
                  <p className="text-xl font-bold text-green-600">2-5</p>
                </div>
                <div className="bg-monochrome-50/70 p-3 rounded-lg">
                  <p className="text-sm text-monochrome-600">Hours Saved</p>
                  <p className="text-xl font-bold text-green-600">10+</p>
                </div>
                <div className="bg-monochrome-50/70 p-3 rounded-lg">
                  <p className="text-sm text-monochrome-600">Satisfaction</p>
                  <p className="text-xl font-bold text-green-600">100%</p>
                </div>
              </div>
              
              {/* Moving data point animation */}
              <div className="absolute top-1/3 right-12 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              <div className="absolute bottom-1/4 left-12 w-2 h-2 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
