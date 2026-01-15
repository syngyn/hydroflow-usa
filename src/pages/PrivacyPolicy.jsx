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
              Privacy
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 leading-relaxed mb-8">
              <i>Hydro</i>FLOW USA operates the www.hydroflow-usa.com website, which provides the SERVICE.
            </p>

            <p className="text-slate-600 leading-relaxed mb-8">
              This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of personal information if anyone decides to use our Service, the <i>Hydro</i>FLOW USA website.
            </p>

            <p className="text-slate-600 leading-relaxed mb-8">
              If you choose to use our service, then you agree to the collection and use of information in relation with this policy. The personal information that we collect are used for providing and improving the service. We will not use or share your information with anyone except as described in this Privacy Policy.
            </p>

            <p className="text-slate-600 leading-relaxed mb-12">
              The terms used in this privacy policy have the same meanings as in our Terms and Conditions, which is accessible at www.hydroflow-usa.com, unless otherwise defined in this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Information Collection and Use</h2>
            <p className="text-slate-600 leading-relaxed mb-12">
              For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Log Data</h2>
            <p className="text-slate-600 leading-relaxed mb-12">
              We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Cookies</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Cookies are files with small amount of data that is commonly used as an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer's hard drive.
            </p>
            <p className="text-slate-600 leading-relaxed mb-12">
              Our website uses these "cookies" to collect information and improve our Service. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Service Providers</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We may employ third-party companies and individuals due to the following reasons:
            </p>
            <ul className="list-disc pl-6 text-slate-600 leading-relaxed mb-12 space-y-2">
              <li>To facilitate our service or products;</li>
              <li>To provide the service or products on our behalf;</li>
              <li>To perform product-related services; or</li>
              <li>To assist us in analyzing how our products or services are used.</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-12">
              We want to inform our Service users that these third parties have access to your Personal Information. The reason, is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Security</h2>
            <p className="text-slate-600 leading-relaxed mb-12">
              We value your trust in providing us your personal information, thus we are striving to use commercially acceptable means of protecting it. Remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Links to Other Sites</h2>
            <p className="text-slate-600 leading-relaxed mb-12">
              Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Children's Privacy</h2>
            <p className="text-slate-600 leading-relaxed mb-12">
              Our services do not address anyone under the age of 18. We do not knowingly collect personal identifiable information from children under 18. In the case we discover that a child under 18 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to preform the necessary actions.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-slate-600 leading-relaxed mb-12">
              We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-600 leading-relaxed mb-12">
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
            </p>

            <div className="bg-slate-50 rounded-2xl p-8 mt-12">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Questions About Our Privacy Policy?</h3>
              <p className="text-slate-600 mb-6">
                If you have any questions or suggestions about our Privacy Policy, please contact us.
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