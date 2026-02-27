import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function DelawareWaterHardness() {
  const cityData = [
    { city: "Wilmington", zipCodes: "19801-19810", hardness: "127 PPM (mg/L) or 7 gpg" },
    { city: "Dover", zipCodes: "19901 | 19904", hardness: "64 PPM (mg/L) or 4 gpg" },
    { city: "Newark", zipCodes: "19702 | 19711 | 19713 | 19716 | 19717", hardness: "122 PPM (mg/L) or 7 gpg" },
    { city: "Middletown", zipCodes: "19709", hardness: "119 PPM (mg/L) or 7 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Delaware Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Delaware water hardness ranges from 64-127 PPM (moderately hard to hard). Find water hardness data for Wilmington, Dover, Newark and other Delaware cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://hydroflow-usa.com/assets/pics/78891667847298.jpg" 
              alt="Delaware Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>Delaware</h1>
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
              <h2>Water Quality in the State of Delaware</h2>
              <p>
                Delaware residents get their drinking water from either groundwater or surface water sources, depending on where they live. About two-thirds of Delaware households are connected to public water systems that use groundwater sources; the remaining one-third obtains water from surface water sources. The major sources of groundwater are the Columbia Aquifer, the Cheswold Aquifer and the Piney Point Aquifer.
              </p>

              <h2>Water Hardness Summary</h2>
              <p>
                Delaware water is considered hard to very hard. The average water hardness for the Delaware resident is 100-300 PPM. Wilmington is the most populous city in Delaware with a population of just under 71,000 people. Wilmington has relatively hard water with 127 PPM.
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
                The farming and food processing industry are thriving sectors in Delaware. The largest farming product is broiler chicken, producing $946 million in gross product a year. Other top agriculture products from Delaware are soybeans, chicken eggs, wheat, dairy products, sweet corn, watermelon, cattle and barley.
              </p>
              <p>
                As a great deal of Delaware has water rich in calcium (the primary source of water hardness), many farms and food processing plants experience issues related to scale buildup in their irrigators, production and processing equipment.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Delaware will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that almost all Delaware residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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