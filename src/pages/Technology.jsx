import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Waves, Shield, Droplets, Zap, ArrowRight, CheckCircle2, PlayCircle, Radio, Gem, RefreshCw } from 'lucide-react';
import { Button } from "@/components/ui/button";

const howItWorks = [
  {
    step: '01',
    title: 'Signal Induction',
    description: 'The HydroFLOW unit is installed around your pipe and induces a unique electrical signal of 150kHz.'
  },
  {
    step: '02',
    title: 'Signal Propagation',
    description: 'The signal travels throughout your entire plumbing system, regardless of pipe material.'
  },
  {
    step: '03',
    title: 'Crystal Formation',
    description: 'Minerals in the water form suspended crystals instead of hard scale deposits.'
  },
  {
    step: '04',
    title: 'Continuous Protection',
    description: 'The signal works 24/7 to prevent new scale and gradually remove existing buildup.'
  }
];

const benefits = [
  {
    icon: Shield,
    title: 'Scale Prevention',
    description: 'Prevents limescale from forming on pipes, fixtures, and appliances',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Droplets,
    title: 'Biofilm Reduction',
    description: 'Helps reduce bacteria and biofilm buildup in water systems',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Zap,
    title: 'Improved Filtration',
    description: 'Enhances the effectiveness of existing filtration systems',
    color: 'from-violet-500 to-violet-600'
  },
  {
    icon: Waves,
    title: 'Corrosion Protection',
    description: 'Helps protect pipes and equipment from corrosion damage',
    color: 'from-emerald-500 to-emerald-600'
  }
];

const comparisons = [
  { feature: 'Chemical-free operation', hydroflow: true, softener: false },
  { feature: 'Maintenance-free', hydroflow: true, softener: false },
  { feature: 'Keeps healthy minerals', hydroflow: true, softener: false },
  { feature: 'No salt required', hydroflow: true, softener: false },
  { feature: 'No wastewater', hydroflow: true, softener: false },
  { feature: 'Easy DIY installation', hydroflow: true, softener: false },
  { feature: 'Full system protection', hydroflow: true, softener: true },
  { feature: 'Low operating cost', hydroflow: true, softener: false }
];

export default function Technology() {
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
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Patented Technology
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              How Hydropath Technology Works
            </h1>
            <p className="text-xl text-slate-300">
              Discover the revolutionary technology that treats water without chemicals, 
              salt, or maintenance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4">
              The Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              How It Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The difference between Hydropath Technology and other physical water conditioning 
              technologies is the induced signal and its ability to continuously condition the 
              liquid solution throughout an entire system.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => {
              const icons = [null, Radio, Gem, RefreshCw];
              const Icon = icons[index];

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {index === 0 && (
                    <div className="mb-4 flex justify-center">
                      <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-cyan-100 to-cyan-50 flex items-center justify-center">
                        <svg 
                          viewBox="0 0 400 200" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-16 h-16"
                        >
                          <defs>
                            <linearGradient id="signalGradientTech" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#06b6d4" stopOpacity="1" />
                              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
                            </linearGradient>
                          </defs>
                          <path 
                            d="M10 100 Q20 20 30 100 T50 100 Q60 50 70 100 T90 100 Q100 65 110 100 T130 100 Q140 75 150 100 T170 100 Q180 82 190 100 T210 100 Q220 87 230 100 T250 100 Q260 90 270 100 T290 100 Q300 93 310 100 T330 100 Q340 95 350 100 T370 100 Q380 97 390 100" 
                            stroke="url(#signalGradientTech)" 
                            strokeWidth="16" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                            fill="none"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                  {index !== 0 && Icon && (
                    <div className="mb-4 flex justify-center">
                      <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-cyan-100 to-cyan-50 flex items-center justify-center">
                        <Icon className="w-16 h-16 text-cyan-500" />
                      </div>
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-8 right-0 w-16 h-0.5 bg-gradient-to-r from-cyan-200 to-transparent" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Explanation */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                The Science Behind the Technology
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  This process treats fluids by inducing a robust yet harmless signal of 150kHz 
                  throughout plumbing systems made of any material. The pipe, and/or the fluid 
                  inside of it, acts as a conduit which allows the signal to propagate.
                </p>
                <p>
                  The electric induction is performed by a special transducer connected to a ring 
                  of ferrites. Just as an electrical wire carries current from point A to B, the 
                  water inside the pipe acts as a conductor and carries the induced electric signal 
                  throughout the entire water system.
                </p>
                <p>
                  The oscillating sine waves of the induced AC signal cause the positively and 
                  negatively-charged ions to form suspended crystals in the water, preventing them 
                  from attaching to rough surfaces.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-900"
            >
              <img 
                src="https://hydroflow-usa.com/wp-content/uploads/2024/05/technology.jpg"
                alt="Hydropath Technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                  <PlayCircle className="w-12 h-12 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Applications
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              What Hydropath Technology Does
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
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-cyan-100 transition-all"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Comparison
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              HydroFLOW vs Water Softeners
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-3 gap-4 p-6 bg-slate-50 border-b font-semibold">
              <div className="text-slate-900">Feature</div>
              <div className="text-center text-cyan-600">HydroFLOW</div>
              <div className="text-center text-slate-500">Water Softener</div>
            </div>
            {comparisons.map((row, index) => (
              <div 
                key={row.feature}
                className={`grid grid-cols-3 gap-4 p-6 ${index !== comparisons.length - 1 ? 'border-b' : ''}`}
              >
                <div className="text-slate-700">{row.feature}</div>
                <div className="flex justify-center">
                  {row.hydroflow ? (
                    <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-slate-200" />
                  )}
                </div>
                <div className="flex justify-center">
                  {row.softener ? (
                    <CheckCircle2 className="w-6 h-6 text-slate-400" />
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-slate-200" />
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Upgrade Your Water System?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Experience the benefits of chemical-free water conditioning technology.
            </p>
            <Link to={createPageUrl('Products')}>
              <Button className="bg-white text-cyan-600 hover:bg-cyan-50 rounded-full px-8 py-6 text-lg font-semibold">
                Shop Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}