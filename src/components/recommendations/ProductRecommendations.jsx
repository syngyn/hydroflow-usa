import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp } from 'lucide-react';
import { useRecommendations } from './RecommendationContext';

export default function ProductRecommendations({ currentProductId, limit = 3 }) {
  const { getRecommendations } = useRecommendations();
  const recommendations = getRecommendations(currentProductId, limit);

  if (recommendations.length === 0) return null;

  const getPageName = (productId) => {
    const pageMap = {
      'pearl': 'ProductPearl',
      'pearl-plus': 'ProductPearlPlus',
      'hs40': 'ProductHS40',
      'i-range': 'ProductIRange',
      'hm-range': 'ProductHMRange'
    };
    return pageMap[productId] || 'Products';
  };

  return (
    <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Recommended For You</h2>
            <p className="text-slate-600 text-sm">Based on your browsing activity</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recommendations.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={createPageUrl(getPageName(product.id))}>
                <div className="group bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-cyan-500 relative overflow-hidden">
                  {product.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        POPULAR
                      </div>
                    </div>
                  )}
                  
                  <div className="relative h-48 mb-4 flex items-center justify-center bg-gradient-to-b from-slate-50 to-white rounded-xl">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  
                  <h3 className="font-bold text-xl mb-2 text-slate-900 group-hover:text-cyan-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-slate-600 text-sm mb-4 capitalize">
                    {product.category} • {product.size}
                  </p>
                  
                  {product.price ? (
                    <p className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                      ${product.price}
                    </p>
                  ) : (
                    <p className="text-lg font-semibold text-slate-700">Contact for Quote</p>
                  )}

                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <span className="text-cyan-600 text-sm font-medium group-hover:underline">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}