import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function WestVirginiaWaterHardness() {
  const cityData = [
    { city: "Charleston", zipCodes: "25301-25320", hardness: "62 PPM (mg/L) or 4 gpg" },
    { city: "Huntington", zipCodes: "25701-25705", hardness: "121 PPM (mg/L) or 7 gpg" },
    { city: "Parkersburg", zipCodes: "26101 | 26104", hardness: "95 PPM (mg/L) or 6 gpg" },
    { city: "Weirton", zipCodes: "26062", hardness: "88 PPM (mg/L) or 5 gpg" },
    { city: "Wheeling", zipCodes: "26003", hardness: "129 PPM (mg/L) or 8 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>West Virginia Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to West Virginia water hardness levels by city. Find water hardness data for Charleston, Huntington, Wheeling and more West Virginia cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://hydroflow-usa.com/assets/pics/76641667849798.jpg" 
              alt="West Virginia Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>West Virginia</h1>
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
              <h2>Water Quality in the State of West Virginia</h2>
              <p>
                West Virginia is a picturesque tree-covered state on the east side of the United States, located on the Appalachian mountains. Most of West Virginian's water supply comes from aquifers and rivers like the Ohio River, which enters the state from Pennsylvania and flows southwest along the West Virginia Ohio border.
              </p>

              <h2>Water Hardness Summary</h2>
              <p>
                West Virginia water is considered slightly hard. The average water hardness for the West Virginia resident is around 101 PPM. The highest hard water number comes from Wheeling at 129 PPM, the city with the softest water is Charleston with 62 PPM. Huntington water is 121 PPM and is considered moderately hard according to the USGS water hardness table.
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
                West Virginia's top manufacturing industries are Chemical, Automotive, Biotech and Aerospace. Product processing in most manufacturing plants require water. Cooling towers and HVAC are imperative to keeping operations running smoothly. Given that West Virginia has relatively hard water, industrial facilities can experience issues related to scale buildup; their equipment can deteriorate at a rapid pace and experience efficiency loss.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of West Virginia will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that some West Virginia residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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