
import React from 'react';
import { Card } from "@/components/ui/card";

const MetricsDashboard = () => {
  return (
    <section className="py-20 bg-monochrome-50">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-green-600 font-medium mb-2 block">REAL-TIME RESULTS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-highlight">Growth</span> Metrics Dashboard
          </h2>
          <p className="text-lg text-monochrome-700 opacity-80 max-w-2xl mx-auto">
            Monitor our performance with real-time analytics. We're committed to transparency and measurable results.
          </p>
        </div>
        
        <div className="relative">
          <div className="card-3d p-6 md:p-8 bg-white overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-bold text-xl text-monochrome-800">Growth Performance</h3>
                <p className="text-monochrome-500 text-sm">Last updated: Today at 9:45 AM</p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">LIVE DATA</span>
                <span className="px-3 py-1 text-xs rounded-full bg-monochrome-100 text-monochrome-500 font-medium">THIS MONTH</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="p-5 border-none shadow-soft hover:shadow-hover transition-all duration-300">
                <p className="text-sm text-monochrome-500 mb-1">Leads Generated</p>
                <div className="flex items-end gap-2">
                  <h4 className="text-3xl font-bold text-monochrome-800">347</h4>
                  <span className="text-green-600 text-sm font-medium pb-1">+12.4%</span>
                </div>
                <div className="mt-4 h-2 bg-monochrome-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{width: '72%'}}></div>
                </div>
                <p className="text-xs text-monochrome-500 mt-1">72% of monthly goal</p>
              </Card>
              
              <Card className="p-5 border-none shadow-soft hover:shadow-hover transition-all duration-300">
                <p className="text-sm text-monochrome-500 mb-1">Qualified Meetings</p>
                <div className="flex items-end gap-2">
                  <h4 className="text-3xl font-bold text-monochrome-800">53</h4>
                  <span className="text-green-600 text-sm font-medium pb-1">+8.7%</span>
                </div>
                <div className="mt-4 h-2 bg-monochrome-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{width: '88%'}}></div>
                </div>
                <p className="text-xs text-monochrome-500 mt-1">88% of monthly goal</p>
              </Card>
              
              <Card className="p-5 border-none shadow-soft hover:shadow-hover transition-all duration-300">
                <p className="text-sm text-monochrome-500 mb-1">Pipeline Generated</p>
                <div className="flex items-end gap-2">
                  <h4 className="text-3xl font-bold text-monochrome-800">$1.2M</h4>
                  <span className="text-green-600 text-sm font-medium pb-1">+21%</span>
                </div>
                <div className="mt-4 h-2 bg-monochrome-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{width: '65%'}}></div>
                </div>
                <p className="text-xs text-monochrome-500 mt-1">65% of monthly goal</p>
              </Card>
              
              <Card className="p-5 border-none shadow-soft hover:shadow-hover transition-all duration-300">
                <p className="text-sm text-monochrome-500 mb-1">Time Saved (hrs)</p>
                <div className="flex items-end gap-2">
                  <h4 className="text-3xl font-bold text-monochrome-800">214</h4>
                  <span className="text-green-600 text-sm font-medium pb-1">+15.3%</span>
                </div>
                <div className="mt-4 h-2 bg-monochrome-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{width: '80%'}}></div>
                </div>
                <p className="text-xs text-monochrome-500 mt-1">80% of monthly goal</p>
              </Card>
            </div>
            
            <div className="p-4 bg-monochrome-50 rounded-lg">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-monochrome-700">Lead Conversion Journey</span>
                <span className="text-xs text-monochrome-500">Avg. 21 days</span>
              </div>
              <div className="relative h-16">
                <div className="absolute left-0 top-0 h-full w-full flex items-center">
                  <div className="h-2 bg-monochrome-200 flex-grow rounded-full relative">
                    <div className="absolute top-1/2 -translate-y-1/2 left-[10%] w-4 h-4 rounded-full bg-green-100 border-2 border-green-500"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 left-[35%] w-4 h-4 rounded-full bg-green-100 border-2 border-green-500"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 left-[65%] w-4 h-4 rounded-full bg-green-100 border-2 border-green-500"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 left-[90%] w-4 h-4 rounded-full bg-green-100 border-2 border-green-500"></div>
                  </div>
                </div>
                <div className="absolute left-[5%] top-2 text-xs text-monochrome-600 font-medium">Lead In</div>
                <div className="absolute left-[30%] top-2 text-xs text-monochrome-600 font-medium">Qualified</div>
                <div className="absolute left-[60%] top-2 text-xs text-monochrome-600 font-medium">Meeting</div>
                <div className="absolute left-[85%] top-2 text-xs text-monochrome-600 font-medium">Deal</div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-green-100 rounded-full blur-3xl opacity-20"></div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-monochrome-500">
            Live data refreshes every 2 hours. View detailed reports in your client dashboard.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MetricsDashboard;
