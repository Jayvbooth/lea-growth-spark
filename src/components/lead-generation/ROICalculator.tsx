
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ROICalculator = () => {
  const [monthlyLeads, setMonthlyLeads] = useState<number>(100);
  const [dealSize, setDealSize] = useState<number>(10000);
  const [closeRate, setCloseRate] = useState<number>(10);
  const [projectedRevenue, setProjectedRevenue] = useState<number>(0);
  const [paybackPeriod, setPaybackPeriod] = useState<number>(0);

  // Calculate ROI
  useEffect(() => {
    // Current monthly revenue
    const currentMonthlyRevenue = monthlyLeads * dealSize * (closeRate / 100);
    
    // Improved metrics with our service (assumptions)
    const improvedLeads = monthlyLeads * 1.5; // 50% more leads
    const improvedCloseRate = closeRate * 1.3; // 30% better close rate
    const improvedMonthlyRevenue = improvedLeads * dealSize * (improvedCloseRate / 100);
    
    // Projected additional monthly revenue
    const additionalRevenue = improvedMonthlyRevenue - currentMonthlyRevenue;
    setProjectedRevenue(additionalRevenue);
    
    // Payback period (assuming $5,000 monthly cost)
    const monthlyCost = 5000;
    const payback = monthlyCost / additionalRevenue;
    setPaybackPeriod(payback);
    
  }, [monthlyLeads, dealSize, closeRate]);

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="bg-white border-monochrome-200 shadow-lg">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-6">Input Your Numbers</h3>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-monochrome-700 font-medium">Monthly Leads</label>
                    <span className="font-bold text-green-700">{monthlyLeads}</span>
                  </div>
                  <Slider
                    value={[monthlyLeads]}
                    min={10}
                    max={500}
                    step={10}
                    onValueChange={(value) => setMonthlyLeads(value[0])}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-monochrome-500">
                    <span>10</span>
                    <span>500</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-monochrome-700 font-medium">Average Deal Size</label>
                    <span className="font-bold text-green-700">{formatCurrency(dealSize)}</span>
                  </div>
                  <Slider
                    value={[dealSize]}
                    min={1000}
                    max={100000}
                    step={1000}
                    onValueChange={(value) => setDealSize(value[0])}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-monochrome-500">
                    <span>$1,000</span>
                    <span>$100,000</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-monochrome-700 font-medium">Close Rate (%)</label>
                    <span className="font-bold text-green-700">{closeRate}%</span>
                  </div>
                  <Slider
                    value={[closeRate]}
                    min={1}
                    max={30}
                    step={1}
                    onValueChange={(value) => setCloseRate(value[0])}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-monochrome-500">
                    <span>1%</span>
                    <span>30%</span>
                  </div>
                </div>
              </div>
              
              <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
                Calculate ROI
              </Button>
            </div>
            
            <div className="bg-green-50 p-8 rounded-lg flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-6 text-center text-green-800">Your Projected Results</h3>
              
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-monochrome-600 mb-1">Monthly Revenue Increase</p>
                  <p className="text-4xl font-bold text-green-600">{formatCurrency(projectedRevenue)}</p>
                </div>
                
                <div className="text-center">
                  <p className="text-monochrome-600 mb-1">Payback Period</p>
                  <p className="text-4xl font-bold text-green-600">
                    {paybackPeriod <= 1 ? "< 1 month" : paybackPeriod.toFixed(1) + " months"}
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="font-medium">3× ROI in under 90 days</p>
                  </div>
                  <p className="text-sm text-center text-monochrome-600">
                    Based on our average client results. Your actual results may vary depending on industry, targeting, and market conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ROICalculator;
