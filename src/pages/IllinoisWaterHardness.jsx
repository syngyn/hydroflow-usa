import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function IllinoisWaterHardness() {
  const cityData = [
    { city: "Aurora", zipCodes: "60502 | 60503 | 60504 | 60505 | 60506", hardness: "127 PPM (mg/L) or 7 gpg" },
    { city: "Carol Stream", zipCodes: "60188", hardness: "418 PPM (mg/L) or 24 gpg" },
    { city: "Champaign", zipCodes: "61820 | 61821 | 61822", hardness: "258 PPM (mg/L) or 15 gpg" },
    { city: "Chicago", zipCodes: "60601 | 60602 | 60603 | 60604 | 60605 | 60606 | 60607 | 60608 | 60609 | 60610 | 60611 | 60612 | 60613 | 60614 | 60615 | 60616 | 60617 | 60618 | 60619 | 60620 | 60621 | 60622 | 60623 | 60624 | 60625 | 60626 | 60628 | 60629 | 60630 | 60631 | 60632 | 60633 | 60634 | 60636 | 60637 | 60638 | 60639 | 60640 | 60641 | 60642 | 60643 | 60644 | 60645 | 60646 | 60647 | 60649 | 60651 | 60652 | 60653 | 60654 | 60655 | 60656 | 60657 | 60659 | 60660 | 60661", hardness: "148 PPM (mg/L) or 8 gpg" },
    { city: "Cicero", zipCodes: "60804", hardness: "187 PPM (mg/L) or 11 gpg" },
    { city: "Decatur", zipCodes: "62521 | 62522 | 62523 | 62526", hardness: "194 PPM (mg/L) or 11 gpg" },
    { city: "Elgin", zipCodes: "60120 | 60123 | 60124", hardness: "171 PPM (mg/L) or 10 gpg" },
    { city: "Joilet", zipCodes: "60431 | 60432 | 60433 | 60435 | 60436", hardness: "388 PPM (mg/L) or 23 gpg" },
    { city: "Naperville", zipCodes: "60540 | 60563 | 60564 | 60565", hardness: "288 PPM (mg/L) or 17 gpg" },
    { city: "Peoria", zipCodes: "61602 | 61603 | 61604 | 61605 | 61606 | 61607 | 61614 | 61615 | 61625", hardness: "250 PPM (mg/L) or 15 gpg" },
    { city: "Rockford", zipCodes: "61101 | 61102 | 61103 | 61104 | 61107 | 61108 | 61109 | 61112 | 61114", hardness: "308 PPM (mg/L) or 18 gpg" },
    { city: "Springfield", zipCodes: "62701 | 62702 | 62703 | 62704 | 62707 | 62711 | 62712", hardness: "88 PPM (mg/L) or 5 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Illinois Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Illinois water hardness levels by city. Find water hardness data for Chicago, Springfield, Rockford and more Illinois cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/53dcd5912_Illinois.jpg" 
              alt="Illinois Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>Illinois</h1>
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
              <h2>Water Quality in the State of Illinois</h2>
              <p>
                Illinois is a state rich with culture and a diverse economic base. So much so, that it is considered a microcosm of the United States. Chicago, the third-largest state in the US, contributes to 65% of the state's population. The water supply for Illinois comes from surface waters (rivers, lakes and reservoirs) and groundwater from aquifers.
              </p>

              <h2>Water Hardness Summary</h2>
              <p>
                Illinois is a hard water state. The average water hardness for the Illinois resident is around 200 PPM, which is extremely hard and can leave white deposits on your plumbing fixtures and cause damage to your water heaters. Chicago, the most populous Illinois city, has a water hardness level of 148 PPM. The highest reported water hardness numbers come from the city of Rockford, with 308 PPM (or 18 grains per gallon).
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

              <h2>Agriculture, Food Processing and Water Hardness</h2>
              <p>
                Agriculture is a thriving industry in Illinois. 75% of the state's total land is occupied by farmland because the state has an ideal climate and rich productive soil. Top Illinois agriculture products are corn, soybeans, livestock, dairy and poultry.
              </p>
              <p>
                With the average water hardness in Illinois being 200 PPM, which is considered very hard, many farms and food process plants experience issues related to scale buildup on their irrigators and other necessary equipment due to the mass quantities of water flow every day. In addition, contaminants polluting soil and waterways have increased greatly over the past few decades.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Illinois will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that almost all Illinois residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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