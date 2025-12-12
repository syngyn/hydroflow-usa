import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Droplets, MapPin, ArrowLeft, Info, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Complete state data with all cities from HydroFLOW USA pages
const stateData = {
  ohio: {
    name: 'Ohio',
    code: 'OH',
    avgPPM: 155,
    level: 'hard to very hard',
    description: 'Ohio water is considered hard to very hard. The average water hardness for the Ohio resident is around 155 PPM.',
    cities: [
      { name: 'Akron', ppm: 112, level: 'Hard' },
      { name: 'Cedarville', ppm: 400, level: 'Very Hard' },
      { name: 'Chillicothe', ppm: 140, level: 'Hard' },
      { name: 'Cincinnati', ppm: 130, level: 'Hard' },
      { name: 'Cleveland', ppm: 125, level: 'Hard' },
      { name: 'Clifton', ppm: 400, level: 'Very Hard' },
      { name: 'Columbus', ppm: 128, level: 'Hard' },
      { name: 'Dayton', ppm: 155, level: 'Hard' },
      { name: 'Delaware', ppm: 140, level: 'Hard' },
      { name: 'Elyria', ppm: 120, level: 'Hard' },
      { name: 'Grove City', ppm: 120, level: 'Hard' },
      { name: 'Hamilton', ppm: 131, level: 'Hard' },
      { name: 'Hilliard', ppm: 121, level: 'Hard' },
      { name: 'Lancaster', ppm: 128, level: 'Hard' },
      { name: 'Loveland', ppm: 342, level: 'Very Hard' },
      { name: 'Mason', ppm: 171, level: 'Hard' },
      { name: 'Mentor', ppm: 122, level: 'Hard' },
      { name: 'Middletown', ppm: 131, level: 'Hard' },
      { name: 'Newark', ppm: 109, level: 'Moderate' },
      { name: 'Painesville', ppm: 122, level: 'Hard' },
      { name: 'Reynoldsburg', ppm: 120, level: 'Hard' },
      { name: 'Toledo', ppm: 74, level: 'Moderate' },
      { name: 'Westerville', ppm: 122, level: 'Hard' },
      { name: 'Xenia', ppm: 400, level: 'Very Hard' },
    ]
  },
  illinois: {
    name: 'Illinois',
    code: 'IL',
    avgPPM: 200,
    level: 'very hard',
    description: 'Illinois is a hard water state. The average water hardness for the Illinois resident is around 200 PPM, which is extremely hard.',
    cities: [
      { name: 'Aurora', ppm: 127, level: 'Hard' },
      { name: 'Carol Stream', ppm: 418, level: 'Very Hard' },
      { name: 'Champaign', ppm: 258, level: 'Very Hard' },
      { name: 'Chicago', ppm: 148, level: 'Hard' },
      { name: 'Cicero', ppm: 187, level: 'Hard' },
      { name: 'Columbus', ppm: 120, level: 'Hard' },
      { name: 'Crystal Lake', ppm: 137, level: 'Hard' },
      { name: 'Danville', ppm: 191, level: 'Hard' },
      { name: 'Decatur', ppm: 194, level: 'Hard' },
      { name: 'Dekalb', ppm: 188, level: 'Hard' },
      { name: 'Des Plaines', ppm: 350, level: 'Very Hard' },
      { name: 'Downers Grove', ppm: 288, level: 'Very Hard' },
      { name: 'East Peoria', ppm: 250, level: 'Very Hard' },
      { name: 'East Saint Louis', ppm: 210, level: 'Hard' },
      { name: 'Elgin', ppm: 171, level: 'Hard' },
      { name: 'Elmhurst', ppm: 362, level: 'Very Hard' },
      { name: 'Elmwood Park', ppm: 218, level: 'Very Hard' },
      { name: 'Evanston', ppm: 333, level: 'Very Hard' },
      { name: 'Glenview', ppm: 299, level: 'Very Hard' },
      { name: 'Granite City', ppm: 250, level: 'Very Hard' },
      { name: 'Joilet', ppm: 388, level: 'Very Hard' },
      { name: 'Kankakee', ppm: 196, level: 'Hard' },
      { name: 'Lombard', ppm: 344, level: 'Very Hard' },
      { name: 'Melrose Park', ppm: 222, level: 'Very Hard' },
      { name: 'Moline', ppm: 210, level: 'Hard' },
      { name: 'Mount Prospect', ppm: 247, level: 'Very Hard' },
      { name: 'Naperville', ppm: 288, level: 'Very Hard' },
      { name: 'Oak Lawn', ppm: 222, level: 'Very Hard' },
      { name: 'Oak Park', ppm: 212, level: 'Hard' },
      { name: 'Orland Park', ppm: 322, level: 'Very Hard' },
      { name: 'Palatine', ppm: 245, level: 'Very Hard' },
      { name: 'Peoria', ppm: 250, level: 'Very Hard' },
      { name: 'Plainfield', ppm: 280, level: 'Very Hard' },
      { name: 'Rockford', ppm: 308, level: 'Very Hard' },
      { name: 'Romeoville', ppm: 395, level: 'Very Hard' },
      { name: 'Springfield', ppm: 88, level: 'Moderate' },
    ]
  },
  indiana: {
    name: 'Indiana',
    code: 'IN',
    avgPPM: 262,
    level: 'very hard',
    description: 'Indiana has very hard water. The average water hardness for the state is 262 PPM.',
    cities: [
      { name: 'Batesville', ppm: 322, level: 'Very Hard' },
      { name: 'Bloomington', ppm: 339, level: 'Very Hard' },
      { name: 'Carmel', ppm: 137, level: 'Hard' },
      { name: 'Chesterton', ppm: 311, level: 'Very Hard' },
      { name: 'Clay City', ppm: 307, level: 'Very Hard' },
      { name: 'Columbus', ppm: 303, level: 'Very Hard' },
      { name: 'Elkhart', ppm: 342, level: 'Very Hard' },
      { name: 'Evansville', ppm: 124, level: 'Hard' },
      { name: 'Fairland', ppm: 305, level: 'Very Hard' },
      { name: 'Fishers', ppm: 305, level: 'Very Hard' },
      { name: 'Ferdinand', ppm: 350, level: 'Very Hard' },
      { name: 'Fort Wayne', ppm: 129, level: 'Hard' },
      { name: 'Gary', ppm: 144, level: 'Hard' },
      { name: 'Georgetown', ppm: 326, level: 'Very Hard' },
      { name: 'Greenwood', ppm: 342, level: 'Very Hard' },
      { name: 'Indianapolis', ppm: 274, level: 'Very Hard' },
      { name: 'Kokomo', ppm: 440, level: 'Very Hard' },
      { name: 'Lafayette', ppm: 331, level: 'Very Hard' },
      { name: 'Mecca', ppm: 403, level: 'Very Hard' },
      { name: 'Mishawaka', ppm: 325, level: 'Very Hard' },
      { name: 'Muncie', ppm: 345, level: 'Very Hard' },
      { name: 'Nobelsville', ppm: 400, level: 'Very Hard' },
      { name: 'Peru', ppm: 349, level: 'Very Hard' },
      { name: 'Plymouth', ppm: 342, level: 'Very Hard' },
      { name: 'Somerset', ppm: 560, level: 'Very Hard' },
      { name: 'South Bend', ppm: 370, level: 'Very Hard' },
      { name: 'Terra Haute', ppm: 367, level: 'Very Hard' },
      { name: 'Wabash', ppm: 560, level: 'Very Hard' },
      { name: 'Warren', ppm: 275, level: 'Very Hard' },
      { name: 'Washington', ppm: 275, level: 'Very Hard' },
      { name: 'Whiteland', ppm: 275, level: 'Very Hard' },
    ]
  },
  georgia: {
    name: 'Georgia',
    code: 'GA',
    avgPPM: 60,
    level: 'soft',
    description: 'Georgia water is considered soft water. The average water hardness for the Georgia resident is around 60 PPM.',
    cities: [
      { name: 'Albany', ppm: 34, level: 'Soft' },
      { name: 'Atlanta', ppm: 21, level: 'Soft' },
      { name: 'Athens', ppm: 120, level: 'Hard' },
      { name: 'Augusta', ppm: 58, level: 'Soft' },
      { name: 'Brunswick', ppm: 58, level: 'Soft' },
      { name: 'Columbus', ppm: 47, level: 'Soft' },
      { name: 'Dalton', ppm: 76, level: 'Moderate' },
      { name: 'Gainsville', ppm: 77, level: 'Moderate' },
      { name: 'Macon', ppm: 58, level: 'Soft' },
      { name: 'Rome', ppm: 54, level: 'Soft' },
      { name: 'Savannah', ppm: 57, level: 'Soft' },
      { name: 'Valdosta', ppm: 42, level: 'Soft' },
    ]
  },
  northcarolina: {
    name: 'North Carolina',
    code: 'NC',
    avgPPM: 46,
    level: 'soft',
    description: 'The state of North Carolina\'s average water hardness is soft at 46 PPM.',
    cities: [
      { name: 'Charlotte', ppm: 28, level: 'Soft' },
      { name: 'Raleigh', ppm: 40, level: 'Soft' },
      { name: 'Greensboro', ppm: 44, level: 'Soft' },
      { name: 'Rocky Mount', ppm: 77, level: 'Moderate' },
      { name: 'Winston', ppm: 42, level: 'Soft' },
      { name: 'Durham', ppm: 47, level: 'Soft' },
      { name: 'Ashville', ppm: 44, level: 'Soft' },
      { name: 'Fayetteville', ppm: 48, level: 'Soft' },
      { name: 'Hickory', ppm: 215, level: 'Very Hard' },
      { name: 'Wilmington', ppm: 70, level: 'Moderate' },
      { name: 'Jacksonville', ppm: 111, level: 'Hard' },
      { name: 'Greenville', ppm: 85, level: 'Moderate' },
      { name: 'Burlington', ppm: 52, level: 'Soft' },
      { name: 'New Bern', ppm: 100, level: 'Moderate' },
    ]
  },
  california: {
    name: 'California',
    code: 'CA',
    avgPPM: 200,
    level: 'hard to very hard',
    description: 'California water is considered hard to very hard. The average water hardness for California residents ranges from 100-300 PPM.',
    cities: [
      { name: 'Anaheim', ppm: 127, level: 'Hard' },
      { name: 'Bakersfield', ppm: 80, level: 'Moderate' },
      { name: 'Burbank', ppm: 271, level: 'Very Hard' },
      { name: 'Corona', ppm: 353, level: 'Very Hard' },
      { name: 'Fresno', ppm: 123, level: 'Hard' },
      { name: 'Fullerton', ppm: 254, level: 'Very Hard' },
      { name: 'Glendale', ppm: 259, level: 'Very Hard' },
      { name: 'Huntington Beach', ppm: 240, level: 'Very Hard' },
      { name: 'Inglewood', ppm: 293, level: 'Very Hard' },
      { name: 'Irvine', ppm: 152, level: 'Hard' },
      { name: 'Long Beach', ppm: 137, level: 'Hard' },
      { name: 'Los Angeles', ppm: 127, level: 'Hard' },
      { name: 'Mecca', ppm: 393, level: 'Very Hard' },
      { name: 'Modesto', ppm: 224, level: 'Very Hard' },
      { name: 'Newport Beach', ppm: 274, level: 'Very Hard' },
      { name: 'Oakland', ppm: 140, level: 'Hard' },
      { name: 'Oceanside', ppm: 168, level: 'Hard' },
      { name: 'Oxnard', ppm: 285, level: 'Very Hard' },
      { name: 'Palm Desert', ppm: 361, level: 'Very Hard' },
      { name: 'Pasadena', ppm: 255, level: 'Very Hard' },
      { name: 'Redding', ppm: 31, level: 'Soft' },
      { name: 'Redondo Beach', ppm: 370, level: 'Very Hard' },
      { name: 'Riverside', ppm: 71, level: 'Moderate' },
      { name: 'Sacramento', ppm: 150, level: 'Hard' },
      { name: 'San Bernardino', ppm: 249, level: 'Very Hard' },
      { name: 'San Diego', ppm: 241, level: 'Very Hard' },
      { name: 'San Francisco', ppm: 47, level: 'Soft' },
      { name: 'San Jose', ppm: 132, level: 'Hard' },
      { name: 'Santa Barbara', ppm: 391, level: 'Very Hard' },
      { name: 'Santa Maria', ppm: 235, level: 'Very Hard' },
      { name: 'Stockton', ppm: 194, level: 'Hard' },
      { name: 'Sunnyvale', ppm: 300, level: 'Very Hard' },
      { name: 'Ventura', ppm: 666, level: 'Very Hard' },
    ]
  },
  texas: {
    name: 'Texas',
    code: 'TX',
    avgPPM: 200,
    level: 'hard to very hard',
    description: 'In Texas, the water hardness average is over 200 PPM, ranking it as one of the states with the hardest water in the US.',
    cities: [
      { name: 'Amarillo', ppm: 248, level: 'Very Hard' },
      { name: 'Abilene', ppm: 284, level: 'Very Hard' },
      { name: 'Arlington', ppm: 94, level: 'Moderate' },
      { name: 'Austin', ppm: 184, level: 'Hard' },
      { name: 'Beaumont', ppm: 31, level: 'Soft' },
      { name: 'Corpus Christi', ppm: 227, level: 'Very Hard' },
      { name: 'Dallas', ppm: 140, level: 'Hard' },
      { name: 'El Paso', ppm: 119, level: 'Hard' },
      { name: 'Fort Worth', ppm: 140, level: 'Hard' },
      { name: 'Galveston', ppm: 200, level: 'Hard' },
      { name: 'Houston', ppm: 135, level: 'Hard' },
      { name: 'Laredo', ppm: 260, level: 'Very Hard' },
      { name: 'Lubbock', ppm: 243, level: 'Very Hard' },
      { name: 'McAllen', ppm: 243, level: 'Very Hard' },
      { name: 'Midland', ppm: 500, level: 'Very Hard' },
      { name: 'Odessa', ppm: 360, level: 'Very Hard' },
      { name: 'Plano', ppm: 146, level: 'Hard' },
      { name: 'San Antonio', ppm: 357, level: 'Very Hard' },
      { name: 'San Angelo', ppm: 428, level: 'Very Hard' },
      { name: 'Waco', ppm: 41, level: 'Soft' },
    ]
  },
  florida: {
    name: 'Florida',
    code: 'FL',
    avgPPM: 216,
    level: 'very hard',
    description: 'Florida has an average water hardness of 216 PPM, which is considered to be extremely hard according to the USGS water hardness table.',
    cities: [
      { name: 'Boca Raton', ppm: 189, level: 'Hard' },
      { name: 'Cape Coral', ppm: 85, level: 'Moderate' },
      { name: 'Clearwater', ppm: 178, level: 'Hard' },
      { name: 'Coral Springs', ppm: 298, level: 'Very Hard' },
      { name: 'Fort Lauderdale', ppm: 157, level: 'Hard' },
      { name: 'Gainesville', ppm: 140, level: 'Hard' },
      { name: 'Hialeah', ppm: 290, level: 'Very Hard' },
      { name: 'Jacksonville', ppm: 154, level: 'Hard' },
      { name: 'Lakeland', ppm: 180, level: 'Hard' },
      { name: 'Miami', ppm: 219, level: 'Hard' },
      { name: 'Orlando', ppm: 129, level: 'Hard' },
      { name: 'St. Petersburg', ppm: 161, level: 'Hard' },
      { name: 'Tampa', ppm: 220, level: 'Very Hard' },
      { name: 'Tallahassee', ppm: 126, level: 'Hard' },
      { name: 'West Palm Beach', ppm: 317, level: 'Very Hard' },
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
      { name: 'Utica', ppm: 16, level: 'Soft' },
      { name: 'Irondequoit', ppm: 25, level: 'Soft' },
      { name: 'Binghamton', ppm: 65, level: 'Moderate' },
      { name: 'Ramapo', ppm: 149, level: 'Hard' },
      { name: 'Grand Island', ppm: 137, level: 'Hard' },
      { name: 'Schenectady', ppm: 56, level: 'Soft' },
      { name: 'Brookhaven', ppm: 33, level: 'Soft' },
      { name: 'Lake Placid', ppm: 22, level: 'Soft' },
      { name: 'Yonkers', ppm: 100, level: 'Moderate' },
      { name: 'East Meadows', ppm: 50, level: 'Soft' },
      { name: 'Massapequa', ppm: 13, level: 'Soft' },
      { name: 'Lake Success', ppm: 50, level: 'Soft' },
      { name: 'Islip', ppm: 32, level: 'Soft' },
      { name: 'Babylon', ppm: 21, level: 'Soft' },
      { name: 'Smithtown', ppm: 23, level: 'Soft' },
      { name: 'Oyster Bay', ppm: 18, level: 'Soft' },
    ]
  },
  pennsylvania: {
    name: 'Pennsylvania',
    code: 'PA',
    avgPPM: 151,
    level: 'hard',
    description: 'Pennsylvania water is considered hard. The average water hardness for the Pennsylvania resident is around 151 PPM.',
    cities: [
      { name: 'Allentown', ppm: 176, level: 'Hard' },
      { name: 'Altoona', ppm: 121, level: 'Hard' },
      { name: 'Chambersburg', ppm: 10, level: 'Soft' },
      { name: 'East Stroudsburg', ppm: 112, level: 'Hard' },
      { name: 'Erie', ppm: 160, level: 'Hard' },
      { name: 'Gettysburg', ppm: 118, level: 'Hard' },
      { name: 'Harrisburg', ppm: 160, level: 'Hard' },
      { name: 'Hazleton', ppm: 23, level: 'Soft' },
      { name: 'Hershey', ppm: 150, level: 'Hard' },
      { name: 'Johnstown', ppm: 122, level: 'Hard' },
      { name: 'Lancaster', ppm: 105, level: 'Moderate' },
      { name: 'Lebanon', ppm: 176, level: 'Hard' },
      { name: 'Philadelphia', ppm: 149, level: 'Hard' },
      { name: 'Pittsburgh', ppm: 136, level: 'Hard' },
      { name: 'Punxsutawney', ppm: 310, level: 'Very Hard' },
      { name: 'Reading', ppm: 265, level: 'Very Hard' },
      { name: 'Scranton', ppm: 280, level: 'Very Hard' },
      { name: 'State College', ppm: 170, level: 'Hard' },
      { name: 'Warren', ppm: 96, level: 'Moderate' },
      { name: 'Williamsport', ppm: 145, level: 'Hard' },
      { name: 'York-Hanover', ppm: 182, level: 'Hard' },
    ]
  },
  michigan: {
    name: 'Michigan',
    code: 'MI',
    avgPPM: 242,
    level: 'hard to very hard',
    description: 'Michigan water is considered hard to very hard. Detroit Metro area has moderately hard water, at 104 PPM. Grand Rapids has hard water at 380 PPM.',
    cities: [
      { name: 'Allen Park', ppm: 98, level: 'Moderate' },
      { name: 'Allendale', ppm: 162, level: 'Hard' },
      { name: 'Ann Arbor', ppm: 129, level: 'Hard' },
      { name: 'Auburn Hills', ppm: 306, level: 'Very Hard' },
      { name: 'Bay City', ppm: 198, level: 'Hard' },
      { name: 'Battle Creek', ppm: 152, level: 'Hard' },
      { name: 'Belleville', ppm: 186, level: 'Hard' },
      { name: 'Big Rapids', ppm: 239, level: 'Very Hard' },
      { name: 'Birmingham', ppm: 418, level: 'Very Hard' },
      { name: 'Bloomfield Hills', ppm: 322, level: 'Very Hard' },
      { name: 'Brighton', ppm: 326, level: 'Very Hard' },
      { name: 'Byron Center', ppm: 225, level: 'Very Hard' },
      { name: 'Cadillac', ppm: 278, level: 'Very Hard' },
      { name: 'Caledonia', ppm: 311, level: 'Very Hard' },
      { name: 'Canton', ppm: 325, level: 'Very Hard' },
      { name: 'Cedar Springs', ppm: 214, level: 'Very Hard' },
      { name: 'Charlotte', ppm: 222, level: 'Very Hard' },
      { name: 'Clarkston', ppm: 355, level: 'Very Hard' },
      { name: 'Clinton', ppm: 132, level: 'Hard' },
      { name: 'Detroit', ppm: 104, level: 'Moderate' },
      { name: 'Dearborn Heights', ppm: 279, level: 'Very Hard' },
      { name: 'East Lansing', ppm: 128, level: 'Hard' },
      { name: 'Eastpointe', ppm: 208, level: 'Hard' },
      { name: 'Fenton', ppm: 222, level: 'Very Hard' },
      { name: 'Ferndale', ppm: 236, level: 'Very Hard' },
      { name: 'Flint', ppm: 242, level: 'Very Hard' },
      { name: 'Flushing', ppm: 344, level: 'Very Hard' },
      { name: 'Garden City', ppm: 310, level: 'Very Hard' },
      { name: 'Gaylord', ppm: 385, level: 'Very Hard' },
      { name: 'Grand Haven', ppm: 143, level: 'Hard' },
      { name: 'Grand Ledge', ppm: 203, level: 'Hard' },
      { name: 'Grand Rapids', ppm: 380, level: 'Very Hard' },
      { name: 'Grandville', ppm: 222, level: 'Very Hard' },
      { name: 'Grosse Pointe', ppm: 175, level: 'Hard' },
      { name: 'Hamtramck', ppm: 336, level: 'Very Hard' },
      { name: 'Harrison Township', ppm: 378, level: 'Very Hard' },
      { name: 'Hastings', ppm: 152, level: 'Hard' },
      { name: 'Holland', ppm: 160, level: 'Hard' },
      { name: 'Holly', ppm: 308, level: 'Very Hard' },
      { name: 'Holt', ppm: 329, level: 'Very Hard' },
      { name: 'Hudsonville', ppm: 170, level: 'Hard' },
      { name: 'Inkster', ppm: 196, level: 'Hard' },
      { name: 'Ionia', ppm: 265, level: 'Very Hard' },
      { name: 'Jackson', ppm: 245, level: 'Very Hard' },
      { name: 'Jenison', ppm: 223, level: 'Very Hard' },
      { name: 'Kalamazoo', ppm: 115, level: 'Hard' },
      { name: 'Lake Orion', ppm: 320, level: 'Very Hard' },
      { name: 'Lansing', ppm: 99, level: 'Moderate' },
      { name: 'Lapeer', ppm: 302, level: 'Very Hard' },
      { name: 'Lincoln Park', ppm: 254, level: 'Very Hard' },
      { name: 'Livonia', ppm: 268, level: 'Very Hard' },
      { name: 'Macomb', ppm: 117, level: 'Hard' },
      { name: 'Madison Heights', ppm: 163, level: 'Hard' },
      { name: 'Marquette', ppm: 170, level: 'Hard' },
      { name: 'Mason', ppm: 178, level: 'Hard' },
      { name: 'Midland', ppm: 302, level: 'Very Hard' },
      { name: 'Monroe', ppm: 369, level: 'Very Hard' },
      { name: 'Mount Morris', ppm: 348, level: 'Very Hard' },
      { name: 'Mt. Pleasant', ppm: 140, level: 'Hard' },
      { name: 'Muskegon', ppm: 116, level: 'Hard' },
      { name: 'New Baltimore', ppm: 278, level: 'Very Hard' },
      { name: 'Niles', ppm: 255, level: 'Very Hard' },
      { name: 'Northville', ppm: 265, level: 'Very Hard' },
      { name: 'Novi', ppm: 321, level: 'Very Hard' },
      { name: 'Oak Park', ppm: 329, level: 'Very Hard' },
      { name: 'Okemos', ppm: 265, level: 'Very Hard' },
      { name: 'Owosso', ppm: 244, level: 'Very Hard' },
      { name: 'Oxford', ppm: 265, level: 'Very Hard' },
      { name: 'Pinckney', ppm: 124, level: 'Hard' },
      { name: 'Plymouth', ppm: 333, level: 'Very Hard' },
      { name: 'Pontiac', ppm: 312, level: 'Very Hard' },
      { name: 'Port Huron', ppm: 364, level: 'Very Hard' },
      { name: 'Portage', ppm: 301, level: 'Very Hard' },
      { name: 'Redford', ppm: 385, level: 'Very Hard' },
      { name: 'Royal Oak', ppm: 277, level: 'Very Hard' },
      { name: 'Saint Clair Shores', ppm: 130, level: 'Hard' },
      { name: 'Saint Joseph', ppm: 185, level: 'Hard' },
      { name: 'Saginaw', ppm: 104, level: 'Moderate' },
      { name: 'Saline', ppm: 324, level: 'Very Hard' },
      { name: 'South Lyon', ppm: 125, level: 'Hard' },
      { name: 'Southfield', ppm: 168, level: 'Hard' },
      { name: 'Southgate', ppm: 178, level: 'Hard' },
      { name: 'Spring Lake', ppm: 254, level: 'Very Hard' },
      { name: 'Sterling Heights', ppm: 138, level: 'Hard' },
      { name: 'Sturgis', ppm: 333, level: 'Very Hard' },
      { name: 'Swartz Creek', ppm: 320, level: 'Very Hard' },
      { name: 'Taylor', ppm: 368, level: 'Very Hard' },
      { name: 'Traverse City', ppm: 164, level: 'Hard' },
      { name: 'Trenton', ppm: 247, level: 'Very Hard' },
      { name: 'Troy', ppm: 210, level: 'Hard' },
      { name: 'Utica', ppm: 320, level: 'Very Hard' },
      { name: 'Walled Lake', ppm: 396, level: 'Very Hard' },
      { name: 'Warren', ppm: 144, level: 'Hard' },
      { name: 'Washington', ppm: 314, level: 'Very Hard' },
      { name: 'Waterford', ppm: 322, level: 'Very Hard' },
      { name: 'West Bloomfield', ppm: 175, level: 'Hard' },
      { name: 'Westland', ppm: 198, level: 'Hard' },
      { name: 'White Lake', ppm: 402, level: 'Very Hard' },
      { name: 'Wyandotte', ppm: 256, level: 'Very Hard' },
      { name: 'Wyoming', ppm: 321, level: 'Very Hard' },
      { name: 'Ypsilanti', ppm: 304, level: 'Very Hard' },
      { name: 'Zeeland', ppm: 388, level: 'Very Hard' },
    ]
  },
  arizona: {
    name: 'Arizona',
    code: 'AZ',
    avgPPM: 270,
    level: 'very hard',
    description: 'Arizona has some of the hardest water in the United States, with an average hardness of 270 PPM.',
    cities: [
      { name: 'Bullhead City', ppm: 615, level: 'Very Hard' },
      { name: 'Chandler', ppm: 292, level: 'Very Hard' },
      { name: 'Gilbert', ppm: 215, level: 'Hard' },
      { name: 'Glendale', ppm: 291, level: 'Very Hard' },
      { name: 'Lake Havasu City', ppm: 323, level: 'Very Hard' },
      { name: 'Mesa', ppm: 292, level: 'Very Hard' },
      { name: 'Phoenix', ppm: 225, level: 'Very Hard' },
      { name: 'Scottsdale', ppm: 343, level: 'Very Hard' },
      { name: 'Tempe', ppm: 210, level: 'Hard' },
      { name: 'Tucson', ppm: 211, level: 'Hard' },
      { name: 'Yuma', ppm: 370, level: 'Very Hard' },
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
      { name: 'Kent', ppm: 47, level: 'Soft' },
      { name: 'Everett', ppm: 12, level: 'Soft' },
      { name: 'Renton', ppm: 33, level: 'Soft' },
      { name: 'Federal Way', ppm: 24, level: 'Soft' },
      { name: 'Tri-Cities', ppm: 174, level: 'Hard' },
      { name: 'Olympia', ppm: 83, level: 'Moderate' },
      { name: 'Bellingham', ppm: 24, level: 'Soft' },
      { name: 'Mount Vernon', ppm: 23, level: 'Soft' },
      { name: 'Longview', ppm: 91, level: 'Moderate' },
      { name: 'Whidbey Island', ppm: 25, level: 'Soft' },
      { name: 'Port Angeles', ppm: 88, level: 'Moderate' },
      { name: 'Sequim', ppm: 108, level: 'Moderate' },
      { name: 'Yakima', ppm: 87, level: 'Moderate' },
      { name: 'Walla Walla', ppm: 180, level: 'Hard' },
      { name: 'Moses Lake', ppm: 73, level: 'Moderate' },
      { name: 'Ellensburg', ppm: 33, level: 'Soft' },
      { name: 'Wenatchee', ppm: 147, level: 'Hard' },
      { name: 'Redmond', ppm: 18, level: 'Soft' },
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {state.cities.map((city, index) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(index * 0.02, 0.5) }}
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