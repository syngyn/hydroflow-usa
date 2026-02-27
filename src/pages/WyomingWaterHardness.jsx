import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function WyomingWaterHardness() {
  const cityData = [
    { city: "Cheyenne", zipCodes: "82001 | 82007 | 82009", hardness: "110 PPM (mg/L) or 6 gpg" },
    { city: "Casper", zipCodes: "82601 | 82604 | 82609", hardness: "208 PPM (mg/L) or 12 gpg" },
    { city: "Laramie", zipCodes: "82070 | 82072 | 82073", hardness: "184 PPM (mg/L) or 11 gpg" },
    { city: "Jackson", zipCodes: "83001", hardness: "113 PPM (mg/L) or 7 gpg" },
    { city: "Gillette", zipCodes: "82716 | 82718", hardness: "10 PPM (mg/L) or 1 gpg" },
    { city: "Rock Springs", zipCodes: "82901", hardness: "165 PPM (mg/L) or 10 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Wyoming Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Wyoming water hardness levels by city. Find water hardness data for Cheyenne, Casper, Laramie and more Wyoming cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://hydroflow-usa.com/assets/pics/2081667849870.jpg" 
              alt="Wyoming Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>Wyoming</h1>
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
              <h2>Water Quality in the State of Wyoming</h2>
              <p>
                Wyoming is known for its wildlife, prairies, farmland and famous national parks such as Yellowstone National Park. Wyoming is the 10th largest state by area and has the second to last population density in America. The water supply for Wyoming comes from surface water, groundwater, snow and ice fields.
              </p>

              <h2>Water Hardness by City</h2>
              <p>
                Wyoming water is considered moderately hard. The average water hardness for the Wyoming resident is around 120 PPM. The city with the hardest water is Casper, at 208 PPM. The city with the softest water is Gillette, with 10 PPM. Cheyenne water is 110 PPM and is considered slightly hard according to the USGS water hardness page.
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
                Agriculture is one of the top three industries in Wyoming. It has 30.2 million acres dedicated to farmland alone. Wyoming's top five agricultural products are beef cattle production, hay, sugar beets, wheat, corn and sheep.
              </p>
              <p>
                A great deal of Wyoming water for agriculture and farming is surface water, which is rich in calcium (the primary source of water hardness). Many farms and food process plants experience issues related to scale buildup in their irrigators, production, and processing equipment, due to the large quantities of water flow every day.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Wyoming will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that almost all Wyoming residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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