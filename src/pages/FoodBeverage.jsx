import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Utensils } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const benefits = [
  'Scale reduction on spray nozzles and heaters',
  'Enhanced filtration efficiency',
  'Reduced chemical usage (chlorine, soap, cleaning agents)',
  '70% reduction in maintenance time',
  'Improved food safety and water quality',
  'Average payback period of 1-2 years'
];

export default function FoodBeverage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/d2bb1ce8a_14841665168757.png"
            alt="Food and beverage processing"
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
              Food Industry Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Food and Beverage Water Treatment
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              The food processing industry requires careful management of water systems, necessitating that they remain clear of scale and biofilm to operate at optimum efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Utensils className="w-8 h-8 text-cyan-600" />
                <h2 className="text-2xl font-bold text-slate-900">Industry Challenge</h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                With food production, there is an additional constraint on the amount of chemical treatment that can be added to the water. The <i>Hydro</i>FLOW water treatment devices optimize existing water treatment regimens, allowing for substantial water savings and chemical reduction.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Our solutions provide an average payback period of 1-2 years while maintaining the highest food safety standards.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Key Benefits for Food Processing
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-6 bg-white rounded-xl shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                <p className="text-slate-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured Case Study
            </h2>
            <p className="text-lg text-slate-600">
              Food Processing Plant in Central, Washington
            </p>
          </motion.div>

          <Card className="p-8 md:p-12 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">The Challenge</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              The fruit-washing line in this factory suffered from scale issues. The spray nozzles would plug-up with scale on a daily basis. In addition, the bank of heaters was seeing scale build-up that was reducing their efficiency.
            </p>

            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-8 rounded-r-lg mb-8">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Results</h4>
              <img 
                src="https://hydroflow-usa.com/assets/userfiles/images/food%2Band%2Bbeverage%2Bprocessors.PNG"
                alt="Results from food processing plant"
                className="w-full rounded-xl shadow-lg mb-6"
              />
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">The existing scale on the heater tubes was gradually dissolved and new scale was prevented. After 10 weeks the bare metal of the tubes could be seen.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">The spray nozzles did not block during the initial 3-month trial period</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">Overall maintenance time was reduced by 70%</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">Chlorine, soap and other chemicals used in the washing process were also greatly reduced</span>
                </li>
              </ul>
            </div>

            <blockquote className="border-l-4 border-cyan-500 bg-slate-50 p-6 italic text-lg text-slate-700">
              "It is hard to believe, but the pictures tell the story. I am amazed at the results so far. This problem has been an extreme issue for me since I came to this facility a few years ago. Thank you, <i>Hydro</i>FLOW, for helping me optimize my factory."
              <footer className="mt-4 text-sm font-semibold text-slate-900 not-italic">— Facility Director</footer>
            </blockquote>
          </Card>
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
              Optimize Your Food Processing Operations
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Learn how <i>Hydro</i>FLOW can improve efficiency and reduce costs in your facility.
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