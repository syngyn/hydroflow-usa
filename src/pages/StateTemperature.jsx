import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Thermometer, MapPin, ArrowLeft, Info } from 'lucide-react';
import { Button } from "@/components/ui/button";

const stateTemperatures = {
  'AL': { name: 'Alabama', temp: 63, range: '61-70°F', cities: ['Birmingham: 64°F', 'Montgomery: 65°F', 'Mobile: 68°F'] },
  'AK': { name: 'Alaska', temp: 35, range: '<40°F', cities: ['Anchorage: 38°F', 'Fairbanks: 32°F', 'Juneau: 40°F'] },
  'AZ': { name: 'Arizona', temp: 68, range: '61-70°F', cities: ['Phoenix: 72°F', 'Tucson: 69°F', 'Flagstaff: 55°F'] },
  'AR': { name: 'Arkansas', temp: 58, range: '51-60°F', cities: ['Little Rock: 59°F', 'Fort Smith: 58°F', 'Fayetteville: 56°F'] },
  'CA': { name: 'California', temp: 60, range: '51-60°F', cities: ['Los Angeles: 64°F', 'San Francisco: 56°F', 'Sacramento: 59°F'] },
  'CO': { name: 'Colorado', temp: 48, range: '41-50°F', cities: ['Denver: 49°F', 'Colorado Springs: 48°F', 'Boulder: 47°F'] },
  'CT': { name: 'Connecticut', temp: 48, range: '41-50°F', cities: ['Hartford: 49°F', 'New Haven: 50°F', 'Bridgeport: 50°F'] },
  'DE': { name: 'Delaware', temp: 54, range: '51-60°F', cities: ['Wilmington: 54°F', 'Dover: 55°F', 'Newark: 53°F'] },
  'FL': { name: 'Florida', temp: 74, range: '+71°F', cities: ['Miami: 77°F', 'Tampa: 74°F', 'Jacksonville: 71°F'] },
  'GA': { name: 'Georgia', temp: 64, range: '61-70°F', cities: ['Atlanta: 63°F', 'Savannah: 67°F', 'Augusta: 65°F'] },
  'HI': { name: 'Hawaii', temp: 76, range: '+71°F', cities: ['Honolulu: 76°F', 'Hilo: 75°F', 'Kailua: 76°F'] },
  'ID': { name: 'Idaho', temp: 46, range: '41-50°F', cities: ['Boise: 48°F', 'Idaho Falls: 44°F', 'Pocatello: 45°F'] },
  'IL': { name: 'Illinois', temp: 52, range: '51-60°F', cities: ['Chicago: 50°F', 'Springfield: 53°F', 'Peoria: 52°F'] },
  'IN': { name: 'Indiana', temp: 52, range: '51-60°F', cities: ['Indianapolis: 53°F', 'Fort Wayne: 51°F', 'Evansville: 54°F'] },
  'IA': { name: 'Iowa', temp: 48, range: '41-50°F', cities: ['Des Moines: 49°F', 'Cedar Rapids: 47°F', 'Davenport: 48°F'] },
  'KS': { name: 'Kansas', temp: 54, range: '51-60°F', cities: ['Wichita: 56°F', 'Kansas City: 54°F', 'Topeka: 55°F'] },
  'KY': { name: 'Kentucky', temp: 56, range: '51-60°F', cities: ['Louisville: 57°F', 'Lexington: 56°F', 'Bowling Green: 58°F'] },
  'LA': { name: 'Louisiana', temp: 68, range: '61-70°F', cities: ['New Orleans: 70°F', 'Baton Rouge: 69°F', 'Shreveport: 66°F'] },
  'ME': { name: 'Maine', temp: 42, range: '41-50°F', cities: ['Portland: 44°F', 'Bangor: 41°F', 'Augusta: 43°F'] },
  'MD': { name: 'Maryland', temp: 54, range: '51-60°F', cities: ['Baltimore: 55°F', 'Annapolis: 54°F', 'Frederick: 53°F'] },
  'MA': { name: 'Massachusetts', temp: 48, range: '41-50°F', cities: ['Boston: 49°F', 'Worcester: 47°F', 'Springfield: 48°F'] },
  'MI': { name: 'Michigan', temp: 46, range: '41-50°F', cities: ['Detroit: 48°F', 'Grand Rapids: 46°F', 'Lansing: 47°F'] },
  'MN': { name: 'Minnesota', temp: 42, range: '41-50°F', cities: ['Minneapolis: 43°F', 'St. Paul: 43°F', 'Duluth: 38°F'] },
  'MS': { name: 'Mississippi', temp: 64, range: '61-70°F', cities: ['Jackson: 65°F', 'Biloxi: 68°F', 'Hattiesburg: 66°F'] },
  'MO': { name: 'Missouri', temp: 54, range: '51-60°F', cities: ['Kansas City: 54°F', 'St. Louis: 55°F', 'Springfield: 56°F'] },
  'MT': { name: 'Montana', temp: 42, range: '41-50°F', cities: ['Billings: 44°F', 'Missoula: 42°F', 'Great Falls: 40°F'] },
  'NE': { name: 'Nebraska', temp: 48, range: '41-50°F', cities: ['Omaha: 49°F', 'Lincoln: 50°F', 'Grand Island: 48°F'] },
  'NV': { name: 'Nevada', temp: 54, range: '51-60°F', cities: ['Las Vegas: 64°F', 'Reno: 50°F', 'Carson City: 51°F'] },
  'NH': { name: 'New Hampshire', temp: 44, range: '41-50°F', cities: ['Manchester: 45°F', 'Nashua: 45°F', 'Concord: 44°F'] },
  'NJ': { name: 'New Jersey', temp: 52, range: '51-60°F', cities: ['Newark: 53°F', 'Jersey City: 53°F', 'Trenton: 52°F'] },
  'NM': { name: 'New Mexico', temp: 58, range: '51-60°F', cities: ['Albuquerque: 59°F', 'Santa Fe: 52°F', 'Las Cruces: 62°F'] },
  'NY': { name: 'New York', temp: 48, range: '41-50°F', cities: ['New York City: 52°F', 'Buffalo: 46°F', 'Rochester: 47°F'] },
  'NC': { name: 'North Carolina', temp: 58, range: '51-60°F', cities: ['Charlotte: 60°F', 'Raleigh: 58°F', 'Greensboro: 57°F'] },
  'ND': { name: 'North Dakota', temp: 38, range: '<40°F', cities: ['Fargo: 39°F', 'Bismarck: 37°F', 'Grand Forks: 38°F'] },
  'OH': { name: 'Ohio', temp: 52, range: '51-60°F', cities: ['Columbus: 53°F', 'Cleveland: 50°F', 'Cincinnati: 54°F'] },
  'OK': { name: 'Oklahoma', temp: 60, range: '51-60°F', cities: ['Oklahoma City: 61°F', 'Tulsa: 60°F', 'Norman: 61°F'] },
  'OR': { name: 'Oregon', temp: 50, range: '41-50°F', cities: ['Portland: 52°F', 'Eugene: 51°F', 'Salem: 52°F'] },
  'PA': { name: 'Pennsylvania', temp: 50, range: '41-50°F', cities: ['Philadelphia: 53°F', 'Pittsburgh: 50°F', 'Harrisburg: 51°F'] },
  'RI': { name: 'Rhode Island', temp: 48, range: '41-50°F', cities: ['Providence: 49°F', 'Warwick: 49°F', 'Newport: 50°F'] },
  'SC': { name: 'South Carolina', temp: 62, range: '61-70°F', cities: ['Columbia: 64°F', 'Charleston: 66°F', 'Greenville: 60°F'] },
  'SD': { name: 'South Dakota', temp: 44, range: '41-50°F', cities: ['Sioux Falls: 45°F', 'Rapid City: 42°F', 'Aberdeen: 42°F'] },
  'TN': { name: 'Tennessee', temp: 58, range: '51-60°F', cities: ['Nashville: 59°F', 'Memphis: 61°F', 'Knoxville: 57°F'] },
  'TX': { name: 'Texas', temp: 66, range: '61-70°F', cities: ['Houston: 70°F', 'Dallas: 65°F', 'Austin: 68°F'] },
  'UT': { name: 'Utah', temp: 50, range: '41-50°F', cities: ['Salt Lake City: 51°F', 'Provo: 50°F', 'Ogden: 50°F'] },
  'VT': { name: 'Vermont', temp: 44, range: '41-50°F', cities: ['Burlington: 45°F', 'Montpelier: 43°F', 'Rutland: 44°F'] },
  'VA': { name: 'Virginia', temp: 54, range: '51-60°F', cities: ['Richmond: 56°F', 'Virginia Beach: 57°F', 'Norfolk: 57°F'] },
  'WA': { name: 'Washington', temp: 48, range: '41-50°F', cities: ['Seattle: 50°F', 'Spokane: 46°F', 'Tacoma: 50°F'] },
  'WV': { name: 'West Virginia', temp: 52, range: '51-60°F', cities: ['Charleston: 54°F', 'Huntington: 53°F', 'Morgantown: 51°F'] },
  'WI': { name: 'Wisconsin', temp: 44, range: '41-50°F', cities: ['Milwaukee: 46°F', 'Madison: 45°F', 'Green Bay: 43°F'] },
  'WY': { name: 'Wyoming', temp: 44, range: '41-50°F', cities: ['Cheyenne: 45°F', 'Casper: 44°F', 'Laramie: 42°F'] }
};

export default function StateTemperature() {
  const [stateData, setStateData] = useState(null);
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const stateCode = urlParams.get('state');
    if (stateCode && stateTemperatures[stateCode]) {
      setStateData({ code: stateCode, ...stateTemperatures[stateCode] });
    }
  }, []);

  if (!stateData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-orange-900 via-orange-800 to-orange-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to={createPageUrl('GroundwaterTemperatureMap')} className="inline-flex items-center gap-2 text-orange-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Temperature Map
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Thermometer className="w-12 h-12 text-orange-400" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {stateData.name} Groundwater Temperature
              </h1>
            </div>
            <p className="text-xl text-orange-100">
              Average groundwater temperature data for {stateData.name}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Average Temperature Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-4">Average State Temperature</h2>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-bold">{stateData.temp}°F</span>
              </div>
              <p className="text-orange-100 mt-4">Temperature Range: {stateData.range}</p>
            </motion.div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-slate-900">Why It Matters</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Groundwater temperature affects water heater efficiency and sizing. Lower temperatures require more energy to heat water, 
                while higher temperatures can reduce heating costs.
              </p>
            </motion.div>
          </div>

          {/* Cities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-orange-600" />
              Major Cities in {stateData.name}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {stateData.cities.map((city, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <span className="text-slate-700">{city.split(':')[0]}</span>
                  <span className="font-bold text-orange-600">{city.split(':')[1]}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Need Water Treatment Solutions for {stateData.name}?
            </h2>
            <p className="text-slate-600 mb-6">
              Our experts can recommend the best HydroFLOW products for your area's water conditions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Contact')}>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 py-6">
                  Contact Us
                </Button>
              </Link>
              <Link to={createPageUrl('Products')}>
                <Button variant="outline" className="rounded-full px-8 py-6 border-2">
                  Browse Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}