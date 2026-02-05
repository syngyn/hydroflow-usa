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
  'AL': { name: 'Alabama', temp: 63, range: '61-70°F', cities: [
    { name: 'Birmingham', temp: 64 }, { name: 'Montgomery', temp: 65 }, { name: 'Mobile', temp: 68 }, { name: 'Huntsville', temp: 62 }
  ]},
  'AK': { name: 'Alaska', temp: 35, range: '<40°F', cities: [
    { name: 'Anchorage', temp: 38 }, { name: 'Fairbanks', temp: 32 }, { name: 'Juneau', temp: 40 }
  ]},
  'AZ': { name: 'Arizona', temp: 68, range: '61-70°F', cities: [
    { name: 'Phoenix', temp: 72 }, { name: 'Tucson', temp: 69 }, { name: 'Flagstaff', temp: 55 }, { name: 'Mesa', temp: 71 }
  ]},
  'AR': { name: 'Arkansas', temp: 58, range: '51-60°F', cities: [
    { name: 'Little Rock', temp: 59 }, { name: 'Fort Smith', temp: 58 }, { name: 'Fayetteville', temp: 56 }
  ]},
  'CA': { name: 'California', temp: 62, range: '51-60°F', cities: [
    { name: 'Los Angeles', temp: 62 }, { name: 'San Francisco', temp: 57 }, { name: 'Sacramento', temp: 63 }, 
    { name: 'San Diego', temp: 65 }, { name: 'San Jose', temp: 66 }, { name: 'Fresno', temp: 62 }
  ]},
  'CO': { name: 'Colorado', temp: 48, range: '41-50°F', cities: [
    { name: 'Denver', temp: 49 }, { name: 'Colorado Springs', temp: 48 }, { name: 'Boulder', temp: 47 }, { name: 'Fort Collins', temp: 46 }
  ]},
  'CT': { name: 'Connecticut', temp: 49, range: '41-50°F', cities: [
    { name: 'Hartford', temp: 49 }, { name: 'New Haven', temp: 50 }, { name: 'Bridgeport', temp: 50 }, { name: 'Stamford', temp: 51 }
  ]},
  'DE': { name: 'Delaware', temp: 54, range: '51-60°F', cities: [
    { name: 'Wilmington', temp: 54 }, { name: 'Dover', temp: 55 }, { name: 'Newark', temp: 53 }
  ]},
  'FL': { name: 'Florida', temp: 71, range: '+71°F', cities: [
    { name: 'Miami', temp: 73 }, { name: 'Tampa', temp: 70 }, { name: 'Jacksonville', temp: 69 }, 
    { name: 'Orlando', temp: 68 }, { name: 'Fort Lauderdale', temp: 74 }, { name: 'West Palm Beach', temp: 76 }
  ]},
  'GA': { name: 'Georgia', temp: 64, range: '61-70°F', cities: [
    { name: 'Atlanta', temp: 63 }, { name: 'Savannah', temp: 67 }, { name: 'Augusta', temp: 65 }, { name: 'Columbus', temp: 66 }
  ]},
  'HI': { name: 'Hawaii', temp: 76, range: '+71°F', cities: [
    { name: 'Honolulu', temp: 76 }, { name: 'Hilo', temp: 75 }, { name: 'Kailua', temp: 76 }
  ]},
  'ID': { name: 'Idaho', temp: 46, range: '41-50°F', cities: [
    { name: 'Boise', temp: 48 }, { name: 'Idaho Falls', temp: 44 }, { name: 'Pocatello', temp: 45 }, { name: 'Meridian', temp: 48 }
  ]},
  'IL': { name: 'Illinois', temp: 52, range: '51-60°F', cities: [
    { name: 'Chicago', temp: 50 }, { name: 'Springfield', temp: 53 }, { name: 'Peoria', temp: 52 }, { name: 'Rockford', temp: 49 }
  ]},
  'IN': { name: 'Indiana', temp: 52, range: '51-60°F', cities: [
    { name: 'Indianapolis', temp: 53 }, { name: 'Fort Wayne', temp: 51 }, { name: 'Evansville', temp: 54 }, { name: 'South Bend', temp: 50 }
  ]},
  'IA': { name: 'Iowa', temp: 48, range: '41-50°F', cities: [
    { name: 'Des Moines', temp: 49 }, { name: 'Cedar Rapids', temp: 47 }, { name: 'Davenport', temp: 48 }, { name: 'Iowa City', temp: 48 }
  ]},
  'KS': { name: 'Kansas', temp: 54, range: '51-60°F', cities: [
    { name: 'Wichita', temp: 56 }, { name: 'Kansas City', temp: 54 }, { name: 'Topeka', temp: 55 }, { name: 'Overland Park', temp: 54 }
  ]},
  'KY': { name: 'Kentucky', temp: 56, range: '51-60°F', cities: [
    { name: 'Louisville', temp: 57 }, { name: 'Lexington', temp: 56 }, { name: 'Bowling Green', temp: 58 }, { name: 'Owensboro', temp: 57 }
  ]},
  'LA': { name: 'Louisiana', temp: 68, range: '61-70°F', cities: [
    { name: 'New Orleans', temp: 70 }, { name: 'Baton Rouge', temp: 69 }, { name: 'Shreveport', temp: 66 }, { name: 'Lafayette', temp: 69 }
  ]},
  'ME': { name: 'Maine', temp: 43, range: '41-50°F', cities: [
    { name: 'Portland', temp: 44 }, { name: 'Bangor', temp: 41 }, { name: 'Augusta', temp: 43 }, { name: 'Lewiston', temp: 42 }
  ]},
  'MD': { name: 'Maryland', temp: 54, range: '51-60°F', cities: [
    { name: 'Baltimore', temp: 55 }, { name: 'Annapolis', temp: 54 }, { name: 'Frederick', temp: 53 }, { name: 'Rockville', temp: 54 }
  ]},
  'MA': { name: 'Massachusetts', temp: 48, range: '41-50°F', cities: [
    { name: 'Boston', temp: 49 }, { name: 'Worcester', temp: 47 }, { name: 'Springfield', temp: 48 }, { name: 'Cambridge', temp: 49 }
  ]},
  'MI': { name: 'Michigan', temp: 46, range: '41-50°F', cities: [
    { name: 'Detroit', temp: 48 }, { name: 'Grand Rapids', temp: 46 }, { name: 'Lansing', temp: 47 }, { name: 'Ann Arbor', temp: 48 }
  ]},
  'MN': { name: 'Minnesota', temp: 42, range: '41-50°F', cities: [
    { name: 'Minneapolis', temp: 43 }, { name: 'St. Paul', temp: 43 }, { name: 'Duluth', temp: 38 }, { name: 'Rochester', temp: 42 }
  ]},
  'MS': { name: 'Mississippi', temp: 65, range: '61-70°F', cities: [
    { name: 'Jackson', temp: 65 }, { name: 'Biloxi', temp: 68 }, { name: 'Hattiesburg', temp: 66 }, { name: 'Gulfport', temp: 68 }
  ]},
  'MO': { name: 'Missouri', temp: 54, range: '51-60°F', cities: [
    { name: 'Kansas City', temp: 54 }, { name: 'St. Louis', temp: 55 }, { name: 'Springfield', temp: 56 }, { name: 'Columbia', temp: 54 }
  ]},
  'MT': { name: 'Montana', temp: 42, range: '41-50°F', cities: [
    { name: 'Billings', temp: 44 }, { name: 'Missoula', temp: 42 }, { name: 'Great Falls', temp: 40 }, { name: 'Bozeman', temp: 41 }
  ]},
  'NE': { name: 'Nebraska', temp: 49, range: '41-50°F', cities: [
    { name: 'Omaha', temp: 49 }, { name: 'Lincoln', temp: 50 }, { name: 'Grand Island', temp: 48 }, { name: 'Bellevue', temp: 49 }
  ]},
  'NV': { name: 'Nevada', temp: 56, range: '51-60°F', cities: [
    { name: 'Las Vegas', temp: 64 }, { name: 'Reno', temp: 50 }, { name: 'Carson City', temp: 51 }, { name: 'Henderson', temp: 64 }
  ]},
  'NH': { name: 'New Hampshire', temp: 45, range: '41-50°F', cities: [
    { name: 'Manchester', temp: 45 }, { name: 'Nashua', temp: 45 }, { name: 'Concord', temp: 44 }, { name: 'Dover', temp: 46 }
  ]},
  'NJ': { name: 'New Jersey', temp: 52, range: '51-60°F', cities: [
    { name: 'Newark', temp: 53 }, { name: 'Jersey City', temp: 53 }, { name: 'Trenton', temp: 52 }, { name: 'Atlantic City', temp: 54 }
  ]},
  'NM': { name: 'New Mexico', temp: 58, range: '51-60°F', cities: [
    { name: 'Albuquerque', temp: 59 }, { name: 'Santa Fe', temp: 52 }, { name: 'Las Cruces', temp: 62 }, { name: 'Rio Rancho', temp: 59 }
  ]},
  'NY': { name: 'New York', temp: 51, range: '51-60°F', cities: [
    { name: 'New York City', temp: 54 }, { name: 'Buffalo', temp: 50 }, { name: 'Rochester', temp: 52 }, 
    { name: 'Albany', temp: 52 }, { name: 'Syracuse', temp: 52 }
  ]},
  'NC': { name: 'North Carolina', temp: 59, range: '51-60°F', cities: [
    { name: 'Charlotte', temp: 60 }, { name: 'Raleigh', temp: 58 }, { name: 'Greensboro', temp: 57 }, { name: 'Durham', temp: 58 }
  ]},
  'ND': { name: 'North Dakota', temp: 38, range: '<40°F', cities: [
    { name: 'Fargo', temp: 39 }, { name: 'Bismarck', temp: 37 }, { name: 'Grand Forks', temp: 38 }, { name: 'Minot', temp: 37 }
  ]},
  'OH': { name: 'Ohio', temp: 52, range: '51-60°F', cities: [
    { name: 'Columbus', temp: 53 }, { name: 'Cleveland', temp: 50 }, { name: 'Cincinnati', temp: 54 }, { name: 'Toledo', temp: 50 }
  ]},
  'OK': { name: 'Oklahoma', temp: 61, range: '61-70°F', cities: [
    { name: 'Oklahoma City', temp: 61 }, { name: 'Tulsa', temp: 60 }, { name: 'Norman', temp: 61 }, { name: 'Broken Arrow', temp: 60 }
  ]},
  'OR': { name: 'Oregon', temp: 51, range: '51-60°F', cities: [
    { name: 'Portland', temp: 52 }, { name: 'Eugene', temp: 51 }, { name: 'Salem', temp: 52 }, { name: 'Bend', temp: 48 }
  ]},
  'PA': { name: 'Pennsylvania', temp: 51, range: '51-60°F', cities: [
    { name: 'Philadelphia', temp: 53 }, { name: 'Pittsburgh', temp: 50 }, { name: 'Harrisburg', temp: 51 }, { name: 'Allentown', temp: 51 }
  ]},
  'RI': { name: 'Rhode Island', temp: 49, range: '41-50°F', cities: [
    { name: 'Providence', temp: 49 }, { name: 'Warwick', temp: 49 }, { name: 'Newport', temp: 50 }
  ]},
  'SC': { name: 'South Carolina', temp: 63, range: '61-70°F', cities: [
    { name: 'Columbia', temp: 64 }, { name: 'Charleston', temp: 66 }, { name: 'Greenville', temp: 60 }, { name: 'Myrtle Beach', temp: 64 }
  ]},
  'SD': { name: 'South Dakota', temp: 44, range: '41-50°F', cities: [
    { name: 'Sioux Falls', temp: 45 }, { name: 'Rapid City', temp: 42 }, { name: 'Aberdeen', temp: 42 }, { name: 'Brookings', temp: 44 }
  ]},
  'TN': { name: 'Tennessee', temp: 59, range: '51-60°F', cities: [
    { name: 'Nashville', temp: 59 }, { name: 'Memphis', temp: 61 }, { name: 'Knoxville', temp: 57 }, { name: 'Chattanooga', temp: 58 }
  ]},
  'TX': { name: 'Texas', temp: 65, range: '61-70°F', cities: [
    { name: 'Houston', temp: 66 }, { name: 'Dallas', temp: 64 }, { name: 'Austin', temp: 61 }, 
    { name: 'San Antonio', temp: 68 }, { name: 'El Paso', temp: 65 }, { name: 'Fort Worth', temp: 64 }
  ]},
  'UT': { name: 'Utah', temp: 50, range: '41-50°F', cities: [
    { name: 'Salt Lake City', temp: 51 }, { name: 'Provo', temp: 50 }, { name: 'Ogden', temp: 50 }, { name: 'West Valley City', temp: 51 }
  ]},
  'VT': { name: 'Vermont', temp: 44, range: '41-50°F', cities: [
    { name: 'Burlington', temp: 45 }, { name: 'Montpelier', temp: 43 }, { name: 'Rutland', temp: 44 }, { name: 'South Burlington', temp: 45 }
  ]},
  'VA': { name: 'Virginia', temp: 55, range: '51-60°F', cities: [
    { name: 'Richmond', temp: 56 }, { name: 'Virginia Beach', temp: 57 }, { name: 'Norfolk', temp: 57 }, { name: 'Arlington', temp: 54 }
  ]},
  'WA': { name: 'Washington', temp: 49, range: '41-50°F', cities: [
    { name: 'Seattle', temp: 50 }, { name: 'Spokane', temp: 46 }, { name: 'Tacoma', temp: 50 }, { name: 'Vancouver', temp: 51 }
  ]},
  'WV': { name: 'West Virginia', temp: 52, range: '51-60°F', cities: [
    { name: 'Charleston', temp: 54 }, { name: 'Huntington', temp: 53 }, { name: 'Morgantown', temp: 51 }, { name: 'Parkersburg', temp: 52 }
  ]},
  'WI': { name: 'Wisconsin', temp: 45, range: '41-50°F', cities: [
    { name: 'Milwaukee', temp: 46 }, { name: 'Madison', temp: 45 }, { name: 'Green Bay', temp: 43 }, { name: 'Kenosha', temp: 46 }
  ]},
  'WY': { name: 'Wyoming', temp: 44, range: '41-50°F', cities: [
    { name: 'Cheyenne', temp: 45 }, { name: 'Casper', temp: 44 }, { name: 'Laramie', temp: 42 }, { name: 'Gillette', temp: 43 }
  ]}
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
              Select your state below to view average groundwater temperatures and water heater recommendations
            </p>
          </motion.div>
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