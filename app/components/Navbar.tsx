'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  const services = [
    { name: 'Accountability Partner', href: '/services/accountability' },
    { name: 'Tech Assistant', href: '/services/tech' },
    { name: 'Founder Soundboard', href: '/services/soundboard' },
  ];

  const navItems = [
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-xl font-bold text-text-primary hover:text-teal-500 transition-colors duration-300">
              Johannes Borge
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center text-text-secondary hover:text-teal-500 transition-colors duration-300"
              >
                Services
                <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 rounded-lg bg-surface border border-border shadow-lg py-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2 text-text-secondary hover:text-teal-500 hover:bg-background/50 transition-colors duration-300"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-text-secondary hover:text-teal-500 transition-colors duration-300 cursor-pointer"
              >
                {item.name}
              </a>
            ))}
            <Link
              href="/start"
              className="bg-teal-500 text-text-primary px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors duration-300"
            >
              Start Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-primary hover:text-teal-500 transition-colors duration-300"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center w-full px-3 py-2 text-text-secondary hover:text-teal-500 transition-colors duration-300"
              >
                Services
                <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="pl-4 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-3 py-2 text-text-secondary hover:text-teal-500 transition-colors duration-300"
                      onClick={() => {
                        setIsServicesOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="block px-3 py-2 text-text-secondary hover:text-teal-500 transition-colors duration-300 cursor-pointer"
              >
                {item.name}
              </a>
            ))}
            <Link
              href="/start"
              className="block px-3 py-2 text-text-primary bg-teal-500 rounded-lg hover:bg-teal-600 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Start Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 