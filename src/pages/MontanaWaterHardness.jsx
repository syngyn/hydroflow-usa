import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function MontanaWaterHardness() {
  const cityData = [
    { city: "Billings", zipCodes: "59101 | 59102 | 59105 | 59106", hardness: "123 PPM (mg/L) or 7 gpg" },
    { city: "Missoula", zipCodes: "59801 | 59802 | 59803 | 59804 | 59808", hardness: "175 PPM (mg/L) or 10 gpg" },
    { city: "Great Falls", zipCodes: "59401 | 59404 | 59405", hardness: "147 PPM (mg/L) or 9 gpg" },
    { city: "Helena", zipCodes: "59601 | 59602", hardness: "25 PPM (mg/L) or 1 gpg" },
    { city: "Butte", zipCodes: "59701 | 59703 | 59750", hardness: "54 PPM (mg/L) or 3 gpg" },
    { city: "Bozeman", zipCodes: "59715 | 59718", hardness: "57 PPM (mg/L) or 3 gpg" },
    { city: "Kalispell", zipCodes: "59901", hardness: "205 PPM (mg/L) or 12 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Montana Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Montana water hardness levels by city. Find water hardness data for Billings, Missoula, Great Falls and more Montana cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://hydroflow-usa.com/assets/pics/35751667848860.jpg" 
              alt="Montana Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>Montana</h1>
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
              <h2>Water Quality in Montana</h2>
              <p>
                Montana is a sprawling state with a plethora of natural beauty. Home to numerous mountain ranges, and national parks such as Yellowstone and Glacier National Park. Montana potable water sources come from rivers, lakes, streams and underground aquifers. 96% of Montana's water is used for irrigation purposes.
              </p>

              <h2>Water Hardness Summary</h2>
              <p>
                Montana water is considered slightly hard with an average state range of 91 PPM. The hardest water in the state comes from Kalispell, with a water hardness level of 175 PPM. While many Montana cities have hard water, such as Missoula (175 PPM) and Great Falls (147 PPM), there are a few cities with moderately soft water. Helena water is considered very soft, at 25 Parts Per Million.
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
                Montana's economy largely depends on its agriculture and forestry industry, with 28,000 farms on more than 59 million acres. Agricultural highlights include beef cattle, grain, sheep, potatoes, sugar beets, wheat and fruits. In addition to agriculture, Montana is a leading lumbering state, accessing close to half of the states 13 million acres of forests for lumber production.
              </p>
              <p>
                As a great deal of Montana has water rich in calcium (the primary source of water hardness), many farms and food processing plants experience issues related to scale buildup in their irrigators and equipment.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Montana will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that many Montana residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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