import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function AlaskaWaterHardness() {
  const cityData = [
    { city: "Anchorage", zipCodes: "99501 | 99502 | 99503 | 99504 | 99507 | 99508 | 99510 | 99513 | 99515 | 99516 | 99517 | 99518 | 99519 | 99695", hardness: "63 PPM (mg/L) or 4 gpg" },
    { city: "Fairbanks", zipCodes: "99701 | 99706 | 99709 | 99712 | 99775 | 99790", hardness: "142 PPM (mg/L) or 8 gpg" },
    { city: "Juneau", zipCodes: "99801", hardness: "138 PPM (mg/L) or 8 gpg" },
    { city: "Kenai", zipCodes: "99611", hardness: "124 PPM (mg/L) or 7 gpg" },
    { city: "Palmer", zipCodes: "99645", hardness: "100 PPM (mg/L) or 6 gpg" },
    { city: "Soldotna", zipCodes: "99669", hardness: "119 PPM (mg/L) or 7 gpg" },
    { city: "Valdez", zipCodes: "99686", hardness: "65 PPM (mg/L) or 4 gpg" },
    { city: "Wasilla", zipCodes: "99654", hardness: "120 PPM (mg/L) or 7 gpg" }
  ];

  return (
    <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/21d140a59_Alaska.jpg" 
              alt="Alaska Mountains" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>Alaska</h1>
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
              <h2>State of Alaska Water Quality</h2>
              <p>
                Alaska is the largest and most sparsely populated US state, with an estimated 740,000 people spread across 663,268 square miles. The majority of Alaska's population is located in the Anchorage metropolitan area. Drinking water sources can be rivers, lakes, streams, ponds, reservoirs, springs and groundwater. About 83% of the state's public water systems use groundwater.
              </p>

              <h2>Water Hardness by City</h2>
              <p>
                Generally speaking, numbers pulled from AWWU (Anchorage Water and Wastewater Utility) show that Alaska water is considered moderately hard, between 65 – 140 PPM. Eklutna Lake is the major source of water for Anchorage and surrounding cities. Anchorage has the lowest average water hardness number of 63 Parts Per Million. The state capital, Juneau, has a water hardness of 138 PPM and the state's hardest water is in Fairbanks, with a moderately hard water level of 142 PPM.
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
                The oil and gas industry is Alaska's top economic sector, bringing in close to 85% of the state's revenue. Oil was discovered in Prudhoe Bay on the Arctic Ocean coast and became the largest oil field in North America. The oil and gas industry uses water in all parts of the operation and that water is often locally sourced from groundwater, rivers or lakes (both natural and artificial). As Alaska is a hard water state, oil and gas producers are often fighting to keep their operations running and their equipment scale free.
              </p>
              <p>
                Mining is also an important industry in Alaska; mining gold, silver, coal, copper, lead and zinc. The mining sector in Alaska consumes significant amounts of water that can be as hard as 10,000 PPM.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Alaska will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that almost all Alaska residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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
  );
}