import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import AnimatedBeam from "@/components/ui/AnimatedBeam";
import CTASection from '@/components/home/CTASection';
import PainPromiseSection from '@/components/business-automation/PainPromiseSection';
import BeforeAfterSlider from '@/components/business-automation/BeforeAfterSlider';
import ServiceCard from '@/components/business-automation/ServiceCard';
import ProcessTimeline from '@/components/business-automation/ProcessTimeline';
import IndustryTabs from '@/components/business-automation/IndustryTabs';
import CaseStudyCarousel from '@/components/business-automation/CaseStudyCarousel';
import StatisticStrip from '@/components/business-automation/StatisticStrip';
import GuaranteeCard from '@/components/business-automation/GuaranteeCard';
import ComparisonTable from '@/components/business-automation/ComparisonTable';
import IntegrationGrid from '@/components/business-automation/IntegrationGrid';
import FAQAccordion from '@/components/business-automation/FAQAccordion';
import { 
  ArrowRight, Zap, Database, Calendar, FileText, ChartLine,
  Bell, Mail, Rocket, Table, ListCheck, Link as LinkIcon, Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';

const BusinessAutomation = () => {
  const [isSticky, setIsSticky] = useState(false);

  // Handle sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 600);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pain & Promise Section Data
  const painItems = [
    {
      title: "Manual Bottlenecks",
      description: "Spreadsheets, emails & meetings clog your day.",
      icon: <Settings className="h-5 w-5 text-red-500" />
    },
    {
      title: "Data Silos",
      description: "Disconnected tools lead to errors & misaligned teams.",
      icon: <Database className="h-5 w-5 text-red-500" />
    },
    {
      title: "Missed Opportunities",
      description: "Slow follow-up kills deals.",
      icon: <ChartLine className="h-5 w-5 text-red-500" />
    }
  ];

  // ROI Snapshot Stats
  const roiStats = [
    { label: "Time Saved", value: "80%" },
    { label: "Faster Response", value: "4×" },
    { label: "Data Integrity", value: "99%" }
  ];

  // Services Data
  const services = [
    {
      title: "CRM & Data Sync",
      description: "Automatically keep your customer data consistent across all platforms.",
      icon: <Database className="h-5 w-5 text-green-600" />,
      tools: ["Salesforce", "HubSpot", "Pipedrive"]
    },
    {
      title: "Lead Scoring & Routing",
      description: "Prioritize and distribute leads to the right team members in real time.",
      icon: <ChartLine className="h-5 w-5 text-green-600" />,
      tools: ["HubSpot", "Zapier", "Make"]
    },
    {
      title: "Email & LinkedIn Sequences",
      description: "Personalized outreach that adapts based on prospect behavior.",
      icon: <Mail className="h-5 w-5 text-green-600" />,
      tools: ["Gmail", "Outlook", "LinkedIn"]
    },
    {
      title: "Invoice & Billing Workflows",
      description: "Streamline your payment processes from quote to receipt.",
      icon: <FileText className="h-5 w-5 text-green-600" />,
      tools: ["QuickBooks", "Xero", "Stripe"]
    },
    {
      title: "Order Fulfillment & Shipping",
      description: "Automate order processing, tracking, and customer notifications.",
      icon: <Table className="h-5 w-5 text-green-600" />,
      tools: ["Shopify", "ShipStation", "Ordoro"]
    },
    {
      title: "Reporting & Dashboards",
      description: "Real-time insights across your business with automated data collection.",
      icon: <ChartLine className="h-5 w-5 text-green-600" />,
      tools: ["Power BI", "Tableau", "Google Data Studio"]
    },
    {
      title: "Exception Handling Alerts",
      description: "Instant notifications when processes break or need attention.",
      icon: <Bell className="h-5 w-5 text-green-600" />,
      tools: ["Slack", "Teams", "Email"]
    },
    {
      title: "Custom Integrations",
      description: "Connect any tools in your stack with tailored automation solutions.",
      icon: <LinkIcon className="h-5 w-5 text-green-600" />,
      tools: ["Zapier", "Make", "REST APIs"]
    },
  ];

  // Process Steps
  const processSteps = [
    {
      number: 1,
      title: "Discovery",
      description: "We audit your tools, map processes & establish clear KPIs.",
      icon: <Settings className="h-5 w-5 text-green-700" />
    },
    {
      number: 2,
      title: "Design",
      description: "We prototype workflows in Make/Zapier to ensure perfect execution.",
      icon: <FileText className="h-5 w-5 text-green-700" />
    },
    {
      number: 3,
      title: "Build",
      description: "We deploy no-code/low-code automations that integrate your entire stack.",
      icon: <Rocket className="h-5 w-5 text-green-700" />
    },
    {
      number: 4,
      title: "Optimize",
      description: "We continuously monitor, test, and refine your automations for peak performance.",
      icon: <ChartLine className="h-5 w-5 text-green-700" />
    }
  ];

  // Industry Examples
  const industries = [
    {
      id: "saas",
      name: "SaaS",
      painPoints: [
        "Manual onboarding leads to poor user activation",
        "Slow follow-up with trial users causes high drop-off"
      ],
      solutions: [
        "Automated welcome & training sequences based on user behavior",
        "Real-time alerts for sales when trial users hit key milestones"
      ],
      resultMetric: "68% Higher Trial Conversion"
    },
    {
      id: "prof-services",
      name: "Professional Services",
      painPoints: [
        "Proposal creation requires input from multiple departments",
        "Time tracking and billing is inconsistent and error-prone"
      ],
      solutions: [
        "Automated proposal workflow with approval routing",
        "Integrated time tracking with invoice generation"
      ],
      resultMetric: "3.4× Faster Proposal Delivery"
    },
    {
      id: "ecommerce",
      name: "E-commerce",
      painPoints: [
        "Customer communication gaps during order fulfillment",
        "Manual order processing creates shipping delays"
      ],
      solutions: [
        "Triggered email/SMS notifications at every fulfillment stage",
        "Automated order routing, picking lists and shipping label creation"
      ],
      resultMetric: "94% Reduction in Support Tickets"
    },
    {
      id: "logistics",
      name: "Logistics",
      painPoints: [
        "Dispatchers spend hours manually planning routes",
        "Exception handling is reactive, causing costly delays"
      ],
      solutions: [
        "AI-powered route optimization with real-time traffic data",
        "Proactive exception alerts with automated resolution workflows"
      ],
      resultMetric: "23% Fuel Cost Reduction"
    }
  ];

  // Case Studies
  const caseStudies = [
    {
      clientName: "TechSoft Solutions",
      challenge: "Customer onboarding took 2 weeks with 5 different team members involved.",
      solution: [
        "Automated data collection & welcome workflow",
        "Self-service resource portal with progress tracking",
        "Exception handling for special customer needs"
      ],
      results: [
        { label: "Onboarding Time", before: "14 days", after: "3 days" },
        { label: "Staff Hours Per Customer", before: "12 hours", after: "2 hours" }
      ],
      testimonial: "We've transformed onboarding from a bottleneck to a competitive advantage. New customers are impressed with our efficiency.",
      authorName: "Sarah Johnson",
      authorRole: "COO"
    },
    {
      clientName: "Global Manufacturing Inc.",
      challenge: "Order processing took 3 days with a 15% error rate costing $50K monthly.",
      solution: [
        "End-to-end order automation workflow",
        "Real-time inventory sync across platforms",
        "Exception handling for custom orders"
      ],
      results: [
        { label: "Processing Time", before: "3 days", after: "2 hours" },
        { label: "Error Rate", before: "15%", after: "0.5%" }
      ],
      testimonial: "The ROI was immediate - we've eliminated costly errors and our team can focus on strategy instead of data entry.",
      authorName: "Robert Chen",
      authorRole: "VP of Operations"
    },
    {
      clientName: "Meridian Consulting",
      challenge: "Proposal creation required input from 5+ departments taking 3+ weeks.",
      solution: [
        "Centralized proposal management system",
        "Automated approval workflows",
        "Template library with dynamic pricing"
      ],
      results: [
        { label: "Proposal Creation", before: "21 days", after: "5 days" },
        { label: "Win Rate", before: "22%", after: "38%" }
      ],
      testimonial: "We're responding to RFPs in days instead of weeks, and the quality has significantly improved our win rate.",
      authorName: "Jessica Torres",
      authorRole: "Director of Sales"
    }
  ];

  // Statistics
  const statistics = [
    { value: "75%", label: "Fewer Errors" },
    { value: "3.8×", label: "ROI Average" },
    { value: "20+", label: "Hours Saved Weekly" },
    { value: "100%", label: "Uptime" }
  ];

  // Guarantee Features
  const guaranteeFeatures = [
    "Comprehensive process audit & optimization plan",
    "Unlimited revisions during implementation",
    "Dedicated support for 90 days post-launch",
    "Training for your team on managing the automations"
  ];

  // Comparison Table
  const comparisonItems = [
    { feature: "Setup Time", manual: "Weeks → Months", automated: "Days" },
    { feature: "Human Error Rate", manual: "15–20%", automated: "<1%" },
    { feature: "Monthly Hours Spent", manual: "100+", automated: "<20" },
    { feature: "Scalability", manual: "Low", automated: "Unlimited" }
  ];

  // Integrations
  const integrations = [
    { name: "Salesforce", logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" },
    { name: "HubSpot", logo: "https://cdn.worldvectorlogo.com/logos/hubspot.svg" },
    { name: "Zapier", logo: "https://cdn.worldvectorlogo.com/logos/zapier-1.svg" },
    { name: "Make", logo: "https://cdn.worldvectorlogo.com/logos/integromat.svg" },
    { name: "Slack", logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" },
    { name: "Google Workspace", logo: "https://cdn.worldvectorlogo.com/logos/google-workspace-icon-2020-.svg" },
    { name: "Microsoft", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg" },
    { name: "Zoom", logo: "https://cdn.worldvectorlogo.com/logos/zoom-5.svg" },
    { name: "Stripe", logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg" },
    { name: "QuickBooks", logo: "https://cdn.worldvectorlogo.com/logos/quickbooks-2.svg" },
    { name: "Xero", logo: "https://cdn.worldvectorlogo.com/logos/xero-1.svg" },
    { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" }
  ];

  // FAQ Items
  const faqItems = [
    {
      question: "What platforms do you support?",
      answer: "We support virtually all major business platforms including Salesforce, HubSpot, Microsoft 365, Google Workspace, Slack, Asana, Trello, Notion, Airtable, QuickBooks, Xero, NetSuite, Shopify, WooCommerce, and hundreds more via Zapier, Make, and direct API integrations."
    },
    {
      question: "How long until I see ROI?",
      answer: "Most clients see positive ROI within 30-60 days of implementation. Simple automations often deliver immediate value, while more complex workflows typically show returns within 2-3 months. We'll provide clear metrics to track your ROI throughout the process."
    },
    {
      question: "What if our processes change?",
      answer: "We design all automations to be flexible and adaptable. As part of our service, we offer ongoing support and adjustment periods to ensure your automations evolve with your business. Plus, we document everything and can train your team to make simple modifications."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we offer several support options ranging from basic maintenance to full managed services. Our most popular option is our quarterly review and optimization program, where we regularly audit your automations and make improvements."
    },
    {
      question: "How is data security handled?",
      answer: "Data security is our top priority. We follow industry best practices including end-to-end encryption, least privilege access, regular security audits, and compliance with regulations like GDPR and CCPA. We never store your sensitive data on our systems."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Sticky CTA */}
        <div 
          className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-monochrome-200 z-50 py-3 transition-all duration-300 ${
            isSticky ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="container mx-auto flex justify-between items-center px-4">
            <p className="font-bold hidden sm:block">Ready to automate your business processes?</p>
            <Button className="bg-green-600 text-white hover:bg-green-700" asChild>
              <Link to="/assessment">
                Book Your Strategy Session
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
          <div className="container mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative z-10">
                <span className="text-green-600 font-medium mb-4 block animate-fade-in">BUSINESS AUTOMATION</span>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: "100ms" }}>
                  <span className="block">
                    Custom <span className="text-highlight">Automations</span> That
                  </span>
                  <span className="block">
                    Free Your Team to <span className="text-fancy">Grow</span>
                  </span>
                </h1>
                
                <p className="text-lg text-monochrome-700 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: "200ms" }}>
                  No-code integrations, workflows & dashboards—deployed in days, not months. 
                  Stop wasting time on manual tasks and start focusing on growth.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
                  <Button className="bg-green-600 text-white hover:bg-green-700 px-6 py-6 rounded-lg font-medium transition-all shadow-md hover:shadow-lg flex items-center text-lg" asChild>
                    <Link to="/assessment">
                      Book Your Strategy Session
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-green-50 to-green-100 border border-monochrome-100 shadow-3d animate-fade-in" style={{ animationDelay: "400ms" }}>
                <AnimatedBeam />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-xl w-full max-w-md card-shadow animate-float">
                    <div className="px-6 py-4 border-b border-monochrome-100">
                      <h4 className="font-bold text-monochrome-800">Automation Workflow</h4>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-monochrome-100 flex items-center justify-center">
                          <svg className="h-5 w-5 text-monochrome-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div className="h-0.5 flex-grow bg-green-200 mx-2"></div>
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="pl-5 border-l-2 border-green-200 ml-5 mb-4">
                        <div className="bg-monochrome-100 p-3 rounded-lg mb-2">
                          <span className="text-xs font-medium text-monochrome-800">Lead enters system</span>
                        </div>
                        <div className="bg-monochrome-100 p-3 rounded-lg">
                          <span className="text-xs font-medium text-monochrome-800">Auto-welcome email sent</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="h-0.5 flex-grow bg-green-200 mx-2"></div>
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="pl-5 border-l-2 border-green-200 ml-5 mb-4">
                        <div className="bg-monochrome-100 p-3 rounded-lg mb-2">
                          <span className="text-xs font-medium text-monochrome-800">Meeting scheduled</span>
                        </div>
                        <div className="bg-monochrome-100 p-3 rounded-lg">
                          <span className="text-xs font-medium text-monochrome-800">CRM updated automatically</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-green-100 to-transparent rounded-full blur-3xl opacity-50 animate-float-slow"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-t from-green-50 to-transparent rounded-full blur-3xl opacity-30 animate-float"></div>
        </section>

        {/* Pain → Promise Section */}
        <section className="py-20">
          <div className="container mx-auto container-padding">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transform Your Business Bottlenecks Into Competitive Advantages
              </h2>
              <p className="text-lg text-monochrome-700">
                Manual processes drain resources, create errors, and slow your growth.
                Automation changes everything.
              </p>
            </div>
            
            <PainPromiseSection 
              painItems={painItems}
              promiseTitle="Our Promise"
              promiseDescription="We eliminate busy work, sync your stack, and deliver real-time insights that power growth."
              className="animate-fade-in"
            />
          </div>
        </section>

        {/* ROI Snapshot (Before & After Slider) */}
        <section className="py-20 bg-monochrome-50">
          <div className="container mx-auto container-padding">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                See the Difference Automation Makes
              </h2>
              <p className="text-lg text-monochrome-700">
                Compare manual processes with our automated solutions. 
                Drag the slider to see the transformation.
              </p>
            </div>
            
            <BeforeAfterSlider 
              beforeTitle="Manual Process"
              afterTitle="Automated Process" 
              beforeDescription="Time-consuming, error-prone, limited"
              afterDescription="Efficient, accurate, scalable"
              stats={roiStats}
              autoAnimate={true}
            />
          </div>
        </section>

        {/* Core Automation Services */}
        <section className="py-20">
          <div className="container mx-auto container-padding">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Core Automation Services
              </h2>
              <p className="text-lg text-monochrome-700">
                We create custom automation solutions that connect your tools and optimize your workflows.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  tools={service.tools}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works (Process Steps) */}
        <section className="py-20 bg-monochrome-50">
          <div className="container mx-auto container-padding">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How It Works
              </h2>
              <p className="text-lg text-monochrome-700">
                Our proven 4-step process delivers reliable automation solutions that grow with your business.
              </p>
            </div>
            
            <ProcessTimeline steps={processSteps} />
          </div>
        </section>

        {/* Industry-Tailored Examples */}
        <section className="py-20">
          <div className="container mx-auto container-padding">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Solutions for Your Industry
              </h2>
              <p className="text-lg text-monochrome-700">
                See how our automation solutions address specific challenges in your field.
              </p>
            </div>
            
            <IndustryTabs industries={industries} />
          </div>
        </section>

        {/* Social Proof & Metrics */}
        <section className="py-20 bg-monochrome-50">
          <div className="container mx-auto container-padding">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Real Results for Real Businesses
              </h2>
              <p className="text-lg text-monochrome-700">
                See how businesses like yours have transformed their operations with our automation solutions.
              </p>
            </div>
            
            <div className="mb-16">
              <CaseStudyCarousel caseStudies={caseStudies} />
            </div>
            
            <StatisticStrip statistics={statistics} />
          </div>
        </section>

        {/* Risk Reversal & Guarantee */}
        <section className="py-20">
          <div className="container mx-auto container-padding">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Performance Guarantee
              </h2>
              <p className="text-lg text-monochrome-700">
                Work with confidence knowing we stand behind our automation solutions.
              </p>
            </div>
            
            <GuaranteeCard 
              title="We hit your targets in 60 days—or we work for free."
              description="We're so confident in our ability to deliver results that we offer performance-based pricing and a 60-day guarantee. If we don't meet the agreed-upon KPIs within 60 days, we'll continue working at no additional cost until we do."
              features={guaranteeFeatures}
            />
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-monochrome-50">
          <div className="container mx-auto container-padding">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Automation Advantage
              </h2>
              <p className="text-lg text-monochrome-700">
                See how our automated solutions compare to manual processes.
              </p>
            </div>
            
            <ComparisonTable items={comparisonItems} />
          </div>
        </section>

        {/* Integration Ecosystem */}
        <section className="py-20">
          <div className="container mx-auto container-padding">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Integration Ecosystem
              </h2>
              <p className="text-lg text-monochrome-700">
                Connect any CRM, marketing, finance or operations tool—no developer needed.
              </p>
            </div>
            
            <IntegrationGrid integrations={integrations} />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-monochrome-50">
          <div className="container mx-auto container-padding">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-monochrome-700">
                Get answers to common questions about our automation solutions.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>
        
        {/* CTA at the bottom of ServicesShowcase.tsx */}
        <div className="text-center mt-16">
          <Button className="btn-primary" asChild>
            <Link to="/assessment">
              Explore Our Approach
            </Link>
          </Button>
        </div>
        
        {/* CTA Section */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default BusinessAutomation;
