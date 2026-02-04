import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Bug, Zap, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Bio() {
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
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 rounded-full px-6 py-3 mb-6">
              <Bug className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Biological Control Technology</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Remove and Prevent Algae and Biofouling
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              How Hydropath technology affects bacteria and algae
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Bacteria and/or algae that pass through the water conditioner's ring of ferrites become charged by the Hydropath signal. This charge forms a hydration layer of pure water around the cell. <strong>Osmosis</strong> forces water into the bacteria and/or algae, creating <strong>osmotic pressure</strong>, which ruptures the cell membrane and causes the cell to perish.
              </p>

              <div className="bg-gradient-to-br from-cyan-50 to-white rounded-3xl p-8 border border-cyan-100 mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Other Bacteria/Algae Deactivation Mechanisms:</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Cell Lysis</h4>
                    <p className="text-slate-700">
                      A process in which a cell is broken down or destroyed as a result of some external force or condition. It is believed the Hydropath signal encourages this phenomenon.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Irreversible Electroporation</h4>
                    <p className="text-slate-700">
                      A novel procedure that uses discreet probes to deliver high-voltage localized electric current to induce cell death without thermal-induced coagulative necrosis. The Hydropath signal is believed to cause this to occur in single-cell waterborne pathogens.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed">
                In addition, as the Hydropath signal passes along a pipe, it disrupts the bacteria and/or algae clinging to inner surfaces, gradually releasing biofilm over time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bacteria and Algae Eradication Process */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Bacteria and Algae Eradication
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="mb-4">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/538a371ae_bacteria1.png"
                  alt="Bacterium passing through HydroFLOW"
                  className="w-full rounded-xl"
                />
              </div>
              <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold mb-3">1</div>
              <p className="text-slate-700">
                A bacterium passing through the <i>Hydro</i>FLOW unit becomes charged.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="mb-4">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/4115f043d_bacteria2.png"
                  alt="Water molecules attracted to bacterium"
                  className="w-full rounded-xl"
                />
              </div>
              <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold mb-3">2</div>
              <p className="text-slate-700">
                Water molecules are attracted to the charged bacterium thus creating a wetting layer of pure water.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="mb-4">
                <img 
                  src="https://hydroflow-usa.com/assets/userfiles/images/Bio/img3.jpg"
                  alt="Osmosis drawing water into bacterium"
                  className="w-full rounded-xl"
                />
              </div>
              <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold mb-3">3</div>
              <p className="text-slate-700">
                Osmosis draws the pure water into the bacterium.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="mb-4">
                <img 
                  src="https://hydroflow-usa.com/assets/userfiles/images/Bio/img4.jpg"
                  alt="Bacterium bursts and perishes"
                  className="w-full rounded-xl"
                />
              </div>
              <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold mb-3">4</div>
              <p className="text-slate-700">
                The osmotic pressure built inside the bacterium causes it to burst and perish.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Biofilm Removal */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Removal of Biofilm
              </h2>
            </motion.div>

            <div className="bg-gradient-to-br from-cyan-50 to-white rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://hydroflow-usa.com/assets/userfiles/images/Bio/img5.jpg"
                    alt="Biofilm removal with Hydropath signal"
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>
                <div>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Bacteria and algae can attach to pipe and equipment surfaces forming a layer known as biofilm. Over time, the Hydropath signal causes the release of biofilm by agitating the colonies. Released biofilm is flushed or filtered out of the system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Protect Your Water System from Bacteria and Algae
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Contact us today to learn more about how <i>Hydro</i>FLOW can eliminate biofilm and protect against waterborne pathogens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Contact')}>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8 py-6">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={createPageUrl('Products')}>
                <Button variant="outline" className="rounded-full px-8 py-6 border-2">
                  View Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}