import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Droplets, TrendingDown, DollarSign, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: TrendingDown,
    title: 'Reduced Backwashing',
    description: 'Backwashing frequency reduced by a factor of three'
  },
  {
    icon: Droplets,
    title: 'Water Savings',
    description: 'Water used in each backwash cycle reduced by up to 50%'
  },
  {
    icon: DollarSign,
    title: 'Cost Savings',
    description: 'Lower water usage and reduced maintenance downtime'
  },
  {
    icon: Wrench,
    title: 'Enhanced Efficiency',
    description: 'Improved filtration efficiency through particle flocculation'
  }
];

export default function Filtration() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://hydroflow-usa.com/wp-content/uploads/2024/05/image-5.jpg"
            alt="Water Filtration"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Hydropath Technology
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Improve Water Filtration
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                & Purification
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              How Hydropath Technology enhances filtration efficiency
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-slate-700 leading-relaxed">
                The <i>Hydro</i>FLOW water conditioners flock suspended particles that pass through the ring 
                of ferrites, thus causing them to filter out of water systems more efficiently. The increased 
                filtration efficiency can reduce backwashing by a factor of three, and the amount of water used 
                in each backwash cycle is reduced by up to 50%.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mt-6">
                Reduced backwashing means cost savings in water usage and maintenance downtime. In some wastewater 
                applications, <i>Hydro</i>FLOW can assist with polymer reduction and increased cake dryness.
              </p>
            </div>

            {/* Diagram */}
            <div className="bg-slate-50 rounded-2xl p-8 mb-12">
              <img 
                src="https://hydroflow-usa.com/assets/userfiles/images/Filtration/filtration_bottom.png"
                alt="How Hydropath technology enhances filtration efficiency"
                className="w-full max-w-3xl mx-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Key Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Filtration Advantages
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-8 rounded-2xl bg-white hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
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
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              See It In Action
            </h2>
            <p className="text-lg text-slate-600">
              Watch how flocculation works with Hydropath technology
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-video rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
          >
            <iframe 
              src="https://player.vimeo.com/video/292540645?badge=0&autoplay=0&muted=0"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Flocculation Animation"
            />
          </motion.div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
                Applications
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Where Filtration Enhancement Works
              </h2>
              <p className="text-lg text-slate-400 mb-8">
                <i>Hydro</i>FLOW technology improves filtration efficiency across various water treatment applications, 
                from industrial processes to wastewater management.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span>Industrial water filtration systems</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span>Wastewater treatment facilities</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span>Municipal water purification plants</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span>Process water treatment</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-3xl p-8">
                <img 
                  src="https://hydroflow-usa.com/assets/userfiles/images/Filtration/filtration_bottom.png"
                  alt="Filtration Process"
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Improve Your Filtration Efficiency
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Discover how <i>Hydro</i>FLOW can enhance your water filtration system's performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Contact')}>
                <Button className="bg-white text-cyan-600 hover:bg-cyan-50 rounded-full px-8 py-6 text-lg font-semibold">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={createPageUrl('Products')}>
                <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold">
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