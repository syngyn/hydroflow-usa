import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import ProductsShowcase from '@/components/home/ProductsShowcase';
import TechnologySection from '@/components/home/TechnologySection';
import MarketSectors from '@/components/home/MarketSectors';
import TestimonialsSection from '@/components/home/TestimonialsSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BenefitsSection />
      <ProductsShowcase />
      <TechnologySection />
      <MarketSectors />
      <TestimonialsSection />
    </div>
  );
}