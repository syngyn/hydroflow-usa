import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Factory, Droplet, Zap, TrendingDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Droplet,
    title: 'Scale Reduction',
    description: 'Eliminates scale buildup on heat transfer surfaces'
  },
  {
    icon: Zap,
    title: 'Optimize Performance',
    description: 'Maximize chiller and cooling tower performance'
  },
  {
    icon: TrendingDown,
    title: 'Minimize Usage',
    description: 'Reduce cooling tower chemical and water consumption'
  },
  {
    icon: CheckCircle2,
    title: 'Bacteria Control',
    description: 'Reduce cooling water bacteria and biofouling'
  }
];

export default function PlasticManufacturing() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://hydroflow-usa.com/wp-content/uploads/2023/12/80701660669353.jpg"
            alt="Plastic manufacturing"
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
              Manufacturing Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Plastic Manufacturing
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              Cooling plastics in a precise and efficient way during the manufacturing process is critical for product quality.
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
                <Factory className="w-8 h-8 text-cyan-600" />
                <h2 className="text-2xl font-bold text-slate-900">The Challenge</h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Most plastic manufacturers use water as their primary way of cooling the plastics during manufacturing. They do this by using some sort of heat exchanger in the process. Generally, they use a cooling tower and chiller to achieve this.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If the plastic is not cooled properly, the quality of the end product can be impacted. Any kind of heat transfer efficiency loss can be very detrimental to the plastic curing correctly.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                <p className="text-slate-700 italic">
                  According to Plastics Today: <strong>"With water flowing through a mold you have the perfect setup for electrolysis, where the minerals in the water will plate out onto the waterlines. Just 1/64 in. (0.4 mm) of scale buildup can reduce the heat-transfer efficiency of a waterline by 60%, even with adequate flow."</strong>
                </p>
              </div>
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
              Benefits for Plastic Manufacturing
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-8 rounded-2xl bg-white hover:shadow-lg transition-shadow"
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

      {/* Visual Results */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Proven Results
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Improved Flow Rates', image: 'https://hydroflow-usa.com/assets/userfiles/images/flowrates%281%29.png' },
              { title: 'Reduced Chemical Usage', image: 'https://hydroflow-usa.com/assets/userfiles/images/reduced-chemical-usage%285%29.png' },
              { title: 'Removed Existing Scale', image: 'https://hydroflow-usa.com/assets/userfiles/images/removed-existing-scale%283%29.png' },
              { title: 'Stopped New Scale', image: 'https://hydroflow-usa.com/assets/userfiles/images/Stoped-New-Scale-from-Forming%283%29.png' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-contain mb-4"
                  />
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn More */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <p className="text-lg text-slate-700 mb-6">
                To find out more, please visit our case study pages or contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={createPageUrl('CaseStudies') + '?category=industrial'}>
                  <Button variant="outline" className="rounded-full px-6">
                    Industrial Case Studies
                  </Button>
                </Link>
                <Link to={createPageUrl('CaseStudies') + '?category=commercial'}>
                  <Button variant="outline" className="rounded-full px-6">
                    Commercial Case Studies
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
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
              Ready to Improve Your Manufacturing Efficiency?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Contact us to learn how <i>Hydro</i>FLOW can optimize your plastic manufacturing operations.
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