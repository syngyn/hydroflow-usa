Deno.serve(async (req) => {
  const url = new URL(req.url);
  const pathname = url.pathname.toLowerCase();

  // Map old URL patterns to new state page names
  const stateMapping = {
    'alabama-water-hardness': 'AlabamaWaterHardness',
    'alaska-water-hardness': 'AlaskaWaterHardness',
    'arizona-water-hardness': 'ArizonaWaterHardness',
    'arkansas-water-hardness': 'ArkansasWaterHardness',
    'california-water-hardness': 'CaliforniaWaterHardness',
    'colorado-water-hardness': 'ColoradoWaterHardness',
    'connecticut-water-hardness': 'ConnecticutWaterHardness',
    'delaware-water-hardness': 'DelawareWaterHardness',
    'florida-water-hardness': 'FloridaWaterHardness',
    'georgia-water-hardness': 'GeorgiaWaterHardness',
    'hawaii-water-hardness': 'HawaiiWaterHardness',
    'idaho-water-hardness': 'IdahoWaterHardness',
    'illinois-water-hardness': 'IllinoisWaterHardness',
    'indiana-water-hardness': 'IndianaWaterHardness',
    'iowa-water-hardness': 'IowaWaterHardness',
    'kansas-water-hardness': 'KansasWaterHardness',
    'kentucky-water-hardness': 'KentuckyWaterHardness',
    'louisiana-water-hardness': 'LouisianaWaterHardness',
    'maine-water-hardness': 'MaineWaterHardness',
    'maryland-water-hardness': 'MarylandWaterHardness',
    'massachusetts-water-hardness': 'MassachusettsWaterHardness',
    'michigan-water-hardness': 'MichiganWaterHardness',
    'minnesota-water-hardness': 'MinnesotaWaterHardness',
    'mississippi-water-hardness': 'MississippiWaterHardness',
    'missouri-water-hardness': 'MissouriWaterHardness',
    'montana-water-hardness': 'MontanaWaterHardness',
    'nebraska-water-hardness': 'NebraskaWaterHardness',
    'nevada-water-hardness': 'NevadaWaterHardness',
    'newhampshire-water-hardness': 'NewHampshireWaterHardness',
    'newjersey-water-hardness': 'NewJerseyWaterHardness',
    'new-jersey-water-hardness': 'NewJerseyWaterHardness',
    'newmexico-water-hardness': 'NewMexicoWaterHardness',
    'new-mexico-water-hardness': 'NewMexicoWaterHardness',
    'newyork-water-hardness': 'NewYorkWaterHardness',
    'new-york-water-hardness': 'NewYorkWaterHardness',
    'northcarolina-water-hardness': 'NorthCarolinaWaterHardness',
    'north-carolina-water-hardness': 'NorthCarolinaWaterHardness',
    'northdakota-water-hardness': 'NorthDakotaWaterHardness',
    'north-dakota-water-hardness': 'NorthDakotaWaterHardness',
    'ohio-water-hardness': 'OhioWaterHardness',
    'oklahoma-water-hardness': 'OklahomaWaterHardness',
    'oregon-water-hardness': 'OregonWaterHardness',
    'pennsylvania-water-hardness': 'PennsylvaniaWaterHardness',
    'rhodeisland-water-hardness': 'RhodeIslandWaterHardness',
    'rhode-island-water-hardness': 'RhodeIslandWaterHardness',
    'southcarolina-water-hardness': 'SouthCarolinaWaterHardness',
    'south-carolina-water-hardness': 'SouthCarolinaWaterHardness',
    'southdakota-water-hardness': 'SouthDakotaWaterHardness',
    'south-dakota-water-hardness': 'SouthDakotaWaterHardness',
    'tennessee-water-hardness': 'TennesseeWaterHardness',
    'texas-water-hardness': 'TexasWaterHardness',
    'utah-water-hardness': 'UtahWaterHardness',
    'vermont-water-hardness': 'VermontWaterHardness',
    'virginia-water-hardness': 'VirginiaWaterHardness',
    'washington-water-hardness': 'WashingtonWaterHardness',
    'westvirginia-water-hardness': 'WestVirginiaWaterHardness',
    'west-virginia-water-hardness': 'WestVirginiaWaterHardness',
    'wisconsin-water-hardness': 'WisconsinWaterHardness',
    'wyoming-water-hardness': 'WyomingWaterHardness',
  };

  // Extract the path segment and normalize it
  const pathSegment = pathname.replace(/^\//, '').replace(/\/$/, '');
  const pageName = stateMapping[pathSegment];

  if (pageName) {
    // Construct the new URL - redirect to the state water hardness page
    const newUrl = `${url.origin}/${pageName}`;
    return new Response(null, {
      status: 301,
      headers: {
        'Location': newUrl,
      },
    });
  }

  return new Response(JSON.stringify({ error: 'Not found' }), {
    status: 404,
    headers: { 'Content-Type': 'application/json' },
  });
});