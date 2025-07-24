import { FaCookieBite } from 'react-icons/fa';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section (split layout) */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              <span className="text-[#611E69]">Cookie</span> Policy
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mb-8">
              How Zentra Holdings Limited uses cookies and similar technologies.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <FaCookieBite className="w-32 h-32 text-[#611E69] opacity-80" />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookie Usage</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p><strong>Effective Date:</strong> 1 July 2024</p>
            <p>This Cookie Policy explains how Zentra Holdings Limited (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar technologies on our website and services. By using our site, you consent to the use of cookies as described in this policy.</p>
            <h3>1. What Are Cookies?</h3>
            <p>Cookies are small text files stored on your device when you visit a website. They help us remember your preferences, improve your experience, and analyze site usage.</p>
            <h3>2. Types of Cookies We Use</h3>
            <ul>
              <li><strong>Essential Cookies:</strong> Necessary for the website to function and cannot be switched off in our systems.</li>
              <li><strong>Performance & Analytics Cookies:</strong> Help us understand how visitors interact with our site (e.g., Google Analytics).</li>
              <li><strong>Functionality Cookies:</strong> Remember your preferences and settings.</li>
              <li><strong>Advertising Cookies:</strong> May be set by us or third parties to deliver relevant ads and track effectiveness.</li>
            </ul>
            <h3>3. How We Use Cookies</h3>
            <ul>
              <li>To operate and secure our website</li>
              <li>To remember your preferences and settings</li>
              <li>To analyze site traffic and usage</li>
              <li>To deliver personalized content and advertising</li>
            </ul>
            <h3>4. Third-Party Cookies</h3>
            <p>We may use third-party services (such as Google Analytics) that set their own cookies to collect information about your use of our site. These third parties have their own privacy and cookie policies.</p>
            <h3>5. Managing Cookies</h3>
            <p>You can control and manage cookies in your browser settings. Most browsers allow you to block or delete cookies. However, disabling certain cookies may affect the functionality of our website.</p>
            <h3>6. Cookie Consent</h3>
            <p>When you first visit our website, you may see a cookie banner requesting your consent to use non-essential cookies. You can change your preferences at any time in your browser or by contacting us.</p>
            <h3>7. Changes to This Policy</h3>
            <p>We may update this Cookie Policy from time to time. Changes will be posted on this page with a new effective date.</p>
            <h3>8. Contact Us</h3>
            <p>If you have questions about our use of cookies, contact us at <a href="mailto:admin@instalabel.co">admin@instalabel.co</a>.</p>
          </div>
        </div>
      </section>
    </div>
  );
} 