import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Mind, Heal Your Spirit
          </h1>
          <p className="text-xl text-indigo-100 mb-8">
            Experience breakthrough therapeutic healing in a safe, professional environment. Our expert-guided sessions combine ancient wisdom with modern science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group flex items-center justify-center gap-2 bg-white text-indigo-900 px-8 py-4 rounded-full font-semibold hover:bg-indigo-50 transition-all">
              Begin Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;