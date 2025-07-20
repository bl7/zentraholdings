'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Only run on client
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    setVh(window.innerHeight);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showNormalFixed = scrollY === 0;
  const showNormalStatic = scrollY > 0 && scrollY <= vh / 2;
  const showPill = scrollY > vh / 2;

  const NormalHeader = (props: { fixed?: boolean }) => (
    <header className={props.fixed
      ? 'w-full bg-white border-b border-gray-100 shadow-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300'
      : 'w-full bg-white border-b border-gray-100 shadow-sm transition-all duration-300'}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg border-2 border-[#4A164B]/20 group-hover:scale-105 transition-transform bg-white flex items-center justify-center">
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
          <button className="px-4 py-2 text-[#4A164B] font-semibold hover:text-[#3a1239] transition-colors rounded-lg border border-[#4A164B]/30 bg-white hover:bg-[#4A164B]/10 shadow-sm">
            TALK TO SALES
          </button>
          <button className="px-6 py-2 bg-[#4A164B] text-white rounded-lg hover:bg-[#3a1239] transition-colors font-semibold shadow-lg">
            GET STARTED
          </button>
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
        <div className="md:hidden py-4 border-t border-gray-100 bg-white/95 rounded-b-2xl shadow-xl">
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
              <button className="w-full px-4 py-2 text-[#4A164B] font-semibold hover:text-[#3a1239] transition-colors text-left rounded-lg border border-[#4A164B]/30 bg-white hover:bg-[#4A164B]/10 shadow-sm">
                TALK TO SALES
              </button>
              <button className="w-full mt-2 px-4 py-2 bg-[#4A164B] text-white rounded-lg hover:bg-[#3a1239] transition-colors font-semibold shadow-lg">
                GET STARTED
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );

  return (
    <>
      {showNormalFixed && <NormalHeader fixed />}
      {showNormalStatic && <NormalHeader />}
      {showPill && (
        <header className="fixed top-0 left-0 right-0 z-50 mx-4 mt-4 bg-white/90 backdrop-blur-lg shadow-lg rounded-full border border-gray-200/60 transition-all duration-300">
          <div className="flex items-center justify-between px-6 py-3">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg border-2 border-[#4A164B]/20 group-hover:scale-105 transition-transform bg-white flex items-center justify-center">
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
              <button className="px-4 py-2 text-[#4A164B] font-semibold hover:text-[#3a1239] transition-colors rounded-lg border border-[#4A164B]/30 bg-white hover:bg-[#4A164B]/10 shadow-sm">
                TALK TO SALES
              </button>
              <button className="px-6 py-2 bg-[#4A164B] text-white rounded-lg hover:bg-[#3a1239] transition-colors font-semibold shadow-lg">
                GET STARTED
              </button>
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
            <div className="md:hidden py-4 border-t border-gray-100 bg-white/95 rounded-b-2xl shadow-xl">
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
                  <button className="w-full px-4 py-2 text-[#4A164B] font-semibold hover:text-[#3a1239] transition-colors text-left rounded-lg border border-[#4A164B]/30 bg-white hover:bg-[#4A164B]/10 shadow-sm">
                    TALK TO SALES
                  </button>
                  <button className="w-full mt-2 px-4 py-2 bg-[#4A164B] text-white rounded-lg hover:bg-[#3a1239] transition-colors font-semibold shadow-lg">
                    GET STARTED
                  </button>
                </div>
              </nav>
            </div>
          )}
        </header>
      )}
    </>
  );
};

export default Header;