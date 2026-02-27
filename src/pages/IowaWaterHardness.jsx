import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function IowaWaterHardness() {
  const cityData = [
    { city: "Des Moines", zipCodes: "50309 | 50310 | 50311 | 50312 | 50313 | 50314 | 50315 | 50316 | 50317 | 50319 | 50320 | 50321", hardness: "157 PPM (mg/L) or 9 gpg" },
    { city: "Cedar Rapids", zipCodes: "52401 | 52402 | 52403 | 52404 | 52405 | 52411", hardness: "250 PPM (mg/L) or 15 gpg" },
    { city: "Davenport", zipCodes: "52801 | 52802 | 52803 | 52804 | 52806 | 52807", hardness: "266 PPM (mg/L) or 16 gpg" },
    { city: "Waterloo", zipCodes: "50701 | 50702 | 50703 | 50704 | 50707", hardness: "297 PPM (mg/L) or 17 gpg" },
    { city: "Sioux City", zipCodes: "51101 | 51103 | 51104 | 51105 | 51106 | 51108 | 51109 | 51111", hardness: "378 PPM (mg/L) or 22 gpg" },
    { city: "Iowa City", zipCodes: "52240 | 52242 | 52245 | 52246", hardness: "305 PPM (mg/L) or 18 gpg" },
    { city: "Council Bluffs", zipCodes: "51501 | 51503", hardness: "156 PPM (mg/L) or 9 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Iowa Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Iowa water hardness levels by city. Find water hardness data for Des Moines, Cedar Rapids, Sioux City and more Iowa cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://hydroflow-usa.com/assets/pics/72121667848282.jpg" 
              alt="Iowa Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>Iowa</h1>
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
              <h2>Water Quality in the State of Iowa</h2>
              <p>
                Iowa, home to 3.1 million residents is known for its rolling hills and its many cornfields and plains. The water supply for Iowa comes from rivers, lakes, reservoirs and aquifers. Two large water sources for the state are the Mississippi River and the Jordan Aquifer.
              </p>

              <h2>Water Hardness Summary</h2>
              <p>
                Iowa water is considered hard to very hard. The average water hardness for the Iowa resident is 100-300 PPM. Des Moines, the most populous city in Iowa has a water hardness level of 157 PPM. Waterloo has very hard water according to USGS hard water measures with 297 PPM.
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

              <h2>Farming, Food Processing and Water Hardness</h2>
              <p>
                Iowa's top producing revenue is agriculture and food processing. Iowa's top five agricultural products are hogs, corn for grain, soybeans, cattle and dairy products. Meatpacking plants are a vital part of Iowa's economy. Other food processing plants in Iowa are corn oil, cornstarch, corn sugar and glucose. Iowa is also home to one of the largest cereal mills and one of the largest popcorn-processing plants in the country.
              </p>
              <p>
                As a great deal of Iowa has water rich in calcium (the primary source of water hardness), many farms and food processing plants experience issues related to scale buildup in their irrigators and equipment. In addition, contaminants polluting soil and waterways have increased greatly over the past few decades and there is a greater need for waste and chemical control.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Iowa will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that almost all Iowa residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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