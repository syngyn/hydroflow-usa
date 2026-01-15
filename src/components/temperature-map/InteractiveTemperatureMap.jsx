import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';

// Approximate city coordinates on the map (as percentages)
const cityCoordinates = {
  // Alabama
  'Birmingham': { x: 73.5, y: 67 },
  'Montgomery': { x: 73.5, y: 69 },
  'Mobile': { x: 72.5, y: 73 },
  'Huntsville': { x: 73.8, y: 64 },
  
  // Alaska
  'Anchorage': { x: 11, y: 90 },
  'Fairbanks': { x: 13, y: 85 },
  'Juneau': { x: 16, y: 88 },
  
  // Arizona
  'Phoenix': { x: 23, y: 67 },
  'Tucson': { x: 24, y: 70 },
  'Flagstaff': { x: 23.5, y: 63 },
  'Mesa': { x: 23.2, y: 67.3 },
  
  // Arkansas
  'Little Rock': { x: 64.5, y: 63 },
  'Fort Smith': { x: 63, y: 62 },
  'Fayetteville': { x: 63, y: 60.5 },
  
  // California
  'Los Angeles': { x: 16, y: 66 },
  'San Francisco': { x: 14, y: 59 },
  'Sacramento': { x: 15, y: 58 },
  'San Diego': { x: 16.5, y: 69 },
  'San Jose': { x: 14.2, y: 59.5 },
  'Fresno': { x: 15.5, y: 61 },
  
  // Colorado
  'Denver': { x: 34, y: 56 },
  'Colorado Springs': { x: 34, y: 58 },
  'Boulder': { x: 34, y: 55 },
  'Fort Collins': { x: 33.5, y: 53 },
  
  // Connecticut
  'Hartford': { x: 87, y: 46 },
  'New Haven': { x: 87, y: 47 },
  'Bridgeport': { x: 87.2, y: 47.2 },
  'Stamford': { x: 87.5, y: 47.5 },
  
  // Delaware
  'Wilmington': { x: 84.5, y: 54.5 },
  'Dover': { x: 84.8, y: 55.5 },
  'Newark': { x: 84.5, y: 54.2 },
  
  // Florida
  'Miami': { x: 79.5, y: 84 },
  'Tampa': { x: 78.5, y: 80 },
  'Jacksonville': { x: 79, y: 73 },
  'Orlando': { x: 79, y: 78 },
  'Fort Lauderdale': { x: 79.5, y: 83 },
  'West Palm Beach': { x: 79.5, y: 81 },
  
  // Georgia
  'Atlanta': { x: 75.5, y: 66 },
  'Savannah': { x: 78.5, y: 68 },
  'Augusta': { x: 78, y: 66.5 },
  'Columbus': { x: 75, y: 68 },
  
  // Hawaii
  'Honolulu': { x: 24, y: 94 },
  'Hilo': { x: 26, y: 94.5 },
  'Kailua': { x: 24.5, y: 93.5 },
  
  // Idaho
  'Boise': { x: 24, y: 48 },
  'Idaho Falls': { x: 25.5, y: 49 },
  'Pocatello': { x: 25.8, y: 50 },
  'Meridian': { x: 24, y: 48.3 },
  
  // Illinois
  'Chicago': { x: 71.5, y: 47 },
  'Springfield': { x: 69, y: 55 },
  'Peoria': { x: 69.5, y: 53 },
  'Rockford': { x: 70.5, y: 48 },
  
  // Indiana
  'Indianapolis': { x: 73, y: 55 },
  'Fort Wayne': { x: 74.5, y: 51 },
  'Evansville': { x: 71.5, y: 58 },
  'South Bend': { x: 73.5, y: 48 },
  
  // Iowa
  'Des Moines': { x: 63.5, y: 48 },
  'Cedar Rapids': { x: 65, y: 48 },
  'Davenport': { x: 68, y: 48.5 },
  'Iowa City': { x: 65.5, y: 49 },
  
  // Kansas
  'Wichita': { x: 55, y: 58 },
  'Kansas City': { x: 63, y: 55 },
  'Topeka': { x: 60, y: 55 },
  'Overland Park': { x: 63, y: 55.3 },
  
  // Kentucky
  'Louisville': { x: 73.5, y: 58 },
  'Lexington': { x: 75.5, y: 58 },
  'Bowling Green': { x: 73, y: 61 },
  'Owensboro': { x: 72, y: 58.5 },
  
  // Louisiana
  'New Orleans': { x: 67, y: 73 },
  'Baton Rouge': { x: 66.5, y: 72 },
  'Shreveport': { x: 63.5, y: 68.5 },
  'Lafayette': { x: 65.5, y: 72 },
  
  // Maine
  'Portland': { x: 90, y: 49 },
  'Bangor': { x: 91, y: 45 },
  'Augusta': { x: 90.5, y: 47 },
  'Lewiston': { x: 90, y: 48 },
  
  // Maryland
  'Baltimore': { x: 84, y: 54.5 },
  'Annapolis': { x: 84.2, y: 55.2 },
  'Frederick': { x: 83, y: 53.5 },
  'Rockville': { x: 83.5, y: 54.2 },
  
  // Massachusetts
  'Boston': { x: 89, y: 47.5 },
  'Worcester': { x: 88.5, y: 48 },
  'Springfield': { x: 87.8, y: 48.5 },
  'Cambridge': { x: 89, y: 47.5 },
  
  // Michigan
  'Detroit': { x: 74.5, y: 48 },
  'Grand Rapids': { x: 73, y: 48 },
  'Lansing': { x: 74, y: 48.5 },
  'Ann Arbor': { x: 74.5, y: 48.8 },
  
  // Minnesota
  'Minneapolis': { x: 63, y: 43 },
  'St. Paul': { x: 63.5, y: 43 },
  'Duluth': { x: 65, y: 39 },
  'Rochester': { x: 63.5, y: 45 },
  
  // Mississippi
  'Jackson': { x: 67, y: 68.5 },
  'Biloxi': { x: 69, y: 72.5 },
  'Hattiesburg': { x: 68, y: 70.5 },
  'Gulfport': { x: 69, y: 72.5 },
  
  // Missouri
  'Kansas City': { x: 63, y: 55 },
  'St. Louis': { x: 67, y: 58 },
  'Springfield': { x: 63.5, y: 60 },
  'Columbia': { x: 64.5, y: 57 },
  
  // Montana
  'Billings': { x: 35, y: 43 },
  'Missoula': { x: 30, y: 40 },
  'Great Falls': { x: 32, y: 39 },
  'Bozeman': { x: 33, y: 42 },
  
  // Nebraska
  'Omaha': { x: 58, y: 48 },
  'Lincoln': { x: 57, y: 50 },
  'Grand Island': { x: 55, y: 49 },
  'Bellevue': { x: 58, y: 48.3 },
  
  // Nevada
  'Las Vegas': { x: 18, y: 62 },
  'Reno': { x: 14, y: 55 },
  'Carson City': { x: 14, y: 56 },
  'Henderson': { x: 18.5, y: 62 },
  
  // New Hampshire
  'Manchester': { x: 89, y: 48.5 },
  'Nashua': { x: 89, y: 49 },
  'Concord': { x: 89, y: 48 },
  'Dover': { x: 89.5, y: 48.5 },
  
  // New Jersey
  'Newark': { x: 85.5, y: 50.5 },
  'Jersey City': { x: 85.5, y: 50.8 },
  'Trenton': { x: 85.5, y: 52.5 },
  'Atlantic City': { x: 86, y: 54.5 },
  
  // New Mexico
  'Albuquerque': { x: 33, y: 64 },
  'Santa Fe': { x: 33.5, y: 62 },
  'Las Cruces': { x: 33.5, y: 69 },
  'Rio Rancho': { x: 33, y: 63.5 },
  
  // New York
  'New York City': { x: 85.5, y: 50.5 },
  'Buffalo': { x: 81, y: 48.5 },
  'Rochester': { x: 82, y: 48.5 },
  'Albany': { x: 86, y: 47.5 },
  'Syracuse': { x: 83.5, y: 48.5 },
  
  // North Carolina
  'Charlotte': { x: 79, y: 63 },
  'Raleigh': { x: 82, y: 62 },
  'Greensboro': { x: 80.5, y: 62 },
  'Durham': { x: 81.5, y: 62 },
  
  // North Dakota
  'Fargo': { x: 55.5, y: 38 },
  'Bismarck': { x: 50, y: 38.5 },
  'Grand Forks': { x: 56, y: 37 },
  'Minot': { x: 48, y: 37 },
  
  // Ohio
  'Columbus': { x: 76, y: 54 },
  'Cleveland': { x: 78, y: 49 },
  'Cincinnati': { x: 75.5, y: 56 },
  'Toledo': { x: 76.5, y: 48 },
  
  // Oklahoma
  'Oklahoma City': { x: 55, y: 63 },
  'Tulsa': { x: 58, y: 62 },
  'Norman': { x: 55, y: 63.5 },
  'Broken Arrow': { x: 58, y: 62.3 },
  
  // Oregon
  'Portland': { x: 13, y: 42 },
  'Eugene': { x: 12.5, y: 45 },
  'Salem': { x: 13, y: 43 },
  'Bend': { x: 14, y: 45 },
  
  // Pennsylvania
  'Philadelphia': { x: 84.5, y: 52.5 },
  'Pittsburgh': { x: 79.5, y: 52.5 },
  'Harrisburg': { x: 83, y: 52.5 },
  'Allentown': { x: 84.5, y: 51.5 },
  
  // Rhode Island
  'Providence': { x: 89, y: 47.8 },
  'Warwick': { x: 89, y: 48 },
  'Newport': { x: 89.5, y: 48 },
  
  // South Carolina
  'Columbia': { x: 79, y: 66 },
  'Charleston': { x: 80.5, y: 68 },
  'Greenville': { x: 78, y: 64 },
  'Myrtle Beach': { x: 82, y: 66 },
  
  // South Dakota
  'Sioux Falls': { x: 57, y: 45 },
  'Rapid City': { x: 48, y: 45 },
  'Aberdeen': { x: 54, y: 43 },
  'Brookings': { x: 57, y: 44 },
  
  // Tennessee
  'Nashville': { x: 73, y: 62 },
  'Memphis': { x: 67, y: 63 },
  'Knoxville': { x: 76.5, y: 62 },
  'Chattanooga': { x: 74.5, y: 64 },
  
  // Texas
  'Houston': { x: 60, y: 74 },
  'Dallas': { x: 58, y: 69 },
  'Austin': { x: 57, y: 73 },
  'San Antonio': { x: 56, y: 75 },
  'El Paso': { x: 34, y: 71 },
  'Fort Worth': { x: 58, y: 68.5 },
  
  // Utah
  'Salt Lake City': { x: 25, y: 53 },
  'Provo': { x: 25, y: 54.5 },
  'Ogden': { x: 25, y: 51.5 },
  'West Valley City': { x: 25, y: 53.3 },
  
  // Vermont
  'Burlington': { x: 86.5, y: 44.5 },
  'Montpelier': { x: 87, y: 44.5 },
  'Rutland': { x: 86.5, y: 45.5 },
  'South Burlington': { x: 86.5, y: 44.8 },
  
  // Virginia
  'Richmond': { x: 82.5, y: 58.5 },
  'Virginia Beach': { x: 84.5, y: 60.5 },
  'Norfolk': { x: 84.5, y: 60.5 },
  'Arlington': { x: 83, y: 56.5 },
  
  // Washington
  'Seattle': { x: 15, y: 39 },
  'Spokane': { x: 20, y: 39.5 },
  'Tacoma': { x: 15, y: 40 },
  'Vancouver': { x: 15.5, y: 42 },
  
  // West Virginia
  'Charleston': { x: 79, y: 58 },
  'Huntington': { x: 78, y: 59 },
  'Morgantown': { x: 80.5, y: 55 },
  'Parkersburg': { x: 79, y: 57 },
  
  // Wisconsin
  'Milwaukee': { x: 71, y: 46 },
  'Madison': { x: 68.5, y: 46 },
  'Green Bay': { x: 71.5, y: 43 },
  'Kenosha': { x: 71.5, y: 47.5 },
  
  // Wyoming
  'Cheyenne': { x: 34, y: 49 },
  'Casper': { x: 34.5, y: 48 },
  'Laramie': { x: 34.5, y: 49.5 },
  'Gillette': { x: 34, y: 46 }
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