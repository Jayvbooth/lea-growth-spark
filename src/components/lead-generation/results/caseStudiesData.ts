
export interface ResultMetric {
  metric: string;
  value: string;
}

export interface CaseStudyDetail {
  id: string;
  name: string;
  industry: string;
  size: string;
  challenge: string;
  results: ResultMetric[];
  quote: string;
  author: string;
  position: string;
  emoji: string;
}

export const caseStudiesData: CaseStudyDetail[] = [
  {
    id: "techflow",
    name: "TechFlow Solutions",
    industry: "B2B SaaS Company",
    size: "50-100 employees",
    challenge: "Manual prospecting and data entry consuming 30+ hours weekly",
    results: [
      { metric: "Lead Quality", value: "+185%" },
      { metric: "Time Saved", value: "25 hrs/week" },
      { metric: "Sales Conversion", value: "+42%" },
      { metric: "Revenue Growth", value: "+37%" }
    ],
    quote: "LEADEA helped us eliminate manual tasks while significantly improving our lead quality. We're now closing larger deals with better clients, and our team has more time to focus on strategic initiatives.",
    author: "Sarah Johnson",
    position: "VP of Sales",
    emoji: "🏢"
  },
  {
    id: "marketsphere",
    name: "MarketSphere",
    industry: "Marketing Agency",
    size: "10-50 employees",
    challenge: "Poor lead quality resulting in wasted sales efforts and low conversion rates",
    results: [
      { metric: "Qualified Meetings", value: "+120%" },
      { metric: "Deal Size", value: "+35%" },
      { metric: "Close Rate", value: "+42%" },
      { metric: "Pipeline Value", value: "+68%" }
    ],
    quote: "The quality of leads we now receive has transformed our business. Our sales team is more productive and our conversion rates have increased dramatically.",
    author: "Michael Chen",
    position: "CEO",
    emoji: "🏗️"
  },
  {
    id: "datacore",
    name: "DataCore Analytics",
    industry: "Data Services",
    size: "100-250 employees",
    challenge: "Unable to scale lead generation while maintaining quality standards",
    results: [
      { metric: "Weekly Appointments", value: "15+" },
      { metric: "ROI", value: "3.2x" },
      { metric: "Team Efficiency", value: "+48%" },
      { metric: "Annual Growth", value: "+22%" }
    ],
    quote: "LEADEA's systems allowed us to scale our outreach without sacrificing quality. We're now booking more meetings with better prospects than ever before.",
    author: "Rebecca Torres",
    position: "Growth Director",
    emoji: "📊"
  }
];

export const metricsData = [
  {
    value: "78%",
    label: "Higher Quality Leads",
    icon: (
      <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 8l-6-6-6 6m0 0v12m12-12v12" />
      </svg>
    )
  },
  {
    value: "20+",
    label: "Hours Saved Weekly",
    icon: (
      <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    value: "3.5x",
    label: "Average ROI",
    icon: (
      <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    value: "42%",
    label: "Increased Conversion Rate",
    icon: (
      <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
];
