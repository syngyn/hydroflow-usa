Deno.serve(async (req) => {
  const url = new URL(req.url);
  
  // Get slug from query param
  const slug = url.searchParams.get('slug');
  
  if (!slug) {
    return new Response('Not found', { status: 404 });
  }

  const pdfMap = {
    'sludge-line-struvite-treatment': 'https://pdf.hydroflow-usa.com/HydroFLOW-Case-Study-Sludge-Line-Struvite-Treatment-2023.pdf',
    'screw-press-struvite-treatment': 'https://pdf.hydroflow-usa.com/HydroFLOWCaseStudy-ScrewPressStruviteTreatment-2023.pdf',
    'industrial-water-heaters': 'https://pdf.hydroflow-usa.com/HydroFLOWCaseStudy-IndustrialWaterHeaters-2026update.pdf',
    'massive-texas-factory': 'https://pdf.hydroflow-usa.com/HydroFLOW-industrial-case-study-massive-Texas-factory.pdf',
    'water-bath-cooling-system-plastics': 'https://pdf.hydroflow-usa.com/HydroFLOWCaseStudy-WaterBathCoolingSystem-2025.pdf',
    'optimization-steamer-oven': 'https://pdf.hydroflow-usa.com/HydroFLOW-commercial-case-study-optimizes-steamer-ovens-maintenance-cycles-update4292021.pdf',
    'scale-reduction-private-dental-practice': 'https://pdf.hydroflow-usa.com/HydroFLOW-commercial-case-study-private-dental-practice.pdf',
    'scale-reduction-gas-station-convenience-store': 'https://pdf.hydroflow-usa.com/HydroFLOW-commercial-case-study-gas-station-and-convenience-store-chain.pdf',
    'gold-leed-campus': 'https://pdf.hydroflow-usa.com/49731493848513.pdf',
    'bakery-steam-boilers': 'https://pdf.hydroflow-usa.com/39511493849268.pdf',
    'sunrise-childrens-hospital-cooling-tower': 'https://pdf.hydroflow-usa.com/43851493848202.pdf',
    'nellis-air-force-base-cooling-tower': 'https://pdf.hydroflow-usa.com/36111563298950.pdf',
    'city-of-walla-walla-wastewater-plant': 'https://pdf.hydroflow-usa.com/HydroFLOW-industrial-casestudy-city-of-walla-walla-wastewater-plant.pdf',
    'honda-cooling-tower': 'https://pdf.hydroflow-usa.com/85191493939481.pdf',
    'hydroflow-cooling-tower-chiller-installation': 'https://pdf.hydroflow-usa.com/43801662059912.pdf',
    'gold-gym-lap-pool': 'https://pdf.hydroflow-usa.com/84741493847709.pdf',
    'st-helena-hospital-ice-machine': 'https://pdf.hydroflow-usa.com/78241493850010.pdf',
    'penn-state-university': 'https://pdf.hydroflow-usa.com/89611493849814.pdf',
    'the-melting-pot-restaurant': 'https://pdf.hydroflow-usa.com/24351493849401.pdf',
    'sharonville-fire-department': 'https://pdf.hydroflow-usa.com/36171495126964.pdf',
    'scale-and-bio-treatment-in-outdoor-pool': 'https://pdf.hydroflow-usa.com/86361539882313.pdf',
    'premium-car-wash-in-california': 'https://pdf.hydroflow-usa.com/1561563299281.pdf',
    'hotel-hot-water-system': 'https://pdf.hydroflow-usa.com/14241698879790.pdf',
    'office-building-cooling-towers-in-us-southeast': 'https://pdf.hydroflow-usa.com/75341661965067.pdf',
    'select-cooling-tower-chiller-plant-case-studies': 'https://pdf.hydroflow-usa.com/34751665504234.pdf',
    'high-end-resort-new-mexico': 'https://pdf.hydroflow-usa.com/HydroFLOW-commercial-case-study-high-end-resort-in-new-mexico.pdf',
    'coliforms-in-well-water': 'https://pdf.hydroflow-usa.com/25211539882204.pdf',
    'plumbing-contractor': 'https://pdf.hydroflow-usa.com/15281493934433.pdf',
    'product-evaluation-tankless-boiler': 'https://pdf.hydroflow-usa.com/86361495130169.pdf',
    'residential-well': 'https://pdf.hydroflow-usa.com/75351495060345.pdf',
    'residential-complex': 'https://pdf.hydroflow-usa.com/87271493931205.pdf',
    'residential-dishwasher': 'https://pdf.hydroflow-usa.com/31351493931674.pdf',
    'residential-pool': 'https://pdf.hydroflow-usa.com/8651539882719.pdf',
    'residential-tower': 'https://pdf.hydroflow-usa.com/51421493846519.pdf',
    'residential-water-heater': 'https://pdf.hydroflow-usa.com/36311632777095.pdf',
    'municipal-golf-course-in-texas': 'https://pdf.hydroflow-usa.com/68631698880628.pdf',
    'long-stem-rose-growth': 'https://pdf.hydroflow-usa.com/HydroFLOW-agriculture-case-study-long-stem-roses.pdf',
    'hydroflow-reduces-algae-growth': 'https://pdf.hydroflow-usa.com/81121493936806.pdf',
    'food-processing-cooling-tower': 'https://pdf.hydroflow-usa.com/67671539882904.pdf',
    'increased-crop-yield-experiment': 'https://pdf.hydroflow-usa.com/74431493851538.pdf',
    'orchard-scale-on-apples': 'https://pdf.hydroflow-usa.com/271605140596.pdf',
    'aquavet-clinical-evaluation-fish-health': 'https://pdf.hydroflow-usa.com/84961495125171.pdf',
    'aquavet-clinical-evaluation-phase-2': 'https://pdf.hydroflow-usa.com/49361493939834.pdf',
    'hydroflow-reduces-biofilm-baron-farms': 'https://pdf.hydroflow-usa.com/64021494003033.pdf',
    'hydroflow-optimizes-performance-apple-flume': 'https://pdf.hydroflow-usa.com/75021533661595.pdf',
    'us-navy-seafighter': 'https://pdf.hydroflow-usa.com/HydroFLOW-marine-case-study-US-Navy-Seafighter.pdf',
    'mv-hermes-leader-uv-system': 'https://pdf.hydroflow-usa.com/HydroFLOW-marine-case-study-MV-hermes-leader-UV-System.pdf',
    'ray-shipping-fleet-hydropath': 'https://pdf.hydroflow-usa.com/HydroFLOW-marine-referral-letter-ray-shipping-equips-fleet-with-Hydropath.pdf',
    'anglo-eastern-freshwater-generator': 'https://pdf.hydroflow-usa.com/HydroFLOW-marine-referral-letter-anglo-eastern-fresh-water-generator.pdf',
    'car-carrier-main-cooling-system': 'https://pdf.hydroflow-usa.com/009-CaseStudy-CarCarrier.pdf',
    'antares-reduced-chemical-usage': 'https://pdf.hydroflow-usa.com/25151493825669.pdf',
    'maritime-reporter-magazine-article': 'https://pdf.hydroflow-usa.com/42891495128176.pdf',
    'mv-detroit-express-freshwater-generator': 'https://pdf.hydroflow-usa.com/59521643224356.pdf',
    'mv-hoegh-america-freshwater-generator': 'https://pdf.hydroflow-usa.com/27281493847919.pdf',
    'steel-company-spray-bar-system': 'https://pdf.hydroflow-usa.com/HydroFLOW-industrial-case-study-steel-company-spray-bar-system.pdf',
    'biofilm-reduction-referral-letter': 'https://pdf.hydroflow-usa.com/61401638211314.pdf',
    'lehigh-county-wwtp-struvite-treatment': 'https://pdf.hydroflow-usa.com/HydroFLOW-industrial-referral-letter-lehigh-county-wastewater-treatment-plant.pdf',
    'paper-mill-liquor-lines': 'https://pdf.hydroflow-usa.com/46101493933705.pdf',
    'cmc-concrete-report': 'https://pdf.hydroflow-usa.com/4171495131909.pdf',
    'inland-power-plant-in-china': 'https://pdf.hydroflow-usa.com/83871498261386.pdf',
    'power-station-steam-condenser': 'https://pdf.hydroflow-usa.com/39691493939531.pdf',
    'natural-gas-and-oil-producer': 'https://pdf.hydroflow-usa.com/1431539882593.pdf',
    'wastewater-treatment-plant-in-ohio': 'https://pdf.hydroflow-usa.com/HydroFLOW-industrial-case-stury-wastewater-treatment-plant-in-ohio.pdf',
    '60-hp-low-pressure-steam-boiler': 'https://pdf.hydroflow-usa.com/88201550515726.pdf',
    'third-party-verification-denver': 'https://pdf.hydroflow-usa.com/46231506637483.pdf',
    'hydroflow-kitchen-innovations-award-2015': 'https://pdf.hydroflow-usa.com/HydroFLOW-commercial-referral-letter-2015-KI-awards.pdf',
  };

  const pdfUrl = pdfMap[slug];

  if (!pdfUrl) {
    return new Response('PDF not found', { status: 404 });
  }

  // Fetch and proxy the PDF
  const response = await fetch(pdfUrl);

  if (!response.ok) {
    return new Response('Failed to fetch PDF', { status: 502 });
  }

  const pdfBuffer = await response.arrayBuffer();

  return new Response(pdfBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="${slug}.pdf"`,
      'Cache-Control': 'public, max-age=86400',
    }
  });
});