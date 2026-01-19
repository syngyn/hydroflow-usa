import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Users, Link as LinkIcon, Baby, FileText, Mail } from 'lucide-react';

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
            <div className="w-20 h-20 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-cyan-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-300">
              Your privacy and data protection are important to us
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-slate-700 leading-relaxed mb-4">
              <i>Hydro</i>FLOW USA operates the www.hydroflow-usa.com website, which provides the SERVICE.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of personal information if anyone decides to use our Service, the <i>Hydro</i>FLOW USA website.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              If you choose to use our service, then you agree to the collection and use of information in relation with this policy. The personal information that we collect are used for providing and improving the service. We will not use or share your information with anyone except as described in this Privacy Policy.
            </p>
            <p className="text-slate-700 leading-relaxed">
              The terms used in this privacy policy have the same meanings as in our Terms and Conditions, which is accessible at www.hydroflow-usa.com, unless otherwise defined in this Privacy Policy.
            </p>
          </motion.div>

          {/* Information Collection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-cyan-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Information Collection and Use</h2>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <p className="text-slate-700 leading-relaxed">
                For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.
              </p>
            </div>
          </motion.div>

          {/* Log Data */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center">
                <Eye className="w-6 h-6 text-cyan-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Log Data</h2>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <p className="text-slate-700 leading-relaxed">
                We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
              </p>
            </div>
          </motion.div>

          {/* Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center">
                <FileText className="w-6 h-6 text-cyan-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Cookies</h2>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 space-y-4">
              <p className="text-slate-700 leading-relaxed">
                Cookies are files with small amount of data that is commonly used as an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer's hard drive.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Our website uses these "cookies" to collect information and improve our Service. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.
              </p>
            </div>
          </motion.div>

          {/* Service Providers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-cyan-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Service Providers</h2>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 space-y-4">
              <p className="text-slate-700 leading-relaxed">
                We may employ third-party companies and individuals due to the following reasons:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="text-slate-700 leading-relaxed list-disc">To facilitate our service or products;</li>
                <li className="text-slate-700 leading-relaxed list-disc">To provide the service or products on our behalf;</li>
                <li className="text-slate-700 leading-relaxed list-disc">To perform product-related services; or</li>
                <li className="text-slate-700 leading-relaxed list-disc">To assist us in analyzing how our products or services are used.</li>
              </ul>
              <p className="text-slate-700 leading-relaxed">
                We want to inform our Service users that these third parties have access to your Personal Information. The reason, is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
              </p>
            </div>
          </motion.div>

          {/* Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center">
                <Lock className="w-6 h-6 text-cyan-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Security</h2>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <p className="text-slate-700 leading-relaxed">
                We value your trust in providing us your personal information, thus we are striving to use commercially acceptable means of protecting it. Remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
              </p>
            </div>
          </motion.div>

          {/* Links to Other Sites */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center">
                <LinkIcon className="w-6 h-6 text-cyan-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Links to Other Sites</h2>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <p className="text-slate-700 leading-relaxed">
                Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
              </p>
            </div>
          </motion.div>

          {/* Children's Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center">
                <Baby className="w-6 h-6 text-cyan-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Children's Privacy</h2>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <p className="text-slate-700 leading-relaxed">
                Our services do not address anyone under the age of 18. We do not knowingly collect personal identifiable information from children under 18. In the case we discover that a child under 18 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to preform the necessary actions.
              </p>
            </div>
          </motion.div>

          {/* Changes to Privacy Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center">
                <FileText className="w-6 h-6 text-cyan-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Changes to This Privacy Policy</h2>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <p className="text-slate-700 leading-relaxed">
                We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
              </p>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-3xl p-8 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h3>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:1-888-559-4340" className="inline-flex items-center justify-center px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full font-semibold transition-colors">
                Call 1-888-559-4340
              </a>
              <a href="mailto:sales@hydroflow-usa.com" className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold transition-colors">
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}