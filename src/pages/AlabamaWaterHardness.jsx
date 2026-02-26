import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

export default function AlabamaWaterHardness() {
  return (
    <div>
      <Helmet>
        <title>Alabama Water Hardness - Water Quality by City | <i>Hydro</i>FLOW USA</title>
        <meta name="description" content="Alabama water hardness averages 61 PPM (moderately soft). Find water hardness data for Birmingham, Mobile, Huntsville, Madison and other Alabama cities." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <img 
              src="https://hydroflow-usa.com/assets/pics/48451667846899.jpg" 
              alt="Alabama Water Hardness map"
              className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl mb-8"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Alabama
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Water Quality Overview */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Water Quality in the State of Alabama</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Alabama is home to an estimated 4.9 million residents. It has the most inland waterways in the US with a total of 1,500 miles. Roughly 553 trillion gallons of water is stored in underground Alabama aquifers. Groundwater is the primary source of water for 44% of the population. Other drinking water sources come from surface waters such as rivers and reservoirs throughout Alabama state.
            </p>
          </div>

          {/* Water Hardness by City */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Water Hardness by City</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Alabama water is moderately soft with a state average hardness of 61 PPM. While the majority of Alabama cities share soft water such as the water in Mobile (43 PPM), whose water comes from Big Creek Lake, some hard water areas are Huntsville (81 PPM), and Madison (98 PPM). This is due to limestone-rich aquifers in the Tennessee river valley.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              For more information on water hardness in specific cities, please see table below.
            </p>

            {/* Water Hardness Table */}
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">
                      City
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">
                      Water Hardness Data
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-900">
                      <strong>Alabaster</strong><br />
                      <span className="text-xs text-slate-600">35007 | 35114</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">204.5 PPM (mg/L) or 12 gpg</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-900">
                      <strong>Auburn</strong><br />
                      <span className="text-xs text-slate-600">36830 | 36832 | 36849</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">38.7 PPM (mg/L) or 2.3 gpg</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-900">
                      <strong>Birmingham</strong><br />
                      <span className="text-xs text-slate-600">35203 | 35204 | 35205 | 35206 | 35207 | 35208 | 35209 | 35210 | 35211 | 35212 | 35213 | 35214 | 35215 | 35216 | 35217 | 35218 | 35221 | 35222 | 35223 | 35224 | 35226 | 35228 | 35229 | 35233 | 35234 | 35235 |35242 | 35243 | 35244 | 35254</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">87 PPM (mg/L) or 5 gpg</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-900">
                      <strong>Huntsville</strong><br />
                      <span className="text-xs text-slate-600">35801 |35802 | 35803 | 35805 | 35806 | 35808 | 35810 | 35811 | 35816 | 35824 | 35896</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">81 PPM (mg/L) or 5 gpg</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-900">
                      <strong>Madison</strong><br />
                      <span className="text-xs text-slate-600">35756 |35757 | 35758</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">98 PPM (mg/L) or 5 gpg</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-900">
                      <strong>Mobile</strong><br />
                      <span className="text-xs text-slate-600">36604 |36605 | 36606 | 36607 | 36608 | 36609 | 36610 | 36611 | 36612 | 36615 | 36616 | 36617 | 36618 | 36619 | 36688 | 36693 | 36695</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">43 PPM (mg/L) or 3 gpg</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-900">
                      <strong>Montgomery</strong><br />
                      <span className="text-xs text-slate-600">36104 |36105 | 36106 | 36107 | 36108 | 36109 | 36110 | 36111 | 36112 | 36113 | 36115 | 36116 | 36117</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">63 PPM (mg/L) or 4 gpg</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 text-sm text-slate-600 space-y-1">
              <p>PPM = Parts Per Million</p>
              <p>mg/L = Milligrams Per Liter</p>
              <p>gpg = Grains Per Gallon</p>
            </div>
          </div>

          {/* Manufacturing and Water Hardness */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Manufacturing and Water Hardness</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Alabama's top manufacturing industries are automotive, chemical, technology, forestry and aeronautics. Product processing in most manufacturing plants requires water. Cooling towers and HVAC are imperative to keeping operations running smoothly. Though Alabama has relatively soft water, industrial facilities can discover that they still experience headaches related to scale buildup and their equipment can deteriorate at a rapid pace and experience efficiency loss.
            </p>
          </div>

          {/* Solutions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Solutions to your Water Quality Problems</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Fixing your water quality issues in the state of Alabama will depend on your specific water source. It is best to test your potable water supply in order to get a better understanding of your water quality. Testing is relatively cheap. The test results will allow you to understand if your potable water has issues that need to be addressed. Common solutions to water contamination problems may include a water filtration system, a reverse osmosis system or other whole home water treatment solutions.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              A problem that some Alabama residents will have to deal with is <strong>hard water</strong>. One old-fashioned, inefficient, expensive and unhealthy method to treat hard water is with a salt-based water softener. Most people don't realize that if you're using a water softener you are basically removing calcium and magnesium from your drinking water and adding salt to your diet. In addition, many states are banning the use of salt-based water softeners.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Alternative water treatment solutions such as "water conditioners" have been gaining popularity in recent years because they are cheap to operate and the best eco-friendly solution for hard water. <i>Hydro</i>PATH technology, which powers the <i>Hydro</i>FLOW water conditioners is by far the most efficient, cost-effective and eco-friendly solution to deal with hard water problems. To learn more about how <i>Hydro</i>FLOW solves the problems created by hard water, please check out our technology page.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}