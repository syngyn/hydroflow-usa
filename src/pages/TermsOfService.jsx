import React from 'react';
import { motion } from 'framer-motion';

export default function TermsOfService() {
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
              Terms of Service
            </h1>
            <p className="text-xl text-slate-300">
              Last updated: June 5, 2018
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 leading-relaxed mb-8">
              This web page represents our Terms of Use and Sale ("Agreement") regarding our website, www.hydroflow-usa.com ("Website"). 
              The terms, "we" and "our" as used in this Agreement refer to <i>Hydro</i>FLOW USA.
            </p>

            <p className="text-slate-600 leading-relaxed mb-8">
              We may amend this Agreement at any time by posting the amended terms on our Website. We may or may not post notices 
              on the homepage of our Website when such changes occur.
            </p>

            <p className="text-slate-600 leading-relaxed mb-12">
              We refer to this Agreement, our Privacy Policy accessible at www.hydroflow-usa.com, and any other terms, rules, 
              or guidelines on our Website collectively as our "Legal Terms." You explicitly and implicitly agree to be bound 
              by our Legal Terms each time you access our Website. If you do not wish to be so bound, please do not use or access our Website.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Limited License</h2>
            <p className="text-slate-600 leading-relaxed mb-12">
              <i>Hydro</i>FLOW USA grants you a non-exclusive, non-transferable, revocable license to access and use our Website.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Copyrights and Trademarks</h2>
            <p className="text-slate-600 leading-relaxed mb-12">
              Unless otherwise noted, all materials including without limitation, logos, brand names, images, designs, photographs, 
              video clips, written and other materials that appear as part of our Website are copyrights, trademarks, service marks, 
              trade dress and/or other intellectual property whether registered or unregistered ("Intellectual Property") are owned, 
              controlled or licensed by <i>Hydro</i>FLOW USA. Our Website as a whole is protected by copyright and trade dress. 
              Nothing on our Website should be construed as granting, by implication, estoppel or otherwise, any license or right 
              to use any Intellectual Property displayed or used on our Website, without the prior written permission of the 
              Intellectual Property owner.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Links to Third-Party Websites</h2>
            <p className="text-slate-600 leading-relaxed mb-12">
              Our Website may contain links to websites owned or operated by parties other than <i>Hydro</i>FLOW USA. Such links 
              are provided for your reference only. <i>Hydro</i>FLOW USA does not monitor or control outside websites and is not 
              responsible for their content. <i>Hydro</i>FLOW USA's inclusion of links to an outside website does not imply any 
              endorsement of the material on our Website or, unless expressly disclosed otherwise, any sponsorship, affiliation, 
              or association with its owner, operator or sponsor.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Content Disclaimer</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Postings on our Website are made at such times as <i>Hydro</i>FLOW USA determines in its discretion. You should 
              not assume that the information contained on our Website has been updated or otherwise contains current information. 
              <i>Hydro</i>FLOW USA does not review past postings to determine whether they remain accurate and information contained 
              in such postings may have been superseded.
            </p>
            <p className="text-slate-600 leading-relaxed mb-12 font-semibold">
              THE INFORMATION AND MATERIALS IN OUR WEBSITE ARE PROVIDED FOR YOUR REVIEW IN ACCORDANCE WITH THE NOTICES, TERMS AND 
              CONDITIONS SET FORTH HEREIN. THESE MATERIALS ARE NOT GUARANTEED OR REPRESENTED TO BE COMPLETE, CORRECT OR UP TO DATE. 
              THESE MATERIALS MAY BE CHANGED FROM TIME TO TIME WITHOUT NOTICE.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">No Warranties; Exclusion of Liability</h2>
            <p className="text-slate-600 leading-relaxed mb-4 font-semibold">
              OUR WEBSITE IS OPERATED BY <i>Hydro</i>FLOW USA ON AN "AS IS," "AS AVAILABLE" BASIS, WITHOUT REPRESENTATIONS OR 
              WARRANTIES OF ANY KIND. TO THE FULLEST EXTENT PERMITTED BY LAW, <i>Hydro</i>FLOW USA SPECIFICALLY DISCLAIMS ALL 
              WARRANTIES AND CONDITIONS OF ANY KIND, INCLUDING ALL IMPLIED WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS 
              FOR A PARTICULAR PURPOSE, TITLE AND NONINFRINGEMENT FOR OUR WEBSITE AND ANY CONTRACTS AND SERVICES YOU PURCHASE THROUGH IT.
            </p>
            <p className="text-slate-600 leading-relaxed mb-12">
              SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE 
              EXCLUSION MAY NOT APPLY TO YOU.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Indemnification</h2>
            <p className="text-slate-600 leading-relaxed mb-12">
              You agree to defend, indemnify and hold <i>Hydro</i>FLOW USA harmless from and against any and all claims, damages, 
              costs and expenses, including attorneys' fees, arising from or related to your use of our Website or any contracts, 
              products or services you purchase through it.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Product Disclaimer</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Reference to "the Company" shall be a reference to <i>Hydro</i>FLOW USA, a private company incorporated under the 
              laws of the State of Washington.
            </p>
            <ul className="list-disc pl-6 text-slate-600 leading-relaxed mb-12 space-y-2">
              <li>A Product sold or supplied is for use in residential and small commercial drinking water applications and should not be used for any other purpose.</li>
              <li>While the Product helps reduce certain contaminates and pathogens, it is not a product that removes 100% of contaminates and pathogens.</li>
              <li>A Product does not prevent disease of any kind.</li>
              <li>The Consumer of any Product is continually responsible for the thorough verification of the potential risks associated with, and suitability for the use, of the Product.</li>
              <li>The Company takes no responsibility for damage to any equipment, property or persons.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Warranty</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong>One-Year Limited Warranty:</strong> <i>Hydro</i>FLOW U.S.A., LLC ("<i>Hydro</i>FLOW") offers its customers ("you") a one-year limited warranty against 
              failure or defects in materials or workmanship in any <i>Hydro</i>FLOW product (the "Product") or its component parts, 
              subject to the terms and conditions set forth below. If the Product or any of its parts fails during the first year 
              of operation, <i>Hydro</i>FLOW or its representative will repair or replace the Product, free of charge. For this warranty 
              to apply, you will need to provide proof that the Product has been installed properly and before-and-after proof that 
              such Product is not operating as warranted.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              <strong>Additional Four-Year Limited Warranty (total of Five-Years):</strong> The Pearl, Pearl Plus, and <i>hs</i>40 units automatically 
              receive an additional four-year limited warranty. The <i>i</i> Range and <i>x</i> Range units require activation of the additional 
              four-year limited warranty. Please contact the authorized dealer or vendor from which you purchased the Product to activate 
              the additional warranty at no cost.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">What Is Not Covered</h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              This warranty does not cover damage to the Product caused by improper installation, a surge or disruption in power 
              (however caused), a water leak resulting from limescale or biofilm removal, misuse, abuse, or force majeure 
              (i.e., a flood or earthquake, etc.). Please be aware that water leaks from plumbing systems may result as a 
              consequence of limescale and biofilm removal. You are therefore advised and have a duty to periodically inspect 
              your plumbing systems to ensure that compression joints remain water-tight.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">How To Make A Claim & Get Service</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              A claim under this warranty must be submitted by email to <i>Hydro</i>FLOW or the authorized dealer or vendor from 
              which you purchased the Product, and such email must include:
            </p>
            <ul className="list-disc pl-6 text-slate-600 leading-relaxed mb-4 space-y-2">
              <li>A copy of the original receipt or proof of purchase of the Product</li>
              <li>Proof that the Product has been installed properly</li>
              <li>A written explanation of the issue(s) with the Product</li>
              <li>One or more pictures of the Product and surrounding area that displays such issue(s)</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-8">
              A <i>Hydro</i>FLOW representative will then review your claim and contact you within 10 business days to coordinate 
              the repair or replacement of the Product or to request additional information.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">Limitations</h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              Warranty claims are strictly limited to the value of the original purchase price or the repair or replacement cost. 
              <i>Hydro</i>FLOW shall not be responsible for water leaks or damage caused by the removal of limescale or biofilm. 
              <i>Hydro</i>FLOW will not be responsible for any consequential, incidental, indirect, special, punitive or other loss 
              or damage that may result from a product defect. <i>Hydro</i>FLOW reserves the right to determine the validity of 
              any claim and remedy in its sole discretion.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">Warning</h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              Biofilm release from potable water systems is an important attribute of the <i>Hydro</i>FLOW Product. As a precautionary 
              measure, it is recommended to use an adequate filtration device to prevent the released biofilm from potentially reaching 
              end-users. <i>Hydro</i>FLOW is not liable for any biological matter that reaches an end-user because an adequate filtration 
              device was not utilized.
            </p>

            <p className="text-slate-600 leading-relaxed mb-8 font-semibold">
              EXCEPT AS PROVIDED HEREIN, HYDROFLOW MAKES NO REPRESENTATION OR WARRANTY, EXPRESS OR IMPLIED (WHETHER WRITTEN, ORAL, 
              STATUTORY, OR ARISING BY PREVIOUS COURSE OF DEALING OR USAGE OF TRADE), INCLUDING WARRANTIES OF MERCHANTABILITY OR 
              FITNESS FOR A PARTICULAR PURPOSE. HYDROFLOW MAKES NO GUARANTEE OF PERFORMANCE OTHER THAN AS SET FORTH ABOVE. NO AGENT, 
              REPRESENTATIVE, OR EMPLOYEE OF HYDROFLOW IS AUTHORIZED TO MAKE ANY WARRANTIES OR GUARANTEES WITH RESPECT TO ITS PRODUCTS.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">How State Law Applies</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              This warranty is only valid in the United States of America. This warranty supersedes any applicable state laws to 
              the full extent permitted by law. You may have other rights depending on your state of residence.
            </p>
            <p className="text-slate-600 leading-relaxed mb-12 font-semibold">
              All Sales Are Final.
            </p>

            <div className="bg-slate-50 rounded-2xl p-8 mt-12">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Questions?</h3>
              <p className="text-slate-600 mb-6">
                If you have any questions about our Terms of Service, please contact us.
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