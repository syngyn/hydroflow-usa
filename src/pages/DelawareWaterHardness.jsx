import React from 'react';
import StateWaterHardnessTemplate from '../components/state-water-hardness/StateWaterHardnessTemplate';

export default function DelawareWaterHardness() {
  const sections = [
    {
      title: "Water Quality in the State of Delaware",
      paragraphs: [
        "Delaware residents get their drinking water from either groundwater or surface water sources, depending on where they live. About two-thirds of Delaware households are connected to public water systems that use groundwater sources; the remaining one-third obtains water from surface water sources. The major sources of groundwater are the Columbia Aquifer, the Cheswold Aquifer and the Piney Point Aquifer. All surface water plants for Delaware reside in northern New Castle county. The major sources of surface water are the Brandywine River Basin, Christiana River Basin, Red Clay Creek and White Clay Creek."
      ]
    },
    {
      title: "Water Hardness Summary",
      paragraphs: [
        "Delaware water is considered hard to very hard. The average water hardness for the Delaware resident is 100-300 PPM. Wilmington is the most populous city in Delaware with a population of just under 71,000 people. Wilmington has relatively hard water with 127 PPM."
      ],
      tableIntro: "For more information on water hardness in specific cities, please see table below.",
      table: [
        { city: "Wilmington", zipCodes: "19801 |19802 | 19803 | 19804 | 19805 | 19806 | 19807 | 19808 | 19809 | 19810", hardness: "127 PPM (mg/L) or 7 gpg" },
        { city: "Dover", zipCodes: "19901 |19904", hardness: "64 PPM (mg/L) or 4 gpg" },
        { city: "Newark", zipCodes: "19702 |19711 | 19713 | 19716 | 19717", hardness: "122 PPM (mg/L) or 7 gpg" },
        { city: "Middletown", zipCodes: "19709", hardness: "119 PPM (mg/L) or 7 gpg" }
      ]
    },
    {
      title: "Farming and Water Hardness",
      paragraphs: [
        "The farming and food processing industry are thriving sectors in Delaware. The largest farming product is broiler chicken, producing $946 million in gross product a year. This stems from the fact that large chicken corporations like Perdue Farms and Mountaire Farms call Delaware home. Field Corn (which is used for livestock feed and ethanol) is another large agricultural industry for Delaware, attributing to $108 million of Delaware's yearly revenue. Other top agriculture products from Delaware are soybeans, chicken eggs, wheat, dairy products, sweet corn, watermelon, cattle and barley.",
        "As a great deal of Delaware has water rich in calcium (the primary source of water hardness), many farms and food processing plants experience issues related to scale buildup in their irrigators, production and processing equipment. In addition, contaminants polluting soil and waterways has increased greatly over the past few decades and there is a greater need for waste and chemical control. Many farmers are looking for eco-friendly solutions that can increase the quality and yield of their crops while saving water."
      ]
    },
    {
      title: "Solutions to your Water Quality Problems",
      paragraphs: [
        "Fixing your water quality issues in the state of Delaware will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.",
        "A problem that almost all Delaware residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.",
        <>Alternative water treatment solutions such as "water conditioners" have been gaining popularity in recent years because they are cheap to operate and the best eco-friendly solution for hard water. <i>Hydro</i>PATH technology, which powers the <i>Hydro</i>FLOW water conditioners is by far the most efficient and cost-effective eco-friendly solution to deal with hard water problems. To learn more about how <i>Hydro</i>FLOW solves the problems created by hard water, please check out our technology page. You might want to read this blog that explains the difference between water conditioners and water softeners: Water Conditioner vs. Water Softener Blog.</>
      ]
    }
  ];

  return (
    <StateWaterHardnessTemplate
      stateName="Delaware"
      metaDescription="Delaware water hardness ranges from 64-127 PPM (moderately hard to hard). Find water hardness data for Wilmington, Dover, Newark and other Delaware cities."
      heroImageUrl="https://hydroflow-usa.com/assets/pics/78891667847298.jpg"
      sections={sections}
    />
  );
}