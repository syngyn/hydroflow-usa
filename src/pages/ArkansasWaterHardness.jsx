import React from 'react';
import StateWaterHardnessTemplate from '../components/state-water-hardness/StateWaterHardnessTemplate';

export default function ArkansasWaterHardness() {
  const sections = [
    {
      title: "Water Quality in the State of Arkansas",
      paragraphs: [
        "Arkansas water supply comes mainly from groundwater (aquifers and wells), surface water, rivers, reservoirs and lakes. Lake Winona and Lake Maumelle are the main water sources for the city of Little Rock. The average water hardness in Arkansas is 38 PPM which would be considered soft"
      ]
    },
    {
      title: "Water Hardness by City",
      paragraphs: [
        "Arkansas has one of the lowest averages for hard water in the country at 38 PPM, according to the USGS water hardness measures. Some examples of soft water cities are Little Rock with 26 PPM and Fayetteville with a hardness level of 27 PPM. The hardest water level in the state comes from Pine Bluff, which gets its water from 4 wells that pump from the Sparta Sand Aquifer. The total hardness of this water is 86 Parts Per Million which is considered moderately hard."
      ],
      tableIntro: "For more information on the water hardness in specific cities please see the table below.",
      table: [
        { city: "Fayetteville", zipCodes: "72701 | 72703 | 72704", hardness: "27 PPM (mg/L) or 1 gpg" },
        { city: "Fort Smith", zipCodes: "72903 | 72904 | 72901 | 72908 | 72916", hardness: "21 PPM (mg/L) or 1 gpg" },
        { city: "Little Rock", zipCodes: "72201 | 72202 | 72204 | 72205 | 72206 | 72207 | 72209 | 72210 | 72211 | 72212 | 72223 | 72227", hardness: "26 PPM (mg/L) or 1 gpg" },
        { city: "Pine Bluff", zipCodes: "71603 | 71601 | 72566", hardness: "86 PPM (mg/L) or 5 gpg" },
        { city: "Springdale", zipCodes: "72762 | 72764 | 72157", hardness: "29 PPM (mg/L) or 2 gpg" }
      ]
    },
    {
      title: "Farming and Water Hardness",
      paragraphs: [
        "Agriculture is Arkansas' largest industry, producing 16 billion in revenue annually. The state's major agricultural products are rice, cotton, poultry, soybeans and feed grains. Arkansas is the largest rice producer and the 3rd largest cotton producer in the United States. The state has just under 19 million acres of forest land and more than 95% of Arkansas' land resources are used for agriculture and forestry.",
        "Though Arkansas has relatively soft water, farmers can discover that they still experience headaches related to scale buildup on their irrigators and other necessary equipment due to the mass quantities of water flow every day. In addition, contaminants polluting soil and waterways have increased greatly over the past few decades and there is a greater need for waste and chemical control. Many farmers are looking for eco-friendly solutions that can increase the quality and yield of their crops while saving water."
      ]
    },
    {
      title: "Solutions to your Water Quality Problems",
      paragraphs: [
        "Fixing your water quality issues in the state of Arkansas will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.",
        "A problem that some Arkansas residents will have to deal with is hard water. One old-fashioned, inefficient, expensive, and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener, you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.",
        <>Alternative water treatment solutions such as "water conditioners" have been gaining popularity in recent years because they are cheap to operate and the best eco-friendly solution for hard water. <i>Hydro</i>PATH technology, which powers the <i>Hydro</i>FLOW water conditioners, is by far the most efficient and cost-effective eco-friendly solution to deal with hard water problems. To learn more about how <i>Hydro</i>FLOW solves the problems created by hard water, please check out our technology page. You might want to read this blog that explains the difference between water conditioners and water softeners: Water Conditioner vs. Water Softener Blog.</>
      ]
    }
  ];

  return (
    <StateWaterHardnessTemplate
      stateName="Arkansas"
      metaDescription="Arkansas water hardness averages 38 PPM (soft water). Find water hardness data for Little Rock, Fayetteville, Fort Smith and other Arkansas cities."
      heroImageUrl="https://hydroflow-usa.com/assets/pics/67581667847030.jpg"
      sections={sections}
    />
  );
}