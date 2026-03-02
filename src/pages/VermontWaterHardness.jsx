import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function VermontWaterHardness() {
  const cityData = [
    { city: "Burlington", zipCodes: "5401 | 5405 | 5408", hardness: "69 PPM (mg/L) or 4 gpg" },
    { city: "South Burlington", zipCodes: "5403", hardness: "59 PPM (mg/L) or 3 gpg" },
    { city: "Rutland", zipCodes: "5701", hardness: "55 PPM (mg/L) or 3 gpg" },
    { city: "Montpelier", zipCodes: "5602", hardness: "67 PPM (mg/L) or 4 gpg" },
    { city: "Barre", zipCodes: "5641", hardness: "58 PPM (mg/L) or 3 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Vermont Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Vermont water hardness levels by city. Find water hardness data for Burlington, Montpelier, Rutland and more Vermont cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/5e0dede1b_42341667849679.jpg" 
              alt="Vermont Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>Vermont</h1>
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
              <h2>Water Quality in the State of Vermont</h2>
              <p>
                Vermont is a state in the northeastern United States; known for its natural landscape (which is primarily forested), ski slopes and maple syrup. The water supply in Vermont is from groundwater and surface waters, such as Lake Champlain, which is the primary water source for the city of Burlington.
              </p>

              <h2>Water Hardness by City</h2>
              <p>
                Vermont water is considered moderately hard. The average water hardness for the Vermont resident is around 60 PPM. Montpelier, the state capital, has a water hardness level of 67 PPM. Burlington, the most populated city in Vermont has 69 PPM, which according to USGS water hardness measures is considered soft water.
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

              <h2>Mining and Water Hardness</h2>
              <p>
                The mining of sand, gravel, crushed stone and granite has been a major industry for the state of Vermont since the early 1900s. As of 2014, Vermont was listed as the top granite producer in the United States, and the biggest granite quarry in the USA is located near the city of Barre. Vermont is also the largest producer of slate rock in the country. The water used in the mining industry is mineral-rich, with a hardness that can reach up to 1,000 PPM.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Vermont will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that some of Vermont residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
              </p>
              <p>
                Alternative water treatment solutions such as "water conditioners" have been gaining popularity in recent years because they are cheap to operate and the best eco-friendly solution for hard water. Hydropath technology, which powers the HydroFLOW water conditioners is by far the most efficient, cost-effective and eco-friendly solution to deal with hard water problems. To learn more about how HydroFLOW solves the problems created by hard water, please check out our <Link to={createPageUrl('Technology')} className="text-cyan-600 hover:underline">technology page</Link>.
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