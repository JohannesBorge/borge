'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "I offer the AI Partner service, providing hands-on technical support to help you build and optimize your online business. This includes implementation support, technical research, vendor selection, and ongoing technical assistance."
    },
    {
      question: "What kind of technical support do you provide?",
      answer: "As an AI Partner, I provide hands-on implementation support, technical research and solutions, vendor selection and setup, and ongoing technical support. I work with you to build and maintain your tech stack using AI-powered tools."
    },
    {
      question: "What's your pricing structure?",
      answer: "I offer transparent pricing: AI Partner at $350/month. The plan includes a 2-week free trial with no credit card required."
    },
    {
      question: "How do I get started?",
      answer: "You can get started by booking a free call through the contact modal. We'll discuss your needs and determine how I can best support your technical requirements. From there, we'll set up your account and begin working together."
    },
    {
      question: "What's your availability?",
      answer: "I'm available Monday through Friday, with response times typically within 24 hours. For urgent matters, you can reach me through WhatsApp or phone call for faster response."
    },
    {
      question: "What makes your services different?",
      answer: "Unlike traditional consulting, I provide hands-on implementation support and daily accountability. I work alongside you to build your business, not just give advice. My services are specifically designed for entrepreneurs transitioning to online business."
    },
    {
      question: "Do you offer refunds?",
      answer: "All fees are non-refundable unless otherwise specified in writing. However, we offer a 2-week free trial with no credit card required so you can evaluate if the service is right for you before committing."
    },
    {
      question: "What kind of businesses do you work with?",
      answer: "I specialize in working with entrepreneurs who are transitioning to online business. Whether you're building a product, service, or digital presence, I can help you establish and grow your online business with confidence."
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