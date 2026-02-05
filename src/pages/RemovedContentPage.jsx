import React from 'react';
import BenefitsSection from '@/components/home/BenefitsSection';
import ProductsShowcase from '@/components/home/ProductsShowcase';
import TechnologySection from '@/components/home/TechnologySection';
import MarketSectors from '@/components/home/MarketSectors';
import TestimonialsSection from '@/components/home/TestimonialsSection';

export default function RemovedContentPage() {
  return (
    <div>
      <BenefitsSection />
      <ProductsShowcase />
      <TechnologySection />
      <MarketSectors />
      <TestimonialsSection />
    </div>
  );
}