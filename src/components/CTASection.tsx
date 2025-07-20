'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Script from 'next/script';

const CTASection = () => {
  return (
    <>
      <Script id="faq-ld-json" type="application/ld+json" strategy="afterInteractive">{`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is Zentra Holdings?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Zentra Holdings is a leading provider of SaaS software solutions, specializing in automation, printing, and digital transformation for businesses of all sizes."
              }
            },
            {
              "@type": "Question",
              "name": "What is InstaLabel?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "InstaLabel is Zentra&apos;s innovative SaaS product for professional label printing, compliance, and automation in the food and retail industry."
              }
            },
            {
              "@type": "Question",
              "name": "What is PrintBridge?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "PrintBridge by Zentra is a seamless print integration solution that connects your SaaS platform to a wide range of printers for efficient, reliable label and document printing."
              }
            },
            {
              "@type": "Question",
              "name": "Why choose Zentra for SaaS solutions?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Zentra offers secure, scalable, and innovative SaaS solutions tailored to your business needs, including InstaLabel and PrintBridge for automation and printing."
              }
            },
            {
              "@type": "Question",
              "name": "How can I get started with Zentra?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Contact us to discuss your requirements and discover how Zentra's software solutions, including InstaLabel and PrintBridge, can help your business grow."
              }
            }
          ]
        }
      `}</Script>
      <motion.section
        className="py-20 bg-gradient-to-r from-[#4A164B] to-[#9321C6]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' as const }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of businesses already using our innovative solutions to streamline operations and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 bg-white text-[#4A164B] rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg text-center">
                Contact Us
              </a>
              <a href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#4A164B] transition-colors font-semibold text-lg text-center">
                View Solutions
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm opacity-80">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>30-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default CTASection; 