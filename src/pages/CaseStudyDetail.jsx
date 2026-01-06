import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, CheckCircle, Factory, Building2, Home, Leaf, Ship } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const getCategoryIcon = (category) => {
  const icons = {
    industrial: Factory,
    commercial: Building2,
    residential: Home,
    agriculture: Leaf,
    marine: Ship
  };
  return icons[category] || Factory;
};

// Complete case study data with all details
const caseStudyData = {
  'massive-texas-factory': {
    category: 'industrial',
    title: 'Massive Texas Factory',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2025/07/massive-texas-factory.webp',
    installer: 'EcoTech Solutions',
    customer: 'A 5.2 million square foot equipment manufacturer in Texas with over 7,000 employees.',
    application: 'Contribute to water savings to spare the facility\'s well and free up capacity in the onsite wastewater treatment plant, which is over capacity 8 months out of the year (causing fines).',
    installedUnits: 'A HydroFLOW i-14″ Custom unit on the chiller return line and a HydroFLOW i100 on the sheet metal washer\'s recirculating line.',
    results: [
      'After 6 months, the chiller tubes showed no sign of scale or biofilm accumulation while operating at 4,500 μS/cm, with 75% chemical reduction. Approach temperatures were maintained within 1 degree.',
      'HydroFLOW removed significant amounts scale from the tower fill material throughout the evaluation period.',
      'The sheet metal washer showed significantly less scaling, increasing the time between manual cleanouts.',
      'By reducing scaling in the sheet metal washer, heat transfer was improved leading to an ROI of less than 1 year.',
      'Due to the water savings that can be achieved with HydroFLOW, the customer may be able to delay a multi-million-dollar wastewater treatment plant upgrade for another 3-5 years.',
      'The customer plans to install more HydroFLOW units throughout the facility, including 7 additional cooling tower systems'
    ],
    pdfUrl: 'https://hydroflow-usa.com/wp-content/uploads/2025/08/HydroFLOW-Case-Study-Massive-Texas-Factory-2025-update.pdf'
  },
  'sludge-line-struvite-treatment': {
    category: 'industrial',
    title: 'Sludge Line Struvite Treatment',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2024/04/sludge-line-i150.jpg',
    customer: 'A wastewater treatment plant in Chicago Illinois.',
    application: 'Struvite scale treatment.',
    installedUnits: 'HydroFLOW i150 unit.',
    background: 'Struvite accumulation in the plant\'s digested sludge line causes reduced flow rates, leading to shut down and chemical cleaning of the 2-mile underground line to restore necessary flow rates.',
    results: [
      'After 3 months of operation, HydroFLOW was able to reduce scaling and maintain consistent flow rates.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/wp-content/uploads/2024/04/HydroFLOW-Case-Study-Sludge-Line-Struvite-Treatment-2023.pdf'
  },
  'gold-leed-campus': {
    category: 'commercial',
    title: 'Gold LEED Registered Campus',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/49841495480863.jpg',
    installer: 'HydroFLOW Southwest – New Water Innovations.',
    customer: 'The Academy for the Love of Learning.',
    application: 'Water heaters and water features.',
    installedUnits: 'Commercial HydroFLOW Unit.',
    background: 'Water is exceptionally hard. A salt softener, given its negative environmental impact, was out of the question. To deal with the scale issues associated with hard water, New Water Innovations recommended HydroFLOW, a physical water treatment product.',
    successFactors: [
      'Keeping the water heaters scale free and performing at full efficiency.',
      'Water feature in the main entry area less maintenance and help with dealing with bio that can be found in open loop water features.'
    ],
    results: [
      'The HydroFLOW product has performed superbly well in keeping our water heaters scale free and performing at full efficiency.',
      'The water feature in our main entry area is much easier to maintain because of the performance of HydroFLOW.',
      'Not only does it deal with lime-scale accumulation, it also kills any bacteria that are often found in open loop water features.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/49731493848513.pdf'
  },
  'bakery-steam-boilers': {
    category: 'commercial',
    title: 'Bakery Steam Boilers',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/44051495481164-510x510.jpg',
    customer: 'A commercial bakery facility.',
    application: 'Steam boiler scale and corrosion prevention.',
    installedUnits: 'Commercial HydroFLOW Unit.',
    results: [
      'HydroFLOW significantly reduced limescale and corrosion accumulation in our steam boilers.',
      'Extended equipment lifespan and improved efficiency.',
      'Reduced maintenance costs and downtime.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/bakery-steam-boilers.pdf'
  },
  'water-bath-cooling-system-plastics': {
    category: 'industrial',
    title: 'Water Bath Cooling System - Plastics Processing',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2024/08/pearl-grey-background-800x800.jpg',
    customer: 'Polystyrene plastics processing facility in the U.S. Northeast',
    installer: '<i>Hydro</i>FLOW USA',
    application: 'Recirculating process water cooling system for polystyrene manufacturing with high TDS, bacteria, and algae challenges. System treated with sodium hypochlorite and sodium hydroxide with frequent water blow-downs.',
    installedUnits: '<i>Hydro</i>FLOW i150 unit installed on 6-inch fiberglass line in full-flow portion of cooling water loop, downstream of filters and upstream of water baths.',
    background: 'High levels of TDS, bacteria, and algae in the facility\'s recirculating process water caused biofouling challenges in their baths. The system was treated with sodium hypochlorite and sodium hydroxide, while fresh make-up water was used to reduce TDS levels. Customer rented a <i>Hydro</i>FLOW unit for 90 days to evaluate its effectiveness.',
    successFactors: [
      'Successful 90-day trial period leading to purchase',
      'Real-time monitoring with HydroKNCT IoT device planned',
      'Expansion to other facilities worldwide under consideration',
      'Optimal chemical and water savings achieved'
    ],
    results: [
      '75% reduction in chlorine usage with free chlorine levels dropping below 0.10ppm',
      'Complete elimination of algae growth despite reduced chlorine levels',
      'Conductivity increased from 2,000 to 3,000 µS/cm without scale formation',
      'Significantly reduced blow-down frequency and make-up water usage',
      'Improved filtration efficiency with increased solids collection',
      'Capture of polystyrene fines not typically found in filter system'
    ],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/4dfb56b8e_HydroFLOWCaseStudy-WaterBathCoolingSystem-2025.pdf'
  },
  'sunrise-childrens-hospital-cooling-tower': {
    category: 'commercial',
    title: 'Sunrise Children\'s Hospital Cooling Tower',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/31341495483508.jpg',
    installer: 'HydroFLOW West',
    customer: 'Sunrise Children\'s Hospital – Las Vegas NV',
    application: 'Cooling Tower',
    installedUnits: 'HydroFLOW Industrial Unit',
    background: 'Hospital cooling tower evaluation to reduce limescale and chemical usage.',
    successFactors: ['Reduce limescale and chemical used'],
    results: [
      'After five months of the cooling tower being chemical-free, there is no hard scale accumulation and the Heterotrophic biological count is well under 1,000 CFU/ML.',
      'The chiller is operating more efficiently due to scale and biofilm removal.',
      'The HydroFLOW water conditioning device helped in substantial cost savings associated with reduced chemical consumption, maintenance, electricity and water usage.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/43851493848202.pdf'
  },
  'nellis-air-force-base-cooling-tower': {
    category: 'commercial',
    title: 'Nellis Air Force Base Cooling Tower',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/36551561660043.jpg',
    installer: 'HydroFLOW West',
    customer: 'Nellis Air Force Base',
    application: 'Cooling Tower',
    installedUnits: 'HydroFLOW i160 unit',
    background: 'A six-month product evaluation of the Hydropath technology was conducted on one of the base\'s cooling towers.',
    successFactors: ['Eliminate chemical usage', 'Prevent scale buildup'],
    results: [
      'Instead of the hard scale that typically accumulates inside the cooling tower, loose brown mud-like material was found, and a garden hose was used to easily remove the mud-like substance from the fill material and the drift eliminators.',
      'No significant hard scale or bio buildup was observed on the nozzles or infrastructure.',
      'No industrial water treatment chemicals used for 9-10 months of operation.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/36111563298950.pdf'
  },
  'city-of-walla-walla-wastewater-plant': {
    category: 'industrial',
    title: 'City of Walla Walla Wastewater Plant',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/60391596733327.jpg',
    installer: 'HydroFLOW West',
    customer: 'City of Walla Walla, WA',
    application: 'Struvite accumulation in belt press',
    installedUnits: 'HydroFLOW p12" custom water conditioner',
    background: 'The belt presses at the City of Walla Walla Wastewater Treatment Plant suffer from severe Struvite scale accumulation which greatly impedes the equipment\'s productivity and effectiveness.',
    successFactors: ['Prevent new Struvite scale accumulation', 'Gradually remove existing Struvite deposits'],
    results: [
      'The HydroFLOW device prevented Struvite scale accumulation.',
      'Gradually removed existing Struvite scale deposits.',
      'After 5 weeks of installation, no accumulation on 12" x 12" section.',
      'Struvite removal is slow yet noticeable.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/84711596732922.pdf'
  },
  'honda-cooling-tower': {
    category: 'industrial',
    title: 'Honda Cooling Tower',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/81111495579148.jpg',
    installer: 'Satoshi Sakanishi, Nippon Selpo Co. Ltd., Japan',
    customer: 'A major car manufacturer, Japan',
    application: 'Cooling Tower 300HP',
    installedUnits: 'One unit, AquaKlear Custom Model P',
    background: 'Because of the high cost of chemical treatment, the customer wanted to consider other treatment methods. The aim of the test was to study treatment of the cooling tower with Aquaklear.',
    successFactors: ['Elimination of Algae', 'Prevention of Scale', 'Removal of Existing scale'],
    results: [
      'Almost all the algae on the fins were removed by AquaKlear\'s performance.',
      'There was not any scale or slime in heat exchanger after the installation.',
      'The old scale on the cooling tower fins was removed. Some scale looking like a powder was precipitated in the bottom of the basin.',
      'Customer concluded that AquaKlear is a better treatment method than chemicals, with no chemical pollution.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/85191493939481.pdf'
  },
  'hydroflow-reduces-algae-growth': {
    category: 'agriculture',
    title: 'HydroFLOW Reduces Algae Growth',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/19501495124745.jpg',
    installer: 'HydroFLOW West',
    customer: 'Vineyard in California',
    application: 'Irrigation ponds',
    installedUnits: 'HydroFLOW industrial unit',
    background: 'California vineyard that suffers from severe algae growth in its irrigation ponds, which causes maintenance problems in the filtration stations.',
    successFactors: ['Reduce algae growth without the use of Copper Sulfate or Tilapia fish'],
    results: [
      'Compared to the Copper Sulfate and Tilapia fish algae treatment methods, the bacteria and algae CFU counts in the HydroFLOW treated pond were over 90% lower.',
      'After the installation of HydroFLOW, the backwash process took 3-5 minutes.',
      'Reduced maintenance costs resulted in an estimated 1.5 year return on investment.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/81121493936806.pdf'
  },
  'food-processing-cooling-tower': {
    category: 'agriculture',
    title: 'Food Processing Cooling Tower',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/3541495124373.jpg',
    installer: 'HydroFLOW West',
    customer: 'G & G Orchards, Washington',
    application: 'BAC Condenser and EVAPCO Condenser which feeding into a common sump tank',
    installedUnits: 'HydroFLOW p100 and HydroFLOW p120',
    background: 'Food processing facility needed to reduce limescale accumulation, biological growth and corrosion while eliminating the need for descalant, biocide and anti-corrosive chemicals.',
    successFactors: ['Reduce limescale accumulation, biological growth and corrosion', 'Eliminate chemical usage'],
    results: [
      'Blow-down was reduced to less than once a month.',
      'Pipes, tubes, fins and sump tank remain clear of limescale, bio-growth and corrosion.',
      'Cost savings associated with reduction in chemicals, reduction in water usage, reduction in maintenance and lessened wear-and-tear led to an ROI of roughly a year.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/67671539882904.pdf'
  },
  'massive-texas-factory': {
    category: 'industrial',
    title: 'Massive Texas Factory',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2025/07/massive-texas-factory.webp',
    installer: 'EcoTech Solutions',
    customer: 'A 5.2 million square foot equipment manufacturer in Texas with over 7,000 employees',
    application: 'Contribute to water savings to spare the facility\'s well and free up capacity in the onsite wastewater treatment plant',
    installedUnits: 'A HydroFLOW i-14″ Custom unit on the chiller return line and a HydroFLOW i100 on the sheet metal washer\'s recirculating line',
    background: 'The facility needed to reduce water consumption to spare their well and free up capacity in the onsite wastewater treatment plant, which is over capacity 8 months out of the year causing fines.',
    successFactors: ['Reduce water consumption', 'Free up wastewater treatment capacity', 'Reduce chemical usage', 'Improve equipment efficiency'],
    results: [
      'After 6 months, the chiller tubes showed no sign of scale or biofilm accumulation while operating at 4,500 μS/cm, with 75% chemical reduction. Approach temperatures were maintained within 1 degree.',
      'HydroFLOW removed significant amounts scale from the tower fill material throughout the evaluation period.',
      'The sheet metal washer showed significantly less scaling, increasing the time between manual cleanouts.',
      'By reducing scaling in the sheet metal washer, heat transfer was improved leading to an ROI of less than 1 year.',
      'Due to the water savings that can be achieved with HydroFLOW, the customer may be able to delay a multi-million-dollar wastewater treatment plant upgrade for another 3-5 years.',
      'The customer plans to install more HydroFLOW units throughout the facility, including 7 additional cooling tower systems.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/wp-content/uploads/2025/08/HydroFLOW-Case-Study-Massive-Texas-Factory-2025-update.pdf'
  },
  'sludge-line-struvite-treatment': {
    category: 'industrial',
    title: 'Sludge Line Struvite Treatment',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2024/04/sludge-line-i150.jpg',
    installer: 'HydroFLOW USA',
    customer: 'A wastewater treatment plant in Chicago Illinois',
    application: 'Struvite scale treatment',
    installedUnits: 'HydroFLOW i150 unit',
    background: 'Struvite accumulation in the plant\'s digested sludge line causes reduced flow rates, leading to shut down and chemical cleaning of the 2-mile underground line to restore necessary flow rates.',
    successFactors: ['Reduce struvite scaling', 'Maintain consistent flow rates', 'Avoid system shutdowns'],
    results: [
      'After 3 months of operation, HydroFLOW was able to reduce scaling and maintain consistent flow rates.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/wp-content/uploads/2024/04/HydroFLOW-Case-Study-Sludge-Line-Struvite-Treatment-2023.pdf'
  },
  'gold-leed-campus': {
    category: 'commercial',
    title: 'Gold LEED Registered Campus',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/49841495480863.jpg',
    installer: 'HydroFLOW Southwest – New Water Innovations',
    customer: 'The Academy for the Love of Learning',
    application: 'Water heaters and water features',
    installedUnits: 'Commercial HydroFLOW Unit',
    background: 'Water is exceptionally hard. A salt softener, given its negative environmental impact, was out of the question. To deal with the scale issues associated with hard water, New Water Innovations recommended HydroFLOW, a physical water treatment product.',
    successFactors: [
      'Keeping the water heaters scale free and performing at full efficiency',
      'Water feature in the main entry area less maintenance and help with dealing with bio that can be found in open loop water features'
    ],
    results: [
      'The HydroFLOW product has performed superbly well in keeping our water heaters scale free and performing at full efficiency.',
      'The water feature in our main entry area is much easier to maintain because of the performance of HydroFLOW.',
      'Not only does it deal with lime-scale accumulation, it also kills any bacteria that are often found in open loop water features.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/49731493848513.pdf'
  },
  'bakery-steam-boilers': {
    category: 'commercial',
    title: 'Bakery Steam Boilers',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/44051495481164.jpg',
    installer: 'HydroFLOW USA',
    customer: 'Bimbo Bakeries USA (BBU)',
    application: 'Steam Boilers',
    installedUnits: 'Commercial HydroFLOW Unit',
    background: 'BBU looked for a technology that will help them reduce limescale and corrosion accumulation in their steam boilers.',
    successFactors: ['Reduce limescale and corrosion accumulation in steam boilers', 'Reduce chemical usage', 'Increase heat transfer efficiency'],
    results: [
      'HydroFLOW water conditioners have proven to significantly reduce limescale and corrosion accumulation in our steam boilers.',
      'Significant cost savings associated with reduced chemical usage.',
      'Increased heat transfer efficiency.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/39511493849268.pdf'
  },
  'municipal-golf-course-in-texas': {
    category: 'agriculture',
    title: 'Municipal Golf Course in Texas',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/24091655247748.jpg',
    installer: 'HydroFLOW USA',
    customer: 'Municipal golf course in Texas',
    application: 'Golf course irrigation system',
    installedUnits: 'HydroFLOW i60',
    background: 'The golf course grass had signs of being heavily damaged from take-all root rot (TARR) which is caused by fungus, and they were looking for a solution to help them increase the health of the grass.',
    successFactors: ['Increase overall health of grass', 'Reduce fungal damage', 'Improve nutrient retention'],
    results: [
      'The isolated practice green was lush and green in color.',
      'It was the only green on the course that no longer suffered from root rot.',
      'Lab testing showed the practice green retained 50% more nutrients compared to other greens.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/68631698880628.pdf'
  },
  'steel-company-spray-bar-system': {
    category: 'industrial',
    title: 'Steel Company Spray Bar System',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/24681639432386.jpg',
    installer: 'HydroFLOW Canada',
    customer: 'Steel manufacturing and processing facility located in Ontario, Canada',
    application: 'Spray Bar System – Galvanizing Line – Cooling Spray Bars',
    installedUnits: 'HydroFLOW i100" – on the output of the pump',
    background: 'Due to the high concentration of TDS and contaminants in the galvanizing line cleaning spray system the spray nozzles would scale up and clog requiring manual take down and cleaning. This clogging would typically happen in 3 weeks.',
    successFactors: ['Prevent nozzle clogging', 'Reduce maintenance frequency', 'Eliminate hard scale buildup'],
    results: [
      'After the end of the first 3 week cycle sprays were inspected and found to have "nearly no buildup to cause clogging".',
      'Any buildup found to occur was a loose, fluffier material instead of a concrete like buildup.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/39071639432386.pdf'
  },
  'biofilm-reduction-referral-letter': {
    category: 'industrial',
    title: 'Biofilm Reduction - Referral Letter',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/88401638211312.jpg',
    customer: 'Avantor – Poland',
    application: 'Biofilm Reduction',
    installedUnits: 'HydroFLOW i60 water conditioner',
    background: 'Avantor, an American Fortune 500 company, was experiencing significant problems with microbiological contaminants that were posing challenges in maintaining the appropriate cleanliness of their production line.',
    successFactors: ['Reduce microbiological contaminants', 'Maintain production line cleanliness', 'Fortune 500 standards compliance'],
    results: [
      'The factory was able to achieve a significant reduction of microbiological contaminants.',
      'Successfully maintained appropriate cleanliness of the production line.',
      'Met high standards required by a Fortune 500 company.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/61401638211314.pdf'
  },
  'lehigh-county-wwtp-struvite-treatment': {
    category: 'industrial',
    title: 'Lehigh County WWTP - Struvite Treatment',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/36831596736223.jpg',
    customer: 'Lehigh County Wastewater Treatment Plant',
    application: 'Struvite scale treatment in wastewater treatment plant',
    installedUnits: 'HydroFLOW industrial unit',
    background: 'The wastewater treatment plant was experiencing struvite accumulation that required frequent cleaning and caused operational challenges.',
    successFactors: ['Stop struvite accumulation', 'Soften existing deposits', 'Reduce cleaning frequency'],
    results: [
      'Within 8 days, the struvite stopped accumulating.',
      'Existing struvite deposits were softening up.',
      'Easier cleaning and reduced maintenance requirements.'
    ]
  },
  'paper-mill-liquor-lines': {
    category: 'industrial',
    title: 'Paper Mill Liquor Lines',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/47651495582939.jpg',
    customer: 'Paper Mill in Virginia',
    application: 'Green liquor piping, white liquor piping, evaporator piping, heat exchangers',
    installedUnits: 'Fifteen HydroFLOW water conditioners in various locations of high mineral concentrations',
    background: 'One of the byproducts of papermaking is the generation of high concentrations of calcium carbonate, sodium carbonate and sodium sulfate in the process water. Due to the high concentrations of these minerals, scale deposits coat the inside of pipes, pumps and heat exchangers, restricting flow and heat transfer efficiency. Typically, pipes and equipment need to be disassembled and cleaned (by hydro-blasting) approximately every 6 months.',
    successFactors: ['Reduce scale buildup', 'Improve heat transfer efficiency', 'Extend maintenance intervals'],
    results: [
      'The water conditioners kept the pump impeller housings clear of scale build up, improving flow rate and extending pump life.',
      'The water conditioners have a positive effect on heat exchanger performance by breaking-up the scale deposits on the internal tubes thus increasing heat transfer efficiency.',
      'The water conditioners kept piping clear of most scale deposits and made existing deposits easy to remove.',
      'The return on investment, due to decreased maintenance labor and power usage is approximately one year.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/46101493933705.pdf'
  },
  'cmc-concrete-report': {
    category: 'industrial',
    title: 'CMC Concrete Report',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/14321495583049.jpg',
    installer: 'HydroFLOW USA & CMC – Construction Materials Testing and Inspections',
    customer: 'Concrete production facility in Henderson, NV',
    application: 'Testing the effect of HydroFLOW treated water on both the plastic and hardened states of structural Concrete',
    installedUnits: 'HydroFLOW water conditioner',
    background: 'To test the effect of HydroFLOW treated water on both the plastic and hardened states of structural Concrete. All aggregates were sampled at the Las Vegas Sloan Quarry and complied with ASTM C33. The aggregates were allowed to dry 100% prior to any batching.',
    successFactors: ['Improve workability', 'Increase compressive strength', 'Reduce material costs'],
    results: [
      'Documented an increase in slump when using the water that was treated with the HydroFLOW device.',
      'With the increase in slump this system could create cost savings by reducing materials properties and maintaining workability.',
      'Documented an increase in compressive strength which would result in cost savings during the concrete production.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/4171495131909.pdf'
  },
  'increased-crop-yield-experiment': {
    category: 'agriculture',
    title: 'Increased Crop Yield Experiment',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/87301495667998.jpg',
    installer: 'Dr. Stuart O\'Byrne',
    customer: 'Agricultural research - Corn field',
    application: 'Stimulated Water Circle Irrigation System',
    installedUnits: 'HydroFLOW i160',
    background: 'The crop circle was divided into four plots: Control with plain lake water, HydroFLOW stimulated lake water, HydroFLOW and Magnetically stimulated lake water, and Magnetically stimulated lake water. All four plots were matched with equal water and fertilizer application.',
    successFactors: ['Compare crop yield with and without HydroFLOW treatment', 'Scientific evaluation of water treatment effectiveness'],
    results: [
      'Both plots with HydroFLOW obtained better yield than the control plot.',
      'HydroFLOW plots had better color and roots.',
      'Scientific validation of HydroFLOW\'s positive impact on crop growth.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/74431493851538.pdf'
  },
  '60-hp-low-pressure-steam-boiler': {
    category: 'industrial',
    title: '60 HP Low Pressure Steam Boiler',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/13321495580758.jpg',
    installer: 'HydroFLOW Midwest',
    customer: 'Commercial trucking company from Rosemount, Minnesota',
    application: '60 horsepower low-pressure natural gas steam boiler (steam is used during the truck wash process)',
    installedUnits: 'One HydroFLOW i45 on the water line feeds the steam boiler',
    background: 'Due to excessive scale accumulation, even with softening and chemical usage, the head of maintenance decided to evaluate HydroFLOW\'s ability to descale the steam boiler and prevent further scale formation. Well water with calcium carbonate hardness of over 200 PPM was being treated with a water softener reducing hardness to roughly 30 PPM.',
    successFactors: ['Gradually remove scale deposits without acid clean', 'Improve heat transfer efficiency'],
    results: [
      'Stack temperature dropped from 296°F to 272°F in 6 months, demonstrating an 8% increase in heat transfer efficiency.',
      'The efficiency is expected to further increase as scale continues to be removed from the system.',
      'Maintenance supervisor increased blow down from once to twice per day to accelerate scale removal and prevent plugging issues.',
      'Scale removal achieved without the need for an acid clean.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/88201550515726.pdf'
  }
};

export default function CaseStudyDetail() {
  const [searchParams] = useSearchParams();
  const slug = searchParams.get('slug');
  const study = caseStudyData[slug];

  if (!study) {
    return (
      <div className="min-h-screen pt-32 pb-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Case Study Not Found</h1>
          <Link to={createPageUrl('CaseStudies')}>
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const CategoryIcon = getCategoryIcon(study.category);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to={createPageUrl('CaseStudies') + '?category=' + study.category} 
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {study.category.charAt(0).toUpperCase() + study.category.slice(1)} Case Studies
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <CategoryIcon className="w-6 h-6 text-cyan-400" />
              <Badge className="bg-cyan-600 text-white hover:bg-cyan-600 capitalize">
                {study.category}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {study.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Featured Image */}
            {study.image && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-[400px] object-cover"
                  />
                </Card>
              </motion.div>
            )}

            {/* PDF Download */}
            {study.pdfUrl && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="p-6 bg-gradient-to-br from-cyan-50 to-white border-cyan-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Full Case Study Report</h3>
                        <p className="text-sm text-slate-600">Download the complete PDF for detailed information</p>
                      </div>
                    </div>
                    <a href={study.pdfUrl} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                        View PDF
                      </Button>
                    </a>
                  </div>
                </Card>
              </motion.div>
            )}

            {/* Details Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {study.installer && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Card className="p-6">
                    <h3 className="font-semibold text-slate-900 mb-2">Installer</h3>
                    <p className="text-slate-600">{study.installer}</p>
                  </Card>
                </motion.div>
              )}

              {study.customer && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Card className="p-6">
                    <h3 className="font-semibold text-slate-900 mb-2">Customer</h3>
                    <p className="text-slate-600">{study.customer}</p>
                  </Card>
                </motion.div>
              )}

              {study.application && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Card className="p-6">
                    <h3 className="font-semibold text-slate-900 mb-2">Application</h3>
                    <p className="text-slate-600">{study.application}</p>
                  </Card>
                </motion.div>
              )}

              {study.installedUnits && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Card className="p-6">
                    <h3 className="font-semibold text-slate-900 mb-2">Installed Units</h3>
                    <p className="text-slate-600">{study.installedUnits}</p>
                  </Card>
                </motion.div>
              )}
            </div>

            {/* Background */}
            {study.background && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Background</h3>
                  <p className="text-slate-600 leading-relaxed">{study.background}</p>
                </Card>
              </motion.div>
            )}

            {/* Success Factors */}
            {study.successFactors && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Success Factors</h3>
                  <ul className="space-y-2">
                    {study.successFactors.map((factor, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600">
                        <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                        {factor}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            )}

            {/* Results */}
            {study.results && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Card className="p-6 bg-gradient-to-br from-green-50 to-white border-green-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Results</h3>
                  <ul className="space-y-3">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            )}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Ready to Experience Similar Results?
              </h3>
              <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                Contact us to learn how HydroFLOW can solve your water treatment challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={createPageUrl('Products')}>
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                    Shop Products
                  </Button>
                </Link>
                <Link to={createPageUrl('Contact')}>
                  <Button variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}