import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-xl font-bold">Zentra Software Solutions Ltd</span>
            </div>
            <p className="text-[#EBB424] mb-6 leading-relaxed">
              Custom development for businesses worldwide<br/>
              Remote team, professional delivery
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#EBB424]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#projects" className="text-gray-200 hover:text-[#E51670] transition-colors">Portfolio Examples</a>
              </li>
              <li>
                <a href="#technology" className="text-gray-200 hover:text-[#E51670] transition-colors">Technology Stack</a>
              </li>
              <li>
                <a href="#process" className="text-gray-200 hover:text-[#E51670] transition-colors">Development Process</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-200 hover:text-[#E51670] transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#EBB424]">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-gray-200 hover:text-[#E51670] transition-colors">About Us</a>
              </li>
              <li>
                <a href="/faq" className="text-gray-200 hover:text-[#E51670] transition-colors">FAQ</a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-200 hover:text-[#E51670] transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-gray-200 hover:text-[#E51670] transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="/cookie-policy" className="text-gray-200 hover:text-[#E51670] transition-colors">Cookie Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#EBB424]">Contact Details</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#49C39E" opacity="0.15"/><path d="M8 12h8M12 8v8" stroke="#49C39E" strokeWidth="2" strokeLinecap="round"/></svg>
                <span>Email: <a href="mailto:info@zentraholdings.com" className="text-gray-200 hover:text-[#E51670] transition-colors">info@zentraholdings.com</a></span>
              </li>
              <li className="flex items-center gap-2">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#E51670" opacity="0.15"/><path d="M8 12h8" stroke="#E51670" strokeWidth="2" strokeLinecap="round"/></svg>
                <span>Response time: Within 24 hours</span>
              </li>
              <li className="flex items-center gap-2">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#EBB424" opacity="0.15"/><path d="M8 12h8" stroke="#EBB424" strokeWidth="2" strokeLinecap="round"/></svg>
                <span>Available: UK business hours + flexible for global clients</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#EBB424]/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm">
              © 2024 Zentra Software Solutions Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-gray-200 hover:text-[#E51670] transition-colors text-sm">Privacy Policy</a>
              <a href="/terms-of-service" className="text-gray-200 hover:text-[#E51670] transition-colors text-sm">Terms of Service</a>
              <a href="/cookie-policy" className="text-gray-200 hover:text-[#E51670] transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 