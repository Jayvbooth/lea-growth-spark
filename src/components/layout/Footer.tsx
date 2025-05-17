
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const Footer = () => {
  return (
    <footer className="bg-monochrome-900 text-white pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/571b3290-42af-473a-9d0c-f00e31c3a8c1.png" 
                alt="Leadea Logo" 
                className="h-8 mr-2 brightness-0 invert" 
              />
              <span className="font-bold text-xl text-white">Leadea</span>
            </div>
            <p className="text-monochrome-300 mb-6">
              We help B2B companies generate qualified leads and automate their business processes for scalable growth.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-green-400 mr-3" />
                <span className="text-monochrome-300">123 Business Ave, Suite 200<br />New York, NY 10001</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-green-400 mr-3" />
                <a href="mailto:hello@leadea.com" className="text-monochrome-300 hover:text-white transition-colors">
                  hello@leadea.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-3" />
                <a href="tel:+1234567890" className="text-monochrome-300 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-monochrome-300 hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/lead-generation" 
                  className="text-monochrome-300 hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  Lead Generation
                </Link>
              </li>
              <li>
                <Link 
                  to="/business-automation" 
                  className="text-monochrome-300 hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  Business Automation
                </Link>
              </li>
              <li>
                <Link 
                  to="/case-studies" 
                  className="text-monochrome-300 hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-monochrome-300 hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/lead-generation" 
                  className="text-monochrome-300 hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  B2B Lead Generation
                </Link>
              </li>
              <li>
                <Link 
                  to="/lead-generation" 
                  className="text-monochrome-300 hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  Account-Based Marketing
                </Link>
              </li>
              <li>
                <Link 
                  to="/business-automation" 
                  className="text-monochrome-300 hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  CRM Automation
                </Link>
              </li>
              <li>
                <Link 
                  to="/business-automation" 
                  className="text-monochrome-300 hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  Business Process Automation
                </Link>
              </li>
              <li>
                <Link 
                  to="/business-automation" 
                  className="text-monochrome-300 hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  Workflow Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Join Our Newsletter</h3>
            <p className="text-monochrome-300 mb-4">
              Stay updated with the latest in B2B growth strategies.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="py-2 px-4 bg-monochrome-800 border border-monochrome-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-green-500 w-full"
              />
              <Button className="rounded-l-none bg-green-600 hover:bg-green-700">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-6">
              <Button asChild variant="outline" className="border-green-600 text-green-400 hover:bg-green-900/20 w-full">
                <Link to="/assessment" onClick={scrollToTop}>
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-monochrome-700 mt-12 pt-6 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-monochrome-400 text-sm">
              © {new Date().getFullYear()} Leadea Growth Partners. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-monochrome-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-monochrome-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-monochrome-400 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
