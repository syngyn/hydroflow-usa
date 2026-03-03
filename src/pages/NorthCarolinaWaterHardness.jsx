import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function NorthCarolinaWaterHardness() {
  const cityData = [
    { city: "Charlotte", zipCodes: "28202-28282", hardness: "28 PPM (mg/L) or 2 gpg" },
    { city: "Raleigh", zipCodes: "27601-27617", hardness: "40 PPM (mg/L) or 2 gpg" },
    { city: "Greensboro", zipCodes: "27401-27455", hardness: "44 PPM (mg/L) or 3 gpg" },
    { city: "Durham", zipCodes: "27701-27713", hardness: "47 PPM (mg/L) or 3 gpg" },
    { city: "Winston", zipCodes: "27101-27127", hardness: "42 PPM (mg/L) or 2 gpg" },
    { city: "Fayetteville", zipCodes: "28301 | 28303 | 28304 | 28305 | 28306 | 28311 | 28312 | 28314", hardness: "48 PPM (mg/L) or 3 gpg" },
    { city: "Wilmington", zipCodes: "28401 | 28403 | 28405 | 28409 | 28411 | 28412", hardness: "70 PPM (mg/L) or 4 gpg" },
    { city: "Hickory", zipCodes: "28601 | 28602", hardness: "215 PPM (mg/L) or 13 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>North Carolina Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to North Carolina water hardness levels by city. Find water hardness data for Charlotte, Raleigh, Durham and more North Carolina cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/821ec2e4f_12019-charlotte-69203_1920.jpg" 
              alt="North Carolina Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>North Carolina</h1>
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
              <h2>Water Quality in the State of North Carolina</h2>
              <p>
                North Carolina is a south-eastern state that is well known for its varying elevations and landscapes, which provide a myriad of experiences and breathtaking sceneries. Potable water for North Carolina residents comes from both groundwater and surface water. More than 50% of North Carolina's population gets their drinking water from groundwater, including both private and municipal wells.
              </p>

              <h2>Water Hardness Summary</h2>
              <p>
                The state of North Carolina's average water hardness is soft at 46 PPM based on the USGS water hardness measures. Raleigh, the state capital, has a water hardness level of 40 PPM which is considered soft. Charlotte, the most populous North Carolina city has 28 PPM, which is also considered soft water.
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
                North Carolina's main manufacturing sectors are food processing, chemicals, computer and electronic products, aerospace, machinery, and fabricated metals products. Product processing in most manufacturing plants requires water. Cooling towers and HVAC are imperative to keeping operations running smoothly. Water hardness levels in North Carolina can be as high as 300 PPM; with water hardness levels this high, manufacturing equipment can deteriorate at a rapid pace and experience efficiency loss.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of North Carolina will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem some North Carolina residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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