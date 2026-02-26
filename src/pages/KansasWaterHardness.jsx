import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function KansasWaterHardness() {
  const cityData = [
    { city: "Wichita", zipCodes: "67202 | 67203 | 67204 | 67205 | 67206 | 67207 | 67208 | 67209 | 67210 | 67211 | 67212 | 67213 | 67214 | 67215 | 67216 | 67217 | 67218 | 67219 | 67220 | 67223 | 67226 | 67227 | 67228 | 67230 | 67232 | 67235 | 67260", hardness: "131 PPM (mg/L) or 8 gpg" },
    { city: "Overland Park", zipCodes: "66204 | 66207 | 66210 | 66212 | 66213 | 66214 | 66221 | 66223 | 66224", hardness: "200 PPM (mg/L) or 12 gpg" },
    { city: "Olathe", zipCodes: "66061 | 66062", hardness: "180 PPM (mg/L) or 10 gpg" },
    { city: "Topeka", zipCodes: "66603 | 66604 | 66605 | 66606 | 66607 | 66608 | 66609 | 66610 | 66611 | 66612 | 66614 | 66615 | 66616 | 66617 | 66618 | 66619 | 66621 | 66622", hardness: "190 PPM (mg/L) or 11 gpg" },
    { city: "Kansas City", zipCodes: "66101 | 66102 | 66103 | 66104 | 66105 | 66106 | 66109 | 66111 | 66112 | 66115 | 66118", hardness: "330 PPM (mg/L) or 19 gpg" },
    { city: "Lawrence", zipCodes: "66044 | 66045 | 66046 | 66047 | 66049", hardness: "165 PPM (mg/L) or 10 gpg" },
    { city: "Manhattan", zipCodes: "66502 | 66503 | 66506", hardness: "83 PPM (mg/L) or 5 gpg" },
    { city: "Winfield", zipCodes: "67156", hardness: "140 PPM (mg/L) or 8 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Kansas Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Kansas water hardness levels by city. Find water hardness data for Wichita, Kansas City, Topeka and more Kansas cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://hydroflow-usa.com/assets/pics/29481667848331.jpg" 
              alt="Kansas Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Kansas</h1>
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
              <h2>Water Quality in the State of Kansas</h2>
              <p>
                Kansas water supply comes from mostly groundwater, such as the High Plains Aquifer and surface waters, like the Mississippi River and the Kansas River. 85% of Kansas water is used in irrigation systems that provide water for agriculture. The remaining 15% is for public use and is being supplied by multiple municipalities.
              </p>

              <h2>Water Hardness Summary</h2>
              <p>
                Water Hardness in Kansas is high and is very common, due to the fact that the Kansas water supply mainly comes from underground wells that are rich with minerals such as calcium and magnesium. The water hardness average for Kansas is 299 PPM. Some cities with very hard water, based on USGS water hardness measures are Kansas City (330 PPM) and the state capital Topeka (182 PPM). Wichita, the most populous city in Kansas, has a water hardness level of 131 PPM (or 8 grains per gallon).
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

              <h2>Agriculture and Hard Water</h2>
              <p>
                Kansas has a strong agricultural backbone. Kansas has been a top agriculture producer since before its statehood. Top economical producers are wheat, grain sorghum, beef and dairy.
              </p>
              <p>
                As Kansas has water rich in calcium (the primary source of water hardness), many farms and food process plants experience issues related to scale buildup in their irrigators, production, and processing equipment, due to the mass quantities of water flow every day. In addition, contaminants polluting soil and waterways have increased greatly over the past few decades and there is a greater need for waste and chemical control.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Kansas will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that almost all Kansas residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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