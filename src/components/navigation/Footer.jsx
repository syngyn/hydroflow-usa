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
                <p className="text-slate-300 text-sm sm:text-base">
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
                <a href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/07664e4bd_HydroFLOWUSACapabilityStatement.pdf" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 text-sm transition-colors">
                  Statement of Qualifications
                </a>
              </li>
              <li>
                <a href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/400ea9d05_HydropathMarineCapabilityStatementJune122024.pdf" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 text-sm transition-colors">
                  Marine Capability Statement
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-center gap-5">
          <a href="https://www.facebook.com/hydroflowusa/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
          </a>
          <a href="https://www.instagram.com/hydroflowusa/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/4862729" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://www.youtube.com/@hydroflow-USA" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
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