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
  id: 'force-field-10',
  name: 'Under-the-Counter FF (Force Field) DOE Filter Cartridge',
  shortName: 'Force Field (10")',
  subtitle: 'Triple Clear Water Solutions – Force Field Filter Technology',
  originalPrice: 169.95,
  price: 149.95,
  rating: 0,
  reviewCount: 0,
  image: 'https://hydroflow-usa.com/wp-content/uploads/2024/05/FF-10-inch.webp',
  specifications: {
    'Weight': '1 lb',
    'Dimensions': '13" × 3" × 3"',
    'Height': '10"',
    'Diameter': '2.5"',
    'Filter Head': 'Double Open Ended (DOE)',
    'Certifications': 'NSF/ANSI 61 & 42',
    'Micron Size': '1',
    'Operating Temperature': '40°F to 125°F (4°C to 52°C)',
    'Flow Rate': '7 GPM'
  },
  features: [
    'Removes up to 99.9999% of Viruses, Bacteria & Parasites',
    'Triple Filter Purified with Force Field™ Protection',
    'Certified to NSF/ANSI 61 & 42 standards',
    'Meets established EPA drinking water standards',
    'Commercial-grade filtration technology',
    'Designed to stop water flow when filter needs changing'
  ],
  benefits: [
    'Water on Demand - Delivers the highest-quality, great-tasting water for drinking & filling reusable bottles',
    'Healthy & Mineral Rich - Blocks the bad stuff in water while keeping healthy minerals',
    'Eco & Budget-Friendly - Save on expensive single-use plastic water bottles & reduce carbon footprint'
  ],
  filterTech: [
    'Mechanical Filter - A 1-micron mechanical filter removes large particles (i.e. sand, rust)',
    'Carbon Filter - Removes heavy metals (i.e. lead, iron), bad tastes & odors, and organic materials',
    'Electroadsorptive Tech - Patented electroadsorptive Force Field layer removes negatively charged particles like viruses, bacteria, and parasites'
  ],
  removes: [
    'Arsenic',
    'Bacteria',
    'Bromate',
    'Chloramine',
    'Chlorine',
    'Chromium IV',
    'Cysts',
    'Lead',
    'Mercury',
    'Viruses',
    'VOCs'
  ]
};

export default function ProductForceField10() {
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

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-slate-400 line-through text-2xl">${productData.originalPrice}</span>
                <span className="text-4xl font-bold text-slate-900">${productData.price}</span>
              </div>

              {/* Tagline */}
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-2">{productData.subtitle}</h2>
                <p className="text-lg font-semibold text-cyan-600 mb-2">Safe. Clean. Delicious. H2O.</p>
                <p className="text-slate-700">Triple Filter Purified. Force Field™ Protected.</p>
              </div>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed">
                Each year, 19 million Americans become ill from contaminated water. The quality of your local 
                water supply can change every single day. When you see the Triple Clear drop, know the water 
                you're drinking is filtered by the safest, most advanced technology in the market today.
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
                  <span className="text-sm text-slate-700">NSF/ANSI 61 & 42 Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <Droplet className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm text-slate-700">99.9999% Virus & Bacteria Removal</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm text-slate-700">1 Micron Triple Filtration</span>
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
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
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
                <h2 className="text-2xl font-bold text-slate-900 mb-6">The Force Field Difference</h2>
                <div className="grid md:grid-cols-3 gap-6">
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

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">The Secret Weapon: Force Field Filter Tech</h2>
                <p className="text-slate-600 mb-6">
                  Our patented Force Field Filter technology triple filters, cleans, and protects water as it 
                  flows through more than 400 layers of filtration with three powerful technologies:
                </p>
                <div className="space-y-4">
                  {productData.filterTech.map((tech, idx) => {
                    const [title, ...desc] = tech.split(' - ');
                    return (
                      <div key={idx} className="bg-slate-50 rounded-xl p-6">
                        <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                        <p className="text-slate-600">{desc.join(' - ')}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Force Field Filter Technology Reduces or Removes</h2>
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

              <div className="bg-slate-900 text-white rounded-2xl p-8">
                <p className="text-lg leading-relaxed">
                  Experience the difference with Triple Clear Water Solutions and enjoy safe, clean, and 
                  delicious water every day.
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
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Triple-Filtered Water?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Order your Force Field filter today and experience the ultimate in water purification.
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