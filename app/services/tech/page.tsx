'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function TechAssistant() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
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
              No Technical Background?<br />
              <span className="text-orange-500">No Problem.</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Whether you're a marketer, sales professional, or CEO with a great idea, I'll help you navigate the technical world. Using AI-powered tools, I make complex tech concepts simple and help you make informed decisions about your product.
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
                  "Tech Stack Guidance: Get clear, jargon-free advice on what technologies to use for your specific needs",
                  "Technical Research: Quick answers to your tech questions, explained in simple terms",
                  "Vendor Selection: Help choosing the right tools and services for your business",
                  "Technical Documentation: Clear explanations of technical concepts and processes",
                  "Implementation Support: Guidance on how to work with developers or implement solutions yourself"
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
              <h3 className="text-2xl font-bold mb-6">How It Works</h3>
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
                    <h4 className="font-semibold mb-2">Get Clear Answers</h4>
                    <p className="text-text-secondary">I'll research and explain everything in simple, business-focused terms.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-500/10 text-orange-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Make Confident Decisions</h4>
                    <p className="text-text-secondary">Get the knowledge you need to make informed technical decisions for your business.</p>
                  </div>
                </div>
              </div>
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
              See how we help non-technical founders navigate the tech world with confidence.
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
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Tech Knowledge?</h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Get the technical guidance you need to turn your business idea into reality.
            </p>
            <a
              href="/start"
              className="inline-block bg-orange-500 text-text-primary px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors duration-300"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 