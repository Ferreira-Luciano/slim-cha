import React from 'react';
import { ArrowRight, Truck } from 'lucide-react';
import { ActiveProductPage } from './Header';

interface StickyMobileBarProps {
  activePage: ActiveProductPage;
  onCtaClick: () => void;
  affiliateUrl: string;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ 
  activePage, 
  onCtaClick 
}) => {
  const isSlim = activePage === 'emagrecimento';

  return (
    <div className={`md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 backdrop-blur-lg shadow-2xl safe-bottom border-t transition-colors ${
      isSlim 
        ? 'bg-[#060c08]/95 border-emerald-500/40 text-white' 
        : 'bg-[#26221f]/95 border-stone-700 text-stone-200'
    }`}>
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wide text-amber-400">
            <Truck className="w-3 h-3" />
            <span>Frete Grátis com Rastreio</span>
          </div>
          <div className="text-xs font-bold leading-tight">
            A partir de <span className="font-black text-sm text-white">{isSlim ? '3x de R$ 53,30' : '3x de R$ 32,33'}</span> sem juros
          </div>
        </div>

        <button
          onClick={onCtaClick}
          className={`flex-1 max-w-[190px] flex items-center justify-center gap-1.5 font-heading font-extrabold text-xs sm:text-sm py-3 px-3 rounded-xl shadow-lg active:scale-95 transition-all cursor-pointer ${
            isSlim
              ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-stone-950 shadow-emerald-500/30'
              : 'bg-[#b85d2d] hover:bg-[#a14e24] text-white shadow-[#b85d2d]/30'
          }`}
        >
          <span>{isSlim ? 'COMPRAR CHÁ' : 'QUERO MEU KIT'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
