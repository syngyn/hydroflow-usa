import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is the difference between the small units and large units?",
    answer: "One main difference is the power output. Simply said, the large units treat a much larger volume of water."
  },
  {
    question: "Does Hydropath Technology also descale, as well as prevent scale?",
    answer: "Yes, although it may be a gradual process over a period of months."
  },
  {
    question: "Are all HydroFLOW water conditioners fully covered by warranty?",
    answer: "On the residential units we offer a manufacturer-backed, five-year limited warranty against failure or defects in the product or its component parts. On the i and hm Range units we offer a manufacturer-backed, five-year limited warranty against failure or defects in the product or its component parts."
  },
  {
    question: "Does Hydropath technology change the chemical composition of water",
    answer: "No. The technology does not change the chemical composition of water in any way. It works purely on a physical basis, leaving the water completely safe."
  },
  {
    question: "Does the Hydropath signal have an effect on sensitive electrical equipment?",
    answer: "No. Hydropath technology induces an electric signal of harmless AM radio waves (±150kHz) and conforms to American and international directives, including the low voltage directive, therefore, sensitive electrical equipment, such as pacemakers, will not be affected."
  },
  {
    question: "Is an electric power supply required?",
    answer: "Yes. Units include a specifically-designed power supply."
  },
  {
    question: "Where should I install the I and HM models?",
    answer: "As our range of electronic water conditioners treat a whole range of problems, it is important that you seek advice from a trained specialist in order to achieve optimum results from our technology."
  },
  {
    question: "How do I know my unit is working?",
    answer: "The Pearl and Pearl Plus have a rotating blue LED pattern, showing that the signal is actively being transmitted.\n\nThe hs40 have a single red LED to confirm operation.\n\nThe large industrial/commercial units have red and green light indicators. The green light shows the unit has power. The red light shows the signal is propagating throughout the whole system. If the red light is dimmed, it may be that the unit has been placed within a short circuit and the signal is not propagating throughout the whole system."
  },
  {
    question: "How do I see results?",
    answer: "It depends on the application and which model has been installed. Prior to installing a unit, our experts will determine key success factors that will suit your application's needs."
  },
  {
    question: "Where does the dissolved scale go?",
    answer: "Typically, the dissolved scale is flushed or filtered out of the water system. In some cases scale settles in the bottom of the equipment's basin as a soft powder, which should be flushed out periodically."
  },
  {
    question: "Does Hydropath Technology work on plastic and metal pipes alike?",
    answer: "Yes. The technology ensures the electric signal is induced directly into the water throughout the entire water system, regardless of the type of the piping material. The signal is induced using solid-state ferrite technology."
  },
  {
    question: "How much money does it cost to run a residential unit?",
    answer: "Residential units use less than 5 watts of power. This very low power consumption means that the unit costs around $1 a year to run."
  },
  {
    question: "Do the HydroFLOW units require any special treatment or maintenance?",
    answer: "No. Apart for being protected with an adequate surge protection device, HydroFLOW units do not require any special treatment. The device operates by means of solid-state technology and has no moving parts. The unit's operation is ensured for years without requiring maintenance."
  },
  {
    question: "What is the maximum water hardness the units can handle?",
    answer: "Our units work on virtually all levels of water hardness."
  },
  {
    question: "After installing the unit, is the water just as drinkable as before?",
    answer: "Yes. The electric signal propagated into the water by the unit does not change the chemical composition of the water. It works purely on a physical basis, leaving the water completely drinkable. As opposed to an ion-exchanger or water softener, the technology also allows essential minerals to be retained in the water."
  },
  {
    question: "Is limescale bad for one's health?",
    answer: "No. Limescale contains calcium which is essential for healthy teeth and bones."
  },
  {
    question: "Does flow rate matter?",
    answer: "No. The unit works on any system."
  },
  {
    question: "Does it treat standing water?",
    answer: "Yes, it is the only technology that treats water that isn't moving. The signal propagates both ways throughout the plumbing system."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            <div className="w-20 h-20 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-10 h-10 text-cyan-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              FAQ
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Frequently asked questions about HydroFLOW water conditioners
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-cyan-300 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-slate-900 pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-cyan-600 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-slate-200"
                  >
                    <div className="px-6 py-5 text-slate-700 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}