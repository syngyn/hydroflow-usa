import React from 'react';
import StateWaterHardnessTemplate from '../components/state-water-hardness/StateWaterHardnessTemplate';

export default function AlaskaWaterHardness() {
  const sections = [
    {
      title: "State of Alaska Water Quality",
      paragraphs: [
        "Alaska is the largest and most sparsely populated US state, with an estimated 740,000 people spread across 663,268 square miles. The majority of Alaska's population is located in the Anchorage metropolitan area. Drinking water sources can be rivers, lakes, streams, ponds, reservoirs, springs and groundwater. About 83% of the state's public water systems use groundwater. Largely populated cities such as Anchorage have distribution systems. However, more isolated areas across Alaska are more likely to use lakes, rivers, and springs. These areas can be susceptible to water contaminants that can arise with less thorough water treatment systems in place."
      ]
    },
    {
      title: "Water Hardness by City",
      paragraphs: [
        "Generally speaking, numbers pulled from AWWU (Anchorage Water and Wastewater Utility) show that Alaska water is considered moderately hard, between 65 – 140 PPM. Eklutna Lake is the major source of water for Anchorage and surrounding cities. Anchorage has the lowest average water hardness number of 63 Parts Per Million. The state capital, Juneau, has a water hardness of 138 PPM and the state's hardest water is in Fairbanks, with a moderately hard water level of 142 PPM."
      ],
      tableIntro: "For more information on water hardness in specific cities please see table below.",
      table: [
        { city: "Anchorage", zipCodes: "99501 | 99502 | 99503 | 99504 | 99507 | 99508 | 99510 | 99513 | 99515 | 99516 | 99517 | 99518 | 99519 | 99695", hardness: "63 (mg/L) or 4 gpg" },
        { city: "Fairbanks", zipCodes: "99701 | 99706 | 99709 | 99712 | 99775 | 99790", hardness: "142 (mg/L) or 8 gpg" },
        { city: "Juneau", zipCodes: "99801", hardness: "138 (mg/L) or 8 gpg" },
        { city: "Kenai", zipCodes: "99611", hardness: "124 (mg/L) or 7 gpg" },
        { city: "Palmer", zipCodes: "99645", hardness: "100 (mg/L) or 6 gpg" },
        { city: "Soldotna", zipCodes: "99669", hardness: "119 (mg/L) or 7 gpg" },
        { city: "Valdez", zipCodes: "99686", hardness: "65 (mg/L) or 4 gpg" },
        { city: "Wasilla", zipCodes: "99654", hardness: "120 (mg/L) or 7 gpg" }
      ]
    },
    {
      title: "Oil, Gas and Water Hardness",
      paragraphs: [
        "The oil and gas industry is Alaska's top economic sector, bringing in close to 85% of the state's revenue. Oil was discovered in Prudhoe Bay on the Arctic Ocean coast and became the largest oil field in North America. The oil and gas industry uses water in all parts of the operation and that water is often locally sourced from groundwater, rivers or lakes (both natural and artificial). As Alaska is a hard water state, oil and gas producers are often fighting to keep their operations running and their equipment scale free.",
        "Mining is also an important industry in Alaska; mining gold, silver, coal, copper, lead and zinc. The mining sector in Alaska consumes significant amounts of water that can be as hard as 10,000 PPM."
      ]
    },
    {
      title: "Solutions to your Water Quality Problems",
      paragraphs: [
        "Fixing your water quality issues in the state of Alaska will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.",
        "A problem that almost all Alaska residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.",
        "Alternative water treatment solutions such as \"water conditioners\" have been gaining popularity in recent years because they are cheap to operate and the best eco-friendly solution for hard water. Hydropath technology, which powers the HydroFLOW water conditioners is by far the most efficient and cost-effective eco-friendly solution to deal with hard water problems. To learn more about how HydroFLOW solves the problems created by hard water, please check out our technology page. You might want to read this blog that explains the difference between water conditioners and water softeners: Water Conditioner vs. Water Softener Blog."
      ]
    }
  ];

  return (
    <StateWaterHardnessTemplate
      stateName="Alaska"
      metaDescription="Alaska water hardness averages 65-140 PPM (moderately hard). Find water hardness data for Anchorage, Fairbanks, Juneau and other Alaska cities."
      heroImageUrl="https://hydroflow-usa.com/assets/pics/40621667827567.jpg"
      sections={sections}
    />
  );
}