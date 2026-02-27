import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function GeorgiaWaterHardness() {
  const cityData = [
    { city: "Albany", zipCodes: "31701 | 31705 | 31721", hardness: "34 PPM (mg/L) or 2 gpg" },
    { city: "Atlanta", zipCodes: "30303 | 30305 | 30306 | 30307 | 30308 | 30309 | 30310 | 30311 | 30312 | 30313 | 30314 | 30315 | 30316 | 30317 | 30318 | 30319 | 30322 | 30324 | 30326 | 30327 | 30328 | 30329 | 30331 | 30332 | 30334 | 30336 | 30337 | 30338 | 30339 | 30340 | 30341 | 30342 | 30344 | 30345 | 30346 | 30349 | 30350 | 30354 | 30360 | 30363", hardness: "21 PPM (mg/L) or 1 gpg" },
    { city: "Athens", zipCodes: "30601 | 30602 | 30605 | 30607 | 30609", hardness: "120 PPM (mg/L) or 7 gpg" },
    { city: "Augusta", zipCodes: "30901 | 30903 | 30904 | 30905 | 30906 | 30907 | 30909 | 30912", hardness: "58 PPM (mg/L) or 3 gpg" },
    { city: "Brunswick", zipCodes: "31520 | 31523 | 31525", hardness: "58 PPM (mg/L) or 3 gpg" },
    { city: "Columbus", zipCodes: "31901 | 31903 | 31904 | 31906 | 31907 | 31909", hardness: "47 PPM (mg/L) or 3 gpg" },
    { city: "Dalton", zipCodes: "30720 | 30721", hardness: "76 PPM (mg/L) or 4 gpg" },
    { city: "Gainsville", zipCodes: "30501 | 30504 | 30506 | 30507", hardness: "77 PPM (mg/L) or 4 gpg" },
    { city: "Macon", zipCodes: "31201 | 31204 | 31206 | 31207 | 31210 | 31211 | 31213 | 31216 | 31217 | 31220", hardness: "58 PPM (mg/L) or 3 gpg" },
    { city: "Rome", zipCodes: "30160 | 30164 | 30165", hardness: "54 PPM (mg/L) or 3 gpg" },
    { city: "Savannah", zipCodes: "31401 | 31404 | 31405 | 31406 | 31408 | 31409 | 31410 | 31411 | 31415 | 31419", hardness: "57 PPM (mg/L) or 3 gpg" },
    { city: "Valdosta", zipCodes: "31601 | 31602 | 31605 | 31606 | 31698", hardness: "42 PPM (mg/L) or 2 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Georgia Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Georgia water hardness levels by city. Find water hardness data for Atlanta, Savannah, Augusta and more Georgia cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://hydroflow-usa.com/assets/pics/21451556560057.jpg" 
              alt="Georgia Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Georgia</h1>
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
              <h2>Water Quality in the State of Georgia</h2>
              <p>
                Georgia relies on lakes, rivers, reservoirs and groundwater derived from aquifers. Most groundwater is pulled from the Floridian Aquifer and is distributed to cities in southern Georgia such as Albany and Brunswick. Atlanta, the most populous metro area in Georgia, gets its water from the Chattahoochee River, which serves as Atlanta's only local surface water supply. Each day, the Atlanta water system provides approximately 98 million gallons of treated drinking water for more than 1.2 million residents in the metropolitan area.
              </p>

              <h2>Water Hardness Summary</h2>
              <p>
                Georgia water is considered soft water. The average water hardness for the Georgia resident is around 60 PPM. Atlanta, the most populous Georgia city has a water hardness level of 21 PPM which according to USGS water hardness measures is very soft.
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

              <h2>Agriculture and Water Hardness</h2>
              <p>
                Georgia is a leading Agriculture state and is ranked as the number 1 pecan producer in the world. Other top crops are blueberries, peaches, peanuts and poultry. Agribusiness provides around $72 billion in annual revenue for the state of Georgia.
              </p>
              <p>
                Though Georgia state has relatively soft water, farmers can discover that they still experience headaches related to scale buildup on their irrigators and other necessary equipment due to the mass quantities of water flow every day. In addition, contaminants polluting soil and waterways have increased greatly over the past few decades and there is a greater need for waste and chemical control. Many farmers are looking for eco-friendly solutions that can increase the quality and yield of their crops while saving water.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Georgia will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that some Georgia residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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