import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Home, Waves, Building2, ArrowRight, PlayCircle, Book, Wrench } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const guides = [
  {
    id: 'residential-home',
    title: 'Residential Home Installation',
    description: 'Step-by-step guide for installing HydroFLOW in your home',
    icon: Home,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    duration: '15-30 minutes',
    difficulty: 'Easy',
    products: ['Pearl', 'Pearl Plus'],
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/08/pearl-transparent.webp'
  },
  {
    id: 'pool-spa',
    title: 'Pool & Spa Setup',
    description: 'Complete guide for pool and spa installations',
    icon: Waves,
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50',
    duration: '20-40 minutes',
    difficulty: 'Medium',
    products: ['hs40'],
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/5caaa96fa_productrange201629.png'
  },
  {
    id: 'commercial-kitchen',
    title: 'Commercial Kitchen Installation',
    description: 'Guide for restaurants and commercial kitchens',
    icon: Building2,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    duration: '30-60 minutes',
    difficulty: 'Medium',
    products: ['Pearl Plus', 'hs40'],
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/971b89f11_PearlPlus.png'
  }
];

export default function InstallationGuides() {
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
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full mb-6">
              <Wrench className="w-4 h-4" />
              <span className="text-sm font-semibold">Installation Made Easy</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Interactive Installation Guides
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Step-by-step wizards with videos and visual aids to help you install your <i>Hydro</i>FLOW device
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {guides.map((guide, index) => {
              const Icon = guide.icon;
              return (
                <motion.div
                  key={guide.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={createPageUrl(`InstallationWizard?guide=${guide.id}`)}>
                    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-cyan-500">
                      {/* Image */}
                      <div className={`relative h-56 ${guide.bgColor} flex items-center justify-center p-8`}>
                        <img 
                          src={guide.image}
                          alt={guide.title}
                          className="h-full w-auto object-contain transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${guide.color} flex items-center justify-center`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-xl text-slate-900 group-hover:text-cyan-600 transition-colors">
                              {guide.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-slate-600 mb-4">{guide.description}</p>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="outline" className="text-xs">
                            ⏱️ {guide.duration}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            📊 {guide.difficulty}
                          </Badge>
                        </div>

                        {/* Products */}
                        <div className="mb-4">
                          <p className="text-xs text-slate-500 mb-1">Compatible Products:</p>
                          <div className="flex flex-wrap gap-1">
                            {guide.products.map(product => (
                              <Badge key={product} className="bg-slate-100 text-slate-700 text-xs">
                                {product}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                          <span className="text-cyan-600 font-semibold text-sm group-hover:underline">
                            Start Guide
                          </span>
                          <ArrowRight className="w-5 h-5 text-cyan-600 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Video Library */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4">
                <PlayCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Video Library</h3>
              <p className="text-slate-600 mb-6">
                Watch detailed installation videos for all HydroFLOW products
              </p>
              <Button variant="outline" className="rounded-full">
                Browse Videos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>

            {/* PDF Downloads */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                <Book className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">PDF Manuals</h3>
              <p className="text-slate-600 mb-6">
                Download comprehensive installation manuals and user guides
              </p>
              <Button variant="outline" className="rounded-full">
                Download PDFs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Need Help CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Still Need Help?</h2>
          <p className="text-slate-600 mb-8">
            Our support team is here to assist you with your installation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl('Contact')}>
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8">
                Contact Support
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="tel:1-888-559-4340">
              <Button variant="outline" className="rounded-full px-8">
                Call 1-888-559-4340
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}