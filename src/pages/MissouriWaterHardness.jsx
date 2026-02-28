import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function MissouriWaterHardness() {
  const cityData = [
    { city: "Kansas City", zipCodes: "64101-64167", hardness: "114 PPM (mg/L) or 7 gpg" },
    { city: "Saint Louis", zipCodes: "63101-63155", hardness: "152 PPM (mg/L) or 9 gpg" },
    { city: "Springfield", zipCodes: "65802 | 65803 | 65804 | 65806 | 65807 | 65809 | 65810", hardness: "156 PPM (mg/L) or 9 gpg" },
    { city: "Columbia", zipCodes: "65201 | 65202 | 65203 | 65215", hardness: "174 PPM (mg/L) or 10 gpg" },
    { city: "Independence", zipCodes: "64050 | 64052 | 64053 | 64054 | 64055 | 64056 | 64057 | 64058", hardness: "120 PPM (mg/L) or 7 gpg" },
    { city: "Lee's Summit", zipCodes: "64063 | 64064 | 64065 | 64081 | 64082 | 64086", hardness: "109 PPM (mg/L) or 6 gpg" },
    { city: "Jefferson City", zipCodes: "65101 | 65109", hardness: "132 PPM (mg/L) or 8 gpg" },
    { city: "Joplin", zipCodes: "64801 | 64804", hardness: "157 PPM (mg/L) or 9 gpg" },
    { city: "Cape Girardeau", zipCodes: "63701 | 63703", hardness: "257 PPM (mg/L) or 15 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Missouri Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Missouri water hardness levels by city. Find water hardness data for Kansas City, St. Louis, Springfield and more Missouri cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://water.usgs.gov/edu/images/characteristics/hard-water-map.jpg" 
              alt="Missouri Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>Missouri</h1>
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
              <h2>Water Quality in the State of Missouri</h2>
              <p>
                Missouri is a midwestern state with more than 6 million residents. Missouri residents get their potable water from wells, rivers, streams, lakes and aquifers.
              </p>

              <h2>Water Hardness Summary</h2>
              <p>
                Missouri has water that ranges from moderately hard to hard with an average water hardness measure of 137 PPM. The town of Cape Girardeau has the hardest recorded water in the state with 257 PPM, another city with hard water is Columbia at 174 PPM. Kansas City, the most populous city in Missouri has moderately hard water according to USGS measures, at 114 PPM.
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
                Missouri has over 100,000 farms, which makes it the state with the second-largest number of farms in the nation, just behind Texas. The state's top agricultural products are soybeans, corn, cattle, hogs, wheat and dairy items. Kansas City is the leading manufacturing location for livestock and wheat.
              </p>
              <p>
                As a great deal of Missouri has water rich in calcium (the primary source of water hardness), many farms and food processing plants experience issues related to scale buildup in their irrigators, production and processing equipment.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Missouri will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that many Missouri residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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