import React from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-300">
              Last updated: January 15, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 leading-relaxed mb-8">
              This Privacy Policy describes how <i>Hydro</i>FLOW USA ("we," "us," or "our") collects, uses, and shares 
              information about you when you visit our website, www.hydroflow-usa.com (the "Website"), or use our services.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We collect information you provide directly to us, such as when you create an account, make a purchase, 
              request information, or contact us for support. This information may include:
            </p>
            <ul className="list-disc pl-6 text-slate-600 leading-relaxed mb-12 space-y-2">
              <li>Name and contact information (email address, phone number, mailing address)</li>
              <li>Payment information</li>
              <li>Account credentials</li>
              <li>Communications you send to us</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 leading-relaxed mb-12 space-y-2">
              <li>Process your orders and provide customer service</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Monitor and analyze trends and usage</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Information Sharing</h2>
            <p className="text-slate-600 leading-relaxed mb-12">
              We do not sell your personal information. We may share your information with service providers who perform 
              services on our behalf, such as payment processing, order fulfillment, and analytics. We may also share 
              information when required by law or to protect our rights.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-slate-600 leading-relaxed mb-12">
              We use cookies and similar tracking technologies to collect information about your browsing activities. 
              You can control cookies through your browser settings, but disabling cookies may affect your ability to 
              use certain features of our Website.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
            <p className="text-slate-600 leading-relaxed mb-12">
              We take reasonable measures to protect your information from unauthorized access, use, or disclosure. 
              However, no internet transmission is completely secure, and we cannot guarantee the security of information 
              transmitted through our Website.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-slate-600 leading-relaxed mb-12 space-y-2">
              <li>The right to access and receive a copy of your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to delete your information</li>
              <li>The right to object to or restrict certain processing</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Children's Privacy</h2>
            <p className="text-slate-600 leading-relaxed mb-12">
              Our Website is not intended for children under 13 years of age. We do not knowingly collect personal 
              information from children under 13. If you believe we have collected information from a child under 13, 
              please contact us.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-slate-600 leading-relaxed mb-12">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
              new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <div className="bg-slate-50 rounded-2xl p-8 mt-12">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Questions?</h3>
              <p className="text-slate-600 mb-6">
                If you have any questions about our Privacy Policy, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1-888-559-4340" className="inline-flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full font-semibold transition-colors">
                  Call 1-888-559-4340
                </a>
                <a href="mailto:sales@hydroflow-usa.com" className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold transition-colors">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}