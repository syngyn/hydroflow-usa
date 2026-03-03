import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function LouisianaWaterHardness() {
  const cityData = [
    { city: "New Orleans", zipCodes: "70112 | 70113 | 70114 | 70115 | 70116 | 70117 | 70118 | 70119 | 70121 | 70122 | 70123 | 70124 | 70125 | 70126 | 70127 | 70128 | 70129 | 70130 | 70131 | 70139 | 70163", hardness: "138 PPM (mg/L) or 8 gpg" },
    { city: "Shreveport", zipCodes: "71101 | 71103 | 71104 | 71105 | 71106 | 71107 | 71108 | 71109 | 71115 | 71118 | 71119 | 71129", hardness: "50 PPM (mg/L) or 3 gpg" },
    { city: "Baton Rouge", zipCodes: "70801 | 70802 | 70803 | 70805 | 70806 | 70807 | 70808 | 70809 | 70810 | 70811 | 70812 | 70814 | 70815 | 70816 | 70817 | 70818 | 70819 | 70820 | 70836", hardness: "44 PPM (mg/L) or 3 gpg" },
    { city: "Lafayette", zipCodes: "70501 | 70503 | 70506 | 70507 | 70508", hardness: "90 PPM (mg/L) or 5 gpg" },
    { city: "Lake Charles", zipCodes: "70601 | 70605 | 70607 | 70611 | 70615", hardness: "110 PPM (mg/L) or 6 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Louisiana Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Louisiana water hardness levels by city. Find water hardness data for New Orleans, Baton Rouge, Shreveport and more Louisiana cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/6dbd83ad3_cfontenot-baton-rouge-6254367_1920.jpg" 
              alt="Louisiana Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>Louisiana</h1>
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
              <h2>Water Quality in the State of Louisiana</h2>
              <p>
                Louisiana, home to more than 4.6 million people, is well known for its French and Cajun roots. It is a cultural state and has many traditions and annual celebrations unique to them. Louisiana's water supply comes from either surface water (bayous, rivers, etc.) or groundwater (aquifers). Approximately two-thirds of Louisiana residents get their drinking water from groundwater sources.
              </p>

              <h2>Water Hardness Summary</h2>
              <p>
                Louisiana water is considered moderately hard. The average water hardness for the Louisiana resident is 86 PPM. New Orleans, the most populous city in Louisiana has a water hardness level of 138 PPM, which is considered hard based on USGS hardwater measures. Lafayette has moderately hard water with a measurement of 90 PPM and Baton Rouge has water that is considered relatively soft (44 PPM).
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

              <h2>Gas, Oil and Water Hardness</h2>
              <p>
                Louisiana is one of the top five oil and gas producing states in America. Even though there has been a decline over the past few years, the oil and gas industry has remained the highest economic contributor to the state of Louisiana. The state ranks as the number two producer of crude oil and the number four producer of natural gas in the country. Louisiana has 18 refineries, ranking it second, in US petroleum capacity behind Texas.
              </p>
              <p>
                The oil and gas industry uses water in all parts of the operation, and that water is often locally sourced from groundwater, rivers or lakes (both natural and artificial). As Louisiana is a moderately hard-water state, oil and gas producers are often fighting to keep their operations running and their equipment scale-free.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Louisiana will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that almost all Louisiana residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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