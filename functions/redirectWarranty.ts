Deno.serve(async (req) => {
  // Redirect old warranty URL to the new Warranty page
  return Response.redirect(`${req.url.split('/').slice(0, 3).join('/')}/warranty`, 301);
});