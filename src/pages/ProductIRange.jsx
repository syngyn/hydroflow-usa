import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Check, Package, Shield, Zap, ArrowRight, Factory, Droplets } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function ProductIRange() {

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
            <span className="text-slate-900">Industrial Range</span>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Combined Image */}
            <div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative bg-slate-50 rounded-3xl overflow-hidden flex items-center justify-center p-8"
              >
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/9f1053a47_irange1.png"
                  alt="<i>Hydro</i>FLOW <i>i</i> Range"
                  className="w-full max-w-lg h-auto object-contain drop-shadow-2xl"
                  style={{ transform: 'scale(0.78)' }}
                />
              </motion.div>
            </div>

            {/* Product Info */}
            <div>
              <Badge className="bg-slate-800 text-white mb-4">
                <Factory className="w-3 h-3 mr-1" />
                Industrial & Commercial
              </Badge>
              
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                <i>Hydro</i>FLOW <i>i</i> Range
              </h1>

              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                The <i>Hydro</i>FLOW <i>i</i> Range water conditioner provides a chemical-free solution for the harmful effects of scale, corrosion, bacteria, and algae within the industrial, commercial and agriculture sectors. This durable water conditioner is fully encapsulated and waterproof, with an IP rating of 68 (NEMA 6P).
              </p>

              <div className="mb-6">
                <Badge className="bg-cyan-100 text-cyan-700 mb-2">Heavy-Duty Industrial Solution</Badge>
                <p className="text-sm text-slate-600">Fits pipes from 25mm (1") to 200mm (7⅞") outer diameter</p>
                <p className="text-sm text-slate-600 mt-1">Custom sizes available for larger pipes</p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 mb-8">
                <p className="text-slate-900 font-semibold mb-2">Custom Solutions Available</p>
                <p className="text-slate-600 text-sm">
                  Contact us for a quote tailored to your specific industrial application and pipe size requirements.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <Link to={createPageUrl('Contact')}>
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full py-6 text-lg font-semibold">
                    Request More Information
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to={createPageUrl('Savings')}>
                  <Button variant="outline" className="w-full rounded-full py-6 text-lg">
                    Cooling Tower ROI Calculator
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <Shield className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold">IP68 Rated</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <Droplets className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold">Waterproof</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <Zap className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold">Easy Install</p>
                </div>
              </div>

              <div className="bg-cyan-50 border-l-4 border-cyan-400 p-4 mb-4">
                <p className="text-sm text-cyan-900">
                  <strong>Key Feature:</strong> Embedded power supply inside transducer with hardwired brass electrical connector for extreme durability.
                </p>
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
                        src="https://player.vimeo.com/video/110159146"
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
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Installation Instruction</h4>
                    <div className="aspect-video rounded-xl overflow-hidden bg-slate-100">
                      <iframe
                        src="https://player.vimeo.com/video/237775492"
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
                    'Cooling Towers.',
                    'Boilers.',
                    'Heat Exchangers.',
                    'Chillers.',
                    'Filtration Systems.',
                    'Dewatering Systems.',
                    'Irrigation Systems.',
                    'Power Generation.'
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
                    'Dissolves and removes existing scale.',
                    'Prevents new scale accumulation.',
                    'Deactivates bacteria and algae.',
                    'Prevents and removes biofoul.',
                    'Boosts filtration efficiency.',
                    'Significantly reduces corrosion.'
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
                    'Reduces energy consumption.',
                    'Increases efficiency of water heating equipment and machinery.',
                    'Eliminates or decreases chemical usage.',
                    'Decreases need for chemical safety precautions, storage and disposal.',
                    'Reduces maintenance costs.',
                    'Average one to two year payback period.'
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
                  'Non-intrusive and easy to install - no plumbing modifications required.',
                  'Propagates the Hydropath signal along the entire water system.',
                  'Provides 24-hour protection.',
                  'Does not interfere with other electrical systems.'
                 ].map((benefit) => (
                   <li key={benefit} className="flex items-center gap-2 text-slate-700">
                     <Check className="w-5 h-5 text-cyan-600 flex-shrink-0" />
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
                  { label: 'Input Frequency', value: '47-63 Hz' },
                  { label: 'IP Rating', value: 'IP68 (NEMA 6P)' },
                  { label: 'Pipe Size Range', value: '25mm (1") to 200mm (7⅞") OD' },
                  { label: 'Custom Sizes', value: 'Available for larger pipes' },
                  { label: 'Enclosure', value: 'Fully waterproof and dustproof' },
                  { label: 'EMI Filter', value: 'Built-in' },
                  { label: 'Power Supply', value: 'Embedded inside transducer' }
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
                    '<i>Hydro</i>FLOW General Brochure',
                    '<i>Hydro</i>FLOW Commercial Brochure',
                    '<i>Hydro</i>FLOW Cooling Tower Brochure',
                    '<i>Hydro</i>FLOW Food Processing Brochure',
                    '<i>Hydro</i>FLOW Hotel Industry Brochure',
                    '<i>Hydro</i>FLOW Wastewater Brochure',
                    '<i>Hydro</i>FLOW Steam Boiler Protection',
                    '<i>Hydro</i>FLOW Swimming Pool Brochure',
                    '<i>Hydro</i>FLOW Mining Industry Brochure',
                    '<i>i</i> Range Specification and Installation',
                    '<i>i</i> Range Custom Specification',
                    '<i>i</i> Range Multi-head Specification'
                  ].map((doc) => (
                    <Button 
                      key={doc} 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => {
                        if (doc === '<i>i</i> Range Multi-head Specification') {
                          window.open('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/21ddd2e8b_HydroFLOW-i-Range-Custom-Multihead-Spec-Guide.pdf', '_blank');
                        }
                      }}
                    >
                      <Package className="w-4 h-4 mr-2" />
                      <span dangerouslySetInnerHTML={{ __html: doc }} /> (PDF)
                    </Button>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Our team can design a <i>Hydro</i>FLOW solution tailored to your specific industrial requirements.
          </p>
          <Link to={createPageUrl('Contact')}>
            <Button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full px-8 py-6 text-lg font-semibold">
              Contact Our Experts
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}