import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            You Don't Need More Ideas.<br />
            You Need Momentum.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            I'm Johannes Borge, a solo founder helping indie hackers and SaaS builders turn their ideas into reality through accountability, technical expertise, and strategic guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
              Book a Free Call
            </button>
            <button className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Premium Services for Solo Founders</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* SaaS Royal */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4">SaaS Royal</h3>
              <p className="text-gray-600 mb-6">Personal accountability coaching to keep you focused and shipping consistently. Daily check-ins, weekly calls, and strategic guidance.</p>
              <button className="text-blue-600 font-medium flex items-center group">
                Learn more <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Tech Assistant */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Tech Assistant</h3>
              <p className="text-gray-600 mb-6">Hands-on technical help for building and scaling your MVP. From architecture to implementation, I've got you covered.</p>
              <button className="text-blue-600 font-medium flex items-center group">
                Learn more <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Founder Soundboard */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Founder Soundboard</h3>
              <p className="text-gray-600 mb-6">Async voice-based idea sounding board for strategic decisions. Get instant feedback on your toughest challenges.</p>
              <button className="text-blue-600 font-medium flex items-center group">
                Learn more <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Founders Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <p className="text-gray-600 italic mb-4">"Johannes helped me stay accountable and ship my product faster than I ever thought possible. His daily check-ins were exactly what I needed."</p>
              <p className="font-medium">- Founder Name</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <p className="text-gray-600 italic mb-4">"The technical guidance I received was invaluable in building a solid foundation for my SaaS. Couldn't have done it without Johannes."</p>
              <p className="font-medium">- Founder Name</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Johannes</h2>
              <p className="text-gray-600 mb-4">
                As a solo founder myself, I understand the challenges of building and scaling a SaaS business. I've helped dozens of founders turn their ideas into successful products through a combination of accountability, technical expertise, and strategic guidance.
              </p>
              <p className="text-gray-600">
                My approach is practical, direct, and focused on results. I believe in shipping fast, learning quickly, and building sustainable businesses.
              </p>
            </div>
            <div className="relative aspect-square">
              {/* Placeholder for profile image */}
              <div className="bg-gray-200 rounded-2xl w-full h-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">SaaS Royal</h3>
              <p className="text-3xl font-bold mb-4">$299/mo</p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Tech Assistant</h3>
              <p className="text-3xl font-bold mb-4">$499/mo</p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Founder Soundboard</h3>
              <p className="text-3xl font-bold mb-4">$199/mo</p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">All Services</h3>
              <p className="text-3xl font-bold mb-4">$799/mo</p>
              <p className="text-gray-600 mb-4">Save $200/month</p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Build Your SaaS?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute call to discuss your project and see how we can work together.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors">
            Schedule a Call
          </button>
        </div>
      </section>
    </main>
  );
} 