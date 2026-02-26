import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Anchor, Ship, Shield, Waves, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Waves,
    title: 'Scale Prevention',
    description: 'Prevent scale buildup in cooling systems and heat exchangers'
  },
  {
    icon: Ship,
    title: 'Marine-Grade Design',
    description: 'Built to withstand harsh maritime environments'
  },
  {
    icon: Anchor,
    title: 'Easy Installation',
    description: 'Simple retrofit for existing vessels and new builds'
  },
  {
    icon: Shield,
    title: 'Mineral Deposit Prevention',
    description: 'Prevents the buildup of mineral deposits in the vessels water systems'
  }
];

const applications = [
  'Commercial Vessels',
  'Yachts & Pleasure Craft',
  'Fishing Boats',
  'Offshore Platforms',
  'Marine Cooling Systems',
  'Engine Cooling',
  'HVAC Systems'
];

export default function Marine() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80"
            alt="Marine"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-4">
                Marine Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Marine Water
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-200">
                  Treatment Solutions
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Protect boats and marine equipment from scale and corrosion with our 
                specialized marine-grade water conditioning technology.
              </p>
              <Link to={createPageUrl('Contact')}>
                <Button className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl shadow-indigo-500/30">
                  Get a Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/b3cfa299e_hfmarine.png"
                alt="HydroFLOW Marine Unit"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Marine Benefits
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
                className="flex gap-6 p-8 rounded-2xl bg-slate-50 hover:bg-indigo-50 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
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

      {/* Videos Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Videos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              See Hydropath Marine in Action
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Video 1 - Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="aspect-video bg-slate-200">
                <iframe
                  src="https://player.vimeo.com/video/1065131742"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Hydropath Marine Introduction"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  <i>Hydro</i>path Marine Overview
                </h3>
                <p className="text-slate-600">
                  Learn about the Hydropath Marine (HM) range designed specifically for marine vessel water treatment.
                </p>
              </div>
            </motion.div>

            {/* Video 3 - Installation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="aspect-video bg-slate-200">
                <iframe
                  src="https://player.vimeo.com/video/148407238"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Hydropath Marine Installation"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Installation Guide
                </h3>
                <p className="text-slate-600">
                  Step-by-step installation video showing how to easily install Hydropath Marine units on vessels.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-4">
                Applications
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Marine Applications
              </h2>
              <p className="text-lg text-indigo-100/80 mb-8">
                Our <i>hm</i> Range is specifically designed for marine applications, 
                built with marine-grade materials to withstand the harshest conditions.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {applications.map((app) => (
                  <div key={app} className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                    {app}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80"
                alt="Marine vessel"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* HM Range */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">
              hm Range
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Hydropath Marine
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Specialized units designed specifically for marine environments, 
              certified for use in demanding maritime applications.
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Features</h3>
                <ul className="space-y-3">
                  {[
                    'Marine-grade stainless steel construction',
                    'IP68 waterproof rating',
                    'Vibration and shock resistant',
                    'Wide operating temperature range',
                    'Easy installation and maintenance',
                    'Certified for marine applications'
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img 
                  src="https://hydroflow-usa.com/wp-content/uploads/2025/10/hm-Range1-1400x788.png"
                  alt="hm Range Marine Unit"
                  className="w-full max-w-sm mx-auto"
                />
              </div>
            </div>
            <div className="mt-8 text-center flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Contact')}>
                <Button className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white rounded-full px-8 py-6 font-semibold">
                  Request Marine Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="https://hydroflow-usa.com/wp-content/uploads/2024/06/Marine-Brochure.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full px-8 py-6 font-semibold border-2">
                  Hydropath Marine Brochure
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Marine Case Studies
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link to={createPageUrl('CaseStudyDetail') + '?slug=superyacht'}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-indigo-50 transition-colors cursor-pointer h-full"
              >
                <h3 className="font-bold text-slate-900 mb-4">Superyacht</h3>
                <p className="text-slate-600 italic mb-4">"The HydroFLOW system has eliminated scale in our fresh water generators and UV sterilizers."</p>
                <p className="text-sm text-indigo-600 font-medium">Luxury Yacht</p>
              </motion.div>
            </Link>

            <Link to={createPageUrl('CaseStudyDetail') + '?slug=commercial-fishing-fleet'}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-indigo-50 transition-colors cursor-pointer h-full"
              >
                <h3 className="font-bold text-slate-900 mb-4">Commercial Fishing Fleet</h3>
                <p className="text-slate-600 italic mb-4">"Our cooling systems stay cleaner and our maintenance costs have dropped significantly."</p>
                <p className="text-sm text-indigo-600 font-medium">Commercial Vessel</p>
              </motion.div>
            </Link>

            <Link to={createPageUrl('CaseStudyDetail') + '?slug=offshore-platform'}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-indigo-50 transition-colors cursor-pointer h-full"
              >
                <h3 className="font-bold text-slate-900 mb-4">Offshore Platform</h3>
                <p className="text-slate-600 italic mb-4">"HydroFLOW has proven reliable in the harshest marine environments."</p>
                <p className="text-sm text-indigo-600 font-medium">Offshore</p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Protect Your Vessel?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Contact us for a customized marine water treatment solution.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-full px-8 py-6 text-lg font-semibold">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}