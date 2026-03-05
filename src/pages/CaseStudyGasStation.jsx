import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { createPageUrl } from '@/utils';

function getCategoryIcon(category) {
  const icons = {
    commercial: () => <div className="w-6 h-6 bg-cyan-400 rounded-full" />
  };
  return icons[category] || (() => <div />);
}

function formatBlogContent(content) {
  return content;
}

export default function CaseStudyGasStation() {
  const category = 'commercial';
  
  const caseStudy = {
    title: 'Scale Reduction at a Gas Station and Convenience Store Chain',
    date: '2023-02-28',
    readTime: '8 min read',
    content: `
      <h2>The Customer</h2>
      
      <p>This gas station and convenience store chain has over 400 locations across 12 states. The stores sell fresh-made food items such as burritos, sandwiches, pizzas, toasted subs, cookies and coffee. Looking to reduce scale buildup and maintenance costs, the customer chose to utilize <i>Hydro</i>FLOW s38 and hs40 devices to treat coffee makers, food warmers, ice machines, water heaters and fixtures.</p>
      
      <h2>The Challenge</h2>
      
      <p>The chain faced significant scale accumulation problems across their store locations. Hard water deposits were building up on critical equipment including water heaters, coffee makers, food warmers, and ice machines. This scale buildup required frequent maintenance, reduced equipment efficiency, and impacted operational costs across all 400+ locations.</p>
      
      <h2><strong>HydroFLOW Water Conditioners</strong></h2>
      
      <p>Hydropath technology powers the <i>Hydro</i>FLOW devices which are highly efficient, non-intrusive electronic descalers that are installed on the water pipe entering your home or business. <i>Hydro</i>FLOW treats fluids by inducing a robust yet harmless signal of 150kHz throughout plumbing systems made of any material, including PEX and PVC.</p>
      
      <p>For this installation, the chain used:</p>
      <ul>
        <li><strong>s38 (Pearl Plus):</strong> For pipes up to 1.5" outer diameter, used on older store water heaters and all ice machines</li>
        <li><strong>hs40:</strong> For pipes up to 2.5" outer diameter, used on newer store water heaters with larger diameter cold water pipes</li>
      </ul>
      
      <h2><strong>Installation Points</strong></h2>
      
      <p><strong>Older Stores:</strong> Older store locations have a ¾ inch cold water pipe entering the water heater, requiring an s38 (now Pearl Plus) device.</p>
      
      <p><strong>Newer Stores:</strong> Newer store locations have a 1 ¼ inch cold water pipe entering the water heater, requiring an hs40 device.</p>
      
      <p><strong>Ice Machines:</strong> All stores have a ¾ inch cold water pipe entering the ice machine, requiring an s38 (now Pearl Plus) device for each unit.</p>
      
      <h2><strong>Results - Fixtures</strong></h2>
      
      <p>Within three months of installation, the results were visible and impressive. Scale removal occurred without manual cleaning. Loose scale that had accumulated over time was released from piping in powdery form, which could be easily rinsed away. Fixtures that previously required intensive manual cleaning became notably cleaner with minimal intervention.</p>
      
      <h2><strong>Results - Food Warmer</strong></h2>
      
      <p>Store managers reported dramatic improvements in food warmer performance. One manager stated: <i>"After a few days of using HydroFLOW, we noticed hard scale is not sticking to the heating plate; the residue is powdery and easy to clean."</i></p>
      
      <p>The scale that was previously forming as hard deposits began converting to a powdery residue that could be easily wiped off without damaging equipment or voiding warranties. This was particularly important because acid cleaning damages seals and voids the manufacturer's warranty of food warmers.</p>
      
      <h2><strong>Results - Coffee Makers</strong></h2>
      
      <p>Coffee makers showed significant improvement within three months. Scale removal occurred naturally without manual cleaning, and the equipment maintained much better performance and appearance.</p>
      
      <h2><strong>Summary of Results</strong></h2>
      
      <ul>
        <li><i>Hydro</i>FLOW s38 and hs40 devices visibly reduced hard scale accumulation in key areas around the stores</li>
        <li>The heating elements of the water heaters are noticeably cleaner</li>
        <li>The units are positively impacting ice machines by reducing scale and biofilm accumulation</li>
        <li>Maintenance associated with cleaning sinks, food warmers, fixtures, cooking areas and coffee makers has greatly reduced</li>
        <li>The estimated return on investment for a typical store is between 6 to 12 months</li>
        <li>The customer is in the process of installing <i>Hydro</i>FLOW devices in other stores that suffer from scale related problems</li>
        <li>To date, over 30 locations are protected from the harmful effects of scale and biofilm</li>
      </ul>
      
      <h2><strong>2023 Updates</strong></h2>
      
      <p><strong>Water Heaters:</strong> The water heaters in the stores equipped with <i>Hydro</i>FLOW for over 6 months have descaled and are running at higher efficiency, while requiring less frequent servicing. Half a pound of purged scale was recovered from a single store's water heater, demonstrating the significant scale buildup that was removed. Loose scale powder collects in the bottom of tanks and rinses out easily.</p>
      
      <p><strong>Food Warmers:</strong> Acid cleaning damages the seals and voids the manufacturer's warranty of food warmers. With <i>Hydro</i>FLOW there is no need to acid clean them. Daily maintenance is less labor intensive and keeps the warranty valid.</p>
      
      <p><strong>Ice Machines:</strong> The ice machines in the <i>Hydro</i>FLOW equipped stores are on a quarterly maintenance schedule and have NOT required a technician to take them down for cleaning over the last year. In the past, cleaning was quarterly.</p>
      
      <p><strong>Smoothie Machines:</strong> The smoothie machines had not been a priority during initial testing, but after a year it was noticed that the stores with <i>Hydro</i>FLOW did not have to call in a service tech to clean out the hot water lines in the machines. Before <i>Hydro</i>FLOW, these machines would clog-up with scale every few months requiring a $150 service call.</p>
    `
  };

  const CategoryIcon = getCategoryIcon(category);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to={createPageUrl('CaseStudies')} 
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <CategoryIcon className="w-6 h-6 text-cyan-400" />
              <Badge className="bg-cyan-600 text-white hover:bg-cyan-600 capitalize">
                {category}
              </Badge>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {caseStudy.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-slate-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {caseStudy.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {caseStudy.readTime}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-8 md:p-12 shadow-xl border-0">
              <div 
                className="prose prose-lg prose-slate max-w-none 
                prose-headings:font-extrabold prose-headings:text-slate-900
                prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:pb-4 prose-h2:border-b-2 prose-h2:border-cyan-200
                prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-6 prose-h3:text-cyan-700 prose-h3:font-bold
                prose-p:text-slate-700 prose-p:leading-loose prose-p:mb-10 prose-p:text-lg
                prose-ul:my-8 prose-ul:space-y-4 prose-ul:ml-6
                prose-li:text-slate-700 prose-li:leading-loose prose-li:text-lg prose-li:marker:text-cyan-600
                prose-ol:my-8 prose-ol:space-y-4 prose-ol:ml-6
                prose-strong:text-slate-900 prose-strong:font-bold
                prose-a:text-cyan-600 prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-l-4 prose-blockquote:border-cyan-500 prose-blockquote:bg-cyan-50 prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:italic prose-blockquote:my-10 prose-blockquote:rounded-r-lg
                prose-img:rounded-xl prose-img:shadow-xl prose-img:my-10 prose-img:border prose-img:border-slate-200"
                dangerouslySetInnerHTML={{ __html: formatBlogContent(caseStudy.content) }}
              />
            </Card>
          </motion.div>

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex items-center justify-between p-6 bg-slate-50 rounded-2xl"
          >
            <div className="flex items-center gap-3">
              <Share2 className="w-5 h-5 text-slate-600" />
              <span className="font-semibold text-slate-900">Share this case study</span>
            </div>
            <Button variant="outline" className="rounded-full">
              Share
            </Button>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Interested in Our Solutions?
            </h3>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              Learn more about how HydroFLOW can improve your water quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Products')}>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                  Shop Products
                </Button>
              </Link>
              <Link to={createPageUrl('Contact')}>
                <Button variant="outline">
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