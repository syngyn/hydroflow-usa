import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function FiltrationTechnology() {
  return (
    <div>
      {/* Hero Section with Image */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] overflow-hidden">
          <img 
            src="https://hydroflow-usa.com/wp-content/uploads/2024/05/image-5.jpg"
            alt="Water Filtration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/60 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-white"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Improve Water Filtration & Purification
                </h1>
                <p className="text-xl md:text-2xl">
                  How Hydropath Technology enhances filtration efficiency
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              The <i>Hydro</i>FLOW water conditioners flock suspended particles that pass through the ring of ferrites, thus causing them to filter out of water systems more efficiently. The increased filtration efficiency can reduce backwashing by a factor of three, and the amount of water used in each backwash cycle is reduced by up to 50%. Reduced backwashing means cost savings in water usage and maintenance downtime. In some wastewater applications, <i>Hydro</i>FLOW can assist with polymer reduction and increased cake dryness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Diagram Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://hydroflow-usa.com/assets/userfiles/images/Filtration/filtration_bottom.png"
              alt="How hydropath technology enhances filtration efficiency"
              className="w-full rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900" style={{ paddingBottom: '56.25%' }}>
              <iframe 
                src="https://player.vimeo.com/video/297755376?h=96a84de68a&title=0&byline=0&portrait=0"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Flocculation Process"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Learn More About Our Technology
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Contact us today to discover how <i>Hydro</i>FLOW can improve your water filtration efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Contact')}>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8 py-6">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={createPageUrl('Products')}>
                <Button variant="outline" className="rounded-full px-8 py-6 border-2">
                  View Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}