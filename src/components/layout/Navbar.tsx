
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white shadow-md'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-leadea-green">LEADEA</span>
              <span className="ml-2 text-leadea-navy">Growth Partners</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-leadea-navy hover:text-leadea-green transition-colors font-medium">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center text-leadea-navy hover:text-leadea-green transition-colors font-medium">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-200 origin-top-left">
                <Link to="/lead-generation" className="block px-4 py-2 text-sm text-leadea-navy hover:bg-leadea-gray hover:text-leadea-green">
                  Lead Generation
                </Link>
                <Link to="/business-automation" className="block px-4 py-2 text-sm text-leadea-navy hover:bg-leadea-gray hover:text-leadea-green">
                  Business Automation
                </Link>
              </div>
            </div>
            <Link to="/case-studies" className="text-leadea-navy hover:text-leadea-green transition-colors font-medium">
              Case Studies
            </Link>
            <Link to="/blog" className="text-leadea-navy hover:text-leadea-green transition-colors font-medium">
              Blog
            </Link>
            <Link to="#" className="text-leadea-navy hover:text-leadea-green transition-colors font-medium">
              About
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-primary">Book Strategy Call</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-leadea-navy transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-leadea-navy transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 bg-leadea-navy transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-leadea-navy hover:text-leadea-green py-2 transition-colors font-medium">
                Home
              </Link>
              <Link to="/lead-generation" className="text-leadea-navy hover:text-leadea-green py-2 transition-colors font-medium">
                Lead Generation
              </Link>
              <Link to="/business-automation" className="text-leadea-navy hover:text-leadea-green py-2 transition-colors font-medium">
                Business Automation
              </Link>
              <Link to="/case-studies" className="text-leadea-navy hover:text-leadea-green py-2 transition-colors font-medium">
                Case Studies
              </Link>
              <Link to="/blog" className="text-leadea-navy hover:text-leadea-green py-2 transition-colors font-medium">
                Blog
              </Link>
              <Link to="#" className="text-leadea-navy hover:text-leadea-green py-2 transition-colors font-medium">
                About
              </Link>
              <Button className="btn-primary w-full mt-4">Book Strategy Call</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
