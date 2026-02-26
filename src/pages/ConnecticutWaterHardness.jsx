import React from 'react';
import StateWaterHardnessTemplate from '../components/state-water-hardness/StateWaterHardnessTemplate';

export default function ConnecticutWaterHardness() {
  const sections = [
    {
      title: "Water Quality in the State of Connecticut",
      paragraphs: [
        "Connecticut is the third smallest state in the US with 4,844 square miles and has a population of 3.6 million residents. There are over 2,500 public water systems in the state of Connecticut. Most populous cities receive their water from surrounding lakes and rivers. A majority of Connecticut's rural areas obtain their drinking water from wells."
      ]
    },
    {
      title: "Connecticut Water Hardness by City",
      paragraphs: [
        "Connecticut's water is hard, with a state average hardness of 175 PPM. Bridgeport, the state's most populated city, has a water hardness level of 168 PPM. New Haven, has the hardest reported water at 194 PPM which is considered very hard based on the USGS Measures of Water Hardness."
      ],
      tableIntro: "For more information on water hardness in specific cities, please see the table below.",
      table: [
        { city: "Bridgeport", zipCodes: "80928 | 80929 | 80930 | 80938 | 80939 | 80951", hardness: "168 PPM (mg/L) or 10 gpg" },
        { city: "New Haven", zipCodes: "06510 | 06511 | 06513 | 06515 | 06519", hardness: "194 PPM (mg/L) or 11 gpg" },
        { city: "Hartford", zipCodes: "06103 | 06105 | 06106 | 06112 | 06114 | 06120 | 06160", hardness: "153 PPM (mg/L) or 9 gpg" },
        { city: "Waterbury", zipCodes: "06702 | 06704 | 06705 | 06706 | 06708 | 06710", hardness: "188 PPM (mg/L) or 11 gpg" },
        { city: "Milford", zipCodes: "06460 | 06461", hardness: "166 PPM (mg/L) or 10 gpg" },
        { city: "Torrington", zipCodes: "06790", hardness: "177 PPM (mg/L) or 10 gpg" },
        { city: "Willimantic", zipCodes: "06226", hardness: "164 PPM (mg/L) or 9 gpg" }
      ]
    },
    {
      title: "Manufacturing and Water Hardness",
      paragraphs: [
        "Manufacturing is a major industry for Connecticut. Connecticut's top manufacturing industries are Aerospace and transportation equipment, chemicals, fabricated metal products, computer and electronic products and machinery. Product processing in most manufacturing plants requires water.",
        "Reliable water treatment systems are necessary to keep most manufacturing operations running smoothly. Water hardness levels in manufacturing plants can be as high as 200 PPM; with water hardness levels this high, manufacturing equipment can deteriorate at a rapid pace and experience efficiency loss."
      ]
    },
    {
      title: "Solutions to your Water Quality Problems",
      paragraphs: [
        "Fixing your water quality issues in the state of Connecticut will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.",
        "A problem that almost all Connecticut residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.",
        <>Alternative water treatment solutions such as "water conditioners" have been gaining popularity in recent years because they are cheap to operate and the best eco-friendly solution for hard water. HydroPATH technology, which powers the <i>Hydro</i>FLOW water conditioners is by far the most efficient and cost-effective eco-friendly solution to deal with hard water problems. To learn more about how <i>Hydro</i>FLOW solves the problems created by hard water, please check out our technology page. You might want to read this blog that explains the difference between water conditioners and water softeners: Water Conditioner vs. Water Softener Blog.</>
      ]
    }
  ];

  return (
    <StateWaterHardnessTemplate
      stateName="Connecticut"
      metaDescription="Connecticut water hardness averages 175 PPM (hard water). Find water hardness data for Bridgeport, Hartford, New Haven and other Connecticut cities."
      heroImageUrl="https://hydroflow-usa.com/assets/pics/30561667847254.jpg"
      sections={sections}
    />
  );
}