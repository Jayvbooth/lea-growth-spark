
import React, { useEffect, useRef } from 'react';

interface CalendarBookingProps {
  leadData: Record<string, any>;
}

const CalendarBooking = ({ leadData }: CalendarBookingProps) => {
  const calendarRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // This ensures our Cal script only runs once the component is mounted
    const script = document.createElement('script');
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = () => {
      // Make typescript happy by checking if window.Cal exists
      if ((window as any).Cal) {
        (window as any).Cal("init", "discovery", { origin: "https://cal.com" });
        
        (window as any).Cal.ns.discovery("inline", {
          elementOrSelector: "#my-cal-inline",
          config: { "layout": "month_view" },
          calLink: "leadea/discovery",
          
          // Pass lead data as prefilled information
          prefill: {
            name: leadData.fullName,
            email: leadData.email,
            notes: `Company: ${leadData.companyName}\nWebsite: ${leadData.website}\nInterest: ${leadData.primaryInterest}\nBusiness Type: ${leadData.businessType}\nTimeline: ${leadData.timeline}`
          }
        });
        
        (window as any).Cal.ns.discovery("ui", {
          "cssVarsPerTheme": {
            "light": { "cal-brand": "#292929" },
            "dark": { "cal-brand": "#5eff50" }
          },
          "hideEventTypeDetails": false,
          "layout": "month_view"
        });
      }
    };
    
    document.head.appendChild(script);
    
    return () => {
      // Cleanup if component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [leadData]);
  
  return (
    <div className="w-full bg-white rounded-xl p-6 shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Book Your Strategy Session</h2>
      <p className="text-gray-600 mb-8 text-center">
        Choose a time that works best for you, and we'll discuss your personalized growth plan.
      </p>
      
      <div 
        ref={calendarRef}
        id="my-cal-inline" 
        style={{ 
          width: '100%', 
          height: '600px',
          overflow: 'scroll',
          borderRadius: '8px',
          border: '1px solid #e5e7eb'
        }}
      ></div>
    </div>
  );
};

export default CalendarBooking;
