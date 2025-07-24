'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTabletAlt, FaTags, FaPrint } from "react-icons/fa";
import Image from "next/image";



const SlackInspiredSection = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative flex flex-col items-center justify-center py-6 bg-gradient-to-br from-gray-50 to-white px-4 sm:px-6 md:px-12 lg:px-16"
    >
      {/* Browser/Mockup Window */}
      <div className="relative z-10 w-full max-w-4xl min-h-[60vh] mx-auto shadow-2xl border border-gray-200 bg-white overflow-hidden mb-15">
        {/* Browser top bar */}
        <div className="flex items-center gap-2 h-10 px-4 bg-[#4A164B] relative">
          {/* Sidebar toggle button for mobile */}
          <button
            className="sm:hidden mr-2 focus:outline-none"
            aria-label="Open sidebar"
            onClick={() => setSidebarOpen(true)}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="h-3 w-3 rounded-full bg-red-400 inline-block"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-400 inline-block"></span>
          <span className="h-3 w-3 rounded-full bg-green-400 inline-block"></span>
          <span className="ml-4 text-xs text-white font-semibold tracking-wide">Zentra Holdings Platform</span>
        </div>
        <div className="flex min-h-[60vh]">
          {/* Sidebar - responsive */}
          {/* Desktop sidebar */}
          <aside className="hidden sm:flex w-48 min-h-[60vh] bg-gradient-to-b from-[#F3E8FF] to-[#F8FAFC] border-r border-gray-100 py-6 px-3 flex-col items-center justify-center">
            <div className="flex items-center justify-center h-full">
              <Image src="/logo.png" alt="Zentra Logo" width={120} height={64} className="rounded" />
            </div>
          </aside>
          {/* Mobile sidebar (drawer) */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-30 flex">
              <div className="w-48 bg-gradient-to-b from-[#F3E8FF] to-[#F8FAFC] border-r border-gray-100 py-6 px-3 flex flex-col items-center justify-center min-h-full shadow-xl animate-slideInLeft">
                <button
                  className="absolute top-4 right-4 text-gray-700 focus:outline-none"
                  aria-label="Close sidebar"
                  onClick={() => setSidebarOpen(false)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="flex items-center justify-center h-full">
                  <Image src="/logo.png" alt="Zentra Logo" width={120} height={64} className="rounded" />
                </div>
              </div>
              {/* Overlay to close sidebar */}
              <div className="flex-1" onClick={() => setSidebarOpen(false)} />
            </div>
          )}
          {/* Main area: Value Proposition Content */}
          <main className="flex-1 bg-white px-8 py-8 flex flex-col min-h-[60vh] justify-center">
            <div className="w-full max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Why Businesses Choose Zentra</h2>
              <p className="text-lg text-gray-700 mb-8">
                We don&apos;t just code – we solve problems. Every solution we build gets daily use because we focus on what actually matters to your business.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="font-semibold text-[#9321C6] mb-1">Real Software, Real Results</h3>
                  <p className="text-gray-700 mb-4">We don&apos;t just code – we solve problems. Every solution we build gets daily use because we focus on what actually matters to your business.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#9321C6] mb-1">Fixed-Price, Fixed-Timeline</h3>
                  <p className="text-gray-700 mb-4">Know exactly what you&apos;re paying upfront. Our project-based pricing means no hourly surprises, just delivered software that works.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#9321C6] mb-1">Built to Integrate</h3>
                  <p className="text-gray-700 mb-4">Your existing systems matter. We build around your workflow, connecting APIs, hardware, and legacy systems seamlessly.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#9321C6] mb-1">Remote Team, Professional Standards</h3>
                  <p className="text-gray-700 mb-4">Work with developers worldwide while maintaining UK-level communication and delivery standards.</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </motion.section>
  );
};

export default SlackInspiredSection; 