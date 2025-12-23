import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Star, Check, Package, Shield, Zap, ArrowRight, Trophy } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const images = [
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/5caaa96fa_productrange201629.png',
  'https://hydroflow-usa.com/wp-content/uploads/2023/08/56711628157750.jpg',
  'https://hydroflow-usa.com/wp-content/uploads/2023/08/31691628157718.jpg',
  'https://hydroflow-usa.com/wp-content/uploads/2023/08/58321675360173.png',
  'https://hydroflow-usa.com/wp-content/uploads/2023/08/567116281577502.jpg'
];

export default function ProductHS40() {
  const [selectedImage, setSelectedImage] = useState(0);

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
            <span className="text-slate-900">hs40</span>
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
                  alt="HydroFLOW hs40"
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
                <i>Hydro</i>FLOW hs40
              </h1>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < 5 ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`}
                    />
                  ))}
                </div>
                <span className="text-slate-600">4.79 out of 5 (43 reviews)</span>
              </div>

              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Designed to protect pools, spas and commercial kitchens from the destructive effects of scale and biofilm. Decreases the risk of a waterborne pathogenic contamination. The award-winning hs40 water conditioner provides a chemical-free solution for the harmful effects of scale, corrosion, bacteria, and algae.
              </p>

              <div className="mb-6">
                <Badge className="bg-cyan-100 text-cyan-700 mb-2">Perfect for Pools & Commercial</Badge>
                <p className="text-sm text-slate-600">Fits Copper/PVC/PEX pipes up to 2.5" outer diameter</p>
              </div>

              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-4xl font-bold text-slate-900">$1,990</span>
                <span className="text-2xl text-slate-400 line-through">$2,150</span>
                <Badge className="bg-green-100 text-green-700">Save $160</Badge>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
                <div className="flex items-center gap-2 mb-1">
                  <Trophy className="w-5 h-5 text-amber-600" />
                  <p className="font-semibold text-amber-900">2015 Kitchen Innovations Award</p>
                </div>
                <p className="text-sm text-amber-800">Recognized by the National Restaurant Association</p>
              </div>

              <div className="space-y-4 mb-8">
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full py-6 text-lg font-semibold">
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
                    'Large homes',
                    'Residential wells',
                    'Restaurant kitchens',
                    'Water features',
                    'Residential and commercial pools and spas',
                    'Residential and commercial water heaters'
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
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Financial & Environmental Benefits</h3>
                <ul className="space-y-2">
                  {[
                    'Reduces energy consumption',
                    'Increases efficiency of water heating equipment and machinery',
                    'Eliminates or decreases chemical usage',
                    'Decreases need for chemical safety precautions, storage and disposal',
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
                  HydroFLOW devices are designed for ease of installation. Professional installation may be available in your area depending on your plumbing configuration.
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Package className="w-4 h-4 mr-2" />
                    Download hs40 User Guide (PDF)
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
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < 5 ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`} />
              ))}
            </div>
            <span className="text-slate-600">4.79 out of 5 based on 43 reviews</span>
          </div>

          <div className="space-y-6">
            {[
              { name: 'Ross', date: 'April 15, 2022', rating: 5, text: 'Purchased this for my pool. Contacted them directly to explain where to install it. So far it\'s been running for a month and seems to be controlling algae nicely. I plan to start rolling back my chlorine usage in the coming weeks to see how it fares.' },
              { name: 'Tim Drew', date: 'November 1, 2021', rating: 5, text: 'Installed this product on my pool. I was so glad to see that I could keep the hardness in my pool without the problems. Anyone who owns a pool knows that if you don\'t keep the water semi-hard it will start to eat away at the concrete in the floor and sides of the pool. This fixed an issue that I wasn\'t expecting it to. Great product!' },
              { name: 'James Carnegie', date: 'October 4, 2016', rating: 5, text: 'Installed myself. Working well. Would recommend.' },
              { name: 'Tom Morris', date: 'August 9, 2016', rating: 4, text: 'Good product overall, does what it promises.' },
              { name: 'Mike Johnson', date: 'June 12, 2016', rating: 5, text: 'Best investment for my pool maintenance. Scale buildup is completely gone.' }
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

      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">You May Also Like</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Pearl Plus', price: 495, image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/971b89f11_PearlPlus.png' },
              { name: 'Pearl', price: 295, image: 'https://hydroflow-usa.com/wp-content/uploads/2024/08/pearl-grey-background-800x800.jpg' }
            ].map((product) => (
              <Link key={product.name} to={createPageUrl('Products')}>
                <div className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-cyan-600">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}