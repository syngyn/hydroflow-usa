import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Star, Check, Package, Shield, Zap, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import InstallationGuide from '@/components/products/InstallationGuide';

const images = [
  'https://hydroflow-usa.com/wp-content/uploads/2023/08/pearl-transparent.webp',
  'https://hydroflow-usa.com/wp-content/uploads/2023/08/54751673473275.jpg',
  'https://hydroflow-usa.com/wp-content/uploads/2023/08/29181677886890.png',
  'https://hydroflow-usa.com/wp-content/uploads/2023/08/41661675266257.png',
  'https://hydroflow-usa.com/wp-content/uploads/2023/08/85731673473417.jpg'
];

export default function ProductPearl() {
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
                  alt="HydroFLOW Pearl"
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
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                <i>Hydro</i>FLOW Pearl
              </h1>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < 4 ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`}
                    />
                  ))}
                </div>
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
              <InstallationGuide
                estimatedTime="15-20 minutes"
                videoUrl="https://player.vimeo.com/video/794553225"
                pdfUrl="https://hydroflow-usa.com/wp-content/uploads/2024/04/HydroFLOW-Pearl-User-Guide-January-2023.pdf"
                components={[
                  { name: "HydroFLOW Pearl Unit", description: "The main water conditioning device" },
                  { name: "Power Supply (12V DC)", description: "Included adapter to power the unit" },
                  { name: "Transducer Cable", description: "Wraps around your water pipe" },
                  { name: "Zip Ties", description: "For securing the transducer" },
                  { name: "Adjustable Wrench (optional)", description: "If accessing difficult pipe locations" }
                ]}
                steps={[
                  {
                    title: "Turn Off Water Supply",
                    summary: "Safety first - shut off water to the installation area",
                    description: "Before beginning installation, locate and turn off the water supply to ensure a safe working environment. This is not always necessary but recommended for peace of mind.",
                    details: [
                      "Locate your main water shutoff valve (usually near the water meter)",
                      "Turn the valve clockwise until fully closed",
                      "Open a faucet to release pressure in the lines"
                    ],
                    tip: "Take a photo of the valve location for future reference"
                  },
                  {
                    title: "Choose Installation Location",
                    summary: "Select the optimal spot on your main water line",
                    description: "The Pearl works best when installed on the main water line after the meter, or directly before specific equipment you want to protect.",
                    details: [
                      "Identify copper, PVC, or PEX pipe up to 1\" outer diameter",
                      "Choose a location within 3 meters of a power outlet",
                      "Ensure the pipe is clean and accessible",
                      "Leave 6 inches of straight pipe on either side"
                    ],
                    warning: "Do not install on pipes larger than 1\" diameter - the Pearl is designed for smaller applications",
                    tip: "For RVs or apartments, install as close to the water entry point as possible"
                  },
                  {
                    title: "Wrap the Transducer",
                    summary: "Attach the signal-inducing transducer around the pipe",
                    description: "The transducer is what sends the HydroFLOW signal through your water system. Proper wrapping ensures optimal performance.",
                    details: [
                      "Clean the pipe surface where you'll wrap the transducer",
                      "Wrap the transducer cable tightly around the pipe in a coil",
                      "Ensure coils are touching and cover about 4-6 inches of pipe",
                      "Secure with provided zip ties"
                    ],
                    tip: "The tighter the wrap, the better the signal transmission. Make sure there are no gaps between coils."
                  },
                  {
                    title: "Mount the Control Unit",
                    summary: "Position the Pearl unit near the transducer",
                    description: "Mount the HydroFLOW Pearl control unit within reach of the transducer cable.",
                    details: [
                      "Find a dry location near the pipe (within cable reach)",
                      "Mount using screws or adhesive (mounting hardware included)",
                      "Ensure LED indicators are visible for monitoring",
                      "Keep away from direct water exposure"
                    ],
                    warning: "Do not mount in areas with excessive moisture or direct water spray"
                  },
                  {
                    title: "Connect Power Supply",
                    summary: "Plug in the 12V DC adapter",
                    description: "Connect the included power supply to activate your HydroFLOW Pearl unit.",
                    details: [
                      "Connect the 12V DC adapter to the Pearl unit",
                      "Plug the adapter into a standard 110V outlet",
                      "Verify the LED indicator lights up (shows signal transmission)",
                      "The unit will begin working immediately"
                    ],
                    tip: "Use a surge protector for added electrical protection"
                  },
                  {
                    title: "Test and Verify",
                    summary: "Confirm proper installation and operation",
                    description: "Final checks to ensure your Pearl is working correctly and protecting your water system.",
                    details: [
                      "Turn water supply back on slowly",
                      "Check for any leaks (there shouldn't be any since no pipes were cut)",
                      "Verify LED indicator is lit and flashing",
                      "Run water at a fixture and listen for the unit's operation"
                    ],
                    tip: "The LED will flash to indicate the signal is propagating through your water system. This is normal operation."
                  }
                ]}
              />
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
                <Star key={i} className={`w-5 h-5 ${i < 4 ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`} />
              ))}
            </div>
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

      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">You May Also Like</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Pearl Plus', price: 495, image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/971b89f11_PearlPlus.png' },
              { name: 'HS40', price: 1990, image: 'https://hydroflow-usa.com/wp-content/uploads/2024/10/hs40-grey-background-800x800.webp' }
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