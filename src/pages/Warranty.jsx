import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle2, AlertTriangle, FileText, Mail } from 'lucide-react';

export default function Warranty() {
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
              Five-Year Limited Warranty
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Your <i>Hydro</i>FLOW investment is protected with our comprehensive warranty coverage
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Warranty Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-3xl p-8 md:p-12 mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Five-Year Limited Warranty</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              <i>Hydro</i>FLOW U.S.A., LLC ("<i>Hydro</i>FLOW") offers its customers ("you") a five-year limited warranty against 
              failure or defects in materials or workmanship in any <i>Hydro</i>FLOW product (the "Product") or its component parts, 
              subject to the terms and conditions set forth below. If the Product or any of its parts fails during the first five 
              years of operation, <i>Hydro</i>FLOW or its representative will repair or replace the Product, free of charge.
            </p>
            <p className="text-slate-700 leading-relaxed">
              For this warranty to apply, you will need to provide proof that the Product has been installed properly and 
              before-and-after proof that such Product is not operating as warranted.
            </p>
          </motion.div>

          {/* What Is Not Covered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">What Is Not Covered</h2>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <p className="text-slate-700 leading-relaxed">
                This warranty does not cover damage to the Product caused by improper installation, a surge or disruption in power 
                (however caused), a water leak resulting from limescale or biofilm removal, misuse, abuse, or force majeure 
                (i.e., a flood or earthquake, etc.). Please be aware that water leaks from plumbing systems may result as a 
                consequence of limescale and biofilm removal. You are therefore advised and have a duty to periodically inspect 
                your plumbing systems to ensure that compression joints remain water-tight.
              </p>
            </div>
          </motion.div>

          {/* How To Make A Claim */}
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
              <h2 className="text-2xl font-bold text-slate-900">How To Make A Claim & Get Service</h2>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <p className="text-slate-700 leading-relaxed mb-6">
                A claim under this warranty must be submitted by email to <i>Hydro</i>FLOW or the authorized dealer or vendor from 
                which you purchased the Product, and such email must include:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">A copy of the original receipt or proof of purchase of the Product</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Proof that the Product has been installed properly</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">A written explanation of the issue(s) with the Product</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">One or more pictures of the Product and surrounding area that displays such issue(s)</span>
                </li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-6">
                A <i>Hydro</i>FLOW representative will then review your claim and contact you within 10 business days to coordinate 
                the repair or replacement of the Product or to request additional information.
              </p>
            </div>
          </motion.div>

          {/* Limitations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Limitations</h2>
            <div className="bg-slate-50 rounded-2xl p-8 space-y-4">
              <p className="text-slate-700 leading-relaxed">
                Warranty claims are strictly limited to the value of the original purchase price or the repair or replacement cost. 
                <i>Hydro</i>FLOW shall not be responsible for water leaks or damage caused by the removal of limescale or biofilm.
              </p>
              <p className="text-slate-700 leading-relaxed">
                This warranty is not valid unless the Product is properly used with an appropriate surge protection device of adequate 
                quality to protect the Product and its electronic components.
              </p>
              <p className="text-slate-700 leading-relaxed">
                <i>Hydro</i>FLOW will not be responsible for any consequential, incidental, indirect, special, punitive or other loss 
                or damage that may result from a product defect. <i>Hydro</i>FLOW reserves the right to determine the validity of any 
                claim and remedy in its sole discretion.
              </p>
            </div>
          </motion.div>

          {/* Warning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
                Warning
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Biofilm release from potable water systems is an important attribute of the <i>Hydro</i>FLOW Product. As a precautionary 
                measure, it is recommended to use an adequate filtration device to prevent the released biofilm from potentially reaching 
                end-users. <i>Hydro</i>FLOW is not liable for any biological matter that reaches an end-user because an adequate filtration 
                device was not utilized.
              </p>
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-slate-900 rounded-2xl p-8">
              <p className="text-slate-300 leading-relaxed text-sm">
                EXCEPT AS PROVIDED HEREIN, HYDROFLOW MAKES NO REPRESENTATION OR WARRANTY, EXPRESS OR IMPLIED (WHETHER WRITTEN, ORAL, 
                STATUTORY, OR ARISING BY PREVIOUS COURSE OF DEALING OR USAGE OF TRADE), INCLUDING WARRANTIES OF MERCHANTABILITY OR 
                FITNESS FOR A PARTICULAR PURPOSE. HYDROFLOW MAKES NO GUARANTEE OF PERFORMANCE OTHER THAN AS SET FORTH ABOVE. NO AGENT, 
                REPRESENTATIVE, OR EMPLOYEE OF HYDROFLOW IS AUTHORIZED TO MAKE ANY WARRANTIES OR GUARANTEES WITH RESPECT TO ITS PRODUCTS.
              </p>
            </div>
          </motion.div>

          {/* State Law & Final Sales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 space-y-6"
          >
            <div className="bg-slate-50 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">How State Law Applies</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                This warranty is only valid in the United States of America. This warranty supersedes any applicable state laws to 
                the full extent permitted by law. You may have other rights depending on your state of residence.
              </p>
              <p className="text-slate-900 font-semibold">
                All Sales Are Final.
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
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Questions About Your Warranty?</h3>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Our team is here to help you with any warranty-related questions or claims.
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