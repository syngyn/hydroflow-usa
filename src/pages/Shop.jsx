import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Check, HelpCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "@/components/ui/star-rating";
import { useCart } from '@/components/cart/CartContext';
import { toast } from 'sonner';

const hydroflowProducts = [
  {
    id: 'pearl',
    name: 'Pearl',
    category: 'conditioner',
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
    detailPage: 'ProductPearl'
  },
  {
    id: 'pearl-plus',
    name: 'Pearl Plus',
    category: 'conditioner',
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
    detailPage: 'ProductPearlPlus'
  },
  {
    id: 'hs40',
    name: <><i>hs</i>40</>,
    category: 'conditioner',
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
    detailPage: 'ProductHS40'
  }
];

const filterHousings = [
  {
    id: 'filter-housing-10',
    name: '10" Stainless Steel Filter Housing',
    category: 'housing',
    size: '10"',
    price: 249.95,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2025/04/10_inch_housing_grey-1-600x800.webp',
    features: [
      'Premium stainless steel construction',
      'Corrosion resistant',
      'Easy cartridge replacement',
      'Durable and long-lasting'
    ]
  },
  {
    id: 'filter-housing-20',
    name: '20" Stainless Steel Filter Housing',
    category: 'housing',
    size: '20"',
    price: 379.95,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2025/04/20_inch_housing_grey-600x800.webp',
    features: [
      'Premium stainless steel construction',
      'Corrosion resistant',
      'Easy cartridge replacement',
      'Durable and long-lasting',
      'Higher capacity filtration'
    ]
  }
];

const wholeHomeCartridges = [
  {
    id: 'sediment-20',
    name: 'Sediment Filter (20")',
    category: 'cartridge',
    size: '20" x 4.5"',
    price: 29.95,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/08/SED20-inch-cartridge.png',
    tagline: 'Basic filtration',
    features: [
      'Removes sediment and particulates',
      '20-inch length for whole home systems',
      'Cost-effective basic filtration',
      'Easy to replace'
    ]
  },
  {
    id: 'activated-carbon-20',
    name: 'Activated Carbon Block (20")',
    category: 'cartridge',
    size: '20" x 4.5"',
    price: 35.95,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2024/05/acb-10-inch-filter-scaled.webp',
    tagline: 'More complex filtration',
    features: [
      'Removes chlorine, taste, and odor',
      'Reduces organic contaminants',
      'Advanced carbon block technology',
      'Compatible with whole home housings'
    ],
    popular: true
  },
  {
    id: 'force-field-20',
    name: 'Force Field (20")',
    category: 'cartridge',
    size: '20" x 4.5"',
    price: 499.95,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/08/FF-20-inch.webp',
    tagline: 'State of the art for pristine water quality',
    features: [
      'Multi-stage advanced filtration',
      'Removes widest range of contaminants',
      'Premium quality construction',
      'Exceptional water clarity and taste'
    ]
  }
];

const underCounterCartridges = [
  {
    id: 'activated-carbon-10',
    name: 'Activated Carbon Block (10")',
    category: 'cartridge',
    size: '10" x 2.5"',
    price: 19.95,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2024/05/acb-10-inch-filter-scaled.webp',
    tagline: 'Basic filtration',
    features: [
      'Fits standard 10" housings',
      'Activated carbon technology',
      'Removes chlorine and odors',
      'Compact design for tight spaces'
    ]
  },
  {
    id: 'force-field-10',
    name: 'Force Field (10")',
    category: 'cartridge',
    size: '10" x 2.5"',
    price: 149.95,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/08/FF-20-inch.webp',
    tagline: 'State of the art for pristine water quality',
    features: [
      'Absolute filtration performance',
      'Multi-layer protection',
      'Compact 10" design',
      'Premium water quality'
    ]
  }
];

export default function Shop() {
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
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Residential Water Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Complete Water Treatment
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                For Your Home
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Electronic water conditioners, filter housings, and replacement cartridges for comprehensive home water treatment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Selection Tool */}
      <section className="py-8 bg-white border-b">
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

      {/* HydroFLOW Electronic Conditioners */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Electronic Conditioners
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              <i>Hydro</i>FLOW Water Conditioners
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Chemical-free electronic water conditioning for residential and light commercial applications
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {hydroflowProducts.map((product, index) => (
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

                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <StarRating rating={product.rating} size="sm" />
                    <span className="text-sm text-slate-500">({product.reviews} reviews)</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{product.name}</h3>
                  <p className="text-cyan-600 font-medium text-sm mb-2">{product.tagline}</p>
                  <p className="text-slate-500 text-sm mb-4">{product.coverage}</p>

                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    {product.originalPrice && (
                      <span className="text-slate-400 line-through text-lg">${product.originalPrice}</span>
                    )}
                    <span className="text-3xl font-bold text-slate-900 ml-2">${product.price}</span>
                  </div>

                  <Link to={createPageUrl(product.detailPage)}>
                    <Button className={`w-full rounded-full py-6 text-base font-semibold transition-all ${
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

      {/* Filter Housings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Filter Housings
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Stainless Steel Filter Housings
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Premium quality stainless steel housings for long-lasting filtration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filterHousings.map((housing, index) => (
              <motion.div
                key={housing.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200"
              >
                <div className="relative h-96 bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-8">
                  <img 
                    src={housing.image}
                    alt={housing.name}
                    className="h-full w-auto object-contain"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-cyan-500 text-white text-lg px-4 py-2">
                      {housing.size}
                    </Badge>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{housing.name}</h3>

                  <div className="space-y-2 mb-6">
                    {housing.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <span className="text-3xl font-bold text-slate-900">${housing.price}</span>
                  </div>

                  <Button 
                    onClick={() => handleAddToCart(housing)}
                    className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full py-6 text-base font-semibold"
                  >
                    Add to Cart
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Whole Home Cartridges */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4">
              20" Cartridges
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Whole Home Filter Cartridges
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Premium 20-inch filter cartridges for whole house water filtration systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {wholeHomeCartridges.map((cartridge, index) => (
              <motion.div
                key={cartridge.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                  cartridge.popular ? 'border-cyan-500' : 'border-slate-200'
                }`}
              >
                {cartridge.popular && (
                  <div className="bg-cyan-500 text-white text-center py-2 font-semibold text-sm">
                    MOST POPULAR
                  </div>
                )}

                <div className="relative h-80 bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-8">
                  <img 
                    src={cartridge.image}
                    alt={cartridge.name}
                    className="h-full w-auto object-contain"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{cartridge.name}</h3>
                  <p className="text-cyan-600 font-medium text-sm mb-4">{cartridge.tagline}</p>

                  <div className="space-y-2 mb-6">
                    {cartridge.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <span className="text-3xl font-bold text-slate-900">${cartridge.price}</span>
                  </div>

                  <Button 
                    onClick={() => handleAddToCart(cartridge)}
                    className={`w-full rounded-full py-6 text-base font-semibold ${
                      cartridge.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    Add to Cart
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Under Counter Cartridges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4">
              10" Cartridges
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Under-the-Counter Filter Cartridges
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Compact 10-inch filter cartridges for under-sink and point-of-use systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {underCounterCartridges.map((cartridge, index) => (
              <motion.div
                key={cartridge.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-200"
              >
                <div className="relative h-80 bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-8">
                  <img 
                    src={cartridge.image}
                    alt={cartridge.name}
                    className="h-full w-auto object-contain"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{cartridge.name}</h3>
                  <p className="text-cyan-600 font-medium text-sm mb-4">{cartridge.tagline}</p>

                  <div className="space-y-2 mb-6">
                    {cartridge.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <span className="text-3xl font-bold text-slate-900">${cartridge.price}</span>
                  </div>

                  <Button 
                    onClick={() => handleAddToCart(cartridge)}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-full py-6 text-base font-semibold"
                  >
                    Add to Cart
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Help Choosing?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Our water treatment experts are here to help you find the perfect solution for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Contact')}>
                <Button className="bg-white text-cyan-600 hover:bg-cyan-50 rounded-full px-8 py-6 text-lg font-semibold">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:1-888-559-4340">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold">
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