import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function OklahomaWaterHardness() {
  const cityData = [
    { city: "Oklahoma City", zipCodes: "73102-73179", hardness: "154 PPM (mg/L) or 9 gpg" },
    { city: "Tulsa", zipCodes: "74103-74146", hardness: "140 PPM (mg/L) or 8 gpg" },
    { city: "Norman", zipCodes: "73019 | 73026 | 73069 | 73071 | 73072", hardness: "152 PPM (mg/L) or 9 gpg" },
    { city: "Lawton", zipCodes: "73501 | 73505 | 73507", hardness: "161 PPM (mg/L) or 10 gpg" },
    { city: "Stillwater", zipCodes: "74074 | 74075 | 74078", hardness: "123 PPM (mg/L) or 7 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Oklahoma Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Oklahoma water hardness levels by city. Find water hardness data for Oklahoma City, Tulsa, Norman and more Oklahoma cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/7809cd2e5_1031667849357.jpg" 
              alt="Oklahoma Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>Oklahoma</h1>
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
              <h2>Water Quality in the State of Oklahoma</h2>
              <p>
                Oklahoma is located in the south-central region of the United States; featuring beautiful hills, lakes, forests and the Great Plains. Oklahoma water supply comes from groundwater and surface water. Most of the groundwater in Oklahoma is used for crop irrigation and is also the common source of water for the western half of the state. The majority of the surface water in Oklahoma is used for public consumption.
              </p>

              <h2>Water Hardness by City</h2>
              <p>
                Oklahoma water is considered hard. The average water hardness for the Oklahoma resident is around 146 PPM. The highest hard water number comes from Lawton at 161 PPM, the city with the softest water is Stillwater with 123 PPM. Oklahoma City water is 154 PPM and is considered hard according to the USGS water hardness page.
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

              <h2>Oil, Gas and Water Hardness</h2>
              <p>
                Oil and gas production has played a major role in the economic history and development of Oklahoma. In 2019 Oklahoma was the fourth-largest crude oil producer, and it accounted for nearly 5% of the nation's crude oil production. The oil and gas industry uses water in all parts of the operation and that water is often locally sourced from groundwater, rivers or lakes. As Oklahoma has hard water, oil and gas producers are often fighting to keep their operations running and their equipment scale-free.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Oklahoma will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that most Oklahoma residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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