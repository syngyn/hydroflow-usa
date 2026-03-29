Deno.serve(async (req) => {
  // Redirect old Pearl product URL to the ProductPearl page
  return Response.redirect(`${req.url.split('/').slice(0, 3).join('/')}/product-pearl`, 301);
});