
import React, { useState } from 'react';

const faqs = [
  {
    question: "How does your guaranteed results program work?",
    answer: "Our guarantee is simple: we commit to delivering a minimum of 10 qualified appointments weekly, or we work for free until we do. We define 'qualified' based on criteria we establish together during the strategy session, ensuring we're targeting the right prospects for your business."
  },
  {
    question: "What is the typical implementation timeline?",
    answer: "Most clients see their lead generation and automation systems fully implemented within 2-4 weeks. The timeline varies based on complexity and your existing systems. Our initial strategy session will provide a specific timeline for your business."
  },
  {
    question: "What resources are required from our team?",
    answer: "Implementation requires minimal time from your team - typically 2-3 hours per week during setup. After launch, you'll only need to focus on handling the qualified appointments we generate. We handle all the technical setup, integration, and ongoing optimization."
  },
  {
    question: "How do you ensure data security and privacy?",
    answer: "We take data security seriously. All client data is protected with enterprise-grade encryption, and we're fully compliant with GDPR, CCPA, and other relevant privacy regulations. We never share your data with third parties and provide detailed data processing agreements."
  },
  {
    question: "What systems can you integrate with?",
    answer: "We integrate with most popular business systems including Salesforce, HubSpot, Zoho, Microsoft Dynamics, Pipedrive, Marketo, Mailchimp, ActiveCampaign, Calendly, Zapier, and many more. If you use a custom or less common platform, we can discuss integration options during your strategy session."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <section className="py-20">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Common Questions
          </h2>
          <p className="text-lg text-leadea-navy opacity-80">
            Everything you need to know about our services and approach.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-leadea-gray/30 rounded-lg overflow-hidden card-shadow-hover">
                <button
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-bold text-leadea-navy text-lg">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-leadea-green transition-transform duration-200 ${
                      activeIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-leadea-navy/80 border-t border-leadea-gray/30">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="mb-4 text-leadea-navy">Have another question?</p>
            <a 
              href="#" 
              className="text-leadea-green font-medium hover:text-leadea-teal transition-colors inline-flex items-center"
            >
              Contact us
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
