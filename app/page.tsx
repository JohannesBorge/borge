'use client';

import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ContactModal from './components/ContactModal';

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
      
      {/* Hero Section */}
      <section className="py-24 relative w-full">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/earth.jpg"
            alt="Background"
            fill
            className="object-cover opacity-30 w-full"
            priority
          />
          <div className="absolute inset-0 bg-background/40" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-6 leading-tight animate-fade-in">
              You Don't Need More Ideas.<br />
              You Need Momentum.
            </h1>
            <p className="text-xl text-text-secondary mb-8 animate-fade-in-up">
              For entrepreneurs transitioning to online business. I combine daily accountability and hands-on technical support to help you build your digital presence with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-teal-500 text-text-primary px-8 py-3 rounded-full font-medium hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Contact me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-text-primary">Premium Services</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Tailored solutions to help you build and grow your business. Start with a 2-week free trial, no credit card required.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Accountability Service",
                title: "Stay on track with weekly check-ins.",
                description: "A personal accountability service to help you show up, stay focused, and finish what you start.",
                href: "/services/accountability",
                color: "purple"
              },
              {
                name: "Tech Assistant",
                title: "Build faster. Skip the tech overwhelm.",
                description: "Receive hands-on technical support and guidance to build, optimize, and scale your product efficiently.",
                href: "/services/tech",
                color: "orange"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-surface p-8 rounded-2xl border border-border transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full group ${
                  service.color === 'purple' ? 'hover:border-purple-500' :
                  service.color === 'orange' ? 'hover:border-orange-500' :
                  'hover:border-blue-500'
                }`}
              >
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-text-primary">{service.name}</h3>
                  <p className="text-xl text-text-primary mb-4">{service.title}</p>
                  <p className="text-text-secondary mb-6">{service.description}</p>
            </div>
                <Link
                  href={service.href}
                  className={`inline-block text-${service.color}-500 hover:text-${service.color}-600 transition-colors duration-300 mt-auto`}
                >
                  Learn more →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-text-primary animate-fade-in">Real Results for Entrepreneurs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-surface p-8 rounded-2xl border border-border hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-bold text-teal-500 mb-4">3x</div>
              <h3 className="text-xl font-semibold mb-2">Faster Product Launch</h3>
              <p className="text-text-secondary">Average time to market for entrepreneurs using our accountability and tech support services.</p>
            </div>
            <div className="bg-surface p-8 rounded-2xl border border-border hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-bold text-teal-500 mb-4">85%</div>
              <h3 className="text-xl font-semibold mb-2">Success Rate</h3>
              <p className="text-text-secondary">Of entrepreneurs who maintain consistent progress with our accountability system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-right">
              <h2 className="text-3xl font-bold mb-6 text-text-primary">Hi, I'm Johannes Borge.</h2>
              <p className="text-text-secondary mb-4">
                I've been where you are—building alone, juggling ideas, and trying to make things work. Through my journey as a solo founder, I've learned that what we really need isn't more ideas or tools, but focused momentum and real support.
              </p>
              <p className="text-text-secondary">
                That's why I created these services. Not to add to the noise, but to give you what I wish I had: clear guidance, technical know-how, and someone who truly understands the solo founder journey. Let's build something meaningful together.
              </p>
            </div>
            <div className="relative aspect-square animate-fade-in-left">
              <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src="/images/profile.PNG"
                  alt="Johannes Borge"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-text-primary animate-fade-in">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-surface p-8 rounded-2xl shadow-sm border border-border hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full group">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors duration-300">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text-primary">Accountability Partner</h3>
              <div className="mb-6">
                <p className="text-2xl font-bold text-text-primary">$150<span className="text-text-secondary">/mo</span></p>
                <p className="text-sm text-text-secondary mt-2">Introduction Price</p>
                <p className="text-sm text-purple-500 mt-1">2-week free trial, no credit card required</p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-text-secondary text-sm">
                  <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Daily momentum check-ins
                </li>
                <li className="flex items-center text-text-secondary text-sm">
                  <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Weekly strategy & planning
                </li>
                <li className="flex items-center text-text-secondary text-sm">
                  <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Progress tracking & metrics
                </li>
              </ul>
              <div className="mt-auto">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="w-full bg-purple-500 text-text-primary py-3 rounded-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </button>
              </div>
            </div>

            <div className="bg-surface p-8 rounded-2xl shadow-sm border border-border hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full group">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors duration-300">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text-primary">Tech Assistant</h3>
              <div className="mb-6">
                <p className="text-2xl font-bold text-text-primary">$350<span className="text-text-secondary">/mo</span></p>
                <p className="text-sm text-text-secondary mt-2">Introduction Price</p>
                <p className="text-sm text-orange-500 mt-1">2-week free trial, no credit card required</p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-text-secondary text-sm">
                  <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Hands-on implementation
                </li>
                <li className="flex items-center text-text-secondary text-sm">
                  <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Technical research & solutions
                </li>
                <li className="flex items-center text-text-secondary text-sm">
                  <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI-powered development support
                </li>
              </ul>
              <div className="mt-auto">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="w-full bg-orange-500 text-text-primary py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </button>
              </div>
            </div>

            <div className="bg-teal-900/20 p-8 rounded-2xl shadow-lg border-2 border-teal-500 hover:border-teal-400 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full group relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-teal-500 text-text-primary px-4 py-1 rounded-full text-sm font-medium">Best Value</span>
              </div>
              <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-500/30 transition-colors duration-300">
                <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text-primary">All Services</h3>
              <div className="mb-6">
                <p className="text-2xl font-bold text-text-primary">$450<span className="text-text-secondary">/mo</span></p>
                <p className="text-sm text-text-secondary mt-2">Introduction Price</p>
                <p className="text-sm text-teal-500 mt-1">Save $50/month</p>
                <p className="text-sm text-teal-500 mt-1">2-week free trial, no credit card required</p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-text-secondary text-sm">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  All features included
                </li>
                <li className="flex items-center text-text-secondary text-sm">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Priority support
                </li>
                <li className="flex items-center text-text-secondary text-sm">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Seamless workflow
                </li>
              </ul>
              <div className="mt-auto">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="w-full bg-teal-500 text-text-primary py-3 rounded-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-6 animate-fade-in">Let's push your vision forward.</h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto animate-fade-in-up">
            You don't need more courses or communities. You need someone in your corner.
          </p>
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="bg-teal-500 text-text-primary px-8 py-3 rounded-full font-medium hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Contact me
          </button>
        </div>
      </section>
    </main>
  );
} 