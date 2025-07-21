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
    className="py-16 bg-gradient-to-b from-[#D5F1FF] to-white"
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="max-w-5xl mx-auto px-4">
      <div className="rounded-3xl shadow-xl bg-white/80 backdrop-blur-sm border border-gray-100 flex flex-col lg:flex-row items-center overflow-hidden">
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
              className="rounded-xl border border-gray-200 shadow-lg object-cover"
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
      <SlackInspiredSection />
      <ProjectShowcase projects={projects} animateProps={{ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.3, ease: 'easeOut' as const }, viewport: { once: true, amount: 0.1 } }} />
      <SlackStyleCTA />
      {/* SECTION 1: Our Products & Build With Us (two columns) */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Our Products */}
          <div className="bg-white rounded-2xl shadow p-8 md:p-10 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Products</h2>
            <ul className="space-y-5 text-base md:text-lg text-gray-900 leading-relaxed">
              <li><span className="font-semibold">TapTab:</span> QR-powered menus and ordering for modern hospitality.</li>
              <li><span className="font-semibold">InstaLabel:</span> Effortless kitchen labelling and food safety compliance.</li>
              <li><span className="font-semibold">PrintBridge:</span> Seamless, silent label printing for any workflow.</li>
            </ul>
          </div>
          {/* Build With Us */}
          <div className="bg-white rounded-2xl shadow p-8 md:p-10 border border-gray-100 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Build With Us</h2>
            <p className="text-base md:text-lg text-gray-900 leading-relaxed">Partner with Zentra to co-create new software products.<br />We bring your ideas to life—fast, reliable, and founder-focused.</p>
          </div>
        </div>
      </section>
      {/* SECTION 2: Why Choose Zentra */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Why Choose Zentra</h2>
          <ul className="space-y-8 text-lg md:text-xl text-gray-900 leading-relaxed">
            <li><span className="font-semibold">We build for ourselves—and for you.</span> Our own SaaS products prove our approach works in the real world.</li>
            <li><span className="font-semibold">Speed and technical honesty.</span> We move fast, communicate clearly, and deliver what we promise.</li>
            <li><span className="font-semibold">True partnership, not just a service.</span> We collaborate closely, sharing our expertise and infrastructure to help you succeed.</li>
          </ul>
        </div>
      </section>
      {/* FAQ Section for SEO */}
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
      {/* <Footer /> */}
    </div>
  );
}