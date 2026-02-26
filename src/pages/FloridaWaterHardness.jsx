import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

export default function FloridaWaterHardness() {
  const cityData = [
    { city: "Boca Raton", zipCodes: "33428 | 33431 | 33432 | 33433 | 33434 | 33486 | 33487 | 33496 | 33498", hardness: "189 PPM (mg/L) or 11 gpg" },
    { city: "Cape Coral", zipCodes: "33904 | 33909 | 33914 | 33990 | 33991 | 33993", hardness: "85 PPM (mg/L) or 5 gpg" },
    { city: "Clearwater", zipCodes: "33755 | 33756 | 33759 | 33760 | 33761 | 33762 | 33763 | 33764 | 33765", hardness: "178 PPM (mg/L) or 10 gpg" },
    { city: "Coral Springs", zipCodes: "33065 | 33071", hardness: "298 PPM (mg/L) or 17 gpg" },
    { city: "Fort Lauderdale", zipCodes: "33309 | 33311 | 33312 | 33313 | 33314 | 33315 | 33316 | 33317 | 33319 | 33321 | 33322 | 33323 | 33324 | 33325 | 33326 | 33327 | 33328 | 33330 | 33331 | 33332 | 33334 | 33351", hardness: "157 PPM (mg/L) or 9 gpg" },
    { city: "Gainesville", zipCodes: "32601 | 32603 | 32605 | 32606 | 32607 | 32608 | 32609 | 32612 | 32641 | 32653", hardness: "140 PPM (mg/L) or 8 gpg" },
    { city: "Greater Miami Area", zipCodes: "33101 | 33122 | 33125 | 33126 | 33127 | 33128 | 33129 | 33130 | 33131 | 33132 | 33133 | 33134 | 33135 | 33136 | 33137 | 33138 | 33142 | 33143 | 33144 | 33145 | 33146 | 33147 | 33150 | 33155 | 33156 | 33157 | 33158 | 33161 | 33162 | 33165 | 33166 | 33167 | 33168 | 33169 | 33170 | 33172 | 33173 | 33174 | 33175 | 33176 | 33177 | 33178 | 33179 | 33180 | 33181 | 33182 | 33183 | 33184 | 33185 | 33186 | 33187 | 33189 | 33190 | 33193 | 33194 | 33196 | 33109 | 33139 | 33140 | 33141 | 33154", hardness: "219 PPM (mg/L) or 12 gpg" },
    { city: "Hialeah", zipCodes: "33010 | 33012 | 33013 | 33014 | 33015 | 33016 | 33018", hardness: "290 PPM (mg/L) or 17 gpg" },
    { city: "Jacksonville", zipCodes: "32202 | 32204 | 32205 | 32206 | 32207 | 32208 | 32209 | 32210 | 32211 | 32212 | 32216 | 32217 | 32218 | 32219 | 32220 | 32221 | 32222 | 32223 | 32224 | 32225 | 32226 | 32227 | 32228 | 32234 | 32244 | 32246 | 32254 | 32256 | 32257 | 32258 | 32277", hardness: "154 PPM (mg/L) or 9 gpg" },
    { city: "Lakeland", zipCodes: "33801 | 33803 | 33805 | 33809 | 33810 | 33811 | 33812 | 33813 | 33815", hardness: "180 PPM (mg/L) or 11 gpg" },
    { city: "Orlando", zipCodes: "32801 | 32803 | 32804 | 32805 | 32806 | 32807 | 32808 | 32809 | 32810 | 32811 | 32812 | 32814 | 32817 | 32818 | 32819 | 32820 | 32821 | 32822 | 32824 | 32825 | 32826 | 32827 | 32828 | 32829 | 32830 | 32831 | 32832 | 32833 | 32835 | 32836 | 32837 | 32839", hardness: "129 PPM (mg/L) or 8 gpg" },
    { city: "Palm Bay", zipCodes: "32905 | 32907 | 32908 | 32909", hardness: "103 PPM (mg/L) or 6 gpg" },
    { city: "Pembroke Pines", zipCodes: "33028", hardness: "276 PPM (mg/L) or 16 gpg" },
    { city: "Port St. Lucy", zipCodes: "34952 | 34953 | 34983 | 34984 | 34986 | 34987", hardness: "197 PPM (mg/L) or 12 gpg" },
    { city: "St. Petersburg", zipCodes: "33701 | 33702 | 33703 | 33704 | 33705 | 33706 | 33707 | 33708 | 33709 | 33710 | 33711 | 33712 | 33713 | 33714 | 33715 | 33716", hardness: "161 PPM (mg/L) or 9 gpg" },
    { city: "Tallahassee", zipCodes: "32301 | 32303 | 32304 | 32305 | 32308 | 32309 | 32310 | 32311 | 32312 | 32317 | 32399", hardness: "126 PPM (mg/L) or 7 gpg" },
    { city: "Tampa Metro Area", zipCodes: "33602 | 33603 | 33604 | 33605 | 33606 | 33607 | 33609 | 33610 | 33611 | 33612 | 33613 | 33614 | 33615 | 33616 | 33617 | 33618 | 33619 | 33620 | 33621 | 33624 | 33625 | 33626 | 33629 | 33634 | 33637 | 33647", hardness: "220 PPM (mg/L) or 13 gpg" },
    { city: "West Palm Beach", zipCodes: "33401 | 33403 | 33404 | 33405 | 33406 | 33407 | 33409 | 33411 | 33412 | 33413 | 33415 | 33417", hardness: "317 PPM (mg/L) or 19 gpg" }
  ];

  return (
    <>
      <Helmet>
        <title>Florida Water Hardness - Complete City Guide | HydroFLOW USA</title>
        <meta name="description" content="Comprehensive guide to Florida water hardness levels by city. Find water hardness data for Miami, Orlando, Tampa, Jacksonville and more Florida cities." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://hydroflow-usa.com/assets/pics/60481667847340.jpg" 
              alt="Florida Water Hardness Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Florida
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <h2>Water Quality in the State of Florida</h2>
              <p>
                Florida water is controlled by the state government through five regional authorities: Northwest Florida water management district, Suwannee River water management district, St. Johns River water management district, Southwest Florida water management district and South Florida water management district.
              </p>

              <h2>Water Hardness by City</h2>
              <p>
                Florida water is considered hard to very hard. According to USGS, water is considered hard at 121 mg/L and very hard at 180 mg/L. The average water hardness for the Florida resident is 100 – 300 Parts Per Million. The majority of supplied water is derived from the Floridan Aquifer, which underlies the entire state of Florida. The Floridan Aquifer yields well water hardness less than 180 PPM in Northwestern and Central Florida, providing moderately hard water to cities such as Tallahassee (126 PPM), Gainesville (140 PPM) and the theme park filled city of Orlando (129 PPM). Cities such as Miami, 219 PPM, and West Palm Beach, 317 PPM, have water that is considered very hard.
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
                Florida is well known for its theme parks and sandy beaches. As a result, people travel near and far to experience the thrills and relaxation that this sunny state provides. In 2018, a record 126 million tourists visited Florida. With the influx of visitors to the state of Florida, the hotel industry is in constant demand. Florida has an average water hardness of 216 PPM, which is considered to be extremely hard according to the USGS water hardness table, as a result, hotel management often finds that the costs of maintenance to their pools, ice machines and HVAC equipment can be quite cumbersome. In addition, the lifespan of this hotel equipment can be cut in half from the impact of scale buildup brought on by water hardness.
              </p>

              <h2>Solutions to your Water Quality Problems</h2>
              <p>
                Fixing your water quality issues in the state of Florida will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
              </p>
              <p>
                A problem that almost all Florida residents will have to deal with is hard water. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
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