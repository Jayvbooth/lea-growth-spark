
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, Home } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="mr-8">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/571b3290-42af-473a-9d0c-f00e31c3a8c1.png" 
                alt="Leadea Logo" 
                className="h-8 mr-2" 
              />
              <span className="font-bold text-xl text-green-600 mr-1">Leadea</span>
              <span className="text-monochrome-800 font-medium">Growth Partners</span>
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-1">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors flex items-center">
              <Home size={16} className="mr-1" />
              Home
            </Link>
            <Link to="/lead-generation" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
              Lead Generation
            </Link>
            <Link to="/business-automation" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
              Business Automation
            </Link>
            <Link to="/case-studies" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
              Case Studies
            </Link>
            <Link to="/blog" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
              Blog
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:flex">
            <Link to="/assessment">Apply to Work With Us</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link 
                  to="/" 
                  className="px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 transition-colors flex items-center"
                  onClick={closeMenu}
                >
                  <Home size={16} className="mr-1" />
                  Home
                </Link>
                <Link 
                  to="/lead-generation" 
                  className="px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 transition-colors"
                  onClick={closeMenu}
                >
                  Lead Generation
                </Link>
                <Link 
                  to="/business-automation" 
                  className="px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 transition-colors"
                  onClick={closeMenu}
                >
                  Business Automation
                </Link>
                <Link 
                  to="/case-studies" 
                  className="px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 transition-colors"
                  onClick={closeMenu}
                >
                  Case Studies
                </Link>
                <Link 
                  to="/blog" 
                  className="px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 transition-colors"
                  onClick={closeMenu}
                >
                  Blog
                </Link>
                <Button asChild className="mt-4">
                  <Link to="/assessment" onClick={closeMenu}>
                    Apply to Work With Us
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
