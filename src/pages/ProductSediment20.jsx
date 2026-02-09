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
  id: 'sediment-20',
  name: 'SED (Sediment) 20" x 4.5" DOE Filter Cartridge',
  shortName: 'Sediment Filter (20")',
  subtitle: 'High-Quality 20"×4.5" Sediment Filter',
  price: 19.95,
  rating: 4.5,
  reviewCount: 2,
  image: 'https://hydroflow-usa.com/wp-content/uploads/2023/08/SED20-inch-cartridge.png',
  specifications: {
    'Weight': '2 lbs',
    'Dimensions': '20" × 4.5" × 4.5"',
    'Height': '20"',
    'Diameter': '4.5"',
    'Filter Head': 'Double Open Ended (DOE)',
    'Micron': '5',
    'Flow Rate': 'High capacity'
  },
  features: [
    'Premium Filtration - Engineered to capture and remove particles as small as 5 microns, providing crystal-clear water',
    'Durable Construction - Made from high-quality polypropylene, built to last and withstand high water pressure',
    'Universal Fit - Compatible with most standard 20"×4.5" filter housings',
    'Extended Lifespan - High dirt-holding capacity offers longer service life',
    'Eco-Friendly - Made from environmentally friendly materials and fully recyclable',
    'Easy Installation - Can be easily installed in standard double open ended filter housings'
  ],
  applications: [
    'Residential Use - Ideal for whole-house filtration systems, ensuring clean water for drinking, cooking, and bathing',
    'Commercial Use - Suitable for use in restaurants, hotels, and other businesses',
    'Industrial Use - Perfect for pre-filtration in industrial water treatment systems'
  ]
};

const reviews = [
  { name: 'Don', rating: 5, date: 'March 1, 2025', text: "I constantly have my city doing work on the lines and my water ends up with a bunch of sediment. I purchased this product 2 months ago and haven't seen any sediment in my water since." },
  { name: 'Alison', rating: 4, date: 'February 1, 2025', text: "Happy with the ability of this filter to clear up my water. It's expensive but works great." }
];

export default function ProductSediment20() {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: productData.id,
      name: productData.shortName,
      price: productData.price,
      image: productData.image,
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
                  src={productData.image}
                  alt={productData.name}
                  className="w-full h-auto object-contain"
                />
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
                <span className="text-4xl font-bold text-slate-900">${productData.price}</span>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900">{productData.subtitle}</h2>
                <p className="text-slate-600 leading-relaxed">
                  Experience superior water filtration with our high-quality 20"×4.5" sediment filter. 
                  Designed to effectively remove dirt, sand, silt, and rust particles, this filter ensures 
                  clean and clear water for your home or business. Its robust construction and advanced 
                  filtration technology make it an essential component for any water filtration system.
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
                  <span className="text-sm text-slate-700">High-Quality Polypropylene Construction</span>
                </div>
                <div className="flex items-center gap-3">
                  <Droplet className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm text-slate-700">5 Micron Filtration</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm text-slate-700">Universal 20" DOE Fit</span>
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
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Applications</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {productData.applications.map((app, idx) => {
                    const [title, ...desc] = app.split(' - ');
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
                  Our 20"×4.5" sediment filter is designed to deliver exceptional performance and reliability. 
                  Whether you need clean water for your home, business, or industrial application, this filter 
                  is the perfect choice. Invest in our high-quality sediment filter and enjoy the benefits of 
                  clean, clear water every day.
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
            Ready for Crystal-Clear Water?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Order your sediment filter today and experience superior water filtration.
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