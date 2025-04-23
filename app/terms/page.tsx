'use client';

import { motion } from 'framer-motion';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-text-secondary mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Services</h2>
            <p>
              We provide various services including but not limited to:
            </p>
            <ul className="list-disc pl-6">
              <li>Tech Assistant</li>
              <li>Accountability Partner</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Responsibilities</h2>
            <p>
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc pl-6">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account</li>
              <li>Use our services in compliance with applicable laws</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Payment Terms</h2>
            <p>
              Payment for services is required in advance. All fees are non-refundable unless otherwise specified in writing.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
            <p>
              By consuming our content or paying for our services, you acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6">
              <li>We are not liable for any decisions you make based on our content or services</li>
              <li>We make no guarantees about the results or outcomes of using our services</li>
              <li>We are not responsible for any financial losses, business decisions, or personal outcomes</li>
              <li>All services are provided "as is" without any warranties, express or implied</li>
              <li>You use our services at your own risk and discretion</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
              <br />
              Email: service@johannesborge.com
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 