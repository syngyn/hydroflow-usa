import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Home, Building2, Factory, Tractor, Anchor, ArrowRight } from 'lucide-react';

const sectors = [
  {
    icon: Home,
    name: 'Residential',
    href: 'Residential',
    description: 'Protect your home from scale buildup and extend appliance life',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Building2,
    name: 'Commercial',
    href: 'Commercial',
    description: 'Reduce maintenance costs and improve efficiency in commercial buildings',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Factory,
    name: 'Industrial',
    href: 'Industrial',
    description: 'Heavy-duty solutions for manufacturing and processing facilities',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80',
    color: 'from-slate-600 to-slate-700'
  },
  {
    icon: Tractor,
    name: 'Agriculture',
    href: 'Agriculture',
    description: 'Improve irrigation systems and protect farming equipment',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Anchor,
    name: 'Marine',
    href: 'Marine',
    description: 'Protect boats and marine equipment from scale and corrosion',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    color: 'from-indigo-500 to-indigo-600'
  }
];

export default function MarketSectors() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Solutions For Every Industry
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Market Sectors
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-600"> We Serve</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From homes to industrial facilities, HydroFLOW provides customized water treatment 
            solutions for every application.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <Link to={createPageUrl(sector.href)} className="block">
                <div className={`relative ${index === 0 ? 'h-[500px]' : 'h-64'} overflow-hidden`}>
                  {/* Background Image */}
                  <img 
                    src={sector.image}
                    alt={sector.name}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${sector.color} opacity-80`} />
                  
                  {/* Content */}
                  <div className="relative h-full p-8 flex flex-col justify-end">
                    <div className="mb-4">
                      <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                        <sector.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className={`font-bold text-white mb-2 ${index === 0 ? 'text-3xl' : 'text-xl'}`}>
                        {sector.name}
                      </h3>
                      <p className={`text-white/90 ${index === 0 ? 'text-lg' : 'text-sm'}`}>
                        {sector.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-white font-medium transform group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}