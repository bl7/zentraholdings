'use client'

import Image from "next/image";
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <Image src="/logo.png" alt="Zentra Holdings Ltd. Logo" width={100} height={100} priority />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About Zentra Holdings Ltd.
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Zentra Holdings Ltd. is a technology company dedicated to empowering organizations with innovative automation, mobile, and print solutions. Our mission is to help businesses streamline operations, connect teams, and accelerate digital transformation with secure, scalable platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#4A164B] mb-2">2012</div>
              <div className="text-gray-600">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#4A164B] mb-2">3</div>
              <div className="text-gray-600">Core Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#4A164B] mb-2">10,000+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#4A164B] mb-2">99.99%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.1 }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mission */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To empower businesses of all sizes to achieve operational excellence and digital agility through innovative, secure, and scalable technology solutions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-[#4A164B] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Delivering seamless automation and integration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-[#4A164B] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Enabling secure, mobile-first workforces</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-[#4A164B] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Bridging digital and physical with print innovation</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To be the trusted technology partner for organizations seeking to modernize, innovate, and thrive in a connected world.
              </p>
              <div className="bg-gradient-to-r from-[#4A164B] to-[#9321C6] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Innovation, Security, and Partnership</h3>
                <p className="opacity-90">
                  We believe in building lasting relationships with our clients, delivering solutions that are not only powerful but also secure and future-ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Values */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.1 }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              At Zentra Holdings Ltd., our values guide every solution we create and every partnership we build.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Innovation */}
            <div className="bg-white p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4A164B] to-[#9321C6] flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-700">
                We constantly explore new technologies and approaches to deliver solutions that give our clients a competitive edge.
              </p>
            </div>

            {/* Security */}
            <div className="bg-white p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4A164B] to-[#9321C6] flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Security</h3>
              <p className="text-gray-700">
                Security is at the heart of everything we do, from platform design to client support.
              </p>
            </div>

            {/* Partnership */}
            <div className="bg-white p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4A164B] to-[#9321C6] flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Partnership</h3>
              <p className="text-gray-700">
                We believe in building long-term relationships with our clients, working together as trusted partners to achieve shared success.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Team */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.1 }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Leadership</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Zentra Holdings Ltd. is led by a passionate team of technology and business experts dedicated to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#4A164B] to-[#9321C6] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">BL</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Biswash Lamichhane</h3>
              <p className="text-[#4A164B] font-semibold mb-4">CEO & Co-Founder</p>
              <p className="text-gray-700">
                Visionary leader with a passion for building secure, scalable technology that transforms businesses.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#4A164B] to-[#9321C6] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">NG</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nishant Ghimire</h3>
              <p className="text-[#4A164B] font-semibold mb-4">CEO & Co-Founder</p>
              <p className="text-gray-700">
                Driving innovation and excellence in every project, Nishant brings deep technical expertise and a collaborative spirit to the Zentra team.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#4A164B] to-[#9321C6] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">BR</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bibek Rizal</h3>
              <p className="text-[#4A164B] font-semibold mb-4">CEO & Co-Founder</p>
              <p className="text-gray-700">
                Bibek is dedicated to delivering client success and building robust, user-focused software solutions for the future.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.1 }}
        className="py-20 bg-gradient-to-r from-[#4A164B] to-[#9321C6]"
      >
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let Zentra Holdings Ltd. help you modernize, automate, and grow. Contact us to start your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-white text-[#4A164B] rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
              Contact Us
            </a>
            <a href="#zentraflow" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#4A164B] transition-colors font-semibold text-lg">
              View Solutions
            </a>
          </div>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' as const }}
        viewport={{ once: true, amount: 0.1 }}
        className="py-20 bg-white"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-[#4A164B] mb-2">What is Zentra Holdings?</h3>
              <p className="text-gray-700">Zentra Holdings is a leading provider of SaaS software solutions, specializing in automation, printing, and digital transformation for businesses of all sizes.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[#4A164B] mb-2">What is InstaLabel?</h3>
              <p className="text-gray-700">InstaLabel is Zentra&apos;s innovative SaaS product for professional label printing, compliance, and automation in the food and retail industry.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[#4A164B] mb-2">What is PrintBridge?</h3>
              <p className="text-gray-700">PrintBridge by Zentra is a seamless print integration solution that connects your SaaS platform to a wide range of printers for efficient, reliable label and document printing.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[#4A164B] mb-2">Why choose Zentra for SaaS solutions?</h3>
              <p className="text-gray-700">Zentra offers secure, scalable, and innovative SaaS solutions tailored to your business needs, including InstaLabel and PrintBridge for automation and printing.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[#4A164B] mb-2">How can I get started with Zentra?</h3>
              <p className="text-gray-700">Contact us to discuss your requirements and discover how Zentra&apos;s software solutions, including InstaLabel and PrintBridge, can help your business grow.</p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
} 