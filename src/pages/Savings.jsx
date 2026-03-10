import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { TrendingUp, DollarSign, Calculator, ArrowRight, CheckCircle2, Users, Award } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ROICalculator from '@/components/calculator/ROICalculator';

const savingsStats = [
  {
    icon: DollarSign,
    value: '30-50%',
    label: 'Chemical Cost Reduction',
    description: 'Save on salt, chemicals, and descaling products'
  },
  {
    icon: TrendingUp,
    value: '40-60%',
    label: 'Maintenance Savings',
    description: 'Fewer repairs and equipment replacements'
  },
  {
    icon: CheckCircle2,
    value: '15-25%',
    label: 'Energy Savings',
    description: 'Improved water heater and system efficiency'
  },
  {
    icon: Award,
    value: '2-3x',
    label: 'ROI Over 5 Years',
    description: 'Average return on investment'
  }
];

const testimonials = [
  {
    company: 'Manufacturing Facility',
    location: 'Ohio',
    savings: '$45,000/year',
    quote: 'Our cooling tower maintenance costs dropped by 60% after installing HydroFLOW. The ROI was immediate.',
    person: 'Facilities Manager'
  },
  {
    company: 'Hotel Chain',
    location: 'California',
    savings: '$28,000/year',
    quote: 'No more scale buildup in our boilers and water heaters. Energy bills are down 22% across all properties.',
    person: 'Operations Director'
  },
  {
    company: 'Residential Community',
    location: 'Arizona',
    savings: '$12,000/year',
    quote: 'Eliminated our monthly water softener salt costs completely. Plumbing maintenance calls reduced by half.',
    person: 'HOA President'
  }
];

export default function Savings() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              ROI Calculator
            </h1>
          </motion.div>
        </div>
      </section>



      {/* Calculator Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ROICalculator />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-3xl p-8 md:p-12 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Ready to Start Saving?
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Choose the right HydroFLOW product for your needs or speak with our experts 
              for a custom solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Products')}>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8 py-6">
                  View Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={createPageUrl('Contact')}>
                <Button variant="outline" className="rounded-full px-8 py-6 border-2">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Link */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            Want to see more detailed results?
          </h3>
          <Link to={createPageUrl('CaseStudies')}>
            <Button variant="outline" className="rounded-full px-8 py-4">
              View Case Studies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}