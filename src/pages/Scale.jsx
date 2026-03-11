import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Droplets, TrendingDown, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

export default function Scale() {
  const benefits = [
    'Dissolves and removes existing scale',
    'Prevents new scale accumulation',
    'Reduces energy consumption',
    'Increases efficiency of water heating equipment',
    'Replaces salt-based softeners',
    'Average one year payback period'
  ];

  const applications = [
    'Plumbing systems',
    'Water heaters',
    'Boilers',
    'Cooling towers',
    'Heat exchangers',
    'Belt filter presses',
    'Wells and pumps'
  ];

  const efficiencyData = [
    { thickness: 0, efficiency: 100 },
    { thickness: 0.05, efficiency: 95 },
    { thickness: 0.1, efficiency: 85 },
    { thickness: 0.15, efficiency: 75 },
    { thickness: 0.2, efficiency: 68 },
    { thickness: 0.25, efficiency: 62 },
    { thickness: 0.3, efficiency: 55 },
    { thickness: 0.35, efficiency: 50 },
    { thickness: 0.4, efficiency: 45 }
  ];

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
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 rounded-full px-6 py-3 mb-6">
              <Droplets className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Scale Prevention Technology</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Scale Prevention & Removal
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              How Hydropath technology acts as a descaler which prevents the build-up of scale in pipes and equipment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Hydropath technology powers the <i>Hydro</i>FLOW water conditioners which are highly efficient, non-intrusive electronic descalers that are installed on the cold water line in your home or business. It treats fluids by inducing a robust yet harmless signal of 150kHz throughout plumbing systems made of any material, including PEX and PVC.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                These electric waves cause mineral ions to form suspended clusters that turn into stable crystals in solution when temperature or pressure changes occur. The suspended crystals will prevent scale from building up in pipes and on heating elements, thus increasing heat transfer efficiency, lowering maintenance costs and reducing chemical usage. Standard applications include plumbing systems, water heaters, boilers, cooling towers, heat exchangers, belt filter presses, wells and pumps. Popular sectors include residential, commercial, industrial and agricultural.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Unlike other products that treat liquids at a single point in a system and whose impact starts to diminish immediately after that point, <i>Hydro</i>FLOW provides continuous water conditioning &ndash; ensuring a consistent and ongoing effect. Also, due to its unique, non-intrusive design, <i>Hydro</i>FLOW doesn't add any chemicals to your water supply while inhibiting pipe corrosion and eradicating bacteria and algae.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Furthermore, while it protects your plumbing and appliances, it is also easy to install, requires no maintenance or wasted real estate. A residential grade <i>Hydro</i>FLOW device costs about $1 in electricity per year. An industrial grade <i>Hydro</i>FLOW device costs between $10 to $20 in electricity per year.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Scale is Prevented */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How Scale is Prevented with Hydropath Technology
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Without HydroFLOW */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Without <i>Hydro</i>FLOW</h3>
              </div>
              <div className="mb-6">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/a2dbd6485_img9.png"
                  alt="Water flowing through pipe without hydroflow"
                  className="w-full rounded-xl"
                />
              </div>
              <p className="text-slate-700 leading-relaxed">
                Minerals such as calcium carbonate, the mineral primarily responsible for limescale formation, are dissolved in the solution as TDS (Total Dissolved Solids). When temperature or pressure change occurs, minerals precipitate out of solution and accumulate as hard scale in pipes, in holding tanks and on heating elements.
              </p>
            </motion.div>

            {/* With HydroFLOW */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-50 to-white rounded-3xl p-8 shadow-lg border-2 border-cyan-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">With <i>Hydro</i>FLOW</h3>
              </div>
              <div className="mb-6">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/0ebf180bc_img10.png"
                  alt="Water in pipe with hydropath signal"
                  className="w-full rounded-xl"
                />
              </div>
              <p className="text-slate-700 leading-relaxed">
                When the Hydropath signal is present, the dissolved minerals combine to form loosely held clusters. When the clusters precipitate out of solution due to a temperature or pressure change, they form stable calcite crystals in suspension that do not accumulate as hard scale on the inner surface of pipes, holding tanks or heating elements. This results in the effective prevention of limescale buildup and eliminates the need for a water softener.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cost of Scale */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                The Cost of Scale
              </h2>
              <div className="space-y-4 text-slate-700">
                <p className="leading-relaxed">
                  It's important to understand that scale buildup in pipe systems, heating and cooling elements, and appliances come at a significant cost. First of all, it compromises energy-efficiency. In fact, in water heating and cooling systems, <strong>a quarter of an inch of scale buildup results in a 38 percent loss of efficiency</strong> – and that means your energy bills increase substantially.
                </p>
                <p className="leading-relaxed">
                  Also, limescale buildup in pipe systems can damage the pipes and cause leaks. The resulting costs of repairing or replacing the pipe system can be substantial. Furthermore, depending on where the leak or leaks were located, there can be severe water damage to the building, including mold growth.
                </p>
                <p className="leading-relaxed">
                  Limescale buildup can also shorten the life of appliances such as dishwashers, washing machines, coffeemakers and more. Scale buildup on heating elements, as well as on other parts of the appliances, can damage components, leading to costly repairs and shorter functional life.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Energy Efficiency Loss</h3>
                <p className="text-sm text-slate-600">Scale thickness vs. system efficiency</p>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={efficiencyData}>
                  <defs>
                    <linearGradient id="efficiencyGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0.05}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="thickness" 
                    label={{ value: 'Scale Thickness (inches)', position: 'insideBottom', offset: -5 }}
                    tick={{ fill: '#64748b', fontSize: 12 }}
                  />
                  <YAxis 
                    label={{ value: 'Efficiency (%)', angle: -90, position: 'insideLeft' }}
                    domain={[0, 100]}
                    tick={{ fill: '#64748b', fontSize: 12 }}
                  />
                  <Tooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div style={{ 
                            backgroundColor: 'white', 
                            border: '1px solid #e2e8f0', 
                            borderRadius: '8px',
                            padding: '8px 12px'
                          }}>
                            <p style={{ margin: 0, fontSize: '14px', color: '#475569' }}>
                              Scale: {payload[0].payload.thickness}"
                            </p>
                            <p style={{ margin: 0, fontSize: '14px', color: '#ef4444', fontWeight: 600 }}>
                              Efficiency: {payload[0].value}%
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="efficiency" 
                    stroke="#ef4444" 
                    strokeWidth={3}
                    fill="url(#efficiencyGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
              <div className="mt-6 bg-white rounded-xl p-4">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <p className="text-slate-700">
                    <strong>0.25" of scale</strong> = <strong>38% efficiency loss</strong>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Main Benefits
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700 font-medium">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              <i>Hydro</i>FLOW Protects Your Property
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              <i>Hydro</i>FLOW is specifically designed to protect you against scale costs by not only preventing scale buildup but also removing any existing scale.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-50 to-white rounded-3xl p-8 border border-cyan-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Standard Applications</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {applications.map((app, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                    <span className="text-slate-700">{app}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-slate-600">
                Popular sectors include residential, commercial, industrial and agricultural.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Want More Information About <i>Hydro</i>FLOW?
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Contact us today for answers to all your water treatment questions and discover how non-intrusive electronic descaling can protect your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Contact')}>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8 py-6">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={createPageUrl('Products')}>
                <Button variant="outline" className="rounded-full px-8 py-6 border-2">
                  View Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}