import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function SouthDakotaWaterHardness() {
  const cityData = [
    { city: "Sioux Falls", zipCodes: "57103-57197", hardness: "257 PPM (mg/L) or 15 gpg" },
    { city: "Rapid City", zipCodes: "57701 | 57702 | 57703", hardness: "207 PPM (mg/L) or 12 gpg" },
    { city: "Aberdeen", zipCodes: "57401", hardness: "380 PPM (mg/L) or 22 gpg" },
    { city: "Pierre", zipCodes: "57501", hardness: "345 PPM (mg/L) or 20 gpg" },
    { city: "Vermillion", zipCodes: "57069", hardness: "239 PPM (mg/L) or 14 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>South Dakota Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to South Dakota water hardness levels by city. Find water hardness data for Sioux Falls, Rapid City, Aberdeen and more South Dakota cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://hydroflow-usa.com/assets/pics/37261667849549.jpg" 
              alt="South Dakota Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">South Dakota</h1>
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
              <h2>Water Quality in the State of South Dakota</h2>
              <p>
                South Dakota, is a state with sprawling prairies, fertile farmland, glacial lakes, ranchlands and the famous Mount Rushmore, which is located in Black Hills National Forest. South Dakota water supply comes from surface water, such as the Missouri River, and groundwater.
              </p>

              <h2>South Dakota Water Hardness by City</h2>
              <p>
                Water in South Dakota is considered very hard. The average water hardness for the South Dakota resident is around 285 PPM. The city with the hardest water in Aberdeen, at 380 PPM. The city with the softest water is Rapid City with 207 PPM. Sioux Falls, the most populated city in South Dakota has water that is 257 PPM, which is considered hard according to the USGS water hardness page.
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

              <h2>Agriculture, Farming and Water Hardness</h2>
              <p>
                Agriculture is the largest industry in South Dakota. It has 30.2 million acres dedicated to farmland alone. South Dakota's top five agricultural products are cattle and calves, corn for grain, soybeans, wheat and hogs. South Dakota's water source for agriculture and farming is surface water and groundwater, which is rich in calcium (the primary source of water hardness). Many farms and food processing plants experience issues related to scale buildup in their irrigators, production and processing equipment.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of South Dakota will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that almost all South Dakota residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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