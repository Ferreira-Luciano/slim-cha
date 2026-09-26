import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { FormulasSection } from '../components/FormulasSection';
import { KitsCarousel } from '../components/KitsCarousel';
import { CanetaContinuitySection } from '../components/CanetaContinuitySection';
import { FaqSection } from '../components/FaqSection';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';
import { IARMONIZE_REVIEWS } from '../data/productData';

interface IArmonizePageProps {
  getCheckoutUrl: (extraParams?: Record<string, string>) => string;
}

export const IArmonizePage: React.FC<IArmonizePageProps> = ({ getCheckoutUrl }) => {
  const scrollToKits = () => {
    const el = document.getElementById('kits');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#faf6f0] text-stone-900">
      {/* 1. Hero Section */}
      <HeroSection
        onCtaClick={scrollToKits}
        affiliateUrl={getCheckoutUrl()}
      />

      {/* 2. The 4 Core Formulas */}
      <FormulasSection
        onSelectFormulaCta={scrollToKits}
      />

      {/* 3. The Core 9 Kits Carousel with direct Braip Checkout */}
      <KitsCarousel
        getCheckoutUrl={getCheckoutUrl}
      />

      {/* 4. Caneta Emagrecedora Continuity Section */}
      <CanetaContinuitySection
        onCtaClick={scrollToKits}
      />

      {/* 5. Carrossel de Depoimentos de Clientes com Fotos e Estrelas */}
      <TestimonialsCarousel
        theme="iarmonize"
        testimonials={IARMONIZE_REVIEWS}
        title="Experiências Reais com as Fórmulas IArmonize"
        subtitle="Veja relatos de quem transformou o sono, a saúde capilar e a disposição com nossos protocolos."
        onCtaClick={scrollToKits}
      />

      {/* 6. Frequently Asked Questions (FAQ) */}
      <FaqSection
        onCtaClick={scrollToKits}
      />
    </div>
  );
};
