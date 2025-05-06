// Mock data for case studies
export const industries = [
  { label: 'SaaS', value: 'saas' },
  { label: 'E-commerce', value: 'ecommerce' },
  { label: 'Professional Services', value: 'professional-services' },
  { label: 'Manufacturing', value: 'manufacturing' },
  { label: 'Logistics', value: 'logistics' },
  { label: 'Finance', value: 'finance' }
];

export const services = [
  { label: 'CRM Integration', value: 'crm-integration' },
  { label: 'Lead Generation', value: 'lead-generation' },
  { label: 'Workflow Automation', value: 'workflow-automation' },
  { label: 'Data Sync', value: 'data-sync' },
  { label: 'Reporting', value: 'reporting' },
  { label: 'Email Campaigns', value: 'email-campaigns' }
];

export const metrics = [
  { label: 'Time Saved', value: 'time-saved' },
  { label: 'Increased ROI', value: 'increased-roi' },
  { label: 'Higher Conversions', value: 'higher-conversions' },
  { label: 'Cost Reduction', value: 'cost-reduction' }
];

export interface CaseStudy {
  id: string;
  title: string;
  logo: string;
  industry: string;
  industryValue: string;
  serviceType: string[];
  serviceValues: string[];
  metricValues: string[];
  metrics: Array<{
    label: string;
    value: string;
  }>;
  teaser: string;
  featuredImage?: string;
  challenge: string;
  objectives: Array<{
    icon: string;
    label: string;
    value: string;
  }>;
  solution: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  results: Array<{
    label: string;
    before: string;
    after: string;
  }>;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  technicalDetails?: Array<{
    title: string;
    items: string[];
  }>;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'techflow-solutions',
    title: 'How TechFlow Solutions Achieved 185% Lead Quality Improvement',
    logo: 'https://source.unsplash.com/random/200x200?tech',
    industry: 'SaaS',
    industryValue: 'saas',
    serviceType: ['Lead Generation', 'CRM Integration'],
    serviceValues: ['lead-generation', 'crm-integration'],
    metricValues: ['time-saved', 'higher-conversions'],
    metrics: [
      { label: 'Lead Quality', value: '+185%' },
      { label: 'Time Saved', value: '25hrs/week' }
    ],
    teaser: 'TechFlow was spending 30+ hours weekly on manual prospecting with low-quality results. We transformed their lead generation process.',
    featuredImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    challenge: 'TechFlow Solutions, a growing SaaS company with 50-100 employees, was struggling with inefficient prospecting processes. Their sales team was spending over 30 hours per week manually researching prospects and inputting data, yet lead quality remained poor. This resulted in wasted sales efforts and stagnating growth.',
    objectives: [
      { icon: '🎯', label: 'Manual Work', value: '30+ hours/week' },
      { icon: '📉', label: 'Lead Quality', value: 'Poor (15% qualified)' },
      { icon: '💰', label: 'Revenue Leakage', value: '$45,000/month est.' }
    ],
    solution: [
      { 
        step: 1, 
        title: 'Discovery & Audit', 
        description: 'We analyzed TechFlow\'s existing lead generation process, CRM setup, and success metrics to identify bottlenecks and opportunities.' 
      },
      { 
        step: 2, 
        title: 'AI-Powered Targeting', 
        description: 'Implemented our proprietary lead scoring algorithm using 50+ data points to identify ideal decision-makers with high purchase intent.' 
      },
      { 
        step: 3, 
        title: 'Multi-Channel Automation', 
        description: 'Built personalized LinkedIn and email sequences with automated follow-ups, directly integrated with their Salesforce CRM.' 
      },
      { 
        step: 4, 
        title: 'Results Dashboard', 
        description: 'Deployed a real-time analytics dashboard tracking all key metrics and providing insights for continuous optimization.' 
      }
    ],
    results: [
      { label: 'Lead Quality', before: '15%', after: '42%' },
      { label: 'Weekly Hours Saved', before: '30+ hrs', after: '5 hrs' },
      { label: 'Monthly Qualified Meetings', before: '12', after: '35' },
      { label: 'Response Rate', before: '8%', after: '24%' }
    ],
    testimonial: {
      quote: 'The automation system transformed our sales process completely. Our team now spends their time closing deals instead of hunting for prospects, and the quality of leads coming in is night and day compared to before.',
      author: 'Sarah Johnson',
      role: 'VP of Sales, TechFlow Solutions'
    },
    technicalDetails: [
      {
        title: 'Integration Technologies',
        items: [
          'Salesforce CRM via API',
          'LinkedIn Sales Navigator',
          'Custom email verification tools',
          'Zapier for workflow automation'
        ]
      },
      {
        title: 'Data Security Measures',
        items: [
          'End-to-end encryption for all prospect data',
          'Role-based access controls',
          'GDPR-compliant data handling',
          'Regular security audits'
        ]
      }
    ]
  },
  {
    id: 'marketsphere',
    title: 'MarketSphere Achieves 37% Revenue Growth With Automated Workflows',
    logo: 'https://source.unsplash.com/random/200x200?marketing',
    industry: 'Marketing Agency',
    industryValue: 'professional-services',
    serviceType: ['Workflow Automation', 'Reporting'],
    serviceValues: ['workflow-automation', 'reporting'],
    metricValues: ['increased-roi', 'higher-conversions'],
    metrics: [
      { label: 'Conversion Rate', value: '+42%' },
      { label: 'Revenue Growth', value: '37%' }
    ],
    teaser: 'MarketSphere was struggling with poor lead quality and wasted sales efforts. Our automated workflows transformed their business.',
    featuredImage: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511',
    challenge: 'MarketSphere, a boutique marketing agency with 10-50 employees, was facing challenges with their lead qualification process. Their sales team was wasting valuable time on prospects that rarely converted, causing frustration and hurting revenue goals.',
    objectives: [
      { icon: '🎯', label: 'Conversion Rate', value: 'Only 12%' },
      { icon: '⏱️', label: 'Sales Cycle', value: '45+ days avg.' },
      { icon: '💸', label: 'Customer Acquisition', value: '$3,200 per client' }
    ],
    solution: [
      { 
        step: 1, 
        title: 'Process Mapping', 
        description: 'We documented MarketSphere\'s entire customer journey from lead capture to close, identifying key decision points and bottlenecks.' 
      },
      { 
        step: 2, 
        title: 'Scoring Algorithm', 
        description: 'Developed a customized lead scoring system based on behavioral cues, firmographics, and engagement metrics.' 
      },
      { 
        step: 3, 
        title: 'Automation Implementation', 
        description: 'Built workflow automations in HubSpot to route leads, trigger personalized outreach, and alert sales reps to high-intent prospects.' 
      },
      { 
        step: 4, 
        title: 'Analytics Dashboard', 
        description: 'Created a comprehensive reporting system to track lead quality, conversion rates, and ROI attribution.' 
      }
    ],
    results: [
      { label: 'Conversion Rate', before: '12%', after: '42%' },
      { label: 'Revenue Growth', before: '8% YoY', after: '37% YoY' },
      { label: 'Sales Cycle', before: '45 days', after: '28 days' },
      { label: 'Customer Acquisition Cost', before: '$3,200', after: '$1,850' }
    ],
    testimonial: {
      quote: 'The automated lead scoring and routing changed everything for us. We\'re now focusing our energy on the right prospects at the right time, and it\'s paid off tremendously in our bottom line.',
      author: 'Michael Chen',
      role: 'CEO, MarketSphere'
    },
    technicalDetails: [
      {
        title: 'Technology Stack',
        items: [
          'HubSpot Marketing Hub',
          'Custom API integrations',
          'Make.com workflow automation',
          'Google Data Studio for reporting'
        ]
      },
      {
        title: 'Future Roadmap',
        items: [
          'AI-powered content recommendation engine',
          'Predictive analytics for churn prevention',
          'Advanced attribution modeling',
          'Customer journey optimization'
        ]
      }
    ]
  },
  {
    id: 'datacore-analytics',
    title: 'DataCore Analytics Scales Lead Generation with 3.2× ROI',
    logo: 'https://source.unsplash.com/random/200x200?data',
    industry: 'Data Services',
    industryValue: 'saas',
    serviceType: ['Lead Generation', 'Email Campaigns'],
    serviceValues: ['lead-generation', 'email-campaigns'],
    metricValues: ['increased-roi', 'time-saved'],
    metrics: [
      { label: 'ROI', value: '3.2×' },
      { label: 'Weekly Appointments', value: '15+' }
    ],
    teaser: 'DataCore needed to scale lead generation while maintaining quality. Our system delivered 15+ qualified appointments weekly.',
    featuredImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    challenge: 'DataCore Analytics, a data services provider with 100-250 employees, had reached a plateau in their growth. Their internal lead generation efforts couldn\'t scale efficiently, and they were unable to maintain consistent quality while increasing volume.',
    objectives: [
      { icon: '📊', label: 'Lead Volume', value: 'Inconsistent' },
      { icon: '🔄', label: 'Scalability', value: 'Limited by team size' },
      { icon: '📋', label: 'Process Documentation', value: 'Minimal' }
    ],
    solution: [
      { 
        step: 1, 
        title: 'Scalable Framework', 
        description: 'We designed a modular lead generation framework that could scale up or down based on DataCore\'s changing needs and market conditions.' 
      },
      { 
        step: 2, 
        title: 'Data Enrichment', 
        description: 'Implemented advanced data enrichment processes using AI to create detailed prospect profiles with 50+ unique data points.' 
      },
      { 
        step: 3, 
        title: 'Sequence Optimization', 
        description: 'Developed and A/B tested multi-channel outreach sequences customized to different buyer personas and industries.' 
      },
      { 
        step: 4, 
        title: 'Continuous Learning', 
        description: 'Established a feedback loop system that continuously optimizes targeting and messaging based on response patterns.' 
      }
    ],
    results: [
      { label: 'Qualified Appointments', before: '5-6/week', after: '15+/week' },
      { label: 'ROI', before: '1.4×', after: '3.2×' },
      { label: 'Response Rate', before: '8%', after: '21%' },
      { label: 'Pipeline Value', before: '$420K/quarter', after: '$1.2M/quarter' }
    ],
    testimonial: {
      quote: 'The scalability of the system is what impressed us most. We can dial up our lead flow when we need more pipeline, and the quality remains consistently high regardless of volume.',
      author: 'Alex Rivera',
      role: 'Director of Growth, DataCore Analytics'
    },
    technicalDetails: [
      {
        title: 'Key Technologies',
        items: [
          'Custom data enrichment algorithms',
          'Multi-channel orchestration platform',
          'A/B testing framework',
          'Advanced analytics & reporting dashboard'
        ]
      }
    ]
  }
];

export const featuredCaseStudies = [
  {
    id: 'techflow-solutions',
    title: 'TechFlow Solutions',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    stat: '185% Lead Quality Improvement'
  },
  {
    id: 'marketsphere',
    title: 'MarketSphere Agency',
    image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511',
    stat: '37% Revenue Growth'
  },
  {
    id: 'datacore-analytics',
    title: 'DataCore Analytics',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    stat: '3.2× ROI'
  }
];

// Helper function to get related case studies
export const getRelatedCaseStudies = (currentId: string, industry?: string): any[] => {
  // First try to get case studies from same industry
  if (industry) {
    const sameIndustry = caseStudies.filter(
      cs => cs.industryValue === industry && cs.id !== currentId
    );
    
    if (sameIndustry.length >= 3) {
      return sameIndustry.slice(0, 3).map(cs => ({
        id: cs.id,
        title: cs.title,
        industry: cs.industry,
        logo: cs.logo,
        teaser: cs.teaser
      }));
    }
  }
  
  // Otherwise return 3 random case studies (excluding current)
  return caseStudies
    .filter(cs => cs.id !== currentId)
    .slice(0, 3)
    .map(cs => ({
      id: cs.id,
      title: cs.title,
      industry: cs.industry,
      logo: cs.logo,
      teaser: cs.teaser
    }));
};
