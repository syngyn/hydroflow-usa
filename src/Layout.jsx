import React from 'react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import { CartProvider } from '@/components/cart/CartContext';
import { Toaster } from 'sonner';

export default function Layout({ children, currentPageName }) {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster position="top-right" richColors />
      </div>
    </CartProvider>
  );
}