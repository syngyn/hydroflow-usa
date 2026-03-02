import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Droplets, Leaf, Sparkles, DollarSign, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Leaf,
    title: 'Improved Turf Health',
    description: 'Healthier, greener turf that is more resilient'
  },
  {
    icon: Droplets,
    title: 'Reduced Water Usage',
    description: 'Conserve water while maintaining quality'
  },
  {
    icon: Sparkles,
    title: 'Enhanced Water Quality',
    description: 'Better water absorption and nutrient uptake'
  },
  {
    icon: DollarSign,
    title: 'Decreased Chemical Usage',
    description: 'Reduce fungicide and chemical treatments'
  },
  {
    icon: Wrench,
    title: 'Lessened Equipment Maintenance',
    description: 'Descale irrigation lines and improve sprinkler coverage'
  }
];

export default function AgricultureLandscaping() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-green-900 via-green-800 to-green-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/61ccc724d_24091655247748.jpg"
            alt="Landscaping and lawn care"
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
              Landscaping Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Landscaping & Golf Course
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-200">
                Water Treatment
              </span>
            </h1>
            <p className="text-xl text-green-100/90 mb-8 max-w-3xl">
              Landscaping companies are challenged with finding ways to conserve water while optimizing the water treatment 
              regimen of their customers. By integrating <i>Hydro</i>FLOW equipment, landscapers realize a wide range of 
              operational advantages and a quick return on investment.
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
              Municipal Golf Course in Texas
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
                  This golf course contacted <i>Hydro</i>FLOW because the health of the turf throughout the course declined 
                  and brown patches developed on fairways and especially putting greens. Increased watering did not improve 
                  the conditions, and samples were submitted to a laboratory.
                </p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  The diagnosis was <strong>Pythium Blight</strong>, a fairly common fungus that prevents water from being 
                  absorbed by the roots. This is a destructive and difficult-to-control disease of warm-season turf grass 
                  during mild wet conditions.
                </p>
                <div className="rounded-xl overflow-hidden mb-6">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/2a59d5b5e_77171495579956.png"
                    alt="Golf course with irrigation issues"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Localized dry spot (LDS) associated with fairy ring fungi causes irregular patches. Fungi break down 
                  organic material in the soil profile, releasing toxic and water repellent compounds that make the soil 
                  hydrophobic. The Bermuda grass primarily suffers from drought stress despite regular watering intervals.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">The Solution</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  <i>Hydro</i>FLOW devices have the ability to reduce water surface tension; similar to the effect of a 
                  chemical surfactant. The treated water is more efficiently used by plants, which allows for better use 
                  of nutrients. In turn, plants sustain healthier systems that resist disease and stress.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  The grounds keeper at the golf course elected to install a <i>Hydro</i>FLOW device for a 5-month trial.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Results</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Reduced water demand of approximately <strong>20%</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Fertilizer and chemical reduction of <strong>30%</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Reduced chemical purchasing, storage, and labor costs
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Healthier turf appeared greener and more resilient to regular wear and tear
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Descaled irrigation lines, improving water flow and sprinkler coverage
                    </span>
                  </li>
                </ul>

                <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
                  <p className="text-slate-700 font-medium">
                    At the end of the 5-month trial, the golf course elected to purchase the <i>Hydro</i>FLOW unit.
                  </p>
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
              Optimize Your Landscaping Water Treatment
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Find out more about how <i>Hydro</i>FLOW can help landscaping companies conserve water while optimizing 
              the water treatment regimen of their customers.
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