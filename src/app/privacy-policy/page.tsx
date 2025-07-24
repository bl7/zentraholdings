import { FaShieldAlt } from 'react-icons/fa';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section (split layout) */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              <span className="text-[#611E69]">Privacy</span> Policy
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mb-8">
              How Zentra Holdings Limited collects, uses, and protects your data.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <FaShieldAlt className="w-32 h-32 text-[#611E69] opacity-80" />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p><strong>Effective Date:</strong> 1 July 2024</p>
            <p>Your privacy is important to us. This Privacy Policy explains how Zentra Holdings Limited (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, discloses, and safeguards your information when you use our website and services. We are committed to protecting your personal data and complying with all applicable data protection laws, including the GDPR and CCPA.</p>
            <h3>1. Information We Collect</h3>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and any other information you provide via forms or communications.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, device information, pages visited, time and date of visits, and referring URLs.</li>
              <li><strong>Cookies & Tracking:</strong> We use cookies and similar technologies to enhance your experience and analyze site usage. See our Cookie Policy for details.</li>
            </ul>
            <h3>2. How We Use Your Information</h3>
            <ul>
              <li>To provide, operate, and maintain our services</li>
              <li>To communicate with you, including responding to inquiries and sending updates</li>
              <li>To improve our website, products, and services</li>
              <li>For analytics, research, and business development</li>
              <li>To comply with legal obligations and protect our rights</li>
            </ul>
            <h3>3. Legal Bases for Processing (GDPR)</h3>
            <p>We process your personal data only when we have a legal basis, including your consent, performance of a contract, compliance with legal obligations, or our legitimate interests.</p>
            <h3>4. How We Share Your Information</h3>
            <ul>
              <li>With trusted third-party service providers (e.g., hosting, analytics, email delivery) who process data on our behalf</li>
              <li>With authorities if required by law or to protect our rights</li>
              <li>In connection with a business transfer (e.g., merger, acquisition)</li>
              <li>We do not sell your personal information</li>
            </ul>
            <h3>5. International Data Transfers</h3>
            <p>Your information may be transferred to and processed in countries outside your own. We ensure appropriate safeguards are in place for such transfers.</p>
            <h3>6. Data Security</h3>
            <p>We use industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure.</p>
            <h3>7. Data Retention</h3>
            <p>We retain your personal data only as long as necessary for the purposes described in this policy or as required by law.</p>
            <h3>8. Your Rights</h3>
            <ul>
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Erasure:</strong> Request deletion of your data</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Portability:</strong> Request transfer of your data to another provider</li>
              <li><strong>Withdraw Consent:</strong> Where we rely on consent, you may withdraw it at any time</li>
            </ul>
            <p>To exercise your rights, contact us at <a href="mailto:admin@instalabel.co">admin@instalabel.co</a>.</p>
            <h3>9. Cookies</h3>
            <p>We use cookies and similar technologies to operate our website and improve your experience. For more information, see our <a href="/cookie-policy">Cookie Policy</a>.</p>
            <h3>10. Third-Party Links</h3>
            <p>Our website may contain links to third-party sites. We are not responsible for their privacy practices.</p>
            <h3>11. Changes to This Policy</h3>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with a new effective date.</p>
            <h3>12. Contact Us</h3>
            <p>If you have questions or concerns about this Privacy Policy or your data, please contact us at <a href="mailto:admin@instalabel.co">admin@instalabel.co</a>.</p>
          </div>
        </div>
      </section>
    </div>
  );
} 