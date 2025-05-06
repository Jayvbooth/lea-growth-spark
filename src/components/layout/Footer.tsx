
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, Globe } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-leadea-navy to-[#0c1624] text-white pt-16 pb-8">
      <div className="container mx-auto container-padding">
        {/* Top Section with Logo, Description and Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Logo and Company Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center mb-5">
              <span className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">LEADEA</span>
              <span className="ml-2 text-white/80 font-medium">Growth Partners</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md leading-relaxed">
              We help forward-thinking B2B companies generate high-quality leads and automate 
              business processes to accelerate growth and maximize operational efficiency.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-green-600/80 p-2.5 rounded-full transition-all duration-300">
                <Facebook size={18} className="text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-green-600/80 p-2.5 rounded-full transition-all duration-300">
                <Twitter size={18} className="text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-green-600/80 p-2.5 rounded-full transition-all duration-300">
                <Instagram size={18} className="text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-green-600/80 p-2.5 rounded-full transition-all duration-300">
                <Linkedin size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Navigation and Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-5">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-white/70 hover:text-green-400 transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="text-white/70 hover:text-green-400 transition-colors">About Us</Link>
                </li>
                <li>
                  <Link to="/lead-generation" className="text-white/70 hover:text-green-400 transition-colors">Lead Generation</Link>
                </li>
                <li>
                  <Link to="/business-automation" className="text-white/70 hover:text-green-400 transition-colors">Business Automation</Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-5">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="#" className="text-white/70 hover:text-green-400 transition-colors">Case Studies</Link>
                </li>
                <li>
                  <Link to="#" className="text-white/70 hover:text-green-400 transition-colors">Blog</Link>
                </li>
                <li>
                  <Link to="#" className="text-white/70 hover:text-green-400 transition-colors">Tools</Link>
                </li>
                <li>
                  <Link to="#" className="text-white/70 hover:text-green-400 transition-colors">FAQ</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold mb-5">Stay Updated</h3>
            <p className="text-white/70 mb-4 text-sm">
              Subscribe for insights on growth, automation, and market trends.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <Separator className="bg-white/10 my-8" />

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex items-start space-x-3">
            <div className="bg-white/10 p-2 rounded-lg mt-1">
              <Globe size={18} className="text-green-400" />
            </div>
            <div>
              <h4 className="text-white font-medium mb-1">Our Location</h4>
              <p className="text-white/70 text-sm">
                123 Growth Avenue, Suite 500<br />
                San Francisco, CA 94103
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="bg-white/10 p-2 rounded-lg mt-1">
              <Mail size={18} className="text-green-400" />
            </div>
            <div>
              <h4 className="text-white font-medium mb-1">Email Us</h4>
              <a href="mailto:info@leadeagrowth.com" className="text-white/70 hover:text-green-400 transition-colors text-sm">
                info@leadeagrowth.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="bg-white/10 p-2 rounded-lg mt-1">
              <Phone size={18} className="text-green-400" />
            </div>
            <div>
              <h4 className="text-white font-medium mb-1">Call Us</h4>
              <a href="tel:(555)123-4567" className="text-white/70 hover:text-green-400 transition-colors text-sm">
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section with Copyright and Legal Links */}
        <div className="pt-4 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/60">
              &copy; {currentYear} LEADEA Growth Partners. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-sm text-white/60 hover:text-green-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm text-white/60 hover:text-green-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-sm text-white/60 hover:text-green-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
