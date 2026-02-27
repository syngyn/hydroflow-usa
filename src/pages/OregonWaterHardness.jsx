import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function OregonWaterHardness() {
  const cityData = [
    { city: "Portland", zipCodes: "97201-97267", hardness: "12 PPM (mg/L) or 1 gpg" },
    { city: "Salem", zipCodes: "97301-97317", hardness: "18 PPM (mg/L) or 1 gpg" },
    { city: "Eugene", zipCodes: "97401-97408", hardness: "22 PPM (mg/L) or 1 gpg" },
    { city: "Gresham", zipCodes: "97030 | 97080", hardness: "32 PPM (mg/L) or 2 gpg" },
    { city: "Hillsboro", zipCodes: "97123 | 97124", hardness: "21 PPM (mg/L) or 1 gpg" },
    { city: "Beaverton", zipCodes: "97005 | 97006 | 97007 | 97008", hardness: "35 PPM (mg/L) or 2 gpg" },
    { city: "Bend", zipCodes: "97701 | 97702 | 97707", hardness: "33 PPM (mg/L) or 2 gpg" },
    { city: "Medford", zipCodes: "97501 | 97504", hardness: "41 PPM (mg/L) or 2 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Oregon Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Oregon water hardness levels by city. Find water hardness data for Portland, Salem, Eugene and more Oregon cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://hydroflow-usa.com/assets/pics/46781667849394.jpg" 
              alt="Oregon Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Oregon</h1>
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
              <h2>Water Quality in the State of Oregon</h2>
              <p>
                Oregon is located on the West Coast of the United States and is one of the most geographically diverse states in the US. Oregon is known for having plenty of water because of the major rivers that run through the state such as the Columbia, Willamette and Snake Rivers. The city of Portland water supply comes from two main resources – The Bull Run watershed and the Columbia South Shore well field.
              </p>

              <h2>Water Hardness by City</h2>
              <p>
                Oregon has soft water with a state average hardness of 29 PPM. Portland, the most populous city, has a water hardness level of 12 PPM. Salem, the state capital, has 18 PPM which according to USGS water hardness measures is very soft.
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
                In Oregon, there are more than 250 diverse products grown and processed, from wheat to salmon. There are more than 38,500 farms, and Oregon products are sought all over the world due to their superior quality. Oregon's top agricultural products include milk, nursery stock, hops, cattle and calves, berries, peppermint and Christmas trees.
              </p>
              <p>
                Even though Oregon has moderately soft water, many farms and food processing plants can still experience issues related to scale buildup in their irrigators and equipment. In addition, contaminants polluting soil and waterways have increased greatly over the past few decades and there is a greater need for waste and chemical control.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Oregon will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that some Oregon residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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