import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Building2, Hotel, Utensils, Dumbbell, Hospital, GraduationCap, ArrowRight, CheckCircle2, DollarSign, Shield, Zap, Leaf } from 'lucide-react';
import { Button } from "@/components/ui/button";

const sectors = [
  { icon: Hotel, name: 'Hotels & Hospitality', description: 'Protect guest amenities and infrastructure' },
  { icon: Utensils, name: 'Restaurants & Food Service', description: 'Maintain equipment and improve efficiency' },
  { icon: Hospital, name: 'Healthcare Facilities', description: 'Ensure clean water for critical systems' },
  { icon: GraduationCap, name: 'Educational Institutions', description: 'Campus-wide water protection' },
  { icon: Building2, name: 'Office Buildings', description: 'Reduce maintenance costs' },
  { icon: Dumbbell, name: 'Fitness Centers', description: 'Protect pools, spas, and showers' }
];

const benefits = [
  {
    icon: DollarSign,
    title: 'Reduce Operating Costs',
    description: 'Significantly reduce chemical, water, and maintenance expenses'
  },
  {
    icon: Shield,
    title: 'Protect Equipment',
    description: 'Extend the service life of pipes, boilers, and cooling systems'
  },
  {
    icon: Zap,
    title: 'Improve Efficiency',
    description: 'Prevent scale buildup that reduces heat transfer efficiency'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Chemical-free solution that meets environmental regulations'
  }
];

export default function Commercial() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
        
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
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative rounded-3xl overflow-hidden flex items-center justify-center p-8"
              >
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/9f1053a47_irange1.png"
                  alt="<i>Hydro</i>FLOW <i>i</i> Range"
                  className="w-full max-w-lg h-auto object-contain drop-shadow-2xl"
                  style={{ transform: 'scale(0.78)' }}
                />
              </motion.div>
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

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Commercial Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why Choose <i>Hydro</i>FLOW for Commercial Applications
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
                className="flex gap-6 p-8 rounded-2xl bg-slate-50 hover:bg-cyan-50 transition-colors"
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

      {/* Sectors */}
      <section className="py-24 bg-slate-50">
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
                className="bg-white rounded-2xl p-8 hover:bg-cyan-50 transition-colors group"
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

      {/* Learn More Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Learn more about...
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'i-Range', link: 'ProductIRange' },
              { title: 'Cooling Towers', link: 'CoolingTowers' },
              { title: 'Energy Service Companies (ESCO)', link: 'ESCO' },
              { title: 'Drought Mitigation', link: 'DroughtMitigation' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={createPageUrl(item.link)}>
                  <Button 
                    variant="outline" 
                    className="w-full h-full py-6 text-left justify-start hover:bg-cyan-50 hover:border-cyan-500 hover:text-cyan-600 transition-all group"
                  >
                    <span className="font-semibold">{item.title}</span>
                    <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
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
                <i>hs</i>40 Light Commercial
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                The <i>hs</i>40 is our go-to solution for light commercial applications, including 
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
                  View<i>hs</i>40
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
      <section className="py-24 bg-slate-50">
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

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Commercial Case Studies
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link to={createPageUrl('CaseStudyDetail') + '?slug=hotels'}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-cyan-50 transition-colors cursor-pointer h-full"
              >
                <h3 className="font-bold text-slate-900 mb-4">Hotels</h3>
                <p className="text-slate-600 italic mb-4">"Guest satisfaction has improved and our maintenance costs have dropped significantly."</p>
                <p className="text-sm text-cyan-600 font-medium">Hospitality</p>
              </motion.div>
            </Link>

            <Link to={createPageUrl('CaseStudyDetail') + '?slug=disney-springs-parking-garage'}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-cyan-50 transition-colors cursor-pointer h-full"
              >
                <h3 className="font-bold text-slate-900 mb-4">Disney Springs Parking Garage</h3>
                <p className="text-slate-600 italic mb-4">"HydroFLOW has exceeded our expectations in protecting our HVAC systems."</p>
                <p className="text-sm text-cyan-600 font-medium">Large Commercial</p>
              </motion.div>
            </Link>

            <Link to={createPageUrl('CaseStudyDetail') + '?slug=restaurant'}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-cyan-50 transition-colors cursor-pointer h-full"
              >
                <h3 className="font-bold text-slate-900 mb-4">Restaurant</h3>
                <p className="text-slate-600 italic mb-4">"Our equipment runs more efficiently and our water quality has never been better."</p>
                <p className="text-sm text-cyan-600 font-medium">Food Service</p>
              </motion.div>
            </Link>
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