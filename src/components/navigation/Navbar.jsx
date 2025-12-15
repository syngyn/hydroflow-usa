import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, ChevronDown, ShoppingCart, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: 'About' },
    { 
      name: 'Market Sectors', 
      dropdown: [
        { name: 'Residential', href: 'Residential' },
        { name: 'Industrial', href: 'Industrial' },
        { name: 'Commercial', href: 'Commercial' },
        { name: 'Agriculture', href: 'Agriculture' },
        { name: 'Marine', href: 'Marine' },
      ]
    },
    { name: 'Technology', href: 'Technology' },
    { name: 'Products', href: 'Products' },
    { name: 'Case Studies', href: 'CaseStudies' },
    { name: 'Water Map', href: 'WaterHardnessMap' },
    { name: 'Contact', href: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="flex items-center space-x-2">
            <div className="relative">
              <div className={`text-2xl font-light tracking-tight ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
                Hydro<span className="font-bold text-cyan-500">FLOW</span>
              </div>
              <div className={`text-[10px] tracking-[0.3em] uppercase ${isScrolled ? 'text-slate-500' : 'text-white/80'}`}>
                U.S.A.
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              link.dropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger asChild>
                    <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                      isScrolled 
                        ? 'text-slate-700 hover:text-cyan-600 hover:bg-cyan-50' 
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}>
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white/95 backdrop-blur-md border-0 shadow-xl rounded-xl p-2">
                    {link.dropdown.map((item) => (
                      <DropdownMenuItem key={item.name} asChild>
                        <Link 
                          to={createPageUrl(item.href)}
                          className="cursor-pointer rounded-lg px-4 py-2.5 text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 transition-all"
                        >
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  to={createPageUrl(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isScrolled 
                      ? 'text-slate-700 hover:text-cyan-600 hover:bg-cyan-50' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:1-888-559-4340" className={`flex items-center gap-2 text-sm font-medium ${
              isScrolled ? 'text-slate-600' : 'text-white/90'
            }`}>
              <Phone className="w-4 h-4" />
              1-888-559-4340
            </a>
            <Link to={createPageUrl('Products')}>
              <Button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full px-6 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all">
                Shop Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-slate-700' : 'text-white'}`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                link.dropdown ? (
                  <div key={link.name} className="space-y-1">
                    <div className="px-4 py-2 text-sm font-semibold text-slate-400 uppercase tracking-wider">
                      {link.name}
                    </div>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={createPageUrl(item.href)}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-all"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={createPageUrl(link.href)}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg font-medium transition-all"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <div className="pt-4 border-t mt-4">
                <Link to={createPageUrl('Products')} onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-full">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}