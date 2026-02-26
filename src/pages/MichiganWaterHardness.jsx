import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function MichiganWaterHardness() {
  const cityData = [
    { city: "Detroit", zipCodes: "48201 | 48202 | 48204 | 48205 | 48206 | 48207 | 48208 | 48209 | 48210 | 48211 | 48213 | 48214 | 48215 | 48216 | 48217 | 48219 | 48221 | 48223 | 48224 | 48226 | 48227 | 48228 | 48233 | 48234 | 48235", hardness: "104 PPM (mg/L) or 6 gpg" },
    { city: "Grand Rapids", zipCodes: "49503 | 49504 | 49505 | 49506 | 49507 | 49508 | 49509", hardness: "380 PPM (mg/L) or 22 gpg" },
    { city: "Ann Arbor", zipCodes: "48103 | 48104 | 48105 | 48108 | 48109", hardness: "129 PPM (mg/L) or 8 gpg" },
    { city: "Flint", zipCodes: "48502 | 48503 | 48504 | 48505 | 48506 | 48507 | 48532 | 48551 | 48553 | 48554", hardness: "242 PPM (mg/L) or 14 gpg" },
    { city: "Lansing", zipCodes: "48906 | 48910 | 48911 | 48912 | 48915 | 48917 | 48933", hardness: "99 PPM (mg/L) or 6 gpg" },
    { city: "Kalamazoo", zipCodes: "49001 | 49004 | 49006 | 49007 | 49008 | 49009 | 49048", hardness: "115 PPM (mg/L) or 7 gpg" },
    { city: "Sterling Heights", zipCodes: "48310 | 48312 | 48313 | 48314", hardness: "138 PPM (mg/L) or 8 gpg" },
    { city: "Warren", zipCodes: "48088 | 48089 | 48091 | 48092 | 48093 | 48397", hardness: "144 PPM (mg/L) or 8 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Michigan Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Michigan water hardness levels by city. Find water hardness data for Detroit, Grand Rapids, Ann Arbor and more Michigan cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://hydroflow-usa.com/assets/pics/38681667848686.jpg" 
              alt="Michigan Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Michigan</h1>
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
              <h2>Water Quality in the State of Michigan</h2>
              <p>
                Michigan is a state in the Great Lakes region of the US. It is the only state that is comprised of two peninsulas. Michigan is America's automotive epicenter, housing industry giants such as General Motors, Ford and Chrysler. Detroit water, the largest water utility in Michigan and the second-largest utility in the US, receives water from the Detroit River and Lake Huron.
              </p>

              <h2>Water Hardness Summary</h2>
              <p>
                Michigan water is considered hard to very hard. Detroit Metro area has moderately hard water, at 104 PPM. Grand Rapids, located in the lower peninsula has hard water according to USGS standards at 380 PPM.
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
                Manufacturing is the largest contributing industry for Michigan's economy, accounting for 20% of the state's gross product. The Automotive industry is the state's top manufacturing industry, with 975 auto manufacturing establishments; making Michigan the top Automotive state in the Nation. Other significant manufacturing industries in Michigan are machinery, fabricated metal products, chemicals, and food and beverage products.
              </p>
              <p>
                Product processing in most manufacturing plants requires water. Cooling towers and HVAC are imperative to keeping operations running smoothly. Water hardness levels can be as high as 500 PPM; with water hardness levels this high, manufacturing equipment can deteriorate at a rapid pace and experience efficiency loss.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Michigan will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that almost all Michigan residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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