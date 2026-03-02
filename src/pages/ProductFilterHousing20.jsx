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
  id: 'filter-housing-20',
  name: '20" Whole Home Stainless Steel Housing with DOE Filter Head',
  shortName: '20" Stainless Steel Filter Housing',
  subtitle: 'Whole Home Stainless Steel Housing with DOE Filter Head fits 20" x 4.5" filter cartridges',
  price: 379.95,
  rating: 4.29,
  reviewCount: 7,
  images: [
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/311d70c27_20inchhousing.png',
    'https://hydroflow-usa.com/wp-content/uploads/2023/08/20_inch_housing.webp',
    'https://hydroflow-usa.com/wp-content/uploads/2023/08/20-inch-housing-apart.png',
    'https://hydroflow-usa.com/wp-content/uploads/2023/08/20-inch-housing-1.png'
  ],
  specifications: {
    'Weight': '15 lbs',
    'Dimensions': '31" × 9" × 9"',
    'Height': '20"',
    'Diameter': '4.5"',
    'Filter Head': 'Double Open Ended (DOE)',
    'Material': '304 Stainless Steel'
  },
  features: [
    'High-Quality Construction - Made from 304 stainless steel, built to withstand high pressure and resist corrosion',
    'Universal Compatibility - Fits all standard 20" x 4.5" DOE filter cartridges',
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
  { name: 'Royce', rating: 4, date: 'September 1, 2025', verified: true, text: 'This is super nice Stainless Steel filter chamber, should have purchased this to begin with and we wouldn\'t have had a flooded garage when the plastic Big Blue bottom blew out. The only reason I didn\'t give this 5 stars is because the drain valve didn\'t come with a rubber washer or "O" Ring which is needed to seal it. Fortunately I had a 20mmx 2.5mm "O" ring in my shop so didn\'t need a trip to the hardware store. The other item worth mentioning is the clear, I believe silicone material gasket, is specific to this filter brand or style which means its going to be difficult to find a replacement if necessary. A much smarter design would have been a generic "O" Ring for the main seal as those are easy to source online. Also an "O" Ring in a groove stays in place much easier. The design of this filter and gasket makes it very difficult to get the top, bottom and gasket all lined up while installing the clam clamp especially if the filter chamber is in an awkward mounting position like ours had to be.' },
  { name: 'Kelvin', rating: 5, date: 'May 9, 2025', verified: false, text: 'So glad I found these!!! I don\'t want to have my water filtered in plastic. It doesn\'t take a rocket scientist to understand thats not a good plan.' },
  { name: 'Monica', rating: 5, date: 'May 1, 2025', verified: false, text: 'Great product overall. Sleek stainless finish and solid feel.' },
  { name: 'Paul', rating: 4, date: 'March 31, 2025', verified: false, text: 'Solid product, beautifully made and easy to maintain. Just wish the replacement cartridges were a bit cheaper.' },
  { name: 'Heath', rating: 5, date: 'March 9, 2025', verified: false, text: 'Absolutely love the stainless steel housing by HydroFLOW. The quality is evident immediately upon handling it.' },
  { name: 'Jason', rating: 5, date: 'February 9, 2025', verified: false, text: 'Love this stainless steel housing. I have been searching everywhere to locate one that doesn\'t screw in at the top. The clamp style is 20 times better!' },
  { name: 'Victor', rating: 2, date: 'January 2, 2025', verified: false, text: 'The stainless steel looks great but is prone to fingerprint smudges and spots easily. Constantly cleaning it.' }
];

export default function ProductFilterHousing20() {
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
              <div className="grid grid-cols-3 gap-4">
                {productData.images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`bg-white rounded-xl p-4 border-2 transition-all ${
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
                        i < Math.round(productData.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'
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
                  Upgrade your whole home water filtration system with our premium 20" x 4.5" Stainless 
                  Steel Water Filter Housing. Designed for durability and efficiency, this housing is 
                  perfect for both residential and commercial applications.
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
                  <span className="text-sm text-slate-700">Fits 20" x 4.5" DOE Cartridges</span>
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
                  Upgrade your water filtration system today with our 20" x 4.5" Stainless Steel Water 
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
                    transition={{ delay: idx * 0.05 }}
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
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-slate-900">{review.name}</p>
                          {review.verified && (
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                              Verified Owner
                            </span>
                          )}
                        </div>
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
            Ready to Upgrade Your Whole Home Filtration?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Order your premium 20" stainless steel filter housing today.
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