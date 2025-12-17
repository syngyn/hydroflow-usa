import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2, Factory, Building2, Home, Leaf, Ship } from 'lucide-react';
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

// Placeholder blog content - in a real app, this would come from a CMS or API
const blogContent = {
  'water-quality-health-resolution': {
    title: 'Why Water Quality Should Be Your Top Health Resolution: A Comprehensive Guide to Safe, Clean Water',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'residential',
    content: `
      <p>Water quality is an important issue year-round, but the start of the new year is an excellent moment to consider just how much so. As we set our health goals and resolutions, understanding the fundamental importance of water quality should be at the top of our list.</p>
      
      <h2>The Foundation of Health</h2>
      <p>Water makes up approximately 60% of our body weight and is involved in nearly every bodily function. From regulating body temperature to transporting nutrients and oxygen to cells, water is literally the foundation of life. However, not all water is created equal.</p>
      
      <h2>Common Water Quality Issues</h2>
      <p>Many homes face water quality challenges that can impact health:</p>
      <ul>
        <li>Hard water minerals (calcium and magnesium)</li>
        <li>Chlorine and chloramines from municipal treatment</li>
        <li>Heavy metals like lead and copper</li>
        <li>Bacteria and other microorganisms</li>
        <li>Industrial and agricultural contaminants</li>
      </ul>
      
      <h2>How to Ensure Your Water Quality</h2>
      <p>Taking action to improve your water quality is easier than you might think:</p>
      <ol>
        <li><strong>Test Your Water:</strong> Start with a comprehensive water test to understand what's in your water.</li>
        <li><strong>Choose the Right Treatment:</strong> Based on your test results, select appropriate water treatment solutions.</li>
        <li><strong>Regular Maintenance:</strong> Keep your water treatment systems well-maintained for optimal performance.</li>
        <li><strong>Stay Informed:</strong> Keep up with local water quality reports and any advisories.</li>
      </ol>
      
      <h2>The HydroFLOW Advantage</h2>
      <p>HydroFLOW water conditioners offer a chemical-free, eco-friendly solution to many water quality issues. By using advanced Hydropath technology, these systems can:</p>
      <ul>
        <li>Prevent scale buildup without salt</li>
        <li>Reduce bacteria and biofilm</li>
        <li>Protect appliances and plumbing</li>
        <li>Improve water quality throughout your home</li>
      </ul>
      
      <p>Make water quality your top health priority this year. Your body will thank you!</p>
    `
  }
};

export default function BlogDetail() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || 'residential';
  const slug = searchParams.get('slug');
  
  const blog = blogContent[slug];
  
  if (!blog) {
    return (
      <div className="min-h-screen pt-32 pb-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Blog Post Not Found</h1>
          <Link to={createPageUrl('BlogList') + '?category=' + category}>
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {category.charAt(0).toUpperCase() + category.slice(1)} Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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
            to={createPageUrl('BlogList') + '?category=' + category} 
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {category.charAt(0).toUpperCase() + category.slice(1)} Blog
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
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-slate-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {blog.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {blog.readTime}
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
            <Card className="p-8 md:p-12">
              <div 
                className="prose prose-slate max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-ul:my-4 prose-li:text-slate-600 prose-strong:text-slate-900"
                dangerouslySetInnerHTML={{ __html: blog.content }}
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
              <span className="font-semibold text-slate-900">Share this article</span>
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