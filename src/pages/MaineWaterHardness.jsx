import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function MaineWaterHardness() {
  const cityData = [
    { city: "Portland", zipCodes: "4101 | 4102 | 4103 | 4109", hardness: "10 PPM (mg/L) or 1 gpg" },
    { city: "Lewiston", zipCodes: "4240", hardness: "17 PPM (mg/L) or 1 gpg" },
    { city: "Bangor", zipCodes: "4401", hardness: "6 PPM (mg/L) or 0 gpg" },
    { city: "Auburn", zipCodes: "4201", hardness: "17 PPM (mg/L) or 1 gpg" },
    { city: "Saco", zipCodes: "4072", hardness: "9 PPM (mg/L) or 0 gpg" },
    { city: "Augusta", zipCodes: "4330", hardness: "11 PPM (mg/L) or 1 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Maine Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Maine water hardness levels by city. Find water hardness data for Portland, Bangor, Augusta and more Maine cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://hydroflow-usa.com/assets/pics/54811667848478.jpg" 
              alt="Maine Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>Maine</h1>
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
              <h2>Water Quality in the State of Maine</h2>
              <p>
                Maine, the northernmost state in the US, has picturesque lighthouses, laden rocky coastlines, rolling mountains and tranquil waterways. Maine is well known for its sea fare, specifically lobsters and clams. Sebago Lake, the largest lake in the state, supplies nearly 1/6 of Maine's potable drinking water.
              </p>

              <h2>Water Hardness by City</h2>
              <p>
                The entire state of Maine, experiences relatively soft water with a state average of 12 PPM. Because of this, most residential homes do not experience scale related issues. Portland Maine, the most populous city in the state has a water hardness level of 10 PPM which is considered very soft according to USGS measures of water hardness.
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

              <h2>Forestry and Water Hardness</h2>
              <p>
                Manufacturing is the second highest-grossing income for the state of Maine. The top manufacturing industry is pulp and paper. Paper mills are one of the largest water users in United States industry. Using an average of 54 m3 of water for every metric ton of pulp and paper. In addition, all manufacturing phases in a pulp and paper plant require the use of water. Proper water treatment for heat exchangers, pumps and liquor piping lines is imperative to keeping operations running smoothly.
              </p>
              <p>
                Processing pulp and paper generates wastewater and sludge which requires extensive treatment prior to disposal. Water hardness levels in some manufacturing plants can be high, and manufacturing equipment can deteriorate at a rapid pace and experience efficiency loss.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Maine will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that some Maine residents or companies will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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