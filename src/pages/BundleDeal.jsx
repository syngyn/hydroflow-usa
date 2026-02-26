import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Star, Check, Package, Shield, Zap, ArrowRight, ChevronRight, Home, Leaf, Droplets, ChevronLeft } from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { StarRating } from "@/components/ui/star-rating";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from '@/components/cart/CartContext';
import { toast } from 'sonner';

const images = [
  'https://hydroflow-usa.com/wp-content/uploads/2024/04/bundle-deal-2.jpg',
  'https://hydroflow-usa.com/wp-content/uploads/2024/04/The-power-of-two.jpg',
  'https://hydroflow-usa.com/wp-content/uploads/2024/04/bundle-tough-on-biofilm.jpg',
  'https://hydroflow-usa.com/wp-content/uploads/2024/04/whats-in-the-box-bundle.jpg',
  'https://hydroflow-usa.com/wp-content/uploads/2024/04/Bundle-ease-of-install.jpg',
  'https://hydroflow-usa.com/wp-content/uploads/2024/04/bundle-heating-element.jpg'
];

export default function BundleDeal() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const { addToCart } = useCart();

  const bundleProduct = {
    id: 'pearl-plus-bundle',
    name: 'Pearl Plus Bundle',
    price: 745,
    originalPrice: 790,
    image: images[0],
    coverage: 'Homes over 3,000 sq ft'
  };

  const handleAddToCart = () => {
    addToCart(bundleProduct);
    toast.success('Bundle added to cart!');
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Pearl Plus Bundle Deal - <i>Hydro</i>FLOW Water Treatment for Large Homes</title>
        <meta name="description" content="Get the HydroFLOW Pearl Plus Bundle with Pearl Booster for homes over 3,000 sq ft. Save $45 on this chemical-free water conditioning system. 5-year warranty included." />
      </Helmet>
      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link to={createPageUrl('Home')} className="hover:text-cyan-600">Home</Link>
            <span>/</span>
            <Link to={createPageUrl('Products')} className="hover:text-cyan-600">Products</Link>
            <span>/</span>
            <span className="text-slate-900">Pearl Plus Bundle</span>
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
                  alt="<i>Hydro</i>FLOW Pearl Plus Bundle"
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
              <div className="flex gap-2 overflow-x-auto ml-4">
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
            </div>

            {/* Product Info */}
            <div>
              <Badge className="bg-green-100 text-green-700 mb-4">BUNDLE DEAL</Badge>
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                <i>Hydro</i>FLOW Pearl Plus with Pearl Booster
              </h1>

              <div className="flex items-center gap-4 mb-4">
                <StarRating rating={4.67} size="w-5 h-5" />
                <span className="text-slate-600">4.67 out of 5 (3 reviews)</span>
              </div>

              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                The <i>Hydro</i>FLOW bundle deal combines the Pearl Plus with a booster Pearl device. We recommend a booster for homes above 3,000 SQFT. The Pearl Plus unit fits Copper/PVC/PEX pipes up to 1.5" outer diameter. The Pearl Booster unit fits Copper/PVC/PEX pipes up to 1" outer diameter.
              </p>

              <div className="mb-6 space-y-3">
                <Badge className="bg-cyan-100 text-cyan-700 mb-2">Perfect for Homes Over 3,000 SQFT</Badge>
                
                <div className="bg-slate-50 p-4 rounded-xl space-y-2">
                  <p className="text-sm font-semibold text-slate-900">Bundle Includes:</p>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700">1× <i>Hydro</i>FLOW Pearl Plus (up to 1.5" pipes)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700">1× <i>Hydro</i>FLOW Pearl Booster (up to 1" pipes)</span>
                  </div>
                </div>
              </div>

              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-4xl font-bold text-slate-900">$745.00</span>
                <span className="text-2xl text-slate-400 line-through">$790.00</span>
                <Badge className="bg-green-100 text-green-700">Save $45</Badge>
              </div>

              <div className="space-y-4 mb-8">
                <Button 
                  onClick={handleAddToCart}
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full py-6 text-lg font-semibold"
                >
                  Add Bundle to Cart
                  <Package className="w-5 h-5 ml-2" />
                </Button>
                <a href="https://www.amazon.com/HYDROFLOW-Friendly-Alternative-Softeners-Descaler/dp/B0CR6ZKT3S?ref_=ast_sto_dp" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full rounded-full py-6 text-lg">
                    Buy on Amazon
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <Shield className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold">5 Year Warranty</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <Zap className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold">DIY Install</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <Leaf className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold">Eco-Friendly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Choose the Bundle?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                  <Droplets className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Easily Wipe Away Scale</h3>
                  <p className="text-slate-700">
                    <i>Hydro</i>FLOW's advanced technology electronically treats water to prevent minerals from binding to pipes, water heaters, faucets, etc. Making clean up a simple wipe.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Easy Installation</h3>
                  <p className="text-slate-700">
                    <i>Hydro</i>FLOW requires no plumbing modifications for its non-intrusive and easy installation. The unit easily attaches to your cold-water line.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Earth Friendly</h3>
                  <p className="text-slate-700">
                    We've ditched the nasty chemicals and salt and designed <i>Hydro</i>FLOW's electronic water conditioners to be entirely earth friendly. No more salt bags!
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Eradicate Biofilm</h3>
                  <p className="text-slate-700">
                    Biofilm that passes through the unit is deactivated by direct exposure to the Hydropath signal, preventing biofilm formation in your pipes.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-8 bg-white rounded-xl p-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Compatible With Multiple Pipe Types</h3>
            <p className="text-slate-700 mb-4">
              <i>Hydro</i>FLOW is designed to work with many different types of pipe that could be installed in your house.
            </p>
            <div className="flex flex-wrap gap-3">
              {['PVC', 'Copper', 'Galvanized', 'PEX'].map((type) => (
                <Badge key={type} variant="outline" className="text-cyan-700 border-cyan-300">{type}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Installation Instructions */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Installation Resources</h2>
          <div className="space-y-3">
            <a href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/b62feb902_HydroFLOW-Pearl-Plus-User-Guide2026.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full justify-start text-left">
                <Package className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="whitespace-nowrap"><i>Hydro</i>FLOW</span> Pearl Plus User Guide (PDF)
              </Button>
            </a>
            <a href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/bae9e79a4_HydroFLOW-Pearl-User-Guide-January-2026.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full justify-start text-left">
                <Package className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="whitespace-nowrap"><i>Hydro</i>FLOW</span> Pearl User Guide (PDF)
              </Button>
            </a>
            <a href="https://hydroflow-usa.com/wp-content/uploads/2024/04/HydroFLOW-Residential-Brochure-January-2023.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full justify-start text-left">
                <Package className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="whitespace-nowrap"><i>Hydro</i>FLOW</span> Residential Brochure (PDF)
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Customer Reviews</h2>
          <div className="flex items-center gap-4 mb-8">
            <StarRating rating={4.67} size="w-5 h-5" />
            <span className="text-slate-600">4.67 out of 5 based on 3 reviews</span>
          </div>

          <div className="space-y-6">
            {[
              { 
                name: 'Tammy Meagher', 
                date: 'May 2, 2024', 
                rating: 5, 
                text: 'I can\'t recommend the <i>Hydro</i>FLOW Pearl Plus bundle deal enough! Easy Scale Prevention: Since installing the system, I\'ve noticed a huge difference in how easy it is to wipe away hard water stains. Eco-Friendly Solution: I love that the <i>Hydro</i>FLOW system is chemical-free and doesn\'t use salt. DIY Installation: Even though I\'m not the handiest person, I was able to install the Pearl Plus myself with no problems. Perfect for Bigger Homes: The bundle with the Pearl Booster was ideal for my house because it\'s over 3,000 square feet. Great Value: The bundle price felt very reasonable considering the benefits I\'m getting. Overall, I\'m so happy with my <i>Hydro</i>FLOW Pearl Plus bundle. Highly recommend!' 
              },
              { 
                name: 'DeeG', 
                date: 'July 20, 2024', 
                rating: 5, 
                text: 'Having previously installed <i>Hydro</i>FLOW units on our residence about 4½ years ago, we achieved dramatic results. Our water hardness is 144 PPM. Scale would build up on the shower head to be visible, start to plug the spray. Not anymore. The dishwasher used to have a haze on the dishes. They are spotless now. The units continue to perform flawlessly. They draw about 1.2 watts per unit, which costs less than $5 per year to operate. Due to the current amazing performance, we purchased a <i>Hydro</i>FLOW Pearl Plus with Pearl Booster for our RV. So far, it appears to mirror the results in our house. We highly recommend <i>Hydro</i>FLOW as an economical, cost effective, environmentally friendly, maintenance free solution.' 
              },
              { 
                name: 'Dan', 
                date: 'February 19, 2025', 
                rating: 4, 
                text: 'Installation was super easy. Took less than 30 minutes to install both units.' 
              }
            ].map((review, idx) => (
              <Card key={idx} className="p-6">
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
                <p className="text-slate-700">
                  {review.text.split('HydroFLOW').map((part, i) => (
                    <React.Fragment key={i}>
                      {part}
                      {i < review.text.split('HydroFLOW').length - 1 && <><i>Hydro</i>FLOW</>}
                    </React.Fragment>
                  ))}
                </p>
              </Card>
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
                <Card className="p-6">
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
                      <Textarea placeholder="Share your experience with this bundle" rows={4} />
                    </div>
                    <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700">
                      Submit Review
                    </Button>
                  </form>
                </Card>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </section>
    </div>
  );
}