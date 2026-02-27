import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function NevadaWaterHardness() {
  const cityData = [
    { city: "Carson City", zipCodes: "89701 | 89706 | 89703 | 89705 | 89702", hardness: "104 PPM (mg/L) or 6 gpg" },
    { city: "Elko", zipCodes: "89801", hardness: "410 PPM (mg/L) or 24 gpg" },
    { city: "Henderson", zipCodes: "89052 | 89074 | 89015 | 89014 | 89012 | 89002 | 89011 | 89044", hardness: "325 PPM (mg/L) or 19 gpg" },
    { city: "Las Vegas", zipCodes: "89101-89179", hardness: "278 PPM (mg/L) or 16 gpg" },
    { city: "Reno", zipCodes: "89502 | 89506 | 89509 | 89523 | 89521 | 89503 | 89512 | 89511 | 89508 | 89519 | 89501 | 89510", hardness: "38 PPM (mg/L) or 2 gpg" },
    { city: "Sparks", zipCodes: "89436 | 89431 | 89434 | 89441", hardness: "67 PPM (mg/L) or 4 gpg" },
    { city: "Winnemucca", zipCodes: "89445 | 89446", hardness: "210 PPM (mg/L) or 12 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Nevada Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Nevada water hardness levels by city. Find water hardness data for Las Vegas, Reno, Henderson and more Nevada cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://hydroflow-usa.com/assets/pics/74941667848957.jpg" 
              alt="Nevada Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>Nevada</h1>
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
              <h2>Water Quality in the State of Nevada</h2>
              <p>
                Most of Nevada's population lives in the city of Las Vegas, which has extremely hard water. Nearly 90% of Las Vegas water comes from Lake Mead. The remaining 10% comes from wells that tap into an aquifer beneath the Las Vegas Valley known as the Basin Range Aquifers. Water hardness in Nevada is very high. According to our collected data, averages in the state of Nevada rank as one of the hardest in the US.
              </p>

              <h2>Nevada Water Hardness by City</h2>
              <p>
                The city with the hardest water is Elko, at 410 Parts Per Million; on the other hand, Reno's water is relatively soft at 38 PPM. The entertainment capital of the world, Las Vegas, has a water hardness level of 275 PPM.
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

              <h2>Mining and Water Hardness</h2>
              <p>
                Best known for its gold, silver, and copper production, Nevada is also a significant source of a variety of minerals, such as lithium, iron, and molybdenum. Other industrial minerals used in construction, such as gypsum, limestone, sand, and gravel, are found in abundance in Nevada. The water used in the mining industry is mineral-rich, with a hardness that can reach over 2,000 PPM.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Nevada will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system, or other whole home water treatment solutions.
              </p>
              <p>
                A problem that almost all Nevada residents will have to deal with is hard water. Las Vegas water hardness is 278 PPM making solving this issue important to Las Vegas residents. One old-fashioned, inefficient, expensive, and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener, you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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