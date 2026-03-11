import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ShieldAlert, Zap, TrendingDown, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Corrosion() {
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
              <ShieldAlert className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Corrosion Prevention Technology</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Reduce and Prevent Internal Pipe Corrosion
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              How Hydropath technology reduces corrosion in water systems
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                How Hydropath Technology Reduces Corrosion
              </h2>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Electrical current passing along a metal pipe creates a coaxial magnetic field, or "skin effect," interfering with the electro-chemical reaction necessary for corrosion to take place. Introducing Hydropath Technology to a water system <strong>inhibits internal pipe corrosion by up to 65%</strong>.
                </p>

                <div className="bg-gradient-to-br from-cyan-50 to-white rounded-3xl p-8 border border-cyan-100 my-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Microbial Influenced Corrosion (MIC)
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Microbial Influenced Corrosion (MIC) occurs when particular types of bacteria attack a pipe and cause pinholes. The most common type of MIC is sulfate reducing bacteria (SRB). <i>Hydro</i>FLOW aids in the <strong>reduction of MIC by up to 95%</strong>.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Explanation */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Corrosion Reduction Process
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Pipe with MIC</h3>
            <img 
              src="https://media.base44.com/images/public/6933444aa399ff1da59bbd5c/2320d7737_corrosion_bottom.png"
              alt="Pipe with MIC"
              className="w-3/4 mx-auto block rounded-xl"
            />
          </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-50 to-white rounded-3xl p-8 border border-cyan-100"
            >
              <div className="w-16 h-16 rounded-xl bg-cyan-500 flex items-center justify-center mb-6">
                <ShieldAlert className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Up to 65%</h3>
              <p className="text-slate-700">
                Reduction in internal pipe corrosion through the Hydropath signal's skin effect.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 border border-green-100"
            >
              <div className="w-16 h-16 rounded-xl bg-green-500 flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Up to 95%</h3>
              <p className="text-slate-700">
                Reduction in Microbial Influenced Corrosion (MIC) caused by sulfate reducing bacteria.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100"
            >
              <div className="w-16 h-16 rounded-xl bg-blue-500 flex items-center justify-center mb-6">
                <TrendingDown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Extended Life</h3>
              <p className="text-slate-700">
                Significantly extends the lifespan of pipes and equipment by preventing corrosion damage.
              </p>
            </motion.div>
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
              Protect Your Pipes from Corrosion
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Contact us today to learn more about how <i>Hydro</i>FLOW can reduce corrosion and extend the life of your water system.
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