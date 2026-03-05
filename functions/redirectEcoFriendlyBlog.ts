Deno.serve(async (req) => {
  const base = req.url.split('/').slice(0, 3).join('/');
  return Response.redirect(`${base}/blog-detail?category=residential&slug=eco-friendly-water-treatment`, 301);
});