import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Factory, Shield, DollarSign, Leaf, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

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

const applications = [
  'Cooling Towers',
  'Heat Exchangers',
  'Boilers & Steam Systems',
  'Chillers',
  'Manufacturing Processes',
  'Food & Beverage Production',
  'HVAC Systems',
  'Wastewater Treatment'
];

export default function Industrial() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&q=80"
            alt="Industrial facility"
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
                Industrial Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Industrial & Commercial
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                  Water Treatment
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Heavy-duty water conditioning solutions for manufacturing, processing, 
                and large commercial facilities.
              </p>
              <Link to={createPageUrl('Contact')}>
                <Button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl shadow-cyan-500/30">
                  Request a Quote
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
              <div className="relative rounded-3xl overflow-hidden p-8">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/f9b02b780_landing-industrial.png"
                  alt="Industrial facility"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative">
                  <img 
                    src="https://hydroflow-usa.com/wp-content/uploads/2025/10/irange1.png"
                    alt="HydroFLOW i Range Industrial Unit"
                    className="w-full max-w-md mx-auto"
                  />
                </div>
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
              src="https://player.vimeo.com/video/706623726?badge=0&autoplay=0&muted=0"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="HydroFLOW Industrial Video"
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
              Industrial Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why Choose <i>Hydro</i>FLOW for Industrial Applications
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
                Industrial Applications
              </h2>
              <p className="text-lg text-slate-400 mb-8">
                Our industrial-grade units are designed for the most demanding applications, 
                providing reliable protection for critical water systems.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {applications.map((app) => (
                  <div key={app} className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    {app}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-3xl p-8">
                <img 
                  src="https://hydroflow-usa.com/wp-content/uploads/2025/10/irange1.png"
                  alt="Industrial HydroFLOW Unit"
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </motion.div>
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
              { title: 'Wastewater', link: 'WastewaterStruvite' },
              { title: 'Food and Beverage', link: 'FoodBeverage' },
              { title: 'Plastic Injection Molding', link: 'PlasticManufacturing' },
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

      {/* Product Range */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Product Range
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Industrial Product Lines
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* I Range */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="mb-6">
                <img 
                  src="https://hydroflow-usa.com/wp-content/uploads/2025/10/irange1.png"
                  alt="HydroFLOW I Range"
                  className="w-full max-w-xs mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2"><i>i</i> Range</h3>
              <p className="text-cyan-600 font-medium mb-4">Industrial Series</p>
              <p className="text-slate-600 mb-6">
                Designed for medium to large industrial applications including cooling towers, 
                boilers, and manufacturing processes.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  Pipe sizes from 2" to 40"
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  Heavy-duty construction
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  Custom solutions available
                </li>
              </ul>
              <Link to={createPageUrl('ProductIRange')}>
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-full py-6">
                  View Details
                </Button>
              </Link>
            </motion.div>

            {/* HM Range */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="mb-6">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/95715f364_hfmarine.png"
                  alt="HydroFLOW HM Range Marine"
                  className="w-full max-w-xs mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2"><i>hm</i> Range</h3>
              <p className="text-cyan-600 font-medium mb-4">Hydropath Marine</p>
              <p className="text-slate-600 mb-6">
                Specialized units for marine and offshore applications, built to withstand 
                harsh maritime environments.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  Marine-grade materials
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  Corrosion resistant
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  Certified for marine use
                </li>
              </ul>
              <Link to={createPageUrl('ProductHMRange')}>
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-full py-6">
                  View Details
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
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Contact our industrial specialists for a customized water treatment solution.
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