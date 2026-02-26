import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function MississippiWaterHardness() {
  const cityData = [
    { city: "Jackson", zipCodes: "39201 | 39202 | 39203 | 39204 | 39206 | 39209 | 39211 | 39212 | 39213 | 39216 | 39217 | 39269", hardness: "164 PPM (mg/L) or 10 gpg" },
    { city: "Gulfport", zipCodes: "39501 | 39503 | 39507", hardness: "158 PPM (mg/L) or 9 gpg" },
    { city: "Biloxi", zipCodes: "39530 | 39531 | 39532 | 39534", hardness: "174 PPM (mg/L) or 10 gpg" },
    { city: "Pascagoula", zipCodes: "39567 | 39581", hardness: "210 PPM (mg/L) or 12 gpg" },
    { city: "Hattiesburg", zipCodes: "39401 | 39402 | 39406", hardness: "188 PPM (mg/L) or 11 gpg" },
    { city: "West Point", zipCodes: "39773", hardness: "154 PPM (mg/L) or 9 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Mississippi Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Mississippi water hardness levels by city. Find water hardness data for Jackson, Gulfport, Biloxi and more Mississippi cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://hydroflow-usa.com/assets/pics/29641667848790.jpg" 
              alt="Mississippi Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Mississippi</h1>
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
              <h2>Water Quality in the State of Mississippi</h2>
              <p>
                Mississippi is a musical state with blues and country music roots. The state is also known for its Magnolia flowers, historical monuments, catfish farming and its southern charm. The Mississippi resident gets their drinking water from underground aquifers such as the Mississippi embayment aquifer and the Mississippi river valley alluvial aquifer. The other sources of potable drinking water come from surface waters such as rivers and streams.
              </p>

              <h2>Water Hardness Summary</h2>
              <p>
                Mississippi water is considered hard with an average state range of 174 PPM. The hardest water in the state comes from Pascagoula, with a water hardness level of 210 PPM. Jackson, the state's capital and the most populous city has 164 PPM (10 GPG) and Gulfport, the second-largest city has water hardness of 158 PPM.
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

              <h2>Farming, Aquaculture, Forestry and Hard Water</h2>
              <p>
                Mississippi is a top-ranking farming and aquaculture state. The state is one of the largest broiler chicken producers and home to the catfish capital of the world – Belzoni, MS. Other leading commodities are cotton, tree farming, lumber, soybeans, corn, wheat, peanuts and sweet potatoes. Mississippi has just over 41,000 farms with a collective span of 11 million acres.
              </p>
              <p>
                As a great deal of Mississippi has water rich in calcium (the primary source of water hardness), many farms and food processing plants experience issues related to scale buildup in their irrigators, production and processing equipment.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Mississippi will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that almost all Mississippi residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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