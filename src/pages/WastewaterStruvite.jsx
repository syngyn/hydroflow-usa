import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Award, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const benefits = [
  'Struvite control',
  '3% improvement in cake dryness',
  'Polymer reduction of up to 20%',
  'Reduced chemical usage',
  'Enhanced filtration efficiency'
];

const caseStudies = [
  {
    title: 'Wastewater Treatment Plant in St. Paul, Minnesota',
    description: '<i>Hydro</i>FLOW equipment was installed on the main centrate line to determine if the device could reduce the accumulation of hard struvite formation inside the pipes.',
    results: 'After 6 months, the pipes were given a quick water flush and then opened. The results were outstanding. The remaining struvite build-up will continue to be removed during normal plant operation.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/3272e767d_WWTP1.jpg'
  },
  {
    title: 'Water Reclamation Facility in Orlando, Florida',
    description: '<i>Hydro</i>FLOW equipment was installed at the Orlando, FL, Water Conserv II Water Reclamation Facility for a struvite removal and prevention trial.',
    results: 'After five months, a significant reduction of struvite build-up and a surprising 20% reduction in polymer use was achieved.',
    pdfLink: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/49608f566_HydroFLOW-industrial-case-study-city-of-orlando-wastewater-treatment-plant.pdf'
  },
  {
    title: 'Wastewater Treatment Plant in London, Ohio',
    description: '<i>Hydro</i>FLOW equipment was installed to determine if struvite can be removed from the belt press without chemical, manual or mechanical assistance.',
    results: 'Fantastic results were achieved after just 35 days.',
    pdfLink: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/4f70919bc_CaseStudy-LondonOhioWastewaterTreatmentPlant-StruviteTreatment.pdf'
  },
  {
    title: 'Wastewater Treatment Plant in Augusta, Georgia',
    description: 'Independent, third-party technology verification to validate the effectiveness of the <i>Hydro</i>FLOW i Range product with respect to controlling struvite scaling.',
    results: 'Following the installation of <i>Hydro</i>FLOW and discontinuation of antiscalant, the existing scale became soft and was easily removed by spraying with high-pressure water. The facility eliminated the use of antiscalants chemicals and realized significant cost savings of approximately $4,000 per month.',
    pdfLink: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/01fc2c4df_HydroFLOWThirdPartyVerificationReport-Augusta-8Nov2018.pdf'
  },
  {
    title: 'Wastewater Treatment Plant in Denver, Colorado',
    description: 'Independent, third-party technology verification focusing on identifying changes to struvite scaling before and after installing <i>Hydro</i>FLOW units.',
    results: 'Based on the review of the data and discussion with staff, the use of <i>Hydro</i>FLOW i Range on the centrate line was effective in softening the existing scale and preventing the formation of new scale. Softening of the existing scale allowed a substantial portion of the original hard scale to be removed during the 60-day test period.',
    pdfLink: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/718efb872_HydroFLOW-industrial-third-party-verification-report-denver-metro-wwtp-27Sept17.pdf'
  },
  {
    title: 'Wastewater Treatment Plant in Tulsa, Oklahoma',
    description: 'Independent, third-party technology verification to validate the effectiveness of the <i>Hydro</i>FLOW i Range product with respect to controlling struvite scaling.',
    results: 'This verification report validates that the use of a <i>Hydro</i>FLOW i Range unit prevented scale formation in a BFP used for dewatering anaerobically digested sludge. The unit also caused changes in the physical characteristics of the existing scale, making it easier to be removed.',
    pdfLink: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/7340df0fa_HydroFLOW-industrial-third-party-verification-report-tulsa-southside-WWTP.pdf'
  }
];

export default function WastewaterStruvite() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/3272e767d_WWTP1.jpg"
            alt="Wastewater treatment"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Wastewater Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Wastewater Struvite Control
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Everything that goes down the drain eventually ends up at a wastewater treatment plant. <i>Hydro</i>FLOW helps facilities operate more efficiently and effectively.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Award className="w-12 h-12 text-cyan-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Proven Benefits
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              For over a decade, <i>Hydro</i>FLOW has proven its ability to help wastewater treatment plants with an average payback period of 1-2 years
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-6 bg-slate-50 rounded-xl"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                <p className="text-slate-700 font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/3272e767d_WWTP1.jpg"
              alt="Wastewater treatment plant"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl mb-8"
            />
            <Badge className="bg-cyan-600 text-white text-base px-6 py-2">
              <Award className="w-4 h-4 mr-2" />
              WEFTEC Innovative Technology Award Winner
            </Badge>
          </motion.div>
        </div>
      </section>

      {/* Wastewater Video */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              See <i>Hydro</i>FLOW in Action
            </h2>
            <p className="text-lg text-slate-600">
              Watch how our technology transforms wastewater treatment
            </p>
          </motion.div>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
            <iframe
              src="https://player.vimeo.com/video/1156116944"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}