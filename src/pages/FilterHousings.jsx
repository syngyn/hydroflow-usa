import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Shield, Droplet, ThermometerSun, Leaf } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from '@/components/cart/CartContext';
import { toast } from 'sonner';

const filterHousings = [
  {
    id: 'filter-housing-10',
    name: '10" Stainless Steel Filter Housing',
    size: '10"',
    price: 249.95,
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/f4799ac18_10inchhousing.png',
    features: [
      'Premium stainless steel construction',
      'Corrosion resistant',
      'Easy cartridge replacement',
      'Durable and long-lasting'
    ],
    description: 'High-quality 10-inch stainless steel filter housing designed for residential and light commercial applications.'
  },
  {
    id: 'filter-housing-20',
    name: '20" Stainless Steel Filter Housing',
    size: '20"',
    price: 379.95,
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/311d70c27_20inchhousing.png',
    features: [
      'Premium stainless steel construction',
      'Corrosion resistant',
      'Easy cartridge replacement',
      'Durable and long-lasting',
      'Higher capacity filtration'
    ],
    description: 'Heavy-duty 20-inch stainless steel filter housing for demanding residential and commercial water filtration needs.'
  }
];

const benefits = [
  {
    icon: Shield,
    title: 'Premium Quality',
    description: 'Stainless steel construction for maximum durability and longevity'
  },
  {
    icon: Droplet,
    title: 'Superior Filtration',
    description: 'Compatible with a wide range of filter cartridges for customized water treatment'
  },
  {
    icon: ThermometerSun,
    title: 'Corrosion Resistant',
    description: 'Built to withstand harsh water conditions and maintain performance'
  }
];

export default function FilterHousings() {
  const { addToCart } = useCart();

  const handleAddToCart = (housing) => {
    addToCart({
      id: housing.id,
      name: housing.name,
      price: housing.price,
      image: housing.image,
      quantity: 1
    });
    toast.success(`${housing.name} added to cart`);
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
              Premium Water Filtration
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Stainless Steel
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                Filter Housings
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Premium quality stainless steel filter housings designed for durability, 
              performance, and long-lasting water filtration solutions.
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
              <p className="text-sm text-slate-600">Premium filter housings</p>
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
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Eco-Friendly Solutions</h3>
                <p className="text-sm text-slate-600">Chemical-free water treatment</p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Stainless Steel Filter Housings?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Available Filter Housings
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose the right size for your water filtration needs
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
                {/* Product Image */}
                <div className="relative h-96 bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-8">
                  <img 
                    src={housing.image}
                    alt={housing.name}
                    className="h-full w-auto object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-cyan-500 text-white text-lg px-4 py-2">
                      {housing.size}
                    </Badge>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{housing.name}</h3>
                  <p className="text-slate-600 mb-6">{housing.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {housing.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-slate-900">${housing.price}</span>
                  </div>

                  {/* CTA */}
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
              Our water treatment experts are here to help you select the right filter housing for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <Link to={createPageUrl('Contact')} className="flex-1 sm:flex-none">
                <Button className="w-full sm:w-auto bg-white text-cyan-600 hover:bg-cyan-50 rounded-full px-8 py-6 text-lg font-semibold">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:1-888-559-4340" className="flex-1 sm:flex-none">
                <Button className="w-full sm:w-auto bg-white text-cyan-600 hover:bg-cyan-50 rounded-full px-8 py-6 text-lg font-semibold">
                  Call 1-888-559-4340
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}