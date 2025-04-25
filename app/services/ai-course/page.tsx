'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import ContactModal from '../../components/ContactModal';

export default function AICourse() {
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
              Master AI for Your Business<br />
              <span className="text-purple-500">Coming Soon</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              A comprehensive course designed to help entrepreneurs leverage AI tools and technologies to build and grow their online business. Join the waitlist to be the first to know when we launch.
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
              className="bg-surface p-8 rounded-2xl border border-border hover:border-purple-500 transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold mb-6">What You'll Learn</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-500/10 text-purple-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">AI Fundamentals</h4>
                    <p className="text-text-secondary">Understanding AI tools and how to use them effectively in your business.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-500/10 text-purple-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Practical Implementation</h4>
                    <p className="text-text-secondary">Step-by-step guides to implement AI in your business processes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-500/10 text-purple-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Business Growth</h4>
                    <p className="text-text-secondary">Strategies to leverage AI for scaling your business efficiently.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-surface p-8 rounded-2xl border border-border hover:border-purple-500 transition-all duration-300 hover:-translate-y-2"
            >
              <h2 className="text-2xl font-bold mb-6">Course Benefits</h2>
              <div className="space-y-6">
                <p className="text-text-secondary mb-4">
                  This course is designed for entrepreneurs who want to:
                </p>
                <ul className="space-y-4">
                  {[
                    "Learn how to effectively use AI tools in their business",
                    "Save time and resources through AI automation",
                    "Stay ahead of the competition with AI implementation",
                    "Build a scalable business with AI-powered processes"
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircleIcon className="h-6 w-6 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-text-secondary">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <p className="text-text-secondary mt-6">
                  Join the waitlist to be the first to know when we launch and get early access to the course.
                </p>
              </div>
            </motion.div>
          </div>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Master AI for Your Business?</h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Join the waitlist to be the first to know when we launch and get early access to the course.
            </p>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-purple-500 text-text-primary px-8 py-3 rounded-full font-medium hover:bg-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Join Waitlist
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 