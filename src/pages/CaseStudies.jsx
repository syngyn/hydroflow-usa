import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
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
    title: 'Screw Press Struvite Treatment',
    slug: 'screw-press-struvite-treatment',
    description: 'After 60 days, the press was pressure washed taking less than 4 hours instead of the typical 30 hours with chemicals. A 3-month payback period was achieved.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/e4f4de695_image.png',
    results: ['Eliminated $8,000/month chemical cost', 'Cleaning time reduced from 30 hours to under 4 hours', '3-month payback period'],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/309467422_HydroFLOW-Case-Study-Screw-Press-Struvite-Treatment-2023.pdf',
    application_type: ['Wastewater Treatment'],
    products_used: ['I Range']
  },
  {
    category: 'industrial',
    title: 'Sludge Line Struvite Treatment',
    slug: 'sludge-line-struvite-treatment',
    description: 'After 3 months of operation, HydroFLOW was able to reduce scaling and maintain consistent flow rates.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/073cd7b2e_image.png',
    results: ['Reduced scaling', 'Consistent flow rates', 'Lower maintenance'],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/a913379ff_HydroFLOW-Case-Study-Sludge-Line-Struvite-Treatment-2023.pdf',
    application_type: ['Wastewater Treatment'],
    products_used: ['iRange']
  },
  {
    category: 'industrial',
    title: 'Steel Company Spray Bar System',
    slug: 'steel-company-spray-bar-system',
    description: 'Steel manufacturing facility in Ontario, Canada with scale issues on their galvanizing line.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/90609d12e_24681639432386.jpg',
    results: ['Scale elimination', 'Improved efficiency', 'Cost savings'],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/39071639432386.pdf',
    application_type: ['Heat Exchangers', 'Other'],
    products_used: ['iRange']
  },
  {
    category: 'industrial',
    title: 'Biofilm Reduction - Referral Letter',
    slug: 'biofilm-reduction-referral-letter',
    description: 'Biofilm reduction letter from Avantor - Poland. Avantor is an American Fortune 500 company.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/4b0a25b06_88401638211312.jpg',
    results: ['Biofilm elimination', 'Fortune 500 approval', 'International success'],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/61401638211314.pdf',
    application_type: ['Other'],
    products_used: ['iRange']
  },
  {
    category: 'industrial',
    title: 'Lehigh County WWTP - Struvite Treatment',
    slug: 'lehigh-county-wwtp-struvite-treatment',
    description: 'Within 8 days we saw that the struvite has stopped accumulating and was softening up.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/087be9706_image.png',
    results: ['Struvite prevention', 'Easier cleaning', 'Reduced downtime'],
    application_type: ['Wastewater Treatment'],
    products_used: ['iRange']
  },
  {
    category: 'industrial',
    title: 'City of Walla Walla Wastewater Plant',
    slug: 'city-of-walla-walla-wastewater-plant',
    description: 'After 5 weeks of installation, no accumulation on 12" x 12" section. Struvite removal is slow yet noticeable.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/22845e0f8_60391596733327.jpg',
    results: ['No scale accumulation', 'Visible improvement', 'Municipal approved'],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/1fce46dec_HydroFLOW-industrial-casestudy-city-of-walla-walla-wastewater-plant.pdf',
    application_type: ['Wastewater Treatment'],
    products_used: ['iRange']
  },
  {
    category: 'industrial',
    title: 'Honda Cooling Tower',
    slug: 'honda-cooling-tower',
    description: 'HydroFLOW solved the algae problem in our cooling towers.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/6421f8a1d_81111495579148.jpg',
    results: ['Algae elimination', 'Chemical-free', 'Lower operational costs'],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/85191493939481.pdf',
    application_type: ['Cooling Towers'],
    products_used: ['iRange']
  },
  {
    category: 'industrial',
    title: 'Paper Mill Liquor Lines',
    slug: 'paper-mill-liquor-lines',
    description: 'The water conditioners have a positive effect on heat exchanger performance by breaking-up the scale deposits.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/75ce255c0_image.png',
    results: ['Improved heat transfer', 'Scale breakdown', 'Better performance'],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/75593b140_46101493933705.pdf',
    application_type: ['Heat Exchangers', 'Other'],
    products_used: ['iRange']
  },
  {
    category: 'industrial',
    title: 'CMC Concrete Report',
    slug: 'cmc-concrete-report',
    description: 'The HydroFLOW device has shown that it can improve and save costs during the concrete production process.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/ba52c7c45_image.png',
    results: ['Cost savings', 'Improved production', 'Quality enhancement'],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/968133043_4171495131909.pdf',
    application_type: ['Other'],
    products_used: ['iRange']
  },
  {
    category: 'industrial',
    title: 'Inland Power Plant in China',
    slug: 'inland-power-plant-in-china',
    description: 'After HydroFLOW was installed, chemical dosage was totally eliminated, and no hard scale was found.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/1aadc4f7a_6861498261526.jpg',
    results: ['Zero chemicals', 'No scale buildup', 'Significant savings'],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/83871498261386.pdf',
    application_type: ['Cooling Towers', 'Heat Exchangers'],
    products_used: ['iRange']
  },
  {
    category: 'industrial',
    title: 'Power Station Steam Condenser',
    slug: 'power-station-steam-condenser',
    description: 'The HydroFLOW water conditioner reduced buildup of deposits, silt and biofilm in the heat-exchangers.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/368371e5f_71371495581347.jpg',
    results: ['Reduced deposits', 'Cleaner exchangers', 'Higher efficiency'],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/39691493939531.pdf',
    application_type: ['Heat Exchangers', 'Steam Systems'],
    products_used: ['iRange']
  },
  {
    category: 'industrial',
    title: '60 HP Low Pressure Steam Boiler',
    slug: '60-hp-low-pressure-steam-boiler',
    description: 'The efficiency of the 60 HP low-pressure steam boiler is expected to further increase as scale continues to be removed.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/fe8e0d1eb_image.png',
    results: ['Increased efficiency', 'Scale removal', 'Energy savings'],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/d33c208a5_88201550515726.pdf',
    application_type: ['Boilers', 'Steam Systems'],
    products_used: ['iRange'],
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
    slug: 'natural-gas-and-oil-producer',
    description: 'No drop in water flow due to HydroFLOW\'s ability to keep the pipe free of scale accumulation.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/80b2c4c7a_image.png',
    results: ['Consistent flow', 'Scale-free pipes', 'No maintenance needed'],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/9df77444d_1431539882593.pdf',
    application_type: ['Other'],
    products_used: ['iRange']
  },
  {
    category: 'industrial',
    title: 'Wastewater Treatment Plant in Ohio',
    slug: 'wastewater-treatment-plant-in-ohio',
    description: 'The HydroFLOW device not only reduced the rate of struvite accumulation, it actually started to soften-up existing deposits!',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/16924a78b_generated_image.png',
    results: ['Struvite reduction', 'Softened deposits', 'Ohio success'],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/78971648597202.pdf',
    application_type: ['Wastewater Treatment'],
    products_used: ['iRange']
  },

  // Commercial
  {
    category: 'commercial',
    title: 'Scale Reduction at a Gas Station and Convenience Store Chain',
    slug: 'scale-reduction-gas-station-convenience-store',
    description: 'A 400+ location gas station and convenience store chain used HydroFLOW s38 and hs40 devices to treat coffee makers, food warmers, ice machines, water heaters and fixtures. Estimated ROI of 6 to 12 months per store.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/6a0a3a88e_HydroFLOW-commercial-case-study-gas-station-and-convenience-store-chain.pdf',
    results: ['Scale removed from fixtures without manual cleaning', 'Ice machines no longer require technician cleaning', 'Smoothie machines no longer clog with scale', '6–12 month ROI per store'],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/6a0a3a88e_HydroFLOW-commercial-case-study-gas-station-and-convenience-store-chain.pdf',
    application_type: ['Ice Machines', 'Water Heaters', 'Food Processing'],
    products_used: ['Pearl Plus', 'HS40']
  },
  {
    category: 'commercial',
    title: 'Gold LEED Registered Campus',
    slug: 'gold-leed-campus',
    description: 'The HydroFLOW product has performed superbly well in keeping our water heaters scale free.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/1469904e9_image.png',
    results: ['Scale-free heaters', 'Full efficiency', 'LEED compliance'],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/6b4d951ac_49731493848513.pdf',
    application_type: ['Water Heaters'],
    products_used: ['HS40']
  },
  {
    category: 'commercial',
    title: 'Bakery Steam Boilers',
    slug: 'bakery-steam-boilers',
    description: 'HydroFLOW significantly reduced limescale and corrosion accumulation in our steam boilers.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/4bf8d7c50_44051495481164.jpg',
    results: ['Reduced scale', 'Less corrosion', 'Extended equipment life'],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/39511493849268.pdf',
    application_type: ['Boilers', 'Steam Systems', 'Food Processing'],
    products_used: ['iRange']
  },
  {
    category: 'commercial',
    title: 'Sunrise Children\'s Hospital Cooling Tower',
    slug: 'sunrise-childrens-hospital-cooling-tower',
    description: 'After five months chemical-free, there is no hard scale accumulation and biological count is well under 1,000 CFU/ML.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/1ace0f6b1_image.png',
    results: ['Chemical-free operation', 'No scale buildup', 'Safe water quality'],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/2e4f96be4_43851493848202.pdf',
    application_type: ['Cooling Towers'],
    products_used: ['iRange'],
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
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/b8987c812_36551561660043.jpg',
    results: ['Zero chemical usage', 'Cost savings', 'Environmental benefits'],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/36111563298950.pdf',
    application_type: ['Cooling Towers'],
    products_used: ['iRange'],
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
    slug: 'hydroflow-cooling-tower-chiller-installation',
    description: 'Medical Center\'s head of maintenance at the 7 month chiller tube inspection: This is the cleanest the chiller tubes had ever been.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/5b01fd83c_custom24condencer.png',
    results: ['Cleanest ever', 'Medical facility approved', 'Outstanding results'],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/43801662059912.pdf',
    application_type: ['Cooling Towers', 'Chillers'],
    products_used: ['iRange']
  },
  {
    category: 'commercial',
    title: 'Gold Gym Lap Pool',
    slug: 'gold-gym-lap-pool',
    description: 'Operational cost reduction was achieved thanks to HydroFLOW.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/acd8ba744_image.png',
    results: ['Cost reduction', 'Better water quality', 'Member satisfaction'],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/84741493847709.pdf',
    application_type: ['Swimming Pools'],
    products_used: ['I Range', 'HS40']
  },
  {
    category: 'commercial',
    title: 'St. Helena Hospital Ice Machine',
    slug: 'st-helena-hospital-ice-machine',
    description: 'I would recommend HydroFLOW in ice machine applications, to assist with keeping scale from accumulating on the equipment.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/33c596c15_image.png',
    results: ['Scale prevention', 'Clean ice', 'Hospital approved'],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/f9aac3d6d_78241493850010.pdf',
    application_type: ['Ice Machines'],
    products_used: ['Pearl Plus']
  },
  {
    category: 'commercial',
    title: 'Penn State University',
    slug: 'penn-state-university',
    description: 'Our HydroFLOW units are maintenance free, environmentally friendly, and have saved us thousands of dollars.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/5e5549989_image.png',
    results: ['Maintenance-free', 'Eco-friendly', 'Thousands saved'],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/8509b0567_89611493849814.pdf',
    application_type: ['HVAC Systems', 'Cooling Towers'],
    products_used: ['iRange']
  },
  {
    category: 'commercial',
    title: 'The Melting Pot Restaurant',
    slug: 'the-melting-pot-restaurant',
    description: 'Our investment in the HydroFLOW unit is expected to pay for itself over a 14 month period.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/8a320e425_image.png',
    results: ['14 month ROI', 'Restaurant success', 'Proven savings'],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/67a5d889d_24351493849401.pdf',
    application_type: ['Dishwashers', 'Food Processing'],
    products_used: ['Pearl Plus']
  },
  {
    category: 'commercial',
    title: 'Sharonville Fire Department',
    slug: 'sharonville-fire-department',
    description: 'We would highly recommend the use of HydroFLOW for anyone who has limescale issues.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/ddc7e5164_89651495480951.jpg',
    results: ['Fire department approved', 'Limescale solved', 'High recommendation'],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/36171495126964.pdf',
    application_type: ['Water Heaters', 'Other'],
    products_used: ['iRange']
  },
  {
    category: 'commercial',
    title: 'Scale and Bio Treatment in Outdoor Pool',
    slug: 'scale-and-bio-treatment-in-outdoor-pool',
    description: 'The state inspector claims our pool is the cleanest in the Yakima Valley!',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/184c0154f_image.png',
    results: ['Cleanest pool award', 'State inspector approved', 'Outstanding results'],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/7099a60ae_86361539882313.pdf',
    application_type: ['Swimming Pools'],
    products_used: ['iRange']
  },
  {
    category: 'commercial',
    title: 'Premium Car Wash in California',
    slug: 'premium-car-wash-in-california',
    description: 'After 6 months of operation, all nozzles are working perfectly; saving water and greatly reducing maintenance costs.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/7eb2386b7_image.png',
    results: ['Water savings', 'Perfect nozzle performance', 'Lower maintenance'],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/ac84c7ab9_1561563299281.pdf',
    application_type: ['Car Wash'],
    products_used: ['iRange']
  },
  {
    category: 'commercial',
    title: 'Hotel Hot Water System',
    slug: 'hotel-hot-water-system',
    description: 'Cleaning the tankless water heaters is 75% less frequent and much easier; harsh chemicals are no longer required.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/3e5267fa9_72631672858543.jpg',
    results: ['75% less cleaning', 'No harsh chemicals', 'Easy maintenance'],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/14241698879790.pdf',
    application_type: ['Water Heaters'],
    products_used: ['iRange']
  },
  {
    category: 'commercial',
    title: 'Office Building Cooling Towers in US Southeast',
    slug: 'office-building-cooling-towers-in-us-southeast',
    description: 'After a few short days with HydroFLOW, the CFU count dropped to under 1,000. Other benefits included reduced scale and biofilm.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/4c66c1e24_42301661965280.jpg',
    results: ['Low bacteria count', 'Reduced biofilm', 'Fast results'],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/75341661965067.pdf',
    application_type: ['Cooling Towers'],
    products_used: ['iRange']
  },

  // Residential
  {
    category: 'residential',
    title: 'Coliforms in Well Water',
    slug: 'coliforms-in-well-water',
    description: 'HydroFLOW successfully treated coliform bacteria in residential well water.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/16a0ff6f9_28901495146802.jpg',
    results: ['Bacteria reduction', 'Safe drinking water', 'No chemicals'],
    application_type: ['Wells'],
    products_used: ['Pearl Plus']
  },
  {
    category: 'residential',
    title: 'Plumbing Contractor',
    slug: 'plumbing-contractor',
    description: 'Professional plumber testimonial on HydroFLOW performance in residential applications.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/ad81caac4_31951495476221.jpg',
    results: ['Easy installation', 'Proven results', 'Client satisfaction'],
    application_type: ['Other'],
    products_used: ['Pearl']
  },
  {
    category: 'residential',
    title: 'Product Evaluation - Tankless Boiler',
    slug: 'product-evaluation-tankless-boiler',
    description: 'Residential tankless boiler evaluation showing excellent scale prevention results.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/8e8487817_14381495147872.jpg',
    results: ['Tankless protection', 'Scale-free operation', 'Energy efficient'],
    application_type: ['Boilers', 'Water Heaters'],
    products_used: ['Pearl']
  },
  {
    category: 'residential',
    title: 'Residential Well',
    slug: 'residential-well',
    description: 'Complete well water treatment solution for hard water issues.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/6d0c03a48_pearl-plus-on-pipe.png',
    results: ['Scale prevention', 'Improved water quality', 'Appliance protection'],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/75351495060345.pdf',
    application_type: ['Wells'],
    products_used: ['Pearl Plus']
  },
  {
    category: 'residential',
    title: 'Residential Complex',
    slug: 'residential-complex',
    description: 'Multi-unit residential complex solved hard water problems building-wide.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/db222a134_7751495146448.jpg',
    results: ['Building-wide solution', 'Tenant satisfaction', 'Reduced complaints'],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/87271493931205.pdf',
    application_type: ['Other'],
    products_used: ['Pearl Plus']
  },
  {
    category: 'residential',
    title: 'Residential Dishwasher',
    slug: 'residential-dishwasher',
    description: 'Dishwasher performance improved dramatically with HydroFLOW treatment.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/251608b46_41611494973757.jpg',
    results: ['Spot-free dishes', 'No rinse aid needed', 'Cleaner results'],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/31351493931674.pdf',
    application_type: ['Dishwashers'],
    products_used: ['Pearl Plus']
  },
  {
    category: 'residential',
    title: 'Residential Pool',
    slug: 'residential-pool',
    description: 'Swimming pool scale and biofilm control without harsh chemicals.',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800',
    results: ['Crystal clear water', 'Less chemicals', 'Easier maintenance'],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/f5d89f1a9_8651539882719.pdf',
    application_type: ['Swimming Pools'],
    products_used: ['HS40']
  },
  {
    category: 'residential',
    title: 'Residential Tower',
    slug: 'residential-tower',
    description: 'High-rise residential tower with comprehensive water treatment solution.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/a3454757f_11761494365073.jpg',
    results: ['Multi-floor coverage', 'Consistent results', 'Resident satisfaction'],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/51421493846519.pdf',
    application_type: ['Other'],
    products_used: ['iRange']
  },
  {
    category: 'residential',
    title: 'Residential Water Heater',
    slug: 'residential-water-heater',
    description: 'Water heater protection and efficiency improvement.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/28337c84d_element.png',
    results: ['Extended heater life', 'Lower energy bills', 'No scale buildup'],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/ce74fda09_36311632777095.pdf',
    application_type: ['Water Heaters'],
    products_used: ['Pearl Plus']
  },

  // Agriculture
  {
    category: 'agriculture',
    title: 'Municipal Golf Course in Texas',
    slug: 'municipal-golf-course-in-texas',
    description: 'The goal was to increase the overall health of the grass, which was achieved.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/73645241b_image.png',
    results: ['Improved grass health', 'Better irrigation', 'Water savings'],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/7dc3c0ccd_68631698880628.pdf',
    application_type: ['Golf Course', 'Irrigation'],
    products_used: ['iRange']
  },
  {
    category: 'agriculture',
    title: 'Long Stem Rose Growth',
    slug: 'long-stem-rose-growth',
    description: 'The grower wanted to see how HydroFLOW could increase the output from his greenhouses.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/97391384a_image.png',
    results: ['Increased yield', 'Better quality', 'Healthier plants'],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/1da5d4765_HydroFLOW-agriculture-case-study-long-stem-roses.pdf',
    application_type: ['Greenhouses', 'Irrigation'],
    products_used: ['iRange']
  },
  {
    category: 'agriculture',
    title: 'HydroFLOW Reduces Algae Growth',
    slug: 'hydroflow-reduces-algae-growth',
    description: 'With HydroFLOW the reduction in algae growth was dramatic.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/3691d128f_image.png',
    results: ['Dramatic algae reduction', 'Cleaner water', 'Better crop health'],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/bab9fe3f0_81121493936806.pdf',
    application_type: ['Irrigation'],
    products_used: ['iRange']
  },
  {
    category: 'agriculture',
    title: 'Food Processing Cooling Tower',
    slug: 'food-processing-cooling-tower',
    description: 'With HydroFLOW, my cooling tower is much cleaner than it was with chemicals.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/c90df1772_3541495124373-100x100.jpg',
    results: ['Cleaner than chemicals', 'Food safety', 'Cost effective'],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/67671539882904.pdf',
    application_type: ['Cooling Towers', 'Food Processing'],
    products_used: ['HS40']
  },
  {
    category: 'agriculture',
    title: 'Increased Crop Yield Experiment',
    slug: 'increased-crop-yield-experiment',
    description: 'Both plots with HydroFLOW obtained better yield than the control plot.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/4fd3f7fa7_87301495667998.jpg',
    results: ['Higher yields', 'Better quality', 'Proven results'],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/74431493851538.pdf',
    application_type: ['Irrigation'],
    products_used: ['iRange']
  },
  {
    category: 'agriculture',
    title: 'Orchard - Scale on Apples',
    slug: 'orchard-scale-on-apples',
    description: 'Scale deposits accumulate as fine powder which is very easy to remove. Over 90% of the apples are expected to receive the highest grade rating.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/f8cd07ecf_image.png',
    results: ['Over 90% highest grade rating', 'Easy scale removal', 'Clearer pond water', 'Reduced algae blooms', 'No filter clogging'],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/558f293df_271605140596.pdf',
    application_type: ['Irrigation', 'Other'],
    products_used: ['iRange'],
    installer: 'HydroFLOW West',
    customer: 'Eastern Washington apple grower',
    application: 'Scale accumulation on apples',
    installed_units: 'Custom HydroFLOW 12" Water Conditioner',
    background: 'The Orchard in the Yakima Valley, Washington, incorporates overhead sprayers for temperature control and protection from sun damage. Even though acid is added to the sprayed water, apples still gather hard scale stains. The scale staining reduces the grade of the apples. In an average growing season, only 50% of the apples receive the highest grade rating.',
    success_factors: ['Install Custom HydroFLOW 12" I Range on the pipe which supplies water to the Orchard', 'Scale deposits accumulate as fine powder which is very easy to remove', 'Over 90% of apples expected to receive highest grade rating', 'Pond water became much clearer and floating algae blooms reduced significantly', 'Snails that used to clog filters are no longer present']
  },
  {
    category: 'agriculture',
    title: 'Phase 1 - Aquavet Clinical Evaluation Gyrodactylus Spp',
    slug: 'aquavet-clinical-evaluation-fish-health',
    description: 'During 90 days of observation, the overall tilapia survival rate was considerably higher with HydroFLOW.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/123e77e92_15341495670660-400x400.jpg',
    results: ['Higher survival rates', 'Parasite prevention', 'Healthier fish'],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/84961495125171.pdf',
    application_type: ['Aquaculture'],
    products_used: ['iRange']
  },
  {
    category: 'agriculture',
    title: 'HydroFLOW Reduces Biofilm at Baron Farms',
    slug: 'hydroflow-reduces-biofilm-baron-farms',
    description: 'The results were excellent! The water was clean and clear. Were able to get their organic food processing license.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/aea25558e_image.png',
    results: ['Clean and clear water', 'Organic food processing license approved', 'Biofilm removed', 'Pipes descaled'],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/7339cd066_64021494003033.pdf',
    application_type: ['Wells', 'Other'],
    products_used: ['Pearl Plus']
  },

  // Marine
  {
    category: 'marine',
    title: 'U.S. Navy Seafighter',
    slug: 'us-navy-seafighter',
    description: 'HydroFLOW succeeded in keeping the strainer free of biofouling for a much longer period.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/c2d5706d8_image.png',
    results: ['Extended maintenance intervals', 'Biofouling prevention', 'Naval approved'],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/b06911af1_HydroFLOW-marine-case-study-US-Navy-Seafighter.pdf',
    application_type: ['Marine Systems'],
    products_used: ['HM Range']
  },
  {
    category: 'marine',
    title: 'MV Hermes Leader - Replacement of UV-System',
    slug: 'mv-hermes-leader-uv-system',
    description: 'Water test results showed no trace of any bacteria.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/a5e77c37e_image.png',
    results: ['Bacteria-free water', 'UV replacement', 'Cost savings'],
    application_type: ['Marine Systems'],
    products_used: ['HM Range']
  },
  {
    category: 'marine',
    title: 'Ray Shipping Equips Fleet with Hydropath',
    slug: 'ray-shipping-fleet-hydropath',
    description: 'Completely reduced vessel scale buildup, reduced bacteria corrosion and saved labor work and money.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/fbc618b16_image.png',
    results: ['Fleet-wide success', 'Scale elimination', 'Labor savings'],
    application_type: ['Marine Systems'],
    products_used: ['HM Range']
  },
  {
    category: 'marine',
    title: 'Anglo Eastern - Freshwater Generator',
    slug: 'anglo-eastern-freshwater-generator',
    description: 'Freshwater generator is free of scale, and chemical dosing is no longer required.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/b0977b45d_image.png',
    results: ['Scale-free operation', 'No chemicals needed', 'Reliable performance'],
    application_type: ['Marine Systems'],
    products_used: ['HM Range']
  },
  {
    category: 'marine',
    title: 'MV Hoegh Antwerp - Scale Prevention',
    slug: 'mv-hoegh-antwerp-scale-prevention',
    description: 'No scale buildup was found during opening and no chemicals were required for cleaning.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/ae70b79b0_88651495664646.jpg',
    results: ['Zero scale buildup', 'Chemical-free cleaning', 'Easy maintenance'],
    application_type: ['Marine Systems'],
    products_used: ['HM Range']
  },
  {
    category: 'marine',
    title: 'Car Carrier - Main Cooling System',
    slug: 'car-carrier-main-cooling-system',
    description: 'The particle filter at the bottom of the unit was found clean of barnacles and was easily washed.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/d29c16948_image.png',
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

// Helper function to format HydroFLOW text
const formatHydroFLOW = (text) => {
  if (!text) return text;
  const parts = text.split('HydroFLOW');
  return parts.map((part, index) => (
    <React.Fragment key={index}>
      {part}
      {index < parts.length - 1 && <><i>Hydro</i>FLOW</>}
    </React.Fragment>
  ));
};

export default function CaseStudies() {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(categoryFromUrl);
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
                          {study.products_used[0] === 'iRange' ? <><i>i</i>Range</> : study.products_used[0]}
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
                      {formatHydroFLOW(study.description)}
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
              Join thousands of satisfied customers who have improved their water systems with <i>Hydro</i>FLOW technology.
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