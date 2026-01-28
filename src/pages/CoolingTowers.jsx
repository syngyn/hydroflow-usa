import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Wind, Droplets, Thermometer } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const benefits = [
  'Cooling towers keep a heat source cool by evaporating water',
  'Heat is transferred to the tower water in a heat exchanger',
  'Problems: limescale in heat exchangers, bacteria and/or algae in the tower water',
  'Blow-down, filtration and a chemical regiment are normally required for the tower to run efficiently',
  'Maintenance is a necessary process for optimal operation'
];

const terminology = [
  { term: 'Air Inlet and Outlet', definition: 'The points at which air enters and leaves the tower.' },
  { term: 'Blowdown', definition: 'Water is discharged from the system to control concentrations of salts or other impurities in the circulating water.' },
  { term: 'BTU (British Thermal Unit)', definition: 'The amount of heat gain (or loss) required to raise (or lower) the temperature of one pound of water one degree F.' },
  { term: 'Capacity', definition: 'The amount of water (GPM) that a cooling tower will cool through a specified range, at a specified approach and wet-bulb temperature.' },
  { term: 'Fill', definition: 'That portion of a cooling tower that constitutes its primary heat transfer surface. Sometimes referred to as "packing".' },
  { term: 'Drift Loss', definition: 'The water that leaves the cooling tower as droplets of water and typically equates to .3% of the circulating water in a tower without drift eliminators. Approximately .005% with drift eliminators.' },
  { term: 'Cooling Tower Tonnage', definition: 'Cooling towers are not the typical 12,000 BTU/Hr/ton - they are 15,000 BTU/Hr/ton. The added 3,000 BTU is for removing the Chiller compressor heat.' },
  { term: 'Wet-Bulb Temperature', definition: 'The temperature of the entering or ambient air adjacent to the cooling tower as measured with a wet-bulb thermometer.' }
];

export default function CoolingTowers() {
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
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Industrial Applications
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Cooling Tower Systems
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              From hotel air conditioning to power station cooling, all cooling towers perform the same basic task: they transfer heat to the atmosphere using water.
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
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Cooling tower systems range in size and purpose from dealing with air conditioning in hotels to cooling power stations. However, they all perform the same basic task: they take heat from somewhere it is not wanted and dump it into the atmosphere. To do this they use water, for two main reasons:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-lg text-slate-700 mb-6">
                <li>Water is abundant.</li>
                <li>Water is very good at storing heat compared to other substances.</li>
              </ol>
              <p className="text-lg text-slate-700 leading-relaxed">
                If we are using water to cool something down, that means heat is being transferred from that something to the water, i.e. the water is being heated. Whenever water is heated, there are likely to be problems with limescale.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Basic Principles */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Basic Principles of Cooling Tower Systems
            </h2>
            <p className="text-lg text-slate-600">
              These principles apply to almost every cooling tower in operation
            </p>
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

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-3xl p-8"
            >
              <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center mb-6">
                <Thermometer className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Heat Exchanger</h3>
              <p className="text-slate-700 leading-relaxed">
                The heat exchanger is where water absorbs heat energy from the heat source. The tower water is heated, then pumped to the top of the cooling tower where it's sprayed in a fine mist.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mb-6">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Evaporative Cooling</h3>
              <p className="text-slate-700 leading-relaxed">
                As water droplets fall through the air, they are cooled mostly by evaporation. The water collects in a pool at the bottom and is pumped back to start the process again.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8"
            >
              <div className="w-16 h-16 rounded-full bg-slate-500 flex items-center justify-center mb-6">
                <Wind className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Blowdown Control</h3>
              <p className="text-slate-700 leading-relaxed">
                As water evaporates, it becomes more concentrated. Blowdown flushes away concentrated water and replaces it with fresh water to prevent mineral buildup.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Terminology */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Cooling Tower Terminology
            </h2>
            <p className="text-lg text-slate-600">
              Common terms used in reference to cooling towers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {terminology.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-6 h-full">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.term}</h3>
                  <p className="text-slate-600">{item.definition}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>