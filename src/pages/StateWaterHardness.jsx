import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Droplets, MapPin, ArrowLeft, Info, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// State data with water hardness information
const stateData = {
  california: {
    name: 'California',
    code: 'CA',
    avgHardness: 100-300,
    avgPPM: 200,
    level: 'hard to very hard',
    description: 'California water is considered hard to very hard. The average water hardness for California residents ranges from 100-300 PPM.',
    cities: [
      { name: 'Los Angeles', ppm: 127, level: 'Hard' },
      { name: 'San Francisco', ppm: 47, level: 'Soft' },
      { name: 'San Diego', ppm: 241, level: 'Very Hard' },
      { name: 'Sacramento', ppm: 150, level: 'Hard' },
      { name: 'Fresno', ppm: 123, level: 'Hard' },
      { name: 'Long Beach', ppm: 137, level: 'Hard' },
      { name: 'Oakland', ppm: 140, level: 'Hard' },
      { name: 'Bakersfield', ppm: 80, level: 'Moderate' },
      { name: 'Anaheim', ppm: 127, level: 'Hard' },
      { name: 'Santa Barbara', ppm: 391, level: 'Very Hard' },
    ]
  },
  texas: {
    name: 'Texas',
    code: 'TX',
    avgPPM: 200,
    level: 'hard to very hard',
    description: 'In Texas, the water hardness average is over 200 PPM, ranking it as one of the states with the hardest water in the US.',
    cities: [
      { name: 'Houston', ppm: 135, level: 'Hard' },
      { name: 'Dallas', ppm: 140, level: 'Hard' },
      { name: 'Austin', ppm: 184, level: 'Hard' },
      { name: 'San Antonio', ppm: 357, level: 'Very Hard' },
      { name: 'Fort Worth', ppm: 140, level: 'Hard' },
      { name: 'El Paso', ppm: 119, level: 'Hard' },
      { name: 'Arlington', ppm: 94, level: 'Moderate' },
      { name: 'Corpus Christi', ppm: 227, level: 'Very Hard' },
      { name: 'Plano', ppm: 146, level: 'Hard' },
      { name: 'Laredo', ppm: 260, level: 'Very Hard' },
    ]
  },
  florida: {
    name: 'Florida',
    code: 'FL',
    avgPPM: 216,
    level: 'very hard',
    description: 'Florida has an average water hardness of 216 PPM, which is considered to be extremely hard according to the USGS water hardness table.',
    cities: [
      { name: 'Miami', ppm: 219, level: 'Hard' },
      { name: 'Tampa', ppm: 220, level: 'Very Hard' },
      { name: 'Orlando', ppm: 129, level: 'Hard' },
      { name: 'Jacksonville', ppm: 154, level: 'Hard' },
      { name: 'St. Petersburg', ppm: 161, level: 'Hard' },
      { name: 'Hialeah', ppm: 290, level: 'Very Hard' },
      { name: 'Fort Lauderdale', ppm: 157, level: 'Hard' },
      { name: 'Tallahassee', ppm: 126, level: 'Hard' },
      { name: 'Cape Coral', ppm: 85, level: 'Moderate' },
      { name: 'Clearwater', ppm: 178, level: 'Hard' },
    ]
  },
  newyork: {
    name: 'New York',
    code: 'NY',
    avgPPM: 62,
    level: 'moderately hard',
    description: 'The state of New York\'s average water hardness is moderately hard at 62 PPM. NYC has moderately hard water, while areas sourced from lakes can have harder water.',
    cities: [
      { name: 'New York City', ppm: 65, level: 'Moderate' },
      { name: 'Buffalo', ppm: 135, level: 'Hard' },
      { name: 'Rochester', ppm: 118, level: 'Hard' },
      { name: 'Albany', ppm: 54, level: 'Soft' },
      { name: 'Syracuse', ppm: 120, level: 'Hard' },
      { name: 'Yonkers', ppm: 100, level: 'Moderate' },
    ]
  },
  pennsylvania: {
    name: 'Pennsylvania',
    code: 'PA',
    avgPPM: 151,
    level: 'hard',
    description: 'Pennsylvania water is considered hard. The average water hardness for the Pennsylvania resident is around 151 PPM.',
    cities: [
      { name: 'Philadelphia', ppm: 149, level: 'Hard' },
      { name: 'Pittsburgh', ppm: 136, level: 'Hard' },
      { name: 'Allentown', ppm: 176, level: 'Hard' },
      { name: 'Erie', ppm: 160, level: 'Hard' },
      { name: 'Reading', ppm: 265, level: 'Very Hard' },
      { name: 'Scranton', ppm: 280, level: 'Very Hard' },
    ]
  },
  illinois: {
    name: 'Illinois',
    code: 'IL',
    avgPPM: 200,
    level: 'very hard',
    description: 'Illinois is a hard water state. The average water hardness for the Illinois resident is around 200 PPM, which is extremely hard.',
    cities: [
      { name: 'Chicago', ppm: 135, level: 'Hard' },
    ]
  },
  ohio: {
    name: 'Ohio',
    code: 'OH',
    avgPPM: 155,
    level: 'hard to very hard',
    description: 'Ohio water is considered hard to very hard. The average water hardness for the Ohio resident is around 155 PPM.',
    cities: [
      { name: 'Columbus', ppm: 375, level: 'Very Hard' },
    ]
  },
  michigan: {
    name: 'Michigan',
    code: 'MI',
    avgPPM: 242,
    level: 'hard to very hard',
    description: 'Michigan water is considered hard to very hard. Detroit Metro area has moderately hard water, at 104 PPM. Grand Rapids has hard water at 380 PPM.',
    cities: [
      { name: 'Detroit', ppm: 104, level: 'Moderate' },
      { name: 'Grand Rapids', ppm: 380, level: 'Very Hard' },
      { name: 'Ann Arbor', ppm: 129, level: 'Hard' },
      { name: 'Flint', ppm: 242, level: 'Very Hard' },
      { name: 'Lansing', ppm: 99, level: 'Moderate' },
    ]
  },
  arizona: {
    name: 'Arizona',
    code: 'AZ',
    avgPPM: 270,
    level: 'very hard',
    description: 'Arizona has some of the hardest water in the United States, with an average hardness of 270 PPM.',
    cities: [
      { name: 'Phoenix', ppm: 225, level: 'Very Hard' },
      { name: 'Tucson', ppm: 211, level: 'Hard' },
      { name: 'Mesa', ppm: 292, level: 'Very Hard' },
      { name: 'Chandler', ppm: 292, level: 'Very Hard' },
      { name: 'Scottsdale', ppm: 343, level: 'Very Hard' },
      { name: 'Glendale', ppm: 291, level: 'Very Hard' },
    ]
  },
  washington: {
    name: 'Washington',
    code: 'WA',
    avgPPM: 45,
    level: 'soft to moderate',
    description: 'Washington water hardness ranges from very low to moderately hard. The average is between 12 PPM to 218 PPM.',
    cities: [
      { name: 'Seattle', ppm: 22, level: 'Soft' },
      { name: 'Spokane', ppm: 218, level: 'Very Hard' },
      { name: 'Tacoma', ppm: 15, level: 'Soft' },
      { name: 'Vancouver', ppm: 96, level: 'Moderate' },
      { name: 'Bellevue', ppm: 25, level: 'Soft' },
      { name: 'Everett', ppm: 12, level: 'Soft' },
    ]
  }
};

const getLevelColor = (level) => {
  const colors = {
    'Soft': 'bg-green-100 text-green-800',
    'Moderate': 'bg-yellow-100 text-yellow-800',
    'Hard': 'bg-orange-100 text-orange-800',
    'Very Hard': 'bg-red-100 text-red-800'
  };
  return colors[level] || 'bg-gray-100 text-gray-800';
};

export default function StateWaterHardness() {
  const [searchParams] = useSearchParams();
  const stateKey = searchParams.get('state')?.toLowerCase() || 'california';
  const state = stateData[stateKey] || stateData.california;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to={createPageUrl('WaterHardnessMap')} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Water Hardness Map
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {state.name} Water Hardness
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Complete water hardness data and solutions for {state.name} residents
            </p>
          </motion.div>
        </div>
      </section>

      {/* Summary Card */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-br from-cyan-50 to-white border-cyan-100">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Water Hardness Summary
                  </h2>
                  <p className="text-slate-600 mb-4">{state.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white rounded-lg p-4 border border-slate-200">
                      <div className="text-sm text-slate-500 mb-1">Average Hardness</div>
                      <div className="text-2xl font-bold text-slate-900">{state.avgPPM} PPM</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-slate-200">
                      <div className="text-sm text-slate-500 mb-1">Water Classification</div>
                      <div className="text-lg font-semibold text-cyan-600 capitalize">{state.level}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Cities Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Water Hardness by City</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {state.cities.map((city, index) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-4 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <h3 className="font-semibold text-slate-900">{city.name}</h3>
                    </div>
                    <Badge className={getLevelColor(city.level)}>
                      {city.level}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold text-cyan-600">{city.ppm} PPM</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center flex-shrink-0">
                <Info className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Understanding Water Hardness</h2>
                <p className="text-slate-600">
                  Water hardness is measured in Parts Per Million (PPM) or milligrams per liter (mg/L) of calcium carbonate.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Soft Water:</span> 0-60 PPM
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Moderately Hard:</span> 61-120 PPM
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Hard Water:</span> 121-180 PPM
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Very Hard:</span> 180+ PPM
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Ready to solve your hard water problems?
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              HydroFLOW water conditioners provide an eco-friendly, salt-free solution to protect your home and appliances from hard water damage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Products')}>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8 py-6">
                  Shop Products
                </Button>
              </Link>
              <Link to={createPageUrl('Contact')}>
                <Button variant="outline" className="rounded-full px-8 py-6 border-2">
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