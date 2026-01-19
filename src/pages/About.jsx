import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Shield, Globe, Award, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const stats = [
  { value: '20+', label: 'Years of Innovation' },
  { value: '100K+', label: 'Units Installed Worldwide' },
  { value: '50+', label: 'Countries Served' },
  { value: '24/7', label: 'Customer Support' }
];

const values = [
  {
    icon: Shield,
    title: 'Proven Technology',
    description: 'Over two decades of research and development have made Hydropath Technology the most advanced water conditioning solution available.'
  },
  {
    icon: Globe,
    title: 'Global Presence',
    description: 'HydroFLOW devices have been distributed throughout the world and officially entered the U.S. market in 2010.'
  },
  {
    icon: Award,
    title: 'Patented Innovation',
    description: 'Our unique signal induction technology is protected by patents and has won numerous industry awards.'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Our team of water treatment specialists is dedicated to helping you find the perfect solution for your needs.'
  }
];

export default function About() {
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
              About <i>Hydro</i><span className="text-cyan-400">FLOW</span> USA
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The exclusive U.S. distributor of revolutionary water conditioners powered by 
              patented Hydropath technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-cyan-600 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Pioneering Water Treatment Since 1992
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  <i>Hydro</i>FLOW USA, headquartered in Redmond, WA, is the exclusive U.S. distributor 
                  of the unique <i>Hydro</i>FLOW water conditioners that are powered by the patented 
                  Hydropath technology.
                </p>
                <p>
                  Over twenty years ago, Hydropath Technology Ltd., located in the U.K., invented 
                  a process that treats fluids by inducing a robust yet harmless signal of +/- 150kHz 
                  throughout plumbing systems made of any material.
                </p>
                <p>
                  The pipe, and/or the fluid inside of it, acts as a conduit which allows the signal 
                  to propagate. The induction of the signal prevents scale and biofilm from accumulating 
                  inside plumbing systems and gradually removes existing deposits.
                </p>
                <p>
                  This preventative action significantly reduces energy, chemical, water and maintenance 
                  costs which extends the service life of equipment and pipes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://hydroflow-usa.com/wp-content/uploads/2016/08/about-us.webp"
                  alt="HydroFLOW USA Headquarters"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6">
                <div className="text-4xl font-bold text-cyan-600">2010</div>
                <div className="text-slate-600">Entered U.S. Market</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Commitment to Excellence
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-8 rounded-2xl bg-slate-50 hover:bg-cyan-50/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hydropath Marine Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Marine Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Hydropath Marine
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none text-slate-600"
          >
            <p className="mb-6">
              Shipowners seeking to combat the harmful effects of scale, bacteria, algae and biofouling inside their vessels' various water systems needn't look any further than Hydropath Marine, a chemical-free technology for onboard water treatment. The patented Hydropath technology, which uses electrical signals to kill algae and bacteria, was initially developed in the early '90s to treat lime scale within the home, but has since been developed for a dozen different product ranges for both land-based and marine applications, serving the maritime sector in particular with the brand Hydropath Marine Ltd.
            </p>

            <p className="mb-6">
              A liquid solution inside ships' pipe systems may contain minerals dissolved in the form of ions. When temperature increases or pressure drops, the solution becomes supersaturated, causing the ions to adhere to piping and equipment surfaces in the form of scale. Over time, scale accumulates on heat plates along with biofilm consisting of bacteria, algae and barnacles, blocking narrow pathways to cause unwanted insulation, diminished heat transfer efficiency, reduced water flow and higher energy consumption. This means sytems will need to be opened and cleaned, an often time consuming process that typically requires the use of hazardous chemicals and can be damaging to the plates and scals.
            </p>

            <p className="mb-6">
              Hydropath Marine's water conditioning unit is easy to install as it is simply fitted around a pipe as an add-on with ferrite rings, resulting in very little downtime with no cutting or plumbing required. Their unit is available in various sizes and power ranges to fit an assortment of pipe dimensions.
            </p>

            <p className="mb-6">
              Once installed, the Hydropath Marine water conditioner applies a unique electrical signal throughout the piping system (metal or PVC), causing the ions to form clusters. Now when supersaturation occurs, the clusters precipitate out of the solution and form stable cystals which do not adhere to piping and equipment. Signals agitate biofilm colonies, causing them to detach and flush out. Bacteria and algae passing through the water conditioner's ferrite rings are charged by the electrical signal, forming a hydration layer of water around the cell. Osmosis then forces water into the bacterial and algae cells, creating osmotic pressure which ruptures the cell membrane and causes it to die.
            </p>

            <p className="mb-6">
              Commonly applied for fresh water generators, plumbing systems, heat exchangers and water heaters, Hydropath Marine helps protect onboard water systems against harmful and accumulating effects of lime scale, mineral scale and bio scale a the unti both cleans and keeps clean wter treatment systems to help minimize required mantenance, resulting in minimum downtime and improved operation. All of this is done without the use of damaging chemicals.
            </p>

            <div className="bg-white rounded-2xl p-8 my-8 border-l-4 border-cyan-500">
              <p className="mb-4">
                "The main advantage here is the reduced maintenance expenditures, both in material and time," said Jere Widhalm, founder and CEO of D&W Marine Systems Management, a maritime engineering services company and U.S. distributor of Hydropath Marine.
              </p>
              <p className="mb-4">
                "What Hydropath does is that is helps maintain peak efficiency for much longer periods of time, which translates to cost savings, a more efficient ship and equipment," added Tal Journo, CEO of <i>Hydro</i>FLOW USA, the US distributor of Hydropath Technology.
              </p>
            </div>

            <p className="mb-6">
              With the Hydropath Marine unit installed, vessels' systems become capable of running more efficiently for longer periods of time, meaning owners are able to minimize expenditure – in this case by avoiding the price of less efficient systems that will need to be opened up, cleaned and repaired, demanding chemicals, labor and vessel downtime.
            </p>

            <div className="bg-white rounded-2xl p-8 my-8 border-l-4 border-cyan-500">
              <p className="mb-0">
                "The worse the scaling and fouling problems are on the vessels, the more effective this system is going to be. And one of the greatest things that we're finding about this system is that its return on investment is very often one maintenance cycle." — Jere Widhalm
              </p>
            </div>

            <p className="mb-0">
              Widhalm and Journo explained that all shipowners can benefit from Hydropath Marine. "Anyone that has a marine application that has scale involved – and virtually all of them do – is a prime canditate," Widhalm said. "From small ships to very large ships, small systems to giant systems; the largest tanker in the world could use this system, as well as a tugboat."
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their water systems 
              with <i>Hydro</i>FLOW technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Products')}>
                <Button className="bg-white text-cyan-600 hover:bg-cyan-50 rounded-full px-8 py-6 text-lg font-semibold">
                  Shop Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={createPageUrl('Contact')}>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}