'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import ContactModal from '../../components/ContactModal';

export default function TechAssistant() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Hands-On<br />
              <span className="text-orange-500">AI Partner</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              For entrepreneurs transitioning to online business, I don't just explain tech - I roll up my sleeves and help you build it. Using AI-powered tools, I'll work alongside you to establish your digital presence with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-surface p-8 rounded-2xl border border-border hover:border-orange-500 transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold mb-6">Projects I Can Help With</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-orange-500/10 text-orange-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Website Development</h4>
                    <p className="text-text-secondary">Building and optimizing websites and landing pages.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-500/10 text-orange-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">AI Integration</h4>
                    <p className="text-text-secondary">Implementing AI tools and automation to streamline your business processes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-500/10 text-orange-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Digital Marketing Setup</h4>
                    <p className="text-text-secondary">Setting up analytics, tracking, and marketing automation tools.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-surface p-8 rounded-2xl border border-border hover:border-orange-500 transition-all duration-300 hover:-translate-y-2"
            >
              <h2 className="text-2xl font-bold mb-6">Target Group</h2>
              <div className="space-y-6">
                <p className="text-text-secondary mb-4">
                  I work with entrepreneurs who are transitioning to online business. These are typically:
                </p>
                <ul className="space-y-4">
                  {[
                    "Founders who have a successful offline business and want to expand online",
                    "Entrepreneurs with a product or service idea ready to build their digital presence",
                    "Visionaries who want to leverage AI to streamline their operations"
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircleIcon className="h-6 w-6 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-text-secondary">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <p className="text-text-secondary mt-6">
                  With my service, you'll get a dedicated AI Partner who understands your journey and provides hands-on support to help you build, optimize, and scale your online business efficiently.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Get hands-on technical support at a price that works for your business.
            </p>
          </motion.div>
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-surface p-8 rounded-2xl shadow-sm border border-border hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors duration-300">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text-primary">AI Partner</h3>
              <div className="text-4xl font-bold text-orange-500">$350<span className="text-xl text-text-secondary">/month</span></div>
              <p className="text-sm text-text-secondary mt-2">Introduction Price</p>
              <p className="text-sm text-orange-500 mt-1">2-week free trial, no credit card required</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VSL Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Watch Our Video</h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              See how we help entrepreneurs build their product/service with hands-on support.
            </p>
            <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/GYYBTHBvncc?start=1"
                title="Tech Assistant VSL"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Online Business?</h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Let's work together to turn your business idea into reality with hands-on technical support.
            </p>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-orange-500 text-text-primary px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 