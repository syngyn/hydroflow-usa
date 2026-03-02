import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Shield, Star, ShoppingCart, Droplet, Minus, Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useCart } from '@/components/cart/CartContext';
import { toast } from 'sonner';

const productData = {
  id: 'activated-carbon-20',
  name: 'ACB (Activated Carbon Block) DOE 20" x 4.5" Filter Cartridge',
  shortName: 'Activated Carbon Block (20")',
  subtitle: 'Premium Activated Carbon Block Filter for Whole Home Filtration Systems',
  originalPrice: 45.95,
  price: 35.95,
  rating: 4.55,
  reviewCount: 11,
  images: [
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/318b6a108_ActivatedCarbonBlockFilter20inch.png',
    'https://hydroflow-usa.com/wp-content/uploads/2023/08/ACB-graphic.png'
  ],
  specifications: {
    'Weight': '7 lbs',
    'Dimensions': '20" × 4.5" × 4.5"',
    'Height': '20"',
    'Depth': '4.5"',
    'Filter Head': 'Double Open Ended (DOE)',
    'Micron': '5',
    'Certification': 'NSF/ANSI 41, BPA Free',
    'Flow Rate': '15 GPM',
    'Filter Media': 'Activated Carbon Block'
  },
  features: [
    'Advanced Filtration Technology - Effectively removes chlorine, VOCs, pesticides, herbicides, and other harmful chemicals',
    'High-Quality Materials - Crafted from premium-grade activated coconut carbon with exceptional adsorption capabilities',
    'Long-Lasting Performance - Provides consistent filtration for up to 6 months',
    'Easy Installation and Maintenance - Quick and hassle-free installation with most standard whole home filtration systems',
    'Eco-Friendly and Cost-Effective - Reduces need for single-use plastic bottles'
  ],
  healthBenefits: [
    'Improved Taste and Odor - Eliminates unpleasant taste and smell of chlorine',
    'Enhanced Safety - Protects from harmful chemicals and pollutants',
    'Better Hydration - Clean, great-tasting water encourages proper hydration'
  ],
  removes: [
    'Chlorine',
    'VOCs',
    'Lead',
    'Mercury',
    'Arsenic',
    'Chromium',
    'Thallium',
    'Organic Chemicals',
    'Trihalomethanes',
    'Pesticides',
    'Herbicides',
    'Hydrogen Sulfide',
    'PFAS',
    'Radon',
    'Sand',
    'Silt',
    'Clay',
    'Suspended Iron',
    'Suspended Manganese',
    'Visible TSS'
  ]
};

const reviews = [
  { name: 'Joshua', rating: 5, date: 'May 6, 2025', text: "I'm amazed at how well the HydroFLOW ACB cartridges handle high sediment loads. My showers and faucets are clean, and the cartridges last longer than expected." },
  { name: 'Lauren', rating: 5, date: 'May 3, 2025', text: 'Finally, a filter cartridge that actually does what it promises. Our HydroFLOW ACB system removed rust particles and made our water sparkle.' },
  { name: 'Stephanie', rating: 5, date: 'May 1, 2025', text: 'I love that the HydroFLOW ACB cartridges use activated carbon blocks—excellent at removing chlorine and organic contaminants. My water is refreshing!' },
  { name: 'Emily', rating: 5, date: 'April 19, 2025', text: 'Since installing the HydroFLOW ACB system and cartridges, our tap water tastes noticeably cleaner and fresher. No more chlorine aftertaste!' },
  { name: 'David', rating: 5, date: 'January 29, 2025', text: 'Great improvement over my old pitcher filter—no more cloudy water and the HydroFLOW ACB cartridges fit right into my existing setup. Highly recommend!' }
];

export default function ProductActivatedCarbon20() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: productData.id,
      name: productData.shortName,
      price: productData.price,
      image: productData.images[0],
      quantity: quantity
    });
    toast.success(`${quantity} ${productData.shortName} added to cart`);
  };

  return (
    <div>
      {/* Hero/Product Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="bg-white rounded-3xl p-12 shadow-lg flex justify-center">
                <img 
                  src={productData.images[selectedImage]}
                  alt={productData.name}
                  className="w-1/2 h-auto object-contain"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {productData.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`bg-white rounded-xl p-4 border-2 transition-all ${
                      selectedImage === idx ? 'border-cyan-500' : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-auto object-contain" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                  {productData.name}
                </h1>
                <p className="text-lg text-slate-600">{productData.subtitle}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(productData.rating) 
                          ? 'fill-yellow-400 text-yellow-400' 
                          : i < productData.rating 
                          ? 'fill-yellow-400 text-yellow-400' 
                          : 'text-slate-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-slate-600">
                  Rated {productData.rating} out of 5 based on {productData.reviewCount} customer ratings
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-slate-400 line-through text-2xl">${productData.originalPrice}</span>
                <span className="text-4xl font-bold text-slate-900">${productData.price}</span>
              </div>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed">
                Experience the pinnacle of water purification with our Premium Activated Carbon Block Filter, 
                meticulously engineered for Whole Home Filtration Systems. This state-of-the-art filter is 
                designed to deliver crystal-clear, great-tasting water directly from your tap, ensuring the 
                highest standards of quality and safety for you and your family.
              </p>

              {/* Quantity & Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-slate-700 font-medium">Quantity:</span>
                  <div className="flex items-center border-2 border-slate-300 rounded-full">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-slate-100 rounded-l-full transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-6 py-2 font-semibold">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-slate-100 rounded-r-full transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <Button 
                  onClick={handleAddToCart}
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full py-6 text-lg font-semibold"
                >
                  Add to Cart
                  <ShoppingCart className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Quick Features */}
              <div className="bg-slate-50 rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm text-slate-700">NSF/ANSI 41 Certified, BPA Free</span>
                </div>
                <div className="flex items-center gap-3">
                  <Droplet className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm text-slate-700">15 GPM Flow Rate</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm text-slate-700">6-Month Filter Life</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="description" className="space-y-8">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({productData.reviewCount})</TabsTrigger>
            </TabsList>

            {/* Description Tab */}
            <TabsContent value="description" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h2>
                <div className="space-y-4">
                  {productData.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                      <p className="text-slate-600">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Health Benefits</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {productData.healthBenefits.map((benefit, idx) => {
                    const [title, ...desc] = benefit.split(' - ');
                    return (
                      <div key={idx} className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6">
                        <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                        <p className="text-sm text-slate-600">{desc.join(' - ')}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Reduces or Removes</h2>
                <div className="bg-slate-50 rounded-2xl p-8">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {productData.removes.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Specifications Tab */}
            <TabsContent value="specifications">
              <div className="max-w-3xl mx-auto">
                <div className="bg-slate-50 rounded-2xl overflow-hidden">
                  <table className="w-full">
                    <tbody className="divide-y divide-slate-200">
                      {Object.entries(productData.specifications).map(([key, value], idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="px-6 py-4 font-semibold text-slate-900">{key}</td>
                          <td className="px-6 py-4 text-slate-600">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            {/* Reviews Tab */}
            <TabsContent value="reviews" className="space-y-6">
              <div className="max-w-4xl mx-auto space-y-6">
                {reviews.map((review, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="font-semibold text-slate-900">{review.name}</p>
                      </div>
                      <span className="text-sm text-slate-500">{review.date}</span>
                    </div>
                    <p className="text-slate-600">{review.text}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Pure, Clean Water?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Order your Activated Carbon Block filter today and enjoy crystal-clear water throughout your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleAddToCart}
              className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-8 py-6 text-lg font-semibold"
            >
              Add to Cart
              <ShoppingCart className="w-5 h-5 ml-2" />
            </Button>
            <Link to={createPageUrl('FilterCartridges')}>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold">
                View All Cartridges
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}