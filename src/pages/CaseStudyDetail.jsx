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
  'industrial-water-heaters': {
    category: 'industrial',
    title: 'Industrial Water Heaters - Apple Packing Facility',
    image: 'https://media.base44.com/images/public/6933444aa399ff1da59bbd5c/9091089f9_image.png',
    customer: 'Apple packing facility in the U.S. Northwest that installed 6 <i>Hydro</i>FLOW units in multiple locations over the last 15 years',
    application: 'Bank of 3 water heaters supplying warm water to apple washing nozzles',
    installedUnits: 'Generation 4 HydroFLOW i60 unit with HydroKNCT IoT device for remote monitoring via Hydropath Care',
    background: 'Limescale was fouling the bank of 3 water heaters that supply warm water to the apple washing nozzles, leading to extensive maintenance and premature equipment failure. A <i>Hydro</i>FLOW unit was installed in 2011 on the incoming water line feeding the 3 water heaters to evaluate effectiveness of preventing and removing limescale deposits from tubes and tank walls.',
    successFactors: [
      'Continuous operation from 2011 to 2026.',
      'Significant reduction in maintenance requirements.',
      'Extended equipment lifespan resulting in major cost savings.',
      'Seamless integration with new high-efficiency equipment.',
      'Real-time monitoring for proactive maintenance.'
    ],
    results: [
      '70% reduction in limescale deposits on tubes and tank walls within 3 months of initial installation in 2011.',
      'Extended water heater lifespan by 14 years beyond expected end of life - allowing them to continue operation until 2025.',
      'Eliminated extensive maintenance costs and premature equipment failure.',
      'Successfully upgraded to new high-efficiency water heaters in 2025 with Generation 4 i60 unit protection.',
      'Real-time monitoring capability through HydroKNCT IoT device and Hydropath Care software enables proactive maintenance.'
    ],
    pdfUrl: 'https://media.base44.com/files/public/6933444aa399ff1da59bbd5c/75ec1ae50_HydroFLOWCaseStudy-IndustrialWaterHeaters-2026update.pdf'
  },
  'massive-texas-factory': {
    category: 'industrial',
    title: 'Massive Texas Factory',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/33ba861ce_MassiveTXfactory.png',
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
    pdfUrl: 'https://pdf.hydroflow-usa.com/HydroFLOW-industrial-case-study-massive-Texas-factory.pdf'
  },
  'sludge-line-struvite-treatment': {
    category: 'industrial',
    title: 'Sludge Line Struvite Treatment',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/073cd7b2e_image.png',
    customer: 'A wastewater treatment plant in Chicago Illinois.',
    application: 'Struvite scale treatment.',
    installedUnits: 'HydroFLOW i150 unit.',
    background: 'Struvite accumulation in the plant\'s digested sludge line causes reduced flow rates, leading to shut down and chemical cleaning of the 2-mile underground line to restore necessary flow rates.',
    results: [
      'After 3 months of operation, HydroFLOW was able to reduce scaling and maintain consistent flow rates.'
    ],
    pdfUrl: 'https://pdf.hydroflow-usa.com/HydroFLOW-Case-Study-Sludge-Line-Struvite-Treatment-2023.pdf'
  },
  'screw-press-struvite-treatment': {
    category: 'industrial',
    title: 'Screw Press Struvite Treatment',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/e4f4de695_image.png',
    customer: 'A wastewater treatment plant in the State of Utah, United States',
    application: 'Screw Press – Struvite scale treatment',
    installedUnits: 'HydroFLOW Custom i8" unit on the sludge line feeding the screw press',
    background: 'Struvite accumulation in the plant\'s two screw presses was a constant and costly maintenance issue. The plant used a Struvite reduction chemical costing $8,000/month. The presses also required monthly cleaning, taking up to 30 hours to complete due to the concrete-like Struvite scale formation. The plant chose to perform a two-month HydroFLOW product evaluation to determine the reduction of Struvite buildup, maintenance, and chemical usage.',
    successFactors: ['Reduce Struvite buildup', 'Eliminate $8,000/month chemical cost', 'Reduce cleaning time and maintenance labor'],
    results: [
      'Rather than gradually reducing chemical usage, the plant chose to discontinue chemical usage entirely to evaluate HydroFLOW on its own.',
      'After 30 days, the press did not require cleaning and only had a little mud-like Struvite accumulation.',
      'After 60 days, the press was pressure washed, taking less than 4 hours to complete instead of the typical 30 hours with chemicals.',
      'The reduction of chemical usage and time saved in manual cleaning led to a 3-month payback period.',
      '"Outstanding results! Night and day difference before and after HydroFLOW." - Maintenance Manager'
    ],
    pdfUrl: 'https://pdf.hydroflow-usa.com/HydroFLOWCaseStudy-ScrewPressStruviteTreatment-2023.pdf'
  },
  'optimization-steamer-oven': {
    category: 'commercial',
    title: 'Optimization of a Steamer Oven',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/5575bdc82_image.png',
    customer: 'Anoka-Hennepin School District, Minnesota',
    application: 'Two Cleveland Ultra 10 Double Steamer Ovens in different school locations',
    installedUnits: '1 x HydroFLOW S38 installed on cold water supply line feeding the steamer oven',
    background: 'The Anoka-Hennepin School District is Minnesota\'s largest, serving approximately 38,000 students. The potable water in the district is considered very hard (roughly 17 GPG or 290 PPM). The steamer ovens are prone to build-up of scale requiring frequent chemical cleaning and maintenance.',
    successFactors: [
      'Comparison testing between two identical steamer ovens using same potable water source',
      'One oven treated with HydroFLOW, one without, inspected monthly for 3 months',
      'After 1 month: thin layer of loose scale with HydroFLOW vs thick layer of hard scale without',
      'Dramatically less scale accumulation at each monthly inspection with HydroFLOW treated oven'
    ],
    results: [
      'At each monthly inspection, dramatically less scale accumulation in the HydroFLOW treated oven',
      'Maintenance costs reduced by 75% - cleaning now performed every 4 weeks instead of every week',
      'Chemical savings alone provided a return on investment of less than a year',
      'Chemical and labor savings combined provided a return on investment of less than 6 months',
      'Life cycle of the steamer oven is expected to extend significantly as a result of lessened chemical cleaning'
    ],
    pdfUrl: 'https://pdf.hydroflow-usa.com/HydroFLOW-commercial-case-study-optimizes-steamer-ovens-maintenance-cycles-update4292021.pdf'
  },
  'scale-reduction-private-dental-practice': {
    category: 'commercial',
    title: 'Scale Reduction at a Private Dental Practice',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/13953a4e6_image.png',
    customer: 'Private dental practice in the United States',
    application: 'Water system serving sinks, toilets, dental chairs, and other fixtures throughout the facility',
    installedUnits: '4 HydroFLOW units: 1 x hs40 on 1.5" incoming water line, 1 x s38 on 1" cold water line to water heater, 1 x s38 on 1" cold water line beneath kitchen, 1 x s38 on 1" cold water line beneath procedure room 5',
    background: 'With a water hardness of 385 PPM, scale accumulated throughout the building, requiring frequent manual cleaning. Instead of a salt-based water softener (which adds unhealthy sodium to water), the dental practice installed salt-free HydroFLOW water conditioners throughout the building.',
    successFactors: [
      'Reduction of hard scale deposits at sinks, toilets, and dental chairs',
      'Extend the time between manual scale removal',
      'Gradual removal of existing scale from inside the piping system'
    ],
    results: [
      'Lab faucet: visible scale removal without any manual cleaning over 8 weeks',
      'Toilet: significant scale reduction without manual cleaning intervention',
      'Kitchen faucet: dramatic scale reduction in 8-week period',
      'Water heater: Local plumber inspection statement - "HydroFLOW took out years of scale in roughly 2 months. If you install a HydroFLOW unit on the cold water pipe feeding your water heater, it will significantly extend its life-cycle."',
      'Scale accumulation greatly reduced during the 8-week assessment period',
      'Most existing scale buildup was naturally removed without acidic cleaning',
      'Manual scrubbing of fixtures was less labor intensive and not as frequent',
      'Weekly cleaning continued for sanitary purposes, but the amount of scale was negligible'
    ],
    pdfUrl: 'https://pdf.hydroflow-usa.com/HydroFLOW-commercial-case-study-private-dental-practice.pdf'
  },
  'scale-reduction-gas-station-convenience-store': {
    category: 'commercial',
    title: 'Scale Reduction at a Gas Station and Convenience Store Chain',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/a92d7f14b_image.png',
    customer: 'A gas station and convenience store chain with over 400 locations across 12 states',
    application: 'Coffee makers, food warmers, ice machines, water heaters, and fixtures throughout each store location',
    installedUnits: 'HydroFLOW s38 (Pearl Plus) on ¾" cold water pipes (older stores & ice machines); HydroFLOW hs40 on 1¼" cold water pipes (newer stores)',
    background: 'The stores sell fresh-made food items such as burritos, sandwiches, pizzas, toasted subs, cookies, and coffee. Hard water scale was causing costly maintenance issues on kitchen equipment, water heaters, fixtures, and ice machines throughout the chain. Looking to reduce scale buildup and maintenance costs, the customer chose to utilize HydroFLOW s38 and hs40 devices to treat coffee makers, food warmers, ice machines, water heaters, and fixtures. Older stores have a ¾ inch cold water pipe entering the water heater, requiring an s38 (Pearl Plus) device. Newer stores have a 1¼ inch cold water pipe entering the water heater, requiring an hs40 device. All ice machines have a ¾ inch cold water pipe and require an s38 (Pearl Plus) device.',
    successFactors: [
      'Reduce hard scale accumulation in coffee makers, food warmers, ice machines, water heaters, and fixtures',
      'Reduce maintenance costs and cleaning labor across 400+ locations',
      'Eliminate the need for acid cleaning of food warmers (which damages seals and voids manufacturer warranty)',
      'Extend ice machine cleaning intervals and eliminate technician service calls'
    ],
    results: [
      'The HydroFLOW s38 and hs40 devices visibly reduced hard scale accumulation in key areas around the stores.',
      'The heating elements of the water heaters are noticeably cleaner. After 6+ months, water heaters have descaled and are running at higher efficiency while requiring less frequent servicing.',
      'Half a pound of purged scale was collected from one store\'s water heater, demonstrating active descaling.',
      'The units are positively impacting the ice machines by reducing scale and biofilm accumulation. Ice machines are on a quarterly maintenance schedule and have NOT required a technician to take them down for cleaning over the last year.',
      'Store manager: "After a few days of using HydroFLOW, we noticed hard scale is not sticking to the heating plate; the residue is powdery and easy to clean."',
      'Acid cleaning of food warmers — which damages seals and voids manufacturer warranty — is no longer necessary. Daily maintenance is less labor intensive.',
      'Smoothie machines that previously clogged with scale every few months (requiring a $150 service call) no longer require service tech visits.',
      'Maintenance associated with cleaning sinks, food warmers, fixtures, cooking areas, and coffee makers has greatly reduced.',
      'The estimated return on investment for a typical store is between 6 to 12 months.',
      'Over 30 locations are now protected from the harmful effects of scale and biofilm, with more being added.'
    ],
    pdfUrl: 'https://pdf.hydroflow-usa.com/HydroFLOW-commercial-case-study-gas-station-and-convenience-store-chain.pdf'
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
    pdfUrl: 'https://pdf.hydroflow-usa.com/49731493848513.pdf'
  },
  'bakery-steam-boilers': {
    category: 'commercial',
    title: 'Bakery Steam Boilers',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/c0cae605b_44371494363345-510x510.jpg',
    customer: 'A commercial bakery facility.',
    application: 'Steam boiler scale and corrosion prevention.',
    installedUnits: 'Commercial HydroFLOW Unit.',
    results: [
      'HydroFLOW significantly reduced limescale and corrosion accumulation in our steam boilers.',
      'Extended equipment lifespan and improved efficiency.',
      'Reduced maintenance costs and downtime.'
    ],
    pdfUrl: 'https://pdf.hydroflow-usa.com/bakery-steam-boilers.pdf'
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
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/1ace0f6b1_image.png',
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
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/2e4f96be4_43851493848202.pdf'
  },
  'nellis-air-force-base-cooling-tower': {
    category: 'commercial',
    title: 'Nellis Air Force Base Cooling Tower',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/b8987c812_36551561660043.jpg',
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
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/19ebf3134_36111563298950.pdf'
  },
  'city-of-walla-walla-wastewater-plant': {
    category: 'industrial',
    title: 'City of Walla Walla Wastewater Plant',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/22845e0f8_60391596733327.jpg',
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
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/1fce46dec_HydroFLOW-industrial-casestudy-city-of-walla-walla-wastewater-plant.pdf'
  },
  'honda-cooling-tower': {
    category: 'industrial',
    title: 'Honda Cooling Tower',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/6421f8a1d_81111495579148.jpg',
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
    pdfUrl: 'https://pdf.hydroflow-usa.com/85191493939481.pdf'
  },
  'hydroflow-reduces-algae-growth': {
    category: 'agriculture',
    title: 'HydroFLOW Reduces Algae Growth',
    image: 'https://pdf.hydroflow-usa.com/19501495124745.jpg',
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
    pdfUrl: 'https://pdf.hydroflow-usa.com/81121493936806.pdf'
  },
  'food-processing-cooling-tower': {
    category: 'agriculture',
    title: 'Food Processing Cooling Tower',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/ab27fbc8b_image.png',
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
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/60ba6ffc2_67671539882904.pdf'
  },
  'massive-texas-factory': {
    category: 'industrial',
    title: 'Massive Texas Factory',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/33ba861ce_MassiveTXfactory.png',
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
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/46e80b0d5_HydroFLOW-industrial-case-study-massive-Texas-factory.pdf'
  },
  'sludge-line-struvite-treatment': {
    category: 'industrial',
    title: 'Sludge Line Struvite Treatment',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/073cd7b2e_image.png',
    installer: 'HydroFLOW USA',
    customer: 'A wastewater treatment plant in Chicago Illinois',
    application: 'Struvite scale treatment',
    installedUnits: 'HydroFLOW i150 unit',
    background: 'Struvite accumulation in the plant\'s digested sludge line causes reduced flow rates, leading to shut down and chemical cleaning of the 2-mile underground line to restore necessary flow rates.',
    successFactors: ['Reduce struvite scaling', 'Maintain consistent flow rates', 'Avoid system shutdowns'],
    results: [
      'After 3 months of operation, HydroFLOW was able to reduce scaling and maintain consistent flow rates.'
    ],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/a913379ff_HydroFLOW-Case-Study-Sludge-Line-Struvite-Treatment-2023.pdf'
  },
  'gold-leed-campus': {
    category: 'commercial',
    title: 'Gold LEED Registered Campus',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/1469904e9_image.png',
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
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/6b4d951ac_49731493848513.pdf'
  },
  'bakery-steam-boilers': {
    category: 'commercial',
    title: 'Bakery Steam Boilers',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/4bf8d7c50_44051495481164.jpg',
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
    pdfUrl: 'https://pdf.hydroflow-usa.com/39511493849268.pdf'
  },
  'municipal-golf-course-in-texas': {
    category: 'agriculture',
    title: 'Municipal Golf Course in Texas',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/73645241b_image.png',
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
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/7dc3c0ccd_68631698880628.pdf'
  },
  'steel-company-spray-bar-system': {
    category: 'industrial',
    title: 'Steel Company Spray Bar System',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/90609d12e_24681639432386.jpg',
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
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/b98089f6f_HydroFLOW-industrial-case-study-steel-company-spray-bar-system.pdf'
  },
  'biofilm-reduction-referral-letter': {
    category: 'industrial',
    title: 'Biofilm Reduction - Referral Letter',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/4b0a25b06_88401638211312.jpg',
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
    pdfUrl: 'https://pdf.hydroflow-usa.com/61401638211314.pdf'
  },
  'lehigh-county-wwtp-struvite-treatment': {
    category: 'industrial',
    title: 'Lehigh County WWTP - Struvite Treatment',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/087be9706_image.png',
    customer: 'Lehigh County Wastewater Treatment Plant',
    application: 'Struvite scale treatment in wastewater treatment plant',
    installedUnits: 'HydroFLOW industrial unit',
    background: 'The wastewater treatment plant was experiencing struvite accumulation that required frequent cleaning and caused operational challenges.',
    successFactors: ['Stop struvite accumulation', 'Soften existing deposits', 'Reduce cleaning frequency'],
    results: [
      'Within 8 days, the struvite stopped accumulating.',
      'Existing struvite deposits were softening up.',
      'Easier cleaning and reduced maintenance requirements.'
    ],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/6932f7838_HydroFLOW-industrial-referral-letter-lehigh-county-wastewater-treatment-plant.pdf'
  },
  'paper-mill-liquor-lines': {
    category: 'industrial',
    title: 'Paper Mill Liquor Lines',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/75ce255c0_image.png',
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
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/75593b140_46101493933705.pdf'
  },
  'cmc-concrete-report': {
    category: 'industrial',
    title: 'CMC Concrete Report',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/ba52c7c45_image.png',
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
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/968133043_4171495131909.pdf'
  },
  'inland-power-plant-in-china': {
    category: 'industrial',
    title: 'Inland Power Plant in China',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/1aadc4f7a_6861498261526.jpg',
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
    pdfUrl: 'https://pdf.hydroflow-usa.com/83871498261386.pdf'
  },
  'power-station-steam-condenser': {
    category: 'industrial',
    title: 'Power Station Steam Condenser',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/368371e5f_71371495581347.jpg',
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
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/140559cdb_39691493939531.pdf'
  },
  'natural-gas-and-oil-producer': {
    category: 'industrial',
    title: 'Natural Gas and Oil Producer',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/80b2c4c7a_image.png',
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
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/9df77444d_1431539882593.pdf'
  },
  'wastewater-treatment-plant-in-ohio': {
    category: 'industrial',
    title: 'Wastewater Treatment Plant in Ohio',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/16924a78b_generated_image.png',
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
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/97d3f55c2_HydroFLOW-industrial-case-stury-wastewater-treatment-plant-in-ohio.pdf'
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
    pdfUrl: 'https://pdf.hydroflow-usa.com/43801662059912.pdf'
  },
  'gold-gym-lap-pool': {
   category: 'commercial',
   title: 'Gold Gym Lap Pool',
   image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/acd8ba744_image.png',
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
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/e652e79b5_84741493847709.pdf'
  },
  'st-helena-hospital-ice-machine': {
    category: 'commercial',
    title: 'St. Helena Hospital Ice Machine',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/33c596c15_image.png',
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
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/f9aac3d6d_78241493850010.pdf'
  },
  'penn-state-university': {
    category: 'commercial',
    title: 'Penn State University',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/5e5549989_image.png',
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
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/8509b0567_89611493849814.pdf'
  },
  'the-melting-pot-restaurant': {
    category: 'commercial',
    title: 'The Melting Pot Restaurant',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/8a320e425_image.png',
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
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/67a5d889d_24351493849401.pdf'
  },
  'sharonville-fire-department': {
    category: 'commercial',
    title: 'Sharonville Fire Department',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/ddc7e5164_89651495480951.jpg',
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
    pdfUrl: 'https://pdf.hydroflow-usa.com/36171495126964.pdf'
  },
  'scale-and-bio-treatment-in-outdoor-pool': {
    category: 'commercial',
    title: 'Scale and Bio Treatment in Outdoor Pool',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/184c0154f_image.png',
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
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/7099a60ae_86361539882313.pdf'
  },
  'premium-car-wash-in-california': {
    category: 'commercial',
    title: 'Premium Car Wash in California',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/7eb2386b7_image.png',
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
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/ac84c7ab9_1561563299281.pdf'
  },
  'hotel-hot-water-system': {
    category: 'commercial',
    title: 'Hotel Hot Water System',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/3e5267fa9_72631672858543.jpg',
    customer: 'Hotel in San Antonio, TX',
    application: 'Potable hot water system – limescale reduction',
    installedUnits: 'Two HydroFLOW i100',
    background: 'The hotel was looking to improve its low water pressure and lack of hot water.',
    results: [
      'A few days after the installation, "soft" scale began to purge out of the hot water system.',
      'Previously clogged showerheads and faucet aerators have minimal debris.',
      'Twelve months after installation, the estimated return on investment (ROI) is well under a year.'
    ],
    pdfUrl: 'https://pdf.hydroflow-usa.com/14241698879790.pdf'
  },
  'office-building-cooling-towers-in-us-southeast': {
    category: 'commercial',
    title: 'Office Building Cooling Towers in US Southeast',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/4c66c1e24_42301661965280.jpg',
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
    pdfUrl: 'https://pdf.hydroflow-usa.com/75341661965067.pdf'
  },
  'long-stem-rose-growth': {
    category: 'agriculture',
    title: 'HydroFLOW Product Evaluation - Long Stem Rose Growth',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/97391384a_image.png',
    customer: 'A long-stem rose growing operation in South America',
    installedUnits: 'HydroFLOW Custom i12"',
    background: 'During the cold months (June-September) the overall growth of long stem roses slows down. The grower wanted to see how HydroFLOW could increase the output from his greenhouses, and determine if there is an overall improvement in the growth rate/quality of the roses throughout the year.',
    successFactors: ['Increase greenhouse output', 'Improve growth rate during cold months', 'Enhance overall flower quality'],
    results: [
      'Average stem lengths increased to 50cm (19.69") and the ratio of 50cm to 40cm stems was drastically improved. Rare 60cm stems began to emerge in September!',
      'Production levels were maintained through the cold months and the overall quality of flowers improved.',
      'Longer shelf life and better-quality flowers.'
    ],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/1da5d4765_HydroFLOW-agriculture-case-study-long-stem-roses.pdf'
  },
  'residential-water-heater': {
    category: 'residential',
    title: 'Residential Water Heater',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/28337c84d_element.png',
    application: 'Residential scale prevention and removal',
    installedUnits: 'HydroFLOW Pearl Plus',
    background: 'Residential property needed to address scale buildup in water heater and throughout the home\'s plumbing system.',
    successFactors: ['Stop new scale formation', 'Remove existing scale buildup', 'Improve water heater efficiency'],
    results: [
      'The s38 unit stopped new scale from forming and cleaned the existing scale build up from the water heater and the shower heads.',
      'The cleaning frequency of the shower heads in faucets around the house was reduced.',
      'Improved the efficiency of the hot water heater and longer expected life of the heating element.'
    ],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/ce74fda09_36311632777095.pdf'
  },
  'coliforms-in-well-water': {
    category: 'residential',
    title: 'Coliforms in Well Water',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/16a0ff6f9_28901495146802.jpg',
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
    pdfUrl: 'https://pdf.hydroflow-usa.com/25211539882204.pdf'
  },
  'plumbing-contractor': {
    category: 'residential',
    title: 'Plumbing Contractor',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/ad81caac4_31951495476221.jpg',
    application: 'Tankless Heaters and Pools',
    installedUnits: 'HydroFLOW Pearl Plus',
    background: 'They were looking for a solution to protect the tankless water heaters they are installing. They came across the hydropath technology and decided they will try the HydroFLOW s38 unit on a couple of installations. After getting to know the technology more they started to install the HydroFLOW units on pools.',
    results: [
      'The heat exchangers were completely clean from the scale.',
      'Pool – almost totally eliminates the need for pool chemicals.',
      'With Hydropath technology, there is no longer a need for traditional water softeners.'
    ],
    pdfUrl: 'https://pdf.hydroflow-usa.com/15281493934433.pdf'
  },
  'product-evaluation-tankless-boiler': {
    category: 'residential',
    title: 'Product Evaluation - Tankless Boiler',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/8e8487817_14381495147872.jpg',
    installer: 'HydroFLOW Canada',
    customer: 'Onspex is an independent testing company and was enlisted to provide an independent verification of the effects of a HydroFLOW unit.',
    application: 'Water Heater',
    installedUnits: 'HydroFLOW Residential unit',
    background: 'Test Protocol Induction Water Conditioning Device Evaluation.',
    results: [
      'The device under test has kept the hard water from depositing enough minerals to impair heater operation during this series of time accelerated testing.',
      'Analysis of the deposits and flow readings indicate that this unit is effective in preventing clogging due to calcium carbonate build up.'
    ],
    pdfUrl: 'https://pdf.hydroflow-usa.com/86361495130169.pdf'
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
    pdfUrl: 'https://pdf.hydroflow-usa.com/75351495060345.pdf'
  },
  'residential-complex': {
    category: 'residential',
    title: 'Residential Complex',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/db222a134_7751495146448.jpg',
    customer: 'The Greenfield Village – Southern CA',
    application: 'Water heaters and recirculation pumps',
    installedUnits: 'HydroFLOW Pearl Plus units',
    background: 'In the four years since the apartment complex was built, limescale buildup was so aggressive, that many of the water heaters and recirculation pumps failed. The complex\'s owners faced a minimum cost of $600,000 to replace the equipment. After further research, the community\'s executives decided to install HydroFLOW water conditioners, which use patented Hydropath technology.',
    results: [
      'Six months after installation, random inspections found that the water heaters, recirculation pumps, tanks, pipes and related equipment were free of limescale buildup.',
      'They were able to save on costs significantly, as it avoided the enormous replacement and maintenance costs it was facing.',
      'An additional benefit was that the community was able to pass along savings to its tenants as a result of the improved operating efficiency of each apartment\'s water heater.'
    ],
    pdfUrl: 'https://pdf.hydroflow-usa.com/87271493931205.pdf'
  },
  'residential-dishwasher': {
    category: 'residential',
    title: 'Residential Dishwasher',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/251608b46_41611494973757.jpg',
    installer: 'HydroFLOW USA',
    customer: 'Crown Property Management',
    application: 'Dishwasher',
    installedUnits: 'HydroFLOW Pearl Plus',
    background: 'The dishwasher in their corporate office suffered from limescale associated problems – white spotting on glassware and on the appliance\'s inner parts. They decided to install a HydroFLOW s38 in order to try and remedy the problem.',
    results: [
      'Following the installation of the water conditioner, we immediately notice the glassware become spotless.',
      'The limescale on the heating element gradually began to dissolve over a period of 3 months.'
    ],
    pdfUrl: 'https://pdf.hydroflow-usa.com/31351493931674.pdf'
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
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/f5d89f1a9_8651539882719.pdf'
  },
  'residential-tower': {
    category: 'residential',
    title: 'Residential Tower',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/a3454757f_11761494365073.jpg',
    installer: 'New Water Innovations (HydroFLOW Southwest)',
    customer: 'West Sixth Residential Towers – Tempe, AZ',
    application: 'Water boilers, plumbing lines and fixtures',
    installedUnits: 'Two HydroFLOW i160 units',
    background: 'The two "West Sixth" residential towers serving the Tempe campus of Arizona State University were experiencing problems with limescale accumulating in their domestic water boilers, plumbing lines and fixtures throughout the facilities. Water softeners were considered but were deemed unpractical due to space constraints. The units were installed on November 2014.',
    results: [
      'In March of 2016 (16 months after the HydroFLOW units were installed), the domestic water boilers were inspected and found to be absolutely scale-free.',
      'HydroFLOW units reversed the scale that had built up before their installation.'
    ],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/5cdf053f0_51421493846519.pdf'
  },
  'orchard-scale-on-apples': {
    category: 'agriculture',
    title: 'Orchard - Scale on Apples',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/f8cd07ecf_image.png',
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
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/558f293df_271605140596.pdf'
  },
  'hydroflow-reduces-biofilm-baron-farms': {
    category: 'agriculture',
    title: 'HydroFLOW Reduces Biofilm at Baron Farms',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/aea25558e_image.png',
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
    pdfUrl: 'https://pdf.hydroflow-usa.com/64021494003033.pdf'
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
    pdfUrl: 'https://pdf.hydroflow-usa.com/84961495125171.pdf'
  },

  'us-navy-seafighter': {
    category: 'marine',
    title: 'U.S. Navy Seafighter',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/c2d5706d8_image.png',
    application: 'Naval vessel biofouling prevention',
    installedUnits: 'HydroFLOW HM Range',
    results: [
      'Extended maintenance intervals for strainer systems.',
      'Effective biofouling prevention.',
      'Approved for naval use.'
    ],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/b06911af1_HydroFLOW-marine-case-study-US-Navy-Seafighter.pdf'
  },
  'mv-hermes-leader-uv-system': {
    category: 'marine',
    title: 'MV Hermes Leader - Replacement of UV-System',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/a5e77c37e_image.png',
    application: 'Marine vessel water treatment replacing UV system',
    installedUnits: 'HydroFLOW HM Range',
    results: [
      'Water test results showed no trace of any bacteria.',
      'Successfully replaced UV system.',
      'Cost savings on system operation.'
    ],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/e5384d360_HydroFLOW-marine-case-study-MV-hermes-leader-UV-System.pdf'
  },
  'ray-shipping-fleet-hydropath': {
    category: 'marine',
    title: 'Ray Shipping Equips Fleet with Hydropath',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/fbc618b16_image.png',
    application: 'Fleet-wide marine vessel water treatment',
    installedUnits: 'HydroFLOW HM Range',
    results: [
      'Completely reduced vessel scale buildup.',
      'Reduced bacteria corrosion.',
      'Saved labor work and money across entire fleet.'
    ],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/08ad97990_HydroFLOW-marine-referral-letter-ray-shipping-equips-fleet-with-Hydropath.pdf'
  },
  'anglo-eastern-freshwater-generator': {
    category: 'marine',
    title: 'Anglo Eastern - Freshwater Generator',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/b0977b45d_image.png',
    application: 'Marine freshwater generator scale prevention',
    installedUnits: 'HydroFLOW HM Range',
    results: [
      'Freshwater generator is free of scale.',
      'Chemical dosing no longer required.',
      'Reliable, continuous performance.'
    ],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/c82419f45_HydroFLOW-marine-referral-letter-anglo-eastern-fresh-water-generator.pdf'
  },
  'mv-hoegh-antwerp-scale-prevention': {
    category: 'marine',
    title: 'MV Hoegh Antwerp - Scale Prevention',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/ae70b79b0_88651495664646.jpg',
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
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/d29c16948_image.png',
    application: 'Car carrier vessel cooling system',
    installedUnits: 'HydroFLOW HM Range',
    results: [
      'Particle filter found clean of barnacles.',
      'Easy washing and maintenance.',
      'System protection maintained.'
    ],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/56fb596c1_009-CaseStudy-CarCarrier.pdf'
  },
  'increased-crop-yield-experiment': {
    category: 'agriculture',
    title: 'Increased Crop Yield Experiment',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/4fd3f7fa7_87301495667998.jpg',
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
    pdfUrl: 'https://pdf.hydroflow-usa.com/74431493851538.pdf'
  },
  '60-hp-low-pressure-steam-boiler': {
    category: 'industrial',
    title: '60 HP Low Pressure Steam Boiler',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/fe8e0d1eb_image.png',
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
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/d33c208a5_88201550515726.pdf'
  },

  'paper-mill-bleach-plant': {
    category: 'industrial',
    title: 'Paper Mill Bleach Plant',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/7e48f2a65_image.png',
    customer: 'Boise Paper Mill – Wallula, Washington, USA',
    application: 'Inlet to E1 shower unit in the bleach plant (compared against untreated D1 unit)',
    installedUnits: 'Custom HydroFLOW C8" unit (8.625" pipe diameter), installed on the Bleach Plant Mezzanine Floor — 30 feet before the E1 shower nozzles',
    background: 'The bleach plant has multiple shower units which suffer from severe limescale accumulation. Shower nozzles need to either be hydro-blasted or replaced periodically. The trial started with clean/new nozzles at zero limescale, installed May 4, 2011. The treated E1 unit was compared to the untreated D1 unit after 11 weeks (July 18, 2011).',
    successFactors: [
      'Decrease new limescale accumulation inside pipes and nozzles of E1 unit',
      'Reduce labor intensity for cleaning compared to untreated D1 unit',
      'Demonstrate chemical-free scale prevention feasibility in paper mill operations'
    ],
    results: [
      'The D1/E1 comparison pictures speak for themselves — the treated E1 unit showed dramatically less scale buildup than the untreated D1 unit after the same 11-week period.',
      'Treated E1 nozzles showed significantly less scale accumulation vs. the heavily scaled untreated D1 nozzles.',
      'Scale reduction was visible all the way 30 feet down the line in the treated unit.',
      'Hydropath Technology was recommended as a chemical-free method of treating limescale problems at a paper mill bleach plant.'
    ],
    pdfUrl: 'https://pdf.hydroflow-usa.com/Case%20Study%20-%20Paper%20Mill%20Bleach%20Plant%20-%20Scale.pdf'
  },

  'kentucky-distillery-cooling-tower-dephlegmator': {
    category: 'industrial',
    title: 'Kentucky Distillery Cooling Tower and Dephlegmator',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/df5463ea9_image.png',
    customer: 'A bourbon whisky distillery in Kentucky',
    application: 'Cooling tower and dephlegmator (specialized heat exchanger used in the distilling process)',
    installedUnits: 'HydroFLOW i12" Custom unit installed on the cooling tower\'s recirculating loop to treat the entire system',
    background: 'Both the cooling tower and dephlegmator were experiencing scale buildup that was negatively affecting temperature and flow rates critical to the distilling process. Current chemical treatment was struggling to keep scale accumulation under control. The system also suffered from biological problems. The dephlegmator is located at the furthest point in the recirculating loop from the cooling tower.',
    successFactors: [
      'Prevent new scale formation in the dephlegmator and cooling tower',
      'Soften and remove existing limescale deposits',
      'Reduce biological problems in the recirculating water system'
    ],
    results: [
      'Dephlegmator – After just 7 weeks: no new scale formed, and existing scale was noticeably softer and thinner without any chemical or mechanical cleaning.',
      'Cooling Tower Nozzles – After 6 months: both newly replaced (tan) and original (black) nozzles showed no new scale accumulation. The original black nozzles also showed removal of existing scale.',
      'Biofilm on infrastructure surfaces and in the recirculating water significantly decreased.',
      'Chemical treatment that was previously struggling to control scale was complemented and outperformed by HydroFLOW alone.'
    ],
    pdfUrl: 'https://pdf.hydroflow-usa.com/HydroFLOW Case Study - Kentucky Distillery - Cooling tower and heat exchanger - Limescale reduction.pdf'
  },

  'city-of-orlando-wastewater-treatment-plant': {
    category: 'industrial',
    title: 'City of Orlando Wastewater Treatment Plant',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/cfc5e2a1a_image.png',
    installer: 'Allied Group – HydroFLOW distributor in Florida',
    customer: 'City of Orlando Wastewater Treatment Plant, 5100 LB McLeod Rd., Orlando, FL 32811',
    application: 'Struvite accumulation in belt press #5 (AshBrook-Klam press)',
    installedUnits: 'HydroFLOW 12" custom water conditioner — installed November 23, 2013',
    background: 'The belt presses at the City of Orlando Wastewater Treatment Plant suffer from severe Struvite (NH₄MgPO₄•6H₂O) scale accumulation which greatly impedes the equipment\'s productivity and effectiveness. The plant\'s management team decided to evaluate HydroFLOW\'s ability to relieve the problem on belt press #5 over a five-month period (November 2013 – April 2014). The belt press has two belts, two meters wide. Polymer is automatically dosed using a custom-made anionic polymer injection system.',
    successFactors: [
      'Main: Prevent new Struvite scale accumulation and gradually remove existing Struvite deposits',
      'Secondary: Reduce polymer usage due to better belt press operating efficiency with Struvite scale removed and enhanced floc formation'
    ],
    results: [
      'HydroFLOW prevented Struvite scale accumulation and gradually removed existing Struvite scale deposits over 150 days — without any chemical or mechanical scale removal.',
      'Drum: Before – hard scale with bridged-over holes. After 150 days – minimal scale remaining.',
      'Side of drum: Before – hard scale. After 150 days – very little scale; no chemical or mechanical scale removal performed.',
      'Pan: Before – 5mm of hard scale. After 150 days – only 1mm of brittle scale remains.',
      'Average polymer usage per day reduced by approximately 20% due to HydroFLOW\'s ability to enhance the flocculation of suspended solids.'
    ],
    pdfUrl: 'https://pdf.hydroflow-usa.com/HydroFLOW-industrial-case-study-city-of-orlando-wastewater-treatment-plant.pdf'
  },

  // --- Newly added case studies ---

  'antares-reduced-chemical-usage': {
    category: 'marine',
    title: 'Antares - Reduced Chemical Usage',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/bac4313f7_image.png',
    installer: 'Hydropath Marine',
    customer: 'Antares Shipping LTD',
    application: 'Fresh Water Generator',
    background: 'Their vessels were experiencing issues with limescale on the titanium plates inside the fresh water generator. This scale accumulation caused problems with the fresh water production onboard, and increased their maintenance costs.',
    results: [
      'Scale, bio, and corrosion completely reduced since HM units were installed.',
      'Increased efficiency of the freshwater generator systems.',
      'Lower maintenance costs fleet-wide.',
      '"We recommend to any shipping manager and/or owner to install a Hydropath Marine unit on their freshwater generator."'
    ],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/d0deae4aa_25151493825669.pdf'
  },

  'maritime-reporter-magazine-article': {
    category: 'marine',
    title: 'Maritime Reporter - Magazine Article',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/8076e1b04_image.png',
    application: 'Marine vessel water treatment — scale, bacteria, algae, and biofouling',
    background: 'Shipowners seeking to combat the harmful effects of lime scale, bacteria, algae and biofouling inside their vessels\' various water systems can use Hydropath Marine, a chemical-free technology for onboard water treatment. The patented Hydropath technology, which uses electrical signals to kill algae and bacteria, was initially developed in the early \'90s to treat lime scale within the home, but has since been developed for a dozen different product ranges for both land-based and marine applications.',
    results: [
      'Chemical-free solution to combat lime scale, bacteria, algae and biofouling in ships\' water systems.',
      'Proven performance across numerous marine vessel applications.',
      'Recognized and featured in Maritime Reporter & Engineering News.'
    ],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/55664d73c_42891495128176.pdf'
  },

  'mv-detroit-express-freshwater-generator': {
    category: 'marine',
    title: 'MV Detroit Express - Freshwater Generator',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/6cba0dd95_image.png',
    installer: 'Hydropath Marine',
    customer: 'Anglo Eastern Ship Management Ltd.',
    application: 'Fresh Water Generator',
    background: 'Before the installation of Hydropath Marine units, the vessel\'s crew carried out CIP cleaning every 10-12 days. After installation, only 5 CIP cleanings were reported over a full 12-month period.',
    results: [
      'CIP cleaning frequency reduced from every 10-12 days to only 5 times in 12 months.',
      'Soft scale found on heat exchanger plates during cleaning — easy to remove without chemicals.',
      'Significant reduction in maintenance labor and downtime.'
    ],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/d7c9e58bd_59521643224356.pdf'
  },

  'mv-hoegh-america-freshwater-generator': {
    category: 'marine',
    title: 'MV Hoegh America - Freshwater Generator',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/ae70b79b0_88651495664646.jpg',
    installer: 'Hydropath Marine',
    customer: 'Ray Car Carrier Ltd. – MV Hoegh America',
    application: 'Fresh Water Generator (FWG)',
    installedUnits: 'Hydropath Marine HM-100',
    background: 'They were looking for a solution to lower their maintenance costs, equipment damage and chemical usage on their Fresh Water Generator due to scaling and bio issues. After six months of using the Hydropath Marine system on the FWG, the customer noticed great improvements. Normally, fresh water production reduces over time due to clogged passages from hard limescale accumulation on the plates.',
    results: [
      'Great reduction in maintenance costs, equipment damage, and chemical usage after six months.',
      'No decrease in fresh water production throughout the six-month period.',
      'Scale-free passages maintained — no clogging from limescale buildup.',
      '"It clearly demonstrated that this method of water treatment greatly reduces maintenance costs, equipment damage and chemical usage."'
    ],
    pdfUrl: 'https://pdf.hydroflow-usa.com/27281493847919.pdf'
  },

  'aquavet-clinical-evaluation-phase-2': {
    category: 'agriculture',
    title: 'Phase 2 - Aquavet Clinical Evaluation Gyrodactylus Spp',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/123e77e92_15341495670660-400x400.jpg',
    customer: 'AquaVet Technologies Ltd.',
    application: 'Recirculating tilapia tanks — parasite transmission control',
    installedUnits: 'HydroFLOW i60 unit',
    background: 'Three large tanks (10 cubic meters each) were recirculated for 45 days. Tank 3 (disease reservoir) was stocked with 200 Hybrid Tilapia with heavy parasite presence. Water was recirculated between tank 3 and tank 4 continuously, with all incoming water to tank 4 disinfected by the HydroFLOW system. Tank 2 received untreated water from tank 3 as a control.',
    successFactors: ['Prevent transmission of Gyrodactylus spp. parasites', 'Improve tilapia survival rate', 'Reduce morbidity and mortality rates'],
    results: [
      'During 45 days of observation, overall survival rate in HydroFLOW-treated tank was considerably higher compared to control tanks.',
      'Tilapia in HydroFLOW-treated tank exhibited improved health status with lower Gyrodactylus infection levels during the first 30–40 days.',
      'HydroFLOW water disinfection system was effective in preventing transmission of parasitic infection.'
    ],
    pdfUrl: 'https://pdf.hydroflow-usa.com/49361493939834.pdf'
  },

  'hydroflow-optimizes-performance-apple-flume': {
    category: 'agriculture',
    title: 'HydroFLOW Optimizes Performance - Apple Packing Flume',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/9edfa037e_Apples.jpeg',
    installer: 'HydroFLOW West',
    customer: 'Apple packing facility, US Pacific Northwest',
    application: 'T-Dump flume and treatment tank — chlorine reduction and microbial control',
    installedUnits: 'HydroFLOW industrial unit on 6-inch recirculation pipe',
    background: 'This facility packs conventional and organic apples using a single packing line and wanted to reduce chemical usage while minimizing food safety risks from bacteria (E. coli, Listeria) and decay-causing mold. Despite treatment of the T-Dump flume with 80 ppm of PAA, the measured levels of total aerobic bacteria and total fungi were high (10³–10⁷ CFU/mL each).',
    successFactors: ['Dramatically reduce bacteria and fungi counts', 'Reduce chlorine dosage while maintaining food safety', 'Support organic packing line operations'],
    results: [
      'Once the HydroFLOW signal was initiated, there was a dramatic decrease in both bacteria and fungi — from 10³–10⁷ to 10¹–10³ CFU/mL.',
      'Chlorine dose was reduced to as low as 10 ppm Total Chlorine with non-detect microbial results.',
      'Free Chlorine and Total Chlorine levels were exactly the same, indicating full chlorine effectiveness.',
      'Reduced chemical usage while maintaining food safety standards for conventional and organic apple packing.'
    ],
    pdfUrl: 'https://pdf.hydroflow-usa.com/75021533661595.pdf'
  },

  'select-cooling-tower-chiller-plant-case-studies': {
    category: 'commercial',
    title: 'Select Cooling Tower & Chiller Plant Case Studies',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/5b01fd83c_custom24condencer.png',
    application: 'Cooling towers and chiller plants across multiple commercial and industrial facilities',
    background: 'This document provides an overview of how HydroFLOW optimizes cooling towers and chiller systems across a variety of facility types. HydroFLOW increases overall heat transfer efficiency by reducing scale and biofilm deposits, reduces the use of anti-scalant, anti-corrosive and biocide chemicals, lessens water usage by allowing cooling systems to operate at higher conductivity, and extends the service life of equipment.',
    successFactors: [
      'Increases overall heat transfer efficiency by reducing scale and biofilm deposits',
      'Reduces the use of anti-scalant, anti-corrosive and biocide chemicals',
      'Lessens water usage by allowing cooling systems to operate at higher conductivity',
      'Extends service life of equipment'
    ],
    results: [
      'LEED Gold Certified Building (Fortune 100 HQ, Houston, TX): 85% blow-down water reduction (exceeded 50% goal), 75% chemical reduction, 50% reduction in maintenance frequency, 10% reduction in energy consumption. "HydroFLOW significantly improved the operation of our cooling system, in terms of cost and maintenance. This technology pays for itself with the monthly savings it attains." — Facilities Manager',
      'Power Station Cooling Tower (500 MW, U.S. Midwest): 48% blow-down water reduction (~60 million gallons/year), 74% reduction of scale & corrosion inhibitor chemicals, 73% reduction in biocide & dechlorinator chemicals, no indication of scale or biofilm during inspections. "The cooling tower fill was one of the cleanest he had ever seen." — Project Manager',
      'Business Complex Cooling Towers (Atlanta, GA): CFU/ml count dropped to under 1,000 within days (from 100,000 target of under 10,000). Reduced scale and biofilm in cooling tower and chiller tubes. ROI of roughly six months. Multiple HydroFLOW devices subsequently installed throughout the complex.',
      'Hotel Cooling Tower (Oahu, HI): Scale accumulation stopped immediately after installation; anti-scalant and anti-corrosive chemicals fully discontinued after 1.5 months; biocide reduced 75% with minimal bacteria counts; bleed/blow-down reduced by 50%; chiller efficiency maintained.',
      'Hospital Cooling Tower: After 5 months chemical-free, no hard scale accumulation; Heterotrophic biological count well under 1,000 CFU/ml; chiller operating more efficiently due to scale and biofilm removal. Loose mineral deposits collect in sump instead of as hard scale inside pipes and equipment.',
      'Casino Chiller Plant: Conductivity increased from 1,750 to 3,500 µS/cm (greatly reducing water usage); anti-scalant and anti-corrosive chemicals discontinued after 12 weeks; biocide reduced by 75%; bacteria counts under 1,000 CFU/ml; 15-month payback period.',
      'U.S. Air Force Base Cooling Tower: No industrial water treatment chemicals used for 9–10 months of operation. All scale removed; no bio-fouling or return of scale since chemical removal. Loose mud-like material (instead of hard scale) easily removed with a garden hose.',
      'Medical Center Cooling Tower: Cooling tower and chillers maintained within industry standards while reducing chemicals and blowdown water; biocide reduced 75% with CFU/ml under 1,000; greatly reduced chance of Legionnaires\' disease outbreak; blow-down reduced by over 65%; payback period under two years.'
    ],
    pdfUrl: 'https://pdf.hydroflow-usa.com/34751665504234.pdf'
  },

  'high-end-resort-new-mexico': {
    category: 'commercial',
    title: 'High-End Resort in New Mexico',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/adadb5eb6_image.png',
    installer: 'New Water Innovations (HydroFLOW Southwest)',
    customer: 'Premium resort in Santa Fe, New Mexico, USA',
    application: 'Water heaters (64 casitas), pools, hot tubs, well, and cooling tower',
    installedUnits: 'Initial evaluation: 2 x HydroFLOW s38 units; Full installation: HydroFLOW i Range units on the well and cooling tower, plus units on pools and hot tubs',
    background: 'The resort operates its own well and wastewater facility. The water is extremely hard (54 Grain Per Gallon or 923 Parts Per Million), causing significant maintenance issues. With 64 casitas each having its own water heater, the resort was spending roughly $15,000 annually on water heater maintenance. Water softeners were not installed due to their potentially negative environmental impact on the biological balance of their wastewater facility. A local HydroFLOW distributor, New Water Innovations, conducted a proof-of-concept trial with 2 small-commercial s38 units. After 4 months, results showed a great reduction of scale buildup on the heating elements.',
    successFactors: [
      'Proof-of-concept trial with 2 s38 small-commercial units demonstrated scale reduction in 4 months',
      'Results led to full installation of i Range units on well, cooling tower, pools, and hot tubs',
      'Resort owner contracted New Water Innovations to install HydroFLOW equipment in other resorts'
    ],
    results: [
      'Great reduction of scale buildup on water heater heating elements after 4-month trial.',
      'Product evaluation led to the sale of large commercial units on pools, hot tubs, wells and cooling towers.',
      'The installed equipment has been performing per the customer\'s expectations for over 8 years.',
      'Resort owner contracted New Water Innovations to install HydroFLOW equipment in other resorts.'
    ],
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/43aea60d6_HydroFLOW-commercial-case-study-high-end-resort-in-new-mexico.pdf'
  },

  'daf-packaging-facility-houston-texas': {
    category: 'industrial',
    title: 'Dissolved Air Flotation (DAF) Packaging Facility in Houston, Texas',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/97a9e1399_image.png',
    customer: 'Packaging facility in Houston, Texas specializing in recycled plastic products (PCR post-consumer resins and plastic sheeting)',
    application: 'Dissolved Air Flotation (DAF) system — 6" wastewater circulating pipe entering the flotation tank',
    installedUnits: 'HydroFLOW i150 water conditioning device installed on the 6" wastewater circulating pipe entering the DAF tank',
    background: 'The packaging facility\'s plastic products are made from recycled plastic bags and plastic bottles, transformed into certified PCR (post-consumer resins) and plastic sheeting. Their eco-friendly mindset made HydroFLOW a perfect water treatment solution. A 14-week product evaluation was conducted to determine if a HydroFLOW i150 device could optimize the performance of the DAF process. A DAF system clarifies wastewater by removing suspended material such as oils and solids — releasing air at atmospheric pressure to form tiny bubbles that float suspended matter to the surface for skimming.',
    successFactors: [
      'Improve the recirculating wastewater\'s murky appearance',
      'Reduce the strong foul odor of microbial contaminants',
      'Reduce chlorine and polymer dosing',
      'Reduce maintenance costs by extending the equipment\'s cleaning cycle'
    ],
    results: [
      '~50% reduction in polymer and chlorine dosing.',
      'Foul odor and chlorine-smell reduced dramatically.',
      'Equipment cleaning cycle (including water replacement) extended from 1 week to 6 weeks, allowing significant water savings.',
      'More efficient total suspended solids (TSS) separation, leading to increased TSS removal and cleaner water.',
      'Sludge was drier (resembled "cake" material), making it lighter and less expensive to dispose.'
    ],
    pdfUrl: 'https://pdf.hydroflow-usa.com/HydroFLOW Product Evaluation - Dissolved Air Flotation (DAF).pdf'
  },

  'third-party-verification-tulsa-southside': {
    category: 'industrial',
    title: 'Third Party Verification Report - Tulsa Southside WWTP',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/342534db1_image.png',
    installer: 'HydroTech Solutions, Inc. (regional HydroFLOW USA representative)',
    customer: 'Tulsa Southside Wastewater Treatment Plant, Tulsa, Oklahoma',
    application: 'Belt filter presses — struvite scale control',
    installedUnits: 'HydroFLOW I Range unit installed on the 6-inch diameter pump discharge pipe (ductile iron) feeding one of the Andritz BFPs, approximately 50 feet upstream of the BFP',
    background: 'The Southside WWTP, one of four wastewater treatment plants serving Tulsa, is designed for 42 mgd and treats an average flow of 20 mgd. The plant had been battling struvite scale buildup on each of five belt filter presses. Scale removal was required frequently and was labor-intensive, entailing the use of high-pressure (3,500 psi) water to loosen and remove small pieces of scale at a time. The WWTP and HydroFLOW USA signed a memorandum of understanding to conduct a 90-day product evaluation. An independent third-party technology verification was conducted by Samuel Jeyanayagam, PhD, PE, WEF Fellow of CH2M.',
    successFactors: [
      'Prevent formation of new struvite scale on belt filter press drum surfaces',
      'Soften existing struvite scale deposits to reduce labor-intensive cleaning',
      'Validate effectiveness with independent third-party verification by PhD engineer and WEF Fellow',
      'Demonstrate feasibility for plant-wide installation across all 5 belt filter presses'
    ],
    results: [
      'The cleaned section of the drum showed no new scale formation during the entire 90-day test period.',
      'Areas with heavy struvite encrustation at the start of the test had noticeably thinned by the end.',
      'Some areas could be scraped to bare metal with a paint scraper — which was not possible before HydroFLOW.',
      'Scale was removed in 3–4 inch diameter pieces using a power washer, far less labor-intensive than routine 3,500 psi high-pressure cleaning.',
      'Based on the positive results, the Southside WWTP designated funding to purchase a large custom HydroFLOW unit to treat the common header feeding all 5 belt filter presses.',
      'Verified by independent engineer: Samuel Jeyanayagam, PhD, PE, WEF Fellow / CH2M.'
    ],
    pdfUrl: 'https://Pdf.hydroflow-usa.com/HydroFLOW-industrial-third-party-verification-report-tulsa-southside-WWTP.pdf'
  },

  'third-party-verification-augusta-georgia': {
    category: 'industrial',
    title: 'Third Party Verification Report - Augusta, Georgia',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/22c5337a7_image.png',
    installer: 'Southeast Pump and Equipment (regional HydroFLOW USA representative)',
    customer: 'J.B. Messerly Water Pollution Control Plant, Augusta, Georgia',
    application: 'Belt filter presses — struvite scale control',
    installedUnits: 'HydroFLOW Model 160i on the 6-inch sludge feed line to one of the belt filter presses',
    background: 'The J.B. Messerly Water Pollution Control Plant (WPCP), designed for 46 mgd and treating an average of 20 mgd, experienced struvite scale buildup on its two belt filter presses (BFPs). Scale control had been accomplished with an anti-scalant at an approximate cost of $4,000 per month. The Augusta WPCP and HydroFLOW USA signed a memorandum of understanding to conduct a 90-day product evaluation — which extended to approximately six months — to determine the effectiveness of Hydropath technology in mitigating scale formation. An independent third-party technology verification was conducted by Samuel Jeyanayagam, PhD, PE, WEF Fellow of Jacobs Engineering.',
    successFactors: [
      'Eliminate $4,000/month anti-scalant chemical usage',
      'Soften and remove existing hard struvite scale from belt filter presses',
      'Reduce labor-intensive scale removal requiring chisels and hammers',
      'Independent third-party validation by PhD engineer and WEF Fellow'
    ],
    results: [
      'HydroFLOW allowed the WPCP to eliminate the use of anti-scalant chemical entirely, realizing cost savings of approximately $4,000 per month.',
      'Existing hard scale — previously requiring chisels and hammers to remove — became soft and was easily removed by spraying with high-pressure water.',
      'Calculated Return On Investment (ROI) was under eight months on chemical savings alone — not including savings from reduced maintenance labor, minimized process downtime, and longer equipment life.',
      'When the drum was removed for repairs after a mechanical failure, scale was easily washed off with high-pressure water. The operator attributed this solely to HydroFLOW, as the only operational change was the use of HydroFLOW and reduction of anti-scalant.',
      'The cost of repairing the drum was offset by the savings in anti-scalant — without impacting the plant\'s O&M budget.',
      'Oscilloscope measurement confirmed the Hydropath signal traveled to both BFPs via a pipe bypass, treating both belt filter presses with a single unit.',
      'The plant\'s operating staff concluded the trial was a resounding success.',
      'Verified by independent engineer: Samuel Jeyanayagam, PhD, PE, WEF Fellow / Jacobs Engineering.'
    ],
    pdfUrl: 'https://Pdf.hydroflow-usa.com/HydroFLOW-industrial-third-party-verification-report-Augusta-Georgia-WWTP.pdf'
  },

  'industrial-wastewater-treatment-multi-site': {
    category: 'industrial',
    title: 'Industrial Wastewater Treatment – Multi-Site Presentation',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/5c2ee3b85_image.png',
    installer: 'HydroFLOW USA',
    customer: 'Multiple municipal and industrial wastewater treatment facilities across the United States',
    application: 'Struvite scale control, polymer reduction, and dewatering optimization across belt presses, centrifuges, and centrate conveyance systems',
    installedUnits: 'Various HydroFLOW i Range units installed at each facility',
    background: 'This presentation documents HydroFLOW\'s expanding role in the wastewater sector across six facilities. The technology uses Hydropath\'s patented ±150kHz electrical signal to treat mineral scale (primarily struvite) and enhance flocculation in wastewater treatment processes. Facilities evaluated include: Walla Walla WA (belt press), Orlando FL (belt press), Somersworth NH (centrifuge), St. Paul MN (centrate line), Lehigh County PA (belt press), London OH (belt press), Blue Plains Advanced WTP in Washington D.C. (flow meters), and Rockland County NY (centrifuge discharge system). Each evaluation confirmed HydroFLOW\'s ability to soften and remove existing struvite deposits while preventing new accumulation — without chemicals, manual labor, or mechanical intervention.',
    successFactors: [
      'Reduce struvite accumulation on belt presses, centrifuges, and centrate lines',
      'Decrease polymer consumption in dewatering operations',
      'Extend intervals between manual cleaning and system shutdowns',
      'Validate technology across a diverse range of WWTP configurations and scale types'
    ],
    results: [
      'Walla Walla, WA: After 8 weeks, no new accumulation on the treated section; existing struvite gradually removed — previously required chiseling, now washes off with regular water pressure.',
      'Orlando, FL: Struvite scale prevented and removed over 150 days on belt press #5; ~20% average daily polymer reduction due to enhanced flocculation.',
      'Somersworth, NH: 25.1% reduction in polymer usage (from 25.5 to 19.1 lbs/ton) across six testing sequences; cake solids increased by up to 3% TS.',
      'St. Paul, MN: After 6 months on main centrate line, pipes were flushed and opened — hard struvite deposits were cleared, with outstanding results confirmed.',
      'Lehigh County, PA: Struvite removal noticeable within 8 days; existing deposits softening and easier to clean.',
      'London, OH: Struvite removed from belt press without chemical, manual, or mechanical assistance; large pieces coming off the first roller and wash box within one week.',
      'Blue Plains, Washington D.C.: HydroFLOW-treated flow meter showed 2–3mm scale vs. 5mm on untreated meter after comparable runtimes (~2,000 hours); all electrodes remained visible on treated meter.',
      'Rockland County, NY: Struvite cleaning interval on centrifuge discharge system extended far beyond the target of doubling from 2 to 4 weeks — results greatly exceeded expectations.'
    ],
    pdfUrl: 'https://Pdf.hydroflow-usa.com/HydroFLOW-industrial-wastewater-presentation.pdf'
  },

};

export default function CaseStudyDetail() {
  const [searchParams] = useSearchParams();
  const slug = searchParams.get('slug');
  const study = caseStudyData[slug];

  // Special PDF-only case studies (from database, not in static data)
  const pdfOnlyStudies = {
    'hydroflow-kitchen-innovations-award-2015': {
      title: 'HydroFLOW Awarded the Prestigious Kitchen Innovations Award',
      category: 'commercial',
      pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/84b4b0e3b_HydroFLOW-commercial-referral-letter-2015-KI-awards.pdf'
    }
  };

  if (!study) {
    const pdfStudy = pdfOnlyStudies[slug];
    if (pdfStudy) {
      return (
        <div className="min-h-screen pt-32 pb-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to={createPageUrl('CaseStudies') + '?category=commercial'} className="inline-flex items-center text-cyan-600 hover:text-cyan-700 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Commercial Case Studies
            </Link>
            <h1 className="text-3xl font-bold text-slate-900 mb-8"><em style={{fontStyle:'italic'}}>Hydro</em>FLOW Awarded the Prestigious Kitchen Innovations Award</h1>
            <Card className="p-6 bg-gradient-to-br from-cyan-50 to-white border-cyan-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Referral Letter</h3>
                    <p className="text-sm text-slate-600">Download the complete PDF</p>
                  </div>
                </div>
                <a href={pdfStudy.pdfUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">View PDF</Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      );
    }

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
              {study.title.split('HydroFLOW').map((part, idx) => (
                idx === 0 ? part : <span key={idx}><em className="italic not-italic" style={{ fontStyle: 'italic' }}>Hydro</em>FLOW{part}</span>
              ))}
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
                    className={`w-full object-cover ${slug === 'st-helena-hospital-ice-machine' ? 'h-[350px] object-contain bg-white p-8' : 'h-[400px]'}`}
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
                          {slug === 'residential-pool' ? 'Residential Testimonial' : (slug === 'plumbing-contractor' || slug === 'residential-well' || slug === 'residential-dishwasher') ? 'Full Letter' : (slug === 'gold-leed-campus' || slug === 'bakery-steam-boilers' || slug === 'sunrise-childrens-hospital-cooling-tower' || slug === 'st-helena-hospital-ice-machine' || slug === 'penn-state-university' || slug === 'the-melting-pot-restaurant' || slug === 'lehigh-county-wwtp-struvite-treatment') ? 'Referral Letter' : slug === 'gold-gym-lap-pool' ? 'Product Evaluation' : 'Full Case Study Report'}
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
                    <p className="text-slate-600" dangerouslySetInnerHTML={{ __html: study.customer }} />
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
                  <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: study.background }} />
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
              slug === 'city-of-orlando-wastewater-treatment-plant' ||
              slug === 'massive-texas-factory' ||
              slug === 'industrial-wastewater-treatment-multi-site') && (
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