import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function HawaiiWaterHardness() {
  const cityData = [
    { city: "Hilo", zipCodes: "96720", hardness: "17 PPM (mg/L) or 1 gpg" },
    { city: "Honolulu", zipCodes: "96813 | 96814 | 96815 | 96816 | 96817 | 96818 | 96819 | 96821 | 96822 | 96825 | 96826 | 96850", hardness: "34 PPM (mg/L) or 2 gpg" },
    { city: "Kaanapali", zipCodes: "96761", hardness: "17 PPM (mg/L) or 1 gpg" },
    { city: "Kailua", zipCodes: "96734", hardness: "22 PPM (mg/L) or 1 gpg" },
    { city: "Maui", zipCodes: "96753 | 96793 | 96761 | 96768 | 96732 | 96708 | 96790 | 96779 | 96733 | 96748 | 96763 | 96788 | 96713 | 96767 | 96784 | 96729 | 96757 | 96770", hardness: "110 PPM (mg/L) or 6 gpg" },
    { city: "Pearl City", zipCodes: "96782", hardness: "32 PPM (mg/L) or 2 gpg" },
    { city: "Waikola", zipCodes: "96738", hardness: "10 PPM (mg/L) or 1 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Hawaii Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Hawaii water hardness levels by city. Find water hardness data for Honolulu, Maui, Hilo and more Hawaii cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/c82b897de_76381667846800.jpg" 
              alt="Hawaii Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>Hawaii</h1>
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
              <h2>Water Quality in the State of Hawaii</h2>
              <p>
                Hawaii's water supply is mostly from surface water and aquifers. The water provided by aquifers around the islands are naturally filtered by lava rocks. Hawaii has 8 main islands, and each island has its own water supply board or department that is treating and distributing the water to the consumers. The Island of Hawaii has some of the best quality drinking water around; there is little to no bacteria, so treatment is minimal.
              </p>

              <h2>Water Hardness by City</h2>
              <p>
                Hawaii has one of the lowest averages for hard water in the country at 34 PPM, which is considered to be soft water, by USGS water hardness measures. Some examples of soft water cities are Waikola with 10 PPM and Hilo with a hardness level of 17 PPM. The hardest water level in the state comes from Maui with 110 Part per Million, which gets its water from Iao Aquifer in the West Maui Mountains and from wells in the area.
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

              <h2>Tourism and Water Hardness</h2>
              <p>
                Hawaii is well known for its exotic resorts and sandy beaches. As a result, people travel near and far to experience the thrills and relaxation that this tropical state provides. In 2018, a record 9.9 million tourists visited Hawaii. With the influx of visitors to the state of Hawaii, the hotel industry is in constant demand.
              </p>
              <p>
                Though Hawaii has relatively soft water, hotel management can discover that they still experience headaches related to scale buildup and bio issues which can increase the costs of maintenance to their pools, ice machines and HVAC equipment. In addition, the lifespan of this hotel equipment can be cut in half from the impact of scale buildup brought on by water hardness.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Hawaii will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that some Hawaii residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
              </p>
              <p>
                Alternative water treatment solutions such as "water conditioners" have been gaining popularity in recent years because they are cheap to operate and the best eco-friendly solution for hard water. Hydropath technology, which powers the HydroFLOW water conditioners is by far the most efficient, cost-effective and eco-friendly solution to deal with hard water problems. To learn more about how HydroFLOW solves the problems created by hard water, please check out our <Link to={createPageUrl('Technology')} className="text-cyan-600 hover:underline">technology page</Link>.
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