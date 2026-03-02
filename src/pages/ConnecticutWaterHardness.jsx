import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function ConnecticutWaterHardness() {
  const cityData = [
    { city: "Bridgeport", zipCodes: "06604-06610", hardness: "168 PPM (mg/L) or 10 gpg" },
    { city: "New Haven", zipCodes: "06510 | 06511 | 06513 | 06515 | 06519", hardness: "194 PPM (mg/L) or 11 gpg" },
    { city: "Hartford", zipCodes: "06103 | 06105 | 06106 | 06112 | 06114 | 06120 | 06160", hardness: "153 PPM (mg/L) or 9 gpg" },
    { city: "Waterbury", zipCodes: "06702 | 06704 | 06705 | 06706 | 06708 | 06710", hardness: "188 PPM (mg/L) or 11 gpg" },
    { city: "Milford", zipCodes: "06460 | 06461", hardness: "166 PPM (mg/L) or 10 gpg" },
    { city: "Torrington", zipCodes: "06790", hardness: "177 PPM (mg/L) or 10 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Connecticut Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Connecticut water hardness averages 175 PPM (hard water). Find water hardness data for Bridgeport, Hartford, New Haven and other Connecticut cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/74dfd4521_patteybleecker-clinton-harbor-Connecticut.jpg" 
              alt="Connecticut Harbor" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>Connecticut</h1>
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
              <h2>Water Quality in the State of Connecticut</h2>
              <p>
                Connecticut is the third smallest state in the US with 4,844 square miles and has a population of 3.6 million residents. There are over 2,500 public water systems in the state of Connecticut. Most populous cities receive their water from surrounding lakes and rivers. A majority of Connecticut's rural areas obtain their drinking water from wells.
              </p>

              <h2>Connecticut Water Hardness by City</h2>
              <p>
                Connecticut's water is hard, with a state average hardness of 175 PPM. Bridgeport, the state's most populated city, has a water hardness level of 168 PPM. New Haven, has the hardest reported water at 194 PPM which is considered very hard based on the USGS Measures of Water Hardness.
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
                Manufacturing is a major industry for Connecticut. Connecticut's top manufacturing industries are Aerospace and transportation equipment, chemicals, fabricated metal products, computer and electronic products and machinery. Reliable water treatment systems are necessary to keep most manufacturing operations running smoothly. Water hardness levels in manufacturing plants can be as high as 200 PPM.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Connecticut will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that almost all Connecticut residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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