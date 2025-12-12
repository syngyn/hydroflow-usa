import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { MapPin, Info } from 'lucide-react';
import MapInterface from '@/components/water-map/MapInterface';
import LocationSearch from '@/components/water-map/LocationSearch';
import HardnessInfo from '@/components/water-map/HardnessInfo';

export default function WaterHardnessMap() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-white/80">Interactive Map</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Water Hardness Map
            </h1>
            <p className="text-xl text-slate-300">
              Check the water hardness in your area and get personalized product recommendations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-6 bg-cyan-50 border-y border-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 text-cyan-900">
            <Info className="w-5 h-5" />
            <p className="text-sm">
              Data shown represents average water hardness levels. Actual levels may vary by specific location.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <LocationSearch onLocationSelect={setSelectedLocation} />
          </motion.div>

          {/* Map and Info Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <MapInterface 
                  selectedLocation={selectedLocation}
                  onLocationClick={setSelectedLocation}
                />
              </motion.div>
            </div>

            {/* Info Panel */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <HardnessInfo location={selectedLocation} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              How to Use This Map
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Search Your Location',
                description: 'Enter your city, state, or zip code in the search bar above'
              },
              {
                step: '2',
                title: 'View Water Data',
                description: 'See the water hardness level for your area on the interactive map'
              },
              {
                step: '3',
                title: 'Get Recommendations',
                description: 'Receive personalized product suggestions based on your water hardness'
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* State Links Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Water Hardness by State</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Click on any state to view detailed water hardness information for cities in that state
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 
              'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
              'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
              'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
              'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
              'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
              'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
              'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
              'Wisconsin', 'Wyoming'
            ].map((state) => (
              <Link
                key={state}
                to={createPageUrl('StateWaterHardness') + `?state=${state.toLowerCase().replace(/\s+/g, '')}`}
                className="px-4 py-3 bg-white hover:bg-cyan-50 rounded-lg border border-slate-200 hover:border-cyan-300 text-slate-700 hover:text-cyan-600 font-medium text-sm transition-all text-center"
              >
                {state}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}