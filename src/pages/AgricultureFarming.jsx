import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Droplets, TrendingUp, Leaf, Wrench, DollarSign, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Droplets,
    title: 'Reduced Water Usage',
    description: 'Conserve water while maintaining optimal irrigation'
  },
  {
    icon: TrendingUp,
    title: 'Increased Crop Yield',
    description: 'Healthier plants and improved growing conditions'
  },
  {
    icon: Leaf,
    title: 'Improved Water Quality',
    description: 'Better water quality leads to healthier crops'
  },
  {
    icon: DollarSign,
    title: 'Decreased Chemical Usage',
    description: 'Reduce chemical treatments and associated costs'
  },
  {
    icon: Wrench,
    title: 'Lessened Equipment Maintenance',
    description: 'Extend equipment life and reduce maintenance needs'
  }
];

export default function AgricultureFarming() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-green-900 via-green-800 to-green-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/7333ded60_17351657555422.png"
            alt="Agricultural irrigation"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-900/70" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-green-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Agriculture Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Agricultural Water
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-200">
                Treatment
              </span>
            </h1>
            <p className="text-xl text-green-100/90 mb-8 max-w-3xl">
              Farms are challenged with finding ways to reduce water usage while optimizing their water treatment regimen. 
              By integrating <i>Hydro</i>FLOW equipment, farmers realize a wide range of operational advantages and a quick return on investment.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl shadow-green-500/30">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Benefits Include
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-green-50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
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
            <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Case Study
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Vineyard in California
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">The Challenge</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  A California vineyard was suffering from severe algae growth in its irrigation ponds, 
                  causing increased maintenance and problems in the filtration stations. The farm was 
                  being forced into backwashing the system 10-15 minutes a day to address the issues 
                  being caused by the algae build-up.
                </p>
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80"
                    alt="Vineyard irrigation pond"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Results</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      After installation of a <i>Hydro</i>FLOW device within two months, algae was brought to acceptable levels
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Backwash time reduced from 15 minutes to just 5 minutes per day
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Bacteria and algae CFU counts were over 90% lower compared to Copper Sulfate and Tilapia fish treatments
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Estimated 1.5 year return on investment from reduced chemical usage, backwash, and maintenance costs
                    </span>
                  </li>
                </ul>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">90%</div>
                    <div className="text-xs text-slate-600">Lower Bacteria</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">67%</div>
                    <div className="text-xs text-slate-600">Less Backwash</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">1.5</div>
                    <div className="text-xs text-slate-600">Year ROI</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Optimize Your Farm's Water Treatment
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Find out more about how <i>Hydro</i>FLOW can help improve the water treatment regimen at your agricultural operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('CaseStudies')}>
                <Button className="bg-white text-green-600 hover:bg-green-50 rounded-full px-8 py-6 text-lg font-semibold">
                  View Case Studies
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={createPageUrl('Contact')}>
                <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold">
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