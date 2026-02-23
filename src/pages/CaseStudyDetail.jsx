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
  'screw-press-struvite-treatment': {
    category: 'industrial',
    title: 'Screw Press Struvite Treatment',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2026/02/Screw-Press-case-Study_struvite-1.webp',
    customer: 'A wastewater treatment plant in the State of Utah, United States.',
    application: 'Struvite scale treatment',
    installedUnits: 'HydroFLOW Custom i8″',
    background: 'Struvite accumulation in the plant\'s two screw presses is a constant and costly maintenance issue.',
    results: [
      'After 30 days, the press did not require cleaning, and only had a little mud-like Struvite accumulation',
      'After 60 days, the press was pressure washed, taking less than 4 hours to complete instead of the typical 30 hours with chemicals'
    ],
    pdfUrl: 'https://hydroflow-usa.com/wp-content/uploads/2026/02/HydroFLOW-Case-Study-Screw-Press-Struvite-Treatment-2023.pdf'
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
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/64e72788b_WaterBathCoolingSystem.jpg',
    customer: 'Polystyrene plastics processing facility in the U.S. Northeast',
    installer: 'HydroFLOW USA',
    application: 'Recirculating process water cooling system for polystyrene manufacturing with high TDS, bacteria, and algae challenges. System treated with sodium hypochlorite and sodium hydroxide with frequent water blow-downs.',
    installedUnits: 'HydroFLOW i150 unit installed on 6-inch fiberglass line in full-flow portion of cooling water loop, downstream of filters and upstream of water baths.',
    background: 'High levels of TDS, bacteria, and algae in the facility\'s recirculating process water caused biofouling challenges in their baths. The system was treated with sodium hypochlorite and sodium hydroxide, while fresh make-up water was used to reduce TDS levels. Customer rented a HydroFLOW unit for 90 days to evaluate its effectiveness.',
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
  'inland-power-plant-in-china': {
    category: 'industrial',
    title: 'Inland Power Plant in China',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/6861498261526.jpg',
    installer: 'HydroFLOW Asia',
    customer: 'Inland power plant in China',
    application: 'Circulating Cooling System in Power Plant',
    installedUnits: 'Two HydroFLOW custom 72" units',
    background: 'An Inland power plant in China using river water for the cooling system which has two of 600MW each. Chemicals dosage included anti-scaling and biocide. Refill water volume ran at 700T/hr. Water quality varied from season to season. During summer raining reason, water turbidity was high.',
    successFactors: ['Reduce chemical usage', 'Improve steam condensation efficiency'],
    results: [
      'Chemical dosage was eliminated for the operation.',
      'No hard scale was found inside the condenser and cooling tower cooling mate.',
      'Steam condenser transit temperature dropped by 1.5⁰C and vacuum pressure increased by 1KPa compared with the same period in previous year.',
      'Discharge water from the cooling tower was used now for gardening and other application because there were no chemicals in the discharged water.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/83871498261386.pdf'
  },
  'power-station-steam-condenser': {
    category: 'industrial',
    title: 'Power Station Steam Condenser',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/71371495581347.jpg',
    installer: 'HydroFLOW Russia',
    customer: 'Heat power station. The station produces electricity and heat energy, which is used for central heating',
    application: 'Steam condenser and heat exchangers',
    installedUnits: 'Two HydroFLOW industrial custom P-40" units',
    background: 'Equipment from biofouling, silt and mud deposits (source of the water is river), inorganic deposits (scale) forming on the internal steam condenser pipes surfaces.',
    successFactors: ['Reduce the buildup of deposits, scale, silt and biofilm in heat exchangers and steam condenser'],
    results: [
      'Characteristics of deposits – soft, can be washed out with the water.',
      'On most of the tubes there can be seen a characteristic metal glitter (brass), which indicates cleanness of the surface.',
      'Properties of deposits in the outlet chamber are similar to that of the inlet chamber, and the brass glitter can also be seen here.',
      'A characteristic smell of organic decomposition is absent.',
      'Visible reduction of biofouling and absence of tubes with 100% clogging in comparison with condenser without treatment.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/39691493939531.pdf'
  },
  'natural-gas-and-oil-producer': {
    category: 'industrial',
    title: 'Natural Gas and Oil Producer',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/77171495579956.jpg',
    installer: 'HydroFLOW West Inc',
    customer: 'Natural gas and oil producer in Nikiski, Alaska, USA',
    application: 'Offshore petroleum production operation. The device was installed on a 4.5" outer diameter recycled water pipe, after the separator',
    installedUnits: 'HydroFLOW i120',
    background: 'The customer needed to reduce scale accumulation inside the pipe and possibly soften existing scale deposits. The scale is predominantly made up of iron, in addition, lab analysis of the scale detected small quantities of magnesium, calcium carbonate and silicon.',
    successFactors: ['Reduce scale accumulation inside the pipe', 'Soften existing scale deposits'],
    results: [
      'One week after installation – The scale was much softer and easily removed with a knife.',
      'One month after installation – Apart from what seems like a thin magnetite layer, the hard scale is not accumulating on the area that was cleaned after the first inspection.',
      'The existing scale can be flaked off with a finger and is roughly 1/8" to 1/4" thick.',
      'The customer\'s personnel were very surprised because typically removal of scale involves hard manual labor.',
      'A "T" section was removed from the main line in order to inspect the inside of the pipe. The rate of scale removal from the bottom was much faster than the top and sides due to constant water flow.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/1431539882593.pdf'
  },
  'wastewater-treatment-plant-in-ohio': {
    category: 'industrial',
    title: 'Wastewater Treatment Plant in Ohio',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/29401648597339.jpg',
    installer: 'HydroFLOW USA and Kirk Williams Company',
    customer: 'London OH, WWTP',
    application: 'Dewatering Equipment – Belt Press',
    installedUnits: 'HydroFLOW i160 unit',
    background: 'Struvite scale in an anaerobic wastewater treatment plant can lead to great inefficiency within the plant or operation due to clogging of the pipes, pumps and equipment. Solutions include mechanical and chemical cleaning, which require significant downtime. A chemical-free method of removing and preventing struvite has been developed and tested successfully.',
    successFactors: ['Struvite removal without Chemical/Manual/Mechanical assistance'],
    results: [
      'The HydroFLOW device not only reduced the rate of struvite accumulation, it actually started to soften up existing deposits!',
      'Within a week started seeing large pieces coming off the first roller and the wash box.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/78971648597202.pdf'
  },
  'hydroflow-cooling-tower-chiller-installation': {
    category: 'commercial',
    title: 'HydroFLOW Cooling Tower Chiller Installation',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/5b01fd83c_custom24condencer.png',
    installer: 'HydroFLOW West Inc',
    customer: 'Medical Center in California',
    application: 'Cooling Towers and Chillers',
    installedUnits: 'HydroFLOW Custom i24" and Multiple HydroFLOW Custom i14"',
    background: 'Medical center needed to reduce chemicals and water usage while maintaining industry standards for cooling tower and chiller operation.',
    successFactors: ['Maintain industry standards', 'Reduce chemical usage', 'Reduce water consumption', 'Prevent Legionnaires disease'],
    results: [
      'The cooling tower and chillers were maintained within industry standards while reducing chemicals and blowdown water.',
      'Due to its ability to remove biofilm colonies, HydroFLOW greatly reduced the chance of a legionnaires disease outbreak.',
      'Blow down was reduced by over 65%.',
      'Biocide chemicals were reduced by 75% while keeping CFU counts under 1,000 (close to drinking water).',
      'Medical Center\'s head of maintenance at the 7 month chiller tube inspection: "This is the cleanest the chiller tubes had ever been."'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/43801662059912.pdf'
  },
  'gold-gym-lap-pool': {
    category: 'commercial',
    title: 'Gold Gym Lap Pool',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/55611495484457.jpg',
    installer: 'HydroFLOW West',
    customer: 'Gold\'s Gym Woodinville / Gold\'s Aquatics Club',
    application: 'Indoor 95,000 gallon lap pool, 3,900-gallon hot tub and 5,000 gallon wader pool',
    installedUnits: 'One HydroFLOW i120 device and two HydroFLOW hs40 devices',
    background: 'The product evaluation was performed on the indoor 95,000 gallon lap pool, 3,900 gallon hot tub and 5,000 gallon wader pool. The disinfecting agent for the three bodies of water is liquid chlorine which is injected via an automatic ORP dosing system.',
    successFactors: [
      'Reduce chemical usage while keeping the set points at the required levels',
      'Reduce filter backwashing and increase water clarity',
      'Reduce water consumption',
      'Reduce \'chlorine smell\'',
      'Reduce scale staining'
    ],
    results: [
      'Water consumption was achieved due to a 70% filter backwash reduction.',
      'Increased filter efficiency due to HydroFLOW\'s ability to flocculate suspended solids.',
      'Existing staining is easier to clean.',
      'Less complaints by bathers about the \'chlorine smell\'.',
      'Maintenance cost reduction associated with lessened cleaning of scale stains, backwashing, balancing chemicals, barrel replacement, etc.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/84741493847709.pdf'
  },
  'st-helena-hospital-ice-machine': {
    category: 'commercial',
    title: 'St. Helena Hospital Ice Machine',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/24231495485285.jpg',
    installer: 'HydroFLOW West',
    customer: 'St. Helena Hospital in St. Helena, California',
    application: 'Ice machines',
    installedUnits: 'HydroFLOW s38',
    background: 'The water at the facility has very high silica content, estimated around 80 ppm, causing several problems: frequently replace parts due to difficulty of removal of the silica build‐up on the components, costing up to $1500 per year; at many locations, a reverse osmosis filtration system was in place, which created bottlenecks in the water supply; the ice machines were not able to keep up with demand from nursing; the refrigeration engineer responsible for the maintenance was spending up to 180 hours per year cleaning 22 ice machines.',
    successFactors: ['Reduce maintenance labor', 'Reduce replacement parts costs', 'Eliminate demand issues'],
    results: [
      'The labor associated with ice machine maintenance has decreased to 100 hours per year.',
      'The costs of replacement parts have decreased by $750 per year.',
      'Calls to the engineering department due to ice machine inability to meet demand have completely stopped, thus reducing callouts from 6 hours per month to 0 hours per month.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/78241493850010.pdf'
  },
  'penn-state-university': {
    category: 'commercial',
    title: 'Penn State University',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/80541495485766.jpg',
    installer: 'HydroFLOW PA – Joseph T Berrena Mechanicals',
    customer: 'Penn State – The Nittany Lion Inn',
    application: 'Steamer and cooling Towers',
    installedUnits: 'HydroFLOW Commercial units',
    background: 'Extremely hard water, the customer was looking to treat scale build-up in their steam producing kitchen equipment and Ware washing machines. The customer also looked for a better solution for scale build-up in their cooling towers as they did not want non-eco-friendly chemicals that did not give the result they were looking for.',
    successFactors: ['Eliminate scale build-up', 'Replace chemical treatment', 'Reduce maintenance costs'],
    results: [
      'Since installing devices on steamers and cooling tower, scale related breakdowns, repair and maintenance expenses, and chemical treatment costs are a thing of the past.',
      'The HydroFLOW units are maintenance-free, environmentally friendly, and have saved thousands of dollars.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/89611493849814.pdf'
  },
  'the-melting-pot-restaurant': {
    category: 'commercial',
    title: 'The Melting Pot Restaurant',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/46161495486706.jpg',
    installer: 'HydroFLOW West',
    customer: 'The Melting Pot-Sacramento',
    application: 'Restaurant kitchen equipment',
    installedUnits: 'HydroFLOW s38',
    background: 'They were looking to control the cost of eliminating scale, bacteria and algae forming in their water system, while at the same time supporting the environment.',
    successFactors: ['Reduce maintenance costs', 'Save water', 'Eliminate need for water softener'],
    results: [
      'Reducing maintenance and cleaning requirements of our dishwasher, ice machine and coffee machines.',
      'Saved money and reduce water usage.',
      'No water softener required and all water (hot, cold and drinking) benefiting from the one unit.',
      'Investment expected to pay for itself over a 14 month period.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/24351493849401.pdf'
  },
  'sharonville-fire-department': {
    category: 'commercial',
    title: 'Sharonville Fire Department',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/89651495480951.jpg',
    installer: 'Schlueter Plumbing',
    customer: 'City of Sharonville – Fire Department',
    application: 'Drinking fountain and shower valves',
    installedUnits: 'HydroFLOW i100',
    background: 'Plumbing/maintenance issues caused as a result of scale build-up.',
    successFactors: [
      'Increased water flow in the showers',
      'Shower valves – scale-free',
      'Drinking fountain cleaned from scale'
    ],
    results: [
      'Shower valves become easier to turn and the shower heads were cleaned also.',
      'Water flow in the showers was increased dramatically.',
      'The water fountain was cleaned.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/36171495126964.pdf'
  },
  'scale-and-bio-treatment-in-outdoor-pool': {
    category: 'commercial',
    title: 'Scale and Bio Treatment in Outdoor Pool',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/76681495479240.jpg',
    installer: 'HydroFLOW West Inc',
    customer: 'Yakama Nation – Youth Activities',
    application: '375,000 Gallon Municipal Pool',
    installedUnits: 'HydroFLOW p160 on a 6" pipe',
    background: 'The facility needed to maintain a balanced pool with minimal chemical usage. Chemicals used included Dicalite, Chlorine, Shock, Sunscreen stabilizer, and Muriatic acid.',
    successFactors: ['Maintain a balanced pool with minimal chemical usage'],
    results: [
      'At the end of May, when the HydroFLOW device was turned on, we noticed immediate changes; the monitor kept reading high levels of pH and Chlorine.',
      'We had to keep reducing our chemicals in order to get the pH to stabilize between 7.2 and 8.0 and the Chlorine to stay at 1.0 ppm.',
      'Our customers gave us compliments throughout the last 3 months of the bathing season.',
      'The state inspector claims our pool is the cleanest in the Yakima Valley!'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/86361539882313.pdf'
  },
  'premium-car-wash-in-california': {
    category: 'commercial',
    title: 'Premium Car Wash in California',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/78091560356620.jpg',
    installer: 'HydroFLOW West',
    customer: 'An American Car Wash (https://palmdesertcarwash.com/)',
    application: 'Recycled water and spray nozzles',
    installedUnits: 'HydroFLOW i45 was installed on the recycling water system, to reduce the foul smell and scale accumulation',
    background: 'The facility\'s inner plumbing system had been run down and was in need of many major improvements. Water distribution lines were plugging up with hard water scale deposit and the recycling water system was suffering from foul smell, due to biological buildup and lack of proper maintenance.',
    successFactors: ['Eliminate foul smell', 'Clear clogged nozzles', 'Reduce scale accumulation'],
    results: [
      'Within 20 days, the car wash staff noticed the foul smell from the reclaimed water was gone and they were able to reclaim 60% of that water.',
      'Nozzles that barely sprayed water or were plugged were now operating properly.',
      'After 6 months of operation, all nozzles are working perfectly; saving water and greatly reducing maintenance costs.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/1561563299281.pdf'
  },
  'hotel-hot-water-system': {
    category: 'commercial',
    title: 'Hotel Hot Water System',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/72631672858543.jpg',
    customer: 'Hotel in San Antonio, TX',
    application: 'Potable hot water system – limescale reduction',
    installedUnits: 'Two HydroFLOW i100',
    background: 'The hotel was looking to improve its low water pressure and lack of hot water.',
    results: [
      'A few days after the installation, "soft" scale began to purge out of the hot water system.',
      'Previously clogged showerheads and faucet aerators have minimal debris.',
      'Twelve months after installation, the estimated return on investment (ROI) is well under a year.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/14241698879790.pdf'
  },
  'office-building-cooling-towers-in-us-southeast': {
    category: 'commercial',
    title: 'Office Building Cooling Towers in US Southeast',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/42301661965280.jpg',
    installer: 'Southeast Pump & Equipment',
    customer: 'Commercial office building complex',
    application: 'Cooling Towers',
    installedUnits: 'HydroFLOW Custom i14"',
    background: 'Due to high water costs, the facilities manager ran the cooling towers at high cycles of concentration in order to reduce water usage, which resulted in severe scale and bio problems. The main challenge was to reduce bio-counts from 100,000 to under 10,000 CFU.',
    successFactors: ['Reduce bacterial counts from 100,000 to under 10,000 CFU', 'Reduce scale and biofilm accumulation'],
    results: [
      'After a few short days with a HydroFLOW i14" device, the CFU count dropped to under 1,000.',
      'Other added benefits included reduced scale and biofilm accumulation in the cooling tower and chiller tubes.',
      'The i14" device helped the commercial complex achieve a return on investment of roughly six months.',
      'This led to the installation of multiple custom HydroFLOW devices on cooling towers and potable water systems throughout the commercial complex.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/75341661965067.pdf'
  },
  'long-stem-rose-growth': {
    category: 'agriculture',
    title: 'HydroFLOW Product Evaluation - Long Stem Rose Growth',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2024/03/Long-Stem-Rose-picture-for-the-case-study-2.jpg',
    customer: 'A long-stem rose growing operation in South America',
    installedUnits: 'HydroFLOW Custom i12"',
    background: 'During the cold months (June-September) the overall growth of long stem roses slows down. The grower wanted to see how HydroFLOW could increase the output from his greenhouses, and determine if there is an overall improvement in the growth rate/quality of the roses throughout the year.',
    successFactors: ['Increase greenhouse output', 'Improve growth rate during cold months', 'Enhance overall flower quality'],
    results: [
      'Average stem lengths increased to 50cm (19.69") and the ratio of 50cm to 40cm stems was drastically improved. Rare 60cm stems began to emerge in September!',
      'Production levels were maintained through the cold months and the overall quality of flowers improved.',
      'Longer shelf life and better-quality flowers.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/HydroFLOW-agriculture-case-study-long-stem-roses.pdf'
  },
  'residential-water-heater': {
    category: 'residential',
    title: 'Residential Water Heater',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/12/27101632777274.jpg',
    application: 'Residential scale prevention and removal',
    installedUnits: 'HydroFLOW Pearl Plus',
    background: 'Residential property needed to address scale buildup in water heater and throughout the home\'s plumbing system.',
    successFactors: ['Stop new scale formation', 'Remove existing scale buildup', 'Improve water heater efficiency'],
    results: [
      'The s38 unit stopped new scale from forming and cleaned the existing scale build up from the water heater and the shower heads.',
      'The cleaning frequency of the shower heads in faucets around the house was reduced.',
      'Improved the efficiency of the hot water heater and longer expected life of the heating element.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/36311632777095.pdf'
  },
  'coliforms-in-well-water': {
    category: 'residential',
    title: 'Coliforms in Well Water',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/12/28901495146802.jpg',
    installer: 'HydroFLOW West Inc.',
    customer: 'Homeowners in Kenai Alaska.',
    application: 'Residential Well',
    installedUnits: 'HydroFLOW Pearl Plus',
    background: 'This area on the Kenai Peninsula, rural Alaska, has well water contamination due to area flooding. Prior to the installation of a HydroFLOW water conditioner on the incoming well pipe, a water sample was taken at the kitchen faucet. The lab test results stated the water was Yellow and positive for Total Coliform – Unsatisfactory.',
    results: [
      'Six months after the installation of the HydroFLOW s38 unit, the homeowners took a water sample from the kitchen faucet to be tested in a lab.',
      'The lab test results stated the water was clear and negative for Total Coliform – Satisfactory.',
      'Customer comment: "We had the water tested and it came back clear. Yippee!"'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/25211539882204.pdf'
  },
  'plumbing-contractor': {
    category: 'residential',
    title: 'Plumbing Contractor',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/12/31951495476221.jpg',
    application: 'Tankless Heaters and Pools',
    installedUnits: 'HydroFLOW Pearl Plus',
    background: 'They were looking for a solution to protect the tankless water heaters they are installing. They came across the hydropath technology and decided they will try the HydroFLOW s38 unit on a couple of installations. After getting to know the technology more they started to install the HydroFLOW units on pools.',
    results: [
      'The heat exchangers were completely clean from the scale.',
      'Pool – almost totally eliminates the need for pool chemicals.',
      'With Hydropath technology, there is no longer a need for traditional water softeners.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/15281493934433.pdf'
  },
  'product-evaluation-tankless-boiler': {
    category: 'residential',
    title: 'Product Evaluation - Tankless Boiler',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/12/14381495147872.jpg',
    installer: 'HydroFLOW Canada',
    customer: 'Onspex is an independent testing company and was enlisted to provide an independent verification of the effects of a HydroFLOW unit.',
    application: 'Water Heater',
    installedUnits: 'HydroFLOW Residential unit',
    background: 'Test Protocol Induction Water Conditioning Device Evaluation.',
    results: [
      'The device under test has kept the hard water from depositing enough minerals to impair heater operation during this series of time accelerated testing.',
      'Analysis of the deposits and flow readings indicate that this unit is effective in preventing clogging due to calcium carbonate build up.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/86361495130169.pdf'
  },
  'residential-well': {
    category: 'residential',
    title: 'Residential Well',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/4a460046d_pearl-plus-on-pipe.png',
    installer: 'New Water Innovations (HydroFLOW Southwest)',
    customer: 'Homeowner – Santa Fe, NM',
    application: 'Residential well /Whole House Solution',
    installedUnits: 'HydroFLOW Pearl Plus',
    background: 'Hard water caused heavy-scale deposits on the faucet aerators and showerheads. The homeowner also suspected that there might be scale inside the pipes, water heater and dishwasher. The water to the house comes from a well.',
    results: [
      'Faucets running clean.',
      'No water spots on glassware or dishes.',
      'The aerators and showerheads have no deposits to clog their operation.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/75351495060345.pdf'
  },
  'residential-complex': {
    category: 'residential',
    title: 'Residential Complex',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/12/7751495146448.jpg',
    customer: 'The Greenfield Village – Southern CA',
    application: 'Water heaters and recirculation pumps',
    installedUnits: 'HydroFLOW Pearl Plus units',
    background: 'In the four years since the apartment complex was built, limescale buildup was so aggressive, that many of the water heaters and recirculation pumps failed. The complex\'s owners faced a minimum cost of $600,000 to replace the equipment. After further research, the community\'s executives decided to install HydroFLOW water conditioners, which use patented Hydropath technology.',
    results: [
      'Six months after installation, random inspections found that the water heaters, recirculation pumps, tanks, pipes and related equipment were free of limescale buildup.',
      'They were able to save on costs significantly, as it avoided the enormous replacement and maintenance costs it was facing.',
      'An additional benefit was that the community was able to pass along savings to its tenants as a result of the improved operating efficiency of each apartment\'s water heater.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/87271493931205.pdf'
  },
  'residential-dishwasher': {
    category: 'residential',
    title: 'Residential Dishwasher',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/12/41611494973757.jpg',
    installer: 'HydroFLOW USA',
    customer: 'Crown Property Management',
    application: 'Dishwasher',
    installedUnits: 'HydroFLOW Pearl Plus',
    background: 'The dishwasher in their corporate office suffered from limescale associated problems – white spotting on glassware and on the appliance\'s inner parts. They decided to install a HydroFLOW s38 in order to try and remedy the problem.',
    results: [
      'Following the installation of the water conditioner, we immediately notice the glassware become spotless.',
      'The limescale on the heating element gradually began to dissolve over a period of 3 months.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/31351493931674.pdf'
  },
  'residential-pool': {
    category: 'residential',
    title: 'Residential Pool',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800',
    installer: 'HydroFLOW West Inc.',
    customer: 'Homeowner in Selah, WA.',
    application: 'Above ground swimming pool, 18\' round',
    installedUnits: 'HydroFLOW Residential unit',
    background: 'Fought with hard water for years and have spent a lot of money on chemicals to get them balanced. They have also considered having the Fire Department come out and fill it with creek water to eliminate the hardness and scaling.',
    results: [
      'The hardness, alkalinity, copper, and iron were in the absolute best range in all categories.',
      'Saved $300 in pool chemicals that normally have to buy to get the pool adjusted correctly.',
      'Only added one bag of Multi Shock and kept a couple of chlorine tablets in the floater.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/8651539882719.pdf'
  },
  'residential-tower': {
    category: 'residential',
    title: 'Residential Tower',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/12/11761494365073.jpg',
    installer: 'New Water Innovations (HydroFLOW Southwest)',
    customer: 'West Sixth Residential Towers – Tempe, AZ',
    application: 'Water boilers, plumbing lines and fixtures',
    installedUnits: 'Two HydroFLOW i160 units',
    background: 'The two "West Sixth" residential towers serving the Tempe campus of Arizona State University were experiencing problems with limescale accumulating in their domestic water boilers, plumbing lines and fixtures throughout the facilities. Water softeners were considered but were deemed unpractical due to space constraints. The units were installed on November 2014.',
    results: [
      'In March of 2016 (16 months after the HydroFLOW units were installed), the domestic water boilers were inspected and found to be absolutely scale-free.',
      'HydroFLOW units reversed the scale that had built up before their installation.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/51421493846519.pdf'
  },
  'orchard-scale-on-apples': {
    category: 'agriculture',
    title: 'Orchard - Scale on Apples',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/46881495658842.jpg',
    installer: 'HydroFLOW West',
    customer: 'Eastern Washington apple grower',
    application: 'Scale accumulation on apples',
    installedUnits: 'Custom HydroFLOW 12" Water Conditioner',
    background: 'The Orchard in the Yakima Valley, Washington, incorporates overhead sprayers for temperature control and protection from sun damage. Even though acid is added to the sprayed water, apples still gather hard scale stains. The scale staining reduces the grade of the apples. In an average growing season, only 50% of the apples receive the highest grade rating.',
    successFactors: [
      'Install Custom HydroFLOW 12" I Range on the pipe which supplies water to the Orchard',
      'Scale deposits accumulate as fine powder which is very easy to remove',
      'Over 90% of apples expected to receive highest grade rating'
    ],
    results: [
      'Scale deposits accumulate as fine powder which is very easy to remove.',
      'Over 90% of the apples are expected to receive the highest grade rating once processed.',
      'Two weeks after installation, the pond\'s water became much clearer and the floating algae blooms reduced significantly.',
      'Snails that used to clog the filters are no longer present.',
      'Orchard Manager: "The pond has never been this clear and the white powder washes right off the apples. The benefits of HydroFLOW should have a very positive impact on our profits this season. Initial processing results are the best I\'ve ever seen."'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/271605140596.pdf'
  },
  'hydroflow-reduces-biofilm-baron-farms': {
    category: 'agriculture',
    title: 'HydroFLOW Reduces Biofilm at Baron Farms',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/34421495659182.jpg',
    installer: 'HydroFLOW West',
    customer: 'Baron Farms, WA',
    application: 'Well – biofilm and bio-kill',
    installedUnits: 'HydroFLOW s38 unit',
    background: 'Baron Farms is an organic farm and they were having a water quality issue in the well. They didn\'t want to use harmful chemicals that would be dumped into the environment and couldn\'t not get their food processing license because of the water.',
    successFactors: ['Descale the pipes', 'Remove biofilm in the pipes', 'Corrosion protection'],
    results: [
      'After a month and half from installation, the results were excellent!',
      'The water was clean and clear.',
      'Were able to get their organic food processing license.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/64021494003033.pdf'
  },
  'aquavet-clinical-evaluation-fish-health': {
    category: 'agriculture',
    title: 'Phase 1 - Aquavet Clinical Evaluation Gyrodactylus Spp',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/123e77e92_15341495670660-400x400.jpg',
    customer: 'Aquaculture facility',
    application: 'Aquaculture fish health improvement in tilapia farming',
    installedUnits: 'HydroFLOW HS40 unit',
    background: 'This clinical evaluation has monitored the effect of the HydroFLOW water disinfection system on Gyrodactylus spp.\n\nAs such, we evaluated the following parameters:\n\nGram () Bacterial pathogens of fish.\nTotal Bacterial counts in water.\n\nMorbidity rate.\nMortality rate.',
    successFactors: [
      'Increase tilapia survival rates',
      'Improve parasite prevention without chemicals',
      'Enhance overall fish health and water quality'
    ],
    results: [
      'Higher survival rates for tilapia during 90-day observation period.',
      'Improved parasite prevention without chemical treatments.',
      'Healthier fish overall with better growth rates.',
      'Cleaner water conditions in aquaculture tanks.'
    ],
    pdfUrl: 'https://hydroflow-usa.com/assets/files/84961495125171.pdf'
  },

  'us-navy-seafighter': {
    category: 'marine',
    title: 'U.S. Navy Seafighter',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2025/07/seafighter-510x510.webp',
    application: 'Naval vessel biofouling prevention',
    installedUnits: 'HydroFLOW HM Range',
    results: [
      'Extended maintenance intervals for strainer systems.',
      'Effective biofouling prevention.',
      'Approved for naval use.'
    ]
  },
  'mv-hermes-leader-uv-system': {
    category: 'marine',
    title: 'MV Hermes Leader - Replacement of UV-System',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/40231495151554-510x510.jpg',
    application: 'Marine vessel water treatment replacing UV system',
    installedUnits: 'HydroFLOW HM Range',
    results: [
      'Water test results showed no trace of any bacteria.',
      'Successfully replaced UV system.',
      'Cost savings on system operation.'
    ]
  },
  'ray-shipping-fleet-hydropath': {
    category: 'marine',
    title: 'Ray Shipping Equips Fleet with Hydropath',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/79081495752087-510x510.jpg',
    application: 'Fleet-wide marine vessel water treatment',
    installedUnits: 'HydroFLOW HM Range',
    results: [
      'Completely reduced vessel scale buildup.',
      'Reduced bacteria corrosion.',
      'Saved labor work and money across entire fleet.'
    ]
  },
  'anglo-eastern-freshwater-generator': {
    category: 'marine',
    title: 'Anglo Eastern - Freshwater Generator',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/78611495752951-510x510.jpg',
    application: 'Marine freshwater generator scale prevention',
    installedUnits: 'HydroFLOW HM Range',
    results: [
      'Freshwater generator is free of scale.',
      'Chemical dosing no longer required.',
      'Reliable, continuous performance.'
    ]
  },
  'mv-hoegh-antwerp-scale-prevention': {
    category: 'marine',
    title: 'MV Hoegh Antwerp - Scale Prevention',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/88651495664646-510x510.jpg',
    application: 'Marine vessel scale prevention',
    installedUnits: 'HydroFLOW HM Range',
    results: [
      'No scale buildup found during inspection.',
      'No chemicals required for cleaning.',
      'Easy maintenance procedures.'
    ]
  },
  'car-carrier-main-cooling-system': {
    category: 'marine',
    title: 'Car Carrier - Main Cooling System',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/42481495666712-510x510.jpg',
    application: 'Car carrier vessel cooling system',
    installedUnits: 'HydroFLOW HM Range',
    results: [
      'Particle filter found clean of barnacles.',
      'Easy washing and maintenance.',
      'System protection maintained.'
    ]
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
                        <h3 className="font-semibold text-slate-900">
                          {slug === 'residential-pool' ? 'Residential Testimonial' : (slug === 'plumbing-contractor' || slug === 'residential-well' || slug === 'residential-dishwasher') ? 'Full Letter' : (slug === 'gold-leed-campus' || slug === 'bakery-steam-boilers' || slug === 'sunrise-childrens-hospital-cooling-tower' || slug === 'st-helena-hospital-ice-machine' || slug === 'penn-state-university' || slug === 'the-melting-pot-restaurant') ? 'Referral Letter' : slug === 'gold-gym-lap-pool' ? 'Product Evaluation' : 'Full Case Study Report'}
                        </h3>
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
                    <p className="text-slate-600">
                      {study.installedUnits.split('HydroFLOW').map((part, idx) => (
                        idx === 0 ? part : <span key={idx}><i>Hydro</i>FLOW{part}</span>
                      ))}
                    </p>
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
                        <span>
                          {result.split('HydroFLOW').map((part, i) => (
                            i === 0 ? part : <span key={i}><i>Hydro</i>FLOW{part}</span>
                          ))}
                        </span>
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
                Contact us to learn how <i>Hydro</i>FLOW can solve your water treatment challenges.
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

            {/* Wastewater Video - Only for wastewater-related case studies */}
            {(slug === 'sludge-line-struvite-treatment' || 
              slug === 'city-of-walla-walla-wastewater-plant' || 
              slug === 'lehigh-county-wwtp-struvite-treatment' || 
              slug === 'wastewater-treatment-plant-in-ohio' ||
              slug === 'massive-texas-factory') && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <Card className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
                    See <i>Hydro</i>FLOW in Action
                  </h3>
                  <p className="text-slate-600 mb-6 text-center">
                    Watch how our technology transforms wastewater treatment
                  </p>
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
                    <iframe
                      src="https://player.vimeo.com/video/1156116944"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}