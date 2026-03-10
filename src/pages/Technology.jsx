import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Droplets } from 'lucide-react';
import { Button } from "@/components/ui/button";

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
            className="text-center"
          >
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Patented Technology
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              How <i>Hydro</i>path Technology Works
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover the science behind chemical-free water treatment
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Science Behind the Technology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              The Science Behind the Technology
            </h2>
            
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                This process treats fluids by inducing a robust yet harmless signal of 150kHz throughout plumbing systems made of any material.
              </p>

              <p>
                The pipe, and/or the fluid inside of it, acts as a conduit which allows the signal to propagate. The induction of the signal prevents scale and biofilm from accumulating inside plumbing systems and gradually removes existing deposits. This preventative action significantly reduces energy, chemical, water and maintenance costs which extends the service life of equipment and pipes.
              </p>

              <p>
                The electric induction is performed by a special transducer connected to a ring of ferrites. Just as an electrical wire carries current from point A to B, the water inside the pipe acts as a conductor and carries the induced electric signal throughout the entire water system.
              </p>

              <p>
                The oscillating sine waves of the induced AC signal cause the positively and negatively–charged ions to form suspended crystals in the water, preventing them from attaching to rough surfaces. Testing shows that compared to other technologies, <i>Hydro</i>path Technology is many times more efficient and effective.
              </p>

              <p>
                <i>Hydro</i>FLOW USA has a full range of water conditioners providing a chemical–free solution for the harmful effects of scale, corrosion, bacteria, and algae. These durable water conditioners are fully encapsulated and water–resistant. Designed for ease of installation, the unit is simply built around the pipe and connected via the power supply unit. Various–sized units fit pipes of all sizes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Understanding the process that makes <i>Hydro</i>FLOW effective
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: '150kHz Signal Induction',
                description: 'A harmless electrical signal travels through your entire plumbing system, protecting all pipes regardless of material.'
              },
              {
                icon: Droplets,
                title: 'Crystal Suspension',
                description: 'Oscillating sine waves cause ions to form suspended crystals, preventing them from attaching to surfaces and forming scale.'
              },
              {
                icon: Shield,
                title: 'Preventative & Remedial',
                description: 'Stops new scale and biofilm formation while gradually removing existing deposits without chemicals or salt.'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-cyan-100 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Ready to Learn More?
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Discover how <i>Hydro</i>FLOW products can solve your water treatment challenges with this proven technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Products')}>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8 py-6">
                  View Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={createPageUrl('Contact')}>
                <Button variant="outline" className="rounded-full px-8 py-6 border-2">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}