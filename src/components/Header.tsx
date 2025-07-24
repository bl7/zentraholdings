'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'mx-4 mt-4 rounded-full bg-white/90 shadow-lg backdrop-blur border border-gray-200/60'
          : 'bg-white border-b border-gray-100 shadow-sm rounded-none mx-0 mt-0'
        }`}
      style={{ height: 72 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 overflow-hidden  flex items-center justify-center">
            <Image src="/icon.png" alt="Zentra Holdings Ltd. Logo" width={40} height={40} priority />
          </div>
          <span className="text-2xl font-extrabold text-gray-900 tracking-tight group-hover:text-[#4A164B] transition-colors">Zentra</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Contact'].map((name) => (
            <Link
              key={name}
              href={name === 'Home' ? '/' : `/${name.toLowerCase()}`}
              className={`text-base font-semibold transition-colors px-2 py-1 rounded-lg ${
                pathname === (name === 'Home' ? '/' : `/${name.toLowerCase()}`)
                  ? 'text-[#4A164B] bg-[#4A164B]/10'
                  : 'text-gray-700 hover:text-[#4A164B] hover:bg-[#4A164B]/5'
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/contact" className="px-4 py-2 text-[#4A164B] font-semibold hover:text-[#3a1239] transition-colors rounded-lg border border-[#4A164B]/30 bg-white hover:bg-[#4A164B]/10 shadow-sm">
            Contact Us
          </Link>
         
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden py-4 border-t border-gray-100 bg-white/95 rounded-b-lg shadow-xl">
          <nav className="flex flex-col space-y-4 px-6">
            {['Home', 'About', 'Contact'].map((name) => (
              <Link
                key={name}
                href={name === 'Home' ? '/' : `/${name.toLowerCase()}`}
                className={`text-base font-semibold transition-colors px-2 py-2 rounded-lg ${
                  pathname === (name === 'Home' ? '/' : `/${name.toLowerCase()}`)
                    ? 'text-[#4A164B] bg-[#4A164B]/10'
                    : 'text-gray-700 hover:text-[#4A164B] hover:bg-[#4A164B]/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <Link href="/contact" className="w-full px-4 py-2 text-[#4A164B] font-semibold hover:text-[#3a1239] transition-colors text-left rounded-lg border border-[#4A164B]/30 bg-white hover:bg-[#4A164B]/10 shadow-sm">
                Contact Us
              </Link>
            
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;