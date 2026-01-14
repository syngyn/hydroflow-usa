import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';

// Approximate city coordinates on the map (as percentages)
const cityCoordinates = {
  // Alabama
  'Birmingham': { x: 73.5, y: 65 },
  'Montgomery': { x: 74, y: 67 },
  'Mobile': { x: 73, y: 71 },
  'Huntsville': { x: 74, y: 61.5 },
  
  // Alaska
  'Anchorage': { x: 13, y: 88 },
  'Fairbanks': { x: 15, y: 83 },
  'Juneau': { x: 18, y: 87 },
  
  // Arizona
  'Phoenix': { x: 18, y: 65 },
  'Tucson': { x: 19, y: 68 },
  'Flagstaff': { x: 18.5, y: 61 },
  'Mesa': { x: 18.5, y: 65.5 },
  
  // Arkansas
  'Little Rock': { x: 62, y: 61 },
  'Fort Smith': { x: 60, y: 60 },
  'Fayetteville': { x: 60, y: 59 },
  
  // California
  'Los Angeles': { x: 11, y: 63 },
  'San Francisco': { x: 9, y: 56 },
  'Sacramento': { x: 10, y: 55 },
  'San Diego': { x: 11.5, y: 67 },
  'San Jose': { x: 9.5, y: 57 },
  'Fresno': { x: 10.5, y: 59 },
  
  // Colorado
  'Denver': { x: 32, y: 55 },
  'Colorado Springs': { x: 32, y: 57 },
  'Boulder': { x: 32, y: 54 },
  'Fort Collins': { x: 31.5, y: 52 },
  
  // Connecticut
  'Hartford': { x: 88, y: 45 },
  'New Haven': { x: 88, y: 46 },
  'Bridgeport': { x: 88.5, y: 46.5 },
  'Stamford': { x: 89, y: 47 },
  
  // Delaware
  'Wilmington': { x: 85, y: 55 },
  'Dover': { x: 85, y: 56 },
  'Newark': { x: 85, y: 54.5 },
  
  // Florida
  'Miami': { x: 81, y: 84 },
  'Tampa': { x: 79, y: 80 },
  'Jacksonville': { x: 79, y: 72 },
  'Orlando': { x: 80, y: 78 },
  'Fort Lauderdale': { x: 81, y: 83 },
  'West Palm Beach': { x: 81, y: 81 },
  
  // Georgia
  'Atlanta': { x: 76.5, y: 65.5 },
  'Savannah': { x: 80, y: 67 },
  'Augusta': { x: 79, y: 65.5 },
  'Columbus': { x: 76, y: 67 },
  
  // Hawaii
  'Honolulu': { x: 26, y: 93 },
  'Hilo': { x: 28, y: 93.5 },
  'Kailua': { x: 26.5, y: 92.5 },
  
  // Idaho
  'Boise': { x: 21, y: 47 },
  'Idaho Falls': { x: 22, y: 48 },
  'Pocatello': { x: 22.5, y: 49 },
  'Meridian': { x: 21, y: 47.5 },
  
  // Illinois
  'Chicago': { x: 71, y: 46 },
  'Springfield': { x: 68, y: 54 },
  'Peoria': { x: 68, y: 52 },
  'Rockford': { x: 70, y: 47 },
  
  // Indiana
  'Indianapolis': { x: 74, y: 54 },
  'Fort Wayne': { x: 76, y: 50 },
  'Evansville': { x: 72, y: 57 },
  'South Bend': { x: 75, y: 47 },
  
  // Iowa
  'Des Moines': { x: 61, y: 47 },
  'Cedar Rapids': { x: 63, y: 47 },
  'Davenport': { x: 67, y: 47.5 },
  'Iowa City': { x: 64, y: 48 },
  
  // Kansas
  'Wichita': { x: 53, y: 57 },
  'Kansas City': { x: 60, y: 54 },
  'Topeka': { x: 58, y: 54 },
  'Overland Park': { x: 60, y: 54.5 },
  
  // Kentucky
  'Louisville': { x: 75, y: 57 },
  'Lexington': { x: 77, y: 57 },
  'Bowling Green': { x: 75, y: 60 },
  'Owensboro': { x: 73, y: 57.5 },
  
  // Louisiana
  'New Orleans': { x: 66, y: 73 },
  'Baton Rouge': { x: 65, y: 72 },
  'Shreveport': { x: 61, y: 68 },
  'Lafayette': { x: 64, y: 72 },
  
  // Maine
  'Portland': { x: 92, y: 48 },
  'Bangor': { x: 93, y: 44 },
  'Augusta': { x: 92.5, y: 46 },
  'Lewiston': { x: 92, y: 47 },
  
  // Maryland
  'Baltimore': { x: 85.5, y: 54 },
  'Annapolis': { x: 85.5, y: 55 },
  'Frederick': { x: 84, y: 53 },
  'Rockville': { x: 84.5, y: 54 },
  
  // Massachusetts
  'Boston': { x: 90, y: 47 },
  'Worcester': { x: 89, y: 47.5 },
  'Springfield': { x: 88.5, y: 48 },
  'Cambridge': { x: 90, y: 47 },
  
  // Michigan
  'Detroit': { x: 77, y: 47 },
  'Grand Rapids': { x: 75, y: 47 },
  'Lansing': { x: 76, y: 47.5 },
  'Ann Arbor': { x: 77, y: 48 },
  
  // Minnesota
  'Minneapolis': { x: 61, y: 42 },
  'St. Paul': { x: 62, y: 42 },
  'Duluth': { x: 64, y: 38 },
  'Rochester': { x: 62, y: 44 },
  
  // Mississippi
  'Jackson': { x: 66, y: 68 },
  'Biloxi': { x: 68, y: 72 },
  'Hattiesburg': { x: 67, y: 70 },
  'Gulfport': { x: 68, y: 72 },
  
  // Missouri
  'Kansas City': { x: 60, y: 54 },
  'St. Louis': { x: 66, y: 57 },
  'Springfield': { x: 61, y: 59 },
  'Columbia': { x: 63, y: 56 },
  
  // Montana
  'Billings': { x: 33, y: 42 },
  'Missoula': { x: 28, y: 39 },
  'Great Falls': { x: 30, y: 38 },
  'Bozeman': { x: 31, y: 41 },
  
  // Nebraska
  'Omaha': { x: 57, y: 47 },
  'Lincoln': { x: 56, y: 49 },
  'Grand Island': { x: 54, y: 48 },
  'Bellevue': { x: 57, y: 47.5 },
  
  // Nevada
  'Las Vegas': { x: 15.5, y: 61 },
  'Reno': { x: 11.5, y: 54 },
  'Carson City': { x: 11.5, y: 55 },
  'Henderson': { x: 16, y: 61 },
  
  // New Hampshire
  'Manchester': { x: 90, y: 48 },
  'Nashua': { x: 90, y: 49 },
  'Concord': { x: 90, y: 47.5 },
  'Dover': { x: 91, y: 48 },
  
  // New Jersey
  'Newark': { x: 86, y: 50 },
  'Jersey City': { x: 86, y: 50.5 },
  'Trenton': { x: 86, y: 52 },
  'Atlantic City': { x: 86.5, y: 54 },
  
  // New Mexico
  'Albuquerque': { x: 31, y: 63 },
  'Santa Fe': { x: 31.5, y: 61 },
  'Las Cruces': { x: 32, y: 68 },
  'Rio Rancho': { x: 31, y: 62.5 },
  
  // New York
  'New York City': { x: 86.5, y: 50 },
  'Buffalo': { x: 81, y: 48 },
  'Rochester': { x: 82, y: 48 },
  'Albany': { x: 86, y: 47 },
  'Syracuse': { x: 84, y: 48 },
  
  // North Carolina
  'Charlotte': { x: 81, y: 62 },
  'Raleigh': { x: 83, y: 61 },
  'Greensboro': { x: 82, y: 61 },
  'Durham': { x: 83, y: 61 },
  
  // North Dakota
  'Fargo': { x: 55, y: 37 },
  'Bismarck': { x: 50, y: 37.5 },
  'Grand Forks': { x: 56, y: 36 },
  'Minot': { x: 48, y: 36 },
  
  // Ohio
  'Columbus': { x: 77, y: 53 },
  'Cleveland': { x: 79, y: 48 },
  'Cincinnati': { x: 76, y: 55 },
  'Toledo': { x: 77, y: 47 },
  
  // Oklahoma
  'Oklahoma City': { x: 53, y: 62 },
  'Tulsa': { x: 56, y: 61 },
  'Norman': { x: 53, y: 63 },
  'Broken Arrow': { x: 56, y: 61.5 },
  
  // Oregon
  'Portland': { x: 10, y: 41 },
  'Eugene': { x: 9.5, y: 44 },
  'Salem': { x: 10, y: 42 },
  'Bend': { x: 11, y: 44 },
  
  // Pennsylvania
  'Philadelphia': { x: 85, y: 52 },
  'Pittsburgh': { x: 81, y: 52 },
  'Harrisburg': { x: 84, y: 52 },
  'Allentown': { x: 85, y: 51 },
  
  // Rhode Island
  'Providence': { x: 90, y: 47.5 },
  'Warwick': { x: 90, y: 48 },
  'Newport': { x: 90.5, y: 48 },
  
  // South Carolina
  'Columbia': { x: 81, y: 65.5 },
  'Charleston': { x: 82, y: 67.5 },
  'Greenville': { x: 79, y: 63 },
  'Myrtle Beach': { x: 83, y: 65.5 },
  
  // South Dakota
  'Sioux Falls': { x: 56, y: 44 },
  'Rapid City': { x: 48, y: 44 },
  'Aberdeen': { x: 53, y: 42 },
  'Brookings': { x: 56, y: 43 },
  
  // Tennessee
  'Nashville': { x: 74, y: 61 },
  'Memphis': { x: 66, y: 62 },
  'Knoxville': { x: 78, y: 61 },
  'Chattanooga': { x: 76, y: 63 },
  
  // Texas
  'Houston': { x: 58, y: 73 },
  'Dallas': { x: 56, y: 68 },
  'Austin': { x: 54, y: 72 },
  'San Antonio': { x: 53, y: 74 },
  'El Paso': { x: 31, y: 70 },
  'Fort Worth': { x: 56, y: 67.5 },
  
  // Utah
  'Salt Lake City': { x: 23, y: 52 },
  'Provo': { x: 23, y: 53.5 },
  'Ogden': { x: 23, y: 50.5 },
  'West Valley City': { x: 23, y: 52.5 },
  
  // Vermont
  'Burlington': { x: 86.5, y: 44 },
  'Montpelier': { x: 87, y: 44 },
  'Rutland': { x: 86.5, y: 45 },
  'South Burlington': { x: 86.5, y: 44.5 },
  
  // Virginia
  'Richmond': { x: 83, y: 58 },
  'Virginia Beach': { x: 85, y: 60 },
  'Norfolk': { x: 85, y: 60 },
  'Arlington': { x: 84, y: 56 },
  
  // Washington
  'Seattle': { x: 10, y: 37 },
  'Spokane': { x: 16, y: 37.5 },
  'Tacoma': { x: 10, y: 38 },
  'Vancouver': { x: 10.5, y: 40 },
  
  // West Virginia
  'Charleston': { x: 80, y: 57 },
  'Huntington': { x: 79, y: 58 },
  'Morgantown': { x: 82, y: 54 },
  'Parkersburg': { x: 80, y: 56 },
  
  // Wisconsin
  'Milwaukee': { x: 71, y: 45 },
  'Madison': { x: 69, y: 45 },
  'Green Bay': { x: 72, y: 42 },
  'Kenosha': { x: 71.5, y: 47 },
  
  // Wyoming
  'Cheyenne': { x: 32, y: 48 },
  'Casper': { x: 32.5, y: 47 },
  'Laramie': { x: 33, y: 48.5 },
  'Gillette': { x: 33, y: 45 }
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