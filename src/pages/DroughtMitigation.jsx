import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Droplets, Building2, DollarSign } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const industries = [
  'Facility and Building Management',
  'Manufacturing',
  'Agriculture',
  'Restaurants',
  'Hotels',
  'Power Generation',
  'Car Washes'
];

const coolingTowerResults = [
  'Reduces the use of anti-scalant, anti-corrosive and biocide chemicals',
  'Prevents new scale accumulation and gradually removes existing scale',
  'Lessens bleed/blow-down water usage by gradually increasing conductivity',
  'Decreases bacteria in the recirculating water',
  'Reduces biofilm accumulation inside pipes, heat-exchangers, and infrastructure',
  'Increases the cooling system\'s overall efficiency by reducing scale and biofilm deposits',
  'Extends service life of equipment'
];

const caseStudies = [
  {
    title: 'Fortune 100 Company – 1,000 Ton Cooling Tower',
    location: 'Houston, Texas (Gold LEED Building)',
    results: [
      '85% blow-down water reduction (greatly exceeded the 50% goal)',
      '75% chemical reduction',
      '50% reduction in maintenance frequency',
      '10% reduction in energy consumption by cooling towers and chillers'
    ],
    savings: '$73,400.00 annual savings'
  },
  {
    title: 'Beach Club Hotel – 500 Ton Cooling Tower',
    location: 'Oahu, Hawaii',
    results: [
      'Blow down was reduced by 50%',
      'Scale accumulation stopped as soon as <i>Hydro</i>FLOW was installed',
      'Antiscalant and Anti-corrosive chemicals were completely discontinued after 1.5 months',
      'Existing scale and biofilm deposits were gradually removed',
      'After reducing the biocide chemical by 75%, the total bacteria counts continued to be minimal',
      'The efficiency of the chillers was maintained (no scale and biofilm accumulation in chiller tubes)'
    ],
    roi: 'One-year Return on Investment (ROI)'
  },
  {
    title: 'Municipal Golf Course in Texas',
    subtitle: 'Improved water absorption',
    results: [
      '30% reduction in irrigation water usage',
      'The isolated practice green was lush and green in color',
      'It was the only green on the course that no longer suffered from root rot',
      'Lab testing showed the practice green retained 50% more nutrients compared to other greens'
    ]
  },
  {
    title: 'Car Wash in Southern California',
    subtitle: 'Scale prevention in the water lines',
    challenge: 'Water distribution lines were plugging up with hard water scale deposits and the recycled water system was suffering from a foul smell due to biological buildup.',
    results: [
      'Within 20 days, the foul smell from the reclaimed water was gone',
      'Able to reclaim 60% of water',
      'Nozzles that barely sprayed water or were plugged were now operating properly',
      'After 6 months, all nozzles are working perfectly; saving water and greatly reducing maintenance costs'
    ]
  }
];

export default function DroughtMitigation() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/d08a449ed_76161495149287.jpg"
            alt="Drought landscape"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Water Conservation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Sustainable Drought Mitigation Technology
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              An innovative solution to save water, reduce energy consumption, and decrease overall operating expenses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Drought Crisis</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Drought is severely impacting the Southern U.S. Water scarcity is a serious problem for any industry operating in the region that relies on water to keep its processes going. The situation has caused companies to become serious about meeting their sustainability goals with a focus on reducing their water usage.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                To help fight this drought, we offer these industries an innovative technology to not only save water, but also save energy while reducing overall operating expenses.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-slate-600">
              <i>Hydro</i>FLOW USA can provide substantial water savings for:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm"
              >
                <Building2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                <p className="text-slate-700 font-medium">{industry}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cooling Tower Optimization */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Optimizing Cooling Towers with <i>Hydro</i>FLOW
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Almost every industry, building, or factory in the Southern U.S. utilizes a cooling tower. We have decades of experience helping operators optimize their systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {coolingTowerResults.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-6 bg-slate-50 rounded-xl"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                <p className="text-slate-700">{result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Sample Case Studies
            </h2>
          </motion.div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{study.title}</h3>
                  {study.subtitle && (
                    <p className="text-lg text-cyan-600 font-medium mb-4">{study.subtitle}</p>
                  )}
                  {study.location && (
                    <p className="text-slate-600 mb-4">{study.location}</p>
                  )}
                  {study.challenge && (
                    <p className="text-slate-700 mb-4">{study.challenge}</p>
                  )}

                  <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-lg">
                    <h4 className="font-bold text-slate-900 mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700" dangerouslySetInnerHTML={{ __html: result }} />
                        </li>
                      ))}
                    </ul>
                    {study.savings && (
                      <p className="mt-4 text-lg font-bold text-cyan-700">
                        <DollarSign className="w-5 h-5 inline mr-1" />
                        {study.savings}
                      </p>
                    )}
                    {study.roi && (
                      <p className="mt-4 text-lg font-bold text-cyan-700">{study.roi}</p>
                    )}
                  </div>
                </Card>
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
              Fight Drought with Sustainable Technology
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Learn how <i>Hydro</i>FLOW can help your facility reduce water usage and operating costs.
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