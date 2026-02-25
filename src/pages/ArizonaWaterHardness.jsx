import React from 'react';
import StateWaterHardnessTemplate from '../components/state-water-hardness/StateWaterHardnessTemplate';

export default function ArizonaWaterHardness() {
  const sections = [
    {
      title: "Water Quality in the State of Arizona",
      paragraphs: [
        "Water quality in Arizona is governed by the Arizona Department of Environmental Quality. Arizona has relatively hard water. With only 7 inches of annual rainfall in the Phoenix metro area, surface water cannot be solely relied on. Most of the water for public use comes from the Colorado River and groundwater sources known as aquifers. Groundwater is extracted from the Black Mesa and Navajo aquifers, using wells. Depending on the location and depth of the well, the water hardness in these aquifers can range from 200-10,000 PPM. This explains why almost every region in Arizona has very hard water."
      ]
    },
    {
      title: "Arizona Water Hardness by City",
      paragraphs: [
        "Bullhead City has the hardest municipal water source in the state and is also the second highest recorded municipal hardness level we have located in the United States with 615 PPM. The majority of AZ cities have a hardness level of between 210-350 PPM. The most populous Arizona city, Phoenix, has a hardness level of 230 Parts Per Million (PPM). Tucson has a water hardness level of 211 PPM, and Chandler's water is 292 PPM. The city of Sierra Vista has a water hardness level of 140 PPM, while this is the lowest in the state, it is still considered hard, based on the USGS water hardness table."
      ],
      tableIntro: "For more information on the water hardness in specific Arizona cities, please see the table below.",
      table: [
        { city: "Bullhead City", zipCodes: "86429 | 86442", hardness: "615 PPM (mg/L) or 36 gpg" },
        { city: "Chandler", zipCodes: "85225 | 85224 | 85286 | 85249 | 85226 | 85248", hardness: "292 PPM (mg/L) or 17 gpg" },
        { city: "Gilbert", zipCodes: "85233 | 85234 | 85295 | 85296 | 85297 | 85298", hardness: "215 PPM (mg/L) or 13 gpg" },
        { city: "Glendale", zipCodes: "85301 | 85302 | 85303 | 85304 | 85305 | 85306 | 85307 | 85308 | 85310", hardness: "291 PPM (mg/L) or 17 gpg" },
        { city: "Lake Havasu City", zipCodes: "86403 | 86404 | 86406", hardness: "323 PPM (mg/L) or 19 gpg" },
        { city: "Mesa", zipCodes: "85204 | 85201 | 85207 | 85205 | 85210 | 85209 | 85202 | 85203 | 85208 | 85213 | 85206 | 85212 | 85215", hardness: "292 PPM (mg/L) or 17 gpg" },
        { city: "Nogales", zipCodes: "85621", hardness: "340 PPM (mg/L) or 20 gpg" },
        { city: "Peoria", zipCodes: "85625 | 85345 | 85381 | 85382 | 85383", hardness: "218 PPM (mg/L) or 13 gpg" },
        { city: "Phoenix", zipCodes: "85003 | 85004 | 85006 | 85007 | 85008 | 85009 | 85012 | 85013 | 85014 | 85015 | 85016 | 85017 | 85018 | 85019 | 85020 | 85021 | 85022 | 85023 | 85024 | 85027 | 85028 | 85029 | 85031 | 85032 | 85033 | 85034 | 85035 | 85037 | 85040 | 85041 | 85042 | 85043 | 85044 | 85045 | 85048 | 85050 | 85051 | 85053 | 85054 | 85083 | 85085 | 85086", hardness: "225 PPM (mg/L) or 13 gpg" },
        { city: "Scottsdale", zipCodes: "85254 | 85255 | 85251 | 85260 | 85257 | 85258 | 85259 | 85250 | 85266 | 85262 | 85256", hardness: "343 PPM (mg/L) or 20 gpg" },
        { city: "Sierra Vista", zipCodes: "85635 | 85650", hardness: "140 PPM (mg/L) or 9 gpg" },
        { city: "Tempe", zipCodes: "85281 | 85282 | 85283 | 85284 | 86443", hardness: "210 PPM (mg/L) or 12 gpg" },
        { city: "Tucson", zipCodes: "85746 | 85756 | 85711 | 85745 | 85730 | 85741 | 85712 | 85704 | 85716 | 85743 | 85742 | 85718 | 85747 | 85750 | 85737 | 85757 | 85749 | 85739 | 85748 | 85715 | 85755 | 85714 | 85735 | 85701 | 85736 | 85708 | 85707 | 85723 | 85724 | 85726", hardness: "211 PPM (mg/L) or 12 gpg" },
        { city: "Yuma", zipCodes: "86438 | 85364 | 85365 | 85367", hardness: "370 PPM (mg/L) or 21 gpg" }
      ]
    },
    {
      title: "Mining and Water Hardness",
      paragraphs: [
        "The mining of Copper has been a major industry for the state of Arizona since the 19th century. As of 2006, Arizona was listed as the top copper producer in the United States. Copper mining also produces gold, silver, lead, and molybdenum metal as a byproduct. Arizona is also the nation's second-largest producer of Molybdenum metal. Other industrial minerals used in construction, such as limestone, sand, gravel, gypsum, and clay, are found in abundance in Arizona. The water used in the mining industry is mineral-rich, with a hardness that can reach up to 10,000 PPM."
      ]
    },
    {
      title: "Solutions to your Water Quality Problems",
      paragraphs: [
        "Fixing your water quality issues in the state of Arizona will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system, or other whole home water treatment solutions.",
        "A problem that almost all Arizona residents will have to deal with is hard water. One old-fashioned, inefficient, expensive, and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener, you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.",
        "Alternative water treatment solutions such as \"water conditioners\" have been gaining popularity in recent years because they are cheap to operate and the best eco-friendly solution for hard water. Hydropath technology, which powers the HydroFLOW water conditioners, is by far the most efficient and cost-effective eco-friendly solution to deal with hard water problems. To learn more about how HydroFLOW solves the problems created by hard water, please check out our technology page. You might want to read this blog that explains the difference between water conditioners and water softeners: Water Conditioner vs. Water Softener Blog."
      ]
    }
  ];

  return (
    <StateWaterHardnessTemplate
      stateName="Arizona"
      metaDescription="Arizona water hardness ranges from 210-615 PPM (very hard). Find water hardness data for Phoenix, Tucson, Scottsdale and other Arizona cities."
      heroImageUrl="https://hydroflow-usa.com/assets/pics/44721667846973.jpg"
      sections={sections}
    />
  );
}