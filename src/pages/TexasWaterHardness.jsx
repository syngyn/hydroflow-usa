import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function TexasWaterHardness() {
  const cityData = [
    { city: "Austin", zipCodes: "78703-78759", hardness: "184 PPM (mg/L) or 11 gpg" },
    { city: "Dallas/Fort Worth Metroplex", zipCodes: "75201-76179", hardness: "140 PPM (mg/L) or 8 gpg" },
    { city: "Greater Houston", zipCodes: "77002-77201", hardness: "135 PPM (mg/L) or 8 gpg" },
    { city: "San Antonio", zipCodes: "78201-78266", hardness: "357 PPM (mg/L) or 21 gpg" },
    { city: "El Paso", zipCodes: "79901-79942", hardness: "119 PPM (mg/L) or 7 gpg" },
    { city: "Midland", zipCodes: "79701-79707", hardness: "500 PPM (mg/L) or 30 gpg" },
    { city: "Lubbock", zipCodes: "79401-79424", hardness: "243 PPM (mg/L) or 14 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Texas Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Texas water hardness levels by city. Find water hardness data for Austin, Dallas, Houston, San Antonio and more Texas cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://hydroflow-usa.com/assets/pics/23881667849613.jpg" 
              alt="Texas Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Texas</h1>
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
              <h2>Water Quality in the State of Texas</h2>
              <p>
                Texas is the second largest state in the US by area and population with 28.7 million people in an area of 268,581 square miles. The State's economy is strong and stable; the main industries are cattle, oil & gas, timber, mining and cotton. Texas has some of the hardest water in the US.
              </p>

              <h2>Water Hardness by City</h2>
              <p>
                In Texas, the water hardness average is over 200 PPM, which ranks it as the state with the 6th hardest water in the US. While some cities have moderately soft water, like College station with 8 PPM and Waco at 41 PPM, most Texas cities struggle with hard water issues. For example, Austin's water has 184 Parts Per Million of hardness, San Antonio water hardness is 357 PPM and Midland's water is an extremely hard 500 PPM.
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
                Texas has been the leading US state in oil and natural gas production since 1940. The oil and gas industry uses water in all parts of the operation and that water is often locally sourced from groundwater, rivers or lakes. As Texas has some of the hardest water in the nation, oil and gas producers are often fighting to keep their operations running and their equipment scale-free.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Texas will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that almost all Texas residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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