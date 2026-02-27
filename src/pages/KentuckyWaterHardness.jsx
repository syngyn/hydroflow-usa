import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function KentuckyWaterHardness() {
  const cityData = [
    { city: "Louisville", zipCodes: "40202 | 40203 | 40204 | 40205 | 40206 | 40207 | 40208 | 40209 | 40210 | 40211 | 40212 | 40213 | 40214 | 40215 | 40216 | 40217 | 40218 | 40219 | 40220 | 40222 | 40223 | 40228 | 40229 | 40231 | 40241", hardness: "102 PPM (mg/L) or 6 gpg" },
    { city: "Lexington", zipCodes: "40502 | 40503 | 40504 | 40505 | 40506 | 40507 | 40508 | 40509 | 40510 | 40511 | 40513 | 40514 | 40515 | 40516 | 40517", hardness: "215 PPM (mg/L) or 12 gpg" },
    { city: "Bowling Green", zipCodes: "42101 | 42102 | 42103 | 42104", hardness: "144 PPM (mg/L) or 8 gpg" },
    { city: "Paducah", zipCodes: "42001 | 42003", hardness: "120 PPM (mg/L) or 7 gpg" },
    { city: "Frankfort", zipCodes: "40601 | 40604", hardness: "190 PPM (mg/L) or 11 gpg" },
    { city: "Owensboro", zipCodes: "42301 | 42303", hardness: "175 PPM (mg/L) or 10 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Kentucky Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Kentucky water hardness levels by city. Find water hardness data for Louisville, Lexington, Bowling Green and more Kentucky cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://hydroflow-usa.com/assets/pics/78091667848402.jpg" 
              alt="Kentucky Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>Kentucky</h1>
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
              <h2>Water Quality in the State of Kentucky</h2>
              <p>
                Kentucky, also known as the Bluegrass State, is well known for horse races, music and fried chicken. Kentucky water supply comes from mostly surface waters, including lakes, rivers and reservoirs. A small number of Kentuckians (10%) receive their drinking water from wells.
              </p>

              <h2>Water Hardness Summary</h2>
              <p>
                Kentucky has water that ranges from moderately hard to very hard with an average water hardness measure of 112 PPM. Some cities with high calcium deposits are Lexington (215 PPM) and Frankfort (190 PPM). Louisville, the most populated Kentucky city has a water hardness measure of 102 PPM, which by USGS standards, is moderately hard.
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

              <h2>Manufacturing and Hard Water</h2>
              <p>
                Manufacturing is the largest contributing industry for Kentucky's economy, accounting for one-fifth of the state's gross product. Louisville is the epicenter for Kentucky manufacturing and is home to many major manufacturers such as Ford, GE Appliances, Raytheon and Clariant Corporation. Kentucky's main manufacturing sectors are Motor vehicles and parts, Food beverage and tobacco products, Primary metals, Chemical products and Machinery.
              </p>
              <p>
                Product processing in most manufacturing plants requires water. Cooling towers and HVAC are imperative to keeping operations running smoothly. Water hardness levels can be as high as 500 PPM; with water hardness levels this high, manufacturing equipment can deteriorate at a rapid pace and experience efficiency loss.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Kentucky will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that almost all Kentucky residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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