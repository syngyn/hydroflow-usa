import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

export default function StateWaterHardnessTemplate({ 
  stateName,
  metaDescription,
  heroImageUrl,
  sections 
}) {
  return (
    <div>
      <Helmet>
        <title>{stateName} Water Hardness - Water Quality by City | HydroFLOW USA</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {heroImageUrl && (
          <div className="absolute inset-0">
            <img 
              src={heroImageUrl} 
              alt={`${stateName} Water Hardness map`}
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-slate-900/20" />
          </div>
        )}
        {!heroImageUrl && (
          <div className="absolute inset-0">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
          </div>
        )}
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {stateName}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{section.title}</h2>
              
              {section.paragraphs && section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-lg text-slate-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}

              {section.table && (
                <>
                  {section.tableIntro && (
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                      {section.tableIntro}
                    </p>
                  )}
                  
                  <div className="overflow-x-auto rounded-lg border border-slate-200 mb-6">
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
                        {section.table.map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            <td className="px-6 py-4 text-sm text-slate-900">
                              <strong>{row.city}</strong>
                              {row.zipCodes && (
                                <>
                                  <br />
                                  <span className="text-xs text-slate-600">{row.zipCodes}</span>
                                </>
                              )}
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-700">{row.hardness}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 text-sm text-slate-600 space-y-1">
                    <p>PPM = Parts Per Million</p>
                    <p>mg/L = Milligrams Per Liter</p>
                    <p>gpg = Grains Per Gallon</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}