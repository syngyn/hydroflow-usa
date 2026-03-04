Deno.serve(async (req) => {
  // Redirect old installation URL to the Support page
  return Response.redirect(`${req.url.split('/').slice(0, 3).join('/')}/support`, 301);
});