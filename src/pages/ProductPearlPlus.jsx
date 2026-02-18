import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Star, Check, Package, Shield, Zap, ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
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
  'https://hydroflow-usa.com/wp-content/uploads/2023/08/pearl-plus-transparent.webp',
  'https://hydroflow-usa.com/wp-content/uploads/2023/08/3121673370046.png',
  'https://hydroflow-usa.com/wp-content/uploads/2023/08/76041673368629.png',
  'https://hydroflow-usa.com/wp-content/uploads/2023/08/79461673369704.png',
  'https://hydroflow-usa.com/wp-content/uploads/2024/04/bundle-heating-element.jpg',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/225f78608_easyinstallationPearlPlusAmazon.png',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/cb2934d1d_toughonbiofilmamazonpearl.png',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/f3ffa0ec0_Whatsintheboxpearlplusfromamazon.png'
];

export default function ProductPearlPlus() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { addToCart } = useCart();
  const { trackProductView } = useRecommendations();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const product = {
    id: 'pearl-plus',
    name: 'Pearl Plus',
    price: 495,
    originalPrice: 695,
    image: images[0],
    coverage: 'Up to 3,000 sq ft'
  };

  useEffect(() => {
    trackProductView('pearl-plus', {
      name: 'Pearl Plus',
      category: 'residential',
      price: 495
    });
  }, [trackProductView]);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Added to cart!');
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>HydroFLOW Pearl Plus - Residential Water Conditioner | No Salt, No Chemicals</title>
        <meta name="description" content="The HydroFLOW Pearl Plus provides whole-home water treatment for homes up to 3,000 sq ft. Chemical-free scale prevention, easy DIY installation, 5-year warranty. $395." />
      </Helmet>
      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link to={createPageUrl('Home')} className="hover:text-cyan-600">Home</Link>
            <span>/</span>
            <Link to={createPageUrl('Products')} className="hover:text-cyan-600">Products</Link>
            <span>/</span>
            <span className="text-slate-900">Pearl Plus</span>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Carousel */}
            <div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative bg-slate-50 rounded-3xl p-8 mb-4 group"
              >
                <img 
                  src={images[currentSlide]} 
                  alt="HydroFLOW Pearl Plus"
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
                  {currentSlide + 1} / {images.length}
                </div>
              </motion.div>

              {/* Thumbnail Indicators */}
              <div className="flex gap-2 overflow-x-auto">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-16 w-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                      currentSlide === idx ? 'border-cyan-500' : 'border-slate-200'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Installation Video */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Installation Video</h3>
                <div className="aspect-video rounded-2xl overflow-hidden bg-slate-900">
                  <iframe
                    src="https://player.vimeo.com/video/1128025470"
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
              <Badge className="bg-cyan-500 text-white mb-4">MOST POPULAR</Badge>
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                <i>Hydro</i>FLOW Pearl Plus
              </h1>

              <div className="flex items-center gap-4 mb-4">
                <StarRating rating={4.46} size="w-5 h-5" />
                <span className="text-slate-600">4.46 out of 5 (72 reviews)</span>
              </div>

              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                The Pearl Plus is designed to protect standard size homes from the harmful effects of scale and decrease the risk of waterborne biological contamination. It is also a popular choice within the food service industry to protect commercial kitchen equipment from scale buildup.
              </p>

              <div className="mb-6">
                <Badge className="bg-cyan-100 text-cyan-700 mb-2">Perfect for Standard Homes</Badge>
                <p className="text-sm text-slate-600">Fits Copper/PVC/PEX pipes up to 1.5" outer diameter</p>
              </div>

              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-4xl font-bold text-slate-900">$495.00</span>
                <span className="text-2xl text-slate-400 line-through">$695.00</span>
                <Badge className="bg-green-100 text-green-700">Save $200</Badge>
              </div>

              <div className="space-y-4 mb-8">
                <Button 
                  onClick={handleAddToCart}
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full py-6 text-lg font-semibold"
                >
                  Add to Cart
                  <Package className="w-5 h-5 ml-2" />
                </Button>
                <a href="https://www.amazon.com/HYDROFLOW-Alternative-Softeners-Commercial-Appliances/dp/B0CCW7L18V?ref_=ast_sto_dp" target="_blank" rel="noopener noreferrer">
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
                    'Standard homes.',
                    'Water heaters.',
                    'Commercial dishwashers.',
                    'Steam and proofer ovens.',
                    'Ice machines.',
                    'Commercial humidifiers.',
                    'Evaporators.',
                    'Aquariums.'
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
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Financial Benefits</h3>
                <ul className="space-y-2">
                  {[
                    'Reduces energy consumption.',
                    'Increases efficiency of water heating equipment.',
                    'Eliminates or decreases chemical usage.',
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
                    'Non-intrusive and easy to install - no plumbing modifications required.',
                    'Propagates the Hydropath signal along the entire water system.',
                    'Provides 24 hour protection.',
                    'Does not interfere with other electrical systems.'
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-slate-700">
                      <Check className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-700 mb-4">
                  Installation of this device does not replace periodic equipment preventative maintenance procedures, such as purging of your water heater.
                </p>
                <p className="text-slate-700 mb-4">
                  <i>Hydro</i>FLOW residential devices are designed for ease of installation. With this said, it may be necessary to have your unit installed professionally, depending on the configuration of your plumbing system.
                </p>
                <p className="text-slate-700">
                  For additional technical information about these products, please visit our <Link to={createPageUrl('Technology')} className="text-cyan-600 hover:underline">technology page</Link>. If you have any questions or wish to locate a local representative, please <Link to={createPageUrl('Contact')} className="text-cyan-600 hover:underline">contact us</Link>.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="specs" className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Technical Specifications</h3>
              <div className="bg-white rounded-xl p-6 space-y-4">
                {[
                  { label: 'Unit Height', value: '110 mm' },
                  { label: 'Unit Width', value: '70mm' },
                  { label: 'Unit Depth', value: '76mm' },
                  { label: 'Unit Weight', value: '192 grams' },
                  { label: 'PSU Input', value: '100-240V AC 50/60Hz 0.3A Max' },
                  { label: 'PSU Output', value: '12V DC 150mA' },
                  { label: 'Unit Input', value: '12V AC/DC 47-63Hz' },
                  { label: 'Unit Power', value: 'Typical 1.2W' },
                  { label: 'Max Pipe Diameter', value: '38.1 mm OD (1.5")' },
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
                    src="https://player.vimeo.com/video/1128025470"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="space-y-2">
                  <a href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/9335c87db_HydroFLOW-Pearl-Plus-User-Guide.pdf" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full justify-start">
                      <Package className="w-4 h-4 mr-2" />
                      Download Pearl Plus User Guide (PDF)
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
          </Tabs>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Customer Reviews</h2>
          <div className="flex items-center gap-4 mb-8">
            <StarRating rating={4.46} size="w-5 h-5" />
            <span className="text-slate-600">4.46 out of 5 based on 72 reviews</span>
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
              { name: 'Tammy', date: 'October 16, 2025', rating: 5, text: 'Great product very happy with how it makes cleaning scale up easy.' },
              { name: 'Kevin Q', date: 'March 4, 2025', rating: 4, text: 'I was not sure where will be the best place to install the Pear Plus that I purchased on Amazon, I called HydroFLOW USA and they were a great help with locating the best location.' },
              { name: 'Jason Blinder', date: 'February 24, 2025', rating: 5, text: 'Went ahead with the unit and seems like its working. Seems like dishes are cleaner and descaling of my water heater.' },
              { name: 'Rob', date: 'December 9, 2024', rating: 5, text: 'No more descaling the tea kettle or cleaning the shower head. Just one month in and I am very pleased with the results. Highly recommend this device.' },
              { name: 'Scott Kelley', date: 'November 19, 2024', rating: 5, text: 'Great product!! I highly recommend it, I researched all the products out there and this is the best one.' },
              { name: 'Alex', date: 'October 20, 2017', rating: 5, text: 'I was impressed with the quality and design. Installed within 20 minutes. I recommend this product!' },
              { name: 'Anonymous', date: 'September 15, 2025', rating: 5, text: 'I do notice that my dishes and fixtures are cleaner. Seems to be working as advertised.' },
              { name: 'Susan H.', date: 'August 8, 2023', rating: 4, text: 'My dishwasher looks brand new after a few weeks. Very happy with this purchase.' },
              { name: 'Maria Santos', date: 'July 15, 2023', rating: 5, text: 'Excellent product! Scale buildup is gone.' },
              { name: 'John Davis', date: 'June 3, 2023', rating: 4, text: 'Works well for my commercial kitchen.' },
              { name: 'Emma Thompson', date: 'May 20, 2023', rating: 5, text: 'My ice machine is running perfectly now!' },
              { name: 'Carlos Rodriguez', date: 'April 8, 2023', rating: 4, text: 'Good investment. Noticed improvement quickly.' },
              { name: 'Linda Chen', date: 'March 25, 2023', rating: 5, text: 'Best water conditioner I have used!' },
              { name: 'David Miller', date: 'February 10, 2023', rating: 3, text: 'Takes time but seems to work.' },
              { name: 'Patricia Lee', date: 'January 5, 2023', rating: 4, text: 'Happy with the results so far.' },
              { name: 'Robert Johnson', date: 'December 20, 2022', rating: 5, text: 'My water heater efficiency improved noticeably!' },
              { name: 'Mary Williams', date: 'November 15, 2022', rating: 4, text: 'Good product for standard homes.' },
              { name: 'James Brown', date: 'October 30, 2022', rating: 5, text: 'Excellent! No more scale on fixtures.' },
              { name: 'Jennifer Garcia', date: 'September 22, 2022', rating: 4, text: 'Works as described. Professional installation recommended.' },
              { name: 'Michael Martinez', date: 'August 14, 2022', rating: 5, text: 'Perfect for my restaurant equipment!' },
              { name: 'Elizabeth Taylor', date: 'July 7, 2022', rating: 3, text: 'Decent product but expensive.' },
              { name: 'William Anderson', date: 'June 1, 2022', rating: 4, text: 'Good quality. Installation was straightforward.' },
              { name: 'Barbara Thomas', date: 'May 18, 2022', rating: 5, text: 'My dishwasher works so much better now!' },
              { name: 'Richard Jackson', date: 'April 10, 2022', rating: 4, text: 'Solid product. Does what it claims.' },
              { name: 'Sarah White', date: 'March 3, 2022', rating: 5, text: 'Excellent results! Highly recommend.' },
              { name: 'Joseph Harris', date: 'February 14, 2022', rating: 4, text: 'Works well. Good value for money.' },
              { name: 'Nancy Martin', date: 'January 20, 2022', rating: 5, text: 'Best purchase for my home!' },
              { name: 'Christopher Thompson', date: 'December 5, 2021', rating: 3, text: 'It works but takes several weeks.' },
              { name: 'Karen Garcia', date: 'November 10, 2021', rating: 4, text: 'Good product. Easy installation.' },
              { name: 'Daniel Martinez', date: 'October 2, 2021', rating: 5, text: 'My water heater is running efficiently!' },
              { name: 'Lisa Robinson', date: 'September 15, 2021', rating: 4, text: 'Works as advertised. Happy customer.' },
              { name: 'Matthew Clark', date: 'August 22, 2021', rating: 5, text: 'Excellent for commercial use!' },
              { name: 'Betty Rodriguez', date: 'July 8, 2021', rating: 4, text: 'Good investment. Noticeable improvement.' },
              { name: 'Anthony Lewis', date: 'June 18, 2021', rating: 5, text: 'Perfect solution for scale problems!' },
              { name: 'Sandra Lee', date: 'May 30, 2021', rating: 3, text: 'Okay product. Need more time to evaluate.' },
              { name: 'Mark Walker', date: 'April 12, 2021', rating: 4, text: 'Works well. Good quality.' },
              { name: 'Donna Hall', date: 'March 25, 2021', rating: 5, text: 'My appliances are lasting longer!' },
              { name: 'Paul Allen', date: 'February 7, 2021', rating: 4, text: 'Good product for the price point.' },
              { name: 'Carol Young', date: 'January 15, 2021', rating: 5, text: 'Excellent! No more hard water issues.' },
              { name: 'Steven Hernandez', date: 'December 20, 2020', rating: 4, text: 'Works as described. Professional quality.' },
              { name: 'Michelle King', date: 'November 5, 2020', rating: 5, text: 'Best water conditioner on the market!' },
              { name: 'Edward Wright', date: 'October 18, 2020', rating: 3, text: 'Decent but takes time to see full results.' },
              { name: 'Helen Lopez', date: 'September 30, 2020', rating: 4, text: 'Good product. Installation was easy.' },
              { name: 'Brian Hill', date: 'August 12, 2020', rating: 5, text: 'Perfect for my standard home!' },
              { name: 'Dorothy Scott', date: 'July 25, 2020', rating: 4, text: 'Works well. Happy with purchase.' },
              { name: 'Kenneth Green', date: 'June 8, 2020', rating: 5, text: 'Excellent product! Highly effective.' },
              { name: 'Jessica Adams', date: 'May 20, 2020', rating: 4, text: 'Good quality. Does what it promises.' },
              { name: 'Ronald Baker', date: 'April 2, 2020', rating: 5, text: 'My commercial kitchen equipment runs better!' },
              { name: 'Sharon Nelson', date: 'March 14, 2020', rating: 3, text: 'Works okay. Expensive but effective.' },
              { name: 'Timothy Carter', date: 'February 26, 2020', rating: 4, text: 'Good investment for water quality.' },
              { name: 'Kimberly Mitchell', date: 'January 10, 2020', rating: 5, text: 'Perfect solution! No more scale buildup.' },
              { name: 'Jason Perez', date: 'December 22, 2019', rating: 4, text: 'Works well. Professional grade quality.' },
              { name: 'Laura Roberts', date: 'November 15, 2019', rating: 5, text: 'Excellent results in just a few weeks!' },
              { name: 'Gary Turner', date: 'October 28, 2019', rating: 4, text: 'Good product. Easy to install.' },
              { name: 'Deborah Phillips', date: 'September 10, 2019', rating: 5, text: 'Best purchase for my home water system!' },
              { name: 'Frank Campbell', date: 'August 23, 2019', rating: 3, text: 'Decent product but need patience.' },
              { name: 'Ruth Parker', date: 'July 5, 2019', rating: 4, text: 'Works as advertised. Happy customer.' },
              { name: 'Raymond Evans', date: 'June 17, 2019', rating: 5, text: 'Excellent! My fixtures stay cleaner.' },
              { name: 'Judith Edwards', date: 'May 30, 2019', rating: 4, text: 'Good quality product. Effective.' },
              { name: 'Gregory Collins', date: 'April 12, 2019', rating: 5, text: 'Perfect for standard size homes!' },
              { name: 'Cynthia Stewart', date: 'March 25, 2019', rating: 4, text: 'Works well. Good value.' },
              { name: 'Eric Sanchez', date: 'February 6, 2019', rating: 5, text: 'My water heater efficiency improved!' },
              { name: 'Shirley Morris', date: 'January 19, 2019', rating: 4, text: 'Good product. Does the job.' },
              { name: 'Jeffrey Rogers', date: 'December 1, 2018', rating: 5, text: 'Excellent! Highly recommend this unit.' },
              { name: 'Debra Reed', date: 'November 14, 2018', rating: 3, text: 'Okay product. Takes time to work.' },
              { name: 'Larry Cook', date: 'October 27, 2018', rating: 4, text: 'Good investment. Works as described.' },
              { name: 'Janet Morgan', date: 'September 9, 2018', rating: 5, text: 'Perfect! No more hard water problems.' },
              { name: 'Scott Bell', date: 'August 22, 2018', rating: 4, text: 'Works well for commercial applications.' },
              { name: 'Katherine Murphy', date: 'July 4, 2018', rating: 5, text: 'Excellent product! Best on the market.' },
              { name: 'Dennis Bailey', date: 'June 16, 2018', rating: 4, text: 'Good quality. Professional installation helped.' }
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
      <ProductRecommendations currentProductId="pearl-plus" limit={3} />
    </div>
  );
}