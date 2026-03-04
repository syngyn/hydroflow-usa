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
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/00e27e7ff_pearl-plus-on-pipe.png',
    page: 'ProductPearlPlus'
  },
  {
    name: 'Pearl',
    tag: 'BEST VALUE',
    coverage: 'For homes up to 2,000 sq ft',
    oldPrice: '$595',
    price: '$395',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/f46d7be5f_Pearlsidefronttransparent.png',
    page: 'ProductPearl'
  },
  {
    name: <><i>hs</i>40</>,
    tag: 'POOL & SPA',
    coverage: 'For pools up to 40,000 gallons',
    oldPrice: '$2,150',
    price: '$1,990',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/054ccee82_hs40.png',
    page: 'ProductHS40'
  },
  {
    name: <><i>i</i> Range</>,
    tag: 'INDUSTRIAL',
    coverage: 'Commercial & industrial applications',
    oldPrice: null,
    price: 'Custom',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/9f1053a47_irange1.png',
    page: 'ProductIRange'
  },
  {
    name: <><i>hm</i> Range</>,
    tag: 'MARINE',
    coverage: 'Marine & vessel applications',
    oldPrice: null,
    price: 'Custom',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/f78dd7ace_hm-Rangenew.png',
    page: 'ProductHMRange'
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0" style={{backgroundImage: 'url(https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/3e9af6bfc_Gemini_Generated_Image_ru5ndiru5ndiru5n.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.2}} />
      {/* Animated particles/waves effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-cyan-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-32">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
           {/* Content */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="flex flex-col justify-center"
           >
             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4 md:mb-6">
               <span className="block">Advanced Water</span>
               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-600">
                 Treatment Solutions
               </span>
             </h1>

             <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 md:mb-8">
               Sustainable and eco-friendly water treatment products that are designed to optimize the performance of residential, commercial, industrial, agricultural, and marine water systems.
             </p>

             <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
               <Link to={createPageUrl('Products')} className="w-full sm:w-auto">
                 <Button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white border-2 border-cyan-500 rounded-full px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold transition-all w-full sm:w-auto">
                   Residential Solutions
                 </Button>
               </Link>
               <Link to={createPageUrl('Industrial')} className="w-full sm:w-auto">
                 <Button variant="outline" className="border-2 border-cyan-600 text-cyan-600 bg-cyan-50 hover:bg-cyan-100 rounded-full px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold w-full sm:w-auto">
                   Industrial Solutions
                 </Button>
               </Link>
             </div>
           </motion.div>

           {/* Hero Image/Card Carousel */}
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="flex items-center justify-center"
           >
             <div className="relative w-full max-w-md">
               <div className="relative border border-white/20 rounded-2xl md:rounded-3xl p-4 md:p-8 overflow-hidden flex items-center justify-center h-64 sm:h-80 md:h-96" style={{ aspectRatio: '4/3' }}>
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
                     className="w-full h-full flex items-center justify-center"
                    >
                     <Link to={createPageUrl(products[currentProductIndex].page)} className="block h-full w-full flex items-center justify-center px-2">
                       <img 
                         src={products[currentProductIndex].image}
                         alt={products[currentProductIndex].name}
                         className="max-h-full w-auto max-w-full object-contain"
                         style={
                           currentProductIndex === 1 ? { transform: 'scale(0.7)', transformOrigin: 'center' } : {}
                         }
                       />
                     </Link>
                    </motion.div>
                </AnimatePresence>
                

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
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-slate-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}