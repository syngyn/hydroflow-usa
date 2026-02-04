import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Play, Shield, Leaf, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  {
    name: 'Pearl Plus',
    tag: 'MOST POPULAR',
    coverage: 'For homes up to 3,000 sq ft',
    oldPrice: '$695',
    price: '$495',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/08/pearl-plus-transparent.webp'
  },
  {
    name: 'Pearl',
    tag: 'BEST VALUE',
    coverage: 'For homes up to 2,000 sq ft',
    oldPrice: '$595',
    price: '$395',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/a9d24ed5d_Untitled.png'
  },
  {
    name: 'hs40',
    tag: 'POOL & SPA',
    coverage: 'For pools up to 40,000 gallons',
    oldPrice: '$2,150',
    price: '$1,990',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/0e2222ce9_hs40.png'
  },
  {
    name: 'i-Range',
    tag: 'INDUSTRIAL',
    coverage: 'Commercial & industrial applications',
    oldPrice: null,
    price: 'Custom',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2025/10/irange1.png'
  },
  {
    name: 'HM Range',
    tag: 'MARINE',
    coverage: 'Marine & vessel applications',
    oldPrice: null,
    price: 'Custom',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2025/10/hm-Range1-1400x788.png'
  }
];

export default function HeroSection() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prev) => (prev + 1) % products.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" 
          alt="Modern home with water"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
      </div>

      {/* Animated particles/waves effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-sm text-white/80">Eco-Friendly Water Treatment</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-center lg:text-left">
              <span className="block whitespace-nowrap">Advanced Water</span>
              <span className="block whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                Treatment Solutions
              </span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              Protect your home and business with our patented Hydropath technology. 
              Chemical-free, maintenance-free water conditioning that prevents scale, 
              reduces bacteria, and extends equipment life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to={createPageUrl('Products')}>
                <Button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all group">
                  Shop Residential
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to={createPageUrl('Industrial')}>
                <Button variant="outline" className="border-2 border-white/50 text-white bg-white/10 hover:bg-white/20 rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                  Industrial Solutions
                </Button>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Shield className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">20+ Years</div>
                  <div className="text-slate-400 text-sm">Proven Technology</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">Chemical-Free</div>
                  <div className="text-slate-400 text-sm">Eco-Friendly</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">$5/Year</div>
                  <div className="text-slate-400 text-sm">To Operate</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hero Image/Card Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-8 overflow-hidden min-h-[400px] md:min-h-[600px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProductIndex}
                    initial={{ 
                      opacity: 0, 
                      scale: 1.2,
                      filter: 'blur(20px) brightness(3)'
                    }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      filter: 'blur(0px) brightness(1)',
                      transition: {
                        duration: 0.8,
                        ease: "easeOut"
                      }
                    }}
                    exit={{ 
                      opacity: 0, 
                      scale: 0.8,
                      filter: 'blur(20px) brightness(3)',
                      transition: {
                        duration: 0.6,
                        ease: "easeIn"
                      }
                    }}
                    className="w-full"
                  >
                    <div className="h-64 md:h-80 flex items-center justify-center mb-6">
                      <img 
                        src={products[currentProductIndex].image}
                        alt={products[currentProductIndex].name}
                        className="max-h-full w-auto object-contain"
                      />
                    </div>
                    <div className="text-center">
                      <div className="text-cyan-400 text-sm font-medium mb-1">{products[currentProductIndex].tag}</div>
                      <h3 className="text-white text-xl md:text-2xl font-bold mb-2">{products[currentProductIndex].name}</h3>
                      <p className="text-slate-400 text-sm">{products[currentProductIndex].coverage}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                {/* Carousel indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {products.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProductIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentProductIndex ? 'bg-cyan-400 w-8' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}