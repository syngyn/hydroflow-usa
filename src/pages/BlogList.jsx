import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, ArrowRight, Factory, Building2, Home, Leaf, Ship } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const getCategoryIcon = (category) => {
  const icons = {
    industrial: Factory,
    commercial: Building2,
    residential: Home,
    agriculture: Leaf,
    marine: Ship
  };
  return icons[category] || Home;
};

const getCategoryColor = (category) => {
  const colors = {
    industrial: 'from-slate-600 to-slate-700',
    commercial: 'from-cyan-600 to-cyan-700',
    residential: 'from-green-600 to-green-700',
    agriculture: 'from-amber-600 to-amber-700',
    marine: 'from-blue-600 to-blue-700'
  };
  return colors[category] || 'from-cyan-600 to-cyan-700';
};

const blogData = {
  residential: [
    { slug: 'water-quality-health-resolution', title: 'Why Water Quality Should Be Your Top Health Resolution', excerpt: 'Water quality is an important issue year-round. Learn about the fundamental importance of water and how to ensure your water quality contributes to your health.', date: '2025-01-15', readTime: '8 min read' },
    { slug: 'different-types-of-water', title: 'What are the Different Types of Water?', excerpt: 'Water comes in many forms from many places. Learn about the different types of water and what makes each one unique.', date: '2024-12-20', readTime: '6 min read' },
    { slug: 'water-myths', title: 'Water Myths', excerpt: "We all grew up hearing certain 'facts' about water. It's time to separate fact from fiction with scientific understanding.", date: '2024-11-10', readTime: '7 min read' },
    { slug: 'purge-water-heater', title: 'How to Purge your Water Heater', excerpt: 'Purging your water heater is essential to keep it functioning optimally. Step-by-step instructions for gas and electric water heaters.', date: '2024-10-15', readTime: '5 min read' },
    { slug: 'water-conditioner-vs-softener', title: 'Water Conditioner Vs. Water Softener', excerpt: 'Understanding the differences between water conditioners and water softeners to choose the right system for your needs.', date: '2024-09-22', readTime: '6 min read' },
    { slug: 'water-terminology', title: 'Water Terminology', excerpt: 'Water terminologies explained. Learn about this seemingly plain liquid that has a whole lot more going on than you think.', date: '2024-08-18', readTime: '7 min read' },
    { slug: 'chemicals-in-water', title: 'How are Chemicals Getting in My Water?', excerpt: 'Most chemicals that end up in our water are a result of being directly added or from runoff. Learn how to protect yourself.', date: '2024-07-30', readTime: '6 min read' },
    { slug: 'ionic-colloidal-minerals', title: 'Colloidal and Ionic Minerals vs Pill Vitamins', excerpt: 'Making sense of all the vitamin and mineral supplements on the grocery store shelves.', date: '2024-06-12', readTime: '8 min read' },
    { slug: 'tankless-water-heaters', title: 'Tankless Water Heater Vs. Tank Water Heater', excerpt: 'Comparing two types of residential water heating systems to help you make the right choice.', date: '2024-05-20', readTime: '7 min read' },
    { slug: 'water-softening-history', title: 'Water Softening Systems and the History of Water Softeners', excerpt: 'Explore the history of water softening systems and why the need to soften water became important.', date: '2024-04-15', readTime: '9 min read' },
    { slug: 'homeowner-excellent-results', title: 'Homeowner Reports Excellent Results', excerpt: 'Learn how a HydroFLOW s38 gave a homeowner soft water, no water spots, while killing bacteria and preventing scale.', date: '2024-03-10', readTime: '5 min read' },
    { slug: 'skeptical-employee', title: 'Skeptical Employee Becomes a HydroFLOW Believer', excerpt: 'A newly hired skeptical employee tests the HydroFLOW device at the corporate testing facility.', date: '2024-02-18', readTime: '6 min read' },
    { slug: 'pathogens-drinking-water', title: 'Could There Be Pathogens in Your Drinking Water?', excerpt: 'Water treatment device reduces the probability of pathogens from multiplying in water.', date: '2024-01-25', readTime: '7 min read' },
    { slug: 'eco-friendly-water-treatment', title: 'Choosing the Right Eco-Friendly Water Treatment Option', excerpt: "Let's explore the varying types of water treatments and the unique ways they function.", date: '2023-12-08', readTime: '8 min read' },
    { slug: 'salt-in-water', title: 'Salt in Your Water?', excerpt: "It's easy to track your sodium intake from food, but sodium can get into our systems without us knowing it.", date: '2023-11-20', readTime: '5 min read' },
    { slug: 'apartment-complex-savings', title: 'Scale Reduction Savings in Apartment Complex', excerpt: 'Learn how Greenfield Village saved hundreds of thousands of dollars with HydroFLOW S38 water conditioners.', date: '2023-10-15', readTime: '6 min read' },
    { slug: 'drinking-water-diet', title: 'Is Drinking Water Ruining Your Diet?', excerpt: 'A well hydrated body is less likely to retain water, but being picky about the water you drink is critical.', date: '2023-09-22', readTime: '7 min read' },
    { slug: 'kitchen-innovations-award', title: 'HydroFLOW USA Wins 2015 Kitchen Innovations Award', excerpt: 'HydroFLOW was awarded the prestigious 2015 Kitchen innovations award for their innovative technology.', date: '2023-08-10', readTime: '4 min read' },
    { slug: 'save-money-energy-bill', title: 'Top 5 Ways to Save Money on Your Energy Bill', excerpt: "Top 5 ways you can save energy and lower your monthly utility bill by nearly 36%.", date: '2023-07-18', readTime: '8 min read' },
    { slug: 'all-about-filtration', title: 'All About Filtration', excerpt: 'How many different kinds of filters are out there? What filters will remove what? Learn about sand, carbon, and RO filters.', date: '2023-06-25', readTime: '10 min read' },
    { slug: 'water-savings-conservation', title: 'How to Achieve Water Savings and Water Conservation', excerpt: 'Water savings can be achieved through different strategies and activities. Learn the best practices.', date: '2023-05-30', readTime: '7 min read' },
    { slug: 'hard-water-scale-types', title: 'Hard Water Scale is Primarily Calcium and Magnesium, Are There Other Kinds?', excerpt: 'Understanding the different types of scale and how they form in your water system.', date: '2023-04-12', readTime: '6 min read' },
    { slug: 'essential-minerals', title: 'What are Minerals? Which Minerals are Essential?', excerpt: "We've come a long way since the days of simply taking a multivitamin and believing our daily nutrients were achieved.", date: '2023-03-20', readTime: '9 min read' },
    { slug: 'water-softeners-info', title: 'Water Softeners, Water Conditioners and Hard Water Information', excerpt: 'Everything you need to know about water softeners, water conditioners, and hard water.', date: '2023-02-15', readTime: '11 min read' },
    { slug: 'hard-water-facts', title: 'What is Hard Water? Hard Water Facts', excerpt: 'Just the facts about hard water, including instructions on how to create your own hard water.', date: '2023-01-10', readTime: '5 min read' },
    { slug: 'water-softener-negative-effects', title: 'Negative Effects of a Water Softener', excerpt: 'Little known facts about water softeners that you should know before using one, especially in your home.', date: '2022-12-18', readTime: '7 min read' },
    { slug: 'water-filters-filtration-media', title: 'Water Filters and the Different Kinds of Filtration Media', excerpt: 'Learn about the different types of water filters available to improve water quality.', date: '2022-11-22', readTime: '8 min read' }
  ],
  commercial: [
    { slug: 'water-softeners-banned', title: 'Why are Water Softeners Being Banned?', excerpt: 'A brief description of the impact saltwater has on our environment and what states are doing to combat this issue.', date: '2024-11-15', readTime: '6 min read' },
    { slug: 'legionella-control', title: 'Legionella Control with Water Conditioning', excerpt: 'Early spring is a good time to prepare building water systems and prevent legionella with safe, sustainable methods.', date: '2024-10-08', readTime: '7 min read' },
    { slug: 'silicates-effect', title: 'The Effect of Hydropath Technology on Silicates', excerpt: 'A brief description of the effect that HydroFLOW devices have on silicates.', date: '2024-09-20', readTime: '5 min read' },
    { slug: 'sustainable-water-tools', title: 'Sustainable Water Use Tools & Technology', excerpt: 'Saving water has a positive impact on the environment and your ROI. Learn about sustainable electronic water conditioning.', date: '2024-08-12', readTime: '8 min read' },
    { slug: 'scale-removal-solution', title: 'A Solution for Scale Removal', excerpt: 'Learn how HydroFLOW water conditioners gave The Brooksfields Restaurant shiny dishes and easy-to-clean appliances.', date: '2024-07-25', readTime: '6 min read' },
    { slug: 'water-ice-quality', title: "What's in Your Water and Ice", excerpt: 'Ice machines provide an ideal environment for bacteria. Learn how HydroFLOW maintains bacteria and scale control.', date: '2024-06-18', readTime: '7 min read' },
    { slug: 'canine-connection', title: 'Canine Connection', excerpt: 'See how HydroFLOW helped TOPS Veterinary reduce chemicals, bacteria counts, and improve water quality.', date: '2024-05-10', readTime: '6 min read' },
    { slug: 'pool-secondary-disinfection', title: 'Secondary Disinfection for Swimming Pools', excerpt: 'Learn how HydroFLOW water conditioners reduce bacterial contamination and chemical consumption in pools.', date: '2024-04-22', readTime: '7 min read' },
    { slug: 'california-softener-ban', title: 'Why are Water Softeners Being Banned in California?', excerpt: 'Since 2009, California state law allows agencies to ban saltwater softeners that discharge into community sewers.', date: '2024-03-15', readTime: '6 min read' },
    { slug: 'texas-softener-ban', title: 'Why are Water Softeners Being Banned in Texas?', excerpt: 'Texas banned water softeners in 2001, later amending the law to allow use under certain circumstances.', date: '2024-02-20', readTime: '6 min read' }
  ],
  industrial: [
    { slug: 'wastewater-treatment-applications', title: 'HydroFLOW and Wastewater Treatment Plant Applications', excerpt: 'Everything that goes down the drain eventually ends up at a wastewater treatment plant. Learn how HydroFLOW helps.', date: '2024-12-10', readTime: '9 min read' },
    { slug: 'chemical-free-bacteria', title: 'Chemical-Free Bacteria Neutralization', excerpt: 'Produced and flowback water management practices for hydraulic-fracturing processes.', date: '2024-11-05', readTime: '8 min read' },
    { slug: 'cooling-tower-systems', title: 'Cooling Tower Systems', excerpt: 'Cooling tower systems range from air conditioning in hotels to cooling power stations. Learn the basics.', date: '2024-10-18', readTime: '10 min read' },
    { slug: 'fouling-heat-transfer', title: 'What is Fouling and How Does it Affect Heat Transfer Efficiency?', excerpt: 'Scale and biofilm are forms of fouling. Learn how fouling affects surface efficiency.', date: '2024-09-12', readTime: '7 min read' },
    { slug: 'corrosion-hydroflow-help', title: 'What is Corrosion and How Can HydroFLOW Help?', excerpt: 'Corrosion is a natural process that converts refined metal into a more chemically stable form.', date: '2024-08-20', readTime: '8 min read' },
    { slug: 'wastewater-plant-efficiency', title: 'HydroFLOW and Wastewater Treatment Plant Applications', excerpt: 'Learn how HydroFLOW helps wastewater treatment plants operate more efficiently & effectively.', date: '2024-07-15', readTime: '9 min read' },
    { slug: 'cooling-towers-applications', title: 'HydroFLOW Applications - Cooling Towers, Boilers and Equipment Protection', excerpt: 'HydroFLOW reduces and prevents scale built-up in industrial processes and HVAC systems.', date: '2024-06-22', readTime: '10 min read' },
    { slug: 'more-hydropath-less-polymer', title: 'More Hydropath, Less Polymer', excerpt: 'See how HydroFLOW helps reduce struvite in a wastewater facility and reduces polymer usage.', date: '2024-05-18', readTime: '7 min read' },
    { slug: 'membrane-fouling-scaling', title: 'HydroFLOW Solution for Membrane Fouling & Scaling', excerpt: 'Why Hydropath is a promising technology to minimize membrane fouling & scaling.', date: '2024-04-10', readTime: '11 min read' },
    { slug: 'water-award', title: 'HydroFLOW USA Receives Prestigious Water Award', excerpt: 'HydroFLOW USA was honored with the Innovative Technology Award for their Hydropath technology.', date: '2024-03-05', readTime: '5 min read' },
    { slug: 'legionella-frequency-control', title: 'Legionella Control with Frequency', excerpt: 'Learn how HydroFLOW controls bacteria, biofilm, and legionella without using harmful chemicals.', date: '2024-02-12', readTime: '8 min read' }
  ],
  agriculture: [
    { slug: 'antimicrobial-performance', title: 'HydroFLOW Optimizes Antimicrobial Performance', excerpt: "Hydropath's eco-friendly technology controls bacteria and fungi in apple flume water systems.", date: '2024-10-15', readTime: '7 min read' },
    { slug: 'algae-growth-reduction', title: 'HydroFLOW Dramatically Reduces Algae Growth', excerpt: 'Learn how HydroFLOW retains and reduces algae growth while reducing backwash time and chemical usage.', date: '2024-08-20', readTime: '8 min read' },
    { slug: 'organic-farm-green-tech', title: 'Organic Farm - This 100% Green Technology Really Works', excerpt: 'Learn how HydroFLOW green technology helped a family-owned organic farm with clean, clear water.', date: '2024-06-12', readTime: '6 min read' }
  ],
  marine: [
    { slug: 'ray-shipping-fleet', title: 'Ray Shipping Equips its Entire Fleet with Hydropath Marine Units', excerpt: '"Hydropath Marine installation is one of the best investments recently made."', date: '2024-09-25', readTime: '6 min read' },
    { slug: 'hermes-leader-report', title: 'M/V Hermes Leader Follow Up Report', excerpt: "An investigation into Hydropath Marine's ability to replace UV sterilizers and treat fresh water against bacteria.", date: '2024-07-18', readTime: '9 min read' },
    { slug: 'marine-scaling-be-gone', title: 'Hydropath Marine: Scaling Be Gone', excerpt: 'Learn how ship owners can combat scale, bacteria, algae and biofouling with Hydropath Marine onboard treatment.', date: '2024-05-10', readTime: '8 min read' }
  ]
};

export default function BlogList() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || 'residential';
  
  const blogs = blogData[category] || [];
  const CategoryIcon = getCategoryIcon(category);
  const gradientColor = getCategoryColor(category);

  return (
    <div>
      {/* Hero Section */}
      <section className={`relative pt-32 pb-16 bg-gradient-to-br ${gradientColor} overflow-hidden`}>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <CategoryIcon className="w-8 h-8 text-white" />
              <Badge className="bg-white/20 text-white hover:bg-white/20 capitalize text-lg px-4 py-1">
                {category}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 capitalize">
              {category} Blog
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Expert insights, tips, and news for {category} water treatment solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.05, 0.5) }}
              >
                <Link to={createPageUrl('BlogDetail') + '?category=' + category + '&slug=' + blog.slug}>
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-all group cursor-pointer">
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {blog.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {blog.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      
                      <p className="text-slate-600 mb-4 line-clamp-3">
                        {blog.excerpt}
                      </p>
                      
                      <div className="flex items-center text-cyan-600 font-medium group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
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
              Ready to Improve Your Water Quality?
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Contact us to learn how HydroFLOW can solve your water treatment challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Products')}>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8 py-6">
                  Shop Products
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