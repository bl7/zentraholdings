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
            Custom SaaS solutions for ambitious organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#zentraflow" className="px-8 py-4 bg-[#4A164B] text-white rounded-lg hover:bg-[#3a1239] transition-colors font-medium text-lg">
              View Solutions
            </a>
            <a href="#contact" className="px-8 py-4 border border-[#4A164B] text-[#4A164B] rounded-lg hover:bg-[#4A164B] hover:text-white transition-colors font-medium text-lg">
              Contact Us
            </a>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Hero; 