import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Droplet, Shield, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from '@/components/cart/CartContext';
import { toast } from 'sonner';

const wholeHomeCartridges = [
  {
    id: 'sediment-20',
    name: 'Sediment Filter (20")',
    size: '20" x 4.5"',
    price: 29.95,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/08/SED20-inch-cartridge.png',
    tagline: 'Basic filtration',
    description: 'Basic single-stage sediment filtration for whole home water systems.',
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
    size: '20" x 4.5"',
    price: 35.95,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2024/05/acb-10-inch-filter-scaled.webp',
    tagline: 'More complex filtration',
    description: 'Advanced activated carbon filtration for improved taste, odor, and contaminant removal.',
    features: [
      'Removes chlorine, taste, and odor',
      'Reduces organic contaminants',
      'Advanced carbon block technology',
      'Compatible with whole home housings'
    ],
    popular: true
  }
];

const underCounterCartridges = [
  {
    id: 'activated-carbon-10',
    name: 'Activated Carbon Block (10")',
    size: '10" x 2.5"',
    price: 19.95,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2024/05/acb-10-inch-filter-scaled.webp',
    tagline: 'Basic filtration',
    description: 'Compact activated carbon filtration for under-the-counter systems. Improves taste and removes chlorine.',
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
    size: '10" x 2.5"',
    price: 149.95,
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/08/FF-20-inch.webp',
    tagline: 'State of the art for pristine water quality',
    description: 'Absolute filtration power in a compact 10-inch format. Perfect for under-counter installations.',
    features: [
      'Absolute filtration performance',
      'Multi-layer protection',
      'Compact 10" design',
      'Premium water quality'
    ]
  }
];

const benefits = [
  {
    icon: Droplet,
    title: 'Pure Water',
    description: 'Remove contaminants, improve taste, and enjoy crystal-clear water throughout your home'
  },
  {
    icon: Shield,
    title: 'Certified Quality',
    description: 'All cartridges meet rigorous quality standards for safe and effective filtration'
  },
  {
    icon: Sparkles,
    title: 'Easy Replacement',
    description: 'Simple cartridge replacement ensures consistent performance and water quality'
  }
];

export default function FilterCartridges() {
  const { addToCart } = useCart();

  const handleAddToCart = (cartridge) => {
    addToCart({
      id: cartridge.id,
      name: cartridge.name,
      price: cartridge.price,
      image: cartridge.image,
      quantity: 1
    });
    toast.success(`${cartridge.name} added to cart`);
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
              Water Filter Cartridges
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Replacement
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                Filter Cartridges
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              High-quality replacement filter cartridges for whole home and under-counter water filtration systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories Navigation */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Link to={createPageUrl('Products')}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-cyan-50 transition-colors cursor-pointer text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Electronic Conditioners</h3>
                <p className="text-sm text-slate-600">Chemical-free water conditioning</p>
              </motion.div>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8 border-2 border-cyan-500 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <Droplet className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Home Filtration</h3>
              <p className="text-sm text-slate-600">Filter cartridges & housings</p>
              <Badge className="mt-3 bg-cyan-600 text-white">You're Here</Badge>
            </motion.div>

            <Link to={createPageUrl('Products')}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-cyan-50 transition-colors cursor-pointer text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">On-the-Go Hydration</h3>
                <p className="text-sm text-slate-600">Portable filtration solutions</p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-6 mx-auto">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Whole Home Cartridges */}
      <section className="py-20 bg-white">
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

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {wholeHomeCartridges.map((cartridge, index) => (
              <motion.div
                key={cartridge.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                  cartridge.popular ? 'border-cyan-500' : 'border-slate-200'
                }`}
              >
                {cartridge.popular && (
                  <div className="bg-cyan-500 text-white text-center py-2 font-semibold text-sm">
                    MOST POPULAR
                  </div>
                )}

                {/* Product Image */}
                <div className="relative h-80 bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-8">
                  <img 
                    src={cartridge.image}
                    alt={cartridge.name}
                    className={`h-full w-auto object-contain ${cartridge.id === 'sediment-20' ? 'scale-[1.2]' : ''}`}
                  />
                </div>

                {/* Product Info */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 min-h-[60px]">{cartridge.name}</h3>
                  <p className="text-cyan-600 font-medium text-sm mb-3 min-h-[20px]">{cartridge.tagline}</p>
                  <p className="text-slate-600 mb-6 min-h-[48px]">{cartridge.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-6 min-h-[112px]">
                    {cartridge.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="mb-6 mt-auto">
                    <span className="text-3xl font-bold text-slate-900">${cartridge.price}</span>
                  </div>

                  {/* CTA */}
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
      <section className="py-20 bg-slate-50">
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
                {/* Product Image */}
                <div className="relative h-80 bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-8">
                  <img 
                    src={cartridge.image}
                    alt={cartridge.name}
                    className="h-full w-auto object-contain"
                  />
                </div>

                {/* Product Info */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{cartridge.name}</h3>
                  <p className="text-cyan-600 font-medium text-sm mb-3">{cartridge.tagline}</p>
                  <p className="text-slate-600 mb-6">{cartridge.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {cartridge.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-slate-900">${cartridge.price}</span>
                  </div>

                  {/* CTA */}
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
              Our water treatment experts can help you select the right filter cartridge for your system.
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