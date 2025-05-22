
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone, CheckCircle } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <svg className="absolute top-0 right-0 opacity-10" width="404" height="404" fill="none" viewBox="0 0 404 404">
                <defs>
                  <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" className="text-white" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
              </svg>
              <div className="absolute bottom-0 right-0 transform translate-x-1/3 translate-y-1/3">
                <svg width="400" height="400" fill="none" viewBox="0 0 400 400">
                  <defs>
                    <pattern id="circle-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="15" cy="15" r="10" className="text-white" fill="currentColor" fillOpacity="0.1" />
                    </pattern>
                  </defs>
                  <rect width="400" height="400" fill="url(#circle-pattern)" />
                </svg>
              </div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Apply to Work With Our Expert Team
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl">
                Become one of our valued clients and experience firsthand how our lead generation and automation solutions can accelerate your business growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild className="bg-white text-green-700 hover:bg-green-50 px-6">
                  <Link to="/assessment">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                
                <div className="flex gap-4">
                  <Button variant="ghost" className="text-white hover:bg-green-500/20">
                    <Mail className="mr-2 h-4 w-4" />
                    <Link to="mailto:contact@leadea.co">contact@leadea.co</Link>
                  </Button>
                  <Button variant="ghost" className="text-white hover:bg-green-500/20">
                    <Phone className="mr-2 h-4 w-4" />
                    <Link to="tel:+13212093073">(321) 209-3073</Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-white flex items-center justify-center font-medium">
                  <CheckCircle className="mr-2 h-5 w-5 text-white" />
                  100% Satisfaction Guarantee - We deliver results or you don't pay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
