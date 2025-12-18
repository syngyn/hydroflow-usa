import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    name: 'Pearl',
    tagline: 'Perfect for Apartments & Condos',
    coverage: 'Up to 1,000 sq ft',
    originalPrice: 425,
    price: 295,
    rating: 4.38,
    reviews: 56,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2024/08/pearl-grey-background-800x800.jpg',
    features: ['Apartments', 'Townhomes', 'Condos', 'Small homes']
  },
  {
    name: 'Pearl Plus',
    tagline: 'Most Popular Choice',
    coverage: 'Up to 3,000 sq ft',
    originalPrice: 695,
    price: 495,
    rating: 4.46,
    reviews: 72,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2024/10/pearl-plus-grey-background-799x800.webp',
    features: ['Standard homes', 'Large homes', 'Multi-story', 'Complex plumbing'],
    popular: true
  },
  {
    name: 'HS40',
    tagline: 'Commercial Grade Power',
    coverage: 'Pools, Spas & Light Commercial',
    originalPrice: 2150,
    price: 1990,
    rating: 4.79,
    reviews: 43,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2024/10/hs40-grey-background-800x800.webp',
    features: ['Swimming pools', 'Hot tubs & spas', 'Light commercial', 'Large properties']
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
            The HydroFLOW Pearl Series
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Your Whole Home Water
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-600"> Protection Solution</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the perfect HydroFLOW unit for your home size and needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group rounded-3xl overflow-hidden transition-all duration-500 ${
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
              
              <div className={`h-full rounded-3xl p-8 ${product.popular ? 'bg-gradient-to-b from-cyan-500 to-cyan-600' : 'bg-white'}`}>
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
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-slate-600">({product.reviews} reviews)</span>
                </div>

                {/* Product Info */}
                <div className="text-center mb-6">
                 <h3 className={`text-2xl font-bold mb-1 ${product.popular ? 'text-white' : 'text-slate-900'}`}>{product.name}</h3>
                 <p className={`font-medium text-sm mb-2 ${product.popular ? 'text-cyan-100' : 'text-cyan-600'}`}>{product.tagline}</p>
                 <p className={`text-sm ${product.popular ? 'text-white/80' : 'text-slate-500'}`}>{product.coverage}</p>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <div key={feature} className={`flex items-center gap-2 text-sm ${product.popular ? 'text-white' : 'text-slate-600'}`}>
                      <Check className={`w-4 h-4 ${product.popular ? 'text-white' : 'text-cyan-500'}`} />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <span className={`line-through text-lg ${product.popular ? 'text-white/60' : 'text-slate-400'}`}>${product.originalPrice}</span>
                  <span className={`text-3xl font-bold ml-3 ${product.popular ? 'text-white' : 'text-slate-900'}`}>${product.price}</span>
                </div>

                {/* CTA */}
                <Link to={createPageUrl('Products')}>
                  <Button className={`w-full rounded-full py-6 font-semibold transition-all ${
                    product.popular 
                      ? 'bg-white hover:bg-white/90 text-cyan-600 shadow-lg' 
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}>
                    Select {product.name}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
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