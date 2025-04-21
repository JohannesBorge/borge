'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function AccountabilityPartner() {
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
              Accountability Partner
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Stay on track and achieve your goals with a dedicated accountability partner who understands the challenges of building a business.
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
                  "Weekly check-in calls to review progress and set goals",
                  "Personalized accountability strategies",
                  "Progress tracking and milestone celebrations",
                  "Constructive feedback and course correction",
                  "Motivation and support during challenging times",
                  "Actionable insights and recommendations"
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
              <h3 className="text-2xl font-bold mb-6">How It Works</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-500/10 text-purple-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Initial Consultation</h4>
                    <p className="text-text-secondary">We'll discuss your goals, challenges, and create a personalized accountability plan.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-500/10 text-purple-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Weekly Sessions</h4>
                    <p className="text-text-secondary">Regular check-ins to track progress, adjust goals, and provide support.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-500/10 text-purple-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Continuous Support</h4>
                    <p className="text-text-secondary">Ongoing guidance and accountability to keep you moving forward.</p>
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
              Learn more about how our accountability partnership can help you achieve your goals.
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
            <h2 className="text-3xl font-bold mb-6">Ready to Stay Accountable?</h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Take the first step towards achieving your goals with a dedicated accountability partner.
            </p>
            <a
              href="/start"
              className="inline-block bg-purple-500 text-text-primary px-8 py-4 rounded-lg hover:bg-purple-600 transition-colors duration-300"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 