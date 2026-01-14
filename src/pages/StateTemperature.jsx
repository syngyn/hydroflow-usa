import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Thermometer, MapPin, ArrowLeft, Info } from 'lucide-react';
import { Button } from "@/components/ui/button";

const stateTemperatures = {
  'AL': { name: 'Alabama', temp: 63, range: '61-70°F', description: 'Alabama has warm groundwater temperatures ranging from 61-70°F', cities: [
    { name: 'Birmingham', temp: 64 }, { name: 'Montgomery', temp: 65 }, { name: 'Mobile', temp: 68 }, { name: 'Huntsville', temp: 62 }
  ]},
  'AK': { name: 'Alaska', temp: 35, range: '<40°F', description: 'Alaska has the coldest groundwater in the US, typically below 40°F', cities: [
    { name: 'Anchorage', temp: 38 }, { name: 'Fairbanks', temp: 32 }, { name: 'Juneau', temp: 40 }
  ]},
  'AZ': { name: 'Arizona', temp: 68, range: '61-70°F', description: 'Arizona groundwater ranges from warm to hot due to desert climate', cities: [
    { name: 'Phoenix', temp: 72 }, { name: 'Tucson', temp: 69 }, { name: 'Flagstaff', temp: 55 }, { name: 'Mesa', temp: 71 }
  ]},
  'AR': { name: 'Arkansas', temp: 58, range: '51-60°F', description: 'Arkansas has moderate groundwater temperatures in the 51-60°F range', cities: [
    { name: 'Little Rock', temp: 59 }, { name: 'Fort Smith', temp: 58 }, { name: 'Fayetteville', temp: 56 }
  ]},
  'CA': { name: 'California', temp: 62, range: '51-60°F', description: 'California temperatures vary widely from coastal to inland areas', cities: [
    { name: 'Los Angeles', temp: 62 }, { name: 'San Francisco', temp: 57 }, { name: 'Sacramento', temp: 63 }, { name: 'San Diego', temp: 65 }, { name: 'San Jose', temp: 66 }, { name: 'Fresno', temp: 62 }
  ]},
  'CO': { name: 'Colorado', temp: 48, range: '41-50°F', description: 'Mountain state with cool groundwater temperatures', cities: [
    { name: 'Denver', temp: 49 }, { name: 'Colorado Springs', temp: 48 }, { name: 'Boulder', temp: 47 }, { name: 'Fort Collins', temp: 46 }
  ]},
  'CT': { name: 'Connecticut', temp: 49, range: '41-50°F', description: 'New England state with cool groundwater', cities: [
    { name: 'Hartford', temp: 49 }, { name: 'New Haven', temp: 50 }, { name: 'Bridgeport', temp: 50 }, { name: 'Stamford', temp: 51 }
  ]},
  'DE': { name: 'Delaware', temp: 54, range: '51-60°F', description: 'Mid-Atlantic state with moderate temperatures', cities: [
    { name: 'Wilmington', temp: 54 }, { name: 'Dover', temp: 55 }, { name: 'Newark', temp: 53 }
  ]},
  'FL': { name: 'Florida', temp: 71, range: '+71°F', description: 'Florida has some of the warmest groundwater in the continental US', cities: [
    { name: 'Miami', temp: 73 }, { name: 'Tampa', temp: 70 }, { name: 'Jacksonville', temp: 69 }, { name: 'Orlando', temp: 68 }, { name: 'Fort Lauderdale', temp: 74 }, { name: 'West Palm Beach', temp: 76 }
  ]},
  'GA': { name: 'Georgia', temp: 64, range: '61-70°F', description: 'Southern state with warm groundwater', cities: [
    { name: 'Atlanta', temp: 63 }, { name: 'Savannah', temp: 67 }, { name: 'Augusta', temp: 65 }, { name: 'Columbus', temp: 66 }
  ]},
  'HI': { name: 'Hawaii', temp: 76, range: '+71°F', description: 'Tropical climate with the warmest groundwater temperatures', cities: [
    { name: 'Honolulu', temp: 76 }, { name: 'Hilo', temp: 75 }, { name: 'Kailua', temp: 76 }
  ]},
  'ID': { name: 'Idaho', temp: 46, range: '41-50°F', description: 'Northwestern state with cool groundwater', cities: [
    { name: 'Boise', temp: 48 }, { name: 'Idaho Falls', temp: 44 }, { name: 'Pocatello', temp: 45 }, { name: 'Meridian', temp: 48 }
  ]},
  'IL': { name: 'Illinois', temp: 52, range: '51-60°F', description: 'Midwest state with moderate groundwater temperatures', cities: [
    { name: 'Chicago', temp: 50 }, { name: 'Springfield', temp: 53 }, { name: 'Peoria', temp: 52 }, { name: 'Rockford', temp: 49 }
  ]},
  'IN': { name: 'Indiana', temp: 52, range: '51-60°F', description: 'Midwest state with moderate temperatures', cities: [
    { name: 'Indianapolis', temp: 53 }, { name: 'Fort Wayne', temp: 51 }, { name: 'Evansville', temp: 54 }, { name: 'South Bend', temp: 50 }
  ]},
  'IA': { name: 'Iowa', temp: 48, range: '41-50°F', description: 'Upper Midwest with cool groundwater', cities: [
    { name: 'Des Moines', temp: 49 }, { name: 'Cedar Rapids', temp: 47 }, { name: 'Davenport', temp: 48 }, { name: 'Iowa City', temp: 48 }
  ]},
  'KS': { name: 'Kansas', temp: 54, range: '51-60°F', description: 'Great Plains state with moderate temperatures', cities: [
    { name: 'Wichita', temp: 56 }, { name: 'Kansas City', temp: 54 }, { name: 'Topeka', temp: 55 }, { name: 'Overland Park', temp: 54 }
  ]},
  'KY': { name: 'Kentucky', temp: 56, range: '51-60°F', description: 'Southern border state with moderate groundwater', cities: [
    { name: 'Louisville', temp: 57 }, { name: 'Lexington', temp: 56 }, { name: 'Bowling Green', temp: 58 }, { name: 'Owensboro', temp: 57 }
  ]},
  'LA': { name: 'Louisiana', temp: 68, range: '61-70°F', description: 'Southern state with warm groundwater', cities: [
    { name: 'New Orleans', temp: 70 }, { name: 'Baton Rouge', temp: 69 }, { name: 'Shreveport', temp: 66 }, { name: 'Lafayette', temp: 69 }
  ]},
  'ME': { name: 'Maine', temp: 43, range: '41-50°F', description: 'Northern New England with cool groundwater', cities: [
    { name: 'Portland', temp: 44 }, { name: 'Bangor', temp: 41 }, { name: 'Augusta', temp: 43 }, { name: 'Lewiston', temp: 42 }
  ]},
  'MD': { name: 'Maryland', temp: 54, range: '51-60°F', description: 'Mid-Atlantic state with moderate temperatures', cities: [
    { name: 'Baltimore', temp: 55 }, { name: 'Annapolis', temp: 54 }, { name: 'Frederick', temp: 53 }, { name: 'Rockville', temp: 54 }
  ]},
  'MA': { name: 'Massachusetts', temp: 48, range: '41-50°F', description: 'New England state with cool groundwater', cities: [
    { name: 'Boston', temp: 49 }, { name: 'Worcester', temp: 47 }, { name: 'Springfield', temp: 48 }, { name: 'Cambridge', temp: 49 }
  ]},
  'MI': { name: 'Michigan', temp: 46, range: '41-50°F', description: 'Great Lakes state with cool groundwater', cities: [
    { name: 'Detroit', temp: 48 }, { name: 'Grand Rapids', temp: 46 }, { name: 'Lansing', temp: 47 }, { name: 'Ann Arbor', temp: 48 }
  ]},
  'MN': { name: 'Minnesota', temp: 42, range: '41-50°F', description: 'Northern state with cool groundwater temperatures', cities: [
    { name: 'Minneapolis', temp: 43 }, { name: 'St. Paul', temp: 43 }, { name: 'Duluth', temp: 38 }, { name: 'Rochester', temp: 42 }
  ]},
  'MS': { name: 'Mississippi', temp: 65, range: '61-70°F', description: 'Deep South state with warm groundwater', cities: [
    { name: 'Jackson', temp: 65 }, { name: 'Biloxi', temp: 68 }, { name: 'Hattiesburg', temp: 66 }, { name: 'Gulfport', temp: 68 }
  ]},
  'MO': { name: 'Missouri', temp: 54, range: '51-60°F', description: 'Central state with moderate groundwater', cities: [
    { name: 'Kansas City', temp: 54 }, { name: 'St. Louis', temp: 55 }, { name: 'Springfield', temp: 56 }, { name: 'Columbia', temp: 54 }
  ]},
  'MT': { name: 'Montana', temp: 42, range: '41-50°F', description: 'Mountain state with cool groundwater', cities: [
    { name: 'Billings', temp: 44 }, { name: 'Missoula', temp: 42 }, { name: 'Great Falls', temp: 40 }, { name: 'Bozeman', temp: 41 }
  ]},
  'NE': { name: 'Nebraska', temp: 49, range: '41-50°F', description: 'Great Plains state with cool to moderate groundwater', cities: [
    { name: 'Omaha', temp: 49 }, { name: 'Lincoln', temp: 50 }, { name: 'Grand Island', temp: 48 }, { name: 'Bellevue', temp: 49 }
  ]},
  'NV': { name: 'Nevada', temp: 56, range: '51-60°F', description: 'Desert state with varying groundwater temperatures', cities: [
    { name: 'Las Vegas', temp: 64 }, { name: 'Reno', temp: 50 }, { name: 'Carson City', temp: 51 }, { name: 'Henderson', temp: 64 }
  ]},
  'NH': { name: 'New Hampshire', temp: 45, range: '41-50°F', description: 'Northern New England with cool groundwater', cities: [
    { name: 'Manchester', temp: 45 }, { name: 'Nashua', temp: 45 }, { name: 'Concord', temp: 44 }, { name: 'Dover', temp: 46 }
  ]},
  'NJ': { name: 'New Jersey', temp: 52, range: '51-60°F', description: 'Mid-Atlantic state with moderate groundwater', cities: [
    { name: 'Newark', temp: 53 }, { name: 'Jersey City', temp: 53 }, { name: 'Trenton', temp: 52 }, { name: 'Atlantic City', temp: 54 }
  ]},
  'NM': { name: 'New Mexico', temp: 58, range: '51-60°F', description: 'Southwestern state with moderate to warm groundwater', cities: [
    { name: 'Albuquerque', temp: 59 }, { name: 'Santa Fe', temp: 52 }, { name: 'Las Cruces', temp: 62 }, { name: 'Rio Rancho', temp: 59 }
  ]},
  'NY': { name: 'New York', temp: 51, range: '51-60°F', description: 'Northeast state with cool to moderate groundwater', cities: [
    { name: 'New York City', temp: 54 }, { name: 'Buffalo', temp: 50 }, { name: 'Rochester', temp: 52 }, { name: 'Albany', temp: 52 }, { name: 'Syracuse', temp: 52 }
  ]},
  'NC': { name: 'North Carolina', temp: 59, range: '51-60°F', description: 'Southeastern state with moderate groundwater', cities: [
    { name: 'Charlotte', temp: 60 }, { name: 'Raleigh', temp: 58 }, { name: 'Greensboro', temp: 57 }, { name: 'Durham', temp: 58 }
  ]},
  'ND': { name: 'North Dakota', temp: 38, range: '<40°F', description: 'Northern plains with very cool groundwater', cities: [
    { name: 'Fargo', temp: 39 }, { name: 'Bismarck', temp: 37 }, { name: 'Grand Forks', temp: 38 }, { name: 'Minot', temp: 37 }
  ]},
  'OH': { name: 'Ohio', temp: 52, range: '51-60°F', description: 'Midwest state with moderate groundwater', cities: [
    { name: 'Columbus', temp: 53 }, { name: 'Cleveland', temp: 50 }, { name: 'Cincinnati', temp: 54 }, { name: 'Toledo', temp: 50 }
  ]},
  'OK': { name: 'Oklahoma', temp: 61, range: '61-70°F', description: 'Southern plains with warm groundwater', cities: [
    { name: 'Oklahoma City', temp: 61 }, { name: 'Tulsa', temp: 60 }, { name: 'Norman', temp: 61 }, { name: 'Broken Arrow', temp: 60 }
  ]},
  'OR': { name: 'Oregon', temp: 51, range: '51-60°F', description: 'Pacific Northwest with cool to moderate groundwater', cities: [
    { name: 'Portland', temp: 52 }, { name: 'Eugene', temp: 51 }, { name: 'Salem', temp: 52 }, { name: 'Bend', temp: 48 }
  ]},
  'PA': { name: 'Pennsylvania', temp: 51, range: '51-60°F', description: 'Mid-Atlantic state with moderate groundwater', cities: [
    { name: 'Philadelphia', temp: 53 }, { name: 'Pittsburgh', temp: 50 }, { name: 'Harrisburg', temp: 51 }, { name: 'Allentown', temp: 51 }
  ]},
  'RI': { name: 'Rhode Island', temp: 49, range: '41-50°F', description: 'Small New England state with cool groundwater', cities: [
    { name: 'Providence', temp: 49 }, { name: 'Warwick', temp: 49 }, { name: 'Newport', temp: 50 }
  ]},
  'SC': { name: 'South Carolina', temp: 63, range: '61-70°F', description: 'Southern state with warm groundwater', cities: [
    { name: 'Columbia', temp: 64 }, { name: 'Charleston', temp: 66 }, { name: 'Greenville', temp: 60 }, { name: 'Myrtle Beach', temp: 64 }
  ]},
  'SD': { name: 'South Dakota', temp: 44, range: '41-50°F', description: 'Northern plains with cool groundwater', cities: [
    { name: 'Sioux Falls', temp: 45 }, { name: 'Rapid City', temp: 42 }, { name: 'Aberdeen', temp: 42 }, { name: 'Brookings', temp: 44 }
  ]},
  'TN': { name: 'Tennessee', temp: 59, range: '51-60°F', description: 'Southern border state with moderate to warm groundwater', cities: [
    { name: 'Nashville', temp: 59 }, { name: 'Memphis', temp: 61 }, { name: 'Knoxville', temp: 57 }, { name: 'Chattanooga', temp: 58 }
  ]},
  'TX': { name: 'Texas', temp: 65, range: '61-70°F', description: 'Large southern state with warm groundwater varying by region', cities: [
    { name: 'Houston', temp: 66 }, { name: 'Dallas', temp: 64 }, { name: 'Austin', temp: 61 }, { name: 'San Antonio', temp: 68 }, { name: 'El Paso', temp: 65 }, { name: 'Fort Worth', temp: 64 }
  ]},
  'UT': { name: 'Utah', temp: 50, range: '41-50°F', description: 'Mountain state with cool groundwater', cities: [
    { name: 'Salt Lake City', temp: 51 }, { name: 'Provo', temp: 50 }, { name: 'Ogden', temp: 50 }, { name: 'West Valley City', temp: 51 }
  ]},
  'VT': { name: 'Vermont', temp: 44, range: '41-50°F', description: 'Northern New England with cool groundwater', cities: [
    { name: 'Burlington', temp: 45 }, { name: 'Montpelier', temp: 43 }, { name: 'Rutland', temp: 44 }, { name: 'South Burlington', temp: 45 }
  ]},
  'VA': { name: 'Virginia', temp: 55, range: '51-60°F', description: 'Mid-Atlantic state with moderate groundwater', cities: [
    { name: 'Richmond', temp: 56 }, { name: 'Virginia Beach', temp: 57 }, { name: 'Norfolk', temp: 57 }, { name: 'Arlington', temp: 54 }
  ]},
  'WA': { name: 'Washington', temp: 49, range: '41-50°F', description: 'Pacific Northwest with cool groundwater', cities: [
    { name: 'Seattle', temp: 50 }, { name: 'Spokane', temp: 46 }, { name: 'Tacoma', temp: 50 }, { name: 'Vancouver', temp: 51 }
  ]},
  'WV': { name: 'West Virginia', temp: 52, range: '51-60°F', description: 'Appalachian state with moderate groundwater', cities: [
    { name: 'Charleston', temp: 54 }, { name: 'Huntington', temp: 53 }, { name: 'Morgantown', temp: 51 }, { name: 'Parkersburg', temp: 52 }
  ]},
  'WI': { name: 'Wisconsin', temp: 45, range: '41-50°F', description: 'Great Lakes state with cool groundwater', cities: [
    { name: 'Milwaukee', temp: 46 }, { name: 'Madison', temp: 45 }, { name: 'Green Bay', temp: 43 }, { name: 'Kenosha', temp: 46 }
  ]},
  'WY': { name: 'Wyoming', temp: 44, range: '41-50°F', description: 'Mountain state with cool groundwater', cities: [
    { name: 'Cheyenne', temp: 45 }, { name: 'Casper', temp: 44 }, { name: 'Laramie', temp: 42 }, { name: 'Gillette', temp: 43 }
  ]}
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
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-orange-50 rounded-3xl p-8 border-l-4 border-orange-500 mb-12"
          >
            <p className="text-slate-700 leading-relaxed text-lg">
              {stateData.description}
            </p>
          </motion.div>

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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stateData.cities.map((city, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-orange-50 transition-colors">
                  <span className="text-slate-700 font-medium">{city.name}</span>
                  <span className="font-bold text-orange-600">{city.temp}°F</span>
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