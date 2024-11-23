import React from 'react';
import { Brain, Leaf, Users, BookOpen, MessageCircle, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoCard from './components/InfoCard';
import TestimonialCard from './components/TestimonialCard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Navbar />
      <Hero />
      
      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-indigo-900">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <InfoCard
            icon={<Brain className="w-8 h-8 text-indigo-600" />}
            title="Integration Therapy"
            description="Professional guidance to help process and integrate psychedelic experiences into daily life."
          />
          <InfoCard
            icon={<Leaf className="w-8 h-8 text-indigo-600" />}
            title="Natural Medicine"
            description="Holistic approaches combining traditional wisdom with modern therapeutic techniques."
          />
          <InfoCard
            icon={<Users className="w-8 h-8 text-indigo-600" />}
            title="Group Sessions"
            description="Supportive community gatherings for shared healing and growth experiences."
          />
        </div>
      </section>

      {/* Featured Content */}
      <section className="bg-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Transform Your Mind</h2>
              <p className="text-lg mb-8">Experience breakthrough therapeutic sessions guided by experienced professionals in a safe, controlled environment.</p>
              <button className="group flex items-center gap-2 bg-white text-indigo-900 px-6 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-all">
                Learn More 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
                alt="Therapeutic Environment"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-indigo-900">Educational Resources</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <BookOpen className="w-10 h-10 text-indigo-600 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Research & Studies</h3>
            <p className="text-gray-600 mb-6">Access the latest scientific research and clinical studies on psychedelic therapy.</p>
            <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">Browse Library →</a>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <MessageCircle className="w-10 h-10 text-indigo-600 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Community Forum</h3>
            <p className="text-gray-600 mb-6">Connect with others, share experiences, and learn from our supportive community.</p>
            <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">Join Discussion →</a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-indigo-900">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="This program completely transformed my perspective on mental health and healing."
              author="Sarah M."
              role="Anxiety Recovery"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
            />
            <TestimonialCard
              quote="The integration therapy sessions were crucial for processing my experiences."
              author="Michael R."
              role="Depression Recovery"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            />
            <TestimonialCard
              quote="Professional, compassionate care that helped me overcome my PTSD."
              author="Emma L."
              role="PTSD Recovery"
              image="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;