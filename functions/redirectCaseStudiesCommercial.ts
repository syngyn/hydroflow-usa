Deno.serve(async (req) => {
  const base = req.url.split('/').slice(0, 3).join('/');

  // Map old URL slugs to new case study slugs
  const redirectMap = {
    'savings-in-1000-ton-cooling-tower': '1000-ton-cooling-tower-fortune100',
    '2015-kitchen-innovation-awards': 'hydroflow-kitchen-innovations-award-2015',
    'hotel-hot-water-system': 'hotel-hot-water-system',
    'scale-reduction-gas-station-and-convenience-store-chain': 'gas-station-scale-reduction',
    'office-building-cooling-towers-in-the-us-southeast': 'office-building-cooling-towers-southeast',
    'high-end-resort-new-mexico': 'high-end-resort-new-mexico',
    'select-cooling-tower-and-chiller-plant-case-studies': 'select-cooling-tower-chiller-plant',
    'thyme-and-seasons-ice-maker': 'thyme-and-seasons-ice-maker',
  };

  // Extract the old slug from the URL path
  // Expected path: /redirectCaseStudiesCommercial?slug=xxx
  const url = new URL(req.url);
  const oldSlug = url.searchParams.get('slug') || url.pathname.split('/').pop();

  const newSlug = redirectMap[oldSlug];

  if (newSlug) {
    return Response.redirect(`${base}/CaseStudyDetail?slug=${newSlug}`, 301);
  }

  // Fallback: redirect to case studies page
  return Response.redirect(`${base}/CaseStudies`, 301);
});