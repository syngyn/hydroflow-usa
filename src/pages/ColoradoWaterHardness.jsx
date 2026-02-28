import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function ColoradoWaterHardness() {
  const cityData = [
    { city: "Denver", zipCodes: "80202-80294", hardness: "72 PPM (mg/L) or 4 gpg" },
    { city: "Colorado Springs", zipCodes: "80902-80951", hardness: "34 PPM (mg/L) or 2 gpg" },
    { city: "Aurora", zipCodes: "80010-80045", hardness: "180 PPM (mg/L) or 10 gpg" },
    { city: "Fort Collins", zipCodes: "80521-80528", hardness: "111 PPM (mg/L) or 6 gpg" },
    { city: "Pueblo", zipCodes: "81001-81008", hardness: "181 PPM (mg/L) or 10 gpg" },
    { city: "Westminster", zipCodes: "80030 | 80031", hardness: "117 PPM (mg/L) or 7 gpg" },
    { city: "Boulder", zipCodes: "80301-80310", hardness: "49 PPM (mg/L) or 3 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Colorado Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Colorado water hardness ranges from 34-181 PPM (soft to moderately hard). Find water hardness data for Denver, Colorado Springs, Boulder and other Colorado cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://water.usgs.gov/edu/images/characteristics/hard-water-map.jpg" 
              alt="Colorado Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>Colorado</h1>
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
              <h2>Water Quality in the State of Colorado</h2>
              <p>
                Colorado, home to an estimated 5.7 million residents, is noted for having a wide variety of breathtaking landscapes. The majority of Colorado water is supplied by the Rocky Mountains snowfall. Because the populous cities are on the east side of Colorado, the main source of drinking water for Colorado residents is brought in by way of trans-mountain diversions.
              </p>

              <h2>Colorado Water Hardness by City</h2>
              <p>
                Colorado water is considered soft to moderately hard depending on the location. During the winter, Colorado's water becomes slightly harder. The city of Pueblo has the hardest recorded water in the state with 181 PPM, another city with moderately hard water is Westminster at 117 PPM. Denver, the most populous city in Colorado has relatively soft water of 72 PPM.
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
                Manufacturing is a major industry for Colorado. Colorado's top manufacturing industries are petroleum, coal, appliances, fabricated metals, food and beverage, computers and machinery. Water hardness levels in some manufacturing plants can be as high as 800 PPM; with water hardness levels this high, manufacturing equipment can deteriorate at a rapid pace and experience efficiency loss.
              </p>
              <p>
                Mining is also a major contributor to Colorado's growing economy. The mining sector in Colorado consumes significant amounts of water that can be as hard as 1,500 PPM.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Colorado will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that almost all Colorado residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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