import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function IndianaWaterHardness() {
  const cityData = [
    { city: "Batesville", zipCodes: "47005", hardness: "322 PPM (mg/L) or 19 gpg" },
    { city: "Bloomington", zipCodes: "47401 | 47403 | 47404 | 47405 | 47406 | 47408", hardness: "339 PPM (mg/L) or 20 gpg" },
    { city: "Carmel", zipCodes: "46032 | 46033", hardness: "137 PPM (mg/L) or 8 gpg" },
    { city: "Evansville", zipCodes: "47708 | 47710 | 47711 | 47712 | 47713 | 47714 | 47715 | 47720 | 47725", hardness: "124 PPM (mg/L) or 7 gpg" },
    { city: "Fort Wayne", zipCodes: "46802 | 46803 | 46804 | 46805 | 46806 | 46807 | 46808 | 46809 | 46814 | 46815 | 46816 | 46818 | 46819 | 46825 | 46835 | 46845", hardness: "129 PPM (mg/L) or 7.5 gpg" },
    { city: "Indianapolis", zipCodes: "46201 | 46202 | 46203 | 46204 | 46205 | 46208 | 46214 | 46216 | 46217 | 46218 | 46219 | 46220 | 46221 | 46222 | 46224 | 46225 | 46226 | 46227 | 46228 | 46229 | 46231 | 46234 | 46235 | 46236 | 46237 | 46239 | 46240 | 46241 | 46250 | 46254 | 46256 | 46259 | 46260 | 46268 | 46278 | 46280 | 46290", hardness: "274 PPM (mg/L) or 16 gpg" },
    { city: "Kokomo", zipCodes: "46901 | 46902", hardness: "440 PPM (mg/L) or 26 gpg" },
    { city: "Lafayette", zipCodes: "47901 | 47904 | 47905 | 47909", hardness: "331 PPM (mg/L) or 20 gpg" },
    { city: "Muncie", zipCodes: "47302 | 47303 | 47304 | 47305 | 47306", hardness: "345 PPM (mg/L) or 20 gpg" },
    { city: "South Bend", zipCodes: "46601 | 46613 | 46614 | 46615 | 46616 | 46617 | 46619 | 46628 | 46635 | 46637", hardness: "370 PPM (mg/L) or 22 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Indiana Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Indiana water hardness levels by city. Find water hardness data for Indianapolis, Fort Wayne, South Bend and more Indiana cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://hydroflow-usa.com/assets/pics/61791667848232.jpg" 
              alt="Indiana Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Indiana</h1>
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
              <h2>Water Quality in the State of Indiana</h2>
              <p>
                Located in the Great Lakes region, Indiana has a population of 6.7 million people, with the most populous city being Indianapolis. Indiana has an abundance of waterways, with more than 35,000 miles of rivers, 100,000 acres of lakes and reservoirs, and Great Lake, bordering the upper east side. Indiana's primary surface water sources are provided to industry, agriculture, and energy as a crucial part of operations. Residents subsequentially depend on groundwater for their potable water usage.
              </p>

              <h2>Water Hardness by City</h2>
              <p>
                Indiana has very hard water. The average water hardness for the state is 262 PPM. Indianapolis, the largest municipality in Indiana, has a water hardness level of 274 PPM. Some of the hardest water in the state comes from South Bend with 370 PPM, and Lafayette with 331 PPM.
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

              <h2>Advanced Manufacturing and Water Hardness</h2>
              <p>
                Indiana has been the leading steel producer in the United States for more than four decades. They produce more than twice the second steel-producing state in the US (Ohio), contributing to more than a fourth of the nation's steel. Steel requires a great deal of water during processing.
              </p>
              <p>
                With water hardness levels as high as 560 PPM in some Indiana cities, steel manufacturing equipment can rapidly clog up with hard-scale deposits and necessitate costly facility-wide shutdowns for maintenance and repairs.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Indiana will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that almost all Indiana residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
              </p>
              <p>
                Alternative water treatment solutions such as "water conditioners" have been gaining popularity in recent years because they are cheap to operate and the best eco-friendly solution for hard water. Hydropath technology, which powers the HydroFLOW water conditioners is by far the most efficient and cost-effective eco-friendly solution to deal with hard water problems. To learn more about how HydroFLOW solves the problems created by hard water, please check out our <Link to={createPageUrl('Technology')} className="text-cyan-600 hover:underline">technology page</Link>.
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