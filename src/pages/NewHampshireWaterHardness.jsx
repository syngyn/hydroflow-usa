import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function NewHampshireWaterHardness() {
  const cityData = [
    { city: "Manchester", zipCodes: "3101 | 3102 | 3103 | 3104 | 3109", hardness: "19 PPM (mg/L) or 1 gpg" },
    { city: "Nashua", zipCodes: "3060 | 3062 | 3063 | 3064", hardness: "29 PPM (mg/L) or 2 gpg" },
    { city: "Concord", zipCodes: "3301 | 3303", hardness: "16 PPM (mg/L) or 1 gpg" },
    { city: "Somersworth", zipCodes: "3878", hardness: "14 PPM (mg/L) or 1 gpg" },
    { city: "Rochester", zipCodes: "3839 | 3867 | 3868", hardness: "25 PPM (mg/L) or 2 gpg" },
    { city: "Portsmouth", zipCodes: "3801", hardness: "101 PPM (mg/L) or 6 gpg" },
    { city: "Lebanon", zipCodes: "3766", hardness: "19 PPM (mg/L) or 1 gpg" },
    { city: "Keene", zipCodes: "3431", hardness: "25 PPM (mg/L) or 1 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>New Hampshire Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to New Hampshire water hardness levels by city. Find water hardness data for Manchester, Concord, Portsmouth and more New Hampshire cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://hydroflow-usa.com/assets/pics/42381667849012.jpg" 
              alt="New Hampshire Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">New Hampshire</h1>
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
              <h2>Water Quality in the state of New Hampshire</h2>
              <p>
                New Hampshire has a great landscape of mountains, lakes, ocean beaches and family attractions. 56% of New Hampshire residents get their water from a public water system. The other 44% receive their water from private wells. Public water is comprised of both underground aquifers and surface waters such as rivers, lakes and streams.
              </p>

              <h2>Water Hardness Summary</h2>
              <p>
                New Hampshire water is considered soft. The average water hardness for the New Hampshire resident is around 39 PPM. Some examples of soft water cities are Manchester with 19 PPM (1 GPG) and Concord, the state capital, at 16 PPM. Portsmouth water is 101 PPM and is considered hard according to the USGS water hardness measures.
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
                Manufacturing is a major industry for New Hampshire. New Hampshire's top manufacturing industries are computer and electronics, fabricated metals, and machinery. Product processing in most manufacturing plants requires water. Cooling towers and HVAC are imperative to keeping operations running smoothly. Water hardness levels in some manufacturing plants can be as high as 300 PPM; with water hardness levels this high, manufacturing equipment can deteriorate at a rapid pace and experience efficiency loss.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of New Hampshire will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that some New Hampshire residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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