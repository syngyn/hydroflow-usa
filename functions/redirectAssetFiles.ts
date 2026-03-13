Deno.serve(async (req) => {
  const url = new URL(req.url);
  const filename = url.pathname.split('/').pop();
  return Response.redirect(`https://pdf.hydroflow-usa.com/${filename}`, 301);
});