import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Droplets, AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const getRecommendedProduct = (hardness) => {
  return {
    name: 'Pearl Plus',
    description: 'Our most popular choice for standard homes up to 3,000 sq ft. Perfect for any water hardness level.',
    product: 'Pearl Plus',
    price: 495,
    benefits: ['Full home protection', 'Scale prevention', 'Extended appliance life']
  };
};

const getHardnessLevel = (hardness) => {
  if (hardness < 60) return { level: 'Soft', color: 'green', icon: ShieldCheck };
  if (hardness < 120) return { level: 'Moderate', color: 'amber', icon: Droplets };
  if (hardness < 180) return { level: 'Hard', color: 'orange', icon: AlertTriangle };
  return { level: 'Very Hard', color: 'red', icon: AlertTriangle };
};

export default function HardnessInfo({ location }) {
  if (!location) {
    return (
      <div className="bg-slate-50 rounded-2xl p-12 text-center">
        <Droplets className="w-16 h-16 text-slate-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-slate-600 mb-2">
          Search for Your Location
        </h3>
        <p className="text-slate-500 mb-4">
          Enter your city, state, or zip code to see water hardness data and product recommendations.
        </p>
        <p className="text-sm text-slate-400">
          Or browse our{' '}
          <Link to={createPageUrl('StateWaterHardness') + '?state=california'} className="text-cyan-600 hover:underline font-medium">
            state-by-state guides
          </Link>
        </p>
      </div>
    );
  }

  const hardnessInfo = getHardnessLevel(location.hardness);
  const recommendation = getRecommendedProduct(location.hardness);
  const HardnessIcon = hardnessInfo.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-6"
    >
      {/* Location Info */}
      <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {location.city}, {location.state}
            </h3>
            <p className="text-slate-600">ZIP: {location.zip}</p>
          </div>
          <Badge className={`bg-${hardnessInfo.color}-100 text-${hardnessInfo.color}-700 hover:bg-${hardnessInfo.color}-100 px-4 py-2 text-sm`}>
            {hardnessInfo.level} Water
          </Badge>
        </div>

        <div className="flex items-center gap-6 mt-6">
          <div className={`w-20 h-20 rounded-2xl bg-${hardnessInfo.color}-500/10 flex items-center justify-center`}>
            <HardnessIcon className={`w-10 h-10 text-${hardnessInfo.color}-600`} />
          </div>
          <div>
            <div className="text-4xl font-bold text-slate-900 mb-1">
              {location.hardness} <span className="text-xl font-normal text-slate-600">mg/L</span>
            </div>
            <p className="text-slate-600">Calcium Carbonate</p>
          </div>
        </div>
      </div>

      {/* Product Recommendation */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Recommended Product</h3>
        </div>

        <div className="mb-6">
          <h4 className="text-2xl font-bold text-cyan-600 mb-2">{recommendation.name}</h4>
          <p className="text-slate-600 mb-4">{recommendation.description}</p>
          
          <div className="space-y-2 mb-6">
            {recommendation.benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                {benefit}
              </div>
            ))}
          </div>

          <div className="flex items-end gap-2 mb-6">
            <span className="text-3xl font-bold text-slate-900">${recommendation.price}</span>
            <span className="text-slate-500 mb-1">one-time purchase</span>
          </div>
        </div>

        <Link to={createPageUrl('Products')}>
          <Button className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full py-6 font-semibold">
            View {recommendation.name}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </div>

      {/* What Does This Mean? */}
      <div className="bg-slate-50 rounded-2xl p-6">
        <h4 className="font-semibold text-slate-900 mb-3">What does this mean?</h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          Water hardness is measured by the concentration of calcium and magnesium minerals. 
          Hard water can cause scale buildup in pipes, appliances, and fixtures, leading to 
          reduced efficiency, higher energy costs, and shortened equipment life. HydroFLOW 
          technology prevents these issues without chemicals or salt.
        </p>
      </div>
    </motion.div>
  );
}