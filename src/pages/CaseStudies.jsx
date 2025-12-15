import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Factory, Building2, Home, Leaf, Ship, ArrowRight, Filter, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const categories = [
  {
    id: 'all',
    name: 'All Case Studies',
    icon: Filter,
    color: 'slate'
  },
  {
    id: 'industrial',
    name: 'Industrial',
    icon: Factory,
    color: 'slate',
    description: 'Manufacturing facilities, power plants, and wastewater treatment'
  },
  {
    id: 'commercial',
    name: 'Commercial',
    icon: Building2,
    color: 'blue',
    description: 'Hotels, hospitals, schools, and office buildings'
  },
  {
    id: 'residential',
    name: 'Residential',
    icon: Home,
    color: 'cyan',
    description: 'Homes, apartments, and residential complexes'
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    icon: Leaf,
    color: 'green',
    description: 'Farms, greenhouses, and food processing'
  },
  {
    id: 'marine',
    name: 'Marine',
    icon: Ship,
    color: 'teal',
    description: 'Ships, vessels, and maritime applications'
  }
];

const caseStudies = [
  // Industrial
  {
    category: 'industrial',
    title: 'Massive Texas Factory',
    description: 'EcoTech Solutions installed two HydroFLOW i-Range units to help saving water in a 5.2 million square foot factory in Texas.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2025/07/massive-texas-factory-510x510.webp',
    results: ['Water savings', 'Reduced maintenance', 'Scale prevention']
  },
  {
    category: 'industrial',
    title: 'Sludge Line Struvite Treatment',
    description: 'After 3 months of operation, HydroFLOW was able to reduce scaling and maintain consistent flow rates.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2024/04/sludge-line-i150.jpg',
    results: ['Reduced scaling', 'Consistent flow rates', 'Lower maintenance']
  },
  {
    category: 'industrial',
    title: 'Steel Company Spray Bar System',
    description: 'Steel manufacturing facility in Ontario, Canada with scale issues on their galvanizing line.',
    results: ['Scale elimination', 'Improved efficiency', 'Cost savings']
  },
  {
    category: 'industrial',
    title: 'Lehigh County WWTP - Struvite Treatment',
    description: 'Within 8 days we saw that the struvite has stopped accumulating and was softening up.',
    results: ['Struvite prevention', 'Easier cleaning', 'Reduced downtime']
  },
  {
    category: 'industrial',
    title: 'Honda Cooling Tower',
    description: 'HydroFLOW solved the algae problem in our cooling towers.',
    results: ['Algae elimination', 'Chemical-free', 'Lower operational costs']
  },
  {
    category: 'industrial',
    title: 'Inland Power Plant in China',
    description: 'After HydroFLOW was installed, chemical dosage was totally eliminated, and no hard scale was found.',
    results: ['Zero chemicals', 'No scale buildup', 'Significant savings']
  },

  // Commercial
  {
    category: 'commercial',
    title: 'Gold LEED Registered Campus',
    description: 'The HydroFLOW product has performed superbly well in keeping our water heaters scale free.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/49841495480863-510x510.jpg',
    results: ['Scale-free heaters', 'Full efficiency', 'LEED compliance']
  },
  {
    category: 'commercial',
    title: 'Bakery Steam Boilers',
    description: 'HydroFLOW significantly reduced limescale and corrosion accumulation in our steam boilers.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/44051495481164-510x510.jpg',
    results: ['Reduced scale', 'Less corrosion', 'Extended equipment life']
  },
  {
    category: 'commercial',
    title: 'Sunrise Children\'s Hospital Cooling Tower',
    description: 'After five months chemical-free, there is no hard scale accumulation and biological count is well under 1,000 CFU/ML.',
    results: ['Chemical-free operation', 'No scale buildup', 'Safe water quality']
  },
  {
    category: 'commercial',
    title: 'Nellis Air Force Base Cooling Tower',
    description: 'No industrial water treatment chemicals used in the last 9-10 months of operation.',
    results: ['Zero chemical usage', 'Cost savings', 'Environmental benefits']
  },
  {
    category: 'commercial',
    title: 'Penn State University',
    description: 'Our HydroFLOW units are maintenance free, environmentally friendly, and have saved us thousands of dollars.',
    results: ['Maintenance-free', 'Eco-friendly', 'Thousands saved']
  },
  {
    category: 'commercial',
    title: 'Premium Car Wash in California',
    description: 'After 6 months of operation, all nozzles are working perfectly; saving water and greatly reducing maintenance costs.',
    results: ['Water savings', 'Perfect nozzle performance', 'Lower maintenance']
  },

  // Residential
  {
    category: 'residential',
    title: 'Coliforms in Well Water',
    description: 'HydroFLOW successfully treated coliform bacteria in residential well water.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/12/28901495146802.jpg',
    results: ['Bacteria reduction', 'Safe drinking water', 'No chemicals']
  },
  {
    category: 'residential',
    title: 'Plumbing Contractor',
    description: 'Professional plumber testimonial on HydroFLOW performance in residential applications.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/12/31951495476221.jpg',
    results: ['Easy installation', 'Proven results', 'Client satisfaction']
  },
  {
    category: 'residential',
    title: 'Residential Well',
    description: 'Complete well water treatment solution for hard water issues.',
    results: ['Scale prevention', 'Improved water quality', 'Appliance protection']
  },
  {
    category: 'residential',
    title: 'Residential Complex',
    description: 'Multi-unit residential complex solved hard water problems building-wide.',
    results: ['Building-wide solution', 'Tenant satisfaction', 'Reduced complaints']
  },
  {
    category: 'residential',
    title: 'Residential Pool',
    description: 'Swimming pool scale and biofilm control without harsh chemicals.',
    results: ['Crystal clear water', 'Less chemicals', 'Easier maintenance']
  },
  {
    category: 'residential',
    title: 'Residential Water Heater',
    description: 'Water heater protection and efficiency improvement.',
    results: ['Extended heater life', 'Lower energy bills', 'No scale buildup']
  },

  // Agriculture
  {
    category: 'agriculture',
    title: 'Municipal Golf Course in Texas',
    description: 'The goal was to increase the overall health of the grass, which was achieved.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/24091655247748-510x510.jpg',
    results: ['Improved grass health', 'Better irrigation', 'Water savings']
  },
  {
    category: 'agriculture',
    title: 'Long Stem Rose Growth',
    description: 'The grower wanted to see how HydroFLOW could increase the output from his greenhouses.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2024/03/Long-Stem-Rose-picture-for-the-case-study-2.jpg',
    results: ['Increased yield', 'Better quality', 'Healthier plants']
  },
  {
    category: 'agriculture',
    title: 'HydroFLOW Reduces Algae Growth',
    description: 'With HydroFLOW the reduction in algae growth was dramatic.',
    results: ['Dramatic algae reduction', 'Cleaner water', 'Better crop health']
  },
  {
    category: 'agriculture',
    title: 'Food Processing Cooling Tower',
    description: 'With HydroFLOW, my cooling tower is much cleaner than it was with chemicals.',
    results: ['Cleaner than chemicals', 'Food safety', 'Cost effective']
  },
  {
    category: 'agriculture',
    title: 'Increased Crop Yield Experiment',
    description: 'Both plots with HydroFLOW obtained better yield than the control plot.',
    results: ['Higher yields', 'Better quality', 'Proven results']
  },
  {
    category: 'agriculture',
    title: 'Orchard - Scale on Apples',
    description: 'Scale deposits accumulate as fine powder which is very easy to remove.',
    results: ['Easy cleaning', 'Better fruit quality', 'Less maintenance']
  },

  // Marine
  {
    category: 'marine',
    title: 'U.S. Navy Seafighter',
    description: 'HydroFLOW succeeded in keeping the strainer free of biofouling for a much longer period.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2025/07/seafighter-510x510.webp',
    results: ['Extended maintenance intervals', 'Biofouling prevention', 'Naval approved']
  },
  {
    category: 'marine',
    title: 'MV Hermes Leader - Replacement of UV-System',
    description: 'Water test results showed no trace of any bacteria.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/40231495151554-510x510.jpg',
    results: ['Bacteria-free water', 'UV replacement', 'Cost savings']
  },
  {
    category: 'marine',
    title: 'Ray Shipping Equips Fleet with Hydropath',
    description: 'Completely reduced vessel scale buildup, reduced bacteria corrosion and saved labor work and money.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/79081495752087-510x510.jpg',
    results: ['Fleet-wide success', 'Scale elimination', 'Labor savings']
  },
  {
    category: 'marine',
    title: 'Anglo Eastern - Freshwater Generator',
    description: 'Freshwater generator is free of scale, and chemical dosing is no longer required.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/78611495752951-510x510.jpg',
    results: ['Scale-free operation', 'No chemicals needed', 'Reliable performance']
  },
  {
    category: 'marine',
    title: 'MV Hoegh Antwerp - Scale Prevention',
    description: 'No scale buildup was found during opening and no chemicals were required for cleaning.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/88651495664646-510x510.jpg',
    results: ['Zero scale buildup', 'Chemical-free cleaning', 'Easy maintenance']
  },
  {
    category: 'marine',
    title: 'Car Carrier - Main Cooling System',
    description: 'The particle filter at the bottom of the unit was found clean of barnacles and was easily washed.',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2023/11/42481495666712-510x510.jpg',
    results: ['Barnacle-free', 'Easy cleaning', 'System protection']
  }
];

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredStudies = activeCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeCategory);

  const activeCategoryData = categories.find(cat => cat.id === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real-world success stories from customers across industries who have experienced the proven benefits of HydroFLOW technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-cyan-600 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Description */}
      {activeCategory !== 'all' && activeCategoryData && (
        <section className="py-8 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-6 bg-gradient-to-br from-cyan-50 to-white border-cyan-100">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-${activeCategoryData.color}-500 flex items-center justify-center flex-shrink-0`}>
                  <activeCategoryData.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-1">{activeCategoryData.name} Case Studies</h2>
                  <p className="text-slate-600">{activeCategoryData.description}</p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Case Studies Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={`${study.category}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.05, 0.5) }}
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all group">
                  {study.image && (
                    <div className="h-48 overflow-hidden bg-slate-100">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {(() => {
                        const cat = categories.find(c => c.id === study.category);
                        const Icon = cat?.icon;
                        return (
                          <>
                            <Icon className="w-4 h-4 text-cyan-600" />
                            <Badge className="bg-cyan-100 text-cyan-700 hover:bg-cyan-100 capitalize">
                              {study.category}
                            </Badge>
                          </>
                        );
                      })()}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                      {study.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {study.description}
                    </p>
                    
                    {study.results && (
                      <div className="space-y-2">
                        {study.results.slice(0, 3).map((result, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Ready to Experience These Results?
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Join thousands of satisfied customers who have improved their water systems with HydroFLOW technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Products')}>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8 py-6">
                  Shop Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={createPageUrl('Contact')}>
                <Button variant="outline" className="rounded-full px-8 py-6 border-2">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}