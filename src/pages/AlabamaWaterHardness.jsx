import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function AlabamaWaterHardness() {
  const cityData = [
    { city: "Alabaster", zipCodes: "35007 | 35114", hardness: "204.5 PPM (mg/L) or 12 gpg" },
    { city: "Auburn", zipCodes: "36830 | 36832 | 36849", hardness: "38.7 PPM (mg/L) or 2.3 gpg" },
    { city: "Birmingham", zipCodes: "35203-35254", hardness: "87 PPM (mg/L) or 5 gpg" },
    { city: "Huntsville", zipCodes: "35801-35896", hardness: "81 PPM (mg/L) or 5 gpg" },
    { city: "Madison", zipCodes: "35756 | 35757 | 35758", hardness: "98 PPM (mg/L) or 5 gpg" },
    { city: "Mobile", zipCodes: "36604-36695", hardness: "43 PPM (mg/L) or 3 gpg" },
    { city: "Montgomery", zipCodes: "36104-36117", hardness: "63 PPM (mg/L) or 4 gpg" }
  ];

  return (
    <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/0009d583d_3861667848445.jpg" 
              alt="Alabama Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>Alabama</h1>
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
              <h2>Water Quality in the State of Alabama</h2>
              <p>
                Alabama is home to an estimated 4.9 million residents. It has the most inland waterways in the US with a total of 1,500 miles. Roughly 553 trillion gallons of water is stored in underground Alabama aquifers. Groundwater is the primary source of water for 44% of the population. Other drinking water sources come from surface waters such as rivers and reservoirs throughout Alabama state.
              </p>

              <h2>Water Hardness by City</h2>
              <p>
                Alabama water is moderately soft with a state average hardness of 61 PPM. While the majority of Alabama cities share soft water such as the water in Mobile (43 PPM), whose water comes from Big Creek Lake, some hard water areas are Huntsville (81 PPM), and Madison (98 PPM). This is due to limestone-rich aquifers in the Tennessee river valley.
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
                Alabama's top manufacturing industries are automotive, chemical, technology, forestry and aeronautics. Product processing in most manufacturing plants requires water. Cooling towers and HVAC are imperative to keeping operations running smoothly. Though Alabama has relatively soft water, industrial facilities can discover that they still experience headaches related to scale buildup and their equipment can deteriorate at a rapid pace and experience efficiency loss.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Alabama will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that some Alabama residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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
  );
}