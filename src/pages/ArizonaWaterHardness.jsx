import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function ArizonaWaterHardness() {
  const cityData = [
    { city: "Bullhead City", zipCodes: "86429 | 86442", hardness: "615 PPM (mg/L) or 36 gpg" },
    { city: "Chandler", zipCodes: "85225 | 85224 | 85286 | 85249 | 85226 | 85248", hardness: "292 PPM (mg/L) or 17 gpg" },
    { city: "Gilbert", zipCodes: "85233 | 85234 | 85295 | 85296 | 85297 | 85298", hardness: "215 PPM (mg/L) or 13 gpg" },
    { city: "Glendale", zipCodes: "85301-85310", hardness: "291 PPM (mg/L) or 17 gpg" },
    { city: "Mesa", zipCodes: "85201-85215", hardness: "292 PPM (mg/L) or 17 gpg" },
    { city: "Phoenix", zipCodes: "85003-85086", hardness: "225 PPM (mg/L) or 13 gpg" },
    { city: "Scottsdale", zipCodes: "85250-85266", hardness: "343 PPM (mg/L) or 20 gpg" },
    { city: "Tempe", zipCodes: "85281-85284", hardness: "210 PPM (mg/L) or 12 gpg" },
    { city: "Tucson", zipCodes: "85701-85757", hardness: "211 PPM (mg/L) or 12 gpg" },
    { city: "Yuma", zipCodes: "85364 | 85365 | 85367 | 86438", hardness: "370 PPM (mg/L) or 21 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Arizona Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Arizona water hardness ranges from 210-615 PPM (very hard). Find water hardness data for Phoenix, Tucson, Scottsdale and other Arizona cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://hydroflow-usa.com/assets/pics/44721667846973.jpg" 
              alt="Arizona Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>Arizona</h1>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <h2>Water Quality in the State of Arizona</h2>
              <p>
                Water quality in Arizona is governed by the Arizona Department of Environmental Quality. Arizona has relatively hard water. With only 7 inches of annual rainfall in the Phoenix metro area, surface water cannot be solely relied on. Most of the water for public use comes from the Colorado River and groundwater sources known as aquifers. Groundwater is extracted from the Black Mesa and Navajo aquifers, using wells. Depending on the location and depth of the well, the water hardness in these aquifers can range from 200-10,000 PPM.
              </p>

              <h2>Arizona Water Hardness by City</h2>
              <p>
                Bullhead City has the hardest municipal water source in the state and is also the second highest recorded municipal hardness level we have located in the United States with 615 PPM. The majority of AZ cities have a hardness level of between 210-350 PPM. The most populous Arizona city, Phoenix, has a hardness level of 230 Parts Per Million (PPM). Tucson has a water hardness level of 211 PPM, and Chandler's water is 292 PPM.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="min-w-full border-collapse border border-slate-300">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-300 px-4 py-3 text-left font-semibold">City</th>
                      <th className="border border-slate-300 px-4 py-3 text-left font-semibold">Water Hardness Data</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cityData.map((item, index) => (
                      <tr key={index} className="hover:bg-slate-50">
                        <td className="border border-slate-300 px-4 py-3">
                          <strong>{item.city}</strong><br />
                          <span className="text-sm text-slate-600">{item.zipCodes}</span>
                        </td>
                        <td className="border border-slate-300 px-4 py-3">{item.hardness}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-slate-600">
                PPM = Parts Per Million<br />
                mg/L = Milligrams Per Liter<br />
                gpg = Grains Per Gallon
              </p>

              <h2>Mining and Water Hardness</h2>
              <p>
                The mining of Copper has been a major industry for the state of Arizona since the 19th century. As of 2006, Arizona was listed as the top copper producer in the United States. Copper mining also produces gold, silver, lead, and molybdenum metal as a byproduct. The water used in the mining industry is mineral-rich, with a hardness that can reach up to 10,000 PPM.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Arizona will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system, or other whole home water treatment solutions.
              </p>
              <p>
                A problem that almost all Arizona residents will have to deal with is hard water. One old-fashioned, inefficient, expensive, and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener, you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
              </p>
              <p>
                Alternative water treatment solutions such as "water conditioners" have been gaining popularity in recent years because they are cheap to operate and the best eco-friendly solution for hard water. Hydropath technology, which powers the HydroFLOW water conditioners, is by far the most efficient and cost-effective eco-friendly solution to deal with hard water problems. To learn more about how HydroFLOW solves the problems created by hard water, please check out our <Link to={createPageUrl('Technology')} className="text-cyan-600 hover:underline">technology page</Link>.
              </p>

              <div className="my-8 text-center">
                <Link to={createPageUrl('Products')}>
                  <Button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full px-8 py-6 text-lg">
                    View Our Products
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}