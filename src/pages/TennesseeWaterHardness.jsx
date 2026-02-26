import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function TennesseeWaterHardness() {
  const cityData = [
    { city: "Memphis", zipCodes: "38103-38152", hardness: "55 PPM (mg/L) or 3 gpg" },
    { city: "Nashville", zipCodes: "37201-37246", hardness: "79 PPM (mg/L) or 5 gpg" },
    { city: "Knoxville", zipCodes: "37902-37932", hardness: "84 PPM (mg/L) or 5 gpg" },
    { city: "Chatanooga", zipCodes: "37402-37421", hardness: "71 PPM (mg/L) or 4 gpg" },
    { city: "Murfreesboro", zipCodes: "37127-37132", hardness: "90 PPM (mg/L) or 5 gpg" },
    { city: "Clarksville", zipCodes: "37040 | 37042 | 37043", hardness: "97 PPM (mg/L) or 6 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Tennessee Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Tennessee water hardness levels by city. Find water hardness data for Memphis, Nashville, Knoxville and more Tennessee cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://hydroflow-usa.com/assets/pics/84691667849581.jpg" 
              alt="Tennessee Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Tennessee</h1>
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
              <h2>Water Quality in the State of Tennessee</h2>
              <p>
                Tennessee is a non-coastal state in the south and home to the Great Smoky Mountains National Park. Nashville, the state capital, is also the heart of the country-music scene in the USA. Tennessee water supply comes from surface water and groundwater. About 10 percent of the population in Tennessee uses a private water supply as their source of drinking and household water, most of this water comes from wells and springs.
              </p>

              <h2>Tennessee Water Hardness by City</h2>
              <p>
                Tennessee water is considered soft to moderately hard. The average water hardness for the Tennesse resident is around 99 PPM. Nashville, the state capital, has a water hardness level of 79 PPM and Memphis has 55 PPM, which according to USGS water hardness measures is considered soft water.
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
                Tennessee's main manufacturing sectors are motor vehicles and parts, food beverage and tobacco products, primary metals, chemical products and machinery. Motor manufacturing is the largest contributing industry for Tennessee's economy and is the home for more than 917 auto suppliers and car manufacturers such as GM, Volkswagen and Nissan.
              </p>
              <p>
                Product processing in most manufacturing plants requires water. Cooling towers and HVAC are imperative to keeping operations running smoothly. Water hardness levels can be as high as 500 PPM; with water hardness levels this high, manufacturing equipment can deteriorate at a rapid pace and experience efficiency loss.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Tennessee will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that Tennessee residents or companies will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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