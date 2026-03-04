import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const benefits = [
  'Optimizes the use of chemicals and make-up water',
  'Improves and maintains heat transfer efficiency',
  'Reduces maintenance cost',
  'Dissolves and removes existing hard scale',
  'Treats bacteria, algae and biofilm',
  'Inhibits corrosion'
];

const pocBenefits = [
  'Low cost, reduced risk product evaluation of the <i>Hydro</i>FLOW water conditioning equipment',
  'Pending a successful product evaluation, negotiate a purchase agreement',
  'Flexible payment options are available',
  'Remote monitoring of the cooling system\'s performance via phone, tablet, or computer'
];

export default function PowerGeneration() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/13ca58db7_67581667847030.jpg"
            alt="Power generation facility"
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
              Industry Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <i>Hydro</i>FLOW Power Generation
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              Innovative water conditioning solutions that optimize cooling tower systems and improve bottom line performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Partnership with Nooter/Eriksen
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Nooter/Eriksen (N/E) is a part of the <strong>CIC Group</strong>, an employee-owned company with subsidiaries that have specialized in the design, manufacturing, and construction of steel products for over 100 years.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                As an integral part of N/E's commitment to improving their customer's bottom line, the company is now offering its customers an innovative water conditioning device called <i>Hydro</i>FLOW, which optimizes the use of chemicals, saves make-up water, reduces maintenance, and improves the heat transfer efficiency of cooling tower systems.
              </p>
              <a href="https://cicgroup.com/nooter-eriksen/environmentally-friendly-water-treatment" target="_blank" rel="noopener noreferrer">
                <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6">
                  Contact Nooter/Eriksen
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://hydroflow-usa.com/wp-content/uploads/2025/10/multihead-96inch.704-scaled.png"
                alt="HydroFLOW Multi-head 96 inch unit"
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section 1 */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
              Installation at US Midwest Power Station
            </h2>
            <p className="text-center text-slate-600 mb-8">
              Installation of the <i>Hydro</i>FLOW system is non-invasive and does not require any large machinery or welding. This video shows a <i>Hydro</i>FLOW system installed on a 72" cooling tower pipe, along with a custom enclosure.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe 
              src="https://player.vimeo.com/video/542897277?badge=0&autoplay=0&muted=0"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="HydroFLOW Installation at Power Station"
            />
          </motion.div>
        </div>
      </section>

      {/* POC Offering */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Low Cost Proof of Concept Offering
            </h2>
            <p className="text-lg text-slate-600">
              For cooling tower water treatment optimization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pocBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-6 bg-slate-50 rounded-xl"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                <p className="text-slate-700" dangerouslySetInnerHTML={{ __html: benefit }} />
              </motion.div>
            ))}
          </div>
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
              Benefits to the Power Generation Industry
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

      {/* Video Section 2 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
              Installation at Combined Cycle Plant
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe 
              src="https://player.vimeo.com/video/655448793?badge=0&autoplay=0&muted=0"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="HydroFLOW Installation at Combined Cycle Plant"
            />
          </motion.div>
          <p className="text-center text-slate-600 mt-4">
            HydroFLOW installation at a combined cycle plant in the Great Lakes region of the United States
          </p>
        </div>
      </section>

      {/* Case Study CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12 bg-gradient-to-br from-cyan-50 to-cyan-100">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-12 h-12 text-cyan-600" />
                <h3 className="text-2xl font-bold text-slate-900">Published Results</h3>
              </div>
              <p className="text-lg text-slate-700 mb-6">
                See the results published in RMEL Electric Energy Magazine showcasing real-world performance in power generation facilities.
              </p>
              <a href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/d6d3d288f_HydroFLOW-industrial-magazine-article-RMELElectricEnergyMagazine.pdf" target="_blank" rel="noopener noreferrer">
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-6">
                  RMEL Electric Energy Magazine
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
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
              Ready to Optimize Your Power Generation Facility?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Contact Nooter/Eriksen or reach out to us for additional information about <i>Hydro</i>FLOW solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.ne.com/Contact" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-cyan-600 hover:bg-cyan-50 rounded-full px-8 py-6 text-lg font-semibold">
                  Contact Nooter/Eriksen
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Link to={createPageUrl('Contact')}>
                <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold">
                  Contact <span className="whitespace-nowrap"><i>Hydro</i>FLOW</span> USA
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}