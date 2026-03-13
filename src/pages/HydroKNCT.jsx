import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  Wifi, Bell, BarChart2, Shield, Thermometer, Activity, 
  Monitor, Smartphone, ChevronDown, ChevronUp, ArrowRight,
  CheckCircle, Zap, Globe, Network
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const stats = [
  { label: '24/7', sublabel: 'Continuous Monitoring', icon: Activity },
  { label: 'Instant', sublabel: 'Alert Notifications', icon: Bell },
  { label: 'iOS & Android', sublabel: 'Web, Mobile & Desktop', icon: Smartphone },
  { label: 'Modbus', sublabel: 'RTU/TCP Support', icon: Network },
];

const problems = [
  {
    icon: Shield,
    title: 'No Signal Verification',
    desc: 'Knowing a unit is powered on is not the same as knowing it is working. Without signal monitoring, performance is assumed — not confirmed.',
  },
  {
    icon: Bell,
    title: 'No Early Warning System',
    desc: 'Signal deviations and temperature anomalies indicate developing faults long before they cause visible damage — but only if you are monitoring for them.',
  },
  {
    icon: Globe,
    title: 'No Remote Oversight',
    desc: 'Managing multiple installations without a centralized platform means more site visits, slower response times, and reduced accountability.',
  },
];

const steps = [
  {
    step: '01',
    title: 'HydroFLOW® Unit',
    desc: 'Treats your water 24/7 with electronic signal technology. Runs silently with no moving parts.',
  },
  {
    step: '02',
    title: 'Sensors',
    desc: 'Monitor power status, signal output, and temperature in real time — continuously and automatically.',
  },
  {
    step: '03',
    title: 'HydroKNCT Device',
    desc: 'Connects to your <i>Hydro</i>FLOW® unit and transmits signal output, temperature, and power status data to the cloud.',
  },
  {
    step: '04',
    title: 'Hydropath Care Dashboard',
    desc: 'Cloud platform that aggregates data from all your installations and sends instant alerts when performance drops.',
  },
];

const faqs = [
  {
    q: 'What is HydroKNCT?',
    a: '<em>Hydro</em>KNCT is a dedicated Remote I/O Module built for water treatment system connectivity. It features a 6-way dry node connection, 4-way relay output, 4-way analog detection (4–20mA current loop), Modbus RTU/TCP, RS485 host/slave mode, support for cascading multiple devices, and a single serial data point for transmission — giving you a robust, flexible interface between your <em>Hydro</em>FLOW® units and your network.',
  },
  {
    q: 'What is Hydropath Care?',
    a: 'Hydropath Care is a project management and monitoring platform available as a web app and mobile app on iOS and Android. It lets you register <em>Hydro</em>FLOW® unit installations, activate warranties from the date of install, and connect directly to <em>Hydro</em>KNCT devices — giving you a single central dashboard to manage your entire <em>Hydro</em>FLOW® network.',
  },
  {
    q: 'What are the benefits of remote monitoring for water treatment systems?',
    a: 'Remote monitoring gives operators full visibility into system performance without requiring constant on-site inspections. Hydropath Care lets users track connected <em>Hydro</em>FLOW® units, monitor operational status, and receive alerts if attention is needed — helping reduce site visits, identify issues earlier, and maintain oversight across multiple installations.',
  },
  {
    q: 'How does HydroKNCT connect to the internet?',
    a: '<em>Hydro</em>KNCT connects to your local network via a standard RJ45 (Ethernet) connector.',
  },
  {
    q: 'How do HydroKNCT and Hydropath Care work together?',
    a: '<em>Hydro</em>KNCT is the hardware (Remote I/O Module) that enables data collection and connectivity. Hydropath Care is the software platform that uses this data for monitoring, performance tracking, and alerts. Together, they create a complete remote management solution — allowing operators to maintain visibility across multiple installations and reduce routine site visits.',
  },
];

export default function HydroKNCT() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #06b6d4 0%, transparent 50%), radial-gradient(circle at 80% 20%, #0891b2 0%, transparent 40%)' }}
          />
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)', backgroundSize: '60px 60px' }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 mb-6">Remote Monitoring</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Take Control of Every{' '}
                <span className="text-cyan-400"><em>Hydro</em>FLOW®</span>{' '}
                Installation
              </h1>
              <p className="text-lg text-slate-300 mb-4">
                <strong className="text-white"><em>Hydro</em>KNCT</strong> connects your <em>Hydro</em>FLOW® units and sensors to{' '}
                <strong className="text-white">Hydropath Care</strong> — a cloud platform delivering real-time signal performance,
                temperature monitoring, and power status across your entire installation network.
              </p>
              <p className="text-cyan-300 font-medium mb-8">One dashboard. Complete visibility.</p>
              <Link to={createPageUrl('Contact')}>
                <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-8 py-6 text-base rounded-full">
                  Contact Us to Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="bg-slate-800/60 backdrop-blur border border-slate-700 rounded-3xl p-8">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/0018dd8de_HydroKNCT-monitoring-device.png"
                  alt="HydroKNCT monitoring device"
                  className="w-full rounded-2xl object-contain h-[460px]"
                />
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {stats.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <div key={i} className="bg-slate-700/50 rounded-xl p-3 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-white font-bold text-sm">{s.label}</div>
                          <div className="text-slate-400 text-xs">{s.sublabel}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What You Can't See Is Costing You
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              <em>Hydro</em>FLOW® units operate continuously — in plant rooms, roof spaces, and basements across multiple sites.
              Without monitoring, there is no way to confirm performance between visits.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="p-8 h-full border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{p.desc}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <Badge className="bg-cyan-100 text-cyan-700 mb-4">How It Works</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              From Installation to Insight — in Four Steps
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 h-full text-white">
                  <div className="text-5xl font-black text-cyan-500/30 mb-3">{s.step}</div>
                  <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: s.desc }} />
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 h-6 bg-cyan-500 rounded-full items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hydropath Care + HydroKNCT Split */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Hydropath Care */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-cyan-100 text-cyan-700 mb-4">Software Platform</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
                Hydropath Care: The Cloud Dashboard
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Hydropath Care is a Project Management and Monitoring System (PMMS) — custom-built for <em>Hydro</em>FLOW® products.
                It integrates directly with HydroKNCT sensors to give you real-time oversight of every installation in your network.
                Available on web, iOS, and Android.
              </p>
              <div className="space-y-4">
                {[
                  { icon: BarChart2, title: 'Real-Time Data Visualization', desc: 'See signal output, temperature, and power status live on your dashboard.' },
                  { icon: Bell, title: 'Intelligent Alerting', desc: 'Instant notifications for anomalies, signal drops, or unexpected changes.' },
                  { icon: Monitor, title: 'Installation Management', desc: 'Register units, activate warranties, and track every installation in one place.' },
                ].map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-cyan-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{f.title}</div>
                        <div className="text-slate-600 text-sm">{f.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/c24ab0e9b_dashboard.png"
                alt="Hydropath Care dashboard"
                className="w-full rounded-3xl shadow-2xl object-contain"
              />
            </motion.div>
          </div>

          {/* HydroKNCT Device */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/32c1e6c83_ProductRange2025standardunitsv3694.png"
                alt="HydroFLOW i100 unit"
                className="w-full rounded-3xl object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <Badge className="bg-slate-200 text-slate-700 mb-4">Hardware</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
                <em>Hydro</em>KNCT: The Remote I/O Module
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                The <em>Hydro</em>KNCT is designed to seamlessly integrate <em>Hydro</em>FLOW® units into the internet via LAN —
                offering a cost-effective, flexible, and globally compatible solution. It supports analog, digital, and Modbus RTU/TCP connectivity,
                enabling a wide range of sensors to plug into the <em>Hydro</em>KNCT ecosystem.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Zap, title: 'Future-Proof Remote I/O Module', desc: 'Supports seamless integration with current and future monitoring systems.' },
                  { icon: Network, title: 'Multi-Protocol Connectivity', desc: 'Analog, digital, and Modbus RTU/TCP — easy integration with any existing infrastructure.' },
                  { icon: Wifi, title: 'LAN Connectivity via RJ45', desc: 'Plugs directly into your local network. No proprietary hardware required.' },
                ].map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-slate-700" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{f.title}</div>
                        <div className="text-slate-600 text-sm">{f.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sensors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <Badge className="bg-cyan-100 text-cyan-700 mb-4">Add-Ons</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              See What Your System Is Telling You
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Extend your <em>Hydro</em>KNCT setup with purpose-built sensors for deeper performance insights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Thermometer,
                title: 'Temperature Sensor',
                color: 'orange',
                features: [
                  'Real-time pipe and environment temperature tracking',
                  'Detects unexpected temperature spikes or drops',
                  'Range: -50°C to +150°C',
                  'Instant alerts on temperature change',
                ],
              },
              {
                icon: Activity,
                title: 'Signal Sensor',
                color: 'cyan',
                features: [
                  'Captures electronic signal output in real time',
                  'Verifies HydroFLOW® unit is operating correctly',
                  'Detects signal drops and frequency anomalies',
                  'Generates proof-of-performance reports',
                ],
              },
            ].map((sensor, i) => {
              const Icon = sensor.icon;
              const colorMap = { orange: 'bg-orange-50 text-orange-500', cyan: 'bg-cyan-50 text-cyan-600' };
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="p-8 h-full border-0 shadow-lg">
                    <div className={`w-12 h-12 rounded-2xl ${colorMap[sensor.color]} flex items-center justify-center mb-5`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-5">{sensor.title}</h3>
                    <ul className="space-y-3">
                      {sensor.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-3 text-slate-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <Badge className="bg-slate-200 text-slate-700 mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left bg-white rounded-2xl px-6 py-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-semibold text-slate-900">{faq.q}</span>
                    {openFaq === i
                      ? <ChevronUp className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                      : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    }
                  </div>
                  {openFaq === i && (
                    <p className="mt-4 text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Proof That Your System Is Working
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Deploy <em>Hydro</em>KNCT today and gain instant visibility into every <em>Hydro</em>FLOW® installation.
              Real-time data, instant alerts, and performance proof — all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Contact')}>
                <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-8 py-6 rounded-full text-base">
                  Contact Us Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={createPageUrl('Technology')}>
                <Button variant="outline" className="border-slate-500 text-white hover:bg-slate-800 px-8 py-6 rounded-full text-base">
                  Learn About the Technology
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}