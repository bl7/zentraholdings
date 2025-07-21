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
              About Zentra
            </h1>
            <p className="text-xl md:text-2xl text-gray-900 max-w-3xl mx-auto mb-8 leading-relaxed">
              We started Zentra by building tools we needed—solutions for real problems in hospitality and retail. As our products grew, so did our vision: to become a platform company and venture studio, creating SaaS products that make businesses more efficient, compliant, and connected.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-lg md:text-xl text-gray-900 mb-6 leading-relaxed">
          We build software that’s practical, reliable, and ready for the real world. Our mission is to empower founders and businesses with the tools and infrastructure they need to evolve.
        </p>
      </section>

      {/* Vision */}
      <section className="py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Vision</h2>
        <p className="text-lg md:text-xl text-gray-900 mb-6 leading-relaxed">
          To be the go-to partner for vertical SaaS—where our own products and our clients’ ideas thrive side by side.
        </p>
      </section>

      {/* Values */}
      <section className="py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
        <ul className="space-y-4 text-lg md:text-xl text-gray-900 leading-relaxed">
          <li><span className="font-semibold">Built-for-real:</span> We solve real problems, not just theoretical ones.</li>
          <li><span className="font-semibold">Product infrastructure:</span> We create solid foundations for growth and scale.</li>
          <li><span className="font-semibold">Technical honesty:</span> We’re transparent about what works, what doesn’t, and why.</li>
          <li><span className="font-semibold">Client partnership:</span> We treat your goals as our own, working together every step of the way.</li>
        </ul>
      </section>

      {/* What We Offer */}
      <section className="py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
        <p className="text-lg md:text-xl text-gray-900 mb-6 leading-relaxed">
          We’re both creators and partners: we launch and operate our own SaaS products, and we help founders and businesses build new software under the Zentra brand.
        </p>
      </section>

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