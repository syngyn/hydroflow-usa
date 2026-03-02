import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, Droplets, Shield } from 'lucide-react';

const timeline = [
  {
    day: 'Day 1',
    title: 'New Scale Stops Accumulating',
    icon: CheckCircle2,
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-500',
    content: `When properly installed, the <i>Hydro</i>FLOW device will immediately begin to protect your plumbing system and/or pool; hard scale accumulation in areas with constant water flow will stop. If installed outdoors, ensure the device is protected properly protected from weather damage. Be sure to follow the installation instructions that are provided with the <i>Hydro</i>FLOW water conditioner and contact us with any installation questions or concerns.

In the unlikely event scale accumulation does not stop, the device is most likely installed incorrectly and <i>Hydro</i>FLOW USA should be contacted to troubleshoot the problem.

Your water softener should be bypassed after installing a <i>Hydro</i>FLOW device. If you utilized a water softener for many years, turning it off might take some getting used to. You could notice some scale residue in your dishwasher, which can be easily addressed with a rinse agent that is formulated for hard water. When taking a shower, you might notice that the water has a less "slimy" feel and some soaps might not lather as before.`,
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/e7ece57d5_per1.jpg'
  },
  {
    day: 'Day 30',
    title: 'Powdery Residue May Be Noticeable',
    icon: Droplets,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-500',
    content: `You may notice a very thin film of white or light gray powdery residue at the showerheads, the sink basins, and the pool's waterline. This powder is left behind when the water evaporates and will wipe off easily. Additional benefits to your pool will include clearer water, reduced chemical consumption and decreased "Chlorine Smell".`,
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/a6f9cbcce_per2.jpg'
  },
  {
    day: 'Day 60',
    title: 'Scale Buildup Removal',
    icon: Calendar,
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-500',
    content: `If you have an older home, you may notice small scale flakes that are being removed from your plumbing system. Keep an eye on your faucet aerators because they may collect the debris that is being purged from your pipes.`,
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/d0f9f2abd_per3.jpg'
  },
  {
    day: 'Day 90+',
    title: 'Long-Term Protection',
    icon: Shield,
    color: 'from-slate-700 to-slate-800',
    bgColor: 'bg-slate-700',
    content: `You will notice the benefits of your appliances running more efficient and your pool will continue to experience clearer water, reduced chemical consumption and decreased "Chlorine Smell".

Kindly note the <i>Hydro</i>FLOW device does not replace routine maintenance procedures. Professionally purging your water heater is recommended in order to flush out any scale debris that may have collected at the bottom of the tank. In addition, it is recommended to periodically ensure your pool equipment is operating properly.`,
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/46c10d9df_per4.jpg'
  }
];

export default function PerformanceWithTime() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % timeline.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Performance With Time
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Understanding how <i>Hydro</i>FLOW protects your plumbing system over time
            </p>
          </motion.div>
        </div>
      </section>

      {/* Performance Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Performance Timeline
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.day}
                  href={`#day-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border-2 overflow-hidden ${
                    activeIndex === index 
                      ? 'border-cyan-500 shadow-xl' 
                      : 'border-slate-100 hover:border-cyan-500'
                  }`}
                >
                  <div className={`h-2 bg-gradient-to-r ${item.color}`} />
                  <div className="p-6">
                    <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="font-bold text-slate-900 mb-1">{item.day}</div>
                    <div className="text-sm text-slate-600">{item.title}</div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.day}
                id={`day-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-16 scroll-mt-32"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{item.day}</div>
                    <h2 className="text-3xl font-bold text-slate-900">{item.title}</h2>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    <div className="space-y-4">
                      {item.content.split('\n\n').map((paragraph, i) => (
                       <p key={i} className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: paragraph }} />
                      ))}
                    </div>
                    <div className="flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="rounded-xl shadow-md w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>


    </div>
  );
}