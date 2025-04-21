'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  const contactOptions = [
    {
      title: 'Send me an email',
      href: 'mailto:johannes@johannesborge.com',
      icon: '✉️'
    },
    {
      title: 'Message me on WhatsApp',
      href: 'https://wa.me/your-number',
      icon: '💬'
    },
    {
      title: 'DM me on Instagram',
      href: 'https://instagram.com/your-username',
      icon: '📸'
    },
    {
      title: 'Call me',
      href: 'tel:+your-number',
      icon: '📞'
    },
    {
      title: 'Book a meeting with me',
      href: 'https://calendly.com/your-username',
      icon: '📅'
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-surface border border-border rounded-2xl p-8 max-w-md w-full mx-4"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-text-secondary hover:text-text-primary"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold mb-6 text-text-primary">Let's Connect</h2>
            
            <div className="space-y-4">
              {contactOptions.map((option, index) => (
                <a
                  key={index}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <span className="text-2xl">{option.icon}</span>
                  <span className="text-text-primary">{option.title}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 