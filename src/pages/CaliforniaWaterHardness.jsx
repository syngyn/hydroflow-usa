import React from 'react';
import StateWaterHardnessTemplate from '../components/state-water-hardness/StateWaterHardnessTemplate';

export default function CaliforniaWaterHardness() {
  const sections = [
    {
      title: "Water Quality in the State of California",
      paragraphs: [
        "California's water is controlled by the state government. Most of the supplied water for Southern California and the Central Valley (home to half of the state's population), depends on three major projects; State Water Project, the Colorado River Aqueduct (imported water from out of state) and the Central Valley Project. California's vast agricultural industry is also dependent on these water projects, both large and small.",
        "Groundwater is also an important part of the state's water supplies, comprising about 40% of the water used in an average year, and 60% or more in a drought year. But groundwater is very much location-dependent: some communities have no groundwater and rely on surface water while other communities may have only groundwater. Other communities depend on a mix of imported water and groundwater, and even some rely solely on imported water."
      ]
    },
    {
      title: "California Water Hardness by City",
      paragraphs: [
        "California water is considered hard to very hard. The average water hardness for California residents is 100-300 PPM. The state's most populous city and the second-most populous city in the US, Los Angeles, has a water hardness average of 127 PPM and San Francisco has a hard water level of 47 PPM.",
        "Who has the hardest water in the United States? Ventura California with a water hardness or 666 PPM is the hardest water in the United States. This is among the municipal water quality reports we have documented."
      ],
      tableIntro: "For more information on water hardness in specific cities, please see the table below.",
      table: [
        { city: "Anaheim", zipCodes: "92804 | 92805 | 92801 | 92802 | 92806 | 92807 | 92808", hardness: "127 PPM (mg/L) or 7 gpg" },
        { city: "Bakersfield", zipCodes: "93307 | 93306 | 93312 | 93309 | 93308 | 93313 | 93304 | 93311 | 93305 | 93314 | 93301", hardness: "80 PPM (mg/L) or 5 gpg" },
        { city: "Los Angeles", zipCodes: "90011 | 90044 | 90003 | 90026 | 90019 | 90022 | 90037 | 90042 | 90006 | 90004 | 90066 | 90001 | 90034 | 90018 | 90002 | 90063 | 90046 | 90024 | 90057 | 90047 | 90025 | 90065 | 90032 | 90033", hardness: "127 PPM (mg/L) or 7 gpg" },
        { city: "San Diego", zipCodes: "92154 | 92126 | 92105 | 92114 | 92115 | 92117 | 92113 | 92130 | 92129 | 92128 | 92111 | 92127 | 92122 | 92109 | 92104 | 92102 | 92101", hardness: "241 PPM (mg/L) or 15 gpg" },
        { city: "San Francisco", zipCodes: "94112 | 94110 | 94122 | 94109 | 94116 | 94117 | 94121 | 94134 | 94118 | 94124 | 94115 | 94114 | 94132 | 94102 | 94131 | 94107", hardness: "47 PPM (mg/L) or 3 gpg" },
        { city: "San Jose", zipCodes: "95123 | 95127 | 95111 | 95112 | 95122 | 95116 | 95125 | 95124 | 95148 | 95136 | 95132 | 95129 | 95121 | 95120", hardness: "132 PPM (mg/L) or 8 gpg" },
        { city: "Ventura", zipCodes: "93001 | 93003 | 93004", hardness: "666 PPM (mg/L) or 39 gpg" }
      ]
    },
    {
      title: "Solutions to your Water Quality Problems",
      paragraphs: [
        "Fixing your water quality issues in the state of California will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.",
        "A problem that almost all California residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.",
        <>Alternative water treatment solutions such as "water conditioners" have been gaining popularity in recent years because they are cheap to operate and the best eco-friendly solution for hard water. <i>Hydro</i>PATH technology, which powers the <i>Hydro</i>FLOW water conditioners is by far the most efficient and cost-effective eco-friendly solution to deal with hard water problems. To learn more about how <i>Hydro</i>FLOW solves the problems created by hard water, please check out our technology page.</>
      ]
    }
  ];

  return (
    <StateWaterHardnessTemplate
      stateName="California"
      metaDescription="California water hardness ranges from 47-666 PPM. Ventura has the hardest water in the US at 666 PPM. Find data for LA, San Diego, San Francisco and other California cities."
      heroImageUrl="https://hydroflow-usa.com/assets/pics/8461667847143.jpg"
      sections={sections}
    />
  );
}