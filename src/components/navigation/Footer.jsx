import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Footer({ currentPageName }) {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* CTA Section */}
      {currentPageName !== 'Contact' && (
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                  Ready to protect your water system?
                </h3>
                <p className="text-slate-400 text-sm sm:text-base">
                  Contact us for a free consultation and find the perfect solution.
                </p>
              </div>
              <Link
                to={createPageUrl('Contact')}
                className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all shadow-lg shadow-cyan-500/25 text-sm sm:text-base">

                Get Started
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <p className="text-slate-300 text-sm leading-relaxed mb-6">The exclusive U.S. distributor of <i>Hydro</i>FLOW water conditioners, which are powered by the patented Hydropath technology.

            </p>
            <div className="space-y-3">
              <a href="tel:1-888-559-4340" className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">1-888-559-4340</span>
              </a>
              <a href="mailto:sales@hydroflow-usa.com" className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">sales@hydroflow-usa.com</span>
              </a>
              <a href="https://www.google.com/maps/place/8561+154th+Ave+NE+%23230,+Redmond,+WA+98052" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-slate-300 hover:text-cyan-400 transition-colors">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">8561 154th AVE NE, Suite 230<br />Redmond, WA 98052</span>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">Products</h4>
            <ul className="space-y-3">
              {['Pearl', 'Pearl Plus', <><i>hs</i>40</>, <><i>i</i> Range</>, <><i>hm</i> Range</>].map((item, idx) =>
              <li key={idx}>
                 <Link to={createPageUrl('Products')} className="text-slate-300 hover:text-cyan-400 text-sm transition-colors">
                   {item}
                 </Link>
               </li>
              )}
              <li>
               <Link to={createPageUrl('FilterHousings')} className="text-slate-300 hover:text-cyan-400 text-sm transition-colors">
                 Filter Housings
               </Link>
              </li>
              <li>
               <Link to={createPageUrl('FilterCartridges')} className="text-slate-300 hover:text-cyan-400 text-sm transition-colors">
                 Filter Cartridges
               </Link>
              </li>
              <li>
               <Link to={createPageUrl('BundleDeal')} className="text-slate-300 hover:text-cyan-400 text-sm transition-colors">
                 Pearl Plus Bundle
               </Link>
              </li>
              <li>
               <Link to={createPageUrl('Support')} className="text-slate-300 hover:text-cyan-400 text-sm transition-colors">
                 Product Support
               </Link>
              </li>
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
              { name: 'Marine', href: 'Marine' }].
              map((item) =>
              <li key={item.name}>
                  <Link to={createPageUrl(item.href)} className="text-slate-300 hover:text-cyan-400 text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              {[
              { name: 'Cooling Tower ROI Calculator', href: 'Savings' },
              { name: 'Technology', href: 'Technology' },
              { name: 'Knowledge Base', href: 'KnowledgeBase' },
              { name: 'Water Hardness Map', href: 'WaterHardnessMap' },
              { name: 'Performance With Time', href: 'PerformanceWithTime' },
              { name: 'What to Expect', href: 'Expectations' },
              { name: 'FAQ', href: 'FAQ' },
              { name: 'Video Library', href: 'VideoLibrary' },
              { name: 'About Us', href: 'About' },
              { name: 'Contact', href: 'Contact' },
              { name: <>Benefits of <i>Hydro</i>FLOW</>, href: 'RemovedContentPage' }].
              map((item) =>
              <li key={item.name}>
                  <Link to={createPageUrl(item.href)} className="text-slate-300 hover:text-cyan-400 text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              )}
              <li>
                <a href="https://hydroflow-usa.com/assets/userfiles/files/Statement_of_Qualifications.pdf" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 text-sm transition-colors">
                  Statement of Qualifications
                </a>
              </li>
              <li>
                <a href="https://hydroflow-usa.com/assets/userfiles/files/Hydropath_Marine_Capability_Statement.pdf" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 text-sm transition-colors">
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p>© {new Date().getFullYear()} <i>Hydro</i>FLOW USA. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to={createPageUrl('PrivacyPolicy')} className="text-slate-400 hover:text-slate-200 transition-colors">
                Privacy Policy
              </Link>
              <Link to={createPageUrl('TermsOfService')} className="text-slate-400 hover:text-slate-200 transition-colors">
                Terms of Service
              </Link>
              <Link to={createPageUrl('Warranty')} className="text-slate-400 hover:text-slate-200 transition-colors">
                Warranty
              </Link>
              <Link to={createPageUrl('StateWaterHardness')} className="text-slate-400 hover:text-slate-200 transition-colors">
                State Pages
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>);

}