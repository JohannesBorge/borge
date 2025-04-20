import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-6 leading-tight animate-fade-in">
            You Don't Need More Ideas.<br />
            You Need Momentum.
          </h1>
          <p className="text-xl text-text-secondary mb-8 animate-fade-in-up">
            I'm Johannes Borge, a solo founder helping indie hackers and SaaS builders turn their ideas into reality through accountability, technical expertise, and strategic guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <button className="bg-primary text-text-primary px-8 py-3 rounded-full font-medium hover:bg-hover transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Book a Free Call
            </button>
            <button className="bg-surface text-text-primary border border-border px-8 py-3 rounded-full font-medium hover:bg-hover transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-text-primary animate-fade-in">Premium Services for Solo Founders</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* SaaS Royal */}
            <div className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-border group flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:text-primary transition-colors duration-300">SaaS Royal</h3>
              <p className="text-text-secondary mb-6 group-hover:text-text-primary transition-colors duration-300">Personal accountability coaching to keep you focused and shipping consistently. Daily check-ins, weekly calls, and strategic guidance.</p>
              <div className="mt-auto">
                <button className="text-primary font-medium flex items-center group-hover:text-secondary transition-colors duration-300">
                  Learn more <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Tech Assistant */}
            <div className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-border group flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:text-primary transition-colors duration-300">Tech Assistant</h3>
              <p className="text-text-secondary mb-6 group-hover:text-text-primary transition-colors duration-300">Hands-on technical help for building and scaling your MVP. From architecture to implementation, I've got you covered.</p>
              <div className="mt-auto">
                <button className="text-primary font-medium flex items-center group-hover:text-secondary transition-colors duration-300">
                  Learn more <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Founder Soundboard */}
            <div className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-border group flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:text-primary transition-colors duration-300">Founder Soundboard</h3>
              <p className="text-text-secondary mb-6 group-hover:text-text-primary transition-colors duration-300">Async voice-based idea sounding board for strategic decisions. Get instant feedback on your toughest challenges.</p>
              <div className="mt-auto">
                <button className="text-primary font-medium flex items-center group-hover:text-secondary transition-colors duration-300">
                  Learn more <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-text-primary animate-fade-in">What Founders Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-surface p-8 rounded-2xl border border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
              <p className="text-text-secondary italic mb-4">"Johannes helped me stay accountable and ship my product faster than I ever thought possible. His daily check-ins were exactly what I needed."</p>
              <p className="font-medium text-text-primary">- Founder Name</p>
            </div>
            <div className="bg-surface p-8 rounded-2xl border border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
              <p className="text-text-secondary italic mb-4">"The technical guidance I received was invaluable in building a solid foundation for my SaaS. Couldn't have done it without Johannes."</p>
              <p className="font-medium text-text-primary">- Founder Name</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-right">
              <h2 className="text-3xl font-bold mb-6 text-text-primary">About Johannes</h2>
              <p className="text-text-secondary mb-4">
                As a solo founder myself, I understand the challenges of building and scaling a SaaS business. I've helped dozens of founders turn their ideas into successful products through a combination of accountability, technical expertise, and strategic guidance.
              </p>
              <p className="text-text-secondary">
                My approach is practical, direct, and focused on results. I believe in shipping fast, learning quickly, and building sustainable businesses.
              </p>
            </div>
            <div className="relative aspect-square animate-fade-in-left">
              {/* Placeholder for profile image */}
              <div className="bg-hover rounded-2xl w-full h-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-text-primary animate-fade-in">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-surface p-8 rounded-2xl shadow-sm border border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4 text-text-primary">SaaS Royal</h3>
              <p className="text-3xl font-bold mb-4 text-text-primary">$299/mo</p>
              <div className="mt-auto">
                <button className="w-full bg-primary text-text-primary py-3 rounded-lg hover:bg-hover transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>
            <div className="bg-surface p-8 rounded-2xl shadow-sm border border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4 text-text-primary">Tech Assistant</h3>
              <p className="text-3xl font-bold mb-4 text-text-primary">$499/mo</p>
              <div className="mt-auto">
                <button className="w-full bg-primary text-text-primary py-3 rounded-lg hover:bg-hover transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>
            <div className="bg-surface p-8 rounded-2xl shadow-sm border border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4 text-text-primary">Founder Soundboard</h3>
              <p className="text-3xl font-bold mb-4 text-text-primary">$199/mo</p>
              <div className="mt-auto">
                <button className="w-full bg-primary text-text-primary py-3 rounded-lg hover:bg-hover transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>
            <div className="bg-hover p-8 rounded-2xl shadow-sm border border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4 text-text-primary">All Services</h3>
              <p className="text-3xl font-bold mb-4 text-text-primary">$799/mo</p>
              <p className="text-text-secondary mb-4">Save $200/month</p>
              <div className="mt-auto">
                <button className="w-full bg-primary text-text-primary py-3 rounded-lg hover:bg-hover transition-all duration-300 transform hover:scale-105">
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
          <h2 className="text-3xl font-bold text-text-primary mb-6 animate-fade-in">Ready to Build Your SaaS?</h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Book a free 30-minute call to discuss your project and see how we can work together.
          </p>
          <button className="bg-primary text-text-primary px-8 py-3 rounded-full font-medium hover:bg-hover transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Schedule a Call
          </button>
        </div>
      </section>
    </main>
  );
} 