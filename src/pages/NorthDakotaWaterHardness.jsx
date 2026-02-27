import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function NorthDakotaWaterHardness() {
  const cityData = [
    { city: "Fargo", zipCodes: "58102 | 58103 | 58104 | 58105", hardness: "289 PPM (mg/L) or 17 gpg" },
    { city: "Bismarck", zipCodes: "58501 | 58503 | 58504 | 58505", hardness: "123 PPM (mg/L) or 7 gpg" },
    { city: "Grand Forks", zipCodes: "58201 | 58202 | 58203", hardness: "214 PPM (mg/L) or 12 gpg" },
    { city: "Lisbon", zipCodes: "58054", hardness: "200 PPM (mg/L) or 12 gpg" },
    { city: "Minot", zipCodes: "58701 | 58702 | 58703 | 58707", hardness: "300 PPM (mg/L) or 17 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>North Dakota Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to North Dakota water hardness levels by city. Find water hardness data for Fargo, Bismarck, Grand Forks and more North Dakota cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://hydroflow-usa.com/assets/pics/36381667849203.jpg" 
              alt="North Dakota Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">North Dakota</h1>
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
              <h2>Water Quality in the State of North Dakota</h2>
              <p>
                North Dakota, located in the northern Midwest region, carries breathtaking sceneries, miles of farmlands and thriving communities. Consistently ranked #1 for quality of life and fiscal stability, North Dakota continues to be a top choice for relocation. North Dakota residents receive their water from underground aquifers and surface water, such as rivers and lakes.
              </p>

              <h2>Water Hardness Summary</h2>
              <p>
                North Dakota's average water hardness is 214 PPM, which is considered hard based on the USGS water hardness measures. Bismarck, the state capital, has a water hardness level of 123 PPM. Fargo has 289 PPM, which is described as very hard water and Minot has the hardest water in the state with 300 PPM.
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
                North Dakota has a strong farming backbone with agriculture ranking as the state's most integral industry and making it a top US producer for numerous crops. Major agriculture commodities are beans, canola, flaxseed, honey, durum, wheat and cattle. North Dakota has nearly 40 million acres of ranches and farms totaling 90% of the state's land.
              </p>
              <p>
                As North Dakota has water rich in calcium (the primary source of water hardness), many farms and food process plants experience issues related to scale buildup in their irrigators, production, and processing equipment, due to the mass quantities of water flow every day.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of North Dakota will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem most North Dakota residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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