import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function OhioWaterHardness() {
  const cityData = [
    { city: "Columbus", zipCodes: "43085 | 43201-43240", hardness: "128 PPM (mg/L) or 7 gpg" },
    { city: "Cleveland", zipCodes: "44101-44144", hardness: "125 PPM (mg/L) or 7 gpg" },
    { city: "Cincinnati", zipCodes: "45202-45255", hardness: "130 PPM (mg/L) or 8 gpg" },
    { city: "Toledo", zipCodes: "43604-43623", hardness: "74 PPM (mg/L) or 4 gpg" },
    { city: "Akron", zipCodes: "44301-44333", hardness: "112 PPM (mg/L) or 6 gpg" },
    { city: "Dayton", zipCodes: "45402-45459", hardness: "155 PPM (mg/L) or 9 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Ohio Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Ohio water hardness levels by city. Find water hardness data for Columbus, Cleveland, Cincinnati and more Ohio cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://water.usgs.gov/edu/images/characteristics/hard-water-map.jpg" 
              alt="Ohio Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>Ohio</h1>
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
              <h2>Water Quality in the State of Ohio</h2>
              <p>
                Ohio is located in the east Midwestern region of the United States and is the 7th most populous, with 11.69 million people. Ohio's water supply comes from surface water and groundwater. Most of Ohio residents get their drinking water from surface water, like rivers and reservoirs. The city of Columbus water supply comes from three main reservoirs that provide 90% of the city's water.
              </p>

              <h2>Water Hardness by City</h2>
              <p>
                Ohio water is considered hard to very hard. The average water hardness for the Ohio resident is around 155 PPM. The city with the hardest water is Dayton, at 362 PPM. The water for the city of Cleveland is 125 PPM, and the state capital Columbus, has 128 PPM which is considered hard according to USGS water hardness measures.
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
                Manufacturing is a major industry for Ohio with over 670 manufacturing companies. Ohio's top manufacturing industries are food, beverage and tobacco products, motor vehicles and parts, aerospace and other transportation equipment, fabricated metals and more. Product processing in most manufacturing plants requires water. Cooling towers and HVAC are imperative to keeping operations running smoothly. Water hardness levels in some manufacturing plants can be as high as 500 PPM; with water hardness levels this high, manufacturing equipment can deteriorate at a rapid pace and experience efficiency loss.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Ohio will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that most Ohio residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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