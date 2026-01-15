import React from 'react';
import { motion } from 'framer-motion';

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Water Conditioners Warranty
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Warranty</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong>One-Year Limited Warranty:</strong> <i>Hydro</i>FLOW U.S.A., LLC ("<i>Hydro</i>FLOW") offers its customers ("you") a one-year limited warranty against failure or defects in materials or workmanship in any <i>Hydro</i>FLOW product (the "Product") or its component parts, subject to the terms and conditions set forth below. If the Product or any of its parts fails during the first year of operation, <i>Hydro</i>FLOW or its representative will repair or replace the Product, free of charge. For this warranty to apply, you will need to provide proof that the Product has been installed properly and before-and-after proof that such Product is not operating as warranted.
            </p>
            <p className="text-slate-600 leading-relaxed mb-12">
              <strong>Additional Four-Year Limited Warranty (total of Five-Years:</strong> The Pearl, Pearl Plus, and <i>hs</i>40 units automatically receive an additional four-year limited warranty. The <i>i</i>Range and <i>x</i>Range units require activation of the additional four-year limited warranty. Please contact the authorized dealer or vendor from which you purchased the Product to activate the additional warranty at no cost.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">What Is Not Covered</h2>
            <p className="text-slate-600 leading-relaxed mb-12">
              This warranty does not cover damage to the Product caused by improper installation, a surge or disruption in power (however caused), a water leak resulting from limescale or biofilm removal, misuse, abuse, or force majeure (i.e., a flood or earthquake, etc.). Please be aware that water leaks from plumbing systems may result as a consequence of limescale and biofilm removal. You are therefore advised and have a duty to periodically inspect your plumbing systems to ensure that compression joints remain water-tight.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">How To Make A Claim & Get Service</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              A claim under this warranty must be submitted by email to <i>Hydro</i>FLOW or the authorized dealer or vendor from which you purchased the Product, and such email must include:
            </p>
            <ul className="list-disc pl-6 text-slate-600 leading-relaxed mb-12 space-y-2">
              <li>A copy of the original receipt or proof of purchase of the Product</li>
              <li>Proof that the Product has been installed properly</li>
              <li>A written explanation of the issue(s) with the Product</li>
              <li>One or more pictures of the Product and surrounding area that displays such issue(s)</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-12">
              A <i>Hydro</i>FLOW representative will then review your claim and contact you within 10 business days to coordinate the repair or replacement of the Product or to request additional information.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitations</h2>
            <p className="text-slate-600 leading-relaxed mb-12">
              Warranty claims are strictly limited to the value of the original purchase price or the repair or replacement cost. <i>Hydro</i>FLOW shall not be responsible for water leaks or damage caused by the removal of limescale or biofilm. <i>Hydro</i>FLOW will not be responsible for any consequential, incidental, indirect, special, punitive or other loss or damage that may result from a product defect. <i>Hydro</i>FLOW reserves the right to determine the validity of any claim and remedy in its sole discretion.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Warning</h2>
            <p className="text-slate-600 leading-relaxed mb-12">
              Biofilm release from potable water systems is an important attribute of the <i>Hydro</i>FLOW Product. As a precautionary measure, it is recommended to use an adequate filtration device to prevent the released biofilm from potentially reaching end-users. <i>Hydro</i>FLOW is not liable for any biological matter that reaches an end-user because an adequate filtration device was not utilized.
            </p>

            <p className="text-slate-600 leading-relaxed mb-12 font-semibold">
              EXCEPT AS PROVIDED HEREIN, HYDROFLOW MAKES NO REPRESENTATION OR WARRANTY, EXPRESS OR IMPLIED (WHETHER WRITTEN, ORAL, STATUTORY, OR ARISING BY PREVIOUS COURSE OF DEALING OR USAGE OF TRADE), INCLUDING WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. HYDROFLOW MAKES NO GUARANTEE OF PERFORMANCE OTHER THAN AS SET FORTH ABOVE. NO AGENT, REPRESENTATIVE, OR EMPLOYEE OF HYDROFLOW IS AUTHORIZED TO MAKE ANY WARRANTIES OR GUARANTEES WITH RESPECT TO ITS PRODUCTS.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">How State Law Applies</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              This warranty is only valid in the United States of America. This warranty supersedes any applicable state laws to the full extent permitted by law. You may have other rights depending on your state of residence.
            </p>

            <p className="text-slate-600 leading-relaxed mb-12 font-semibold">
              All Sales Are Final.
            </p>

            <div className="bg-slate-50 rounded-2xl p-8 mt-12">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Questions About Our Warranty?</h3>
              <p className="text-slate-600 mb-6">
                If you have any questions about our warranty, please contact us.
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