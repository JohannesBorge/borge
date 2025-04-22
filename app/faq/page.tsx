'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "I offer three main services: Accountability Partner for daily check-ins and progress tracking, Tech Assistant for hands-on technical support, and Founder Soundboard for strategic guidance and idea bouncing. You can also get all services combined for the best value."
    },
    {
      question: "How does the Accountability Partner service work?",
      answer: "The Accountability Partner service includes daily check-ins, weekly strategy calls, and personalized guidance to help you stay on track with your goals. We'll work together to maintain momentum and ensure consistent progress."
    },
    {
      question: "What kind of technical support do you provide?",
      answer: "As a Tech Assistant, I provide hands-on implementation support, technical research and solutions, vendor selection and setup, documentation and training, and ongoing technical support. I work with you to build and maintain your tech stack."
    },
    {
      question: "How does the Founder voice line service work?",
      answer: "The Founder voice line service allows you to send voice notes to me whenever you need to bounce ideas or get feedback. I'll provide quick responses and strategic guidance to help you make better decisions and move forward with confidence."
    },
    {
      question: "What's your pricing structure?",
      answer: "I offer transparent pricing: Accountability Partner at $100/month, Tech Assistant at $250/month, Founder Soundboard at $50/month, and All Services combined at $350/month (saving you $50/month)."
    },
    {
      question: "How do I get started?",
      answer: "You can get started by booking a free call through the contact modal. We'll discuss your needs and determine which service is the best fit for you. From there, we'll set up your account and begin working together."
    },
    {
      question: "What's your availability?",
      answer: "I'm available Monday through Friday, with response times typically within 24 hours. For urgent matters, you can reach me through WhatsApp or phone call for faster response."
    },
    {
      question: "Can I switch between services?",
      answer: "Yes, you can switch between services or upgrade to the All Services package at any time. Just let me know, and we'll adjust your subscription accordingly."
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Find answers to common questions about my services and how we can work together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface rounded-2xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-background/50 transition-colors duration-300"
                >
                  <h3 className="text-lg font-medium text-text-primary">
                    {faq.question}
                  </h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-text-secondary transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-text-secondary">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 