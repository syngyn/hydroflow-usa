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
import { useCart } from '@/components/cart/CartContext';
import GlobalSearch from '@/components/search/GlobalSearch';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getCartCount } = useCart();

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
        { name: 'Power Generation', href: 'PowerGeneration' },
      ]
    },
    { 
      name: 'Technology', 
      dropdown: [
        { name: 'How It Works', href: 'Technology' },
        { name: 'Scale', href: 'Scale' },
        { name: 'Bio', href: 'Bio' },
        { name: 'Corrosion', href: 'Corrosion' },
        { name: 'Filtration', href: 'https://hydroflow-usa.com/filtration/', external: true },
      ]
    },
    { 
      name: 'Products', 
      dropdown: [
        { name: 'All Products', href: 'Products' },
        { name: 'Product Quiz', href: 'ProductQuiz' },
      ]
    },
    { 
      name: 'Blog', 
      dropdown: [
        { name: 'Residential Blog', href: 'BlogList?category=residential' },
        { name: 'Commercial Blog', href: 'BlogList?category=commercial' },
        { name: 'Industrial Blog', href: 'BlogList?category=industrial' },
        { name: 'Agriculture Blog', href: 'BlogList?category=agriculture' },
        { name: 'Marine Blog', href: 'BlogList?category=marine' },
      ]
    },
    { name: 'Case Studies', href: 'CaseStudies' },
    { 
      name: 'Water Maps', 
      dropdown: [
        { name: 'Water Hardness Map', href: 'WaterHardnessMap' },
        { name: 'Groundwater Temperature Map', href: 'GroundwaterTemperatureMap' },
      ]
    },
    { name: 'Contact', href: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-slate-200/90 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="flex items-center">
            <img 
              src="https://hydroflow-usa.com/wp-content/uploads/2025/12/logotrasparnet.png" 
              alt="HydroFLOW USA" 
              className="h-12 w-auto"
            />
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
                        : 'text-slate-700 hover:text-cyan-600 hover:bg-white/50'
                    }`}>
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white/95 backdrop-blur-md border-0 shadow-xl rounded-xl p-2">
                    {link.dropdown.map((item) => (
                      <DropdownMenuItem key={item.name} asChild>
                        {item.external ? (
                          <a 
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer rounded-lg px-4 py-2.5 text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 transition-all"
                          >
                            {item.name}
                          </a>
                        ) : (
                          <Link 
                            to={createPageUrl(item.href)}
                            className="cursor-pointer rounded-lg px-4 py-2.5 text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 transition-all"
                          >
                            {item.name}
                          </Link>
                        )}
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
                      : 'text-slate-700 hover:text-cyan-600 hover:bg-white/50'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <GlobalSearch />
            <a href="tel:1-888-559-4340" className={`flex items-center gap-2 text-sm font-medium ${
              isScrolled ? 'text-slate-600' : 'text-slate-600'
            }`}>
              <Phone className="w-4 h-4" />
              1-888-559-4340
            </a>
            <Link to={createPageUrl('Cart')}>
              <Button variant="ghost" className="relative p-2">
                <ShoppingCart className="w-5 h-5" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-cyan-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                    {getCartCount()}
                  </span>
                )}
              </Button>
            </Link>
            <Link to={createPageUrl('Products')}>
              <Button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full px-6 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all">
                Shop Now
              </Button>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-2">
            <GlobalSearch />
            <Link to={createPageUrl('Cart')}>
              <Button variant="ghost" className="relative p-2">
                <ShoppingCart className="w-5 h-5" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-cyan-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                    {getCartCount()}
                  </span>
                )}
              </Button>
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${isScrolled ? 'text-slate-700' : 'text-slate-700'}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t max-h-[calc(100vh-5rem)] overflow-y-auto"
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