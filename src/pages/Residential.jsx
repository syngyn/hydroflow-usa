import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Home, Shield, Wrench, DollarSign, Leaf, Timer, ArrowRight, Check, PlayCircle, Zap, Droplet } from 'lucide-react';
import { Button } from "@/components/ui/button";

const benefits = [
  { icon: Wrench, title: 'Easy to install', description: 'No plumbing changes needed' },
  { icon: Timer, title: 'Maintenance free', description: 'Set it and forget it' },
  { icon: Home, title: 'Full home protection', description: 'Protects all fixtures and appliances' },
  { icon: Shield, title: 'Extends appliance life', description: 'Prevents scale damage' },
  { icon: DollarSign, title: 'Pays for itself', description: 'In less than a year' },
  { icon: Leaf, title: 'Eco-friendly', description: '100% chemical-free' },
  { icon: Zap, title: 'Energy Efficient', description: 'Costs around $2/year to operate' },
  { icon: Droplet, title: 'Doesn\'t change the chemical composition of the water', description: 'Keep the healthy calcium without the problems' },
  { icon: Home, title: 'Does not take up valuable space', description: 'Compact installation' }
];

const caseStudies = [
  {
    title: 'Residential Tower',
    quote: 'Not only had the HydroFLOW units prevented any scale from accumulating, but had actually reversed the scale that had built up prior to the installation.',
    type: 'Property Management'
  },
  {
    title: 'Product Evaluation – Tankless Boiler',
    quote: 'The test clearly showed that HydroFLOW was effective even in very hard water conditions, and kept the pipes completely clear.',
    type: 'Independent Testing'
  },
  {
    title: 'Residential Water Heater',
    quote: 'The HydroFLOW unit was not only able to stop new scale from forming but also cleaned up the existing scale buildup from the water heater and shower heads.',
    type: 'Homeowner'
  }
];

export default function Residential() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
            alt="Modern home"
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
                Residential Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                <i>Hydro</i><span className="text-cyan-400">FLOW</span>
                <span className="block text-3xl md:text-4xl mt-2 font-light">
                  Residential Water Conditioner
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Residential homes in hard water areas suffer from scale accumulation on shower heads, 
                pipes and appliances. <i>Hydro</i>FLOW provides the perfect solution.
              </p>
              <Link to={createPageUrl('Products')}>
                <Button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl shadow-cyan-500/30">
                  Shop Residential Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://hydroflow-usa.com/wp-content/uploads/2024/10/pearl-plus-grey-background-799x800.webp"
                alt="<i>Hydro</i>FLOW Pearl Plus"
                className="w-full h-full object-contain bg-white/10 backdrop-blur-sm p-8"
              />
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
              src="https://player.vimeo.com/video/1065128024?badge=0&autoplay=0&muted=0"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="HydroFLOW Residential Video"
            />
          </motion.div>
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
              Why Choose <i>Hydro</i>FLOW
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Benefits of a <i>Hydro</i>FLOW Water Conditioner
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-cyan-50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Our Products
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Choose Your Solution
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Pearl */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="h-48 flex items-center justify-center mb-6">
                <img 
                  src="https://hydroflow-usa.com/wp-content/uploads/2024/08/pearl-grey-background-800x800.jpg"
                  alt="HydroFLOW Pearl"
                  className="h-full w-auto object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Pearl</h3>
              <p className="text-cyan-600 font-medium mb-2">For apartments, townhomes and condos</p>
              <p className="text-slate-600 mb-4">Up to 1,000 sq ft</p>
              <div className="mb-6">
                <span className="text-slate-400 line-through">$425</span>
                <span className="text-3xl font-bold text-slate-900 ml-2">$295</span>
              </div>
              <Link to={createPageUrl('Products')}>
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-full py-6">
                  Select Pearl
                </Button>
              </Link>
            </motion.div>

            {/* Pearl Plus */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all ring-2 ring-cyan-500 relative"
            >
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
              <div className="h-48 flex items-center justify-center mb-6 mt-4">
                <img 
                  src="https://hydroflow-usa.com/wp-content/uploads/2024/10/pearl-plus-grey-background-799x800.webp"
                  alt="<i>Hydro</i>FLOW Pearl Plus"
                  className="h-full w-auto object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Pearl Plus</h3>
              <p className="text-cyan-600 font-medium mb-2">For standard sized homes</p>
              <p className="text-slate-600 mb-4">Up to 3,000 sq ft</p>
              <div className="mb-6">
                <span className="text-slate-400 line-through">$695</span>
                <span className="text-3xl font-bold text-slate-900 ml-2">$495</span>
              </div>
              <Link to={createPageUrl('Products')}>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full py-6">
                  Select Pearl Plus
                </Button>
              </Link>
            </motion.div>

            {/* hs40 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="h-48 flex items-center justify-center mb-6">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/5caaa96fa_productrange201629.png"
                  alt="HydroFLOW hs40"
                  className="h-full w-auto object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">hs40</h3>
              <p className="text-cyan-600 font-medium mb-2">For pools and spas</p>
              <p className="text-slate-600 mb-4">Commercial grade power</p>
              <div className="mb-6">
                <span className="text-slate-400 line-through">$2,150</span>
                <span className="text-3xl font-bold text-slate-900 ml-2">$1,990</span>
              </div>
              <Link to={createPageUrl('ProductHS40')}>
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-full py-6">
                  Select hs40
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
              Case Studies
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8"
              >
                <h3 className="font-bold text-slate-900 mb-4">{study.title}</h3>
                <p className="text-slate-600 italic mb-4">"{study.quote}"</p>
                <p className="text-sm text-cyan-600 font-medium">{study.type}</p>
              </motion.div>
            ))}
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
              Ready to Protect Your Home?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Join thousands of homeowners who have eliminated scale problems with <i>Hydro</i>FLOW.
            </p>
            <Link to={createPageUrl('Products')}>
              <Button className="bg-white text-cyan-600 hover:bg-cyan-50 rounded-full px-8 py-6 text-lg font-semibold">
                Shop Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}