import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function NebraskaWaterHardness() {
  const cityData = [
    { city: "Omaha", zipCodes: "68102 | 68104 | 68105 | 68106 | 68107 | 68108 | 68110 | 68111 | 68112 | 68114 | 68116 | 68117 | 68118 | 68122 | 68124 | 68127 | 68130 | 68131 | 68132 | 68134 | 68135 | 68136 | 68137 | 68138 | 68142", hardness: "188 PPM (mg/L) or 11 gpg" },
    { city: "Lincoln", zipCodes: "68502-68532", hardness: "199 PPM (mg/L) or 12 gpg" },
    { city: "Bellevue", zipCodes: "68005 | 68123 | 68147", hardness: "30 PPM (mg/L) or 2 gpg" },
    { city: "Hastings", zipCodes: "68901", hardness: "231 PPM (mg/L) or 13 gpg" },
    { city: "Beatrice", zipCodes: "68310", hardness: "210 PPM (mg/L) or 12 gpg" },
    { city: "Grand Island", zipCodes: "68801 | 68803", hardness: "255 PPM (mg/L) or 15 gpg" },
    { city: "Papillion", zipCodes: "68406 | 68133", hardness: "222 PPM (mg/L) or 13 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Nebraska Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Nebraska water hardness levels by city. Find water hardness data for Omaha, Lincoln, Grand Island and more Nebraska cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://hydroflow-usa.com/assets/pics/10361667848911.jpg" 
              alt="Nebraska Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>Nebraska</h1>
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
              <h2>Water Quality in the state of Nebraska</h2>
              <p>
                Nebraska has an overabundance of water available to the state; both groundwater and surface water are readily available. Nebraska has a great amount of water supplies stored in underground aquifers. 85% of Nebraska's population uses groundwater as their drinking water source.
              </p>

              <h2>Water Hardness by City</h2>
              <p>
                Nebraska water is considered hard. The average water hardness for the Nebraska resident is around 204 PPM. The highest hard water number comes from Grand Island at 255 PPM and the city with the softest water is Bellevue with 30 PPM. Omaha water is 188 PPM and is considered hard according to the USGS water hardness measures.
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
                Nebraska has a strong farming community with agriculture ranking as the state's top-producing industry. Top leading commodities are cattle, hogs, corn, soybeans, eggs, dairy, beans and sugar beets. Nebraska has just under 50,000 farms and ranches with an average of 907 acres. 1 in 4 jobs is agriculture-related.
              </p>
              <p>
                As Nebraska has water rich in calcium (the primary source of water hardness), many farms and food process plants experience issues related to scale buildup in their irrigators, production, and processing equipment, due to the mass quantities of water flow every day.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Nebraska will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that almost all Nebraska residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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