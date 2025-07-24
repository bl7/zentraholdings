'use client'

import Image from "next/image";
import { motion } from 'framer-motion';
import { FaRocket, FaBolt, FaHandshake, FaCheckCircle, FaPuzzlePiece, FaCodeBranch, FaLock } from 'react-icons/fa';

// Blob shapes/colors from ProjectShowcase
const leftBlob = {
  shape: 'M44.6,-67.2C56.2,-59.2,62.7,-42.2,67.2,-25.7C71.7,-9.2,74.2,6.8,69.2,20.7C64.2,34.6,51.7,46.4,37.2,54.7C22.7,63,6.2,67.8,-10.2,70.2C-26.6,72.6,-42.9,72.6,-54.2,63.2C-65.5,53.8,-71.8,35,-72.2,17.2C-72.6,-0.6,-67.1,-17.4,-58.2,-28.2C-49.3,-39,-37.1,-43.8,-24.7,-51.2C-12.3,-58.6,0.3,-68.6,14.2,-73.2C28.1,-77.8,44.6,-67.2,44.6,-67.2Z',
  color: '#9321C6',
};
const rightBlob = {
  shape: 'M54.2,-66.2C67.2,-56.2,71.7,-34.6,70.2,-15.7C68.7,3.2,61.2,19.4,51.2,32.2C41.2,45,28.7,54.4,14.2,60.2C-0.3,66,-16.8,68.2,-32.2,62.2C-47.6,56.2,-61.9,42,-67.2,25.7C-72.5,9.4,-68.8,-9.1,-61.2,-25.7C-53.6,-42.3,-42.1,-57.1,-27.2,-66.2C-12.3,-75.3,6,-78.6,22.7,-74.2C39.4,-69.8,54.2,-66.2,54.2,-66.2Z',
  color: '#21C6A6',
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION - Slack style with blobs */}
      <section className="relative overflow-x-clip pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white flex flex-col items-center">
        {/* Left Blob */}
        <svg
          width="520"
          height="520"
          viewBox="0 0 200 200"
          className="hidden md:block absolute left-[-180px] top-[-120px] z-0"
          aria-hidden="true"
        >
          <path
            d={leftBlob.shape}
            fill={leftBlob.color}
            opacity="0.13"
            transform="translate(100 100)"
          />
        </svg>
        {/* Right Blob */}
        <svg
          width="600"
          height="600"
          viewBox="0 0 200 200"
          className="hidden md:block absolute right-[-220px] top-[-80px] z-0"
          aria-hidden="true"
        >
          <path
            d={rightBlob.shape}
            fill={rightBlob.color}
            opacity="0.13"
            transform="translate(100 100)"
          />
        </svg>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
            Zentra builds software that works—<br className="hidden md:inline" />for ourselves and for our clients.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
            We operate our own SaaS products and partner with businesses to build custom solutions that solve real-world challenges.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-10 mt-10">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-extrabold text-[#9321C6]">3</span>
              <span className="uppercase text-xs font-bold text-gray-700 mt-1 tracking-widest">Core SaaS Platforms</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-extrabold text-[#4A164B]">1000s</span>
              <span className="uppercase text-xs font-bold text-gray-700 mt-1 tracking-widest">of daily users</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-extrabold text-[#21C6A6]">2018</span>
              <span className="uppercase text-xs font-bold text-gray-700 mt-1 tracking-widest">Founded</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN ABOUT CONTENT */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-lg text-gray-700 mb-6">
            We&apos;re a software company with a dual focus: we develop and operate our own SaaS products while partnering with businesses to build custom solutions that solve their unique challenges.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            <span className="font-semibold">We&apos;ve been in your shoes</span>—dealing with systems that don&apos;t talk to each other, manual processes that waste time, and off-the-shelf solutions that almost fit but not quite. That&apos;s exactly why we started building our own products and helping others do the same.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            <span className="font-semibold">Our SaaS platforms—TapTab, InstaLabel, and PrintBridge—aren&apos;t just portfolio pieces.</span> They&apos;re live products serving real customers. TapTab streamlines restaurant ordering through QR codes. InstaLabel keeps food businesses compliant with automated labeling. PrintBridge eliminates browser printing headaches with seamless WebSocket technology.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            <span className="font-semibold">These products prove we understand what it takes to build, launch, and maintain software that businesses rely on daily.</span> And that experience directly benefits the custom solutions we build for our clients.
          </p>
        </div>
      </section>

      {/* WHAT WE DO as Slack-style cards */}
      <section className="py-16 ">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">What We Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Operate SaaS Products Card */}
            <div className="bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex items-center justify-center h-20 bg-[#F3E8FF]">
                <FaRocket className="w-10 h-10 text-[#9321C6]" />
              </div>
              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Operate SaaS Products</h3>
                <p className="text-base text-gray-700 mb-4 flex-1">We run our own SaaS platforms that solve specific industry problems, generating recurring revenue and teaching us what works in real business environments.</p>
              </div>
            </div>
            {/* Build Custom Software Card */}
            <div className="bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex items-center justify-center h-20 bg-[#F3E8FF]">
                <FaPuzzlePiece className="w-10 h-10 text-[#4A164B]" />
              </div>
              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Build Custom Software</h3>
                <p className="text-base text-gray-700 mb-4 flex-1">We build custom software for other businesses starting at £3,000. From workflow automation to complex integrations, we apply the same standards we use for our own products.</p>
              </div>
            </div>
            {/* Combine Both Approaches Card */}
            <div className="bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex items-center justify-center h-20 bg-[#F3E8FF]">
                <FaHandshake className="w-10 h-10 text-[#21C6A6]" />
              </div>
              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Combine Both Approaches</h3>
                <p className="text-base text-gray-700 mb-4 flex-1">Sometimes the best solution for a client is a custom version of something we&apos;ve already built and proven. We combine SaaS and custom when it makes sense.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS DUAL MODEL WORKS - Split-scene, illustration left, text right */}
      <section className="py-20 bg-white flex items-center">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center md:items-stretch gap-0 md:gap-8 px-6">
          {/* Left: SVG Illustration - Split scene (SaaS + Custom) with handshake */}
          <div className="flex-1 flex items-center justify-center md:justify-start">
            <svg width="340" height="200" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">
              {/* Split background */}
              <rect x="0" y="0" width="170" height="200" fill="#F3E8FF" />
              <rect x="170" y="0" width="170" height="200" fill="#E0F7F4" />
              {/* SaaS dashboard (left) */}
              <g>
                <rect x="40" y="40" width="80" height="50" rx="8" fill="#fff" stroke="#9321C6" strokeWidth="2" />
                <rect x="55" y="55" width="50" height="10" rx="2" fill="#9321C6" opacity="0.18" />
                <rect x="55" y="70" width="30" height="8" rx="2" fill="#21C6A6" opacity="0.18" />
                <rect x="90" y="70" width="15" height="8" rx="2" fill="#EBB424" opacity="0.18" />
                {/* Chart lines */}
                <polyline points="55,85 65,80 75,90 85,75 95,85" fill="none" stroke="#9321C6" strokeWidth="2" />
              </g>
              {/* Custom tools (right) */}
              <g>
                {/* Wrench */}
                <rect x="220" y="70" width="36" height="10" rx="5" fill="#21C6A6" />
                <rect x="250" y="60" width="10" height="36" rx="5" fill="#21C6A6" />
                <circle cx="255" cy="65" r="6" fill="#EBB424" />
                {/* Code brackets */}
                <text x="210" y="120" fontSize="28" fontWeight="bold" fill="#9321C6">{'{'}</text>
                <text x="270" y="120" fontSize="28" fontWeight="bold" fill="#9321C6">{'}'}</text>
              </g>
              {/* Handshake (center, overlapping both sides) */}
              <g>
                <ellipse cx="170" cy="120" rx="28" ry="18" fill="#fff" opacity="0.9" />
                <path d="M155 120 Q160 125 170 120 Q180 115 185 120" stroke="#4A164B" strokeWidth="3" fill="none" />
                <circle cx="160" cy="120" r="6" fill="#9321C6" />
                <circle cx="180" cy="120" r="6" fill="#21C6A6" />
                <rect x="166" y="118" width="8" height="4" rx="2" fill="#EBB424" />
              </g>
              {/* Glow effect for synergy */}
              <ellipse cx="170" cy="120" rx="38" ry="22" fill="#EBB424" opacity="0.13" />
            </svg>
          </div>
          {/* Right: Text */}
          <div className="flex-1 flex flex-col justify-center md:justify-start md:pl-12 py-8 md:py-0">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 text-left">Why This Dual Model Works</h2>
            <p className="text-lg text-gray-700 mb-4 text-left max-w-lg">
              Our unique approach—operating our own SaaS products and building custom solutions—means we understand the real challenges businesses face. We validate ideas in the real world, refine our process, and bring honest, sustainable partnership to every project.
            </p>
            <p className="text-base text-gray-500 text-left max-w-lg">
              We know what it takes to build, launch, and maintain software that businesses rely on daily. Our experience benefits every client we work with.
            </p>
          </div>
        </div>
      </section>

      {/* HOW WE WORK - Slack-style two-column with SVG illustration */}
      <section className="py-20 ">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text */}
          <div className="flex-1 mb-10 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How We Work</h2>
            <p className="text-lg text-gray-700 mb-6">
              We believe in clear communication, real results, and building software that grows with your business. Our team is global, experienced, and focused on making your work easier.
            </p>
            <ul className="space-y-3 text-base md:text-lg text-gray-700 mb-6">
              <li><span className="font-semibold">Fixed-price custom projects</span> starting at £3,000. You know the cost upfront—no hourly billing or scope creep surprises.</li>
              <li><span className="font-semibold">Integration specialists.</span> We excel at making different systems work together, from POS to cloud APIs.</li>
              <li><span className="font-semibold">You own your custom work completely.</span> Full source code, documentation, and the freedom to maintain it however you choose.</li>
              <li><span className="font-semibold">Long-term partnership.</span> We support you as your business evolves, not just at launch.</li>
            </ul>
          </div>
          {/* Right: SVG Illustration - Globe with interconnected people/icons */}
          <div className="flex-1 flex items-center justify-center w-full">
            <svg width="340" height="340" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs md:max-w-sm">
              {/* Globe */}
              <ellipse cx="170" cy="180" rx="120" ry="100" fill="#F3E8FF" />
              <ellipse cx="170" cy="180" rx="100" ry="80" fill="#fff" />
              {/* Dotted lines (connections) */}
              <path d="M170 100 Q200 140 250 120" stroke="#BDBDBD" strokeWidth="2" strokeDasharray="5 5" fill="none" />
              <path d="M170 100 Q140 140 90 120" stroke="#BDBDBD" strokeWidth="2" strokeDasharray="5 5" fill="none" />
              <path d="M90 120 Q80 180 120 240" stroke="#BDBDBD" strokeWidth="2" strokeDasharray="5 5" fill="none" />
              <path d="M250 120 Q260 180 220 240" stroke="#BDBDBD" strokeWidth="2" strokeDasharray="5 5" fill="none" />
              <path d="M120 240 Q170 280 220 240" stroke="#BDBDBD" strokeWidth="2" strokeDasharray="5 5" fill="none" />
              {/* Central Zentra node */}
              <circle cx="170" cy="180" r="28" fill="#9321C6" />
              <text x="170" y="188" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#fff">Zentra</text>
              {/* People/Icons around globe */}
              <circle cx="90" cy="120" r="18" fill="#21C6A6" />
              <circle cx="250" cy="120" r="18" fill="#EBB424" />
              <circle cx="120" cy="240" r="18" fill="#4A164B" />
              <circle cx="220" cy="240" r="18" fill="#9321C6" />
              {/* Simple person icons (circles with faces) */}
              <circle cx="90" cy="120" r="10" fill="#fff" />
              <circle cx="250" cy="120" r="10" fill="#fff" />
              <circle cx="120" cy="240" r="10" fill="#fff" />
              <circle cx="220" cy="240" r="10" fill="#fff" />
              {/* Smiley faces (demo) */}
              <text x="90" y="125" textAnchor="middle" fontSize="10" fill="#4A164B">:)</text>
              <text x="250" y="125" textAnchor="middle" fontSize="10" fill="#9321C6">:D</text>
              <text x="120" y="245" textAnchor="middle" fontSize="10" fill="#21C6A6">:)</text>
              <text x="220" y="245" textAnchor="middle" fontSize="10" fill="#EBB424">:)</text>
            </svg>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM/INTEGRATION SECTION - Slack-style two-column with SVG illustration */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text */}
          <div className="flex-1 mb-10 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Building the connected ecosystem for business</h2>
            <p className="text-lg text-gray-700 mb-6">
              Zentra connects your business with the tools and services you already use. Our platforms and custom solutions integrate with POS systems, printers, cloud apps, and more—so you can automate work, eliminate manual steps, and keep everything in sync.
            </p>
            <ul className="space-y-3 text-base md:text-lg text-gray-700 mb-6">
              <li><a href="#" className="text-[#9321C6] font-semibold hover:underline">Our Integrations</a> include POS, printers, payment gateways, and cloud APIs.</li>
              <li><a href="#" className="text-[#4A164B] font-semibold hover:underline">The Zentra Marketplace</a> gives you access to add-ons and custom modules for your workflow.</li>
              <li><a href="#" className="text-[#21C6A6] font-semibold hover:underline">The Zentra Partner Network</a> connects you with vetted implementation experts and support.</li>
            </ul>
            <p className="text-base text-gray-500">We believe in open, flexible software that grows with your business.</p>
          </div>
          {/* Right: SVG Illustration */}
          <div className="flex-1 flex items-center justify-center w-full">
            <svg width="340" height="340" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs md:max-w-sm">
              {/* Central Zentra node */}
              <circle cx="170" cy="170" r="38" fill="#F3E8FF" />
              <text x="170" y="178" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#611E69">Zentra</text>
              {/* Nodes */}
              <circle cx="60" cy="60" r="22" fill="#21C6A6" />
              <circle cx="280" cy="60" r="22" fill="#9321C6" />
              <circle cx="60" cy="280" r="22" fill="#EBB424" />
              <circle cx="280" cy="280" r="22" fill="#4A164B" />
              <circle cx="170" cy="30" r="16" fill="#F3E8FF" />
              <circle cx="170" cy="310" r="16" fill="#F3E8FF" />
              {/* Lines */}
              <line x1="170" y1="132" x2="170" y2="46" stroke="#BDBDBD" strokeWidth="2" strokeDasharray="6 6" />
              <line x1="170" y1="208" x2="170" y2="294" stroke="#BDBDBD" strokeWidth="2" strokeDasharray="6 6" />
              <line x1="132" y1="170" x2="76" y2="170" stroke="#BDBDBD" strokeWidth="2" strokeDasharray="6 6" />
              <line x1="208" y1="170" x2="264" y2="170" stroke="#BDBDBD" strokeWidth="2" strokeDasharray="6 6" />
              <line x1="170" y1="132" x2="76" y2="76" stroke="#BDBDBD" strokeWidth="2" strokeDasharray="6 6" />
              <line x1="170" y1="132" x2="264" y2="76" stroke="#BDBDBD" strokeWidth="2" strokeDasharray="6 6" />
              <line x1="170" y1="208" x2="76" y2="264" stroke="#BDBDBD" strokeWidth="2" strokeDasharray="6 6" />
              <line x1="170" y1="208" x2="264" y2="264" stroke="#BDBDBD" strokeWidth="2" strokeDasharray="6 6" />
              {/* Node icons (simple SVGs for demo) */}
              <text x="60" y="66" textAnchor="middle" fontSize="14" fill="#fff">POS</text>
              <text x="280" y="66" textAnchor="middle" fontSize="14" fill="#fff">API</text>
              <text x="60" y="286" textAnchor="middle" fontSize="14" fill="#fff">Print</text>
              <text x="280" y="286" textAnchor="middle" fontSize="14" fill="#fff">Cloud</text>
              <text x="170" y="36" textAnchor="middle" fontSize="12" fill="#611E69">Add-on</text>
              <text x="170" y="316" textAnchor="middle" fontSize="12" fill="#611E69">Support</text>
            </svg>
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-5xl mx-auto px-4 ">
          <div className="rounded-3xl bg-gradient-to-b from-[#D5F1FF] to-white shadow-xl bg-white/80 backdrop-blur-sm border border-gray-100 flex flex-col lg:flex-row items-center overflow-hidden">
            <div className="flex-1 p-8 lg:p-12">
              <div className="uppercase text-xs font-bold text-[#4A164B] mb-2 tracking-widest">Ready to Work Together?</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Let&apos;s build something that actually works for your business.
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                Whether you need a completely custom solution built from scratch or want to explore how our existing products might fit your needs, we&apos;re here to help. Get in touch to discuss your project. We&apos;ll give you an honest assessment of whether custom development or an existing solution makes more sense for your situation.
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
    </div>
  );
} 