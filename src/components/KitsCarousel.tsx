import React, { useState, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Lock, 
  ShieldCheck, 
  Truck, 
  Sparkles,
  CheckCircle2,
  CreditCard
} from 'lucide-react';
import { KITS_DATA } from '../data/productData';
import { KitOffer } from '../types';
import { GuaranteeSealBadge } from './GuaranteeSealBadge';

interface KitsCarouselProps {
  getCheckoutUrl: (extraParams?: Record<string, string>) => string;
  onSelectKit?: (kit: KitOffer) => void;
}

export const KitsCarousel: React.FC<KitsCarouselProps> = ({ getCheckoutUrl, onSelectKit }) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'single' | 'combo'>('all');
  const carouselRef = useRef<HTMLDivElement>(null);

  const filteredKits = KITS_DATA.filter((kit) => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'single') {
      return ['kit-sleep', 'kit-energy', 'kit-vital-1', 'kit-hair-1'].includes(kit.id);
    }
    if (filterCategory === 'combo') {
      return ['kit-sleep-energy', 'kit-vital-2', 'kit-vital-3', 'kit-hair-2', 'kit-completo'].includes(kit.id);
    }
    return true;
  });

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="kits" className="py-16 md:py-24 bg-[#faf6f0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#b85d2d]/10 text-[#b85d2d] text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-[#b85d2d]" />
            <span>Tabela Oficial com Checkout Seguro</span>
          </div>

          <h2 className="font-serif-title font-bold text-3xl sm:text-4xl md:text-5xl text-[#26221f] tracking-tight">
            Escolha o Seu Protocolo IArmonize
          </h2>

          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Selecione o tratamento individual ou combo completo com condições em até 3x sem juros (ou até 10x sem juros no Kit Completo).
          </p>
        </div>

        {/* Filter Tabs & Navigation Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                filterCategory === 'all'
                  ? 'bg-[#26221f] text-white shadow-sm'
                  : 'bg-stone-200/80 text-stone-700 hover:bg-stone-300/80'
              }`}
            >
              Todos os Kits ({KITS_DATA.length})
            </button>
            <button
              onClick={() => setFilterCategory('single')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                filterCategory === 'single'
                  ? 'bg-[#26221f] text-white shadow-sm'
                  : 'bg-stone-200/80 text-stone-700 hover:bg-stone-300/80'
              }`}
            >
              Fórmulas Individuais
            </button>
            <button
              onClick={() => setFilterCategory('combo')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                filterCategory === 'combo'
                  ? 'bg-[#26221f] text-white shadow-sm'
                  : 'bg-stone-200/80 text-stone-700 hover:bg-stone-300/80'
              }`}
            >
              Combos & Protocolos
            </button>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 self-end sm:self-center">
            <button
              onClick={() => scroll('left')}
              aria-label="Rolar para esquerda"
              className="w-10 h-10 rounded-full bg-white border border-stone-300 text-stone-700 flex items-center justify-center hover:bg-stone-100 hover:text-stone-900 shadow-sm transition-all cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Rolar para direita"
              className="w-10 h-10 rounded-full bg-white border border-stone-300 text-stone-700 flex items-center justify-center hover:bg-stone-100 hover:text-stone-900 shadow-sm transition-all cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dynamic Cards Carousel Exactly Matching Screenshots 4, 5, 6 */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth snap-x snap-mandatory focus:outline-hidden"
          style={{ scrollbarWidth: 'thin' }}
        >
          {filteredKits.map((kit) => {
            const checkoutLink = getCheckoutUrl({ kit: kit.id });
            const isHighlighted = kit.isBestSeller;

            return (
              <div
                key={kit.id}
                onClick={() => onSelectKit && onSelectKit(kit)}
                className={`min-w-[290px] sm:min-w-[320px] max-w-[340px] flex-1 shrink-0 snap-start bg-white border rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl relative ${
                  isHighlighted 
                    ? 'border-[#b85d2d] ring-2 ring-[#b85d2d]/20 bg-amber-50/10' 
                    : 'border-stone-200'
                }`}
              >
                {/* Optional Tag */}
                {kit.tag && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-[#b85d2d] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md whitespace-nowrap">
                      {kit.tag}
                    </span>
                  </div>
                )}

                {/* Top Section: Bottle Visual + Title + Duration */}
                <div className="text-center pt-2">
                  <div className="h-44 flex items-center justify-center mb-4">
                    <img
                      src={kit.productImage}
                      alt={kit.name}
                      className="max-h-full max-w-full object-contain drop-shadow-sm hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <h3 className="font-serif-title font-bold text-xl sm:text-2xl text-[#26221f] mb-1">
                    {kit.name}
                  </h3>

                  <p className="text-stone-500 text-xs sm:text-sm font-medium mb-4">
                    {kit.protocolDuration}
                  </p>

                  {/* Price Block strictly matching Screenshots */}
                  <div className="my-4">
                    <div className="font-serif-title font-bold text-3xl sm:text-[34px] text-[#b85d2d] leading-none mb-1">
                      R$ {kit.price.toFixed(2).replace('.', ',')}
                    </div>

                    {kit.pixDiscountNote && (
                      <p className="text-xs font-semibold text-emerald-700 mb-1">
                        {kit.pixDiscountNote}
                      </p>
                    )}

                    <p className="text-xs sm:text-sm text-stone-600 font-medium">
                      {kit.installmentText}
                    </p>
                  </div>
                </div>

                {/* Bottom Section: Terracotta Button + Item Breakdown Table */}
                <div className="space-y-4 pt-2">
                  <a
                    href={checkoutLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-[#b85d2d] hover:bg-[#a14e24] text-white font-heading font-extrabold text-xs sm:text-sm py-3.5 px-4 rounded-xl shadow-md shadow-[#b85d2d]/20 transition-all transform hover:scale-[1.02] active:scale-[0.98] tracking-wider cursor-pointer"
                  >
                    {kit.buttonText}
                  </a>

                  {/* 30 Days Guarantee Badge */}
                  <div className="flex justify-center pt-0.5">
                    <GuaranteeSealBadge theme="amber" variant="compact" />
                  </div>

                  {/* Quantity Breakdown Table Matching Screenshot */}
                  <div className="border-t border-stone-200 pt-3">
                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-1.5 px-1">
                      <span>Produto</span>
                      <span>Quant</span>
                    </div>

                    <div className="space-y-1">
                      {kit.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center text-xs text-stone-700 bg-stone-50 px-2 py-1.5 rounded-lg border border-stone-100">
                          <span className="truncate pr-2">{item.product}</span>
                          <span className="font-bold text-stone-900 shrink-0">{item.quantity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-400">
                    <Lock className="w-3 h-3 text-stone-500" />
                    <span>Plataforma Oficial Braip</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Security / Trust footer bar */}
        <div className="mt-8 bg-white border border-stone-200 rounded-2xl p-4 sm:p-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center">
            <Truck className="w-6 h-6 text-[#b85d2d] mb-1" />
            <span className="text-xs font-bold text-stone-900">Envio Rápido</span>
            <span className="text-[11px] text-stone-500">Rastreio oficial Correios</span>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-6 h-6 text-[#b85d2d] mb-1" />
            <span className="text-xs font-bold text-stone-900">Fórmulas 100% Puras</span>
            <span className="text-[11px] text-stone-500">Qualidade Integra Pharma</span>
          </div>
          <div className="flex flex-col items-center">
            <CreditCard className="w-6 h-6 text-[#b85d2d] mb-1" />
            <span className="text-xs font-bold text-stone-900">Sem Juros</span>
            <span className="text-[11px] text-stone-500">Cartão de Crédito ou Pix</span>
          </div>
          <div className="flex flex-col items-center">
            <Lock className="w-6 h-6 text-[#b85d2d] mb-1" />
            <span className="text-xs font-bold text-stone-900">Compra 100% Segura</span>
            <span className="text-[11px] text-stone-500">Criptografia Braip</span>
          </div>
        </div>

      </div>
    </section>
  );
};
