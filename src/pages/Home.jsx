import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/home/HeroSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import ProductsShowcase from '@/components/home/ProductsShowcase';
import TechnologySection from '@/components/home/TechnologySection';
import MarketSectors from '@/components/home/MarketSectors';
import TestimonialsSection from '@/components/home/TestimonialsSection';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>HydroFLOW USA - Chemical-Free Water Treatment Technology</title>
        <meta name="description" content="Discover HydroFLOW's revolutionary water conditioning technology. Eliminate scale, reduce biofilm, and protect your water systems without chemicals or salt." />
      </Helmet>
      <HeroSection />
    </div>
  );
}