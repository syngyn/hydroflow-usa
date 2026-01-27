import React from 'react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import { CartProvider } from '@/components/cart/CartContext';
import { RecommendationProvider } from '@/components/recommendations/RecommendationContext';
import { Toaster } from 'sonner';

export default function Layout({ children, currentPageName }) {
  return (
    <CartProvider>
      <RecommendationProvider>
        <div className="min-h-screen flex flex-col bg-white">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster position="top-right" richColors />
        </div>
      </RecommendationProvider>
    </CartProvider>
  );
}