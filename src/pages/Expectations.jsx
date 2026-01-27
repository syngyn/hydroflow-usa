import React from 'react';
import { motion } from 'framer-motion';
import { ThumbsUp, ThumbsDown, CheckCircle2, XCircle } from 'lucide-react';

const shouldExpect = [
  'Prevent limescale accumulation and gradually remove limescale deposits in areas with constant water flow (i.e. inside pipes)',
  'Make your potable water healthier by assisting in the eradication of waterborne bacteria and removal of biofilm from inside pipes and appliances',
  'Reduce your water heater\'s energy consumption',
  'Cost is about $1 per year to run',
  'Be eco-friendly and maintenance-free',
  'Make your pool water clearer',
  'Reduce your pool\'s chemical consumption',
  'Decrease your pool\'s "chlorine smell"',
  'Your water will lather up better with a HydroFLOW device than just untreated hard water'
];

const shouldNotExpect = [
  '"Soften" water – it is not a water softener, it is an eco-friendly and chemical-free water conditioner',
  'Be waterproof – it needs to be properly protected when installed in wet areas or outdoors',
  'Remove all stains from your glassware – a dishwasher rinse aid might be required',
  'Remove heavy metals or minerals – it is not a reverse osmosis system',
  'Completely stop the use of pool chemicals – it will help reduce chemicals by up to 50%',
  'Completely remove limescale stains in areas without constant water flow – it will make limescale stains easier to remove',
  'Remove suspended solids – it is not a filter',
  'Remove "rotten egg" smell',
  'Remove iron staining'
];

export default function Expectations() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              What to Expect
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Understanding what <i>Hydro</i>FLOW can and cannot do for your water system
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Should Expect */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-sm p-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg flex-shrink-0">
                  <ThumbsUp className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    What you <span className="italic text-green-600">should expect</span>
                  </h2>
                  <p className="text-slate-600">from <i>Hydro</i>FLOW</p>
                </div>
              </div>

              <div className="space-y-4">
                {shouldExpect.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Should NOT Expect */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-sm p-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg flex-shrink-0">
                  <ThumbsDown className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    What you <span className="italic text-red-600">should not expect</span>
                  </h2>
                  <p className="text-slate-600">from <i>Hydro</i>FLOW</p>
                </div>
              </div>

              <div className="space-y-4">
                {shouldNotExpect.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex gap-3"
                  >
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src="https://hydroflow-usa.com/images/ex1.png"
                alt="HydroFLOW Benefits"
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src="https://hydroflow-usa.com/images/ex2.png"
                alt="HydroFLOW Limitations"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}