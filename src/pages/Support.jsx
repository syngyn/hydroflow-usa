import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  Download, 
  Video, 
  FileText, 
  Wrench, 
  HelpCircle, 
  Phone, 
  Mail,
  BookOpen,
  PlayCircle,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  Search
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const installationGuides = [
  {
    product: 'Pearl',
    videoUrl: 'https://player.vimeo.com/video/1127697487',
    pdfUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/f20a0ef50_HydroFLOW-Pearl-User-Guide.pdf',
    steps: [
      'Locate the cold-water line going into the hot water tank',
      'Attach the unit around the pipe as close as possible to the hot water tank',
      'Plug the unit into a standard 110V outlet',
      'The LED indicator should be on. This means the unit is working'
    ]
  },
  {
    product: 'Pearl Plus',
    videoUrl: 'https://player.vimeo.com/video/1128025470',
    pdfUrl: 'https://hydroflow-usa.com/wp-content/uploads/2024/08/Pearl-Plus-Installation-Instructions-230524.pdf',
    steps: [
      'Locate the cold-water line going into the hot water tank',
      'Attach the unit around the pipe as close as possible to the hot water tank',
      'Plug the unit into a standard 110V outlet',
      'The LED indicator should be on. This means the unit is working'
    ]
  },
  {
    product: 'hs40',
    videoUrl: 'https://player.vimeo.com/video/250663038',
    pdfUrl: 'https://hydroflow-usa.com/wp-content/uploads/2025/10/HS40-Installation-Manual-230524.pdf',
    steps: [
      'Identify installation point on main line or pool circulation',
      'Mount hs40 unit on pipe using provided straps',
      'Build the ring of ferrites around the pipe with the provided threaded plastic screws',
      'Plug into a standard 110v wall outlet',
      'Verify unit operation via indicator light'
    ]
  }

];

const troubleshootingFAQs = [
  {
    question: 'LED indicator light is not on',
    answer: 'Check that the unit is plugged in and the outlet has power. Try plugging another device into the same outlet to verify. If the outlet works but the LED still doesn\'t light up, contact our support team.'
  },
  {
    question: 'How long until I see results?',
    answer: 'Most customers notice reduced scale buildup within 2-4 weeks. Existing scale will gradually break down over 3-6 months depending on severity. Water heaters and appliances will show improved efficiency within the first month.'
  },
  {
    question: 'Can I install it myself?',
    answer: 'Yes! Pearl and Pearl Plus are designed for easy DIY installation. Simply clamp the unit onto your main water line and plug it in. No plumbing modifications needed. For commercial/industrial units, professional installation is recommended.'
  },
  {
    question: 'Do I need to maintain the unit?',
    answer: 'HydroFLOW units are virtually maintenance-free. There are no filters to change, no salt to add, and no parts to replace. The unit works continuously once installed.'
  },
  {
    question: 'Will it work with my well water?',
    answer: 'Yes, HydroFLOW works with any water source including well water, city water, and hard water. It\'s particularly effective for well water with high mineral content.'
  },
  {
    question: 'What if I have PEX or plastic pipes?',
    answer: 'HydroFLOW works on all pipe materials including PEX, PVC, copper, and galvanized steel. The signal travels through any pipe material.'
  },
  {
    question: 'How much electricity does it use?',
    answer: 'HydroFLOW units are extremely energy efficient, using only 5-10 watts of power. This costs less than $2 per month to operate.'
  },
  {
    question: 'Can I move it to a new house?',
    answer: 'Absolutely! HydroFLOW units are portable and can be easily uninstalled and reinstalled at a new location. Simply unclamp and take it with you.'
  }
];

const videoResources = [
  {
    title: 'How HydroFLOW Technology Works',
    thumbnail: 'https://img.youtube.com/vi/placeholder/maxresdefault.jpg',
    duration: '3:45',
    url: 'https://vimeo.com/1142247312?fl=pl&fe=sh'
  },
  {
    title: 'Pearl Installation Tutorial',
    thumbnail: 'https://img.youtube.com/vi/placeholder/maxresdefault.jpg',
    duration: '5:20',
    url: 'https://vimeo.com/1127697487?fl=pl&fe=sh'
  },
  {
    title: 'Pearl Plus Installation Guide',
    thumbnail: 'https://img.youtube.com/vi/placeholder/maxresdefault.jpg',
    duration: '6:15',
    url: 'https://vimeo.com/1128025470?fl=pl&fe=sh'
  },
  {
    title: 'hs40 Installation Video',
    thumbnail: 'https://img.youtube.com/vi/placeholder/maxresdefault.jpg',
    duration: '5:45',
    url: 'https://vimeo.com/250663038?fl=pl&fe=sh'
  }
];

const downloadableResources = [
  {
    title: 'Pearl Installation Instructions',
    type: 'PDF',
    size: '2.4 MB',
    url: 'https://hydroflow-usa.com/wp-content/uploads/2024/08/Pearl-Installation-Instructions-230524.pdf'
  },
  {
    title: 'Pearl Plus Installation Instructions',
    type: 'PDF',
    size: '2.6 MB',
    url: 'https://hydroflow-usa.com/wp-content/uploads/2024/08/Pearl-Plus-Installation-Instructions-230524.pdf'
  },
  {
    title: 'hs40 Installation Manual',
    type: 'PDF',
    size: '3.2 MB',
    url: 'https://hydroflow-usa.com/wp-content/uploads/2025/10/HS40-Installation-Manual-230524.pdf'
  }
];

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('Pearl');

  const filteredFAQs = troubleshootingFAQs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Support Hub
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Installation & Support
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Everything you need to install, maintain, and troubleshoot your <i>Hydro</i>FLOW equipment.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
          >
            {[
              { icon: Video, label: 'Video Tutorials', href: '#videos' },
              { icon: FileText, label: 'Installation Guides', href: '#installation' },
              { icon: HelpCircle, label: 'FAQs', href: '#faqs' },
              { icon: Download, label: 'Downloads', href: '#downloads' }
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                  <link.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-white font-medium">{link.label}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Installation Guides Section */}
      <section id="installation" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Installation Guides
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Step-by-step instructions for installing your HydroFLOW system
            </p>
          </div>

          <Tabs value={selectedProduct} onValueChange={setSelectedProduct} className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-8">
              <TabsTrigger value="Pearl">Pearl</TabsTrigger>
              <TabsTrigger value="Pearl Plus">Pearl Plus</TabsTrigger>
              <TabsTrigger value="hs40"><i>hs</i>40</TabsTrigger>
            </TabsList>

            {installationGuides.map((guide) => (
              <TabsContent key={guide.product} value={guide.product}>
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Video */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Video className="w-5 h-5 text-cyan-600" />
                        Video Tutorial
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video rounded-lg overflow-hidden mb-4">
                        <iframe
                          src={guide.videoUrl}
                          width="100%"
                          height="100%"
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                      <p className="text-sm text-slate-600">
                        Watch our complete installation guide for the {guide.product}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Steps & Download */}
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-cyan-600" />
                          Installation Steps
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-4">
                          {guide.steps.map((step, index) => (
                            <li key={index} className="flex gap-3">
                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center">
                                <span className="text-sm font-semibold text-cyan-600">{index + 1}</span>
                              </div>
                              <span className="text-slate-700 pt-0.5">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Download className="w-5 h-5 text-cyan-600" />
                          Download Instructions
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-slate-600 mb-4">
                          Get the complete installation manual in PDF format
                        </p>
                        <a href={guide.pdfUrl} target="_blank" rel="noopener noreferrer">
                          <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
                            <Download className="w-4 h-4 mr-2" />
                            Download PDF Guide
                          </Button>
                        </a>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Video Resources */}
      <section id="videos" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Video Resources
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Visual guides to help you understand and install HydroFLOW
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {videoResources.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="aspect-video">
                    <iframe
                      src={`https://player.vimeo.com/video/${video.url.split('/').pop().split('?')[0]}`}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-slate-900">
                      {video.title}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting & FAQs */}
      <section id="faqs" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Troubleshooting & FAQs
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Find answers to common questions and solutions to issues
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 rounded-full border-slate-300"
              />
            </div>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-xl px-6 bg-slate-50"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <AlertCircle className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600">No results found. Try a different search term.</p>
            </div>
          )}
        </div>
      </section>

      {/* Downloads Section */}
      <section id="downloads" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Downloadable Resources
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Installation manuals, spec sheets, and product documentation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloadableResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-cyan-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-slate-900 mb-2">{resource.title}</h3>
                        <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
                          <span>{resource.type}</span>
                          <span>•</span>
                          <span>{resource.size}</span>
                        </div>
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="w-full">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-cyan-200 bg-gradient-to-br from-cyan-50 to-white">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-8 h-8 text-cyan-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Still Need Help?
              </h2>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                Our support team is here to assist you with any questions about installation, 
                troubleshooting, or product selection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:1-888-559-4340">
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8 py-6">
                    <Phone className="w-5 h-5 mr-2" />
                    Call 1-888-559-4340
                  </Button>
                </a>
                <Link to={createPageUrl('Contact')}>
                  <Button variant="outline" className="rounded-full px-8 py-6 border-2">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Support
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}