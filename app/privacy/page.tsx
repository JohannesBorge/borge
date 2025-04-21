'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-text-secondary mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              This Privacy Policy describes how Johannes Borge ("we," "us," or "our") collects, uses, and shares your personal information when you use our services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6">
              <li>Contact information (name, email address)</li>
              <li>Communication preferences</li>
              <li>Service usage data</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6">
              <li>Provide and maintain our services</li>
              <li>Communicate with you about our services</li>
              <li>Improve and personalize your experience</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: service@johannesborge.com
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 