import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Star, Check, Package, Shield, Zap, ArrowRight, Trophy, ChevronRight, ChevronLeft } from 'lucide-react';
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
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/0e2222ce9_hs40.png',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/8f6505e00_30571515406209.png',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/46461f9f7_27941622280698.jpg',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/af2bfc224_30571515406209.png',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/8d5967d4a_567116281577501.jpg'
];

export default function ProductHS40() {
   const [selectedImage, setSelectedImage] = useState(0);
   const { addToCart } = useCart();
   const { trackProductView } = useRecommendations();

   const nextSlide = () => {
     setSelectedImage((prev) => (prev + 1) % images.length);
   };

   const prevSlide = () => {
     setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
   };

  const product = {
    id: 'hs40',
    name: 'HS40',
    price: 1990,
    originalPrice: 2150,
    image: images[0],
    coverage: 'Pools, Spas & Light Commercial'
  };

  useEffect(() => {
    trackProductView('hs40', {
      name: 'HS40',
      category: 'residential',
      price: 1990
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
            <span className="text-slate-900"><i>hs</i>40</span>
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
                 className="relative bg-slate-50 rounded-3xl p-8 mb-4 group"
               >
                 <img 
                   src={images[selectedImage]} 
                   alt="HydroFLOW hs40"
                   className="w-full h-96 object-contain"
                 />

                 {/* Navigation Buttons */}
                 <button
                   onClick={prevSlide}
                   className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                   aria-label="Previous image"
                 >
                   <ChevronLeft className="w-6 h-6 text-slate-900" />
                 </button>
                 <button
                   onClick={nextSlide}
                   className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                   aria-label="Next image"
                 >
                   <ChevronRight className="w-6 h-6 text-slate-900" />
                 </button>

                 {/* Slide Counter */}
                 <div className="absolute bottom-4 right-4 bg-slate-900/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                   {selectedImage + 1} / {images.length}
                 </div>
               </motion.div>
              
              <div className="md:grid grid-cols-5 gap-2 hidden md:flex">
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
                    src="https://player.vimeo.com/video/250662992"
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
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-amber-100 text-amber-700">
                  <Trophy className="w-3 h-3 mr-1" />
                  Award Winner
                </Badge>
                <Badge className="bg-cyan-100 text-cyan-700">Commercial Grade</Badge>
              </div>
              
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                <i>Hydro</i>FLOW <i>hs</i>40
              </h1>

              <div className="flex items-center gap-4 mb-4">
                <StarRating rating={4.79} size="w-5 h-5" />
                <span className="text-slate-600">4.79 out of 5 (43 reviews)</span>
              </div>

              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                The award-winning <i>hs</i>40 water conditioner provides a chemical-free solution for the harmful effects of scale, corrosion, bacteria, and algae in residential, swimming pools, and small commercial applications. In addition, the <i>hs</i>40 increases filtration efficiency via flocculation. This powerful and durable water conditioner provides a fully encapsulated printed circuit board and power supply connection sealed with an 'O' ring. The <i>hs</i>40 fits pipes up to 63mm (2.5") outer diameter.
              </p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                The <i>hs</i>40 device was awarded the prestigious 2015 Kitchen Innovations Award by the National Restaurant Association. This award recognizes and celebrates cutting-edge equipment and technology that specifically improves the "back of the house" operations and benefits foodservice operators.
              </p>

              <div className="mb-6">
                <Badge className="bg-cyan-100 text-cyan-700 mb-2">Perfect for Pools & Commercial</Badge>
                <p className="text-sm text-slate-600">Fits Copper/PVC/PEX pipes up to 2.5" outer diameter</p>
              </div>

              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-4xl font-bold text-slate-900">$1,990.00</span>
                <span className="text-2xl text-slate-400 line-through">$2,150.00</span>
                <Badge className="bg-green-100 text-green-700">Save $160</Badge>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
                <div className="flex items-center gap-2 mb-1">
                  <Trophy className="w-5 h-5 text-amber-600" />
                  <p className="font-semibold text-amber-900">Kitchen Innovations Award</p>
                </div>
                <p className="text-sm text-amber-800">Recognized by the National Restaurant Association</p>
              </div>

              <div className="space-y-4 mb-8">
                <Button 
                  onClick={handleAddToCart}
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full py-6 text-lg font-semibold"
                >
                  Add to Cart
                  <Package className="w-5 h-5 ml-2" />
                </Button>
                <a href="https://www.amazon.com/HydroFLOW-Electronic-Softener-Conditioner-Commercial/dp/B01FZPC7JG?ref_=ast_sto_dp" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full rounded-full py-6 text-lg">
                    Buy on Amazon
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
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
                  {[
                    'Large homes.',
                    'Residential wells.',
                    'Restaurant kitchens.',
                    'Water features.',
                    'Residential and commercial pools and spas.',
                    'Residential and commercial water heaters.'
                  ].map((app) => (
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
                    'Dissolves and removes existing scale.',
                    'Prevents new scale accumulation.',
                    'Deactivates bacteria and algae.',
                    'Prevents and removes biofoul.',
                    'Boosts filtration efficiency.',
                    'Significantly reduces corrosion.'
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-slate-700">
                      <Check className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Financial and Environmental Benefits</h3>
                <ul className="space-y-2">
                  {[
                    'Reduces energy consumption.',
                    'Increases the efficiency of water heating equipment and machinery.',
                    'Eliminates or decreases chemical usage.',
                    'Decreases the need for chemical safety precautions, storage and disposal.',
                    'Reduces maintenance costs.',
                    'Average one year payback period.'
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
                <ul className="space-y-2 mb-4">
                  {[
                    'Non-intrusive and easy to install – no plumbing modifications required.',
                    'Propagates the Hydropath signal along with the entire water system.',
                    'Provides 24-hour protection.',
                    'Does not interfere with other electrical systems.'
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-slate-700">
                      <Check className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-700 mb-4">
                  Installation of this device does not replace periodic equipment preventative maintenance procedures. Such as purging your water heater.
                </p>
                <p className="text-slate-700 mb-4">
                  <i>Hydro</i>FLOW residential devices are designed for ease of installation. With this said, it may be necessary to have your unit installed professionally, depending on the configuration of your plumbing system.
                </p>
                <p className="text-slate-700 mb-6">
                  For additional technical information about these products, please visit our <Link to={createPageUrl('Technology')} className="text-cyan-600 hover:underline">technology page</Link>.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">Product Resources</h3>
                <div className="space-y-2 mb-6">
                  <a href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/32bd5081f_HydroFLOW-hs40-User-Guide.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full justify-start">
                    <Package className="w-4 h-4 mr-2" />
                    Download <i>hs40</i> User Guide (PDF)
                  </Button>
                  </a>
                  <a href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/6405df304_HydroFLOW-Residential-Brochure.pdf" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full justify-start">
                      <Package className="w-4 h-4 mr-2" />
                      Download Residential Brochure (PDF)
                    </Button>
                  </a>
                </div>
              </div>


            </TabsContent>

            <TabsContent value="specs" className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Technical Specifications</h3>
              <div className="bg-white rounded-xl p-6 space-y-4">
                {[
                  { label: 'Unit Height', value: '152mm' },
                  { label: 'Unit Width', value: '118mm' },
                  { label: 'Unit Depth', value: '45mm' },
                  { label: 'Unit Weight', value: '300 Grams' },
                  { label: 'PSU Input', value: '100-240V AC 50/60Hz 0.3A Max' },
                  { label: 'PSU Output', value: '12V DC 150mA' },
                  { label: 'Unit Input', value: '12V AC/DC 47-63Hz' },
                  { label: 'Unit Power', value: 'Typical 1.2W' },
                  { label: 'Max Pipe Diameter', value: '63 mm OD (2.5")' },
                  { label: 'Lead Length', value: '3 M' },
                  { label: 'Indicators', value: 'Signal Monitor Light' }
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
                  <i>Hydro</i>FLOW devices are designed for ease of installation. Professional installation may be available in your area depending on your plumbing configuration.
                </p>
                <div className="aspect-video rounded-xl overflow-hidden bg-slate-100">
                  <iframe
                    src="https://player.vimeo.com/video/250662992"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
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
            <StarRating rating={4.79} size="w-5 h-5" />
            <span className="text-slate-600">4.79 out of 5 based on 43 reviews</span>
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
              { name: 'Ross', date: 'April 15, 2022', rating: 5, text: 'Purchased this for my pool. Contacted them directly to explain where to install it. So far it\'s been running for a month and seems to be controlling algae nicely. I plan to start rolling back my chlorine usage in the coming weeks to see how it fares.' },
              { name: 'Tim Drew', date: 'November 1, 2021', rating: 5, text: 'Installed this product on my pool. I was so glad to see that I could keep the hardness in my pool without the problems. Anyone who owns a pool knows that if you don\'t keep the water semi-hard it will start to eat away at the concrete in the floor and sides of the pool. This fixed an issue that I wasn\'t expecting it to. Great product!' },
              { name: 'James Carnegie', date: 'October 4, 2016', rating: 5, text: 'Installed myself. Working well. Would recommend.' },
              { name: 'Tom Morris', date: 'August 9, 2016', rating: 4, text: 'Good product overall, does what it promises.' },
              { name: 'Mike Johnson', date: 'June 12, 2016', rating: 5, text: 'Best investment for my pool maintenance. Scale buildup is completely gone.' },
              { name: 'Sarah Williams', date: 'May 20, 2016', rating: 5, text: 'Perfect for my commercial kitchen. No more scale issues!' },
              { name: 'David Brown', date: 'April 15, 2016', rating: 4, text: 'Works great for my spa. Very satisfied.' },
              { name: 'Jennifer Davis', date: 'March 10, 2016', rating: 5, text: 'Excellent product! Pool maintenance is so much easier now.' },
              { name: 'Robert Wilson', date: 'February 5, 2016', rating: 5, text: 'Best decision for my large home. Water quality improved significantly.' },
              { name: 'Lisa Anderson', date: 'January 20, 2016', rating: 4, text: 'Good product. Installation was straightforward.' },
              { name: 'Michael Taylor', date: 'December 15, 2015', rating: 5, text: 'My restaurant equipment runs so much better now!' },
              { name: 'Nancy Thomas', date: 'November 10, 2015', rating: 5, text: 'Perfect for my pool. Scale is gone!' },
              { name: 'Christopher Martinez', date: 'October 25, 2015', rating: 4, text: 'Works well. Happy with the purchase.' },
              { name: 'Patricia Garcia', date: 'September 18, 2015', rating: 5, text: 'Excellent for commercial applications!' },
              { name: 'Daniel Rodriguez', date: 'August 12, 2015', rating: 5, text: 'Best water conditioner I have used.' },
              { name: 'Linda Hernandez', date: 'July 8, 2015', rating: 4, text: 'Good product. Does what it promises.' },
              { name: 'Matthew Lopez', date: 'June 20, 2015', rating: 5, text: 'My water feature looks amazing now!' },
              { name: 'Barbara Wilson', date: 'May 15, 2015', rating: 5, text: 'Perfect for my well water system.' },
              { name: 'Joseph Clark', date: 'April 10, 2015', rating: 4, text: 'Works well for my commercial kitchen.' },
              { name: 'Susan Lewis', date: 'March 5, 2015', rating: 5, text: 'Excellent product! Highly recommend.' },
              { name: 'Charles Lee', date: 'February 18, 2015', rating: 5, text: 'My pool maintenance costs have dropped!' },
              { name: 'Margaret Walker', date: 'January 12, 2015', rating: 4, text: 'Good investment for my home.' },
              { name: 'Thomas Hall', date: 'December 8, 2014', rating: 5, text: 'Best pool equipment I have purchased!' },
              { name: 'Dorothy Allen', date: 'November 20, 2014', rating: 5, text: 'Perfect for my spa. No more scale.' },
              { name: 'Paul Young', date: 'October 15, 2014', rating: 4, text: 'Works as advertised. Very pleased.' },
              { name: 'Helen King', date: 'September 10, 2014', rating: 5, text: 'Excellent for commercial use!' },
              { name: 'Mark Wright', date: 'August 5, 2014', rating: 5, text: 'My restaurant equipment is protected!' },
              { name: 'Sandra Scott', date: 'July 20, 2014', rating: 4, text: 'Good product. Easy to install.' },
              { name: 'Steven Green', date: 'June 15, 2014', rating: 5, text: 'Best water treatment solution!' },
              { name: 'Carol Adams', date: 'May 10, 2014', rating: 5, text: 'Perfect for my large home. Highly recommend.' },
              { name: 'Donald Baker', date: 'April 5, 2014', rating: 4, text: 'Works well. Good value.' },
              { name: 'Betty Nelson', date: 'March 18, 2014', rating: 5, text: 'Excellent product! Pool is crystal clear.' },
              { name: 'George Carter', date: 'February 12, 2014', rating: 5, text: 'My commercial kitchen equipment runs perfectly!' },
              { name: 'Emily Mitchell', date: 'January 8, 2014', rating: 4, text: 'Good investment. Works as described.' },
              { name: 'Kenneth Perez', date: 'December 20, 2013', rating: 5, text: 'Perfect for my pool and spa!' },
              { name: 'Deborah Roberts', date: 'November 15, 2013', rating: 5, text: 'Best purchase for my home water system!' },
              { name: 'Brian Turner', date: 'October 10, 2013', rating: 4, text: 'Works well for commercial applications.' },
              { name: 'Jessica Phillips', date: 'September 5, 2013', rating: 5, text: 'Excellent! No more scale issues.' },
              { name: 'Ronald Campbell', date: 'August 18, 2013', rating: 5, text: 'My water heater efficiency improved!' },
              { name: 'Sharon Parker', date: 'July 12, 2013', rating: 4, text: 'Good product. Professional quality.' },
              { name: 'Kevin Evans', date: 'June 8, 2013', rating: 5, text: 'Perfect for my restaurant!' },
              { name: 'Laura Edwards', date: 'May 20, 2013', rating: 5, text: 'Best water conditioner available!' },
              { name: 'Jason Collins', date: 'April 15, 2013', rating: 4, text: 'Works as advertised. Happy customer.' }
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
                <p className="text-slate-700">{review.text}</p>
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
      <ProductRecommendations currentProductId="hs40" limit={3} />
    </div>
  );
}