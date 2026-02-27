import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function PennsylvaniaWaterHardness() {
  const cityData = [
    { city: "Philadelphia", zipCodes: "19102-19154", hardness: "149 PPM (mg/L) or 9 gpg" },
    { city: "Pittsburgh", zipCodes: "15201-15290", hardness: "136 PPM (mg/L) or 8 gpg" },
    { city: "Allentown", zipCodes: "18101-18195", hardness: "176 PPM (mg/L) or 10 gpg" },
    { city: "Erie", zipCodes: "16501-16563", hardness: "160 PPM (mg/L) or 9 gpg" },
    { city: "Harrisburg", zipCodes: "17101-17120", hardness: "160 PPM (mg/L) or 9 gpg" },
    { city: "Reading", zipCodes: "19601-19611", hardness: "265 PPM (mg/L) or 15 gpg" },
    { city: "Scranton", zipCodes: "18503-18519", hardness: "280 PPM (mg/L) or 16 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Pennsylvania Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Pennsylvania water hardness levels by city. Find water hardness data for Philadelphia, Pittsburgh, Allentown and more Pennsylvania cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://hydroflow-usa.com/assets/pics/15881667849430.jpg" 
              alt="Pennsylvania Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>Pennsylvania</h1>
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
              <h2>Water Quality in the State of Pennsylvania</h2>
              <p>
                Pennsylvania is a state located in the Northeastern, Great Lakes, Appalachian, and Mid-Atlantic regions of the United States. It is a state full of rolling hills, rich forests, and millions of acres of farmland. Pennsylvania residents get their drinking water from surface and ground resources. About half of Pennsylvania drinking water comes from groundwater, which is supplied through public drinking water systems, however, many families get their drinking water from their private wells.
              </p>

              <h2>Pennsylvania Water Hardness by City</h2>
              <p>
                Pennsylvania water is considered hard. The average water hardness for the Pennsylvania resident is around 151 PPM. Harrisburg, Pennsylvania's capital has water hardness of 160 PPM and Philadelphia, the most populated city in Pennsylvania has water hardness of 149 PPM, which is considered hard according to the USGS water hardness page.
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

              <h2>Manufacturing and Hard Water</h2>
              <p>
                Pennsylvania's main manufacturing sectors are food processing, fabricated metal products, machinery, chemical, and electronic products and computers. Food processing is the second biggest manufacturing sector in the state. Pennsylvania is the leading producer of canned mushrooms, pretzels, potato chips, and ice cream in the United States.
              </p>
              <p>
                Product processing in most manufacturing plants requires water. Cooling towers and HVAC are imperative to keeping operations running smoothly. Water hardness levels in Pennsylvania can be as high as 500 PPM; with water hardness levels this high, manufacturing equipment can deteriorate at a rapid pace and experience efficiency loss.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Pennsylvania will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system, or other whole home water treatment solutions.
              </p>
              <p>
                A problem that all Pennsylvania residents will have to deal with is hard water. One old-fashioned, inefficient, expensive, and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener, you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
              </p>
              <p>
                Alternative water treatment solutions such as "water conditioners" have been gaining popularity in recent years because they are cheap to operate and the best eco-friendly solution for hard water. Hydropath technology, which powers the HydroFLOW water conditioners, is by far the most efficient and cost-effective eco-friendly solution to deal with hard water problems. To learn more about how HydroFLOW solves the problems created by hard water, please check out our <Link to={createPageUrl('Technology')} className="text-cyan-600 hover:underline">technology page</Link>.
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