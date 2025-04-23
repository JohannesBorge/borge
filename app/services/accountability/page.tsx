'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import ContactModal from '../../components/ContactModal';

export default function AccountabilityPartner() {
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
              Stop Building Alone.<br />
              <span className="text-purple-500">Start Shipping Consistently.</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              As a fellow indie hacker and solo founder, I understand the challenges of building alone. Let me be your accountability partner to help you maintain momentum and ship your product/service consistently.
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
              <h2 className="text-3xl font-bold mb-8">What I Offer</h2>
              <ul className="space-y-6">
                {[
                  "Daily Follow-Ups: We check in with you every single day to keep you focused and maintain momentum",
                  "Task Management: Stay organized with a clear system for tracking and prioritizing your most important tasks",
                  "1-1 Weekly Calls: Get personalized advice, strategic planning, and the accountability you need",
                  "Progress Tracking: Clear metrics and milestones to measure your success"
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-background p-8 rounded-2xl border border-border"
            >
              <h3 className="text-2xl font-bold mb-6">The Accountability Method</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-500/10 text-purple-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Daily Check-ins</h4>
                    <p className="text-text-secondary">Quick, focused check-ins to keep you on track and maintain momentum.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-500/10 text-purple-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Weekly Strategy</h4>
                    <p className="text-text-secondary">Deep-dive sessions to plan, review, and adjust your strategy.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-500/10 text-purple-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Continuous Momentum</h4>
                    <p className="text-text-secondary">Ongoing support and accountability to ensure consistent progress.</p>
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
              Get the accountability and support you need to build momentum and achieve your goals.
            </p>
          </motion.div>
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-surface rounded-2xl border border-purple-500 p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Accountability Partner</h3>
              <div className="text-4xl font-bold text-purple-500">$150<span className="text-xl text-text-secondary">/month</span></div>
              <p className="text-sm text-text-secondary mt-2">Introduction Price</p>
              <p className="text-sm text-purple-500 mt-1">2-week free trial, no credit card required</p>
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
              Learn how our unique accountability system helps you stay consistent and achieve your goals.
            </p>
            <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/uE8vnMGbbTw?start=1"
                title="Accountability Partner VSL"
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
            <h2 className="text-3xl font-bold mb-6">Ready to Build Momentum?</h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Join our high-performance accountability system designed specifically for aspiring entrepreneurs transitioning to online business.
            </p>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-purple-500 text-text-primary px-8 py-3 rounded-full font-medium hover:bg-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 