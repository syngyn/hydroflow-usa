import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Shield, Wrench, DollarSign, Leaf, Timer, Zap, Home } from 'lucide-react';

const benefits = [
  {
    icon: Wrench,
    title: 'Easy Installation',
    description: 'Simply clamp around your pipe - no plumbing changes needed'
  },
  {
    icon: Timer,
    title: 'Maintenance Free',
    description: 'Set it and forget it - no filters or parts to replace'
  },
  {
    icon: Home,
    title: 'Full Home Protection',
    description: 'Protects all fixtures, appliances and plumbing throughout'
  },
  {
    icon: Zap,
    title: 'Energy Savings',
    description: 'Helps reduce energy consumption by preventing scale buildup'
  },
  {
    icon: DollarSign,
    title: 'Pays for Itself',
    description: 'Typically pays for itself in less than a year'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: '100% chemical-free and environmentally safe'
  },
  {
    icon: Shield,
    title: 'Extended Equipment Life',
    description: 'Protects water heaters, dishwashers, and more'
  },
  {
    icon: Droplets,
    title: 'Better Than Softeners',
    description: 'No salt, no waste water, keeps healthy minerals'
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-cyan-50/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Why Choose HydroFLOW
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Benefits of Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-600"> Water Conditioners</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Experience the revolutionary technology that has protected homes and businesses 
            worldwide for over 20 years.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-cyan-100"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}