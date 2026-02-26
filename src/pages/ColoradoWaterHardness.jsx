import React from 'react';
import StateWaterHardnessTemplate from '../components/state-water-hardness/StateWaterHardnessTemplate';

export default function ColoradoWaterHardness() {
  const sections = [
    {
      title: "Water Quality in the State of Colorado",
      paragraphs: [
        "Colorado, home to an estimated 5.7 million residents, is noted for having a wide variety of breathtaking landscapes. The majority of Colorado water is supplied by the Rocky Mountains snowfall. Most of the snow falls on the west side of the Rocky Mountains and supplies the rivers on the west. Because the populous cities are on the east side of Colorado, the main source of drinking water for Colorado residents is brought in by way of trans-mountain diversions like the Fryingpan-Arkansas Project."
      ]
    },
    {
      title: "Colorado Water Hardness by City",
      paragraphs: [
        "Colorado water is considered soft to moderately hard depending on the location. During the winter, Colorado's water becomes slightly harder. This occurs, because it's reservoirs freeze, allowing the water to absorb more minerals.",
        "The city of Pueblo has the hardest recorded water in the state with 181 PPM, another city with moderately hard water is Westminster at 117 PPM. Denver, the most populous city in Colorado has relatively soft water of 72 PPM. Denver Water Utility (which services roughly 1.4 million people) uses two main collection systems; the Southern Collection system with a moderately hard water range of 121-180 mg/L and the Northern collection system with softer water, between 40-50 mg/L."
      ],
      tableIntro: "For more information on water hardness in specific cities please see table below.",
      table: [
        { city: "Denver", zipCodes: "80202 | 80203 | 80204 | 80205 | 80206 | 80207 | 80209 | 80210 | 80211 | 80212 | 80214 | 80215 | 80216 | 80218 | 80219 | 80220 | 80221 | 80222 | 80223 | 80224 | 80226 | 80227 | 80228 | 80229 | 80230", hardness: "72 PPM (mg/L) or 4 gpg" },
        { city: "Colorado Springs", zipCodes: "80902 | 80903 | 80904 | 80905 | 80906 | 80907 | 80908 | 80909 | 80910 | 80911 | 80913 | 80914 | 80915 | 80916 | 80917 | 80918 | 80919 | 80920", hardness: "34 PPM (mg/L) or 2 gpg" },
        { city: "Aurora", zipCodes: "80010 | 80011 | 80012 | 80013 | 80014 | 80015 | 80016 | 80017 | 80018 | 80019 | 80045", hardness: "180 PPM (mg/L) or 10 gpg" },
        { city: "Fort Collins", zipCodes: "80521 | 80524 | 80525 | 80526 | 80528", hardness: "111 PPM (mg/L) or 6 gpg" },
        { city: "Durango", zipCodes: "81301 | 81303", hardness: "89 PPM (mg/L) or 5 gpg" },
        { city: "Thornton", zipCodes: "80241", hardness: "176 PPM (mg/L) or 10 gpg" },
        { city: "Arvada", zipCodes: "80002 | 80003 | 80004 | 80005 | 80007", hardness: "158 PPM (mg/L) or 9 gpg" },
        { city: "Westminster", zipCodes: "80030 | 80031", hardness: "117 PPM (mg/L) or 7 gpg" },
        { city: "Castle Rock", zipCodes: "80104 | 80108 | 80109", hardness: "170 PPM (mg/L) or 10 gpg" },
        { city: "Pueblo", zipCodes: "81001 | 81003 | 81004 | 81005 | 81006 | 81007 | 81008", hardness: "181 PPM (mg/L) or 10 gpg" },
        { city: "Boulder", zipCodes: "80301 | 80302 | 80303 |80304 | 80305 | 80310", hardness: "49 PPM (mg/L) or 3 gpg" }
      ]
    },
    {
      title: "Manufacturing and Water Hardness",
      paragraphs: [
        "Manufacturing is a major industry for Colorado. Colorado's top manufacturing industries are petroleum, coal, appliances, fabricated metals, food and beverage, computers and machinery. Product processing in most manufacturing plants requires water. Cooling towers and HVAC are imperative to keeping operations running smoothly. Water hardness levels in some manufacturing plants can be as high as 800 PPM; with water hardness levels this high, manufacturing equipment can deteriorate at a rapid pace and experience efficiency loss.",
        "Mining is also a major contributor to Colorado's growing economy. Most of the mining in the state of Colorado is gold, silver, coal, uranium, iron, gypsum and marble. The mining sector in Colorado consumes significant amounts of water that can be as hard as 1,500 PPM."
      ]
    },
    {
      title: "Solutions to your Water Quality Problems",
      paragraphs: [
        "Fixing your water quality issues in the state of Colorado will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.",
        "A problem that almost all Colorado residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.",
        <>Alternative water treatment solutions such as "water conditioners" have been gaining popularity in recent years because they are cheap to operate and the best eco-friendly solution for hard water. HydroPATH technology, which powers the <i>Hydro</i>FLOW water conditioners is by far the most efficient, cost-effective and eco-friendly solution to deal with hard water problems. To learn more about how <i>Hydro</i>FLOW solves the problems created by hard water, please check out our technology page. You might want to read this blog that explains the difference between water conditioners and water softeners: Water Conditioner vs. Water Softener Blog.</>
      ]
    }
  ];

  return (
    <StateWaterHardnessTemplate
      stateName="Colorado"
      metaDescription="Colorado water hardness ranges from 34-181 PPM (soft to moderately hard). Find water hardness data for Denver, Colorado Springs, Boulder and other Colorado cities."
      heroImageUrl="https://hydroflow-usa.com/assets/pics/33991667847214.jpg"
      sections={sections}
    />
  );
}