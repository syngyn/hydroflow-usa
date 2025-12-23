import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Factory, Shield, DollarSign, Leaf, Zap, ArrowRight, CheckCircle2, FileText, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
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

      {/* Case Study */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Case Study
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Industrial Success Story
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <Badge className="bg-cyan-100 text-cyan-700 hover:bg-cyan-100">
                    Food Processing
                  </Badge>
                  <Badge variant="outline">i150 Unit</Badge>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Water Bath Cooling System
                </h3>
                
                <p className="text-slate-600 mb-6">
                  A polystyrene plastics processing facility in the U.S. Northeast successfully 
                  reduced biofouling challenges and chemical usage with HydroFLOW i150.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900">75% Chlorine Reduction</p>
                      <p className="text-sm text-slate-600">Significant chemical savings with no algae growth</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900">50% Increase in Operating Conductivity</p>
                      <p className="text-sm text-slate-600">From 2,000 to 3,000 µS/cm without scale formation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900">Improved Filtration Efficiency</p>
                      <p className="text-sm text-slate-600">Capturing more solids including polystyrene fines</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900">Reduced Water Consumption</p>
                      <p className="text-sm text-slate-600">Lower blow-down frequency and make-up water usage</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/cca8ce8c8_HydroFLOWCaseStudy-WaterBathCoolingSystem-2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-full py-6">
                      <Download className="w-4 h-4 mr-2" />
                      Download Full Case Study
                    </Button>
                  </a>
                  <Link to={createPageUrl('Contact')} className="flex-1">
                    <Button variant="outline" className="w-full rounded-full py-6">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="bg-slate-100 p-8 md:p-12 flex items-center justify-center">
                <div className="space-y-4">
                  <img 
                    src="https://hydroflow-usa.com/wp-content/uploads/2025/10/irange1.png"
                    alt="HydroFLOW i150"
                    className="w-full max-w-sm mx-auto"
                  />
                  <div className="bg-white rounded-xl p-6 text-center">
                    <p className="text-sm text-slate-500 mb-1">Installed</p>
                    <p className="text-lg font-semibold text-slate-900">June 2025</p>
                    <p className="text-sm text-slate-500 mt-3 mb-1">Status</p>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                      Active & Successful
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-24 bg-white">
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
              className="bg-slate-50 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-2">I Range</h3>
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
              <Link to={createPageUrl('Contact')}>
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-full py-6">
                  Request Quote
                </Button>
              </Link>
            </motion.div>

            {/* HM Range */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-50 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-2">HM Range</h3>
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
              <Link to={createPageUrl('Contact')}>
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-full py-6">
                  Request Quote
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