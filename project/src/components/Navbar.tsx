import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-indigo-900">PsycheBoost</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Services</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Resources</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</a>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors">Services</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors">About</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors">Resources</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors">Contact</a>
              <button className="w-full mt-4 bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;