import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 relative w-full">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/bangkok.jpg"
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
              I'm Johannes Borge, a solo founder helping indie hackers and SaaS builders turn their ideas into reality through accountability, technical expertise, and strategic guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <button className="bg-teal-500 text-text-primary px-8 py-3 rounded-full font-medium hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Book a Free Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-text-primary animate-fade-in">Premium Services for Solo Founders</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* SaaS Royal */}
            <div className="bg-surface p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-border group flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-2 text-text-primary group-hover:text-teal-500 transition-colors duration-300">Accountability Partner</h3>
              <h4 className="text-lg font-medium mb-4 text-text-secondary group-hover:text-text-primary transition-colors duration-300">Stay on track. Build with intention</h4>
              <p className="text-text-secondary mb-6 group-hover:text-text-primary transition-colors duration-300">A personal accountability service that helps you show up, stay focused, and actually finish what you start.</p>
              <div className="mt-auto">
                <button className="text-primary font-medium flex items-center group-hover:text-secondary transition-colors duration-300">
                  Learn more <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Tech Assistant */}
            <div className="bg-surface p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-border group flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-2 text-text-primary group-hover:text-teal-500 transition-colors duration-300">Tech Assistant</h3>
              <h4 className="text-lg font-medium mb-4 text-text-secondary group-hover:text-text-primary transition-colors duration-300">Build faster. Skip the tech overwhelm.</h4>
              <p className="text-text-secondary mb-6 group-hover:text-text-primary transition-colors duration-300">Your personal technical sidekick. Get unstuck, ship your MVP, and stay out of the weeds.</p>
              <div className="mt-auto">
                <button className="text-primary font-medium flex items-center group-hover:text-secondary transition-colors duration-300">
                  Learn more <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Founder Soundboard */}
            <div className="bg-surface p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-border group flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-2 text-text-primary group-hover:text-teal-500 transition-colors duration-300">Founder Soundboard</h3>
              <h4 className="text-lg font-medium mb-4 text-text-secondary group-hover:text-text-primary transition-colors duration-300">Think it through. Talk it out.</h4>
              <p className="text-text-secondary mb-6 group-hover:text-text-primary transition-colors duration-300">Voice-note based support with me directly. Clear mental fog, bounce ideas, and stay sharp.</p>
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
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-text-primary animate-fade-in">What Founders Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-surface p-8 rounded-2xl border border-border hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-1">
              <p className="text-text-secondary italic mb-4">"Johannes helped me stay accountable and ship my product faster than I ever thought possible. His daily check-ins were exactly what I needed."</p>
              <p className="font-medium text-text-primary">- Founder Name</p>
            </div>
            <div className="bg-surface p-8 rounded-2xl border border-border hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-1">
              <p className="text-text-secondary italic mb-4">"The technical guidance I received was invaluable in building a solid foundation for my SaaS. Couldn't have done it without Johannes."</p>
              <p className="font-medium text-text-primary">- Founder Name</p>
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
                That's why I created these services. Not to add to the noise, but to give you what I wish I had: clear guidance, technical expertise, and someone who truly understands the solo founder journey. Let's build something meaningful together.
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
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-surface p-8 rounded-2xl shadow-sm border border-border hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full group">
              <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-500/30 transition-colors duration-300">
                <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text-primary">SaaS Royal</h3>
              <div className="mb-6">
                <p className="text-2xl font-bold text-text-primary">$50/mo</p>
                <p className="text-text-secondary text-sm">First 2 months</p>
                <p className="text-2xl font-bold text-text-primary mt-2">$100/mo</p>
                <p className="text-text-secondary text-sm">After 2 months</p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-text-secondary text-sm">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Daily check-ins
                </li>
                <li className="flex items-center text-text-secondary text-sm">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Weekly strategy calls
                </li>
                <li className="flex items-center text-text-secondary text-sm">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Personalized guidance
                </li>
              </ul>
              <div className="mt-auto">
                <button className="w-full bg-teal-500 text-text-primary py-3 rounded-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>

            <div className="bg-surface p-8 rounded-2xl shadow-sm border border-border hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full group">
              <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-500/30 transition-colors duration-300">
                <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text-primary">Tech Assistant</h3>
              <div className="mb-6">
                <p className="text-2xl font-bold text-text-primary">$100/mo</p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-text-secondary text-sm">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Technical implementation
                </li>
                <li className="flex items-center text-text-secondary text-sm">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Architecture guidance
                </li>
                <li className="flex items-center text-text-secondary text-sm">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  MVP development
                </li>
              </ul>
              <div className="mt-auto">
                <button className="w-full bg-teal-500 text-text-primary py-3 rounded-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>

            <div className="bg-surface p-8 rounded-2xl shadow-sm border border-border hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full group">
              <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-500/30 transition-colors duration-300">
                <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text-primary">Founder Soundboard</h3>
              <div className="mb-6">
                <p className="text-2xl font-bold text-text-primary">$50/mo</p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-text-secondary text-sm">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Voice-note support
                </li>
                <li className="flex items-center text-text-secondary text-sm">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Strategic feedback
                </li>
                <li className="flex items-center text-text-secondary text-sm">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Quick responses
                </li>
              </ul>
              <div className="mt-auto">
                <button className="w-full bg-teal-500 text-text-primary py-3 rounded-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105">
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
                <p className="text-2xl font-bold text-text-primary">$200/mo</p>
                <p className="text-text-secondary text-sm">Save $50/month</p>
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
                  Custom integration
                </li>
              </ul>
              <div className="mt-auto">
                <button className="w-full bg-teal-500 text-text-primary py-3 rounded-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105">
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
          <button className="bg-teal-500 text-text-primary px-8 py-3 rounded-full font-medium hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          Book a discovery call
          </button>
        </div>
      </section>
    </main>
  );
} 