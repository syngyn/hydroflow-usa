import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Check, Filter, Home, Building2, Waves, HelpCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const products = [
  {
    id: 'pearl',
    name: 'Pearl',
    category: 'residential',
    tagline: 'Perfect for Apartments & Condos',
    coverage: 'Up to 1,000 sq ft',
    originalPrice: 425,
    price: 295,
    rating: 4.38,
    reviews: 56,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2024/08/pearl-grey-background-800x800.jpg',
    features: [
      'Apartments and townhomes',
      'Condos up to 1,000 sq ft',
      'Small single-family homes',
      'Easy DIY installation'
    ],
    description: 'The perfect entry-level solution for apartments, townhomes, and condos.'
  },
  {
    id: 'pearl-plus',
    name: 'Pearl Plus',
    category: 'residential',
    tagline: 'Most Popular Choice',
    coverage: 'Up to 3,000 sq ft',
    originalPrice: 695,
    price: 495,
    rating: 4.46,
    reviews: 72,
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/971b89f11_PearlPlus.png',
    features: [
      'Standard sized homes',
      'Homes up to 3,000 sq ft',
      'Multi-story properties',
      'Complex plumbing systems'
    ],
    popular: true,
    description: 'Our most popular residential unit, perfect for standard-sized homes.'
  },
  {
    id: 'hs40-residential',
    name: 'hs40',
    category: 'residential',
    tagline: 'For Pools & Spas',
    coverage: 'Residential Pools & Hot Tubs',
    originalPrice: 2150,
    price: 1990,
    rating: 4.79,
    reviews: 43,
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/5caaa96fa_productrange201629.png',
    features: [
      'Swimming pools',
      'Hot tubs and spas',
      'Large residential properties',
      'Commercial grade power'
    ],
    description: 'Industrial-strength protection for residential pools and spas.'
  },
  {
    id: 'hs40',
    name: 'hs40',
    category: 'commercial',
    tagline: 'Commercial Grade Power',
    coverage: 'Pools, Spas & Light Commercial',
    originalPrice: 2150,
    price: 1990,
    rating: 4.79,
    reviews: 43,
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/5caaa96fa_productrange201629.png',
    features: [
      'Swimming pools',
      'Hot tubs and spas',
      'Light commercial applications',
      'Large residential properties'
    ],
    description: 'Industrial-strength protection for pools, spas, and light commercial use.'
  },
  {
    id: 'i-range',
    name: 'IRange',
    category: 'industrial',
    tagline: 'Heavy-Duty Solutions',
    coverage: 'Industrial & Large Commercial',
    price: null,
    priceText: 'Contact for Quote',
    rating: 4.9,
    reviews: 28,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2025/10/irange1.png',
    features: [
      'Manufacturing facilities',
      'Large commercial buildings',
      'Cooling towers',
      'Custom pipe sizes'
    ],
    description: 'Custom solutions for industrial and large commercial applications.'
  },
  {
    id: 'hm-range',
    name: 'hmRange',
    category: 'industrial',
    tagline: 'Marine Solutions',
    coverage: 'Marine Vessels',
    price: null,
    priceText: 'Contact for Quote',
    rating: 4.85,
    reviews: 15,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2025/10/hm-Range1-1400x788.png',
    features: [
      'Fresh water generators',
      'Marine cooling systems',
      'UV sterilizers',
      'IP68 waterproof'
    ],
    description: 'Marine-grade water treatment for vessels and maritime applications.'
  }
];

const categories = [
  { id: 'all', name: 'All Products', icon: Filter },
  { id: 'residential', name: 'Residential', icon: Home },
  { id: 'commercial', name: 'Commercial', icon: Building2 },
  { id: 'industrial', name: 'Industrial', icon: Waves }
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
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
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Water Conditioners
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <i>Hydro</i>FLOW Products
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Find the perfect <i>Hydro</i>FLOW water conditioner for your home, business, or industrial facility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="inline-flex bg-slate-100 rounded-full p-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-white text-cyan-600 shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${
                  product.popular ? 'ring-2 ring-cyan-500' : ''
                }`}
              >
                {product.popular && (
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-cyan-500 text-white hover:bg-cyan-500 px-4 py-1 font-semibold">
                      MOST POPULAR
                    </Badge>
                  </div>
                )}

                {/* Product Image */}
                <div className="relative h-64 bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-8">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="h-full w-auto object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Product Info */}
                <div className="p-8">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-slate-500">({product.reviews} reviews)</span>
                  </div>

                  {/* Name & Tagline */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{product.name}</h3>
                  <p className="text-cyan-600 font-medium text-sm mb-2">{product.tagline}</p>
                  <p className="text-slate-500 text-sm mb-4">{product.coverage}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    {product.price ? (
                      <div>
                        {product.originalPrice && (
                          <span className="text-slate-400 line-through text-lg">${product.originalPrice}</span>
                        )}
                        <span className="text-3xl font-bold text-slate-900 ml-2">${product.price}</span>
                      </div>
                    ) : (
                      <span className="text-xl font-semibold text-slate-700">{product.priceText}</span>
                    )}
                  </div>

                  {/* CTA */}
                  <Link to={createPageUrl(`Product${product.name.replace(' ', '')}`)}>
                    <Button className={`w-full rounded-full py-6 font-semibold transition-all ${
                      product.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white' 
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}>
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-3xl p-8 md:p-12 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Not sure which product is right for you?
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Our water treatment experts are here to help you find the perfect solution 
              for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Contact')}>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8 py-6">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:1-888-559-4340">
                <Button variant="outline" className="rounded-full px-8 py-6 border-2">
                  Call 1-888-559-4340
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}