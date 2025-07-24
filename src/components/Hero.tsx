'use client'
import React from 'react';
import Image from 'next/image';
import TaglineRotator from './TaglineRotator';

const Hero = () => {
  return (
    <section className="pt-20 pb-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <div className="flex justify-center mt-10">
            <Image src="/logo.png" alt="Zentra Holdings Ltd. Logo" width={220} height={220} priority />
          </div>
          <div className="mt-0 mb-2">
            <TaglineRotator />
          </div>

          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            We build tailored SaaS platforms, mobile apps, and integrations that solve real business problems. No cookie-cutter solutions, no abandoned projects. 
          </p>
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a href="#contact" className="px-8 py-4 bg-[#4A164B] text-white rounded-lg hover:bg-[#3a1239] transition-colors font-medium text-lg">
              Get a Quote
            </a>
            <a href="/contact" className="px-8 py-4 border border-[#4A164B] text-[#4A164B] rounded-lg hover:bg-[#4A164B]/10 transition-colors font-medium text-lg">
            Contact Us
            </a>
          </div>
          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <span className="text-gray-600 text-base flex items-center gap-2">🌍 Remote team, global clients</span>
            <span className="text-gray-600 text-base flex items-center gap-2">💷 Fixed-price projects from £3,000</span>
            <span className="text-gray-600 text-base flex items-center gap-2">⏱️ 4-12 week delivery timeline</span>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Hero; 