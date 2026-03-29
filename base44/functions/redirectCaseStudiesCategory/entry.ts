// Handles redirects for old category listing pages:
// /case-studies/commercial-case-studies/  -> /CaseStudies?category=commercial
// /case-studies/industrial-case-studies/  -> /CaseStudies?category=industrial
// /case-studies/residential-case-studies/ -> /CaseStudies?category=residential
// /case-studies/agriculture-case-studies/ -> /CaseStudies?category=agriculture
// /case-studies/marine-case-studies/      -> /CaseStudies?category=marine
// /case-studies/                          -> /CaseStudies

Deno.serve(async (req) => {
  const base = req.url.split('/').slice(0, 3).join('/');
  const url = new URL(req.url);
  const category = url.searchParams.get('category') || '';

  if (category) {
    return Response.redirect(`${base}/CaseStudies?category=${category}`, 301);
  }

  return Response.redirect(`${base}/CaseStudies`, 301);
});