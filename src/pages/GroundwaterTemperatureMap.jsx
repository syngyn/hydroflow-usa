import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Thermometer, MapPin, Search, Info } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MapInterface from '@/components/temperature-map/MapInterface';
import TemperatureInfo from '@/components/temperature-map/TemperatureInfo';
import LocationSearch from '@/components/temperature-map/LocationSearch';

const stateTemperatures = {
  'AL': { name: 'Alabama', temp: 63, range: '61-70°F' },
  'AK': { name: 'Alaska', temp: 35, range: '<40°F' },
  'AZ': { name: 'Arizona', temp: 68, range: '61-70°F' },
  'AR': { name: 'Arkansas', temp: 58, range: '51-60°F' },
  'CA': { name: 'California', temp: 60, range: '51-60°F' },
  'CO': { name: 'Colorado', temp: 48, range: '41-50°F' },
  'CT': { name: 'Connecticut', temp: 48, range: '41-50°F' },
  'DE': { name: 'Delaware', temp: 54, range: '51-60°F' },
  'FL': { name: 'Florida', temp: 74, range: '+71°F' },
  'GA': { name: 'Georgia', temp: 64, range: '61-70°F' },
  'HI': { name: 'Hawaii', temp: 76, range: '+71°F' },
  'ID': { name: 'Idaho', temp: 46, range: '41-50°F' },
  'IL': { name: 'Illinois', temp: 52, range: '51-60°F' },
  'IN': { name: 'Indiana', temp: 52, range: '51-60°F' },
  'IA': { name: 'Iowa', temp: 48, range: '41-50°F' },
  'KS': { name: 'Kansas', temp: 54, range: '51-60°F' },
  'KY': { name: 'Kentucky', temp: 56, range: '51-60°F' },
  'LA': { name: 'Louisiana', temp: 68, range: '61-70°F' },
  'ME': { name: 'Maine', temp: 42, range: '41-50°F' },
  'MD': { name: 'Maryland', temp: 54, range: '51-60°F' },
  'MA': { name: 'Massachusetts', temp: 48, range: '41-50°F' },
  'MI': { name: 'Michigan', temp: 46, range: '41-50°F' },
  'MN': { name: 'Minnesota', temp: 42, range: '41-50°F' },
  'MS': { name: 'Mississippi', temp: 64, range: '61-70°F' },
  'MO': { name: 'Missouri', temp: 54, range: '51-60°F' },
  'MT': { name: 'Montana', temp: 42, range: '41-50°F' },
  'NE': { name: 'Nebraska', temp: 48, range: '41-50°F' },
  'NV': { name: 'Nevada', temp: 54, range: '51-60°F' },
  'NH': { name: 'New Hampshire', temp: 44, range: '41-50°F' },
  'NJ': { name: 'New Jersey', temp: 52, range: '51-60°F' },
  'NM': { name: 'New Mexico', temp: 58, range: '51-60°F' },
  'NY': { name: 'New York', temp: 48, range: '41-50°F' },
  'NC': { name: 'North Carolina', temp: 58, range: '51-60°F' },
  'ND': { name: 'North Dakota', temp: 38, range: '<40°F' },
  'OH': { name: 'Ohio', temp: 52, range: '51-60°F' },
  'OK': { name: 'Oklahoma', temp: 60, range: '51-60°F' },
  'OR': { name: 'Oregon', temp: 50, range: '41-50°F' },
  'PA': { name: 'Pennsylvania', temp: 50, range: '41-50°F' },
  'RI': { name: 'Rhode Island', temp: 48, range: '41-50°F' },
  'SC': { name: 'South Carolina', temp: 62, range: '61-70°F' },
  'SD': { name: 'South Dakota', temp: 44, range: '41-50°F' },
  'TN': { name: 'Tennessee', temp: 58, range: '51-60°F' },
  'TX': { name: 'Texas', temp: 66, range: '61-70°F' },
  'UT': { name: 'Utah', temp: 50, range: '41-50°F' },
  'VT': { name: 'Vermont', temp: 44, range: '41-50°F' },
  'VA': { name: 'Virginia', temp: 54, range: '51-60°F' },
  'WA': { name: 'Washington', temp: 48, range: '41-50°F' },
  'WV': { name: 'West Virginia', temp: 52, range: '51-60°F' },
  'WI': { name: 'Wisconsin', temp: 44, range: '41-50°F' },
  'WY': { name: 'Wyoming', temp: 44, range: '41-50°F' }
};

export default function GroundwaterTemperatureMap() {
  const [selectedState, setSelectedState] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-orange-900 via-orange-800 to-orange-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Thermometer className="w-12 h-12 text-orange-400" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Groundwater Temperature Map
              </h1>
            </div>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Discover the average groundwater temperature in your area and find the right water heater solution
            </p>
          </motion.div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Info className="w-6 h-6 text-orange-600" />
              How to Use the Interactive Map
            </h2>
            <ol className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                <span>Click on a State to zoom in and view details</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                <span>Click on a City to see its average groundwater temperature</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                <span>Use the search box to find your location by ZIP code</span>
              </li>
            </ol>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LocationSearch type="temperature" />
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MapInterface 
            type="temperature"
            data={stateTemperatures}
            onStateSelect={setSelectedState}
          />
        </div>
      </section>

      {/* Temperature Info */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TemperatureInfo selectedState={selectedState} data={stateTemperatures} />
        </div>
      </section>

      {/* State List Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Browse by State
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(stateTemperatures).sort((a, b) => a[1].name.localeCompare(b[1].name)).map(([code, data]) => (
              <Link 
                key={code}
                to={createPageUrl(`StateTemperature?state=${code}`)}
                className="flex items-center justify-between p-4 bg-slate-50 hover:bg-orange-50 rounded-xl transition-all hover:shadow-md group"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-orange-600" />
                  <div>
                    <span className="font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {data.name}
                    </span>
                    <span className="text-sm text-slate-500 ml-2">– {code}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-orange-600">{data.temp}°F</div>
                  <div className="text-xs text-slate-500">{data.range}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Temperature Zones & Recommendations */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Tankless Water Heater Recommendations
          </h2>
          <div className="space-y-4">
            {[
              { range: '< 40°F', color: 'from-blue-900 to-blue-800', zone: 'dark-blue' },
              { range: '41 – 50°F', color: 'from-blue-600 to-blue-500', zone: 'light-blue' },
              { range: '51 – 60°F', color: 'from-green-600 to-green-500', zone: 'green' },
              { range: '61 – 70°F', color: 'from-orange-600 to-orange-500', zone: 'orange' },
              { range: '+71°F', color: 'from-red-600 to-red-500', zone: 'red' }
            ].map((zone) => (
              <div 
                key={zone.range}
                className={`bg-gradient-to-r ${zone.color} rounded-xl p-6 text-white flex items-center justify-between hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-center gap-4">
                  <Thermometer className="w-8 h-8" />
                  <span className="text-xl font-bold">{zone.range}</span>
                </div>
                <Button 
                  variant="secondary"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                >
                  View Recommendations
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Choosing the Right Solution?
          </h2>
          <p className="text-orange-100 mb-8 text-lg">
            Our experts can help you find the perfect water treatment system for your groundwater temperature
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl('Contact')}>
              <Button className="bg-white text-orange-600 hover:bg-orange-50 rounded-full px-8 py-6 text-lg font-semibold">
                Contact Us
              </Button>
            </Link>
            <Link to={createPageUrl('Products')}>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold">
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}