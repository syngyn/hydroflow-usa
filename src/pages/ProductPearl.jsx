import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Star, Check, Package, Shield, Zap, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { StarRating } from "@/components/ui/star-rating";
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
              
              <div className="flex gap-2 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
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
                An upgraded version of the reliable hs38, the Pearl is designed to protect a single piece of equipment, such as a tankless water heater, from the effects of scale and decrease the risk of waterborne biological contamination. Other popular applications include small studio apartments and recreational vehicles (RVs).
              </p>

              <div className="mb-6">
                <Badge className="bg-cyan-100 text-cyan-700 mb-2">Perfect for Apartments & Condos</Badge>
                <p className="text-sm text-slate-600">Fits Copper/PVC/PEX pipes up to 1" outer diameter</p>
              </div>

              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-4xl font-bold text-slate-900">$295</span>
                <span className="text-2xl text-slate-400 line-through">$425</span>
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

          <div className="space-y-6">
            {[
              { name: 'Toby Knudtson', date: 'October 16, 2025', rating: 5, text: 'This product works exactly how its described. I dont understand why some people are reviewing your product are expecting it to lower the water hardness lol. I love the fact I no longer have to exchange my calcium for salt.' },
              { name: 'Barbara', date: 'September 1, 2022', rating: 4, text: 'When I bought this unit I had no idea what size to get. I just noticed the product selection tool and should have used that to figure out what to buy. Turns out I should have bought the s38. Oh well Ill give this to my kid since she lives in an apartment' },
              { name: 'Jasons S.', date: 'August 1, 2017', rating: 4, text: 'Way easier than water softener.' },
              { name: 'Joe Gale', date: 'September 14, 2016', rating: 5, text: 'I got my HS38 three months ago. I installed it myself. Works great.' },
              { name: 'Noah', date: 'May 9, 2017', rating: 5, text: 'really like it, works better then my old water softener' }
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
        </div>
      </section>

      {/* AI Recommendations */}
      <ProductRecommendations currentProductId="pearl" limit={3} />
    </div>
  );
}