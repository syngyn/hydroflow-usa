import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Tractor, Droplets, Leaf, Sun, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Droplets,
    title: 'Improved Irrigation',
    description: 'Prevent scale buildup in drip irrigation systems and sprinklers'
  },
  {
    icon: Tractor,
    title: 'Equipment Protection',
    description: 'Extend the life of pumps, pipes, and farming equipment'
  },
  {
    icon: Leaf,
    title: 'Better Crop Yields',
    description: 'Improved water quality can lead to healthier plants'
  },
  {
    icon: Sun,
    title: 'Greenhouse Solutions',
    description: 'Perfect for hydroponic and greenhouse applications'
  }
];

const applications = [
  'Drip Irrigation Systems',
  'Sprinkler Systems',
  'Greenhouse Operations',
  'Hydroponic Systems',
  'Livestock Water Systems',
  'Dairy Operations',
  'Poultry Farms',
  'Aquaculture'
];

export default function Agriculture() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80"
            alt="Agriculture"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-green-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Agriculture Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Agricultural Water
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-200">
                Treatment Solutions
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Improve irrigation systems and protect farming equipment with our 
              eco-friendly water conditioning technology.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl shadow-green-500/30">
                Get a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
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
            className="aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe 
              src="https://player.vimeo.com/video/1065121749?badge=0&autoplay=0&muted=0"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="HydroFLOW Agricultural Video"
            />
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Agricultural Benefits
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-8 rounded-2xl bg-slate-50 hover:bg-green-50 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Learn more about...
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'i Range', link: 'ProductIRange' },
              { title: 'Farming', link: 'AgricultureFarming' },
              { title: 'Landscaping/Golf Courses', link: 'AgricultureLandscaping' },
              { title: 'Drought Mitigation', link: 'DroughtMitigation' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={createPageUrl(item.link)}>
                  <Button 
                    variant="outline" 
                    className="w-full h-full py-6 text-left justify-start hover:bg-green-50 hover:border-green-500 hover:text-green-600 transition-all group"
                  >
                    <span className="font-semibold">{item.title}</span>
                    <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-green-400 font-semibold text-sm uppercase tracking-wider mb-4">
                Applications
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Agricultural Applications
              </h2>
              <p className="text-lg text-green-100/80 mb-8">
                <i>Hydro</i>FLOW technology is ideal for a wide range of agricultural applications, 
                from small farms to large commercial operations.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {applications.map((app) => (
                  <div key={app} className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    {app}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/1df6226ff_agricultural-irrigation-system-watering-fields-on-2024-12-08-00-26-01-utc.jpg"
                alt="Modern farming"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Video Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
                G&G Orchards
              </h3>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe 
                  src="https://player.vimeo.com/video/107484225?badge=0&autoplay=0&muted=0"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="HydroFLOW G&G Orchards Cooling Tower"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
                Baker Produce
              </h3>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe 
                  src="https://player.vimeo.com/video/107646148?badge=0&autoplay=0&muted=0"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="HydroFLOW Baker Produce"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Agricultural Case Studies
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link to={createPageUrl('CaseStudyDetail') + '?slug=greenhouse-misting-system'}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-green-50 transition-colors cursor-pointer h-full"
              >
                <h3 className="font-bold text-slate-900 mb-4">Greenhouse Misting System</h3>
                <p className="text-slate-600 italic mb-4">"Our misting nozzles stay clean and our plants are thriving with the improved water quality."</p>
                <p className="text-sm text-green-600 font-medium">Greenhouse</p>
              </motion.div>
            </Link>

            <Link to={createPageUrl('CaseStudyDetail') + '?slug=gg-orchards-cooling-tower'}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-green-50 transition-colors cursor-pointer h-full"
              >
                <h3 className="font-bold text-slate-900 mb-4">G&G Orchards Cooling Tower</h3>
                <p className="text-slate-600 italic mb-4">"We've eliminated scale buildup and dramatically reduced our chemical usage."</p>
                <p className="text-sm text-green-600 font-medium">Food Processing</p>
              </motion.div>
            </Link>

            <Link to={createPageUrl('CaseStudyDetail') + '?slug=drip-irrigation-system'}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-green-50 transition-colors cursor-pointer h-full"
              >
                <h3 className="font-bold text-slate-900 mb-4">Drip Irrigation System</h3>
                <p className="text-slate-600 italic mb-4">"Our irrigation system efficiency has improved significantly with no more clogged emitters."</p>
                <p className="text-sm text-green-600 font-medium">Farming</p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Improve Your Farm's Water System?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Contact us for a customized agricultural water treatment solution.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button className="bg-white text-green-600 hover:bg-green-50 rounded-full px-8 py-6 text-lg font-semibold">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}