'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t border-border p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-text-secondary">
          <p>
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
            <Link href="/privacy" className="text-primary hover:text-primary/80 underline">
              Learn more
            </Link>
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-primary text-text-primary rounded-lg hover:bg-primary/80 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
} 