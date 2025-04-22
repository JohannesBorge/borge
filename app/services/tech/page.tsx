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
              <span className="text-orange-500">Tech Partner</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Whether you're a indie hacker, marketer, sales professional, or CEO with a great idea, I don't just explain tech - I roll up my sleeves and help you build it. Using AI-powered tools, I'll work alongside you to turn your vision into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-8">What I Do For You</h2>
              <ul className="space-y-6">
                {[
                  "Hands-On Implementation: I'll help you set up and configure the right tools and technologies for your needs",
                  "Technical Research & Solutions: Quick, practical answers to your tech questions, with actual implementation support",
                  "Vendor Selection & Setup: I'll help you choose and implement the right tools and services for your business",
                  "Ongoing Support: Regular check-ins and hands-on help to keep your tech running smoothly",
                  "Exclusive Learning Library: Access to curated resources, tutorials, and guides to help you build your technical knowledge"
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-background p-8 rounded-2xl border border-border"
            >
              <h3 className="text-2xl font-bold mb-6">How We Work Together</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-orange-500/10 text-orange-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Share Your Vision</h4>
                    <p className="text-text-secondary">Tell me about your business idea or the technical challenge you're facing.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-500/10 text-orange-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Collaborative Solution</h4>
                    <p className="text-text-secondary">I'll work with you to implement the right solution, explaining everything in simple terms.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-500/10 text-orange-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Hands-On Support</h4>
                    <p className="text-text-secondary">Get ongoing, practical help to keep your tech stack running smoothly.</p>
                  </div>
                </div>
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
              className="bg-surface rounded-2xl border border-orange-500 p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Tech Assistant</h3>
              <div className="text-4xl font-bold text-orange-500">$350<span className="text-xl text-text-secondary">/month</span></div>
              <p className="text-sm text-text-secondary mt-2">Introduction Price</p>
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
            <h2 className="text-3xl font-bold mb-6">Watch Our VSL</h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              See how we help non-technical founders build their tech stack with hands-on support.
            </p>
            <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/uE8vnMGbbTw?start=1"
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
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Tech Stack?</h2>
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