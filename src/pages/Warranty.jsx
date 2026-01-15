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
              Warranty Information
            </h1>
            <p className="text-xl text-slate-300">
              Five-Year Limited Warranty on <i>Hydro</i>FLOW Products
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Five-Year Limited Warranty</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              <i>Hydro</i>FLOW U.S.A., LLC ("<i>Hydro</i>FLOW") offers its customers ("you") a five-year limited warranty against 
              failure or defects in materials or workmanship in any <i>Hydro</i>FLOW product (the "Product") or its component parts, 
              subject to the terms and conditions set forth below. If the Product or any of its parts fails during the first five 
              years of operation, <i>Hydro</i>FLOW or its representative will repair or replace the Product, free of charge.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              For this warranty to apply, you will need to provide proof that the Product has been installed properly and 
              before-and-after proof that such Product is not operating as warranted.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">What Is Covered</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              This warranty covers defects in materials and workmanship in <i>Hydro</i>FLOW products for a period of five years 
              from the date of purchase. If a product proves to be defective within this period, <i>Hydro</i>FLOW will, at its 
              option, repair or replace the product free of charge.
            </p>
            <ul className="list-disc pl-6 text-slate-600 leading-relaxed mb-12 space-y-2">
              <li>Manufacturing defects in materials and workmanship</li>
              <li>Component failures under normal use</li>
              <li>Electronic component malfunctions</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mb-4">What Is Not Covered</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              This warranty does not cover damage to the Product caused by:
            </p>
            <ul className="list-disc pl-6 text-slate-600 leading-relaxed mb-8 space-y-2">
              <li>Improper installation or installation not in accordance with <i>Hydro</i>FLOW's instructions</li>
              <li>A surge or disruption in power (however caused)</li>
              <li>A water leak resulting from limescale or biofilm removal</li>
              <li>Misuse, abuse, or neglect</li>
              <li>Force majeure events (i.e., floods, earthquakes, acts of God, etc.)</li>
              <li>Normal wear and tear</li>
              <li>Unauthorized modifications or repairs</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-12">
              Please be aware that water leaks from plumbing systems may result as a consequence of limescale and biofilm removal. 
              You are therefore advised and have a duty to periodically inspect your plumbing systems to ensure that compression 
              joints remain water-tight.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">How To Make A Claim & Get Service</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              A claim under this warranty must be submitted by email to <i>Hydro</i>FLOW or the authorized dealer or vendor from 
              which you purchased the Product. Your claim email must include:
            </p>
            <ul className="list-disc pl-6 text-slate-600 leading-relaxed mb-8 space-y-2">
              <li>A copy of your proof of purchase (receipt or order confirmation)</li>
              <li>Before-and-after proof that the Product is not operating as warranted</li>
              <li>Your contact information including name, address, phone number, and email</li>
              <li>A detailed description of the problem</li>
              <li>Photos or videos demonstrating the issue (if applicable)</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-4">
              Please submit all warranty claims to: <a href="mailto:sales@hydroflow-usa.com" className="text-cyan-600 hover:text-cyan-700 underline">sales@hydroflow-usa.com</a>
            </p>
            <p className="text-slate-600 leading-relaxed mb-12">
              <i>Hydro</i>FLOW will review your claim and respond within 5-7 business days. If your claim is approved, we will 
              provide instructions for returning the product or arranging for a replacement.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">Warranty Limitations</h3>
            <p className="text-slate-600 leading-relaxed mb-4 font-semibold">
              THIS WARRANTY IS IN LIEU OF ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES 
              OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. <i>Hydro</i>FLOW'S LIABILITY UNDER THIS WARRANTY IS LIMITED TO 
              REPAIR OR REPLACEMENT OF THE PRODUCT.
            </p>
            <p className="text-slate-600 leading-relaxed mb-12">
              <i>Hydro</i>FLOW SHALL NOT BE LIABLE FOR ANY INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR INDIRECT DAMAGES, INCLUDING WITHOUT 
              LIMITATION, LOSS OF PROFITS, LOSS OF USE, OR DAMAGE TO PROPERTY. Some states do not allow the exclusion or limitation 
              of incidental or consequential damages, so the above limitation or exclusion may not apply to you.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">Transferability</h3>
            <p className="text-slate-600 leading-relaxed mb-12">
              This warranty is non-transferable and applies only to the original purchaser of the Product. Proof of purchase must 
              be provided to validate the warranty.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">Returns & Refunds</h3>
            <p className="text-slate-600 leading-relaxed mb-12">
              For information about returns and refunds outside of warranty claims, please contact <i>Hydro</i>FLOW customer service 
              at <a href="tel:1-888-559-4340" className="text-cyan-600 hover:text-cyan-700 underline">1-888-559-4340</a> or 
              <a href="mailto:sales@hydroflow-usa.com" className="text-cyan-600 hover:text-cyan-700 underline"> sales@hydroflow-usa.com</a>.
            </p>

            <div className="bg-slate-50 rounded-2xl p-8 mt-12">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Questions About Your Warranty?</h3>
              <p className="text-slate-600 mb-6">
                If you have any questions about our warranty coverage or need to file a claim, please contact us.
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