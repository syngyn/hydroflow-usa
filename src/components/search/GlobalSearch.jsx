import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Search, X, FileText, Package, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  const { data: caseStudies = [] } = useQuery({
    queryKey: ['caseStudies'],
    queryFn: () => base44.entities.CaseStudy.list(),
    initialData: [],
  });

  const products = [
    { id: 'pearl', name: 'Pearl', page: 'ProductPearl', description: 'Perfect for apartments & condos up to 1,000 sq ft' },
    { id: 'pearl-plus', name: 'Pearl Plus', page: 'ProductPearlPlus', description: 'Most popular for homes up to 3,000 sq ft' },
    { id: 'hs40', name: 'hs40', page: 'ProductHS40', description: 'For pools, spas & light commercial' },
    { id: 'irange', name: 'iRange', page: 'ProductIRange', description: 'Industrial & large commercial solutions' },
    { id: 'hmrange', name: 'hmRange', page: 'ProductHMRange', description: 'Marine vessel water treatment' },
  ];

  const pages = [
    { name: 'Home', page: 'Home', description: 'Main landing page' },
    { name: 'About', page: 'About', description: 'About HydroFLOW USA' },
    { name: 'Products', page: 'Products', description: 'Browse all products' },
    { name: 'Case Studies', page: 'CaseStudies', description: 'Customer success stories' },
    { name: 'Technology', page: 'Technology', description: 'How Hydropath technology works' },
    { name: 'Contact', page: 'Contact', description: 'Get in touch with us' },
    { name: 'Residential', page: 'Residential', description: 'Solutions for homes' },
    { name: 'Commercial', page: 'Commercial', description: 'Solutions for businesses' },
    { name: 'Industrial', page: 'Industrial', description: 'Solutions for large facilities' },
    { name: 'Agriculture', page: 'Agriculture', description: 'Solutions for farms' },
    { name: 'Marine', page: 'Marine', description: 'Solutions for vessels' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      inputRef.current?.focus();
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const filteredProducts = products.filter(p => 
    searchTerm.length > 0 && 
    (p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     p.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredCaseStudies = caseStudies.filter(cs => 
    searchTerm.length > 0 && 
    (cs.title?.toLowerCase().includes(searchTerm.toLowerCase()) || 
     cs.description?.toLowerCase().includes(searchTerm.toLowerCase()))
  ).slice(0, 5);

  const filteredPages = pages.filter(p => 
    searchTerm.length > 0 && 
    (p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     p.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const hasResults = filteredProducts.length > 0 || filteredCaseStudies.length > 0 || filteredPages.length > 0;

  const handleResultClick = () => {
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div ref={searchRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
      >
        <Search className="w-5 h-5 text-slate-600" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 top-12 w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 overflow-hidden"
            >
              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search products, case studies, pages..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-10 py-2.5 bg-slate-50 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              <div className="max-h-96 overflow-y-auto">
                {searchTerm === '' ? (
                  <div className="p-8 text-center text-slate-400 text-sm">
                    Start typing to search...
                  </div>
                ) : !hasResults ? (
                  <div className="p-8 text-center text-slate-400 text-sm">
                    No results found for "{searchTerm}"
                  </div>
                ) : (
                  <div className="p-2 space-y-4">
                    {filteredProducts.length > 0 && (
                      <div>
                        <div className="px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          Products
                        </div>
                        <div className="space-y-1">
                          {filteredProducts.map((product) => (
                            <Link
                              key={product.id}
                              to={createPageUrl(product.page)}
                              onClick={handleResultClick}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-cyan-50 transition-colors group"
                            >
                              <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-200 transition-colors">
                                <Package className="w-4 h-4 text-cyan-600" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-medium text-slate-900 group-hover:text-cyan-600 transition-colors">
                                  {product.name}
                                </div>
                                <div className="text-xs text-slate-500 truncate">
                                  {product.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {filteredCaseStudies.length > 0 && (
                      <div>
                        <div className="px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          Case Studies
                        </div>
                        <div className="space-y-1">
                          {filteredCaseStudies.map((study) => (
                            <Link
                              key={study.id}
                              to={createPageUrl(`CaseStudyDetail?slug=${study.slug}`)}
                              onClick={handleResultClick}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-cyan-50 transition-colors group"
                            >
                              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                                <FileText className="w-4 h-4 text-blue-600" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-medium text-slate-900 group-hover:text-cyan-600 transition-colors line-clamp-1">
                                  {study.title}
                                </div>
                                <div className="text-xs text-slate-500 line-clamp-2">
                                  {study.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {filteredPages.length > 0 && (
                      <div>
                        <div className="px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          Pages
                        </div>
                        <div className="space-y-1">
                          {filteredPages.map((page) => (
                            <Link
                              key={page.page}
                              to={createPageUrl(page.page)}
                              onClick={handleResultClick}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-cyan-50 transition-colors group"
                            >
                              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-200 transition-colors">
                                <BookOpen className="w-4 h-4 text-slate-600" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-medium text-slate-900 group-hover:text-cyan-600 transition-colors">
                                  {page.name}
                                </div>
                                <div className="text-xs text-slate-500 truncate">
                                  {page.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}