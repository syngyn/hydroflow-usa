import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, CheckCircle2, Thermometer, Sun, Wind } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const idealFor = [
  {
    icon: Sun,
    text: 'Outdoor areas with water exposure, direct sunlight or ambient temperature in the -4° to 122° F range'
  },
  {
    icon: Thermometer,
    text: 'Indoor washdown areas with ambient temperature in the -4° to 122° F range'
  },
  {
    icon: Shield,
    text: 'Customizable for temperatures outside of the -4° to 122° F operating parameters'
  },
  {
    icon: Wind,
    text: 'High traffic areas that can cause physical damage to HydroFLOW equipment'
  },
  {
    icon: CheckCircle2,
    text: 'Process areas with flying debris'
  },
  {
    icon: CheckCircle2,
    text: 'Corrosive areas'
  }
];

const materialOptions = [
  'Aluminum diamond plate',
  'High-density polyethylene',
  'Powder coated sheet steel'
];

const availableOptions = [
  'Internal heat insulation',
  'External reflective heat shield',
  'Thermostat controlled internal cooling fan',
  'Over-temperature recording device',
  'Air conditioning',
  'Wireless indication and alarming',
  'Insulation for pipes over 104° F',
  'Internal LED lighting',
  'Surge protector'
];

const images = [
  'https://hydroflow-usa.com/wp-content/uploads/2024/04/enclosure_1.jpg',
  'https://hydroflow-usa.com/wp-content/uploads/2024/04/enclosure_2.jpg',
  'https://hydroflow-usa.com/wp-content/uploads/2024/04/enclosure_3.jpg',
  'https://hydroflow-usa.com/wp-content/uploads/2024/04/enclosure_4.jpg'
];

export default function ProtectiveEnclosure() {
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
              Equipment Protection
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Customizable Industrial-Grade
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                Protective Enclosure
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Extend the service life of your HydroFLOW equipment with our industrial-grade protective enclosures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-video rounded-2xl overflow-hidden shadow-2xl mb-8"
          >
            <iframe 
              src="https://player.vimeo.com/video/542897277?badge=0&autoplay=0&muted=0"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="HydroFLOW Custom Installation"
            />
          </motion.div>
          <p className="text-center text-slate-600 italic">
            Installation of a HydroFLOW Custom i72" at a power station in the US Midwest
          </p>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Enclosures are Ideal For
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {idealFor.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-4 p-6 bg-white rounded-xl shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-cyan-600" />
                </div>
                <p className="text-slate-700">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Material Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Material Options</h3>
                <ul className="space-y-3">
                  {materialOptions.map((option, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{option}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Pipe Diameter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-cyan-50 to-cyan-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Pipe Outer Diameter</h3>
                <p className="text-4xl font-bold text-cyan-600 mb-2">2" to 108"</p>
                <p className="text-slate-600">Customizable for any pipe size</p>
              </Card>
            </motion.div>

            {/* Available Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-8 h-full">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Available Options</h3>
                <ul className="space-y-2">
                  {availableOptions.map((option, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{option}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Enclosure Examples
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <img 
                  src={image}
                  alt={`Protective enclosure ${index + 1}`}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Discuss Your Protective Enclosure Options
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              A protective enclosure expert will reach out to you within one business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+18885594340">
                <Button className="bg-white text-cyan-600 hover:bg-cyan-50 rounded-full px-8 py-6 text-lg font-semibold">
                  Call 1-888-559-4340
                </Button>
              </a>
              <Link to={createPageUrl('Contact')}>
                <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}