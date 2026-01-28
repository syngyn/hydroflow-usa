import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Ready to protect your water system?
              </h3>
              <p className="text-slate-400">
                Contact us for a free consultation and find the perfect solution.
              </p>
            </div>
            <Link 
              to={createPageUrl('Contact')}
              className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-cyan-500/25"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/d5bab3e9a_pic66.png"
                alt="HydroFLOW USA Logo"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              The exclusive U.S. distributor of <i>Hydro</i>FLOW water conditioners powered by patented Hydropath technology.
            </p>
            <div className="space-y-3">
              <a href="tel:1-888-559-4340" className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">1-888-559-4340</span>
              </a>
              <a href="mailto:sales@hydroflow-usa.com" className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">sales@hydroflow-usa.com</span>
              </a>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">8561 154th AVE NE, Suite 230<br />Redmond, WA 98052</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">Products</h4>
            <ul className="space-y-3">
              {['Pearl', 'Pearl Plus', 'HS40', 'Industrial Range', 'Water Filters', 'Vitality Filter'].map((item) => (
                <li key={item}>
                  <Link to={createPageUrl('Products')} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Market Sectors */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">Market Sectors</h4>
            <ul className="space-y-3">
              {[
                { name: 'Residential', href: 'Residential' },
                { name: 'Industrial', href: 'Industrial' },
                { name: 'Commercial', href: 'Commercial' },
                { name: 'Agriculture', href: 'Agriculture' },
                { name: 'Marine', href: 'Marine' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={createPageUrl(item.href)} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              {[
                { name: 'Technology', href: 'Technology' },
                { name: 'Knowledge Base', href: 'KnowledgeBase' },
                { name: 'Water Hardness Map', href: 'WaterHardnessMap' },
                { name: 'Performance With Time', href: 'PerformanceWithTime' },
                { name: 'What to Expect', href: 'Expectations' },
                { name: 'FAQ', href: 'FAQ' },
                { name: 'About Us', href: 'About' },
                { name: 'Contact', href: 'Contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={createPageUrl(item.href)} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <a href="https://hydroflow-usa.com/assets/userfiles/files/Statement_of_Qualifications.pdf" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Statement of Qualifications
                </a>
              </li>
              <li>
                <a href="https://hydroflow-usa.com/assets/userfiles/files/Hydropath_Marine_Capability_Statement.pdf" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Marine Capability Statement
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} <i>Hydro</i>FLOW USA. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to={createPageUrl('PrivacyPolicy')} className="hover:text-slate-300 transition-colors">
                Privacy Policy
              </Link>
              <Link to={createPageUrl('TermsOfService')} className="hover:text-slate-300 transition-colors">
                Terms of Service
              </Link>
              <Link to={createPageUrl('Warranty')} className="hover:text-slate-300 transition-colors">
                Warranty
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}