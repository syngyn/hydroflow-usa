import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function ArkansasWaterHardness() {
  const cityData = [
    { city: "Fayetteville", zipCodes: "72701 | 72703 | 72704", hardness: "27 PPM (mg/L) or 1 gpg" },
    { city: "Fort Smith", zipCodes: "72903 | 72904 | 72901 | 72908 | 72916", hardness: "21 PPM (mg/L) or 1 gpg" },
    { city: "Little Rock", zipCodes: "72201-72227", hardness: "26 PPM (mg/L) or 1 gpg" },
    { city: "Pine Bluff", zipCodes: "71603 | 71601 | 72566", hardness: "86 PPM (mg/L) or 5 gpg" },
    { city: "Springdale", zipCodes: "72762 | 72764 | 72157", hardness: "29 PPM (mg/L) or 2 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Arkansas Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Arkansas water hardness averages 38 PPM (soft water). Find water hardness data for Little Rock, Fayetteville, Fort Smith and other Arkansas cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://hydroflow-usa.com/assets/pics/67581667847030.jpg" 
              alt="Arkansas Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>Arkansas</h1>
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
              <h2>Water Quality in the State of Arkansas</h2>
              <p>
                Arkansas water supply comes mainly from groundwater (aquifers and wells), surface water, rivers, reservoirs and lakes. Lake Winona and Lake Maumelle are the main water sources for the city of Little Rock. The average water hardness in Arkansas is 38 PPM which would be considered soft.
              </p>

              <h2>Water Hardness by City</h2>
              <p>
                Arkansas has one of the lowest averages for hard water in the country at 38 PPM, according to the USGS water hardness measures. Some examples of soft water cities are Little Rock with 26 PPM and Fayetteville with a hardness level of 27 PPM. The hardest water level in the state comes from Pine Bluff, which gets its water from 4 wells that pump from the Sparta Sand Aquifer. The total hardness of this water is 86 Parts Per Million which is considered moderately hard.
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

              <h2>Farming and Water Hardness</h2>
              <p>
                Agriculture is Arkansas' largest industry, producing 16 billion in revenue annually. The state's major agricultural products are rice, cotton, poultry, soybeans and feed grains. Arkansas is the largest rice producer and the 3rd largest cotton producer in the United States. The state has just under 19 million acres of forest land and more than 95% of Arkansas' land resources are used for agriculture and forestry.
              </p>
              <p>
                Though Arkansas has relatively soft water, farmers can discover that they still experience headaches related to scale buildup on their irrigators and other necessary equipment due to the mass quantities of water flow every day.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Arkansas will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that some Arkansas residents will have to deal with is hard water. One old-fashioned, inefficient, expensive, and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener, you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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