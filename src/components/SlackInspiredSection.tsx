"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaWifi, FaPrint, FaTabletAlt, FaTags } from "react-icons/fa";
import Image from "next/image";

const features = [
  { icon: <FaTags className="h-5 w-5 text-[#9321C6]" />, label: "InstaLabel" },
  { icon: <FaWifi className="h-5 w-5 text-[#4A164B]" />, label: "PrintBridge" },
  { icon: <FaTabletAlt className="h-5 w-5 text-[#21C6A6]" />, label: "TapTab" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8 },
};

const SlackInspiredSection = () => (
  <motion.section
    className="relative flex flex-col items-center justify-center py-6 bg-gradient-to-br from-gray-50 to-white px-4 sm:px-6 md:px-12 lg:px-16"
    {...fadeInUp}
  >
    {/* Browser/Mockup Window */}
    <div className="relative z-10 w-full max-w-4xl mx-auto rounded-2xl shadow-2xl border border-gray-200 bg-white overflow-hidden mb-2">
      {/* Browser top bar */}
      <div className="flex items-center gap-2 h-10 px-4 bg-[#4A164B]">
        <span className="h-3 w-3 rounded-full bg-red-400 inline-block"></span>
        <span className="h-3 w-3 rounded-full bg-yellow-400 inline-block"></span>
        <span className="h-3 w-3 rounded-full bg-green-400 inline-block"></span>
        <span className="ml-4 text-xs text-white font-semibold tracking-wide">Zentra Holdings Platform</span>
      </div>
      <div className="flex min-h-[340px]">
        {/* Sidebar */}
        <aside className="w-48 bg-gradient-to-b from-[#F3E8FF] to-[#F8FAFC] border-r border-gray-100 py-6 px-3 flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-6">
            <Image src="/logo.png" alt="Zentra Logo" width={32} height={32} className="rounded" />
            <span className="font-bold text-[#4A164B] text-lg">Zentra</span>
          </div>
          <nav className="flex flex-col gap-2 text-sm">
            <span className="font-semibold text-[#9321C6] flex items-center gap-2"><FaTags className="h-4 w-4" /> InstaLabel</span>
            <span className="text-gray-700 flex items-center gap-2"><FaWifi className="h-4 w-4" /> PrintBridge</span>
            <span className="text-gray-700 flex items-center gap-2"><FaTabletAlt className="h-4 w-4" /> TapTab</span>
          </nav>
        </aside>
        {/* Main area */}
        <main className="flex-1 bg-white px-8 py-8 flex flex-col items-center justify-center">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#4A164B] mb-2">This can be your solution</h3>
            <p className="text-lg text-gray-700 max-w-md mx-auto">
              Zentra Holdings builds custom platforms for your business. Imagine your own dashboard, workflows, and integrations—tailored just for you.
            </p>
          </div>
        </main>
      </div>
    </div>
    {/* Headline & Subheadline */}
    <div className="text-center max-w-2xl mx-auto mb-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
        Bring your people, projects, and apps together with Zentra Holdings.
      </h2>
      <p className="text-lg text-gray-700">
        Your dream software, built for you—custom, collaborative, and powered by innovation.
      </p>
    </div>
    {/* Feature Icons/Labels */}
    <div className="flex flex-wrap justify-center gap-6 mt-0">
      {features.map((f) => (
        <div key={f.label} className="flex items-center gap-2 text-sm font-semibold text-gray-700 bg-white rounded-full px-4 py-2 shadow border border-gray-100">
          {f.icon}
          <span>{f.label}</span>
        </div>
      ))}
    </div>
  </motion.section>
);

export default SlackInspiredSection; 