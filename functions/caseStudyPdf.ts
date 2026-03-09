Deno.serve(async (req) => {
  const url = new URL(req.url);
  
  // Get slug from query param
  const slug = url.searchParams.get('slug');
  
  if (!slug) {
    return new Response('Not found', { status: 404 });
  }

  const pdfMap = {
    'sludge-line-struvite-treatment': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/a913379ff_HydroFLOW-Case-Study-Sludge-Line-Struvite-Treatment-2023.pdf',
    'screw-press-struvite-treatment': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/8199139ff_HydroFLOWCaseStudy-ScrewPressStruviteTreatment-2023.pdf',
    'industrial-water-heaters': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/ca3b1534f_HydroFLOWCaseStudy-IndustrialWaterHeaters-2026update.pdf',
    'massive-texas-factory': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/46e80b0d5_HydroFLOW-industrial-case-study-massive-Texas-factory.pdf',
    'water-bath-cooling-system-plastics': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/4dfb56b8e_HydroFLOWCaseStudy-WaterBathCoolingSystem-2025.pdf',
    'optimization-steamer-oven': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/58625dd97_HydroFLOW-commercial-case-study-optimizes-steamer-ovens-maintenance-cycles-update4292021.pdf',
    'scale-reduction-private-dental-practice': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/f111e4bbc_HydroFLOW-commercial-case-study-private-dental-practice.pdf',
    'scale-reduction-gas-station-convenience-store': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/6a0a3a88e_HydroFLOW-commercial-case-study-gas-station-and-convenience-store-chain.pdf',
    'gold-leed-campus': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/6b4d951ac_49731493848513.pdf',
    'bakery-steam-boilers': 'https://hydroflow-usa.com/assets/files/39511493849268.pdf',
    'sunrise-childrens-hospital-cooling-tower': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/2e4f96be4_43851493848202.pdf',
    'nellis-air-force-base-cooling-tower': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/19ebf3134_36111563298950.pdf',
    'city-of-walla-walla-wastewater-plant': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/1fce46dec_HydroFLOW-industrial-casestudy-city-of-walla-walla-wastewater-plant.pdf',
    'honda-cooling-tower': 'https://hydroflow-usa.com/assets/files/85191493939481.pdf',
    'hydroflow-cooling-tower-chiller-installation': 'https://hydroflow-usa.com/assets/files/43801662059912.pdf',
    'gold-gym-lap-pool': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/e652e79b5_84741493847709.pdf',
    'st-helena-hospital-ice-machine': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/f9aac3d6d_78241493850010.pdf',
    'penn-state-university': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/8509b0567_89611493849814.pdf',
    'the-melting-pot-restaurant': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/67a5d889d_24351493849401.pdf',
    'sharonville-fire-department': 'https://hydroflow-usa.com/assets/files/36171495126964.pdf',
    'scale-and-bio-treatment-in-outdoor-pool': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/7099a60ae_86361539882313.pdf',
    'premium-car-wash-in-california': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/ac84c7ab9_1561563299281.pdf',
    'hotel-hot-water-system': 'https://hydroflow-usa.com/assets/files/14241698879790.pdf',
    'office-building-cooling-towers-in-us-southeast': 'https://hydroflow-usa.com/assets/files/75341661965067.pdf',
    'select-cooling-tower-chiller-plant-case-studies': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/230e147e6_34751665504234.pdf',
    'high-end-resort-new-mexico': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/43aea60d6_HydroFLOW-commercial-case-study-high-end-resort-in-new-mexico.pdf',
    'coliforms-in-well-water': 'https://hydroflow-usa.com/assets/files/25211539882204.pdf',
    'plumbing-contractor': 'https://hydroflow-usa.com/assets/files/15281493934433.pdf',
    'product-evaluation-tankless-boiler': 'https://hydroflow-usa.com/assets/files/86361495130169.pdf',
    'residential-well': 'https://hydroflow-usa.com/assets/files/75351495060345.pdf',
    'residential-complex': 'https://hydroflow-usa.com/assets/files/87271493931205.pdf',
    'residential-dishwasher': 'https://hydroflow-usa.com/assets/files/31351493931674.pdf',
    'residential-pool': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/f5d89f1a9_8651539882719.pdf',
    'residential-tower': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/5cdf053f0_51421493846519.pdf',
    'residential-water-heater': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/ce74fda09_36311632777095.pdf',
    'municipal-golf-course-in-texas': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/7dc3c0ccd_68631698880628.pdf',
    'long-stem-rose-growth': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/1da5d4765_HydroFLOW-agriculture-case-study-long-stem-roses.pdf',
    'hydroflow-reduces-algae-growth': 'https://hydroflow-usa.com/assets/files/81121493936806.pdf',
    'food-processing-cooling-tower': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/60ba6ffc2_67671539882904.pdf',
    'increased-crop-yield-experiment': 'https://hydroflow-usa.com/assets/files/74431493851538.pdf',
    'orchard-scale-on-apples': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/558f293df_271605140596.pdf',
    'aquavet-clinical-evaluation-fish-health': 'https://hydroflow-usa.com/assets/files/84961495125171.pdf',
    'aquavet-clinical-evaluation-phase-2': 'https://hydroflow-usa.com/assets/files/49361493939834.pdf',
    'hydroflow-reduces-biofilm-baron-farms': 'https://hydroflow-usa.com/assets/files/64021494003033.pdf',
    'hydroflow-optimizes-performance-apple-flume': 'https://hydroflow-usa.com/assets/files/75021533661595.pdf',
    'us-navy-seafighter': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/b06911af1_HydroFLOW-marine-case-study-US-Navy-Seafighter.pdf',
    'mv-hermes-leader-uv-system': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/e5384d360_HydroFLOW-marine-case-study-MV-hermes-leader-UV-System.pdf',
    'ray-shipping-fleet-hydropath': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/08ad97990_HydroFLOW-marine-referral-letter-ray-shipping-equips-fleet-with-Hydropath.pdf',
    'anglo-eastern-freshwater-generator': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/c82419f45_HydroFLOW-marine-referral-letter-anglo-eastern-fresh-water-generator.pdf',
    'car-carrier-main-cooling-system': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/56fb596c1_009-CaseStudy-CarCarrier.pdf',
    'antares-reduced-chemical-usage': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/d0deae4aa_25151493825669.pdf',
    'maritime-reporter-magazine-article': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/55664d73c_42891495128176.pdf',
    'mv-detroit-express-freshwater-generator': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/d7c9e58bd_59521643224356.pdf',
    'mv-hoegh-america-freshwater-generator': 'https://hydroflow-usa.com/assets/files/27281493847919.pdf',
    'steel-company-spray-bar-system': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/b98089f6f_HydroFLOW-industrial-case-study-steel-company-spray-bar-system.pdf',
    'biofilm-reduction-referral-letter': 'https://hydroflow-usa.com/assets/files/61401638211314.pdf',
    'lehigh-county-wwtp-struvite-treatment': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/6932f7838_HydroFLOW-industrial-referral-letter-lehigh-county-wastewater-treatment-plant.pdf',
    'paper-mill-liquor-lines': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/75593b140_46101493933705.pdf',
    'cmc-concrete-report': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/968133043_4171495131909.pdf',
    'inland-power-plant-in-china': 'https://hydroflow-usa.com/assets/files/83871498261386.pdf',
    'power-station-steam-condenser': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/140559cdb_39691493939531.pdf',
    'natural-gas-and-oil-producer': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/9df77444d_1431539882593.pdf',
    'wastewater-treatment-plant-in-ohio': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/97d3f55c2_HydroFLOW-industrial-case-stury-wastewater-treatment-plant-in-ohio.pdf',
    '60-hp-low-pressure-steam-boiler': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/d33c208a5_88201550515726.pdf',
    'third-party-verification-denver': 'https://hydroflow-usa.com/assets/files/46231506637483.pdf',
    'hydroflow-kitchen-innovations-award-2015': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/84b4b0e3b_HydroFLOW-commercial-referral-letter-2015-KI-awards.pdf',
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