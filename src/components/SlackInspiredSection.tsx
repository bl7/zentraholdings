'use client'
import React from "react";
import { motion } from "framer-motion";
import { FaTabletAlt, FaTags, FaPrint } from "react-icons/fa";
import Image from "next/image";



const SlackInspiredSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.3 }}
    className="relative flex flex-col items-center justify-center py-6 bg-gradient-to-br from-gray-50 to-white px-4 sm:px-6 md:px-12 lg:px-16"
  >
    {/* Browser/Mockup Window */}
    <div className="relative z-10 w-full max-w-4xl min-h-[80vh] mx-auto shadow-2xl border border-gray-200 bg-white overflow-hidden mb-15">
      {/* Browser top bar */}
      <div className="flex items-center gap-2 h-10 px-4 bg-[#4A164B]">
        <span className="h-3 w-3 rounded-full bg-red-400 inline-block"></span>
        <span className="h-3 w-3 rounded-full bg-yellow-400 inline-block"></span>
        <span className="h-3 w-3 rounded-full bg-green-400 inline-block"></span>
        <span className="ml-4 text-xs text-white font-semibold tracking-wide">Zentra Holdings Platform</span>
      </div>
      <div className="flex min-h-[80vh]">
        {/* Sidebar */}
        <aside className="w-48 min-h-[80vh] bg-gradient-to-b from-[#F3E8FF] to-[#F8FAFC] border-r border-gray-100 py-6 px-3 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Zentra Logo" width={120} height={64} className="rounded" />
          </div>
          <nav className="flex flex-col gap-2 text-sm mt-8">
            <span className="font-semibold text-[#9321C6] flex items-center gap-2"><FaTags className="h-4 w-4" /> InstaLabel</span>
            <span className="text-gray-700 flex items-center gap-2"><FaPrint className="h-4 w-4" /> PrintBridge</span>
            <span className="text-gray-700 flex items-center gap-2"><FaTabletAlt className="h-4 w-4" /> TapTab</span>
          </nav>
        </aside>
        {/* Main area: Real dashboard UI */}
        <main className="flex-1 bg-white px-8 py-8 flex flex-col min-h-[80vh]">
          {/* Header bar */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Your Zentra Dashboard</h3>
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-2 text-black rounded-lg border border-gray-200 bg-gray-50 text-sm focus:ring-2 focus:ring-[#611E69] outline-none"
              />
              <div className="w-8 h-8 rounded-full bg-[#611E69] flex items-center justify-center text-white font-bold">Z</div>
            </div>
          </div>
          {/* Analytics cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-xl bg-gradient-to-br from-[#F3E8FF] to-white p-6 flex flex-col items-start shadow hover:shadow-xl transition">
              <span className="text-xs font-semibold text-[#611E69] mb-1">Total Users</span>
              <span className="text-2xl font-bold text-gray-900">2,340</span>
              <span className="text-xs text-gray-500 mt-1">+5% this month</span>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-[#E0F7F4] to-white p-6 flex flex-col items-start shadow hover:shadow-xl transition">
              <span className="text-xs font-semibold text-[#21C6A6] mb-1">Active Projects</span>
              <span className="text-2xl font-bold text-gray-900">18</span>
              <span className="text-xs text-gray-500 mt-1">+2 new</span>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-[#F3E8FF] to-white p-6 flex flex-col items-start shadow hover:shadow-xl transition">
              <span className="text-xs font-semibold text-[#9321C6] mb-1">Monthly Revenue</span>
              <span className="text-2xl font-bold text-gray-900">$12,400</span>
              <span className="text-xs text-gray-500 mt-1">+8% growth</span>
            </div>
          </div>
          {/* Simple chart placeholder */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8 shadow flex flex-col items-center justify-center min-h-[180px]">
            <span className="text-sm font-semibold text-gray-700 mb-2">User Growth (Last 6 Months)</span>
            <div className="w-full h-24 bg-gradient-to-r from-[#611E69]/20 to-[#21C6A6]/20 rounded-lg flex items-end">
              {/* Fake chart bars */}
              <div className="h-12 w-6 mx-1 bg-[#611E69] rounded-t" style={{height: '60%'}} />
              <div className="h-16 w-6 mx-1 bg-[#21C6A6] rounded-t" style={{height: '80%'}} />
              <div className="h-10 w-6 mx-1 bg-[#9321C6] rounded-t" style={{height: '50%'}} />
              <div className="h-20 w-6 mx-1 bg-[#611E69] rounded-t" style={{height: '100%'}} />
              <div className="h-14 w-6 mx-1 bg-[#21C6A6] rounded-t" style={{height: '70%'}} />
              <div className="h-8 w-6 mx-1 bg-[#9321C6] rounded-t" style={{height: '40%'}} />
            </div>
          </div>
          {/* Recent activity list */}
          <div className="bg-white rounded-xl shadow p-6 flex-1">
            <span className="text-sm font-semibold text-gray-700 mb-4 block">Recent Activity</span>
            <ul className="divide-y divide-gray-100">
              <li className="py-2 flex items-center justify-between">
                <span className="text-gray-900">New user <span className="font-semibold text-[#611E69]">@founder</span> signed up</span>
                <span className="text-xs text-gray-500">2m ago</span>
              </li>
              <li className="py-2 flex items-center justify-between">
                <span className="text-gray-900">Project <span className="font-semibold text-[#21C6A6]">InstaLabel</span> updated</span>
                <span className="text-xs text-gray-500">10m ago</span>
              </li>
              <li className="py-2 flex items-center justify-between">
                <span className="text-gray-900">Payment received</span>
                <span className="text-xs text-gray-500">1h ago</span>
              </li>
              <li className="py-2 flex items-center justify-between">
                <span className="text-gray-900">New project <span className="font-semibold text-[#9321C6]">TapTab</span> created</span>
                <span className="text-xs text-gray-500">2h ago</span>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
    {/* Headline & Subheadline */}
   
  </motion.section>
);

export default SlackInspiredSection; 