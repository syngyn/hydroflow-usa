import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function CaliforniaWaterHardness() {
  const cityData = [
    { city: "Los Angeles", zipCodes: "90001-90089", hardness: "127 PPM (mg/L) or 7 gpg" },
    { city: "San Diego", zipCodes: "92101-92155", hardness: "241 PPM (mg/L) or 15 gpg" },
    { city: "San Francisco", zipCodes: "94102-94158", hardness: "47 PPM (mg/L) or 3 gpg" },
    { city: "San Jose", zipCodes: "95110-95139", hardness: "132 PPM (mg/L) or 8 gpg" },
    { city: "Fresno", zipCodes: "93701-93730", hardness: "123 PPM (mg/L) or 7 gpg" },
    { city: "Sacramento", zipCodes: "95811-95864", hardness: "150 PPM (mg/L) or 9 gpg" },
    { city: "Ventura", zipCodes: "93001 | 93003 | 93004", hardness: "666 PPM (mg/L) or 39 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>California Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="California water hardness ranges from 47-666 PPM. Ventura has the hardest water in the US at 666 PPM. Find data for LA, San Diego, San Francisco and other California cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://hydroflow-usa.com/assets/pics/8461667847143.jpg" 
              alt="California Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">California</h1>
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
              <h2>Water Quality in the State of California</h2>
              <p>
                California's water is controlled by the state government. Most of the supplied water for Southern California and the Central Valley (home to half of the state's population), depends on three major projects; State Water Project, the Colorado River Aqueduct (imported water from out of state) and the Central Valley Project.
              </p>

              <h2>California Water Hardness by City</h2>
              <p>
                California water is considered hard to very hard. The average water hardness for California residents is 100-300 PPM. The state's most populous city and the second-most populous city in the US, Los Angeles, has a water hardness average of 127 PPM and San Francisco has a hard water level of 47 PPM.
              </p>
              <p>
                <strong>Who has the hardest water in the United States?</strong> Ventura California with a water hardness or 666 PPM is the hardest water in the United States.
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

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of California will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that almost all California residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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