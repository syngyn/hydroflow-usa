import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import { CartProvider } from '@/components/cart/CartContext';
import { RecommendationProvider } from '@/components/recommendations/RecommendationContext';
import { Toaster } from 'sonner';

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <CartProvider>
      <RecommendationProvider>
        <Helmet>
          <title>HydroFLOW USA - Eco-Friendly Water Treatment Solutions</title>
          <meta name="description" content="HydroFLOW offers innovative, chemical-free water treatment technology for residential, commercial, and industrial applications. Prevent scale and biofilm naturally." />
        </Helmet>
        <div className="min-h-screen flex flex-col bg-white">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer currentPageName={currentPageName} />
          <Toaster position="top-right" richColors />
        </div>
      </RecommendationProvider>
    </CartProvider>
  );
}