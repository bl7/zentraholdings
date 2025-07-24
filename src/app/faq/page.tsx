'use client'
import Image from 'next/image';
import FAQ from '../../components/FAQ';
import { FaQuestionCircle } from 'react-icons/fa';

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section (split layout) */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          {/* Left: Headline and subheader */}
          <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              <span className="text-[#611E69]">Frequently Asked</span> Questions
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mb-8">
              Everything you need to know about working with Zentra, our products, and our process.
            </p>
          </div>
          {/* Right: Illustration or icon */}
          <div className="flex-1 flex justify-center items-center">
            <FaQuestionCircle className="w-32 h-32 text-[#611E69] opacity-80" />
          </div>
        </div>
      </section>
      {/* FAQ Accordian */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <FAQ faqs={[
            {
              question: 'What types of software do you build?',
              answer: 'We specialize in business-critical tools — from custom SaaS platforms to label printing systems, mobile apps, dashboards, and more. If your team needs it, we can build it.'
            },
            {
              question: 'Can Zentra help with just one part of our project?',
              answer: 'Absolutely. Whether it’s strategy, design, development, or infrastructure — we can plug in where you need us most.'
            },
            {
              question: 'How long does a typical project take?',
              answer: 'Most projects take 4–12 weeks, depending on complexity. We’ll always give you a clear timeline before we begin.'
            },
            {
              question: 'Is Zentra only for tech companies?',
              answer: 'Not at all. We work with businesses across industries — from food and logistics to retail, health, and manufacturing.'
            },
            {
              question: 'Do you offer ongoing support or maintenance?',
              answer: 'Yes. We don’t disappear after launch. We offer ongoing support, updates, and iteration plans based on your needs.'
            },
            {
              question: 'Can you integrate with our existing tools or systems?',
              answer: 'Definitely. We specialize in building around your workflow, not replacing it. APIs, hardware, legacy systems — we’ll connect it all.'
            },
            {
              question: 'Do you build white-label or partner products?',
              answer: 'Yes — we’re happy to collaborate under your brand or co-develop something custom as a long-term partner.'
            }
          ]} />
        </div>
      </section>
    </div>
  );
} 