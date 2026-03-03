import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function WashingtonWaterHardness() {
  const cityData = [
    { city: "Seattle Metro Area", zipCodes: "98101-98199", hardness: "22 PPM (mg/L) or 1 gpg" },
    { city: "Spokane", zipCodes: "99201-99224", hardness: "218 PPM (mg/L) or 13 gpg" },
    { city: "Tacoma Metro Area", zipCodes: "98402-98466", hardness: "15 PPM (mg/L) or 1 gpg" },
    { city: "Vancouver", zipCodes: "98660-98686", hardness: "96 PPM (mg/L) or 6 gpg" },
    { city: "Bellevue", zipCodes: "98004-98008", hardness: "25 PPM (mg/L) or 1 gpg" },
    { city: "Everett", zipCodes: "98201-98208", hardness: "12 PPM (mg/L) or 1 gpg" },
    { city: "Walla Walla", zipCodes: "99362", hardness: "180 PPM (mg/L) or 10 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Washington Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Washington water hardness levels by city. Find water hardness data for Seattle, Spokane, Tacoma and more Washington cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/f6ed04e89_popshotsphotos-seattle-4025000_1920.jpg" 
              alt="Washington Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>Washington</h1>
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
              <h2>Water Quality in the State of Washington</h2>
              <p>
                Washington state water supply mostly comes from surface water and underground water. The Columbia River is one of the state's biggest surface water sources and has many uses such as irrigation, aquatic habitat, and hydropower generation in Washington. More than 6.2 million Washington State residents (85 percent of the state's population), get their drinking water from public water systems.
              </p>

              <h2>Water Hardness by City</h2>
              <p>
                Washington water hardness is considered very low to moderately hard. The average water hardness is between 12 PPM to 218 PPM. Some examples of cities with very soft water are Seattle with 22 PPM and Everett with a hardness level of 12 PPM. Most hard water numbers are in eastern Washington, in cities like Spokane with 218 PPM and Walla Walla with 178 PPM.
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

              <h2>Agriculture, Farming and Water Hardness</h2>
              <p>
                Washington is a major agricultural state, with 39,000 farms on more than 15 million acres. Agricultural highlights include cattle ranching, dairy farms, wheat, apples, pears, cherries and other tree fruits, as well as varieties of grapes and vegetables. The cool valleys of Western Washington are idyllic for raising milk cows, berries, nursery products, flowers and poultry.
              </p>
              <p>
                As a great deal of Washington has water rich in calcium (the primary source of water hardness), many farms and food processing plants experience issues related to scale buildup in their irrigators and equipment.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Washington will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that some Washington residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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