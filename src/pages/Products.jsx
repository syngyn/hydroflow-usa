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
    coverage: 'Up to 1,000 sq ft',
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
    id: 'hs40',
    name: <><i>hs</i>40</>,
    category: 'residential',
    tagline: 'For Pools & Light Commercial',
    coverage: 'Pools, Spas & Light Commercial',
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
    id: 'force-field-20',
    name: 'Force Field (20")',
    category: 'filtration',
    tagline: 'State of the Art Filtration',
    coverage: 'Whole Home Systems',
    price: 499.95,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/08/FF-20-inch.webp',
    features: [
      'Multi-stage advanced filtration',
      'Removes widest range of contaminants',
      'Premium quality construction',
      'Exceptional water clarity'
    ],
    description: 'Premium multi-stage filtration delivering the highest level of water purity.',
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
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Water Conditioners
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 px-4">
              <i>Hydro</i>FLOW Products
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto px-4">
              Find the perfect <i>Hydro</i>FLOW water conditioner for your home, business, or industrial facility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Selection Tool */}
      <section className="py-4 md:py-8 bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <Link to={createPageUrl('ProductQuiz')}>
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-6 py-3 font-semibold">
                <HelpCircle className="w-4 h-4 mr-2" />
                Find Your Perfect Product
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* HydroFLOW Water Conditioners */}
      <section className="py-8 md:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Electronic Water Conditioners
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              <i>Hydro</i>FLOW Units
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Chemical-free water conditioning technology for residential and commercial applications
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {products.filter(p => p.category === 'residential').map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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

                <div className="relative h-64 bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-8">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="h-full w-auto object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-4 sm:p-6 md:p-8">
                  {product.rating && (
                    <div className="flex items-center gap-2 mb-3">
                      <StarRating rating={product.rating} size="sm" />
                      <span className="text-xs sm:text-sm text-slate-500">({product.reviews} reviews)</span>
                    </div>
                  )}

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">{product.name}</h3>
                  <p className="text-cyan-600 font-medium text-xs sm:text-sm mb-2">{product.tagline}</p>
                  <p className="text-slate-500 text-xs sm:text-sm mb-4">{product.coverage}</p>

                  <div className="space-y-2 mb-4 md:mb-6">
                    {product.features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mb-4 md:mb-6">
                    {product.originalPrice && (
                      <span className="text-slate-400 line-through text-base sm:text-lg">${product.originalPrice}</span>
                    )}
                    <span className="text-2xl sm:text-3xl font-bold text-slate-900 ml-2">${product.price}</span>
                  </div>

                  <Link to={createPageUrl(
                    product.id === 'pearl-plus' ? 'ProductPearlPlus' :
                    product.id === 'pearl' ? 'ProductPearl' :
                    product.id === 'hs40' ? 'ProductHS40' : 'Products'
                  )}>
                    <Button className={`w-full rounded-full py-4 sm:py-6 text-sm sm:text-base font-semibold transition-all ${
                      product.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white' 
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}>
                      View Details
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                    </Button>
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
            <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Water Filtration
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Replacement Filter Cartridges
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              High-quality replacement filters for whole home and under-counter systems
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
            {products.filter(p => p.category === 'filtration' && !p.id.includes('housing')).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <Link to={createPageUrl(
                  product.id === 'activated-carbon-20' ? 'ProductActivatedCarbon20' : 'Products'
                )}>
                  <div className="relative h-48 bg-gradient-to-b from-white to-slate-50 flex items-center justify-center p-6">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="h-full w-auto object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{product.name}</h3>
                    <p className="text-cyan-600 font-medium text-xs mb-2">{product.tagline}</p>
                    
                    <div className="mb-4">
                      <span className="text-xl font-bold text-slate-900">${product.price}</span>
                    </div>
                  </div>
                </Link>

                <div className="px-4 pb-4">
                  <Button 
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-full py-3 text-sm font-semibold"
                  >
                    Add to Cart
                    <ShoppingCart className="w-3 h-3 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to={createPageUrl('FilterCartridges')}>
              <Button variant="outline" className="rounded-full px-8 py-4 border-2">
                View All Filter Cartridges
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
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
            <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Premium Quality
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
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
                    <span className="text-2xl font-bold text-slate-900">${product.price}</span>
                  </div>

                  <Button 
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full py-4 text-base font-semibold"
                  >
                    Add to Cart
                    <ShoppingCart className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to={createPageUrl('FilterHousings')}>
              <Button variant="outline" className="rounded-full px-8 py-4 border-2">
                View All Filter Housings
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
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
              <Link to={createPageUrl('ProductQuiz')}>
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