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
              For entrepreneurs transitioning to online business. I combine AI-powered tools and hands-on support to help you build your digital presence with confidence.
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
            <h2 className="text-3xl font-bold mb-4 text-text-primary">Premium Service</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Tailored solution to help you build and grow your business. Start with a 2-week free trial, no credit card required.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "AI Partner",
                title: "Build faster. Skip the tech overwhelm.",
                description: "Receive hands-on technical support and guidance to build, optimize, and scale your online business efficiently.",
                href: "/services/ai-partner",
                color: "orange"
              },
              {
                name: "AI Course",
                title: "Master AI for your business. Coming Soon.",
                description: "A comprehensive course designed to help entrepreneurs leverage AI tools and technologies to build and grow their online business.",
                href: "/services/ai-course",
                color: "orange"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-surface p-8 rounded-2xl border border-border transition-all duration-300 hover:-translate-y-2 flex flex-col h-full group ${
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

      {/* Pilot Customers Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-text-primary animate-fade-in">Limited Pilot Program</h2>
            <p className="text-xl text-text-secondary mb-8 animate-fade-in-up">
              I'm currently accepting 10 pilot customers to help shape and refine this service. As a pilot customer, you'll get:
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-surface p-6 rounded-2xl border border-border hover:border-teal-500 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-teal-500/30 transition-colors duration-300">
                  <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-text-primary">Influence Development</h3>
                <p className="text-text-secondary">Help shape the future of this service with your feedback and needs.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-surface p-6 rounded-2xl border border-border hover:border-teal-500 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-teal-500/30 transition-colors duration-300">
                  <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-text-primary">Exclusive Benefits</h3>
                <p className="text-text-secondary">Get early access to the AI Course and lock in introductory pricing for the duration of your pilot program.</p>
                <p className="text-sm text-teal-500 mt-2">2-week free trial, no credit card required</p>
              </motion.div>
            </div>
            <div className="mt-12">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-teal-500 text-text-primary px-8 py-3 rounded-full font-medium hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Apply for Pilot Program
              </button>
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
                I've been where you are—transitioning to online business, juggling ideas, and trying to make things work. Through my journey as a solo founder, I've learned that what we really need isn't more ideas or tools, but focused momentum and real support.
              </p>
              <p className="text-text-secondary">
                That's why I created this service. Not to add to the noise, but to give you what I wish I had: clear guidance, technical know-how, and someone who truly understands the journey of building an online business. Let's build something meaningful together.
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
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-surface p-8 rounded-2xl shadow-sm border border-border hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full group">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors duration-300">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text-primary">AI Partner</h3>
              <div className="text-4xl font-bold text-orange-500">$350<span className="text-xl text-text-secondary">/month</span></div>
              <div className="mb-6">
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
                  Immediate tech problem-solving
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
            <div className="bg-surface p-8 rounded-2xl shadow-sm border border-border hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full group">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors duration-300">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text-primary">AI Course</h3>
              <div className="text-4xl font-bold text-orange-500">Coming Soon</div>
              <div className="mb-6">
                <p className="text-sm text-text-secondary mt-2">Comprehensive AI Training</p>
                <p className="text-sm text-orange-500 mt-1">Join the waitlist for early access</p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-text-secondary text-sm">
                  <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI Fundamentals
                </li>
                <li className="flex items-center text-text-secondary text-sm">
                  <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Practical Implementation
                </li>
                <li className="flex items-center text-text-secondary text-sm">
                  <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Business Growth Strategies
                </li>
              </ul>
              <div className="mt-auto">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="w-full bg-orange-500 text-text-primary py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
                >
                  Join Waitlist
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