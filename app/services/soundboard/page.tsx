'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import ContactModal from '../../components/ContactModal';

export default function FounderSoundboard() {
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
              Think it through.<br />
              <span className="text-blue-500">Talk it out.</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              A voice-note based service to bounce ideas, clear mental fog, and find direction—with direct access to Johannes. Like having a cofounder in your pocket.
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
              <h2 className="text-3xl font-bold mb-8">What You Get</h2>
              <ul className="space-y-6">
                {[
                  "Direct access to Johannes via voice notes",
                  "Quick responses to bounce ideas and get feedback",
                  "Strategic guidance for your business decisions",
                  "Mental clarity and direction for your next steps",
                  "A sounding board for your thoughts and challenges",
                  "Flexible communication that fits your schedule"
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircleIcon className="h-6 w-6 text-blue-500 mt-1 mr-3 flex-shrink-0" />
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
                  <div className="bg-blue-500/10 text-blue-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Send a Voice Note</h4>
                    <p className="text-text-secondary">Share your thoughts, questions, or challenges via voice note whenever inspiration strikes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500/10 text-blue-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Get Quick Feedback</h4>
                    <p className="text-text-secondary">Receive thoughtful responses and guidance to help you think through your ideas.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500/10 text-blue-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Move Forward with Clarity</h4>
                    <p className="text-text-secondary">Take action with confidence, knowing you've thought through your decisions with an experienced man.</p>
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
              Get direct access to Johannes for strategic guidance and idea bouncing.
            </p>
          </motion.div>
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-surface rounded-2xl border border-blue-500 p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Founder Voice Line</h3>
              <div className="text-4xl font-bold text-blue-500">$100<span className="text-xl text-text-secondary">/month</span></div>
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
              See how our founder Voice Line service can help you make better decisions and grow your business.
            </p>
            <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/uE8vnMGbbTw?start=1"
                title="Founder Soundboard VSL"
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
            <h2 className="text-3xl font-bold mb-6">Ready to Think Through Your Next Move?</h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Get direct access to Johannes and bounce your ideas off an experienced man.
            </p>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-blue-500 text-text-primary px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 