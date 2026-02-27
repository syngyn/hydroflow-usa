import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function VirginiaWaterHardness() {
  const cityData = [
    { city: "Virginia Beach", zipCodes: "23451-23464", hardness: "58 PPM (mg/L) or 3 gpg" },
    { city: "Norfolk", zipCodes: "23502-23551", hardness: "47 PPM (mg/L) or 3 gpg" },
    { city: "Chesapeake", zipCodes: "23320-23325", hardness: "41 PPM (mg/L) or 2 gpg" },
    { city: "Richmond", zipCodes: "23173-23250", hardness: "64 PPM (mg/L) or 4 gpg" },
    { city: "Newport News", zipCodes: "23601-23608", hardness: "81 PPM (mg/L) or 5 gpg" },
    { city: "Arlington", zipCodes: "Various", hardness: "120 PPM (mg/L) or 7 gpg" },
    { city: "Roanoke", zipCodes: "24011-24020", hardness: "143 PPM (mg/L) or 8 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Virginia Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Virginia water hardness levels by city. Find water hardness data for Virginia Beach, Norfolk, Richmond and more Virginia cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://hydroflow-usa.com/assets/pics/13451667849715.jpg" 
              alt="Virginia Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Virginia</h1>
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
              <h2>Water Quality in the State of Virginia</h2>
              <p>
                Virginia is located between the Atlantic Coast and the Appalachian Mountains and is one of the 13 original colonies in the American Revolution. Virginia water supply comes from groundwater, rivers, lakes, reservoirs and bays. Most cities drinking water sources in Virginia are from surface water.
              </p>

              <h2>Water Hardness by City</h2>
              <p>
                Virginia water hardness is considered moderately hard according to USGS water hardness measures, with an average water hardness of 72 PPM. Some examples of cities with soft water are and Norfolk with a hardness level of 47 PPM and Chesapeake with 41 PPM. The highest hard water number comes from Roanoke at 143 PPM.
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

              <h2>Farming, Food Processing and Water Hardness</h2>
              <p>
                Virginia's top producing industry is agriculture and food processing, and it is the most diverse in the nation. Virginia top agricultural products are Chicken for meat production and eggs, cattle, soybeans, leaf tobacco and dairy products. Chickens bred for meat production, are Virginia's top-grossing agricultural product.
              </p>
              <p>
                As a great deal of Virginia has water rich in calcium (the primary source of water hardness), many farms and food processing plants experience issues related to scale buildup in their processing equipment, due to large quantities of water flow every day.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Virginia will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that some Virginia residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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