import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function WisconsinWaterHardness() {
  const cityData = [
    { city: "Milwaukee", zipCodes: "53202-53295", hardness: "136 PPM (mg/L) or 8 gpg" },
    { city: "Madison", zipCodes: "53702-53792", hardness: "325 PPM (mg/L) or 19 gpg" },
    { city: "Green Bay", zipCodes: "54301-54313", hardness: "130 PPM (mg/L) or 8 gpg" },
    { city: "Racine", zipCodes: "53402-53406", hardness: "140 PPM (mg/L) or 8 gpg" },
    { city: "Appleton", zipCodes: "54911-54915", hardness: "96 PPM (mg/L) or 6 gpg" },
    { city: "Janesville", zipCodes: "53545-53548", hardness: "310 PPM (mg/L) or 18 gpg" },
    { city: "Wausau", zipCodes: "53545-53548", hardness: "90 PPM (mg/L) or 5 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Wisconsin Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Wisconsin water hardness levels by city. Find water hardness data for Milwaukee, Madison, Green Bay and more Wisconsin cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/2a07915c9_wisconsin.png" 
              alt="Wisconsin Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>Wisconsin</h1>
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
              <h2>Water Quality in the State of Wisconsin</h2>
              <p>
                Wisconsin has an abundance of water that comes from 4 main Aquifers, 15,000 lakes and 32,000 miles of rivers and streams. The vast majority of Wisconsin's public water systems rely on groundwater pumped from wells. However, 56 public water systems use surface water from lakes to provide drinking water to their customers.
              </p>

              <h2>Water Hardness by City</h2>
              <p>
                Wisconsin water is considered moderately hard. The average water hardness for the Wisconsin resident is around 158 PPM. The highest hard water number comes from Madison with 350 PPM, the city with the softest water is Wausau with 90 PPM. Green Bay, has a water hardness level of 130 PPM, a moderately hard number, according to the USGS water hardness page.
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

              <h2>Dairy Industry and Hard Water</h2>
              <p>
                Wisconsin is an integral part of the United States dairy market and is the top cheese producer in the country. Today, Wisconsin is home to more than one million dairy cows and a growing segment of goats and sheep. Dairy production is by far the largest agricultural sector in the state, generating $43.4 billion annually for Wisconsin's economy.
              </p>
              <p>
                As a great deal of Wisconsin has water rich in calcium (the primary source of water hardness), many dairy farms and food process plants can experience issues related to scale buildup in their milking and processing equipment, due to large quantities of water flow every day.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Wisconsin will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that almost all Wisconsin residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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