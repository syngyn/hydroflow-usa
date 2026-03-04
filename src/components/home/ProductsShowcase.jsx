import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "@/components/ui/star-rating";

const products = [
  {
    name: 'Pearl',
    tagline: 'Perfect for Apartments & Condos',
    coverage: 'Up to 1,000 sq ft',
    originalPrice: 425,
    price: 295,
    rating: 4.38,
    reviews: 56,
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/f46d7be5f_Pearlsidefronttransparent.png',
    features: ['Apartments', 'Townhomes', 'Condos', 'Small homes'],
    page: 'ProductPearl'
  },
  {
    name: 'Pearl Plus',
    tagline: 'Most Popular Choice',
    coverage: 'Up to 3,000 sq ft',
    originalPrice: 695,
    price: 495,
    rating: 4.46,
    reviews: 72,
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/00e27e7ff_pearl-plus-on-pipe.png',
    features: ['Standard homes', 'Large homes', 'Multi-story', 'Complex plumbing'],
    popular: true,
    page: 'ProductPearlPlus'
  },
  {
    name: <><i>hs</i>40</>,
    tagline: 'Commercial Grade Power',
    coverage: 'Pools, Spas & Light Commercial',
    originalPrice: 2150,
    price: 1990,
    rating: 4.79,
    reviews: 43,
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/0e2222ce9_hs40.png',
    features: ['Swimming pools', 'Hot tubs & spas', 'Light commercial', 'Large properties'],
    page: 'ProductHS40'
  }
];

export default function ProductsShowcase() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4">
            The <i>Hydro</i>FLOW Pearl Series
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Your Whole Home Water
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-600"> Protection Solution</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the perfect <i>Hydro</i>FLOW unit for your home size and needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link key={product.page} to={createPageUrl(product.page)} className="block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative group rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl cursor-pointer ${
                  product.popular 
                    ? 'bg-gradient-to-b from-cyan-500 to-cyan-600 p-[2px]' 
                    : 'border border-slate-200'
                }`}
              >
              {product.popular && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-white text-cyan-600 hover:bg-white px-4 py-1 font-semibold">
                    MOST POPULAR
                  </Badge>
                </div>
              )}
              
              <div className={`h-full bg-white rounded-3xl p-8 ${product.popular ? '' : ''}`}>
                {/* Product Image */}
                <div className="relative h-48 flex items-center justify-center mb-6 mt-4">
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-transparent rounded-2xl" />
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="relative h-full w-auto object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <StarRating rating={product.rating} />
                  <span className="text-sm text-slate-600">({product.reviews} reviews)</span>
                </div>

                {/* Product Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{product.name}</h3>
                  <p className="text-cyan-600 font-medium text-sm mb-2">{product.tagline}</p>
                  <p className="text-slate-500 text-sm">{product.coverage}</p>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-cyan-500" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <span className="text-slate-400 line-through text-lg">${product.originalPrice}</span>
                  <span className="text-3xl font-bold text-slate-900 ml-3">${product.price}</span>
                </div>

                {/* CTA */}
                <Button asChild className={`w-full rounded-full py-6 font-semibold transition-all ${
                  product.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white shadow-lg shadow-cyan-500/25' 
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}>
                  <span>
                    Select {product.name}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </Button>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>

        {/* View All Products Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to={createPageUrl('Products')}>
            <Button variant="outline" className="rounded-full px-8 py-6 border-2 group">
              View All Products
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}