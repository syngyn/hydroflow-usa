Deno.serve(async (req) => {
  const base = req.url.split('/').slice(0, 3).join('/');

  const redirectMap = {
    'massive-texas-factory': 'massive-texas-factory',
    'sludge-line-struvite-treatment': 'sludge-line-struvite-treatment',
    'steel-company-spray-bar-system-scale': 'steel-company-spray-bar-scale',
    'biofilm-reduction': 'biofilm-reduction-avantor',
    'referral-letter-lehigh-county-wwtp-struvite-treatment': 'lehigh-county-wwtp-struvite',
    'city-of-walla-walla-waste-water-plant': 'city-of-walla-walla-wastewater',
    'first-reverse-osmosis-new-mexico-state-university': 'first-reverse-osmosis-nmsu',
    'second-reverse-osmosis-new-mexico-state-university': 'second-reverse-osmosis-nmsu',
    'the-effect-of-hydroflow-on-struvite-in-wastewater-treatment-plants': 'hydroflow-wastewater-struvite-presentation',
    'inland-power-plant-in-china': 'inland-power-plant-china',
    'cmc-concrete-report': 'cmc-concrete-report',
    'paper-mill-liquor-lines': 'paper-mill-liquor-lines',
    'struvite-control-in-dewatering-centrifuge': 'struvite-control-dewatering-centrifuge',
    'power-station-steam-condenser': 'power-station-steam-condenser',
    'eco-friendly-bacteria-neutralization': 'eco-friendly-bacteria-neutralization',
    'third-party-verification-of-hydropath-technology-denver': 'third-party-verification-denver',
    'water-bath-cooling-system-plastics': 'water-bath-cooling-system-plastics',
  };

  const url = new URL(req.url);
  const oldSlug = url.searchParams.get('slug') || url.pathname.split('/').pop();

  const newSlug = redirectMap[oldSlug];

  if (newSlug) {
    return Response.redirect(`${base}/CaseStudyDetail?slug=${newSlug}`, 301);
  }

  return Response.redirect(`${base}/CaseStudies`, 301);
});