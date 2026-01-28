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
    { slug: 'water-quality-health-resolution', title: 'Why Water Quality Should Be Your Top Health Resolution', excerpt: 'Water quality is an important issue year-round. Learn about the fundamental importance of water and how to ensure your water quality contributes to your health.', date: '2025-01-15', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&h=600&fit=crop' },
    { slug: 'different-types-of-water', title: 'What are the Different Types of Water?', excerpt: 'Water comes in many forms from many places. Learn about the different types of water and what makes each one unique.', date: '2024-12-20', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop' },
    { slug: 'water-myths', title: 'Water Myths', excerpt: "We all grew up hearing certain 'facts' about water. It's time to separate fact from fiction with scientific understanding.", date: '2024-11-10', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1582719471137-c3967ffb857f?w=800&h=600&fit=crop' },
    { slug: 'purge-water-heater', title: 'How to Purge your Water Heater', excerpt: 'Purging your water heater is essential to keep it functioning optimally. Step-by-step instructions for gas and electric water heaters.', date: '2024-10-15', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=800&h=600&fit=crop' },
    { slug: 'water-conditioner-vs-softener', title: 'Water Conditioner Vs. Water Softener', excerpt: 'Understanding the differences between water conditioners and water softeners to choose the right system for your needs.', date: '2024-09-22', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop' },
    { slug: 'water-terminology', title: 'Water Terminology', excerpt: 'Water terminologies explained. Learn about this seemingly plain liquid that has a whole lot more going on than you think.', date: '2024-08-18', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1564053489984-317bbd824340?w=800&h=600&fit=crop' },
    { slug: 'chemicals-in-water', title: 'How are Chemicals Getting in My Water?', excerpt: 'Most chemicals that end up in our water are a result of being directly added or from runoff. Learn how to protect yourself.', date: '2024-07-30', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop' },
    { slug: 'ionic-colloidal-minerals', title: 'Colloidal and Ionic Minerals vs Pill Vitamins', excerpt: 'Making sense of all the vitamin and mineral supplements on the grocery store shelves.', date: '2024-06-12', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop' },
    { slug: 'tankless-water-heaters', title: 'Tankless Water Heater Vs. Tank Water Heater', excerpt: 'Comparing two types of residential water heating systems to help you make the right choice.', date: '2024-05-20', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&h=600&fit=crop' },
    { slug: 'water-softening-history', title: 'Water Softening Systems and the History of Water Softeners', excerpt: 'Explore the history of water softening systems and why the need to soften water became important.', date: '2024-04-15', readTime: '9 min read', image: 'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?w=800&h=600&fit=crop' },
    { slug: 'homeowner-excellent-results', title: 'Homeowner Reports Excellent Results', excerpt: 'Learn how a HydroFLOW s38 gave a homeowner soft water, no water spots, while killing bacteria and preventing scale.', date: '2024-03-10', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop' },
    { slug: 'skeptical-employee', title: 'Skeptical Employee Becomes a HydroFLOW Believer', excerpt: 'A newly hired skeptical employee tests the HydroFLOW device at the corporate testing facility.', date: '2024-02-18', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop' },
    { slug: 'pathogens-drinking-water', title: 'Could There Be Pathogens in Your Drinking Water?', excerpt: 'Water treatment device reduces the probability of pathogens from multiplying in water.', date: '2024-01-25', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&h=600&fit=crop' },
    { slug: 'eco-friendly-water-treatment', title: 'Choosing the Right Eco-Friendly Water Treatment Option', excerpt: "Let's explore the varying types of water treatments and the unique ways they function.", date: '2023-12-08', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop' },
    { slug: 'salt-in-water', title: 'Salt in Your Water?', excerpt: "It's easy to track your sodium intake from food, but sodium can get into our systems without us knowing it.", date: '2023-11-20', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784422?w=800&h=600&fit=crop' },
    { slug: 'apartment-complex-savings', title: 'Scale Reduction Savings in Apartment Complex', excerpt: 'Learn how Greenfield Village saved hundreds of thousands of dollars with HydroFLOW S38 water conditioners.', date: '2023-10-15', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop' },
    { slug: 'drinking-water-diet', title: 'Is Drinking Water Ruining Your Diet?', excerpt: 'A well hydrated body is less likely to retain water, but being picky about the water you drink is critical.', date: '2023-09-22', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop' },
    { slug: 'kitchen-innovations-award', title: 'HydroFLOW USA Wins 2015 Kitchen Innovations Award', excerpt: 'HydroFLOW was awarded the prestigious 2015 Kitchen innovations award for their innovative technology.', date: '2023-08-10', readTime: '4 min read', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=600&fit=crop' },
    { slug: 'save-money-energy-bill', title: 'Top 5 Ways to Save Money on Your Energy Bill', excerpt: "Top 5 ways you can save energy and lower your monthly utility bill by nearly 36%.", date: '2023-07-18', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop' },
    { slug: 'all-about-filtration', title: 'All About Filtration', excerpt: 'How many different kinds of filters are out there? What filters will remove what? Learn about sand, carbon, and RO filters.', date: '2023-06-25', readTime: '10 min read', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop' },
    { slug: 'water-savings-conservation', title: 'How to Achieve Water Savings and Water Conservation', excerpt: 'Water savings can be achieved through different strategies and activities. Learn the best practices.', date: '2023-05-30', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1586281380614-27eb5e57f263?w=800&h=600&fit=crop' },
    { slug: 'hard-water-scale-types', title: 'Hard Water Scale is Primarily Calcium and Magnesium, Are There Other Kinds?', excerpt: 'Understanding the different types of scale and how they form in your water system.', date: '2023-04-12', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop' },
    { slug: 'essential-minerals', title: 'What are Minerals? Which Minerals are Essential?', excerpt: "We've come a long way since the days of simply taking a multivitamin and believing our daily nutrients were achieved.", date: '2023-03-20', readTime: '9 min read', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=600&fit=crop' },
    { slug: 'water-softeners-info', title: 'Water Softeners, Water Conditioners and Hard Water Information', excerpt: 'Everything you need to know about water softeners, water conditioners, and hard water.', date: '2023-02-15', readTime: '11 min read', image: 'https://images.unsplash.com/photo-1563207153-f403bf289096?w=800&h=600&fit=crop' },
    { slug: 'hard-water-facts', title: 'What is Hard Water? Hard Water Facts', excerpt: 'Just the facts about hard water, including instructions on how to create your own hard water.', date: '2023-01-10', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=800&h=600&fit=crop' },
    { slug: 'water-softener-negative-effects', title: 'Negative Effects of a Water Softener', excerpt: 'Little known facts about water softeners that you should know before using one, especially in your home.', date: '2022-12-18', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1550338300-f9a475b50ba2?w=800&h=600&fit=crop' },
    { slug: 'water-filters-filtration-media', title: 'Water Filters and the Different Kinds of Filtration Media', excerpt: 'Learn about the different types of water filters available to improve water quality.', date: '2022-11-22', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1580926191121-3fa3d204f1f3?w=800&h=600&fit=crop' }
  ],
  commercial: [
    { slug: 'water-softeners-banned', title: 'Why are Water Softeners Being Banned?', excerpt: 'A brief description of the impact saltwater has on our environment and what states are doing to combat this issue.', date: '2024-11-15', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=800&h=600&fit=crop' },
    { slug: 'legionella-control', title: 'Legionella Control with Water Conditioning', excerpt: 'Early spring is a good time to prepare building water systems and prevent legionella with safe, sustainable methods.', date: '2024-10-08', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop' },
    { slug: 'silicates-effect', title: 'The Effect of Hydropath Technology on Silicates', excerpt: 'A brief description of the effect that HydroFLOW devices have on silicates.', date: '2024-09-20', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop' },
    { slug: 'sustainable-water-tools', title: 'Sustainable Water Use Tools & Technology', excerpt: 'Saving water has a positive impact on the environment and your ROI. Learn about sustainable electronic water conditioning.', date: '2024-08-12', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop' },
    { slug: 'scale-removal-solution', title: 'A Solution for Scale Removal', excerpt: 'Learn how HydroFLOW water conditioners gave The Brooksfields Restaurant shiny dishes and easy-to-clean appliances.', date: '2024-07-25', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop' },
    { slug: 'water-ice-quality', title: "What's in Your Water and Ice", excerpt: 'Ice machines provide an ideal environment for bacteria. Learn how HydroFLOW maintains bacteria and scale control.', date: '2024-06-18', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=600&fit=crop' },
    { slug: 'canine-connection', title: 'Canine Connection', excerpt: 'See how HydroFLOW helped TOPS Veterinary reduce chemicals, bacteria counts, and improve water quality.', date: '2024-05-10', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=600&fit=crop' },
    { slug: 'pool-secondary-disinfection', title: 'Secondary Disinfection for Swimming Pools', excerpt: 'Learn how HydroFLOW water conditioners reduce bacterial contamination and chemical consumption in pools.', date: '2024-04-22', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=800&h=600&fit=crop' },
    { slug: 'california-softener-ban', title: 'Why are Water Softeners Being Banned in California?', excerpt: 'Since 2009, California state law allows agencies to ban saltwater softeners that discharge into community sewers.', date: '2024-03-15', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?w=800&h=600&fit=crop' },
    { slug: 'texas-softener-ban', title: 'Why are Water Softeners Being Banned in Texas?', excerpt: 'Texas banned water softeners in 2001, later amending the law to allow use under certain circumstances.', date: '2024-02-20', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1561752888-21eb3b67eb4e?w=800&h=600&fit=crop' }
  ],
  industrial: [
    { slug: 'wastewater-treatment-applications', title: 'HydroFLOW and Wastewater Treatment Plant Applications', excerpt: 'Everything that goes down the drain eventually ends up at a wastewater treatment plant. Learn how HydroFLOW helps.', date: '2024-12-10', readTime: '9 min read', image: 'https://images.unsplash.com/photo-1581093458791-9d42e7d2c8b4?w=800&h=600&fit=crop' },
    { slug: 'chemical-free-bacteria', title: 'Chemical-Free Bacteria Neutralization', excerpt: 'Produced and flowback water management practices for hydraulic-fracturing processes.', date: '2024-11-05', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop' },
    { slug: 'cooling-tower-systems', title: 'Cooling Tower Systems', excerpt: 'Cooling tower systems range from air conditioning in hotels to cooling power stations. Learn the basics.', date: '2024-10-18', readTime: '10 min read', image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop' },
    { slug: 'fouling-heat-transfer', title: 'What is Fouling and How Does it Affect Heat Transfer Efficiency?', excerpt: 'Scale and biofilm are forms of fouling. Learn how fouling affects surface efficiency.', date: '2024-09-12', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=600&fit=crop' },
    { slug: 'corrosion-hydroflow-help', title: 'What is Corrosion and How Can HydroFLOW Help?', excerpt: 'Corrosion is a natural process that converts refined metal into a more chemically stable form.', date: '2024-08-20', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop' },
    { slug: 'wastewater-plant-efficiency', title: 'HydroFLOW and Wastewater Treatment Plant Applications', excerpt: 'Learn how HydroFLOW helps wastewater treatment plants operate more efficiently.', date: '2024-07-15', readTime: '9 min read', image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b4?w=800&h=600&fit=crop' },
    { slug: 'cooling-towers-applications', title: 'HydroFLOW Applications - Cooling Towers, Boilers and Equipment Protection', excerpt: 'HydroFLOW reduces and prevents scale built-up in industrial processes and HVAC systems.', date: '2024-06-22', readTime: '10 min read', image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=600&fit=crop' },
    { slug: 'more-hydropath-less-polymer', title: 'More Hydropath, Less Polymer', excerpt: 'See how HydroFLOW helps reduce struvite in a wastewater facility and reduces polymer usage.', date: '2024-05-18', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop' },
    { slug: 'membrane-fouling-scaling', title: 'HydroFLOW Solution for Membrane Fouling & Scaling', excerpt: 'Why Hydropath is a promising technology to minimize membrane fouling & scaling.', date: '2024-04-10', readTime: '11 min read', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop' },
    { slug: 'water-award', title: 'HydroFLOW USA Receives Prestigious Water Award', excerpt: 'HydroFLOW USA was honored with the Innovative Technology Award for their Hydropath technology.', date: '2024-03-05', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?w=800&h=600&fit=crop' },
    { slug: 'legionella-frequency-control', title: 'Legionella Control with Frequency', excerpt: 'Learn how HydroFLOW controls bacteria, biofilm, and legionella without using harmful chemicals.', date: '2024-02-12', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&h=600&fit=crop' }
  ],
  agriculture: [
    { slug: 'antimicrobial-performance', title: 'HydroFLOW Optimizes Antimicrobial Performance', excerpt: "Hydropath's eco-friendly technology controls bacteria and fungi in apple flume water systems.", date: '2024-10-15', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop' },
    { slug: 'algae-growth-reduction', title: 'HydroFLOW Dramatically Reduces Algae Growth', excerpt: 'Learn how HydroFLOW retains and reduces algae growth while reducing backwash time and chemical usage.', date: '2024-08-20', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop' },
    { slug: 'organic-farm-green-tech', title: 'Organic Farm - This 100% Green Technology Really Works', excerpt: 'Learn how HydroFLOW green technology helped a family-owned organic farm with clean, clear water.', date: '2024-06-12', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop' }
  ],
  marine: [
    { slug: 'ray-shipping-fleet', title: 'Ray Shipping Equips its Entire Fleet with Hydropath Marine Units', excerpt: '"Hydropath Marine installation is one of the best investments recently made."', date: '2024-09-25', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1570377540313-9a44b8ab50d3?w=800&h=600&fit=crop' },
    { slug: 'hermes-leader-report', title: 'M/V Hermes Leader Follow Up Report', excerpt: "An investigation into Hydropath Marine's ability to replace UV sterilizers and treat fresh water against bacteria.", date: '2024-07-18', readTime: '9 min read', image: 'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=800&h=600&fit=crop' },
    { slug: 'marine-scaling-be-gone', title: 'Hydropath Marine: Scaling Be Gone', excerpt: 'Learn how ship owners can combat scale, bacteria, algae and biofouling with Hydropath Marine onboard treatment.', date: '2024-05-10', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop' }
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
                  <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer border-0">
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {blog.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {blog.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors line-clamp-2 leading-snug">
                        {blog.title}
                      </h3>
                      
                      <p className="text-slate-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                        {blog.excerpt}
                      </p>
                      
                      <div className="flex items-center text-cyan-600 font-semibold text-sm group-hover:gap-3 transition-all">
                        Read Full Article
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