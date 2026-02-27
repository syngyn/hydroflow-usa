import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function NewJerseyWaterHardness() {
  const cityData = [
    { city: "Newark", zipCodes: "7102 | 7103 | 7104 | 7105 | 7106 | 7107 | 7108 | 7112 | 7114", hardness: "51 PPM (mg/L) or 3 gpg" },
    { city: "Jersey City", zipCodes: "7302 | 7304 | 7305 | 7306 | 7307 | 7310 | 7311", hardness: "79 PPM (mg/L) or 5 gpg" },
    { city: "Paterson", zipCodes: "7501 | 7502 | 7503 | 7504 | 7505 | 7513 | 7514 | 7522 | 7524", hardness: "68 PPM (mg/L) or 4 gpg" },
    { city: "Elizabeth", zipCodes: "7201 | 7202 | 7208", hardness: "99 PPM (mg/L) or 6 gpg" },
    { city: "Trenton", zipCodes: "8608 | 8609 | 8610 | 8611 | 8618 | 8619 | 8620 | 8628 | 8629 | 8638 | 8690", hardness: "110 PPM (mg/L) or 6 gpg" },
    { city: "Orange", zipCodes: "7050", hardness: "192 PPM (mg/L) or 11 gpg" },
    { city: "Atlantic City", zipCodes: "8401", hardness: "104 PPM (mg/L) or 6 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>New Jersey Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to New Jersey water hardness levels by city. Find water hardness data for Newark, Jersey City, Trenton and more New Jersey cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://hydroflow-usa.com/assets/pics/67791667849049.jpg" 
              alt="New Jersey Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>New Jersey</h1>
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
              <h2>Water Quality in the State of New Jersey</h2>
              <p>
                New Jersey is a Mid-Atlantic state that is bordered by New York, Pennsylvania and Delaware. It is one of the wealthiest states as far as median-household income is concerned and the most densely populated state in the US. The majority of New Jersey residents (63%) receive their potable water from the Millstone River, Raritan River, Delaware River, the D&R Canal, or a combination of these water sources. The remaining 37% of New Jersey residents receive their water from public wells.
              </p>

              <h2>Water Hardness Summary</h2>
              <p>
                New Jersey has hard water, based on USGS water hardness measures, with an average of 106 PPM. Trenton, the state capital, has a water hardness level of 222 PPM which is extremely hard. Newark, the most populous city in New Jersey, has 51 PPM, which is considered soft water.
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
                New Jersey has long been known as a top advanced manufacturing state, with over 7,000 manufacturers contributing $52 billion to the states Gross Domestic Product. New Jersey's top manufacturing industries are chemicals, food & beverage, tobacco products, computer products and electronic products.
              </p>
              <p>
                Product processing in most manufacturing plants requires water. Cooling towers and HVAC are imperative to keeping operations running smoothly. Water hardness levels can be as high as 500 PPM; with water hardness levels this high, manufacturing equipment can deteriorate at a rapid pace and experience efficiency loss.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of New Jersey will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem most New Jersey residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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