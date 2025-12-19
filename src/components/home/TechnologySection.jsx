import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Waves, Shield, Droplets, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SignalIcon from '@/components/SignalIcon';

const techFeatures = [
  {
    icon: SignalIcon,
    title: 'Signal Induction',
    description: 'Induces a harmless 150kHz signal throughout your entire plumbing system'
  },
  {
    icon: Shield,
    title: 'Scale Prevention',
    description: 'Creates suspended crystals that prevent scale from forming on surfaces'
  },
  {
    icon: Droplets,
    title: 'Biofilm Reduction',
    description: 'Helps reduce bacteria and biofilm buildup in pipes and fixtures'
  }
];

export default function TechnologySection() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Patented Technology
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              How Hydropath
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                Technology Works
              </span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              Unlike other water treatment methods, Hydropath Technology induces a unique electrical 
              signal that travels throughout your entire water system, providing comprehensive 
              protection without chemicals or salt.
            </p>

            <div className="space-y-6 mb-10">
              {techFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link to={createPageUrl('Technology')}>
              <Button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full px-8 py-6 font-semibold shadow-lg shadow-cyan-500/25 group">
                Learn More About Technology
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/503ecf4b2_signal.png"
              alt="Hydropath Signal Technology"
              className="w-full max-w-[100px] h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}