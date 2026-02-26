import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { MapPin, ChevronRight } from 'lucide-react';

const states = [
  { name: 'Alabama', page: 'AlabamaWaterHardness' },
  { name: 'Alaska', page: 'AlaskaWaterHardness' },
  { name: 'Arizona', page: 'ArizonaWaterHardness' },
  { name: 'Arkansas', page: 'ArkansasWaterHardness' },
  { name: 'California', page: 'CaliforniaWaterHardness' },
  { name: 'Colorado', page: 'ColoradoWaterHardness' },
  { name: 'Connecticut', page: 'ConnecticutWaterHardness' },
  { name: 'Delaware', page: 'DelawareWaterHardness' },
  { name: 'Florida', page: null },
  { name: 'Georgia', page: null },
  { name: 'Hawaii', page: null },
  { name: 'Idaho', page: null },
  { name: 'Illinois', page: null },
  { name: 'Indiana', page: null },
  { name: 'Iowa', page: null },
  { name: 'Kansas', page: null },
  { name: 'Kentucky', page: null },
  { name: 'Louisiana', page: null },
  { name: 'Maine', page: null },
  { name: 'Maryland', page: null },
  { name: 'Massachusetts', page: null },
  { name: 'Michigan', page: null },
  { name: 'Minnesota', page: null },
  { name: 'Mississippi', page: null },
  { name: 'Missouri', page: null },
  { name: 'Montana', page: null },
  { name: 'Nebraska', page: null },
  { name: 'Nevada', page: null },
  { name: 'New Hampshire', page: null },
  { name: 'New Jersey', page: null },
  { name: 'New Mexico', page: null },
  { name: 'New York', page: null },
  { name: 'North Carolina', page: null },
  { name: 'North Dakota', page: null },
  { name: 'Ohio', page: null },
  { name: 'Oklahoma', page: null },
  { name: 'Oregon', page: null },
  { name: 'Pennsylvania', page: null },
  { name: 'Rhode Island', page: null },
  { name: 'South Carolina', page: null },
  { name: 'South Dakota', page: null },
  { name: 'Tennessee', page: null },
  { name: 'Texas', page: null },
  { name: 'Utah', page: null },
  { name: 'Vermont', page: null },
  { name: 'Virginia', page: null },
  { name: 'Washington', page: null },
  { name: 'West Virginia', page: null },
  { name: 'Wisconsin', page: null },
  { name: 'Wyoming', page: null }
];

export default function StateWaterHardness() {
  return (
    <div>
      <Helmet>
        <title>State Water Hardness Pages - Water Quality Data by State | HydroFLOW USA</title>
        <meta name="description" content="Browse water hardness information for all 50 US states. Find detailed water quality data, hardness levels, and city-specific information for your area." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
              Water Hardness by State
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore comprehensive water hardness data for all 50 states. Find information about water quality in your area.
            </p>
          </motion.div>
        </div>
      </section>

      {/* States Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {states.map((state, index) => {
              const pageUrl = `${state.replace(/\s+/g, '')}WaterHardness`;
              
              return (
                <motion.div
                  key={state}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.01 }}
                >
                  <Link
                    to={createPageUrl(pageUrl)}
                    className="group block bg-slate-50 hover:bg-cyan-50 rounded-lg p-4 transition-all duration-200 border border-slate-200 hover:border-cyan-300 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-cyan-100 group-hover:bg-cyan-500 flex items-center justify-center transition-colors">
                          <MapPin className="w-5 h-5 text-cyan-600 group-hover:text-white transition-colors" />
                        </div>
                        <span className="font-semibold text-slate-900 group-hover:text-cyan-700 transition-colors">
                          {state}
                        </span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Understanding Water Hardness
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Water hardness is measured in Parts Per Million (PPM) or Grains Per Gallon (gpg). 
            Each state page provides detailed information about water hardness levels in major cities, 
            water sources, and local industries affected by water quality.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-2">Soft Water</h3>
              <p className="text-sm text-slate-600">0-60 PPM (0-3.5 gpg)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-2">Moderately Hard</h3>
              <p className="text-sm text-slate-600">61-120 PPM (3.5-7 gpg)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-2">Hard Water</h3>
              <p className="text-sm text-slate-600">121-180 PPM (7-10.5 gpg)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}