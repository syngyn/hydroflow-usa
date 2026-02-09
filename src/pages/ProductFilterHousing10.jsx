import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Shield, Star, ShoppingCart, Droplet, Minus, Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useCart } from '@/components/cart/CartContext';
import { toast } from 'sonner';

const productData = {
  id: 'filter-housing-10',
  name: '10" Under-the-Counter Stainless Steel Housing with DOE Filter Head',
  shortName: '10" Stainless Steel Filter Housing',
  subtitle: '10" x 2.5" Stainless Steel Water Filter Housing',
  price: 249.95,
  rating: 4,
  reviewCount: 4,
  images: [
    'https://hydroflow-usa.com/wp-content/uploads/2023/08/10_inch_housing.webp',
    'https://hydroflow-usa.com/wp-content/uploads/2023/08/10-inch-Housing.png'
  ],
  specifications: {
    'Weight': '7 lbs',
    'Dimensions': '16" × 8" × 6"',
    'Height': '10"',
    'Depth': '2.5"',
    'Filter Head': 'Double Open Ended (DOE)',
    'Material': '304 Stainless Steel'
  },
  features: [
    'High-Quality Construction - Made from 304 stainless steel, built to withstand high pressure and resist corrosion',
    'Universal Compatibility - Fits all standard 10" x 2.5" filter cartridges',
    'Secure Seal - Equipped with robust swing bolt clamp to prevent leaks',
    'Installation Hardware - Comes with mounting bracket',
    'Wide Range of Applications - Ideal for homes, offices, restaurants, and industrial settings'
  ],
  benefits: [
    'Durability - Stainless steel construction ensures a long lifespan and reliable performance',
    'Versatility - Compatible with a wide range of filter cartridges for various filtration needs'
  ]
};

const reviews = [
  { name: 'Till', rating: 3, date: 'April 22, 2025', text: "Why doesn't this come with the hoses to hook it up?" },
  { name: 'Jonny', rating: 5, date: 'March 4, 2025', text: 'Stainless steel under the counter. Very high class and not like others on the market' },
  { name: 'Stewart', rating: 5, date: 'February 18, 2025', text: "Nice 304 stainless steel. This will help with my corrosion issue I've been having. Love the clamp style instead of the screw on top." },
  { name: 'Anne', rating: 3, date: 'January 25, 2025', text: 'Stainless steel is cool but plastic ones are cheaper.' }
];

export default function ProductFilterHousing10() {
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
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="bg-white rounded-3xl p-12 shadow-lg">
                <img 
                  src={productData.images[selectedImage]}
                  alt={productData.name}
                  className="w-full h-auto object-contain"
                />
              </div>
              
              {/* Thumbnail Images */}
              <div className="flex gap-4">
                {productData.images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`flex-1 bg-white rounded-xl p-4 border-2 transition-all ${
                      selectedImage === idx ? 'border-cyan-500' : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <img 
                      src={image}
                      alt={`${productData.name} - ${idx + 1}`}
                      className="w-full h-auto object-contain"
                    />
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
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-5 h-5 ${
                        i < productData.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'
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
                <span className="text-4xl font-bold text-slate-900">${productData.price}</span>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900">{productData.subtitle}</h2>
                <p className="text-slate-600 leading-relaxed">
                  Upgrade your water filtration system with our premium 10" x 2.5" Stainless Steel Water 
                  Filter Housing. Designed for durability and efficiency, this housing is perfect for both 
                  residential and commercial applications.
                </p>
              </div>

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
                  <span className="text-sm text-slate-700">304 Stainless Steel Construction</span>
                </div>
                <div className="flex items-center gap-3">
                  <Droplet className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm text-slate-700">Fits 10" x 2.5" Cartridges</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm text-slate-700">Swing Bolt Clamp</span>
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
                  {productData.features.map((feature, idx) => {
                    const [title, ...desc] = feature.split(' - ');
                    return (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-semibold text-slate-900">{title}</span>
                          {desc.length > 0 && <span className="text-slate-600"> - {desc.join(' - ')}</span>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Benefits</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {productData.benefits.map((benefit, idx) => {
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

              <div className="bg-slate-900 text-white rounded-2xl p-8">
                <p className="text-lg leading-relaxed">
                  Upgrade your water filtration system today with our 10" x 2.5" Stainless Steel Water 
                  Filter Housing and enjoy the benefits of clean, safe water for years to come.
                </p>
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
            Ready to Upgrade Your Filtration System?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Order your premium stainless steel filter housing today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleAddToCart}
              className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-8 py-6 text-lg font-semibold"
            >
              Add to Cart
              <ShoppingCart className="w-5 h-5 ml-2" />
            </Button>
            <Link to={createPageUrl('FilterHousings')}>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold">
                View All Housings
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}