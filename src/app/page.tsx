'use client'

import Hero from "../components/Hero";
import ProjectShowcase from "../components/ProjectShowcase";
import SlackInspiredSection from '../components/SlackInspiredSection';
import { FaTags, FaPrint, FaTabletAlt } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';
import FAQ from '../components/FAQ';

const projects = [
  {
    id: "1",
    category: "Label Printing",
    label: "INSTALABEL",
    labelIcon: <FaTags />,
    title: "InstaLabel",
    description: "Print professional kitchen labels (including PPDS and Natasha’s Law) with automatic date calculations, allergen warnings, and storage instructions. Works from any device—USB printer, Sunmi, or more. Perfect for any kitchen that needs to comply with food safety laws—from restaurants to delis to food trucks.",
    url: "https://www.instalabel.co",
    image: "/instalabel.png",
    blobColor: "#4A164B",
    stat: "Any Label, Any Device",
    statColor: "#9321C6",
    statText: "Professional, Compliant, Easy",
    icon: <FaTags />,
  },
  {
    id: "2",
    category: "Print Integration",
    label: "PRINTBRIDGE",
    labelIcon: <FaPrint />,
    title: "PrintBridge",
    description: "Zentra supports a wide range of USB-connected thermal label printers — no special hardware required. As long as your printer is installed with a system driver, Zentra will detect it automatically and deliver pixel-perfect prints every time. Whether you're printing 2-inch prep labels or large PPDS labels, Zentra gets the size right — no matter the brand.",
    url: "#printbridge",
    image: "/printbridge.png",
    blobColor: "#21C6A6",
    stat: "Seamless compatibility",
    statColor: "#21C6A6",
    statText: "out of the box.",
    icon: <FaPrint />,
  },
  {
    id: "3",
    category: "QR Ordering App",
    label: "TAPTAB",
    labelIcon: <FaTabletAlt />,
    title: "TapTab",
    description: "TapTab is an app that allows customers to place orders by scanning QR catalogues from their phone, staffs can later continue the order taking adding on it, can take new orders as well, runs on tablet, prints receipts for new orders.",
    url: "#taptab",
    image: "/placeholder.png",
    blobColor: "#9321C6",
    stat: "Ongoing",
    statColor: "#9321C6",
    statText: "Tablet-first QR ordering",
    icon: <FaTabletAlt />,
  },
];

const SlackStyleCTA = () => (
  <motion.section
    className="py-16"
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="max-w-5xl mx-auto px-4 ">
      <div className="rounded-lg shadow-xl bg-white/80 backdrop-blur-sm border border-gray-100 flex flex-col lg:flex-row items-center overflow-hidden bg-gradient-to-b from-[#D5F1FF] to-white">
        {/* Left: Text */}
        <div className="flex-1 p-8 lg:p-12">
          <div className="uppercase text-xs font-bold text-[#4A164B] mb-2 tracking-widest">Zentra Holdings Ltd.</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            There&apos;s a <span className="text-[#9321C6]">solution</span> for every business.
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Build custom workflows, automate tasks, and collaborate with our team to create the perfect SaaS platform for your needs.
          </p>
          <a href="#contact" className="inline-block px-8 py-4 bg-[#4A164B] text-white rounded-lg hover:bg-[#3a1239] transition-colors font-semibold text-lg shadow">
            Get Started
          </a>
        </div>
        {/* Right: Mockup Image */}
        <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md">
            <Image
              src="/instalabel.png"
              alt="Zentra App Mockup"
              width={480}
              height={320}
              className="rounded-lg border border-gray-200 shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SlackInspiredSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <ProjectShowcase
          projects={projects}
          animateProps={{ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.3, ease: 'easeOut' as const }, viewport: { once: true, amount: 0.1 } }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SlackStyleCTA />
      </motion.div>
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 bg-white"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
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
      </motion.section>
    </div>
  );
}