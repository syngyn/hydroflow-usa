import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function NewYorkWaterHardness() {
  const cityData = [
    { city: "New York City", zipCodes: "10001-10282", hardness: "65 PPM (mg/L) or 4 gpg" },
    { city: "Buffalo", zipCodes: "14201-14228", hardness: "135 PPM (mg/L) or 8 gpg" },
    { city: "Rochester", zipCodes: "14604-14627", hardness: "118 PPM (mg/L) or 6 gpg" },
    { city: "Albany", zipCodes: "12202-12222", hardness: "54 PPM (mg/L) or 3 gpg" },
    { city: "Syracuse", zipCodes: "13202-13290", hardness: "120 PPM (mg/L) or 7 gpg" },
    { city: "Yonkers", zipCodes: "10701 | 10703 | 10704 | 10705 | 10710", hardness: "100 PPM (mg/L) or 6 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>New York Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to New York water hardness levels by city. Find water hardness data for NYC, Buffalo, Rochester and more New York cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://hydroflow-usa.com/assets/pics/74551667849128.jpg" 
              alt="New York Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>New York</h1>
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
              <h2>Water Quality in the State of New York</h2>
              <p>
                The New York City department of environmental protection is the nation's largest municipal water supplier, delivering water to approximately 9.5 million New York residents. The cities water comes from three major watersheds; the Delaware and Catskill Systems, which supply 90% of New York City's water. New York State is world-renowned for its water quality and they take multiple measures to keep the water clean and fresh tasting.
              </p>

              <h2>Water Hardness by City</h2>
              <p>
                The state of New York's average water hardness is moderately hard at 62 PPM. New York City Metro area, home to nearly half of the state's residents, has water that is considered soft to moderately hard. For example, NYC has moderately hard water, based on the USGS water hardness measures with 65 PPM. Cities that get their water supply from lakes and rivers can have harder water levels such as Buffalo, who's potable drinking water comes from Lake Erie and provides water at a hardness measure of 135 PPM.
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

              <h2>Agriculture, Food Processing and Water Hardness</h2>
              <p>
                New York state is third in the nation for its gross state product, following closely behind California and Texas. The agriculture and food processing industry have remained humbly one of the leading New York industries since the early 1800s. The leading agricultural product for New York is dairy farming, New York is the third largest cow milk producer in the country.
              </p>
              <p>
                Some regions in the state of New York have water rich in calcium (the primary source of water hardness). Many farms and food processing plants experience issues related to scale and biofilm buildup in their irrigators, cooling towers and processing equipment.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of New York will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem some New York residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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