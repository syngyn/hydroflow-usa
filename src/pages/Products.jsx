import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Filter, Home, Building2, Waves, HelpCircle, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StarRating } from "@/components/ui/star-rating";
import { useRecommendations } from '@/components/recommendations/RecommendationContext';
import ProductRecommendations from '@/components/recommendations/ProductRecommendations';
import { useCart } from '@/components/cart/CartContext';
import { toast } from 'sonner';

const products = [
  {
    id: 'pearl',
    name: 'Pearl',
    category: 'residential',
    tagline: 'Perfect for Apartments & Condos',
    coverage: 'For apartments, townhomes, and condos up to 1,000 sq ft',
    originalPrice: 425,
    price: 295,
    rating: 4.38,
    reviews: 56,
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/a9d24ed5d_Untitled.png',
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
    coverage: 'For standard sized homes up to 3,000 sq ft',
    originalPrice: 695,
    price: 495,
    rating: 4.46,
    reviews: 72,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/08/pearl-plus-transparent.webp',
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
    id: 'hs40',
    name: <><i>hs</i>40</>,
    category: 'residential',
    tagline: 'For Pools & Light Commercial',
    coverage: 'For pools, spas and light commercial use',
    originalPrice: 2150,
    price: 1990,
    rating: 4.79,
    reviews: 43,
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/0e2222ce9_hs40.png',
    features: [
      'Swimming pools',
      'Hot tubs and spas',
      'Light commercial applications',
      'Large residential properties'
    ],
    description: 'Industrial-strength protection for pools, spas, and light commercial use.'
  },
  {
    id: 'sediment-20',
    name: 'Sediment Filter (20")',
    category: 'filtration',
    tagline: 'Basic Filtration',
    coverage: 'Whole Home Systems',
    price: 29.95,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/08/SED20-inch-cartridge.png',
    features: [
      'Removes sediment and particulates',
      '20-inch length',
      'Cost-effective basic filtration',
      'Easy to replace'
    ],
    description: 'Basic single-stage sediment filtration for whole home water systems.',
    isCartridge: true
  },
  {
    id: 'activated-carbon-20',
    name: 'Activated Carbon (20")',
    category: 'filtration',
    tagline: 'More Complex Filtration',
    coverage: 'Whole Home Systems',
    price: 35.95,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2024/05/acb-10-inch-filter-scaled.webp',
    features: [
      'Removes chlorine, taste, and odor',
      'Advanced carbon block technology',
      'Reduces organic contaminants',
      'Compatible with whole home housings'
    ],
    description: 'Advanced activated carbon filtration for improved taste and odor removal.',
    isCartridge: true
  },

  {
    id: 'activated-carbon-10',
    name: 'Activated Carbon (10")',
    category: 'filtration',
    tagline: 'Under-Counter Filtration',
    coverage: 'Point-of-Use Systems',
    price: 19.95,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2024/05/acb-10-inch-filter-scaled.webp',
    features: [
      'Fits standard 10" housings',
      'Removes chlorine and odors',
      'Compact design',
      'Activated carbon technology'
    ],
    description: 'Compact activated carbon filtration for under-the-counter systems.',
    isCartridge: true
  },
  {
    id: 'force-field-10',
    name: 'Force Field (10")',
    category: 'filtration',
    tagline: 'Premium Under-Counter Filtration',
    coverage: 'Point-of-Use Systems',
    price: 149.95,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/08/FF-20-inch.webp',
    features: [
      'Absolute filtration performance',
      'Multi-layer protection',
      'Compact 10" design',
      'Premium water quality'
    ],
    description: 'Absolute filtration power in a compact 10-inch format.',
    isCartridge: true
  },
  {
    id: 'filter-housing-10',
    name: '10" Stainless Steel Filter Housing',
    category: 'filtration',
    tagline: 'Premium Quality Housing',
    coverage: 'Residential & Light Commercial',
    price: 249.95,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2025/04/10_inch_housing_grey-1-600x800.webp',
    features: [
      'Premium stainless steel construction',
      'Corrosion resistant',
      'Easy cartridge replacement',
      'Durable and long-lasting'
    ],
    description: 'High-quality 10-inch stainless steel filter housing designed for residential and light commercial applications.',
    isCartridge: true
  },
  {
    id: 'filter-housing-20',
    name: '20" Stainless Steel Filter Housing',
    category: 'filtration',
    tagline: 'Heavy-Duty Housing',
    coverage: 'Residential & Commercial',
    price: 379.95,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2025/04/20_inch_housing_grey-600x800.webp',
    features: [
      'Premium stainless steel construction',
      'Corrosion resistant',
      'Easy cartridge replacement',
      'Durable and long-lasting'
    ],
    description: 'Heavy-duty 20-inch stainless steel filter housing for demanding residential and commercial water filtration needs.',
    isCartridge: true
  }
];

export default function Products() {
  const { trackFilterUse } = useRecommendations();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
    toast.success(`${product.name} added to cart`);
  };

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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 px-4">
              <i>Hydro</i>FLOW Products
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto px-4">
              Find the ideal <i>Hydro</i>FLOW water conditioner for your home or business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Selection Tool */}
      <section className="py-4 md:py-8 bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-start">
            <Link to={createPageUrl('ProductSelectionTool')}>
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8 py-4 font-semibold">
                Product Selection Tool
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to={createPageUrl('PerformanceWithTime')}>
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8 py-4 font-semibold">
                Performance with Time
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to={createPageUrl('Expectations')}>
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8 py-4 font-semibold">
                What to Expect
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* HydroFLOW Water Conditioners */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-cyan-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cyan-600 font-bold text-xl uppercase tracking-widest mb-6 px-4 py-2 bg-cyan-50 rounded-full">
              The <i>Hydro</i>FLOW Pearl Series
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
              Your Whole Home Water<br />Protection Solution
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.filter(p => p.category === 'residential').map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative group rounded-3xl overflow-hidden transition-all duration-300 ${
                  product.popular 
                    ? 'bg-gradient-to-br from-cyan-400 to-cyan-500 shadow-xl' 
                    : 'bg-white shadow-lg hover:shadow-2xl'
                }`}
              >
                {product.popular && (
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="absolute -top-2 left-1/2 -translate-x-1/2 z-10"
                  >
                    <Badge className="bg-white text-cyan-600 hover:bg-white font-black px-6 py-2.5 text-xs uppercase tracking-wider shadow-lg">
                      Most Popular
                    </Badge>
                  </motion.div>
                )}

                <div className={`relative h-72 flex items-center justify-center p-8 ${
                  product.popular 
                    ? 'bg-cyan-500/20' 
                    : 'bg-gradient-to-br from-slate-50 to-slate-100'
                }`}>
                  <motion.img 
                    src={product.image}
                    alt={product.name}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    className={`h-full w-auto object-contain filter drop-shadow-lg ${product.id === 'pearl-plus' ? 'scale-125' : ''}`}
                  />
                </div>

                <div className={`p-8 ${product.popular ? 'text-white' : ''}`}>
                  {product.rating && (
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <StarRating rating={product.rating} size="sm" />
                      <span className={`text-sm font-medium ${product.popular ? 'text-cyan-50' : 'text-slate-500'}`}>
                        ({product.reviews} reviews)
                      </span>
                    </div>
                  )}

                  <h3 className={`text-3xl font-black mb-3 text-center ${product.popular ? 'text-white' : 'text-slate-900'}`}>
                    {product.name}
                  </h3>
                  <p className={`text-base mb-8 text-center font-medium ${product.popular ? 'text-cyan-50' : 'text-slate-600'}`}>
                    {product.coverage}
                  </p>

                  <div className="mb-8 text-center">
                    {product.originalPrice && (
                      <span className={`line-through text-lg font-semibold ${product.popular ? 'text-cyan-100' : 'text-slate-400'}`}>
                        ${typeof product.originalPrice === 'number' ? product.originalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : product.originalPrice}
                      </span>
                    )}
                    <p className={`text-4xl font-black mt-2 ${product.popular ? 'text-white' : 'text-slate-900'}`}>
                      ${typeof product.price === 'number' ? product.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : product.price}
                    </p>
                  </div>

                  <Link to={createPageUrl(
                    product.id === 'pearl-plus' ? 'ProductPearlPlus' :
                    product.id === 'pearl' ? 'ProductPearl' :
                    product.id === 'hs40' ? 'ProductHS40' : 'Products'
                  )}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className={`w-full rounded-xl py-4 text-base font-black uppercase tracking-wider transition-all ${
                        product.popular
                          ? 'bg-white text-cyan-600 hover:bg-slate-100 shadow-lg'
                          : 'bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white'
                      }`}>
                        Select
                      </Button>
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Cartridges */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-cyan-600 font-bold text-xl uppercase tracking-widest mb-6 px-4 py-2 bg-cyan-50 rounded-full">
              Water Filtration
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
              Replacement Filter Cartridges
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              High-quality replacement filters for whole home and under-counter systems
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {products.filter(p => p.category === 'filtration' && !p.id.includes('housing')).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                >
                <Link to={createPageUrl(
                  product.id === 'activated-carbon-20' ? 'ProductActivatedCarbon20' :
                  product.id === 'sediment-20' ? 'ProductSediment20' :
                  product.id === 'activated-carbon-10' ? 'ProductActivatedCarbon10' :
                  product.id === 'force-field-10' ? 'ProductForceField10' : 'Products'
                )} className="flex flex-col h-full">
                  <div className="relative h-48 bg-gradient-to-b from-white to-slate-50 flex items-center justify-center p-6">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className={`h-full w-auto object-contain transform group-hover:scale-110 transition-transform duration-500 ${product.id === 'sediment-20' ? 'scale-140' : ''}`}
                      style={product.id === 'sediment-20' ? { transform: 'scale(1.4)' } : {}}
                    />
                  </div>

                  <div className="p-4 flex-grow">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{product.name}</h3>
                    <p className="text-cyan-600 font-medium text-xs mb-2">{product.tagline}</p>

                    <div className="mb-4">
                      <span className="text-xl font-bold text-slate-900">${typeof product.price === 'number' ? product.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : product.price}</span>
                    </div>
                  </div>
                  <div className="px-4 pb-4 mt-auto">
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full py-3 text-sm font-semibold">
                    View Details
                    <ArrowRight className="w-3 h-3 ml-2" />
                  </Button>
                </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Housings */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-cyan-600 font-bold text-xl uppercase tracking-widest mb-6 px-4 py-2 bg-cyan-50 rounded-full">
              Premium Quality
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
              Stainless Steel Filter Housings
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Durable stainless steel housings for long-lasting filtration performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.filter(p => p.id.includes('housing')).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-80 bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-8">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="h-full w-auto object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{product.name}</h3>
                  <p className="text-cyan-600 font-medium text-sm mb-2">{product.tagline}</p>
                  <p className="text-slate-500 text-sm mb-4">{product.coverage}</p>

                  <div className="space-y-2 mb-4">
                    {product.features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mb-4">
                    <span className="text-2xl font-bold text-slate-900">${typeof product.price === 'number' ? product.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : product.price}</span>
                  </div>

                  <Link to={createPageUrl(
                    product.id === 'filter-housing-10' ? 'ProductFilterHousing10' :
                    product.id === 'filter-housing-20' ? 'ProductFilterHousing20' :
                    'FilterHousings'
                  )}>
                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full py-4 text-base font-semibold">
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

      {/* AI Recommendations */}
      <ProductRecommendations limit={3} />

      {/* ROI Calculator CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 md:p-12 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Calculate Your Potential Savings
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Use our interactive ROI calculator to see how much you can save on chemicals, 
              maintenance, and energy costs with HydroFLOW.
            </p>
            <Link to={createPageUrl('Savings')}>
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6">
                Calculate ROI
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
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
              <Link to={createPageUrl('ProductSelectionTool')}>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8 py-6">
                  Take Product Selection Tool
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