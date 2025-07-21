'use client'

import Image from "next/image";
import { motion } from 'framer-motion';
import { FaRocket, FaBolt, FaHandshake } from 'react-icons/fa';
import { useState } from 'react';
import FAQ from '../../components/FAQ';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO: Split card */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <Image src="/logo.png" alt="Zentra Holdings Ltd. Logo" width={100} height={100} priority />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Zentra</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">Zentra is a modern SaaS venture studio and product company. We build, launch, and scale vertical SaaS products and help founders and businesses bring new software ideas to life.</p>
          </div>
        </div>
      </section>

      {/* ORIGIN STORY: Carded grid */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center">
            <FaRocket className="text-[#611E69] w-8 h-8 mb-2" />
            <h3 className="font-bold text-lg mb-2 text-[#611E69]">From Friction to Flow</h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">We’ve been in your shoes—juggling product launches, chasing compliance, and wishing for better tools. Zentra started as a way to fix our own bottlenecks. We built, tested, and iterated in the wild, not in a vacuum.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center">
            <FaBolt className="text-[#21C6A6] w-8 h-8 mb-2" />
            <h3 className="font-bold text-lg mb-2 text-[#21C6A6]">Built for Real Impact</h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">Our platforms—like TapTab, InstaLabel, and PrintBridge—aren’t just “nice to have.” They’re built to solve the headaches we faced ourselves, and now, to help you move faster, safer, and smarter.</p>
          </div>
        </div>
      </section>

      {/* STATS: Pills */}
      <div className="flex flex-wrap justify-center gap-4 py-8 bg-gray-50">
        <div className="bg-[#F3E8FF] text-[#611E69] rounded-full px-6 py-3 font-bold shadow">10,000+ Active Users</div>
        <div className="bg-[#F3E8FF] text-[#611E69] rounded-full px-6 py-3 font-bold shadow">99.99% Uptime</div>
        <div className="bg-[#F3E8FF] text-[#611E69] rounded-full px-6 py-3 font-bold shadow">2018 Founded</div>
        <div className="bg-[#F3E8FF] text-[#611E69] rounded-full px-6 py-3 font-bold shadow">3 Core SaaS Platforms</div>
      </div>

      {/* WHY ZENTRA: Icon cards grid */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <FaRocket className="text-[#611E69] w-8 h-8 mb-2" />
            <h4 className="font-bold text-lg mb-2 text-[#611E69]">Built-for-real</h4>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">Every product is tested in the wild, not just in theory.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <FaBolt className="text-[#21C6A6] w-8 h-8 mb-2" />
            <h4 className="font-bold text-lg mb-2 text-[#21C6A6]">Speed & Honesty</h4>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">We move fast, communicate clearly, and don’t sugarcoat the hard stuff.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <FaHandshake className="text-[#9321C6] w-8 h-8 mb-2" />
            <h4 className="font-bold text-lg mb-2 text-[#9321C6]">Founder Partnership</h4>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">We treat your goals as our own, sharing our infrastructure and expertise.</p>
          </div>
        </div>
      </section>

      {/* MODERN CTA */}
      <motion.section
        className="py-16 bg-gradient-to-b from-[#D5F1FF] to-white"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-3xl shadow-xl bg-white/80 backdrop-blur-sm border border-gray-100 flex flex-col lg:flex-row items-center overflow-hidden">
            <div className="flex-1 p-8 lg:p-12">
              <div className="uppercase text-xs font-bold text-[#4A164B] mb-2 tracking-widest">Zentra Holdings Ltd.</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Ready to build with Zentra?
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                Let’s create something remarkable together. Whether you want to launch a new SaaS product or need a partner for your next big idea, our team is ready to help you evolve.
              </p>
              <a href="/contact" className="inline-block px-8 py-4 bg-[#4A164B] text-white rounded-lg hover:bg-[#3a1239] transition-colors font-semibold text-lg shadow">
                Start Your Project
              </a>
            </div>
            <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
              <div className="w-full max-w-md">
                <Image
                  src="/instalabel.png"
                  alt="Zentra App Mockup"
                  width={480}
                  height={320}
                  className="rounded-xl border border-gray-200 shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQ: Collapsible Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <FAQ faqs={[
            {
              question: 'What is Zentra Holdings?',
              answer: 'Zentra Holdings is a leading provider of SaaS software solutions, specializing in automation, printing, and digital transformation for businesses of all sizes.'
            },
            {
              question: 'What is InstaLabel?',
              answer: 'InstaLabel is Zentra\'s innovative SaaS product for professional label printing, compliance, and automation in the food and retail industry.'
            },
            {
              question: 'What is PrintBridge?',
              answer: 'PrintBridge by Zentra is a seamless print integration solution that connects your SaaS platform to a wide range of printers for efficient, reliable label and document printing.'
            },
            {
              question: 'Why choose Zentra for SaaS solutions?',
              answer: 'Zentra offers secure, scalable, and innovative SaaS solutions tailored to your business needs, including InstaLabel and PrintBridge for automation and printing.'
            },
            {
              question: 'How can I get started with Zentra?',
              answer: 'Contact us to discuss your requirements and discover how Zentra\'s software solutions, including InstaLabel and PrintBridge, can help your business grow.'
            }
          ]} />
        </div>
      </section>
    </div>
  );
} 