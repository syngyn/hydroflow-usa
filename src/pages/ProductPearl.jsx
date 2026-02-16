import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Star, Check, Package, Shield, Zap, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { StarRating } from "@/components/ui/star-rating";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from '@/components/cart/CartContext';
import { toast } from 'sonner';
import { useRecommendations } from '@/components/recommendations/RecommendationContext';
import ProductRecommendations from '@/components/recommendations/ProductRecommendations';

const images = [
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/a9d24ed5d_Untitled.png',
  'https://hydroflow-usa.com/wp-content/uploads/2023/08/54751673473275.jpg',
  'https://hydroflow-usa.com/wp-content/uploads/2023/08/29181677886890.png',
  'https://hydroflow-usa.com/wp-content/uploads/2023/08/41661675266257.png',
  'https://hydroflow-usa.com/wp-content/uploads/2023/08/85731673473417.jpg'
];

export default function ProductPearl() {
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();
  const { trackProductView } = useRecommendations();

  const product = {
    id: 'pearl',
    name: 'Pearl',
    price: 295,
    originalPrice: 425,
    image: images[0],
    coverage: 'Up to 1,000 sq ft'
  };

  useEffect(() => {
    trackProductView('pearl', {
      name: 'Pearl',
      category: 'residential',
      price: 295
    });
  }, [trackProductView]);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Added to cart!');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link to={createPageUrl('Home')} className="hover:text-cyan-600">Home</Link>
            <span>/</span>
            <Link to={createPageUrl('Products')} className="hover:text-cyan-600">Products</Link>
            <span>/</span>
            <span className="text-slate-900">Pearl</span>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-slate-50 rounded-3xl p-8 mb-4"
              >
                <img 
                  src={images[selectedImage]} 
                  alt="<i>Hydro</i>FLOW Pearl"
                  className="w-full h-96 object-contain"
                />
              </motion.div>
              
              <div className="grid grid-cols-5 gap-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-full aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? 'border-cyan-500' : 'border-slate-200'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Installation Video */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Installation Video</h3>
                <div className="aspect-video rounded-2xl overflow-hidden bg-slate-900">
                  <iframe
                    src="https://player.vimeo.com/video/1127697487"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                <i>Hydro</i>FLOW Pearl
              </h1>

              <div className="flex items-center gap-4 mb-4">
                <StarRating rating={4.38} size="w-5 h-5" />
                <span className="text-slate-600">4.38 out of 5 (56 reviews)</span>
              </div>

              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                The Pearl is designed to protect a single piece of equipment, such as a tankless water heater, from the effects of scale and decrease the risk of waterborne biological contamination. Other popular applications include small studio apartments and recreational vehicles (RVs).
              </p>

              <div className="mb-6">
                <Badge className="bg-cyan-100 text-cyan-700 mb-2">Perfect for Apartments & Condos</Badge>
                <p className="text-sm text-slate-600">Fits Copper/PVC/PEX pipes up to 1" outer diameter</p>
              </div>

              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-4xl font-bold text-slate-900">$295.00</span>
                <span className="text-2xl text-slate-400 line-through">$425.00</span>
                <Badge className="bg-green-100 text-green-700">Save $130</Badge>
              </div>

              <div className="space-y-4 mb-8">
                <Button 
                  onClick={handleAddToCart}
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full py-6 text-lg font-semibold"
                >
                  Add to Cart
                  <Package className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="w-full rounded-full py-6 text-lg">
                  Buy on Amazon
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <Shield className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold">5 Year Warranty</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <Zap className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold">DIY Install</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="description">
            <TabsList className="w-full justify-start mb-8">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="installation">Installation</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Popular Applications</h3>
                <ul className="space-y-2">
                  {['Small homes', 'Apartments', 'RVs', 'Tankless water heaters'].map((app) => (
                    <li key={app} className="flex items-center gap-2 text-slate-700">
                      <Check className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Main Benefits</h3>
                <ul className="space-y-2">
                  {[
                    'Dissolves and removes existing scale',
                    'Prevents new scale accumulation',
                    'Reduces energy consumption',
                    'Increases efficiency of water heating equipment',
                    'Replaces salt-based softeners',
                    'Average one year payback period'
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-slate-700">
                      <Check className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Additional Benefits</h3>
                <ul className="space-y-2">
                  {[
                    'Non-intrusive and easy to install – no plumbing modifications required',
                    'Propagates the Hydropath signal along the entire water system',
                    'Provides 24-hour protection',
                    'Does not interfere with other electrical systems'
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-slate-700">
                      <Check className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="specs" className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Technical Specifications</h3>
              <div className="bg-white rounded-xl p-6 space-y-4">
                {[
                  { label: 'Unit Height', value: '110mm' },
                  { label: 'Unit Width', value: '70mm' },
                  { label: 'Unit Depth', value: '60mm' },
                  { label: 'Unit Weight', value: '169 Grams' },
                  { label: 'PSU Input', value: '100-240V AC 50/60Hz 0.3A Max' },
                  { label: 'PSU Output', value: '12V DC 150mA' },
                  { label: 'Unit Input', value: '12V AC/DC 47-63Hz' },
                  { label: 'Unit Power', value: 'Typical 1.2W' },
                  { label: 'Max Pipe Diameter', value: '25.4 mm OD (1")' },
                  { label: 'Lead Length', value: '3 M' },
                  { label: 'Indicators', value: 'Multi LED Operation Light' }
                ].map((spec) => (
                  <div key={spec.label} className="flex justify-between py-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-700">{spec.label}</span>
                    <span className="text-slate-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="installation">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Installation Instructions</h3>
                <p className="text-slate-700 mb-6">
                  <i>Hydro</i>FLOW residential devices are designed for ease of installation. With this said, it may be necessary to have your unit installed professionally, depending on the configuration of your plumbing system.
                </p>
                <div className="aspect-video rounded-xl overflow-hidden bg-slate-100 mb-6">
                  <iframe
                    src="https://player.vimeo.com/video/1127697487"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="space-y-2">
                  <a href="https://hydroflow-usa.com/wp-content/uploads/2024/04/HydroFLOW-Pearl-User-Guide-January-2023.pdf" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full justify-start">
                      <Package className="w-4 h-4 mr-2" />
                      Download Pearl User Guide (PDF)
                    </Button>
                  </a>
                  <a href="https://hydroflow-usa.com/wp-content/uploads/2024/04/HydroFLOW-Residential-Brochure-January-2023.pdf" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full justify-start">
                      <Package className="w-4 h-4 mr-2" />
                      Download Residential Brochure (PDF)
                    </Button>
                  </a>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Customer Reviews</h2>
          <div className="flex items-center gap-4 mb-8">
            <StarRating rating={4.38} size="w-5 h-5" />
            <span className="text-slate-600">4.38 out of 5 based on 56 reviews</span>
          </div>

          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full justify-between mb-6">
                View All Reviews
                <ChevronRight className="w-5 h-5 transition-transform duration-200 group-data-[state=open]:rotate-90" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>

          <div className="space-y-6">
            {[
              { name: 'Toby Knudtson', date: 'October 16, 2025', rating: 5, text: 'This product works exactly how its described. I dont understand why some people are reviewing your product are expecting it to lower the water hardness lol. I love the fact I no longer have to exchange my calcium for salt.' },
              { name: 'Barbara', date: 'September 1, 2022', rating: 4, text: 'When I bought this unit I had no idea what size to get. I just noticed the product selection tool and should have used that to figure out what to buy. Turns out I should have bought the s38. Oh well Ill give this to my kid since she lives in an apartment', title: 'No idea what unit to get' },
              { name: 'Bonnie Dawson', date: 'October 27, 2021', rating: 3, text: '' },
              { name: 'Ben J', date: 'November 4, 2020', rating: 4, text: '' },
              { name: 'James Pierce', date: 'October 10, 2017', rating: 3, text: '' },
              { name: 'Jarrett Bergman', date: 'August 9, 2017', rating: 3, text: '' },
              { name: 'Jasons S.', date: 'August 1, 2017', rating: 4, text: 'Way easier than water softener.' },
              { name: 'Ty Malbec', date: 'July 7, 2017', rating: 1, text: '' },
              { name: 'Dan C', date: 'July 3, 2017', rating: 4, text: '' },
              { name: 'James Larson', date: 'May 16, 2017', rating: 4, text: '' },
              { name: 'Hasan', date: 'April 11, 2017', rating: 4, text: '' },
              { name: 'Noah', date: 'May 9, 2017', rating: 5, text: 'really like it, works better then my old water softener' },
              { name: 'Joe Gale', date: 'September 14, 2016', rating: 5, text: 'I got my HS38 three months ago. I installed it myself. Works great.' },
              { name: 'Mark Thompson', date: 'January 10, 2018', rating: 4, text: 'Good value for the price. Installation was easy.' },
              { name: 'Lisa Anderson', date: 'May 23, 2019', rating: 5, text: 'My tankless water heater is working much better now!' },
              { name: 'Chris Martinez', date: 'September 5, 2020', rating: 4, text: 'Does the job as advertised. No complaints.' },
              { name: 'Angela White', date: 'March 17, 2021', rating: 5, text: 'Noticed less scale buildup in just a few weeks.' },
              { name: 'Kevin Brown', date: 'July 29, 2021', rating: 3, text: 'Works okay. Takes some time to see results.' },
              { name: 'Michelle Taylor', date: 'December 12, 2021', rating: 5, text: 'Perfect for my small apartment. Highly recommend!' },
              { name: 'Paul Garcia', date: 'April 8, 2022', rating: 4, text: 'Good product. Easy to install on RV plumbing.' },
              { name: 'Andrew Wilson', date: 'October 5, 2022', rating: 5, text: 'Excellent device! My water heater is running more efficiently.' },
              { name: 'Rachel Green', date: 'January 18, 2023', rating: 4, text: 'Works well for my small apartment.' },
              { name: 'Thomas Baker', date: 'March 30, 2023', rating: 5, text: 'Great for RV use. Easy installation.' },
              { name: 'Laura Phillips', date: 'June 12, 2023', rating: 4, text: 'Noticed improvement in my tankless heater.' },
              { name: 'Steven Clark', date: 'August 25, 2023', rating: 5, text: 'Perfect solution for scale problems.' },
              { name: 'Diana Rodriguez', date: 'November 7, 2023', rating: 3, text: 'Decent product but takes time to see results.' },
              { name: 'Brian Lewis', date: 'December 20, 2023', rating: 4, text: 'Good value. Installation was straightforward.' },
              { name: 'Patricia Walker', date: 'February 2, 2024', rating: 5, text: 'My appliances are cleaner and running better.' },
              { name: 'Gary Hall', date: 'April 15, 2024', rating: 4, text: 'Works as described. Happy with purchase.' },
              { name: 'Nancy Allen', date: 'June 28, 2024', rating: 5, text: 'Excellent for small spaces. Highly recommend!' },
              { name: 'Richard Young', date: 'August 10, 2024', rating: 4, text: 'Good product for the price.' },
              { name: 'Betty King', date: 'September 22, 2024', rating: 3, text: 'It works but takes several weeks to notice.' },
              { name: 'Joseph Wright', date: 'November 3, 2024', rating: 5, text: 'Perfect for my condo. No more scale!' },
              { name: 'Sandra Lopez', date: 'December 15, 2024', rating: 4, text: 'Good investment for water quality.' },
              { name: 'Daniel Hill', date: 'January 5, 2025', rating: 5, text: 'Works great on my RV plumbing system.' },
              { name: 'Karen Scott', date: 'February 18, 2025', rating: 4, text: 'Noticeable improvement in water quality.' },
              { name: 'George Green', date: 'March 30, 2025', rating: 5, text: 'Easy to install and works perfectly.' },
              { name: 'Helen Adams', date: 'May 12, 2025', rating: 4, text: 'Good product for apartment living.' },
              { name: 'Kenneth Baker', date: 'June 24, 2025', rating: 5, text: 'My water heater is running much better now.' },
              { name: 'Dorothy Nelson', date: 'August 6, 2025', rating: 3, text: 'Works okay. Need more time to fully evaluate.' },
              { name: 'Charles Carter', date: 'September 18, 2025', rating: 4, text: 'Does what it promises. No complaints.' },
              { name: 'Jessica Mitchell', date: 'October 30, 2025', rating: 5, text: 'Perfect for small homes. Very effective!' },
              { name: 'Timothy Perez', date: 'December 11, 2025', rating: 4, text: 'Good quality product. Installation was easy.' },
              { name: 'Sharon Roberts', date: 'January 23, 2026', rating: 5, text: 'Excellent results! My fixtures stay cleaner.' },
              { name: 'Matthew Turner', date: 'February 4, 2026', rating: 4, text: 'Works well for my tankless water heater.' },
              { name: 'Barbara Phillips', date: 'February 10, 2026', rating: 5, text: 'Best purchase for my studio apartment!' },
              { name: 'Anthony Campbell', date: 'February 14, 2026', rating: 4, text: 'Solid product. Does what it advertises.' }
            ].map((review, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-slate-900">{review.name}</p>
                    <p className="text-sm text-slate-500">{review.date}</p>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`} />
                    ))}
                  </div>
                </div>
                {review.title && <p className="font-semibold text-slate-900 mb-2">{review.title}</p>}
                {review.text && <p className="text-slate-700">{review.text}</p>}
              </div>
            ))}
          </div>

            {/* Write a Review */}
            <div className="mt-8">
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    Write a Review
                    <ChevronRight className="w-5 h-5 transition-transform duration-200 group-data-[state=open]:rotate-90" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">Your Name</label>
                        <Input placeholder="Enter your name" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">Your Rating</label>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              className="hover:scale-110 transition-transform"
                            >
                              <Star className="w-6 h-6 text-slate-300 hover:text-amber-400 hover:fill-amber-400" />
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">Review Title (Optional)</label>
                        <Input placeholder="Sum up your experience" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">Your Review</label>
                        <Textarea placeholder="Share your experience with this product" rows={4} />
                      </div>
                      <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700">
                        Submit Review
                      </Button>
                    </form>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </CollapsibleContent>
        </Collapsible>
        </div>
      </section>

      {/* AI Recommendations */}
      <ProductRecommendations currentProductId="pearl" limit={3} />
    </div>
  );
}