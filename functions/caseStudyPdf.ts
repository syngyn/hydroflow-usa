Deno.serve(async (req) => {
  const url = new URL(req.url);
  
  // Get slug from query param or request body
  let slug = url.searchParams.get('slug');
  
  if (!slug) {
    try {
      const body = await req.json();
      slug = body.slug;
    } catch {}
  }

  if (!slug) {
    return new Response('Not found', { status: 404 });
  }

  const pdfMap = {
    'sludge-line-struvite-treatment': 'https://pdf.hydroflow-usa.com/a913379ff_HydroFLOW-Case-Study-Sludge-Line-Struvite-Treatment-2023.pdf',
    'screw-press-struvite-treatment': 'https://pdf.hydroflow-usa.com/8199139ff_HydroFLOWCaseStudy-ScrewPressStruviteTreatment-2023.pdf',
    'industrial-water-heaters': 'https://pdf.hydroflow-usa.com/ca3b1534f_HydroFLOWCaseStudy-IndustrialWaterHeaters-2026update.pdf',
    'massive-texas-factory': 'https://pdf.hydroflow-usa.com/46e80b0d5_HydroFLOW-industrial-case-study-massive-Texas-factory.pdf',
    'water-bath-cooling-system-plastics': 'https://pdf.hydroflow-usa.com/4dfb56b8e_HydroFLOWCaseStudy-WaterBathCoolingSystem-2025.pdf',
    'optimization-steamer-oven': 'https://pdf.hydroflow-usa.com/58625dd97_HydroFLOW-commercial-case-study-optimizes-steamer-ovens-maintenance-cycles-update4292021.pdf',
    'scale-reduction-private-dental-practice': 'https://pdf.hydroflow-usa.com/f111e4bbc_HydroFLOW-commercial-case-study-private-dental-practice.pdf',
    'scale-reduction-gas-station-convenience-store': 'https://pdf.hydroflow-usa.com/6a0a3a88e_HydroFLOW-commercial-case-study-gas-station-and-convenience-store-chain.pdf',
    'gold-leed-campus': 'https://pdf.hydroflow-usa.com/6b4d951ac_49731493848513.pdf',
    'bakery-steam-boilers': 'https://hydroflow-usa.com/assets/files/39511493849268.pdf',
    'sunrise-childrens-hospital-cooling-tower': 'https://pdf.hydroflow-usa.com/2e4f96be4_43851493848202.pdf',
    'nellis-air-force-base-cooling-tower': 'https://pdf.hydroflow-usa.com/19ebf3134_36111563298950.pdf',
    'city-of-walla-walla-wastewater-plant': 'https://pdf.hydroflow-usa.com/1fce46dec_HydroFLOW-industrial-casestudy-city-of-walla-walla-wastewater-plant.pdf',
    'honda-cooling-tower': 'https://hydroflow-usa.com/assets/files/85191493939481.pdf',
    'hydroflow-cooling-tower-chiller-installation': 'https://hydroflow-usa.com/assets/files/43801662059912.pdf',
    'gold-gym-lap-pool': 'https://pdf.hydroflow-usa.com/e652e79b5_84741493847709.pdf',
    'st-helena-hospital-ice-machine': 'https://pdf.hydroflow-usa.com/f9aac3d6d_78241493850010.pdf',
    'penn-state-university': 'https://pdf.hydroflow-usa.com/8509b0567_89611493849814.pdf',
    'the-melting-pot-restaurant': 'https://pdf.hydroflow-usa.com/67a5d889d_24351493849401.pdf',
    'sharonville-fire-department': 'https://hydroflow-usa.com/assets/files/36171495126964.pdf',
    'scale-and-bio-treatment-in-outdoor-pool': 'https://pdf.hydroflow-usa.com/7099a60ae_86361539882313.pdf',
    'premium-car-wash-in-california': 'https://pdf.hydroflow-usa.com/ac84c7ab9_1561563299281.pdf',
    'hotel-hot-water-system': 'https://hydroflow-usa.com/assets/files/14241698879790.pdf',
    'office-building-cooling-towers-in-us-southeast': 'https://hydroflow-usa.com/assets/files/75341661965067.pdf',
    'select-cooling-tower-chiller-plant-case-studies': 'https://pdf.hydroflow-usa.com/230e147e6_34751665504234.pdf',
    'high-end-resort-new-mexico': 'https://pdf.hydroflow-usa.com/43aea60d6_HydroFLOW-commercial-case-study-high-end-resort-in-new-mexico.pdf',
    'coliforms-in-well-water': 'https://hydroflow-usa.com/assets/files/25211539882204.pdf',
    'plumbing-contractor': 'https://hydroflow-usa.com/assets/files/15281493934433.pdf',
    'product-evaluation-tankless-boiler': 'https://hydroflow-usa.com/assets/files/86361495130169.pdf',
    'residential-well': 'https://hydroflow-usa.com/assets/files/75351495060345.pdf',
    'residential-complex': 'https://hydroflow-usa.com/assets/files/87271493931205.pdf',
    'residential-dishwasher': 'https://hydroflow-usa.com/assets/files/31351493931674.pdf',
    'residential-pool': 'https://pdf.hydroflow-usa.com/f5d89f1a9_8651539882719.pdf',
    'residential-tower': 'https://pdf.hydroflow-usa.com/5cdf053f0_51421493846519.pdf',
    'residential-water-heater': 'https://pdf.hydroflow-usa.com/ce74fda09_36311632777095.pdf',
    'municipal-golf-course-in-texas': 'https://pdf.hydroflow-usa.com/7dc3c0ccd_68631698880628.pdf',
    'long-stem-rose-growth': 'https://pdf.hydroflow-usa.com/1da5d4765_HydroFLOW-agriculture-case-study-long-stem-roses.pdf',
    'hydroflow-reduces-algae-growth': 'https://hydroflow-usa.com/assets/files/81121493936806.pdf',
    'food-processing-cooling-tower': 'https://pdf.hydroflow-usa.com/60ba6ffc2_67671539882904.pdf',
    'increased-crop-yield-experiment': 'https://hydroflow-usa.com/assets/files/74431493851538.pdf',
    'orchard-scale-on-apples': 'https://pdf.hydroflow-usa.com/558f293df_271605140596.pdf',
    'aquavet-clinical-evaluation-fish-health': 'https://hydroflow-usa.com/assets/files/84961495125171.pdf',
    'aquavet-clinical-evaluation-phase-2': 'https://hydroflow-usa.com/assets/files/49361493939834.pdf',
    'hydroflow-reduces-biofilm-baron-farms': 'https://hydroflow-usa.com/assets/files/64021494003033.pdf',
    'hydroflow-optimizes-performance-apple-flume': 'https://hydroflow-usa.com/assets/files/75021533661595.pdf',
    'us-navy-seafighter': 'https://pdf.hydroflow-usa.com/b06911af1_HydroFLOW-marine-case-study-US-Navy-Seafighter.pdf',
    'mv-hermes-leader-uv-system': 'https://pdf.hydroflow-usa.com/e5384d360_HydroFLOW-marine-case-study-MV-hermes-leader-UV-System.pdf',
    'ray-shipping-fleet-hydropath': 'https://pdf.hydroflow-usa.com/08ad97990_HydroFLOW-marine-referral-letter-ray-shipping-equips-fleet-with-Hydropath.pdf',
    'anglo-eastern-freshwater-generator': 'https://pdf.hydroflow-usa.com/c82419f45_HydroFLOW-marine-referral-letter-anglo-eastern-fresh-water-generator.pdf',
    'car-carrier-main-cooling-system': 'https://pdf.hydroflow-usa.com/56fb596c1_009-CaseStudy-CarCarrier.pdf',
    'antares-reduced-chemical-usage': 'https://pdf.hydroflow-usa.com/d0deae4aa_25151493825669.pdf',
    'maritime-reporter-magazine-article': 'https://pdf.hydroflow-usa.com/55664d73c_42891495128176.pdf',
    'mv-detroit-express-freshwater-generator': 'https://pdf.hydroflow-usa.com/d7c9e58bd_59521643224356.pdf',
    'mv-hoegh-america-freshwater-generator': 'https://hydroflow-usa.com/assets/files/27281493847919.pdf',
    'steel-company-spray-bar-system': 'https://pdf.hydroflow-usa.com/b98089f6f_HydroFLOW-industrial-case-study-steel-company-spray-bar-system.pdf',
    'biofilm-reduction-referral-letter': 'https://hydroflow-usa.com/assets/files/61401638211314.pdf',
    'lehigh-county-wwtp-struvite-treatment': 'https://pdf.hydroflow-usa.com/6932f7838_HydroFLOW-industrial-referral-letter-lehigh-county-wastewater-treatment-plant.pdf',
    'paper-mill-liquor-lines': 'https://pdf.hydroflow-usa.com/75593b140_46101493933705.pdf',
    'cmc-concrete-report': 'https://pdf.hydroflow-usa.com/968133043_4171495131909.pdf',
    'inland-power-plant-in-china': 'https://hydroflow-usa.com/assets/files/83871498261386.pdf',
    'power-station-steam-condenser': 'https://pdf.hydroflow-usa.com/140559cdb_39691493939531.pdf',
    'natural-gas-and-oil-producer': 'https://pdf.hydroflow-usa.com/9df77444d_1431539882593.pdf',
    'wastewater-treatment-plant-in-ohio': 'https://pdf.hydroflow-usa.com/97d3f55c2_HydroFLOW-industrial-case-stury-wastewater-treatment-plant-in-ohio.pdf',
    '60-hp-low-pressure-steam-boiler': 'https://pdf.hydroflow-usa.com/d33c208a5_88201550515726.pdf',
    'third-party-verification-denver': 'https://hydroflow-usa.com/assets/files/46231506637483.pdf',
    'hydroflow-kitchen-innovations-award-2015': 'https://pdf.hydroflow-usa.com/84b4b0e3b_HydroFLOW-commercial-referral-letter-2015-KI-awards.pdf',
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
  const base64 = btoa(String.fromCharCode(...new Uint8Array(pdfBuffer)));

  return Response.json({ base64, filename: `${slug}.pdf` });
});