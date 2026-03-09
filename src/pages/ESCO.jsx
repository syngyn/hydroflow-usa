import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingDown, Droplets, Zap, Clock, DollarSign, Wrench } from 'lucide-react';
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Zap,
    title: 'Improved Heat Transfer Efficiency',
    description: 'Reduce mineral and biological fouling'
  },
  {
    icon: Droplets,
    title: 'Decreased Water Usage',
    description: 'Allow cooling tower systems to operate at higher conductivity'
  },
  {
    icon: TrendingDown,
    title: 'Minimize Chemicals',
    description: 'Enhance effectiveness of chemicals used'
  },
  {
    icon: Wrench,
    title: 'Optimize Operations',
    description: 'Improve operational and maintenance procedures'
  },
  {
    icon: Clock,
    title: 'Increase Service Life',
    description: 'Reduce wear and tear on equipment'
  },
  {
    icon: DollarSign,
    title: 'Cost Savings',
    description: 'Reduce energy, water, and operational expenses'
  }
];

export default function ESCO() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/bc138404f_76171664488239.JPG"
            alt="ESCO"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Water Treatment for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                Energy Service Companies
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Energy Service Companies (ESCOs) play an important role in providing cost saving solutions 
              that help organizations reduce energy, water and operational expenses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Contact')} className="block">
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl shadow-cyan-500/30">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="https://www.energy.gov/eere/femp/energy-service-companies-0" target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl shadow-cyan-500/30">
                  Learn About ESCOs
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg text-slate-700 leading-relaxed">
              ESCOs take-on the responsibility of achieving the desired budgetary reduction objectives 
              by acting as project designers and facilitators. <i>Hydro</i>FLOW equipment plays an important 
              role in allowing ESCOs to provide their customers with the desired savings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Key Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Benefits for ESCOs
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study 1 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Sample Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Real-World Results
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://hydroflow-usa.com/assets/userfiles/images/ESCO%2Bleed%2Bbuilding.png"
                alt="LEED Building Houston"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Fortune 100 Headquarters – LEED Gold Building in Houston, Texas
              </h3>
              <p className="text-slate-600 mb-6">
                The facilities manager identified the need to improve water conservation in the cooling 
                system to reduce cost, save energy and minimize chemical usage.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 mb-3">Key Success Factors:</h4>
                <ul className="space-y-2">
                  {[
                    'Reduction of scale and biofouling accumulation',
                    'At least 50% conservation of blow-down water',
                    'Chemical reduction and optimization',
                    'Increased lifecycle of equipment',
                    'Reduction in energy and maintenance costs'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-cyan-50 rounded-2xl p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Results:</h4>
                <ul className="space-y-2">
                  {[
                    '85% blow-down water reduction (exceeded 50% goal)',
                    '75% chemical reduction',
                    '50% reduction in maintenance frequency',
                    '10% reduction in energy consumption'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Case Study 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-2"
            >
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/0ad4a7a15_79051513979745.png"
                alt="Chemical Plant"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-1"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Chemical Plant in Washington
              </h3>
              <p className="text-slate-600 mb-6">
                Due to excessive scale accumulation, the plant's diesel steam boilers were on the verge of being 
                decommissioned for a week in order to be acid cleaned; a process that typically costs over $15,000. 
                In addition, there was a strong possibility the steam boilers required replacement ($350,000 each).
              </p>

              <div className="bg-cyan-50 rounded-2xl p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Results:</h4>
                <ul className="space-y-3">
                  {[
                    'Within days, soft chunks of scale began washing out via blow-down',
                    'Water softener bypassed less than a month after installation',
                    'Stack temperature reduced from 650°F to 400°F in 2.5 months',
                    'Fuel consumption dropped from 400 to 275 gallons/day',
                    'Annual savings of approximately $150,000',
                    'Delayed steam boiler replacement ($350,000 each)'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
              Ready to Deliver Savings to Your Clients?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Contact us to learn how HydroFLOW can help your ESCO achieve its cost-saving objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Contact')} className="block">
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl shadow-cyan-500/30">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={createPageUrl('CaseStudies')} className="block">
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl shadow-cyan-500/30">
                  View More Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}