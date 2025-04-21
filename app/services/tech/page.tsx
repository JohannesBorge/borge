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
              Tech Assistant
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Get expert technical guidance and support to build, optimize, and scale your SaaS product efficiently.
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
                  "Technical architecture review and optimization",
                  "Code review and best practices implementation",
                  "Performance optimization and scaling strategies",
                  "Security audit and recommendations",
                  "Database optimization and query tuning",
                  "CI/CD pipeline setup and optimization"
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
              <h3 className="text-2xl font-bold mb-6">How It Works</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-500/10 text-blue-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Technical Assessment</h4>
                    <p className="text-text-secondary">We'll review your current setup and identify areas for improvement.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500/10 text-blue-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Implementation Plan</h4>
                    <p className="text-text-secondary">Create a detailed plan for technical improvements and optimizations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500/10 text-blue-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Ongoing Support</h4>
                    <p className="text-text-secondary">Regular technical reviews and support to keep your product running smoothly.</p>
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
              Discover how our technical expertise can help you build and scale your SaaS product.
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
            <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Tech?</h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Get expert technical guidance to build and scale your SaaS product efficiently.
            </p>
            <a
              href="/start"
              className="inline-block bg-blue-500 text-text-primary px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 