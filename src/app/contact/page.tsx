'use client'
import Image from "next/image";
import { useState, useRef } from 'react';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string|null>(null);
  const [error, setError] = useState<string|null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // FAQ state moved to top level
  const faqs = [
    {
      question: 'Can you build only our product idea?',
      answer: 'Yes! We partner with founders and businesses to build custom software, whether it’s a new venture or a single product.'
    },
    {
      question: 'What kind of support do you offer after launch?',
      answer: 'We provide ongoing support, updates, and guidance to ensure your product keeps evolving and growing.'
    }
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
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
      {/* Hero Section - Slack style, accent color */}
      <section className="pt-32 pb-20 bg-[#4A164B]">
        <div className="max-w-xl mx-auto px-0 md:ml-16 text-left">
          <h1 className="text-5xl font-extrabold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-white/90 mb-4">Have a question about our products, services, or partnership opportunities? Get in touch and our team will respond promptly.</p>
        </div>
      </section>

      {/* Contact Form & Info - left/right split */}
      <section className="relative z-20 -mt-10 pb-12">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Left: Wide Form */}
          <div className="flex-[2] w-full bg-white p-10 md:p-14 shadow-2xl relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-6" onSubmit={handleSubmit} ref={formRef}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#4A164B] focus:border-transparent transition-colors text-black"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#4A164B] focus:border-transparent transition-colors text-black"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#4A164B] focus:border-transparent transition-colors text-black"
                  placeholder="you@zentraholdings.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#4A164B] focus:border-transparent transition-colors text-black"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#4A164B] focus:border-transparent transition-colors text-black"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Sales & Pricing">Sales & Pricing</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#4A164B] focus:border-transparent transition-colors resize-none text-black"
                  placeholder="Tell us about your project or how we can help..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#4A164B] text-white hover:bg-[#3a1239] transition-colors font-semibold text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {success && <div className="text-green-600 font-medium text-center mt-2">{success}</div>}
              {error && <div className="text-red-600 font-medium text-center mt-2">{error}</div>}
            </form>
          </div>
          {/* Right: Address Info, no card */}
          <div className="flex-1 flex flex-col justify-start items-center md:items-start pt-4 md:pt-0 gap-8">
            {/* Address */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#21C6A6] text-white text-2xl font-bold">🏢</div>
              <div>
                <div className="font-semibold text-gray-900">Office Address</div>
                <div className="text-gray-700 text-sm">123 Innovation Drive<br/>London, UK<br/>United Kingdom</div>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#9321C6] text-white text-2xl font-bold">✉️</div>
              <div>
                <div className="font-semibold text-gray-900">Email Us</div>
                <div className="text-gray-700 text-sm">
                  <a href="mailto:hello@zentraholdings.com" className="text-[#4A164B] hover:text-[#3a1239] transition-colors">hello@zentraholdings.com</a><br/>
                  <a href="mailto:support@zentraholdings.com" className="text-[#4A164B] hover:text-[#3a1239] transition-colors">support@zentraholdings.com</a>
                </div>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#EBB424] text-white text-2xl font-bold">📞</div>
              <div>
                <div className="font-semibold text-gray-900">Call Us</div>
                <div className="text-gray-700 text-sm">
                  <a href="tel:+44-20-1234-5678" className="text-[#4A164B] hover:text-[#3a1239] transition-colors">+44 20 1234 5678</a>
                </div>
                <div className="text-xs text-gray-500">Mon-Fri: 9AM - 6PM GMT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - now below address info, full width */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={faq.question} className="border border-gray-200 rounded-lg">
                <button
                  type="button"
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-panel-${idx}`}
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className={
                    `w-full text-left px-6 py-4 text-lg md:text-xl font-semibold text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#611E69] transition cursor-pointer flex justify-between items-center` +
                    (openIndex === idx ? ' bg-gray-50' : ' bg-white')
                  }
                >
                  <span>{faq.question}</span>
                  <svg className={`w-5 h-5 ml-2 transform transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  id={`faq-panel-${idx}`}
                  role="region"
                  aria-labelledby={`faq-button-${idx}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 py-4 px-6' : 'max-h-0 py-0 px-6'}`}
                  style={{lineHeight: '1.6'}}
                >
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 