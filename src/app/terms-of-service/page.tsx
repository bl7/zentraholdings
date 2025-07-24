import { FaFileContract } from 'react-icons/fa';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section (split layout) */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              <span className="text-[#611E69]">Terms of</span> Service
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mb-8">
              The rules and guidelines for using Zentra Holdings Limited&apos;s services.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <FaFileContract className="w-32 h-32 text-[#611E69] opacity-80" />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Terms and Conditions</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p><strong>Effective Date:</strong> 1 July 2024</p>
            <p>These Terms of Service (&quot;Terms&quot;) govern your use of the website and services provided by Zentra Holdings Limited (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing or using our services, you agree to these Terms. If you do not agree, please do not use our services.</p>
            <h3>1. Use of Services</h3>
            <ul>
              <li>You must be at least 18 years old or have legal capacity to enter into a contract.</li>
              <li>You agree to use our services only for lawful purposes and in accordance with these Terms.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
            </ul>
            <h3>2. Acceptable Use</h3>
            <ul>
              <li>Do not use our services to violate any law, regulation, or third-party rights.</li>
              <li>Do not attempt to gain unauthorized access to our systems or data.</li>
              <li>Do not use our services to transmit harmful, offensive, or illegal content.</li>
              <li>Do not interfere with the operation or security of our services.</li>
            </ul>
            <h3>3. Intellectual Property</h3>
            <p>All content, trademarks, and intellectual property on our website and services are owned by Zentra Holdings Limited or our licensors. You may not use, copy, or distribute any content without our written permission.</p>
            <h3>4. Service Availability</h3>
            <p>We strive to provide reliable services but do not guarantee uninterrupted or error-free operation. We may modify, suspend, or discontinue any part of our services at any time.</p>
            <h3>5. User Content</h3>
            <ul>
              <li>You retain ownership of content you submit but grant us a license to use it as needed to provide our services.</li>
              <li>You are responsible for ensuring your content does not violate any laws or rights.</li>
            </ul>
            <h3>6. Third-Party Services</h3>
            <p>Our services may link to or integrate with third-party services. We are not responsible for their content or practices.</p>
            <h3>7. Disclaimers</h3>
            <p>Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind. We disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.</p>
            <h3>8. Limitation of Liability</h3>
            <p>To the maximum extent permitted by law, Zentra Holdings Limited is not liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, data, or goodwill. Our total liability for any claim is limited to the amount you paid us in the 12 months preceding the claim.</p>
            <h3>9. Indemnification</h3>
            <p>You agree to indemnify and hold harmless Zentra Holdings Limited and its affiliates from any claims, damages, or expenses arising from your use of our services or violation of these Terms.</p>
            <h3>10. Termination</h3>
            <p>We may suspend or terminate your access to our services at any time for any reason. You may stop using our services at any time.</p>
            <h3>11. Governing Law</h3>
            <p>These Terms are governed by the laws of England and Wales, without regard to conflict of law principles. Any disputes will be resolved in the courts of England and Wales.</p>
            <h3>12. Changes to These Terms</h3>
            <p>We may update these Terms from time to time. Changes will be posted on this page with a new effective date. Continued use of our services constitutes acceptance of the updated Terms.</p>
            <h3>13. Contact Us</h3>
            <p>If you have questions about these Terms, contact us at <a href="mailto:admin@instalabel.co">admin@instalabel.co</a>.</p>
          </div>
        </div>
      </section>
    </div>
  );
} 