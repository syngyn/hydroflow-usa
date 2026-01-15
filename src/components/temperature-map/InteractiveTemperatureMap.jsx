import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';

// Approximate city coordinates on the map (as percentages)
const cityCoordinates = {
  // Alabama
  'Birmingham': { x: 70, y: 61.5 },
  'Montgomery': { x: 69.5, y: 63 },
  'Mobile': { x: 68.5, y: 66 },
  'Huntsville': { x: 70, y: 59.5 },
  
  // Alaska
  'Anchorage': { x: 8, y: 88 },
  'Fairbanks': { x: 10, y: 82 },
  'Juneau': { x: 14, y: 85 },
  
  // Arizona
  'Phoenix': { x: 20, y: 63 },
  'Tucson': { x: 21, y: 65.5 },
  'Flagstaff': { x: 20.5, y: 60.5 },
  'Mesa': { x: 20.2, y: 63.2 },
  
  // Arkansas
  'Little Rock': { x: 60.5, y: 60 },
  'Fort Smith': { x: 59, y: 59 },
  'Fayetteville': { x: 59, y: 57.5 },
  
  // California
  'Los Angeles': { x: 13, y: 64 },
  'San Francisco': { x: 10.5, y: 58.5 },
  'Sacramento': { x: 11.5, y: 56.5 },
  'San Diego': { x: 13.5, y: 66 },
  'San Jose': { x: 11, y: 59 },
  'Fresno': { x: 12.5, y: 60 },
  
  // Colorado
  'Denver': { x: 32, y: 56.5 },
  'Colorado Springs': { x: 32, y: 58 },
  'Boulder': { x: 32, y: 55.5 },
  'Fort Collins': { x: 31.5, y: 54 },
  
  // Connecticut
  'Hartford': { x: 84, y: 48.5 },
  'New Haven': { x: 84, y: 49.5 },
  'Bridgeport': { x: 84.2, y: 49.7 },
  'Stamford': { x: 84.5, y: 50 },
  
  // Delaware
  'Wilmington': { x: 81.5, y: 56 },
  'Dover': { x: 81.8, y: 57 },
  'Newark': { x: 81.5, y: 55.8 },
  
  // Florida
  'Miami': { x: 75, y: 78 },
  'Tampa': { x: 74, y: 74.5 },
  'Jacksonville': { x: 74.5, y: 67.5 },
  'Orlando': { x: 74.5, y: 72.5 },
  'Fort Lauderdale': { x: 75, y: 77 },
  'West Palm Beach': { x: 75, y: 75 },
  
  // Georgia
  'Atlanta': { x: 71.5, y: 63 },
  'Savannah': { x: 74, y: 64.5 },
  'Augusta': { x: 73.5, y: 63.5 },
  'Columbus': { x: 71, y: 65 },
  
  // Hawaii
  'Honolulu': { x: 20, y: 91 },
  'Hilo': { x: 22, y: 91.5 },
  'Kailua': { x: 20.5, y: 90.5 },
  
  // Idaho
  'Boise': { x: 21, y: 50 },
  'Idaho Falls': { x: 22.5, y: 51 },
  'Pocatello': { x: 22.8, y: 52 },
  'Meridian': { x: 21, y: 50.3 },
  
  // Illinois
  'Chicago': { x: 68, y: 49.5 },
  'Springfield': { x: 65.5, y: 56 },
  'Peoria': { x: 66, y: 54 },
  'Rockford': { x: 67, y: 50.5 },
  
  // Indiana
  'Indianapolis': { x: 69.5, y: 56.5 },
  'Fort Wayne': { x: 71, y: 52.5 },
  'Evansville': { x: 68, y: 59 },
  'South Bend': { x: 70, y: 50 },
  
  // Iowa
  'Des Moines': { x: 60.5, y: 50 },
  'Cedar Rapids': { x: 62, y: 50 },
  'Davenport': { x: 64.5, y: 50.5 },
  'Iowa City': { x: 62.5, y: 51 },
  
  // Kansas
  'Wichita': { x: 53, y: 58.5 },
  'Kansas City': { x: 60, y: 56 },
  'Topeka': { x: 58, y: 56 },
  'Overland Park': { x: 60, y: 56.3 },
  
  // Kentucky
  'Louisville': { x: 70, y: 58.5 },
  'Lexington': { x: 71.5, y: 58.5 },
  'Bowling Green': { x: 69.5, y: 60.5 },
  'Owensboro': { x: 68.5, y: 59 },
  
  // Louisiana
  'New Orleans': { x: 65, y: 67.5 },
  'Baton Rouge': { x: 64.5, y: 66.5 },
  'Shreveport': { x: 61.5, y: 64 },
  'Lafayette': { x: 63.5, y: 66.5 },
  
  // Maine
  'Portland': { x: 87, y: 48.5 },
  'Bangor': { x: 88, y: 45.5 },
  'Augusta': { x: 87.5, y: 47 },
  'Lewiston': { x: 87, y: 48 },
  
  // Maryland
  'Baltimore': { x: 81, y: 56 },
  'Annapolis': { x: 81.2, y: 56.7 },
  'Frederick': { x: 80, y: 55 },
  'Rockville': { x: 80.5, y: 55.7 },
  
  // Massachusetts
  'Boston': { x: 85.5, y: 49.5 },
  'Worcester': { x: 85, y: 50 },
  'Springfield': { x: 84.5, y: 50.5 },
  'Cambridge': { x: 85.5, y: 49.5 },
  
  // Michigan
  'Detroit': { x: 71, y: 50 },
  'Grand Rapids': { x: 69.5, y: 50 },
  'Lansing': { x: 70.5, y: 50.5 },
  'Ann Arbor': { x: 71, y: 50.8 },
  
  // Minnesota
  'Minneapolis': { x: 60.5, y: 45.5 },
  'St. Paul': { x: 61, y: 45.5 },
  'Duluth': { x: 62.5, y: 41.5 },
  'Rochester': { x: 61, y: 47.5 },
  
  // Mississippi
  'Jackson': { x: 65.5, y: 64 },
  'Biloxi': { x: 66.5, y: 67 },
  'Hattiesburg': { x: 66, y: 65.5 },
  'Gulfport': { x: 66.5, y: 67 },
  
  // Missouri
  'Kansas City': { x: 60, y: 56 },
  'St. Louis': { x: 63.5, y: 58.5 },
  'Springfield': { x: 60.5, y: 60 },
  'Columbia': { x: 61.5, y: 57.5 },
  
  // Montana
  'Billings': { x: 33, y: 45.5 },
  'Missoula': { x: 28, y: 42.5 },
  'Great Falls': { x: 30, y: 41.5 },
  'Bozeman': { x: 31, y: 44.5 },
  
  // Nebraska
  'Omaha': { x: 56, y: 50 },
  'Lincoln': { x: 55, y: 52 },
  'Grand Island': { x: 53.5, y: 51 },
  'Bellevue': { x: 56, y: 50.3 },
  
  // Nevada
  'Las Vegas': { x: 16, y: 61 },
  'Reno': { x: 12.5, y: 55.5 },
  'Carson City': { x: 12.5, y: 56.5 },
  'Henderson': { x: 16.5, y: 61 },
  
  // New Hampshire
  'Manchester': { x: 85.5, y: 48.5 },
  'Nashua': { x: 85.5, y: 49 },
  'Concord': { x: 85.5, y: 48 },
  'Dover': { x: 86, y: 48.5 },
  
  // New Jersey
  'Newark': { x: 82.5, y: 52 },
  'Jersey City': { x: 82.5, y: 52.3 },
  'Trenton': { x: 82, y: 53.5 },
  'Atlantic City': { x: 82.5, y: 55.5 },
  
  // New Mexico
  'Albuquerque': { x: 31, y: 61.5 },
  'Santa Fe': { x: 31.5, y: 59.5 },
  'Las Cruces': { x: 31.5, y: 65.5 },
  'Rio Rancho': { x: 31, y: 61 },
  
  // New York
  'New York City': { x: 82.5, y: 52 },
  'Buffalo': { x: 77.5, y: 50.5 },
  'Rochester': { x: 78.5, y: 50.5 },
  'Albany': { x: 82.5, y: 49.5 },
  'Syracuse': { x: 80, y: 50.5 },
  
  // North Carolina
  'Charlotte': { x: 75, y: 61.5 },
  'Raleigh': { x: 77.5, y: 61 },
  'Greensboro': { x: 76, y: 60.5 },
  'Durham': { x: 77, y: 61 },
  
  // North Dakota
  'Fargo': { x: 54.5, y: 40.5 },
  'Bismarck': { x: 49, y: 41 },
  'Grand Forks': { x: 55, y: 39.5 },
  'Minot': { x: 47, y: 39.5 },
  
  // Ohio
  'Columbus': { x: 73, y: 56 },
  'Cleveland': { x: 74.5, y: 51 },
  'Cincinnati': { x: 72, y: 57.5 },
  'Toledo': { x: 73, y: 50 },
  
  // Oklahoma
  'Oklahoma City': { x: 53, y: 61.5 },
  'Tulsa': { x: 56, y: 60.5 },
  'Norman': { x: 53, y: 62 },
  'Broken Arrow': { x: 56, y: 60.8 },
  
  // Oregon
  'Portland': { x: 10.5, y: 44.5 },
  'Eugene': { x: 10, y: 47 },
  'Salem': { x: 10.5, y: 45.5 },
  'Bend': { x: 11.5, y: 47 },
  
  // Pennsylvania
  'Philadelphia': { x: 81.5, y: 53.5 },
  'Pittsburgh': { x: 76, y: 53.5 },
  'Harrisburg': { x: 80, y: 53.5 },
  'Allentown': { x: 81.5, y: 52.5 },
  
  // Rhode Island
  'Providence': { x: 85.5, y: 49.5 },
  'Warwick': { x: 85.5, y: 49.7 },
  'Newport': { x: 86, y: 49.7 },
  
  // South Carolina
  'Columbia': { x: 75, y: 63 },
  'Charleston': { x: 76, y: 64.5 },
  'Greenville': { x: 74, y: 61.5 },
  'Myrtle Beach': { x: 77, y: 63 },
  
  // South Dakota
  'Sioux Falls': { x: 55, y: 47.5 },
  'Rapid City': { x: 47, y: 47.5 },
  'Aberdeen': { x: 53, y: 45.5 },
  'Brookings': { x: 55, y: 46.5 },
  
  // Tennessee
  'Nashville': { x: 69.5, y: 60 },
  'Memphis': { x: 65.5, y: 60.5 },
  'Knoxville': { x: 72.5, y: 60 },
  'Chattanooga': { x: 71, y: 61.5 },
  
  // Texas
  'Houston': { x: 58.5, y: 68 },
  'Dallas': { x: 57, y: 64.5 },
  'Austin': { x: 56.5, y: 67 },
  'San Antonio': { x: 55.5, y: 68.5 },
  'El Paso': { x: 32, y: 65.5 },
  'Fort Worth': { x: 57, y: 64 },
  
  // Utah
  'Salt Lake City': { x: 22.5, y: 53.5 },
  'Provo': { x: 22.5, y: 55 },
  'Ogden': { x: 22.5, y: 52 },
  'West Valley City': { x: 22.5, y: 53.8 },
  
  // Vermont
  'Burlington': { x: 83.5, y: 46.5 },
  'Montpelier': { x: 84, y: 46.5 },
  'Rutland': { x: 83.5, y: 47.5 },
  'South Burlington': { x: 83.5, y: 46.8 },
  
  // Virginia
  'Richmond': { x: 78.5, y: 58.5 },
  'Virginia Beach': { x: 80, y: 60 },
  'Norfolk': { x: 80, y: 60 },
  'Arlington': { x: 79.5, y: 57 },
  
  // Washington
  'Seattle': { x: 11.5, y: 42 },
  'Spokane': { x: 17, y: 42.5 },
  'Tacoma': { x: 11.5, y: 43 },
  'Vancouver': { x: 12, y: 44.5 },
  
  // West Virginia
  'Charleston': { x: 75.5, y: 58 },
  'Huntington': { x: 74.5, y: 59 },
  'Morgantown': { x: 76.5, y: 55.5 },
  'Parkersburg': { x: 75.5, y: 57 },
  
  // Wisconsin
  'Milwaukee': { x: 68, y: 48 },
  'Madison': { x: 66, y: 48 },
  'Green Bay': { x: 68.5, y: 45.5 },
  'Kenosha': { x: 68.5, y: 49.5 },
  
  // Wyoming
  'Cheyenne': { x: 32, y: 51 },
  'Casper': { x: 32.5, y: 50 },
  'Laramie': { x: 32.5, y: 51.5 },
  'Gillette': { x: 32, y: 48.5 }
};

export default function InteractiveTemperatureMap({ cities = [] }) {
  const [hoveredCity, setHoveredCity] = useState(null);

  return (
    <div className="relative w-full">
      <img 
        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/d5d416064_tempmap.png"
        alt="US Groundwater Temperature Map"
        className="w-full h-auto rounded-xl"
      />
      
      {/* City Markers Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {cities.map((city, idx) => {
          const coords = cityCoordinates[city.name];
          if (!coords) return null;
          
          return (
            <div
              key={idx}
              className="absolute pointer-events-auto cursor-pointer"
              style={{
                left: `${coords.x}%`,
                top: `${coords.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onMouseEnter={() => setHoveredCity(city)}
              onMouseLeave={() => setHoveredCity(null)}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: idx * 0.01 }}
                whileHover={{ scale: 1.3 }}
                className="relative"
              >
                <MapPin className="w-5 h-5 text-orange-600 drop-shadow-lg" fill="white" />
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {hoveredCity && cityCoordinates[hoveredCity.name] && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute z-10 pointer-events-none"
            style={{
              left: `${cityCoordinates[hoveredCity.name].x}%`,
              top: `${cityCoordinates[hoveredCity.name].y - 8}%`,
              transform: 'translate(-50%, -100%)'
            }}
          >
            <div className="bg-white px-4 py-2 rounded-xl shadow-2xl border-2 border-orange-200">
              <div className="text-sm font-semibold text-slate-900">{hoveredCity.name}</div>
              <div className="text-lg font-bold text-orange-600">{hoveredCity.temp}°F</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <p className="text-center text-sm text-slate-500 mt-4">
        Hover over city markers to see detailed temperature data
      </p>
    </div>
  );
}