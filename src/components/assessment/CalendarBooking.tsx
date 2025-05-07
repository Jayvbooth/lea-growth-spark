
import React, { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import { useIsMobile } from '@/hooks/use-mobile';

interface CalendarBookingProps {
  leadData: Record<string, any>;
}

const CalendarBooking = ({ leadData }: CalendarBookingProps) => {
  const isMobile = useIsMobile();
  
  // Initialize Cal.com with configuration
  useEffect(() => {
    (async function() {
      const cal = await getCalApi({"namespace": "discovery"});
      cal("ui", {
        "cssVarsPerTheme": {
          "light": {"cal-brand": "#292929"},
          "dark": {"cal-brand": "#5eff50"}
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    })();
  }, []);
  
  // Create prefill data from lead information
  const prefillData = {
    name: leadData.fullName || '',
    email: leadData.email || '',
    notes: `Company: ${leadData.companyName || 'N/A'}
Website: ${leadData.website || 'N/A'}
Interest: ${leadData.service_selection || 'N/A'}
Business Type: ${leadData.businessType || 'N/A'}
Timeline: ${leadData.timeline || 'N/A'}`
  };
  
  return (
    <div className="w-full bg-white rounded-xl p-4 md:p-6 shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4 md:mb-6">Book Your Strategy Session</h2>
      <p className="text-gray-600 mb-6 md:mb-8 text-center">
        Choose a time that works best for you, and we'll discuss your personalized growth plan.
      </p>
      
      <div className="border border-gray-200 rounded-lg overflow-hidden" style={{ height: isMobile ? '500px' : '600px' }}>
        <Cal 
          namespace="discovery"
          calLink="leadea/discovery"
          style={{
            width: "100%",
            height: "100%",
            overflow: "scroll"
          }}
          config={{
            layout: "month_view",
            prefill: prefillData
          }}
        />
      </div>
    </div>
  );
};

export default CalendarBooking;
