import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Factory, Building2, Home, Leaf, Ship, ArrowRight, Filter, CheckCircle, X, Settings } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const categories = [
  {
    id: 'all',
    name: 'All Case Studies',
    icon: Filter,
    color: 'slate'
  },
  {
    id: 'industrial',
    name: 'Industrial',
    icon: Factory,
    color: 'slate',
    description: 'Manufacturing facilities, power plants, and wastewater treatment'
  },
  {
    id: 'commercial',
    name: 'Commercial',
    icon: Building2,
    color: 'blue',
    description: 'Hotels, hospitals, schools, and office buildings'
  },
  {
    id: 'residential',
    name: 'Residential',
    icon: Home,
    color: 'cyan',
    description: 'Homes, apartments, and residential complexes'
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    icon: Leaf,
    color: 'green',
    description: 'Farms, greenhouses, and food processing'
  },
  {
    id: 'marine',
    name: 'Marine',
    icon: Ship,
    color: 'teal',
    description: 'Ships, vessels, and maritime applications'
  }
];

const caseStudies = [
  // Industrial
  {
    category: 'industrial',
    title: 'Massive Texas Factory',
    slug: 'massive-texas-factory',
    description: 'EcoTech Solutions installed two HydroFLOW i-Range units to help saving water in a 5.2 million square foot factory in Texas.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2025/07/massive-texas-factory-510x510.webp',
    results: ['Water savings', 'Reduced maintenance', 'Scale prevention'],
    pdfUrl: 'https://hydroflow-usa.com/wp-content/uploads/2025/08/HydroFLOW-Case-Study-Massive-Texas-Factory-2025-update.pdf',
    application_type: ['Cooling Towers', 'Chillers'],
    products_used: ['I Range']
  },
  {
    category: 'industrial',
    title: 'Sludge Line Struvite Treatment',
    slug: 'sludge-line-struvite-treatment',
    description: 'After 3 months of operation, HydroFLOW was able to reduce scaling and maintain consistent flow rates.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2024/04/sludge-line-i150.jpg',
    results: ['Reduced scaling', 'Consistent flow rates', 'Lower maintenance'],
    pdfUrl: 'https://hydroflow-usa.com/wp-content/uploads/2024/04/HydroFLOW-Case-Study-Sludge-Line-Struvite-Treatment-2023.pdf',
    application_type: ['Wastewater Treatment'],
    products_used: ['I Range']
  },
  {
    category: 'industrial',
    title: 'Steel Company Spray Bar System',
    description: 'Steel manufacturing facility in Ontario, Canada with scale issues on their galvanizing line.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/24681639432386-510x510.jpg',
    results: ['Scale elimination', 'Improved efficiency', 'Cost savings'],
    application_type: ['Heat Exchangers', 'Other'],
    products_used: ['I Range']
  },
  {
    category: 'industrial',
    title: 'Biofilm Reduction - Referral Letter',
    description: 'Biofilm reduction letter from Avantor - Poland. Avantor is an American Fortune 500 company.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/88401638211312-510x510.jpg',
    results: ['Biofilm elimination', 'Fortune 500 approval', 'International success'],
    application_type: ['Other'],
    products_used: ['I Range']
  },
  {
    category: 'industrial',
    title: 'Lehigh County WWTP - Struvite Treatment',
    description: 'Within 8 days we saw that the struvite has stopped accumulating and was softening up.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/36831596736223-510x510.jpg',
    results: ['Struvite prevention', 'Easier cleaning', 'Reduced downtime'],
    application_type: ['Wastewater Treatment'],
    products_used: ['I Range']
  },
  {
    category: 'industrial',
    title: 'City of Walla Walla Wastewater Plant',
    slug: 'city-of-walla-walla-wastewater-plant',
    description: 'After 5 weeks of installation, no accumulation on 12" x 12" section. Struvite removal is slow yet noticeable.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/60391596733327.jpg',
    results: ['No scale accumulation', 'Visible improvement', 'Municipal approved'],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/84711596732922.pdf',
    application_type: ['Wastewater Treatment'],
    products_used: ['I Range']
  },
  {
    category: 'industrial',
    title: 'Honda Cooling Tower',
    slug: 'honda-cooling-tower',
    description: 'HydroFLOW solved the algae problem in our cooling towers.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/81111495579148.jpg',
    results: ['Algae elimination', 'Chemical-free', 'Lower operational costs'],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/85191493939481.pdf',
    application_type: ['Cooling Towers'],
    products_used: ['I Range']
  },
  {
    category: 'industrial',
    title: 'Paper Mill Liquor Lines',
    description: 'The water conditioners have a positive effect on heat exchanger performance by breaking-up the scale deposits.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/47651495582939-510x510.jpg',
    results: ['Improved heat transfer', 'Scale breakdown', 'Better performance'],
    application_type: ['Heat Exchangers', 'Other'],
    products_used: ['I Range']
  },
  {
    category: 'industrial',
    title: 'CMC Concrete Report',
    description: 'The HydroFLOW device has shown that it can improve and save costs during the concrete production process.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/14321495583049-510x510.jpg',
    results: ['Cost savings', 'Improved production', 'Quality enhancement'],
    application_type: ['Other'],
    products_used: ['I Range']
  },
  {
    category: 'industrial',
    title: 'Inland Power Plant in China',
    description: 'After HydroFLOW was installed, chemical dosage was totally eliminated, and no hard scale was found.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/6861498261526-510x510.jpg',
    results: ['Zero chemicals', 'No scale buildup', 'Significant savings'],
    application_type: ['Cooling Towers', 'Heat Exchangers'],
    products_used: ['I Range']
  },
  {
    category: 'industrial',
    title: 'Power Station Steam Condenser',
    description: 'The HydroFLOW water conditioner reduced buildup of deposits, silt and biofilm in the heat-exchangers.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/71371495581347-510x510.jpg',
    results: ['Reduced deposits', 'Cleaner exchangers', 'Higher efficiency'],
    application_type: ['Heat Exchangers', 'Steam Systems'],
    products_used: ['I Range']
  },
  {
    category: 'industrial',
    title: '60 HP Low Pressure Steam Boiler',
    slug: '60-hp-low-pressure-steam-boiler',
    description: 'The efficiency of the 60 HP low-pressure steam boiler is expected to further increase as scale continues to be removed.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/13321495580758.jpg',
    results: ['Increased efficiency', 'Scale removal', 'Energy savings'],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/88201550515726.pdf',
    application_type: ['Boilers', 'Steam Systems'],
    products_used: ['I Range'],
    installer: 'HydroFLOW Midwest',
    customer: 'Commercial trucking company from Rosemount, Minnesota',
    application: '60 horsepower low-pressure natural gas steam boiler (steam is used during the truck wash process)',
    installed_units: 'One HydroFLOW i45 on the water line feeds the steam boiler',
    background: 'Due to excessive scale accumulation, even with softening and chemical usage, the head of maintenance decided to evaluate HydroFLOW\'s ability to descale the steam boiler and prevent further scale formation.',
    success_factors: ['Gradually remove scale deposits without acid clean', 'Improve heat transfer efficiency']
  },
  {
    category: 'industrial',
    title: 'Natural Gas and Oil Producer',
    description: 'No drop in water flow due to HydroFLOW\'s ability to keep the pipe free of scale accumulation.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/77171495579956-510x510.jpg',
    results: ['Consistent flow', 'Scale-free pipes', 'No maintenance needed'],
    application_type: ['Other'],
    products_used: ['I Range']
  },
  {
    category: 'industrial',
    title: 'Wastewater Treatment Plant in Ohio',
    description: 'The HydroFLOW device not only reduced the rate of struvite accumulation, it actually started to soften-up existing deposits!',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/29401648597339-510x510.jpg',
    results: ['Struvite reduction', 'Softened deposits', 'Ohio success'],
    application_type: ['Wastewater Treatment'],
    products_used: ['I Range']
  },

  // Commercial
  {
    category: 'commercial',
    title: 'Gold LEED Registered Campus',
    slug: 'gold-leed-campus',
    description: 'The HydroFLOW product has performed superbly well in keeping our water heaters scale free.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/49841495480863-510x510.jpg',
    results: ['Scale-free heaters', 'Full efficiency', 'LEED compliance'],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/49731493848513.pdf',
    application_type: ['Water Heaters'],
    products_used: ['HS40']
  },
  {
    category: 'commercial',
    title: 'Bakery Steam Boilers',
    slug: 'bakery-steam-boilers',
    description: 'HydroFLOW significantly reduced limescale and corrosion accumulation in our steam boilers.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/44051495481164-510x510.jpg',
    results: ['Reduced scale', 'Less corrosion', 'Extended equipment life'],
    pdfUrl: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/bakery-steam-boilers.pdf',
    application_type: ['Boilers', 'Steam Systems', 'Food Processing'],
    products_used: ['HS40']
  },
  {
    category: 'commercial',
    title: 'Sunrise Children\'s Hospital Cooling Tower',
    slug: 'sunrise-childrens-hospital-cooling-tower',
    description: 'After five months chemical-free, there is no hard scale accumulation and biological count is well under 1,000 CFU/ML.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/31341495483508.jpg',
    results: ['Chemical-free operation', 'No scale buildup', 'Safe water quality'],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/43851493848202.pdf',
    application_type: ['Cooling Towers'],
    products_used: ['HS40'],
    installer: 'HydroFLOW West',
    customer: 'Sunrise Children\'s Hospital – Las Vegas NV',
    application: 'Cooling Tower',
    installed_units: 'HydroFLOW Industrial Unit',
    background: 'Hospital cooling tower evaluation to reduce limescale and chemical usage.',
    success_factors: ['Reduce limescale and chemical used']
  },
  {
    category: 'commercial',
    title: 'Nellis Air Force Base Cooling Tower',
    slug: 'nellis-air-force-base-cooling-tower',
    description: 'No industrial water treatment chemicals used in the last 9-10 months of operation.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/36551561660043.jpg',
    results: ['Zero chemical usage', 'Cost savings', 'Environmental benefits'],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/36111563298950.pdf',
    application_type: ['Cooling Towers'],
    products_used: ['I Range'],
    installer: 'HydroFLOW West',
    customer: 'Nellis Air Force Base',
    application: 'Cooling Tower',
    installed_units: 'HydroFLOW i160 unit',
    background: 'A six-month product evaluation of the Hydropath technology was conducted on one of the base\'s cooling towers.',
    success_factors: ['Eliminate chemical usage', 'Prevent scale buildup']
  },
  {
    category: 'commercial',
    title: 'HydroFLOW Cooling Tower Chiller Installation',
    description: 'Medical Center\'s head of maintenance at the 7 month chiller tube inspection: This is the cleanest the chiller tubes had ever been.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/57991495480671-510x510.jpg',
    results: ['Cleanest ever', 'Medical facility approved', 'Outstanding results'],
    application_type: ['Cooling Towers', 'Chillers'],
    products_used: ['HS40']
  },
  {
    category: 'commercial',
    title: 'Gold Gym Lap Pool',
    description: 'Operational cost reduction was achieved thanks to HydroFLOW.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/31891495480760-510x510.jpg',
    results: ['Cost reduction', 'Better water quality', 'Member satisfaction'],
    application_type: ['Swimming Pools'],
    products_used: ['HS40']
  },
  {
    category: 'commercial',
    title: 'St. Helena Hospital Ice Machine',
    description: 'I would recommend HydroFLOW in ice machine applications, to assist with keeping scale from accumulating on the equipment.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/56141495480858-510x510.jpg',
    results: ['Scale prevention', 'Clean ice', 'Hospital approved'],
    application_type: ['Ice Machines'],
    products_used: ['HS40']
  },
  {
    category: 'commercial',
    title: 'Penn State University',
    description: 'Our HydroFLOW units are maintenance free, environmentally friendly, and have saved us thousands of dollars.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/13301495480950-510x510.jpg',
    results: ['Maintenance-free', 'Eco-friendly', 'Thousands saved'],
    application_type: ['HVAC Systems'],
    products_used: ['HS40']
  },
  {
    category: 'commercial',
    title: 'The Melting Pot Restaurant',
    description: 'Our investment in the HydroFLOW unit is expected to pay for itself over a 14 month period.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/25041495481040-510x510.jpg',
    results: ['14 month ROI', 'Restaurant success', 'Proven savings'],
    application_type: ['Dishwashers', 'Food Processing'],
    products_used: ['HS40']
  },
  {
    category: 'commercial',
    title: 'Sharonville Fire Department',
    description: 'We would highly recommend the use of HydroFLOW for anyone who has limescale issues.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/50851495481270-510x510.jpg',
    results: ['Fire department approved', 'Limescale solved', 'High recommendation'],
    application_type: ['Water Heaters'],
    products_used: ['HS40']
  },
  {
    category: 'commercial',
    title: 'Scale and Bio Treatment in Outdoor Pool',
    description: 'The state inspector claims our pool is the cleanest in the Yakima Valley!',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/96771495481356-510x510.jpg',
    results: ['Cleanest pool award', 'State inspector approved', 'Outstanding results'],
    application_type: ['Swimming Pools'],
    products_used: ['HS40']
  },
  {
    category: 'commercial',
    title: 'Premium Car Wash in California',
    description: 'After 6 months of operation, all nozzles are working perfectly; saving water and greatly reducing maintenance costs.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/63811495481448-510x510.jpg',
    results: ['Water savings', 'Perfect nozzle performance', 'Lower maintenance'],
    application_type: ['Car Wash'],
    products_used: ['HS40']
  },
  {
    category: 'commercial',
    title: 'Hotel Hot Water System',
    description: 'Cleaning the tankless water heaters is 75% less frequent and much easier; harsh chemicals are no longer required.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/67881495481553-510x510.jpg',
    results: ['75% less cleaning', 'No harsh chemicals', 'Easy maintenance'],
    application_type: ['Water Heaters'],
    products_used: ['HS40']
  },
  {
    category: 'commercial',
    title: 'Office Building Cooling Towers in US Southeast',
    description: 'After a few short days with HydroFLOW, the CFU count dropped to under 1,000. Other benefits included reduced scale and biofilm.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/56921495481648-510x510.jpg',
    results: ['Low bacteria count', 'Reduced biofilm', 'Fast results'],
    application_type: ['Cooling Towers'],
    products_used: ['HS40']
  },

  // Residential
  {
    category: 'residential',
    title: 'Coliforms in Well Water',
    description: 'HydroFLOW successfully treated coliform bacteria in residential well water.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/12/28901495146802.jpg',
    results: ['Bacteria reduction', 'Safe drinking water', 'No chemicals'],
    application_type: ['Wells'],
    products_used: ['Pearl']
  },
  {
    category: 'residential',
    title: 'Plumbing Contractor',
    description: 'Professional plumber testimonial on HydroFLOW performance in residential applications.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/12/31951495476221.jpg',
    results: ['Easy installation', 'Proven results', 'Client satisfaction'],
    application_type: ['Other'],
    products_used: ['Pearl']
  },
  {
    category: 'residential',
    title: 'Product Evaluation - Tankless Boiler',
    description: 'Residential tankless boiler evaluation showing excellent scale prevention results.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/39421495481748-510x510.jpg',
    results: ['Tankless protection', 'Scale-free operation', 'Energy efficient'],
    application_type: ['Boilers', 'Water Heaters'],
    products_used: ['Pearl']
  },
  {
    category: 'residential',
    title: 'Residential Well',
    description: 'Complete well water treatment solution for hard water issues.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/36701495481855-510x510.jpg',
    results: ['Scale prevention', 'Improved water quality', 'Appliance protection'],
    application_type: ['Wells'],
    products_used: ['Pearl']
  },
  {
    category: 'residential',
    title: 'Residential Complex',
    description: 'Multi-unit residential complex solved hard water problems building-wide.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/91531495481950-510x510.jpg',
    results: ['Building-wide solution', 'Tenant satisfaction', 'Reduced complaints'],
    application_type: ['Other'],
    products_used: ['Pearl Plus']
  },
  {
    category: 'residential',
    title: 'Residential Dishwasher',
    description: 'Dishwasher performance improved dramatically with HydroFLOW treatment.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/40401495482049-510x510.jpg',
    results: ['Spot-free dishes', 'No rinse aid needed', 'Cleaner results'],
    application_type: ['Dishwashers'],
    products_used: ['Pearl']
  },
  {
    category: 'residential',
    title: 'Residential Pool',
    description: 'Swimming pool scale and biofilm control without harsh chemicals.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/97911495482148-510x510.jpg',
    results: ['Crystal clear water', 'Less chemicals', 'Easier maintenance'],
    application_type: ['Swimming Pools'],
    products_used: ['Pearl Plus']
  },
  {
    category: 'residential',
    title: 'Residential Tower',
    description: 'High-rise residential tower with comprehensive water treatment solution.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/96881495482243-510x510.jpg',
    results: ['Multi-floor coverage', 'Consistent results', 'Resident satisfaction'],
    application_type: ['Other'],
    products_used: ['Pearl Plus']
  },
  {
    category: 'residential',
    title: 'Residential Water Heater',
    description: 'Water heater protection and efficiency improvement.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/26191495482338-510x510.jpg',
    results: ['Extended heater life', 'Lower energy bills', 'No scale buildup'],
    application_type: ['Water Heaters'],
    products_used: ['Pearl']
  },

  // Agriculture
  {
    category: 'agriculture',
    title: 'Municipal Golf Course in Texas',
    description: 'The goal was to increase the overall health of the grass, which was achieved.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/24091655247748-510x510.jpg',
    results: ['Improved grass health', 'Better irrigation', 'Water savings'],
    application_type: ['Golf Course', 'Irrigation'],
    products_used: ['I Range']
  },
  {
    category: 'agriculture',
    title: 'Long Stem Rose Growth',
    description: 'The grower wanted to see how HydroFLOW could increase the output from his greenhouses.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2024/03/Long-Stem-Rose-picture-for-the-case-study-2.jpg',
    results: ['Increased yield', 'Better quality', 'Healthier plants'],
    application_type: ['Greenhouses', 'Irrigation'],
    products_used: ['I Range']
  },
  {
    category: 'agriculture',
    title: 'HydroFLOW Reduces Algae Growth',
    description: 'With HydroFLOW the reduction in algae growth was dramatic.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/71851495482439-510x510.jpg',
    results: ['Dramatic algae reduction', 'Cleaner water', 'Better crop health'],
    application_type: ['Irrigation'],
    products_used: ['I Range']
  },
  {
    category: 'agriculture',
    title: 'Food Processing Cooling Tower',
    description: 'With HydroFLOW, my cooling tower is much cleaner than it was with chemicals.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/18441495482530-510x510.jpg',
    results: ['Cleaner than chemicals', 'Food safety', 'Cost effective'],
    application_type: ['Cooling Towers', 'Food Processing'],
    products_used: ['HS40']
  },
  {
    category: 'agriculture',
    title: 'Increased Crop Yield Experiment',
    description: 'Both plots with HydroFLOW obtained better yield than the control plot.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/38001495482627-510x510.jpg',
    results: ['Higher yields', 'Better quality', 'Proven results'],
    application_type: ['Irrigation'],
    products_used: ['I Range']
  },
  {
    category: 'agriculture',
    title: 'Orchard - Scale on Apples',
    description: 'Scale deposits accumulate as fine powder which is very easy to remove.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/57771495482721-510x510.jpg',
    results: ['Easy cleaning', 'Better fruit quality', 'Less maintenance'],
    application_type: ['Irrigation'],
    products_used: ['I Range']
  },
  {
    category: 'agriculture',
    title: 'Aquavet Clinical Evaluation - Fish Health',
    description: 'During 90 days of observation, the overall tilapia survival rate was considerably higher with HydroFLOW.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/34201495482816-510x510.jpg',
    results: ['Higher survival rates', 'Parasite prevention', 'Healthier fish'],
    application_type: ['Aquaculture'],
    products_used: ['I Range']
  },
  {
    category: 'agriculture',
    title: 'HydroFLOW Reduces Biofilm at Baron Farms',
    description: 'We are very pleased with the results and are happy with the HydroFLOW S-38! Thank you Hydroflow!',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/65821495482910-510x510.jpg',
    results: ['Biofilm reduction', 'Farmer satisfaction', 'Clean systems'],
    application_type: ['Irrigation'],
    products_used: ['I Range']
  },

  // Marine
  {
    category: 'marine',
    title: 'U.S. Navy Seafighter',
    description: 'HydroFLOW succeeded in keeping the strainer free of biofouling for a much longer period.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2025/07/seafighter-510x510.webp',
    results: ['Extended maintenance intervals', 'Biofouling prevention', 'Naval approved'],
    application_type: ['Marine Systems'],
    products_used: ['HM Range']
  },
  {
    category: 'marine',
    title: 'MV Hermes Leader - Replacement of UV-System',
    description: 'Water test results showed no trace of any bacteria.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/40231495151554-510x510.jpg',
    results: ['Bacteria-free water', 'UV replacement', 'Cost savings'],
    application_type: ['Marine Systems'],
    products_used: ['HM Range']
  },
  {
    category: 'marine',
    title: 'Ray Shipping Equips Fleet with Hydropath',
    description: 'Completely reduced vessel scale buildup, reduced bacteria corrosion and saved labor work and money.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/79081495752087-510x510.jpg',
    results: ['Fleet-wide success', 'Scale elimination', 'Labor savings'],
    application_type: ['Marine Systems'],
    products_used: ['HM Range']
  },
  {
    category: 'marine',
    title: 'Anglo Eastern - Freshwater Generator',
    description: 'Freshwater generator is free of scale, and chemical dosing is no longer required.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/78611495752951-510x510.jpg',
    results: ['Scale-free operation', 'No chemicals needed', 'Reliable performance'],
    application_type: ['Marine Systems'],
    products_used: ['HM Range']
  },
  {
    category: 'marine',
    title: 'MV Hoegh Antwerp - Scale Prevention',
    description: 'No scale buildup was found during opening and no chemicals were required for cleaning.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/88651495664646-510x510.jpg',
    results: ['Zero scale buildup', 'Chemical-free cleaning', 'Easy maintenance'],
    application_type: ['Marine Systems'],
    products_used: ['HM Range']
  },
  {
    category: 'marine',
    title: 'Car Carrier - Main Cooling System',
    description: 'The particle filter at the bottom of the unit was found clean of barnacles and was easily washed.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/42481495666712-510x510.jpg',
    results: ['Barnacle-free', 'Easy cleaning', 'System protection'],
    application_type: ['Marine Systems'],
    products_used: ['HM Range']
  }
];

const applicationTypes = [
  'Cooling Towers', 'Boilers', 'HVAC Systems', 'Water Heaters', 'Swimming Pools',
  'Irrigation', 'Food Processing', 'Wastewater Treatment', 'Heat Exchangers',
  'Ice Machines', 'Dishwashers', 'Marine Systems', 'Steam Systems', 'Chillers',
  'Wells', 'Greenhouses', 'Aquaculture', 'Car Wash', 'Golf Course', 'Other'
];

const products = ['Pearl', 'Pearl Plus', 'HS40', 'I Range', 'HM Range'];

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedApplication, setSelectedApplication] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Fetch case studies from database
  const { data: dbCaseStudies = [], isLoading } = useQuery({
    queryKey: ['caseStudies'],
    queryFn: () => base44.entities.CaseStudy.list('-created_date', 100),
    initialData: []
  });

  // Combine static and database case studies
  const allCaseStudies = [...caseStudies, ...dbCaseStudies];

  // Apply filters
  const filteredStudies = allCaseStudies.filter(study => {
    const categoryMatch = activeCategory === 'all' || study.category === activeCategory;
    const applicationMatch = selectedApplication === 'all' || 
      study.application_type?.includes(selectedApplication);
    const productMatch = selectedProduct === 'all' || 
      study.products_used?.includes(selectedProduct);
    
    return categoryMatch && applicationMatch && productMatch;
  });

  const activeCategoryData = categories.find(cat => cat.id === activeCategory);
  const activeFiltersCount = [activeCategory, selectedApplication, selectedProduct]
    .filter(f => f !== 'all').length;

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
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real-world success stories from customers across industries who have experienced the proven benefits of HydroFLOW technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Industry Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-cyan-600 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Advanced Filters Toggle */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            >
              <Settings className="w-4 h-4" />
              Advanced Filters
              {activeFiltersCount > 0 && (
                <Badge className="bg-cyan-600 text-white ml-1">{activeFiltersCount}</Badge>
              )}
            </button>

            {activeFiltersCount > 0 && (
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSelectedApplication('all');
                  setSelectedProduct('all');
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                <X className="w-4 h-4" />
                Clear All
              </button>
            )}
          </div>

          {/* Advanced Filters Panel */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t"
            >
              <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Application Type
                  </label>
                  <Select value={selectedApplication} onValueChange={setSelectedApplication}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="All Applications" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Applications</SelectItem>
                      {applicationTypes.map((app) => (
                        <SelectItem key={app} value={app}>{app}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Product Used
                  </label>
                  <Select value={selectedProduct} onValueChange={setSelectedProduct}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="All Products" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Products</SelectItem>
                      {products.map((product) => (
                        <SelectItem key={product} value={product}>{product}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Category Description */}
      {activeCategory !== 'all' && activeCategoryData && (
        <section className="py-8 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-6 bg-gradient-to-br from-cyan-50 to-white border-cyan-100">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-${activeCategoryData.color}-500 flex items-center justify-center flex-shrink-0`}>
                  <activeCategoryData.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-1">{activeCategoryData.name} Case Studies</h2>
                  <p className="text-slate-600">{activeCategoryData.description}</p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Case Studies Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <div className="mb-6 text-center">
            <p className="text-slate-600">
              Showing <span className="font-semibold text-slate-900">{filteredStudies.length}</span> case {filteredStudies.length === 1 ? 'study' : 'studies'}
              {activeFiltersCount > 0 && (
                <span> with {activeFiltersCount} active {activeFiltersCount === 1 ? 'filter' : 'filters'}</span>
              )}
            </p>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-slate-600">Loading case studies...</p>
            </div>
          ) : filteredStudies.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-600 mb-4">No case studies found matching your filters.</p>
              <Button
                onClick={() => {
                  setActiveCategory('all');
                  setSelectedApplication('all');
                  setSelectedProduct('all');
                }}
                variant="outline"
              >
                Clear All Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={`${study.category}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.05, 0.5) }}
              >
                <Link to={study.slug ? createPageUrl('CaseStudyDetail') + '?slug=' + study.slug : '#'}>
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-all group cursor-pointer">
                  {study.image && (
                    <div className="h-48 overflow-hidden bg-slate-100">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {(() => {
                        const cat = categories.find(c => c.id === study.category);
                        const Icon = cat?.icon;
                        return (
                          <>
                            <Icon className="w-4 h-4 text-cyan-600" />
                            <Badge className="bg-cyan-100 text-cyan-700 hover:bg-cyan-100 capitalize">
                              {study.category}
                            </Badge>
                          </>
                        );
                      })()}
                      {study.products_used && study.products_used.length > 0 && (
                        <Badge variant="outline" className="text-xs">
                          {study.products_used[0]}
                        </Badge>
                      )}
                      {study.application_type && study.application_type.length > 0 && (
                        <Badge variant="outline" className="text-xs">
                          {study.application_type[0]}
                        </Badge>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                      {study.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {study.description}
                    </p>
                    
                    {study.results && (
                      <div className="space-y-2">
                        {study.results.slice(0, 3).map((result, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
                </Link>
              </motion.div>
            ))}
            </div>
          )}
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
              Ready to Experience These Results?
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Join thousands of satisfied customers who have improved their water systems with HydroFLOW technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Products')}>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8 py-6">
                  Shop Products
                  <ArrowRight className="w-5 h-5 ml-2" />
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