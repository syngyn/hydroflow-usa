import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Play, Shield, Leaf, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

export default function HeroSection() {
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

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Advanced Water
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
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
                <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
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

          {/* Hero Image/Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 overflow-hidden">
                <img 
                  src="https://hydroflow-usa.com/wp-content/uploads/2024/10/pearl-plus-grey-background-799x800.webp"
                  alt="HydroFLOW Pearl Plus"
                  className="w-full max-w-sm mx-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="text-center mt-6">
                  <div className="text-cyan-400 text-sm font-medium mb-1">MOST POPULAR</div>
                  <h3 className="text-white text-2xl font-bold mb-2">Pearl Plus</h3>
                  <p className="text-slate-400 text-sm">For homes up to 3,000 sq ft</p>
                  <div className="mt-4">
                    <span className="text-slate-400 line-through text-lg">$695</span>
                    <span className="text-white text-3xl font-bold ml-3">$495</span>
                  </div>
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