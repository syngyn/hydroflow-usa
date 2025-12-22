import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Check, Droplets, Home as HomeIcon, Package } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const filtrationProducts = [
  {
    id: 'single-sediment',
    name: 'Single Filter - Sediment',
    type: 'whole-home',
    tagline: 'Basic Filtration Requirements',
    coverage: 'Whole Home',
    price: 479.95,
    rating: 4.33,
    reviews: 6,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2024/10/single_sediment-1-800x800.webp',
    features: [
      'Sediment removal',
      'Basic protection',
      'Whole home coverage',
      'Easy installation'
    ],
    description: 'Sediment filter for basic filtration requirements.'
  },
  {
    id: 'single-acb',
    name: 'Single Filter - ACB',
    type: 'whole-home',
    tagline: 'Activated Carbon Block',
    coverage: 'Whole Home',
    price: 499.95,
    rating: 4.56,
    reviews: 16,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2024/10/single_acb-1-800x800.webp',
    features: [
      'Activated carbon block',
      'Complex filtration',
      'Chlorine removal',
      'Enhanced protection'
    ],
    description: 'For more complex filtration scenarios with activated carbon block technology.'
  },
  {
    id: 'single-forcefield',
    name: 'Single Filter - Force Field',
    type: 'whole-home',
    tagline: 'State-of-the-Art Filter',
    coverage: 'Whole Home',
    price: 889.95,
    rating: 4.42,
    reviews: 12,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2024/10/single_ff-1-800x800.webp',
    features: [
      'Force field technology',
      'Pristine water quality',
      'Supreme protection',
      'Advanced filtration'
    ],
    description: 'State-of-the-art Force Field filter for pristine water quality.'
  },
  {
    id: 'double-standard',
    name: 'Double Filter - Standard',
    type: 'whole-home',
    tagline: 'Basic Filtration Requirements',
    coverage: 'Whole Home',
    price: 865.95,
    rating: 4.2,
    reviews: 5,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2024/10/double-standard-1-800x800.webp',
    features: [
      'Two-stage filtration',
      'Basic whole home protection',
      'Standard configuration',
      'Easy maintenance'
    ],
    description: 'For basic filtration requirements with two-stage protection.'
  },
  {
    id: 'double-elite',
    name: 'Double Filter - Elite',
    type: 'whole-home',
    tagline: 'Complex Filtration Scenarios',
    coverage: 'Whole Home',
    price: 1225.95,
    rating: 4.53,
    reviews: 17,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2024/10/double-elite-1-800x800.webp',
    features: [
      'Advanced two-stage system',
      'Complex water issues',
      'Enhanced filtration',
      'Superior protection'
    ],
    popular: true,
    description: 'For more complex filtration scenarios requiring advanced protection.'
  },
  {
    id: 'double-ultimate',
    name: 'Double Filter - Ultimate',
    type: 'whole-home',
    tagline: 'State-of-the-Art Filter',
    coverage: 'Whole Home',
    price: 1295.95,
    rating: 4.42,
    reviews: 12,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2024/10/double-ultimate-1-800x800.webp',
    features: [
      'State-of-the-art filtration',
      'Pristine water quality',
      'Maximum protection',
      'Premium performance'
    ],
    description: 'State-of-the-art filter for pristine water quality and maximum protection.'
  },
  {
    id: 'under-counter',
    name: 'Under Counter Filter',
    type: 'point-of-use',
    tagline: 'Point-of-Use Filtration',
    coverage: 'Single Tap',
    price: 199.95,
    rating: 4.6,
    reviews: 28,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2025/04/under_counter_grey.webp',
    features: [
      'Under sink installation',
      'ACB or Force Field options',
      'Improved water quality',
      'Compact design'
    ],
    description: 'Compact filtration system for improved water quality at a single point-of-use.'
  },
  {
    id: 'vitality-filter',
    name: 'Vitality Filter',
    type: 'portable',
    tagline: 'On-the-Go Hydration',
    coverage: 'Portable',
    price: 39.95,
    rating: 4.8,
    reviews: 156,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2024/09/vitality-filter.jpg',
    features: [
      'Portable water bottle',
      'Built-in filtration',
      'Perfect for travel',
      'Removes contaminants'
    ],
    description: 'Portable filtration bottle for clean, safe water anywhere you go.'
  }
];

const filterTypes = [
  { id: 'all', name: 'All Filters', icon: Droplets },
  { id: 'whole-home', name: 'Whole Home', icon: HomeIcon },
  { id: 'point-of-use', name: 'Point-of-Use', icon: Package },
  { id: 'portable', name: 'Portable', icon: Droplets }
];

export default function Filtration() {
  const [activeType, setActiveType] = useState('all');

  const filteredProducts = activeType === 'all' 
    ? filtrationProducts 
    : filtrationProducts.filter(p => p.type === activeType);

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
              Water Filtration
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Home Filtration Systems
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive water filtration solutions for your entire home or individual points of use.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Type Filter */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="inline-flex bg-slate-100 rounded-full p-1 flex-wrap">
              {filterTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveType(type.id)}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeType === type.id
                      ? 'bg-white text-cyan-600 shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <type.icon className="w-4 h-4" />
                  {type.name}
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
                <div className="p-6">
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
                    <span className="text-sm text-slate-500">({product.reviews})</span>
                  </div>

                  {/* Name & Tagline */}
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{product.name}</h3>
                  <p className="text-cyan-600 font-medium text-sm mb-2">{product.tagline}</p>
                  <p className="text-slate-500 text-xs mb-4">{product.coverage}</p>

                  {/* Features */}
                  <div className="space-y-1.5 mb-6">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3 h-3 text-cyan-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-slate-900">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>

                  {/* CTA */}
                  <Button className={`w-full rounded-full py-5 font-semibold transition-all ${
                    product.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white' 
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}>
                    Add to Cart
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-3xl p-8 md:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Bundle & Save
                </h2>
                <h3 className="text-xl font-semibold text-cyan-600 mb-4">
                  Even Better Together
                </h3>
                <p className="text-slate-700 mb-6">
                  Home filtration takes care of the water quality, <i>Hydro</i>FLOW ensures that your 
                  pipes and appliances stay clear of scale and other issues. Together, they protect 
                  your entire home water network.
                </p>
                <p className="text-slate-700 mb-8">
                  We offer special deals on selected combinations of <i>Hydro</i>FLOW Pearl devices 
                  and home filtration systems.
                </p>
                <Link to={createPageUrl('Contact')}>
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8 py-6">
                    View Bundle Deals
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="flex justify-center">
                <img 
                  src="https://hydroflow-usa.com/wp-content/uploads/2024/08/pearl-grey-background-800x800.jpg"
                  alt="HydroFLOW Pearl"
                  className="w-64 h-64 object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Water Test CTA */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Have you tested your water recently?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Get a FREE water test kit to determine which contaminants are in your water
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full px-8 py-6 text-lg font-semibold">
                Request Free Test Kit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}