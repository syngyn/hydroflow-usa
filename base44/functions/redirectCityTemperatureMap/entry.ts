Deno.serve(async (req) => {
  const base = req.url.split('/').slice(0, 3).join('/');
  return Response.redirect(`${base}/groundwater-temperature-map`, 301);
});