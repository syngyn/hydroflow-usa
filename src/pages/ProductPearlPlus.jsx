import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Star, Check, Package, Shield, Zap, ArrowRight } from 'lucide-react';
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
  'https://hydroflow-usa.com/wp-content/uploads/2024/04/bundle-heating-element.jpg'
];

export default function ProductPearlPlus() {
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();
  const { trackProductView } = useRecommendations();

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
            {/* Image Gallery */}
            <div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-slate-50 rounded-3xl p-8 mb-4"
              >
                <img 
                  src={images[selectedImage]} 
                  alt="<i>Hydro</i>FLOW Pearl Plus"
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
                An upgraded version of the dependable s38, the Pearl Plus is designed to protect standard size homes from the harmful effects of scale and decrease the risk of waterborne biological contamination. It is also a popular choice within the food service industry to protect commercial kitchen equipment from scale buildup.
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
                  {[
                    'Standard homes',
                    'Water heaters',
                    'Commercial dishwashers',
                    'Steam and proofer ovens',
                    'Ice machines',
                    'Commercial humidifiers',
                    'Evaporators',
                    'Aquariums'
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
                    'Dissolves and removes existing scale',
                    'Prevents new scale accumulation',
                    'Deactivates bacteria and algae',
                    'Prevents and removes biofoul',
                    'Boosts filtration efficiency',
                    'Significantly reduces corrosion'
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
                    'Reduces energy consumption',
                    'Increases efficiency of water heating equipment',
                    'Eliminates or decreases chemical usage',
                    'Reduces maintenance costs',
                    'Average one year payback period'
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
                  <Button variant="outline" className="w-full justify-start">
                    <Package className="w-4 h-4 mr-2" />
                    Download Pearl Plus User Guide (PDF)
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Package className="w-4 h-4 mr-2" />
                    Download Residential Brochure (PDF)
                  </Button>
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

          <div className="space-y-6">
            {[
              { name: 'Tammy', date: 'October 16, 2025', rating: 5, text: 'Great product very happy with how it makes cleaning scale up easy.' },
              { name: 'Kevin Q', date: 'March 4, 2025', rating: 4, text: 'I was not sure where will be the best place to install the Pear Plus that I purchased on Amazon, I called HydroFLOW USA and they were a great help with locating the best location.' },
              { name: 'Jason Blinder', date: 'February 24, 2025', rating: 5, text: 'Went ahead with the unit and seems like its working. Seems like dishes are cleaner and descaling of my water heater.' },
              { name: 'Rob', date: 'December 9, 2024', rating: 5, text: 'No more descaling the tea kettle or cleaning the shower head. Just one month in and I am very pleased with the results. Highly recommend this device.' },
              { name: 'Scott Kelley', date: 'November 19, 2024', rating: 5, text: 'Great product!! I highly recommend it, I researched all the products out there and this is the best one.' }
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
      <ProductRecommendations currentProductId="pearl-plus" limit={3} />
    </div>
  );
}