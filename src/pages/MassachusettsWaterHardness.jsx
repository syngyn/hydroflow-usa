import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function MassachusettsWaterHardness() {
  const cityData = [
    { city: "Boston", zipCodes: "2108 | 2109 | 2110 | 2111 | 2113 | 2114 | 2115 | 2116 | 2118 | 2163 | 2199 | 2203 | 2210 | 2215", hardness: "8 PPM (mg/L) or 1 gpg" },
    { city: "Cambridge", zipCodes: "2138 | 2139 | 2140 | 2141 | 2142", hardness: "12 PPM (mg/L) or 1 gpg" },
    { city: "Lowell", zipCodes: "1850 | 1851 | 1852 | 1854", hardness: "10 PPM (mg/L) or 1 gpg" },
    { city: "Pittsfield", zipCodes: "1201", hardness: "8 PPM (mg/L) or 1 gpg" },
    { city: "Springfield", zipCodes: "1103 | 1104 | 1105 | 1107 | 1108 | 1109 | 1118 | 1119 | 1128 | 1129 | 1199", hardness: "13 PPM (mg/L) or 1 gpg" },
    { city: "Worcester", zipCodes: "1603 | 1604 | 1605 | 1606 | 1607 | 1608 | 1609 | 1610", hardness: "8 PPM (mg/L) or 1 gpg" },
    { city: "Vineyard Haven", zipCodes: "2568", hardness: "32 PPM (mg/L) or 2 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Massachusetts Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Massachusetts water hardness levels by city. Find water hardness data for Boston, Cambridge, Worcester and more Massachusetts cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/b04edbec0_78681667848642.jpg" 
              alt="Massachusetts Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>Massachusetts</h1>
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
              <h2>Water Quality in Massachusetts</h2>
              <p>
                Massachusetts is a state that is rich with historical events. Water for the nearly 7 million residents in Massachusetts comes from rivers, streams and aquifers. Massachusetts Water Authority supplies water to the 40 municipalities in the Boston Metropolitan Area. The surface water supply come from the Quabbin Reservoir, Wachusett Reservoir and the Ware River.
              </p>

              <h2>Water Hardness Summary</h2>
              <p>
                Massachusetts has an average water hardness of 10 PPM which is soft by USGS measures. Boston, the most populous city, has a water hardness of 8 PPM. The majority of the state has soft water which is provided by Massachusetts Water Resources Authority.
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

              <h2>Manufacturing and Water Hardness</h2>
              <p>
                Manufacturing is a major industry for Massachusetts. Top manufacturing industries are computers, electronics, chemicals, pharmaceuticals, food and beverage. Product processing in most manufacturing plants requires water. Cooling towers and HVAC are imperative to keeping operations running smoothly. Water hardness levels in some manufacturing plants can be as high as 300 PPM; with water hardness levels this high, manufacturing equipment can deteriorate at a rapid pace and experience efficiency loss.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Massachusetts will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that some Massachusetts residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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