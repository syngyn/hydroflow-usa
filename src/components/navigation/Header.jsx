import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header({ currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="flex items-center">
            <span className="text-2xl font-bold text-slate-900">
              <i>Hydro</i>FLOW USA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to={createPageUrl('Products')}
              className="text-slate-700 hover:text-cyan-600 transition-colors font-medium"
            >
              Products
            </Link>
            <Link
              to={createPageUrl('Technology')}
              className="text-slate-700 hover:text-cyan-600 transition-colors font-medium"
            >
              Technology
            </Link>
            <Link
              to={createPageUrl('CaseStudies')}
              className="text-slate-700 hover:text-cyan-600 transition-colors font-medium"
            >
              Case Studies
            </Link>
            <Link
              to={createPageUrl('About')}
              className="text-slate-700 hover:text-cyan-600 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to={createPageUrl('Contact')}
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-full font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-cyan-600"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-4">
              <Link
                to={createPageUrl('Products')}
                className="text-slate-700 hover:text-cyan-600 transition-colors font-medium px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to={createPageUrl('Technology')}
                className="text-slate-700 hover:text-cyan-600 transition-colors font-medium px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Technology
              </Link>
              <Link
                to={createPageUrl('CaseStudies')}
                className="text-slate-700 hover:text-cyan-600 transition-colors font-medium px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                to={createPageUrl('About')}
                className="text-slate-700 hover:text-cyan-600 transition-colors font-medium px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to={createPageUrl('Contact')}
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-full font-semibold transition-colors mx-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}