import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { Input } from "@/components/ui/input";

const faqs = [
  {
    question: "Can I turn my water softener off?",
    answer: "Let's not put anymore salt to the environment and bypass your water softener after you install a <i>Hydro</i>FLOW device. If you utilized a water softener for many years, turning it off might take some getting used to. Softened water tends to feel silky and after you've lathered it takes longer to rinse off, which uses more water. If you purchased the <i>Hydro</i>FLOW Pearl Plus that is designed to protect an entire residential dwelling, then you should bypass the water softener altogether. This will save some dollars and reduce salt in our groundwater."
  },
  {
    question: "How long will it take <i>Hydro</i>FLOW before the scale stops accumulating?",
    answer: "When properly installed, the <i>Hydro</i>FLOW device will immediately begin to protect your plumbing system and/or pool; hard scale accumulation in areas with constant water flow will stop. An additional nice advantage, this device will also start removing existing scale from your appliances, fixtures and piping. The <i>Hydro</i>FLOW Pearl model is designed for protecting single pieces of equipment. The <i>Hydro</i>FLOW Pearl Plus model is designed for standard homes and commercial kitchens. The <i>Hydro</i>FLOW hs40 model is designed for residential pools but it is sometimes used to protect large homes and restaurants."
  },
  {
    question: "I can't get my water to lather up because of the hardness. Will I get sudsy soap if I use a <i>Hydro</i>FLOW device?",
    answer: "Yes, the Hydropath technology, that powers your <i>Hydro</i>FLOW unit, reduces the surface tension of the water. This will help your water suds up without using water softener equipment and the accompanying salt. Lack of suds in hard water is one of the biggest consumer complaints. You don't have to worry, your soap will lather, including when you take that bubble bath. All models of the <i>Hydro</i>FLOW devices will have the same positive effect on how sudsy your soap gets."
  },
  {
    question: "How does <i>Hydro</i>FLOW make my water healthier?",
    answer: "Using <i>Hydro</i>FLOW will mean you don't need a water softener to prevent scale in your home's plumbing system and fixtures. This will lead to not inducing unhealthy salt into your water, used by the water softener. The result is maintaining healthy ionic calcium and magnesium. It's important to note that not all calcium forms are easily metabolized by your body. Hard water contains a very soluble form of calcium that is readily used by our bodies."
  },
  {
    question: "I've started to notice a thin film on my dishware that wipes off. This started after installing <i>Hydro</i>FLOW. Why is this happening?",
    answer: "This is a positive sign that your unit is purging your system of existing scale. Since it easily wipes away, it's soft scale and that means the device is working properly. We recommend you use a rinse agent like lemmyshine to help alleviate this problem. This is the best way to tell if your <i>Hydro</i>FLOW device is working properly."
  },
  {
    question: "How can I tell that the <i>Hydro</i>FLOW is protecting my water heater and pipes and fixtures?",
    answer: "The minute you turn on your <i>Hydro</i>FLOW device new scale will stop forming in your system and existing scale will begin to be removed. As soon as you turn on your <i>Hydro</i>FLOW unit, you may begin to notice small scale flakes that are being removed from your hot water tank and piping system. These small scale flakes will also accumulate on the bottom of your water heater. It is recommend that you periodically flush your water heater according to factory instructions to avoid clogging of your water heater. You will also start noticing an increase in efficiency with your water heater for example the water heater will not take as long to heat your water."
  },
  {
    question: "Can <i>Hydro</i>FLOW replace my water softener?",
    answer: "Yes. <i>Hydro</i>FLOW is an alternative to a water softener and can replace your current descaling treatment. If you purchased a <i>Hydro</i>FLOW unit, it is designed as a whole home solution. If you have been using a water softener for many years, turning it off might take some getting used to. Softened water tends to feel silky because of the added salt, in addition lathered soap takes longer to rinse off, which uses more water. Because <i>Hydro</i>FLOW descales your water without the addition of salt, your water will act and feel more natural, without the additives that a water softener provides."
  },
  {
    question: "I'm noticing a powdery residue in my showerheads and sink basins. Is that normal?",
    answer: "You may notice a very thin film of white or light gray powdery residue at your showerheads, sink basins and the pool's water line. This powder is left behind when the water evaporates and will wipe off easily. This is a positive sign and tells us that the <i>Hydro</i>FLOW device is working properly. Most important, it's not hard scale and does not attach to surfaces as scale would. You will definitely notice this powdery substance (calcite crystals) appearing as the <i>Hydro</i>FLOW device does its job of removing the existing scale from your plumbing system."
  },
  {
    question: "What can I look for to tell if the <i>Hydro</i>FLOW units are working?",
    answer: "The minute you turn on your <i>Hydro</i>FLOW device new scale will stop forming in your system and existing scale will begin to be removed. You may notice small scale flakes that are being removed from your hot water tank and piping system. Keep an eye on your faucet aerators because they may collect the debris that is being purged from your pipes. You will notice the benefits of your appliances running more efficient. You also may notice your water becoming a bit cloudy. This is due to the scale being removed from your plumbing system and fixtures. It will clear up after a period of time depending on how badly scaled your existing system is."
  },
  {
    question: "Is my unit working? I can still see hard scale deposits on my fixtures.",
    answer: "If you have had your <i>Hydro</i>FLOW unit installed in your home for more than 3 months, and are still not seeing improvement, there is likely an issue with the installation or location of your unit. Please review our installation guide on our website for the troubleshooting process. Still have questions? Give us a call (425) 497-3900 and one of our customer support representatives can assist you."
  },
  {
    question: "I have a swimming pool and I was looking to use something to help with reducing chlorine usage but keep my water safe?",
    answer: "We would recommend a <i>Hydro</i>FLOW hs40 to help with reduction of chlorine in your pool. These are real world examples of chlorine reduction in swimming pools. We would not recommend using soft water to fill your pool. Swimming pools need to have hardness because if you don't, it will begin to cause etching and deterioration of the plaster, grout, stone, concrete and tiling. You may add a <i>Hydro</i>FLOW Pearl Plus to your home and bypass your water softener. This will maintain your pool's need for harder water and render the hard water harmless to your pool pumps."
  },
  {
    question: "Can I skip doing my annual maintenance of my hot water heater if I use <i>Hydro</i>FLOW?",
    answer: "Kindly note the <i>Hydro</i>FLOW device does not replace routine maintenance procedures. Please refer to your manufacturer's recommendation on routine maintenance of your hot water tank. Professionally purging your water heater annually is typically recommended in order to flush out any scale debris that may have collected at the bottom of the tank. In addition, it is recommended to periodically inspect your plumbing equipment to ensure everything is operating properly."
  },
  {
    question: "Will <i>Hydro</i>FLOW help make my water clearer?",
    answer: "Yes, since <i>Hydro</i>FLOW kills algae and other forms of bacteria it will help keep your pool water clearer. It will also help with your filter's ability to filter out the material that makes the water cloudy. Giving you the benefit of safer and clearer water. We always recommend the <i>Hydro</i>FLOW hs40 device for installation on swimming pools and spas."
  },
  {
    question: "I'm noticing scale residue on the dishes in my dishwasher, is the device not working properly?",
    answer: "You may notice a very thin film of white or light gray powdery residue at the showerheads, the sink basins and the pool's water line. This powder is left behind when the water evaporates and will wipe off easily. This is actually a positive sign. Since it easily wipes away, it's soft scale and that means the device is working properly. We recommend you use a rinse agent like lemmyshine to help alleviate this problem."
  }
];

export default function KnowledgeBase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
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
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Support
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Knowledge Base
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Find answers to common questions about <i>Hydro</i>FLOW water conditioners
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 text-lg bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:bg-white/20"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-slate-900 pr-8">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-5"
                  >
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg">
                No results found for "{searchTerm}". Try a different search term.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-slate-600 mb-8">
            Our customer support team is here to help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:425-497-3900" className="inline-flex items-center justify-center px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full font-semibold transition-colors">
              Call (425) 497-3900
            </a>
            <a href="mailto:sales@hydroflow-usa.com" className="inline-flex items-center justify-center px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold transition-colors">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}