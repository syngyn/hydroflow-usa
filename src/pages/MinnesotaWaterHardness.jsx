import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function MinnesotaWaterHardness() {
  const cityData = [
    { city: "Minneapolis", zipCodes: "55401-55454", hardness: "65 PPM (mg/L) or 4 gpg" },
    { city: "Saint Paul", zipCodes: "55101-55155", hardness: "175 PPM (mg/L) or 10 gpg" },
    { city: "Rochester", zipCodes: "55901 | 55902 | 55904 | 55905 | 55906", hardness: "323 PPM (mg/L) or 19 gpg" },
    { city: "Duluth", zipCodes: "55802-55814", hardness: "45 PPM (mg/L) or 3 gpg" },
    { city: "Maple Grove", zipCodes: "55311", hardness: "453 PPM (mg/L) or 26 gpg" },
    { city: "Minnetonka", zipCodes: "55345", hardness: "310 PPM (mg/L) or 18 gpg" },
    { city: "Lakeville", zipCodes: "55044", hardness: "308 PPM (mg/L) or 18 gpg" },
    { city: "Shakopee", zipCodes: "55379", hardness: "333 PPM (mg/L) or 20 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Minnesota Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Minnesota water hardness levels by city. Find water hardness data for Minneapolis, St. Paul, Rochester and more Minnesota cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://water.usgs.gov/edu/images/characteristics/hard-water-map.jpg" 
              alt="Minnesota Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>Minnesota</h1>
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
              <h2>Water Quality in the State of Minnesota</h2>
              <p>
                Minnesota, the "bread and butter state", is best known for its numerous lakes, forests and extravagant fairs. Minnesota residents get their drinking water from a variety of sources. 75% of all Minnesotans get their water from wells that pull water from underground aquifers. Residents in more populated areas such as Minneapolis, St. Paul and St. Cloud rely mainly on the Mississippi River for their water source. Duluth residents receive their water from Lake Superior.
              </p>

              <h2>Water Hardness by City</h2>
              <p>
                Minnesota water is considered hard to very hard depending on the location with an average state range of 192 PPM. The hardest water in the state hails from Minnetonka city, their water comes from the Jordan Aquifer and provides a water hardness level of 310 PPM. While most Minnesota cities have hard water, there are a few cities with moderately soft water. Minneapolis water is considered moderately soft, at 65 Parts Per Million.
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

              <h2>Farming, Food Processing and Hard Water</h2>
              <p>
                Minnesota is the United States' largest producer of sugar beets, wild rice and green peas. The state is also a leading producer of hogs, corn, soybeans and wheat. Minnesota is home to some of the country's biggest food processing companies, which makes food processing the second most important industry for the state.
              </p>
              <p>
                As a great deal of Minnesota has water rich in calcium (the primary source of water hardness), many farms and food process plants experience issues related to scale buildup in their irrigators, production and processing equipment.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Minnesota will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that almost all Minnesota residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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