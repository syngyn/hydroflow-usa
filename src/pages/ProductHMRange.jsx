import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Check, Package, Shield, Zap, ArrowRight, Ship, Anchor } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const images = [
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/a5c8f2161_ProductRange2025standardunitsv3690.png'
];

export default function ProductHMRange() {
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
            <span className="text-slate-900"><i>hm</i> Range</span>
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
                  alt="<i>Hydro</i>FLOW <i>hm</i> Range"
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
              <Badge className="bg-blue-700 text-white mb-4">
                <Ship className="w-3 h-3 mr-1" />
                Marine Applications
              </Badge>
              
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                <i>Hydro</i>FLOW <i>hm</i> Range
              </h1>

              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                The Hydropath Marine <i>hm</i> Range is specifically designed for operation on marine vessels. It provides water treatment benefits, including scale protection and biofouling control, in both fresh and sea water. Fully encapsulated and waterproof with IP68 rating and specially-designed surge protector.
              </p>

              <div className="mb-6">
                <Badge className="bg-cyan-100 text-cyan-700 mb-2">
                  <Anchor className="w-3 h-3 mr-1" />
                  Marine-Grade Solution
                </Badge>
                <p className="text-sm text-slate-600">Fits pipes from 25mm (1") to 200mm (7⅞") outer diameter</p>
                <p className="text-sm text-slate-600 mt-1">Custom sizes available for larger pipes</p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <p className="text-sm text-blue-900">
                  <strong>Marine Certified:</strong> Designed specifically for harsh marine environments with enhanced surge protection.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 mb-8">
                <p className="text-slate-900 font-semibold mb-2">Custom Marine Solutions</p>
                <p className="text-slate-600 text-sm">
                  Contact us for a quote tailored to your vessel's specific requirements and pipe configurations.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <Link to={createPageUrl('Contact')}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full py-6 text-lg font-semibold">
                    Request More Information
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to={createPageUrl('Marine')}>
                  <Button variant="outline" className="w-full rounded-full py-6 text-lg">
                    Learn About Marine Solutions
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <Shield className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold">IP68 Rated</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <Zap className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold">Surge Protected</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <Ship className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold">Marine Grade</p>
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
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Product Videos</h3>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Product Overview</h4>
                    <div className="aspect-video rounded-xl overflow-hidden bg-slate-100">
                      <iframe
                        src="https://player.vimeo.com/video/103957209"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Installation Instructions</h4>
                    <div className="aspect-video rounded-xl overflow-hidden bg-slate-100">
                      <iframe
                        src="https://player.vimeo.com/video/148407238"
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
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Popular Applications</h3>
                <ul className="space-y-2">
                  {[
                    'Fresh Water Generators',
                    'UV Sterilizers',
                    'Heat Exchangers',
                    'Cooling Systems',
                    'Marine HVAC Systems',
                    'Ballast Water Systems'
                  ].map((app) => (
                    <li key={app} className="flex items-center gap-2 text-slate-700">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
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
                    'Significantly reduces corrosion',
                    'Suitable for multiple applications - fresh water and cooling systems'
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-slate-700">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
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
                    'Average one to two year payback period'
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-slate-700">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
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
                   'Provides 24 hour protection',
                   'Does not interfere with other electrical systems'
                 ].map((benefit) => (
                   <li key={benefit} className="flex items-center gap-2 text-slate-700">
                     <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                     {benefit}
                   </li>
                 ))}
               </ul>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                <p className="text-sm text-amber-900">
                  Installation of this device does not replace periodic equipment preventative maintenance procedures.
                </p>
              </div>
              </TabsContent>

            <TabsContent value="specs" className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Technical Specifications</h3>
              <div className="bg-white rounded-xl p-6 space-y-4">
                {[
                  { label: 'Input Voltage', value: '87-240V AC' },
                  { label: 'Input Power', value: '65W Maximum (20W Typical)' },
                  { label: 'Input Frequency', value: '47-63 Hz' },
                  { label: 'IP Rating', value: 'IP68' },
                  { label: 'Pipe Size Range', value: '25mm (1") to 200mm (7⅞") OD' },
                  { label: 'Custom Sizes', value: 'Available for larger pipes' },
                  { label: 'Enclosure', value: 'Fully waterproof and dustproof' },
                  { label: 'EMI Filter', value: 'Built-in' },
                  { label: 'Surge Protection', value: 'Marine-grade surge protector' },
                  { label: 'Operating Environment', value: 'Fresh and sea water' }
                ].map((spec) => (
                  <div key={spec.label} className="flex justify-between py-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-700">{spec.label}</span>
                    <span className="text-slate-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="resources">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Download Resources</h3>
                <div className="space-y-3">
                  {[
                    'Hydropath Marine Brochure',
                    'Hydropath <i>hm</i> Range Specification',
                    'Hydropath <i>hm</i> Range Installation Guide'
                  ].map((doc) => (
                    <Button 
                      key={doc} 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => {
                        if (doc === 'Hydropath Marine Brochure') {
                          window.open('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/9306506ea_Marine-Brochure.pdf', '_blank');
                        } else if (doc === 'Hydropath <i>hm</i> Range Specification') {
                          window.open('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/31da6063b_HydropathMarineSpecGuide.pdf', '_blank');
                        } else if (doc === 'Hydropath <i>hm</i> Range Installation Guide') {
                          window.open('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/55130d803_HydropathMarineHMRangeInstallationGuide.pdf', '_blank');
                        }
                      }}
                    >
                      <Package className="w-4 h-4 mr-2" />
                      {doc} (PDF)
                    </Button>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Ship className="w-16 h-16 mx-auto mb-6 text-cyan-400" />
          <h2 className="text-3xl font-bold mb-4">
            Protect Your Vessel's Water Systems
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Our marine specialists can help you select and configure the right <i>Hydro</i>FLOW solution for your vessel.
          </p>
          <Link to={createPageUrl('Contact')}>
            <Button className="bg-white text-blue-900 hover:bg-slate-100 rounded-full px-8 py-6 text-lg font-semibold">
              Contact Marine Specialists
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}