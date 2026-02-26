import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function IdahoWaterHardness() {
  const cityData = [
    { city: "Boise", zipCodes: "83702 | 83703 | 83704 | 83705 | 83706 | 83709 | 83712 | 83713 | 83716", hardness: "108 PPM (mg/L) or 6 gpg" },
    { city: "Couer d'Alen", zipCodes: "83814 | 83815", hardness: "127 PPM (mg/L) or 7 gpg" },
    { city: "Idaho Falls", zipCodes: "83401 | 83402 | 83404 | 83406", hardness: "239 PPM (mg/L) or 14 gpg" },
    { city: "Kimberly", zipCodes: "83341", hardness: "142 PPM (mg/L) or 8 gpg" },
    { city: "Kuna", zipCodes: "83634 | 83642 | 83687", hardness: "137 PPM (mg/L) or 8 gpg" },
    { city: "Lewiston", zipCodes: "83501", hardness: "17 PPM (mg/L) or 1 gpg" },
    { city: "Meridian", zipCodes: "83616 | 83642 | 83634 | 83646 | 83713", hardness: "106 PPM (mg/L) or 6 gpg" },
    { city: "Moscow", zipCodes: "83843 | 83844", hardness: "110 PPM (mg/L) or 6 gpg" },
    { city: "Nampa", zipCodes: "83651 | 83686 | 83687", hardness: "66 PPM (mg/L) or 4 gpg" },
    { city: "Pocatello", zipCodes: "83201 | 83202 | 83204 | 83209", hardness: "350 PPM (mg/L) or 20 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Idaho Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Idaho water hardness levels by city. Find water hardness data for Boise, Pocatello, Idaho Falls and more Idaho cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://hydroflow-usa.com/assets/pics/56311667848092.jpg" 
              alt="Idaho Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Idaho</h1>
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
              <h2>Water Quality in the State of Idaho</h2>
              <p>
                Idaho is one of the most water-rich states in the United States of America, with more than 95,000 miles of rivers, streams, lakes and reservoirs. While Idaho may have an abundance of available surface water, only 5% of this water is used as potable water. 95% of tap water supplied to Idaho residents comes from groundwater. The reason for this is simple; not only is Idaho rich with surface water, but it also has a great amount of water stored below ground in aquifers. Groundwater is much less susceptible to contaminates, which make it less expensive to treat.
              </p>

              <h2>Water Hardness by City</h2>
              <p>
                Idaho water is considered slightly hard. The average water hardness for the Idaho resident is around 128 PPM. The highest hard water number comes from Pocatello at 350 PPM, the city with the softest water is Lewiston with 17 PPM. Boise water is 108 PPM and is considered hard according to the USGS water hardness measures.
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

              <h2>Farming, Food Processing and Hard Water</h2>
              <p>
                Idaho is the 7th largest agricultural producer in the US. This sector accounts for 20% of Idaho's income each year. The state is most known for its potato yields. Idaho is the country's leading potato producer, providing 32% of the United States potato production. While potatoes are an important part of Idaho's economy and culture, the leading food production industry in Idaho is livestock and dairy products; accounting for over half of Idaho's agricultural revenue each year.
              </p>
              <p>
                As a great deal of Idaho has water rich in calcium (the primary source of water hardness), many farms and food processing plants experience issues related to scale buildup in their irrigators, production and processing equipment. In addition, contaminants polluting soil and waterways have increased greatly over the past few decades and there is a greater need for waste and chemical control.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Idaho will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that almost all Idaho residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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