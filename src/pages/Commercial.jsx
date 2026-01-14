import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Building2, Hotel, Utensils, Dumbbell, Hospital, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const sectors = [
  { icon: Hotel, name: 'Hotels & Hospitality', description: 'Protect guest amenities and infrastructure' },
  { icon: Utensils, name: 'Restaurants & Food Service', description: 'Maintain equipment and improve efficiency' },
  { icon: Hospital, name: 'Healthcare Facilities', description: 'Ensure clean water for critical systems' },
  { icon: GraduationCap, name: 'Educational Institutions', description: 'Campus-wide water protection' },
  { icon: Building2, name: 'Office Buildings', description: 'Reduce maintenance costs' },
  { icon: Dumbbell, name: 'Fitness Centers', description: 'Protect pools, spas, and showers' }
];

export default function Commercial() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Commercial building"
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
              <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
                Commercial Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Commercial Water
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                  Treatment Solutions
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Reduce maintenance costs and improve efficiency in commercial buildings with 
                our proven water conditioning technology.
              </p>
              <Link to={createPageUrl('Contact')}>
                <Button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl shadow-cyan-500/30">
                  Get a Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-3xl p-8">
                <img 
                  src="https://hydroflow-usa.com/wp-content/uploads/2025/10/irange1.png"
                  alt="HydroFLOW i Range Industrial Unit"
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </motion.div>
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
            className="aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe 
              src="https://player.vimeo.com/video/1065125755?badge=0&autoplay=0&muted=0"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="HydroFLOW Commercial Video"
            />
          </motion.div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Industries We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Commercial Sectors
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-cyan-50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <sector.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{sector.name}</h3>
                <p className="text-slate-600">{sector.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HS40 Feature */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4">
                Featured Product
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                hs40 Light Commercial
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                The hs40 is our go-to solution for light commercial applications, including 
                pools, spas, restaurants, and small businesses.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Perfect for pools and spas',
                  'Restaurant and food service applications',
                  'Small commercial buildings',
                  'Professional-grade performance'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-end gap-4 mb-6">
                <span className="text-slate-400 line-through text-xl">$2,150</span>
                <span className="text-4xl font-bold text-slate-900">$1,990</span>
              </div>
              <Link to={createPageUrl('Products')}>
                <Button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full px-8 py-6 font-semibold">
                  View hs40
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/5caaa96fa_productrange201629.png"
                  alt="HydroFLOW hs40"
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* i Range Feature */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative lg:order-2"
            >
              <div className="bg-slate-50 rounded-3xl p-8 shadow-xl">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/bf3c60e7e_ProductRange2025standardunitsv3693.png"
                  alt="HydroFLOW i Range"
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-1"
            >
              <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4">
                Industrial Solution
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                <i>i</i> Range Industrial
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Heavy-duty industrial units designed for large commercial facilities, 
                manufacturing plants, and industrial applications.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Large commercial buildings',
                  'Manufacturing facilities',
                  'Cooling towers and boilers',
                  'Custom pipe sizes up to 40"'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mb-6">
                <span className="text-lg font-semibold text-slate-700">Contact for Custom Quote</span>
              </div>
              <Link to={createPageUrl('ProductIRange')}>
                <Button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full px-8 py-6 font-semibold">
                  View <i>i</i> Range
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
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
              Ready to Reduce Your Maintenance Costs?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Contact us for a customized commercial water treatment solution.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button className="bg-white text-cyan-600 hover:bg-cyan-50 rounded-full px-8 py-6 text-lg font-semibold">
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