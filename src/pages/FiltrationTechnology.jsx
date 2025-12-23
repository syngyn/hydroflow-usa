import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Filter, TrendingDown, Droplets, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function FiltrationTechnology() {
  const benefits = [
    'Flocks suspended particles for more efficient filtration',
    'Reduces backwashing by a factor of three',
    'Reduces water usage in backwash cycles by up to 50%',
    'Cost savings in water usage and maintenance',
    'Reduced maintenance downtime',
    'Assists with polymer reduction in wastewater applications'
  ];

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
              <Filter className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Filtration Enhancement Technology</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Improve Water Filtration & Purification
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              How Hydropath Technology enhances filtration efficiency
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The <i>Hydro</i>FLOW water conditioners flock suspended particles that pass through the ring of ferrites, thus causing them to filter out of water systems more efficiently. The increased filtration efficiency can <strong>reduce backwashing by a factor of three</strong>, and the amount of water used in each backwash cycle is <strong>reduced by up to 50%</strong>.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Reduced backwashing means cost savings in water usage and maintenance downtime. In some wastewater applications, <i>Hydro</i>FLOW can assist with polymer reduction and increased cake dryness.
              </p>
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
              How Hydropath Enhances Filtration
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <img 
                src="https://hydroflow-usa.com/assets/userfiles/images/Filtration/filtration_bottom.png"
                alt="How Hydropath technology enhances filtration efficiency"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Flocculation Process
            </h2>
            <p className="text-xl text-slate-600">
              See how Hydropath technology causes particles to clump together for easier filtration
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900" style={{ paddingBottom: '56.25%' }}>
              <iframe 
                src="https://player.vimeo.com/video/295816889?h=96a84de68a&title=0&byline=0&portrait=0"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Main Benefits
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700 font-medium">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-50 to-white rounded-3xl p-8 border border-cyan-100 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-cyan-500 flex items-center justify-center mx-auto mb-6">
                <TrendingDown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-3">3x</h3>
              <p className="text-slate-700">
                Reduction in backwashing frequency
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-blue-500 flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-3">50%</h3>
              <p className="text-slate-700">
                Reduction in water usage per backwash cycle
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 border border-green-100 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-green-500 flex items-center justify-center mx-auto mb-6">
                <Filter className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-3">Higher</h3>
              <p className="text-slate-700">
                Filtration efficiency through flocculation
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
              Enhance Your Filtration System
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Contact us today to learn more about how <i>Hydro</i>FLOW can improve your water filtration efficiency and reduce operational costs.
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