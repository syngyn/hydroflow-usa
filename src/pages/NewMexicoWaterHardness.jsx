import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function NewMexicoWaterHardness() {
  const cityData = [
    { city: "Albuquerque", zipCodes: "87102-87123", hardness: "120 PPM (mg/L) or 7 gpg" },
    { city: "Las Cruces", zipCodes: "88001 | 88003 | 88004 | 88005 | 88007 | 88011 | 88012", hardness: "140 PPM (mg/L) or 8 gpg" },
    { city: "Santa Fe", zipCodes: "87501 | 87505 | 87507 | 87508", hardness: "150 PPM (mg/L) or 9 gpg" },
    { city: "Roswell", zipCodes: "88201 | 88203", hardness: "410 PPM (mg/L) or 24 gpg" },
    { city: "Farmington", zipCodes: "87401 | 87402 | 87499", hardness: "257 PPM (mg/L) or 15 gpg" },
    { city: "Rio Rancho", zipCodes: "87124 | 87144", hardness: "150 PPM (mg/L) or 9 gpg" },
    { city: "Hobbs", zipCodes: "88240 | 88242", hardness: "344 PPM (mg/L) or 20 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>New Mexico Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to New Mexico water hardness levels by city. Find water hardness data for Albuquerque, Santa Fe, Las Cruces and more New Mexico cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://hydroflow-usa.com/assets/pics/70341667849087.jpg" 
              alt="New Mexico Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">New Mexico</h1>
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
              <h2>Water Quality in the State of New Mexico</h2>
              <p>
                Water is not abundantly available for the 2.1 million residents in the state of New Mexico. On average, this desert state receives only around 10 inches of rainwater each year. Most of New Mexico's water is stored as groundwater in aquifers and extracted by wells. Large pipelines transport water throughout the state.
              </p>

              <h2>New Mexico Water Hardness by City</h2>
              <p>
                The majority of New Mexico water comes from public and private wells; therefore, water is predominately hard to very hard. Most New Mexico cities have a hardness ranging from 150 to 300 PPM. Roswell has extremely hard water with 410 Parts Per Million. The lowest hardness level comes from the most populous city in New Mexico, Albuquerque, with a hardness of 120 PPM.
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

              <h2>Oil, Gas and Water Hardness</h2>
              <p>
                New Mexico is the 3rd largest oil producer and 8th largest natural gas producer in the United States. New Mexico's oil and natural gas activity is concentrated in two areas: the Permian Basin in the southeast and the San Juan Basin in the northwest. The oil and gas industry uses water in all parts of operation, and that water is often locally sourced from groundwater, rivers or lakes. As New Mexico is one of the hardest water states, oil and gas producers are often fighting to keep their operations running and their equipment scale-free.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of New Mexico will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system, or other whole home water treatment solutions.
              </p>
              <p>
                A problem that almost all New Mexico residents will have to deal with is hard water. One old-fashioned, inefficient, expensive, and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener, you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
              </p>
              <p>
                Alternative water treatment solutions such as "water conditioners" have been gaining popularity in recent years because they are cheap to operate and the best eco-friendly solution for hard water. Hydropath technology, which powers the HydroFLOW water conditioners, is by far the most efficient and cost-effective eco-friendly solution to deal with hard water problems. To learn more about how HydroFLOW solves the problems created by hard water, please check out our <Link to={createPageUrl('Technology')} className="text-cyan-600 hover:underline">technology page</Link>.
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