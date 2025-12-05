import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Not only had the HydroFLOW units prevented any scale from accumulating, but had actually reversed the scale that had built up prior to the installation.",
    author: "Residential Tower Case Study",
    role: "Property Management",
    rating: 5
  },
  {
    quote: "The test clearly showed that HydroFLOW was effective even in very hard water conditions, and kept the pipes completely clear.",
    author: "Product Evaluation",
    role: "Tankless Boiler Test",
    rating: 5
  },
  {
    quote: "The HydroFLOW unit was not only able to stop new scale from forming but also cleaned up the existing scale buildup from the water heater and shower heads.",
    author: "Residential Homeowner",
    role: "Water Heater Application",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-50 rounded-full blur-3xl -translate-y-1/2 -z-10" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-cyan-50 rounded-full blur-3xl -translate-y-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            What Our Customers
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-600"> Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-slate-50 rounded-2xl p-8 h-full border border-slate-100 hover:border-cyan-100 hover:shadow-xl transition-all duration-300">
                {/* Quote icon */}
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mb-6">
                  <Quote className="w-5 h-5 text-cyan-600" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}