import React from 'react';
import { IARMONIZE_FAQ } from '../data/productData';
import { FaqAccordion } from './FaqAccordion';

interface FaqSectionProps {
  onCtaClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onCtaClick }) => {
  return (
    <FaqAccordion
      items={IARMONIZE_FAQ}
      theme="amber"
      title="Perguntas Frequentes - IArmonize"
      subtitle="Entenda como tomar as 4 fórmulas, sinergia sublingual, continuidade após caneta emagrecedora, prazos de entrega e segurança da sua compra na Braip."
      badgeLabel="Tire Suas Dúvidas"
      onCtaClick={onCtaClick}
      ctaText="ESCOLHER MEU PROTOCOLO IARMONIZE AGORA"
      id="faq"
    />
  );
};
