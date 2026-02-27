import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function MarylandWaterHardness() {
  const cityData = [
    { city: "Baltimore", zipCodes: "21201 | 21202 | 21205 | 21206 | 21209 | 21210 | 21211 | 21212 | 21213 | 21214 | 21215 | 21216 | 21217 | 21218 | 21223 | 21224 | 21229 | 21230 | 21231 | 21239 | 21240 | 21250 | 21251", hardness: "185 PPM (mg/L) or 11 gpg" },
    { city: "Frederick", zipCodes: "21701 | 21702 | 21703 | 21704 | 21705", hardness: "99 PPM (mg/L) or 6 gpg" },
    { city: "Gaithersburg", zipCodes: "20877 | 20878 | 20879 | 20882 | 20899", hardness: "71 PPM (mg/L) or 4 gpg" },
    { city: "Annapolis", zipCodes: "21401 | 21402 | 21403 | 21405 | 21409 | 20701", hardness: "70 PPM (mg/L) or 4 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Maryland Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Maryland water hardness levels by city. Find water hardness data for Baltimore, Annapolis, Frederick and more Maryland cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://hydroflow-usa.com/assets/pics/81101667848536.jpg" 
              alt="Maryland Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Maryland</h1>
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
              <h2>Water Quality in the State of Maryland</h2>
              <p>
                Maryland is a small state on the upper east coast with many bordering states (Virginia, Delaware, Pennsylvania, West Virginia and Washington D.C.) and 4,431 miles of Atlantic shoreline. Often called "America in Miniature", Maryland has a diverse topography, with a variety of mountains, beaches, sand dunes, farmlands, forests, and a wide variety of weather. In the Baltimore region, the primary source of drinking water comes from surface waters such as streams and reservoirs.
              </p>

              <h2>Water Hardness by City</h2>
              <p>
                Maryland has an average water hardness of 118 PPM. This is considered hard by USGS measures. Baltimore, the most populous Maryland city, has very hard water at 185 PPM. Some slightly hard water cities are Annapolis (70 PPM) and Frederick, with 99 PPM.
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
                Agriculture is Maryland's largest commercial industry, contributing 8.25 billion annually to Maryland's economy. The state's major agricultural products are poultry and eggs, grain, horticulture, milk production, cattle and calves, vegetables and melons.
              </p>
              <p>
                As much of Maryland has water rich in calcium (the primary source of water hardness), many farms and food processing plants experience issues related to scale buildup in their irrigators, production, and mechanical equipment, due to the mass quantities of water flow every day.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Maryland will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that almost all Maryland residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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