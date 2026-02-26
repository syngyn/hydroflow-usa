import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/navigation/Header';
import Footer from './components/navigation/Footer';

export default function Layout({ children, currentPageName }) {
  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen">
        <Header currentPageName={currentPageName} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer currentPageName={currentPageName} />
      </div>
    </HelmetProvider>
  );
}