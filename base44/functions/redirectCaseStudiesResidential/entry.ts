Deno.serve(async (req) => {
  const base = req.url.split('/').slice(0, 3).join('/');

  const redirectMap = {
    'coliforms-in-well-water': 'coliforms-in-well-water',
    'plumbing-contractor': 'plumbing-contractor',
    'product-evaluation-tankless-boiler': 'product-evaluation-tankless-boiler',
    'residential-well': 'residential-well',
    'residential-complex': 'residential-complex',
    'residential-dishwasher': 'residential-dishwasher',
    'residential-pool': 'residential-pool',
    'residential-tower': 'residential-tower',
    'residential-water-heater': 'residential-water-heater',
  };

  const url = new URL(req.url);
  const oldSlug = url.searchParams.get('slug') || url.pathname.split('/').pop();

  const newSlug = redirectMap[oldSlug];

  if (newSlug) {
    return Response.redirect(`${base}/CaseStudyDetail?slug=${newSlug}`, 301);
  }

  return Response.redirect(`${base}/CaseStudies`, 301);
});