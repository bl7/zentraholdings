'use client'

import Hero from "../components/Hero";
import ProjectShowcase from "../components/ProjectShowcase";
import SlackInspiredSection from '../components/SlackInspiredSection';
import { FaTags, FaPrint, FaTabletAlt } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';
import FAQ from '../components/FAQ';
import { useState } from 'react';

const projects = [
  {
    id: "1",
    category: "Label Printing",
    label: "INSTALABEL",
    labelIcon: <FaTags />,
    title: "InstaLabel - Kitchen Compliance Software",
    description: "Professional label printing with automatic date calculations and allergen warnings. Shows our ability to handle regulatory requirements and hardware integration.\n\nKey Features: HACCP compliance, multi-printer support, mobile-responsive design.",
    url: "https://www.instalabel.co",
    image: "/instalabel.png",
    blobColor: "#4A164B",
    stat: "HACCP Compliant",
    statColor: "#9321C6",
    statText: "Multi-printer, mobile-ready",
    icon: <FaTags />,
  },
  {
    id: "2",
    category: "Print Integration",
    label: "PRINTBRIDGE",
    labelIcon: <FaPrint />,
    title: "PrintBridge - Browser Printing Solution",
    description: "WebSocket-powered printing that eliminates browser popups. Showcases our ability to solve technical problems others can't.\n\nKey Features: No-popup printing, cross-browser compatibility, real-time communication.",
    url: "https://zentra-mu-flax.vercel.app/",
    image: "/printbridge.png",
    blobColor: "#21C6A6",
    stat: "No-popup Printing",
    statColor: "#21C6A6",
    statText: "Cross-browser, real-time",
    icon: <FaPrint />,
  },
  {
    id: "3",
    category: "QR Ordering App",
    label: "TAPTAB",
    labelIcon: <FaTabletAlt />,
    title: "TapTab - QR Ordering Platform",
    description: "Customers scan QR codes to order, staff can modify orders on tablets, automatic receipt printing. Demonstrates our full-stack development and POS integration skills.\n\nKey Features: Mobile ordering, staff interface, payment integration, receipt printing.",
    url: "#taptab",
    image: "/taptab.png",
    blobColor: "#9321C6",
    stat: "Tablet-first QR ordering",
    statColor: "#9321C6",
    statText: "Mobile, POS, receipts",
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
          <a href="#contact" className="px-8 py-4 bg-[#4A164B] text-white rounded-lg hover:bg-[#3a1239] transition-colors font-semibold text-lg shadow-lg">
            Request Development Quote
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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string|null>(null);
  const [error, setError] = useState<string|null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    // Map fields to API expectations
    const fullName = (formData.get('business') as string || '').split(' ');
    const firstName = fullName[0] || '';
    const lastName = fullName.slice(1).join(' ') || '-';
    const data = {
      firstName,
      lastName,
      email: formData.get('email'),
      company: formData.get('business'),
      subject: formData.get('projectType') + ' Inquiry',
      message: `Role/Title: ${formData.get('role')}
Phone: ${formData.get('phone')}
Budget: ${formData.get('budget')}
Timeline: ${formData.get('timeline')}
Referral: ${formData.get('referral')}
\nDescription: ${formData.get('description')}`,
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        setSuccess('Thank you for reaching out! We have received your message and will get back to you soon.');
        form.reset();
      } else {
        setError(result.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

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
      {/* Services Section: What We Build (Slack-inspired pillar style) */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">What We Build</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg flex flex-col h-full p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <span className="inline-block w-2 h-8 mr-3" style={{ background: '#3F0F3F' }}></span>
                <span className="text-2xl font-bold text-[#3F0F3F]">SaaS</span>
              </div>
              <h3 className="text-lg font-bold text-[#3F0F3F] mb-2">Custom SaaS Platforms</h3>
              <p className="text-gray-700 text-base mb-6 flex-1">Multi-tenant apps with user management, billing, and scalable architecture. From simple workflows to complex business systems.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-lg flex flex-col h-full p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <span className="inline-block w-2 h-8 mr-3" style={{ background: '#49C39E' }}></span>
                <span className="text-2xl font-bold text-[#49C39E]">Mobile</span>
              </div>
              <h3 className="text-lg font-bold text-[#49C39E] mb-2">Mobile Applications</h3>
              <p className="text-gray-700 text-base mb-6 flex-1">Native and PWA apps that work seamlessly across devices. Integrated with your systems and optimized for your use case.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white shadow-lg flex flex-col h-full p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <span className="inline-block w-2 h-8 mr-3" style={{ background: '#E51670' }}></span>
                <span className="text-2xl font-bold text-[#E51670]">Integrate</span>
              </div>
              <h3 className="text-lg font-bold text-[#E51670] mb-2">System Integrations</h3>
              <p className="text-gray-700 text-base mb-6 flex-1">Connect disparate systems, automate workflows, and eliminate manual data entry. APIs, webhooks, and custom connectors that actually work.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white shadow-lg flex flex-col h-full p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <span className="inline-block w-2 h-8 mr-3" style={{ background: '#EBB424' }}></span>
                <span className="text-2xl font-bold text-[#EBB424]">Hardware</span>
              </div>
              <h3 className="text-lg font-bold text-[#EBB424] mb-2">Hardware Integration</h3>
              <p className="text-gray-700 text-base mb-6 flex-1">Printers, scanners, IoT devices, and specialized equipment. We make hardware talk to software without the usual headaches.</p>
            </div>
          </div>
        </div>
      </motion.section>
      {/* HOW WE WORK SECTION (clip-path arch, more padding, colored numbers) */}
      <section 
        className="relative bg-[#481A54] flex flex-col justify-center" 
        style={{ 
          height: '100vh',
          clipPath: 'polygon(0 8%, 50% 0%, 100% 8%, 100% 100%, 0% 100%)'
        }}
      >
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-20">
            How We Work
          </h2>
          {/* Three column statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="text-7xl md:text-8xl font-bold mb-4" style={{ color: '#D17DFE' }}>
                1
              </div>
              <div className="text-lg font-semibold text-white mb-4">
                Discovery & Planning
              </div>
              <div className="text-base text-white/90 leading-relaxed max-w-sm">
                We start by understanding your business problem, not just your technical requirements.
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-7xl md:text-8xl font-bold mb-4" style={{ color: '#D17DFE' }}>
                2
              </div>
              <div className="text-lg font-semibold text-white mb-4">
                Solution Design
              </div>
              <div className="text-base text-white/90 leading-relaxed max-w-sm">
                We propose the right architecture, technologies, and approach. No over-engineering, no under-delivering.
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-7xl md:text-8xl font-bold mb-4" style={{ color: '#D17DFE' }}>
                3
              </div>
              <div className="text-lg font-semibold text-white mb-4">
                Transparent Development
              </div>
              <div className="text-base text-white/90 leading-relaxed max-w-sm">
                Regular updates, clear communication, and working demos throughout. You&apos;ll know exactly where your project stands.
              </div>
            </div>
          </div>
        </div>
      </section>
     
      {/* FAQ Section: Common Questions (Slack-inspired, homepage style) */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">Common Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex items-start gap-4 bg-[#F9F6FB] rounded-xl p-6 shadow-sm">
              <span className="flex-shrink-0 mt-1"><svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="16" cy="8" r="6" fill="#3F0F3F" opacity="0.15"/><path d="M12 8v4m0 4h.01" stroke="#3F0F3F" strokeWidth="2" strokeLinecap="round"/></svg></span>
              <div>
                <h3 className="font-semibold text-[#3F0F3F] mb-1">Do you work with businesses outside the food industry?</h3>
                <p className="text-gray-700">Absolutely. We&apos;ve built solutions for retail, logistics, healthcare, manufacturing, and more. Good software principles apply everywhere.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-[#F6F9F7] rounded-xl p-6 shadow-sm">
              <span className="flex-shrink-0 mt-1"><svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="8" cy="16" r="6" fill="#49C39E" opacity="0.15"/><path d="M8 12v4m0 4h.01" stroke="#49C39E" strokeWidth="2" strokeLinecap="round"/></svg></span>
              <div>
                <h3 className="font-semibold text-[#49C39E] mb-1">Can you integrate with our existing systems?</h3>
                <p className="text-gray-700">Yes, that&apos;s often the most critical part. We specialize in making different systems work together seamlessly.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-[#F9F6FB] rounded-xl p-6 shadow-sm">
              <span className="flex-shrink-0 mt-1"><svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="16" cy="8" r="6" fill="#E51670" opacity="0.15"/><path d="M12 8v4m0 4h.01" stroke="#E51670" strokeWidth="2" strokeLinecap="round"/></svg></span>
              <div>
                <h3 className="font-semibold text-[#E51670] mb-1">Do you provide ongoing support after launch?</h3>
                <p className="text-gray-700">We offer various support packages, but you&apos;re never locked in. You own the code and can maintain it internally or with any developer.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-[#F6F9F7] rounded-xl p-6 shadow-sm">
              <span className="flex-shrink-0 mt-1"><svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="8" cy="16" r="6" fill="#EBB424" opacity="0.15"/><path d="M8 12v4m0 4h.01" stroke="#EBB424" strokeWidth="2" strokeLinecap="round"/></svg></span>
              <div>
                <h3 className="font-semibold text-[#EBB424] mb-1">Can you work within our budget?</h3>
                <p className="text-gray-700">We&apos;re honest about what&apos;s possible at different price points. If your budget doesn&apos;t match your requirements, we&apos;ll tell you upfront.</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a href="/faq" className="inline-block px-6 py-3 bg-[#4A164B] text-white rounded-lg hover:bg-[#3a1239] transition-colors font-semibold text-base shadow-lg">See all FAQs</a>
          </div>
        </div>
      </motion.section>
      {/* Contact Section: Ready to Start? (Slack-inspired) */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        id="contact"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 text-center">Ready to Start?</h2>
          <p className="text-lg text-gray-900 mb-8 text-center max-w-2xl mx-auto">
            Tell us about your project and we&apos;ll provide a detailed proposal with fixed pricing and timeline. Or book a 15-minute discovery call to see if we&apos;re a good fit.
          </p>
          {/* Contact Form Logic */}
          <form id="contact-form" className="bg-white rounded-2xl shadow p-8 grid grid-cols-1 gap-6" autoComplete="off" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-black font-semibold mb-2">Business/Project Name</label>
                <input type="text" name="business" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4A164B] outline-none text-black" required />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Your Role/Title</label>
                <input type="text" name="role" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4A164B] outline-none text-black" required />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-black font-semibold mb-2">Email Address</label>
                <input type="email" name="email" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4A164B] outline-none text-black" required />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Phone (optional)</label>
                <input type="tel" name="phone" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4A164B] outline-none text-black" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-black font-semibold mb-2">Project Type</label>
                <select name="projectType" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4A164B] outline-none text-black" required>
                  <option value="">Select...</option>
                  <option value="SaaS Platform">SaaS Platform</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="Integration">Integration</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Rough Budget Range</label>
                <select name="budget" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4A164B] outline-none text-black" required>
                  <option value="">Select...</option>
                  <option value="£3K-5K">£3K-5K</option>
                  <option value="£5K-10K">£5K-10K</option>
                  <option value="£10K-25K">£10K-25K</option>
                  <option value="£25K+">£25K+</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-black font-semibold mb-2">Brief Description (What problem are you solving?)</label>
              <textarea name="description" rows={3} className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4A164B] outline-none text-black" required></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-black font-semibold mb-2">Timeline</label>
                <select name="timeline" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4A164B] outline-none text-black" required>
                  <option value="">Select...</option>
                  <option value="ASAP">ASAP</option>
                  <option value="Next Month">Next Month</option>
                  <option value="Next Quarter">Next Quarter</option>
                  <option value="Just Planning">Just Planning</option>
                </select>
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">How did you hear about us?</label>
                <input type="text" name="referral" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4A164B] outline-none text-black" />
              </div>
            </div>
            <div className="text-center mt-4">
              <button type="submit" className="px-10 py-4 bg-[#4A164B] text-white rounded-lg hover:bg-[#3a1239] transition-colors font-semibold text-lg shadow-lg" disabled={loading}>
                {loading ? 'Sending...' : 'Submit'}
              </button>
              {success && <p className="text-green-600 text-sm mt-4">{success}</p>}
              {error && <p className="text-red-600 text-sm mt-4">{error}</p>}
              <p className="text-sm text-gray-500 mt-4">We respond to all inquiries within 24 hours with either a detailed response or a calendar link to discuss your project.</p>
            </div>
          </form>
        </div>
      </motion.section>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SlackStyleCTA />
      </motion.div>
     
    </div>
  );
}