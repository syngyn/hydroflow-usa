import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function UtahWaterHardness() {
  const cityData = [
    { city: "Salt Lake City", zipCodes: "84101-84180", hardness: "210 PPM (mg/L) or 12 gpg" },
    { city: "West Valley City", zipCodes: "84119 | 84120 | 84128", hardness: "230 PPM (mg/L) or 13 gpg" },
    { city: "Provo", zipCodes: "84601 | 84604 | 84606", hardness: "164 PPM (mg/L) or 9 gpg" },
    { city: "St. George", zipCodes: "84770 | 84790", hardness: "342 PPM (mg/L) or 20 gpg" },
    { city: "Riverton", zipCodes: "84065", hardness: "574 PPM (mg/L) or 34 gpg" },
    { city: "Blanding", zipCodes: "84511", hardness: "598 PPM (mg/L) or 35 gpg" },
    { city: "Sandy", zipCodes: "84070 | 84092 | 84093 | 84094", hardness: "308 PPM (mg/L) or 18 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Utah Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Utah water hardness levels by city. Find water hardness data for Salt Lake City, Provo, St. George and more Utah cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/dab68fb3c_utah.png" 
              alt="Utah Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>Utah</h1>
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
              <h2>Water Quality in the State of Utah</h2>
              <p>
                Water quality in Utah is governed by the Utah Department of Environmental Quality. Utah gets the majority of its water from the Valley-Fill, Cache Valley, and Cedar Valley Aquifers. Water in Utah is considered to be very hard. People across the state must deal with hard water daily. The state average is right around 298 PPM.
              </p>

              <h2>Utah Water Hardness by City</h2>
              <p>
                The largest city and state capital, Salt Lake City, has the lowest water hardness with 158 PPM. The next largest city in Utah is West Valley City which has hard water at a level of 230 PPM. Close to the State average water hardness of 340 PPM is the city of St. George with a water hardness of 342 PPM. The hardest water can be found in cities like Blanding, with 598 PPM, and Riverton with 574 PPM.
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
                Utah has been moving up the ranks as a leading state for manufacturing, bringing in more than 20 billion per year. Utah's top manufacturing industries are computer and electronic products, aerospace technology, and metal manufacturing. Product processing in most manufacturing plants requires water. Cooling towers and HVAC are imperative to keeping operations running smoothly. Water hardness levels can be as high as 1,000 PPM; with water hardness levels this high, manufacturing equipment can deteriorate at a rapid pace and experience efficiency loss.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Utah will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system, or other whole-home water treatment solutions.
              </p>
              <p>
                A problem that almost all Utah residents will have to deal with is hard water. One old-fashioned, inefficient, expensive, and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener, you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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