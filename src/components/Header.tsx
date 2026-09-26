import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Flame, 
  Clock, 
  SlidersHorizontal, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';

export type ActiveProductPage = 'emagrecimento' | 'iarmonize';

interface HeaderProps {
  activePage: ActiveProductPage;
  onSelectPage: (page: ActiveProductPage) => void;
  onOpenSettings: () => void;
  onScrollToKits: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  activePage, 
  onSelectPage, 
  onOpenSettings, 
  onScrollToKits 
}) => {
  const [timeLeft, setTimeLeft] = useState<{ minutes: number; seconds: number }>({
    minutes: 14,
    seconds: 48,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 15, seconds: 0 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (val: number) => val.toString().padStart(2, '0');

  const isSlim = activePage === 'emagrecimento';

  return (
    <header className={`sticky top-0 z-40 w-full transition-colors duration-300 shadow-md ${
      isSlim 
        ? 'bg-[#070e09]/95 border-b border-emerald-950 text-white backdrop-blur-md' 
        : 'bg-[#faf6f0]/95 border-b border-stone-200 text-stone-900 backdrop-blur-md'
    }`}>
      {/* Top Urgent Offer Bar */}
      <div className={`text-xs py-1.5 px-3 transition-colors ${
        isSlim 
          ? 'bg-gradient-to-r from-emerald-800 via-green-700 to-emerald-900 text-white' 
          : 'bg-[#2a2421] text-stone-200'
      }`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 truncate">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            <span className="font-semibold truncate">
              {isSlim ? (
                <>⚡ <strong>SLIM CHÁ OFICIAL:</strong> Até 60% OFF + Frete Grátis Nacional e Garantia 30 Dias</>
              ) : (
                <>🌿 <strong>PROTOCOLO IARMONIZE:</strong> 4 Fórmulas Sinergéticas • Frete e Parcelamento sem Juros</>
              )}
            </span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0 bg-black/30 px-2.5 py-0.5 rounded-full font-mono font-bold text-amber-300 text-xs">
            <Clock className="w-3.5 h-3.5 text-amber-300" />
            <span>{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        
        {/* Brand / Logo */}
        <div className="flex items-center gap-2.5">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-black shadow-md transition-colors ${
            isSlim 
              ? 'bg-emerald-500 text-stone-950 shadow-emerald-500/20' 
              : 'bg-[#b85d2d] text-white shadow-[#b85d2d]/20'
          }`}>
            {isSlim ? <Flame className="w-5 h-5 text-stone-950" /> : <Sparkles className="w-5 h-5 text-amber-200" />}
          </div>
          <div>
            <span className={`font-serif-title font-bold text-lg sm:text-xl tracking-tight block leading-none ${
              isSlim ? 'text-white' : 'text-[#26221f]'
            }`}>
              {isSlim ? 'Slim Chá' : 'IArmonize'}
            </span>
            <span className={`text-[10px] uppercase font-bold tracking-widest ${
              isSlim ? 'text-emerald-400' : 'text-[#786b62]'
            }`}>
              {isSlim ? 'Emagrecimento Natural' : 'Integra Pharma'}
            </span>
          </div>
        </div>

        {/* PROMINENT DUAL PAGE SWITCHER TABS */}
        <div className="flex items-center p-1 rounded-2xl bg-stone-200/60 dark:bg-stone-900 border border-stone-300/60 dark:border-stone-800">
          <button
            onClick={() => onSelectPage('emagrecimento')}
            className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              isSlim
                ? 'bg-emerald-500 text-stone-950 shadow-md font-extrabold scale-102'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Slim Chá (Emagrecimento)</span>
          </button>

          <button
            onClick={() => onSelectPage('iarmonize')}
            className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              !isSlim
                ? 'bg-[#b85d2d] text-white shadow-md font-extrabold scale-102'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>IArmonize (4 Fórmulas)</span>
          </button>
        </div>

        {/* Right CTA & Settings */}
        <div className="flex items-center gap-2">
          <button
            onClick={onScrollToKits}
            className={`hidden md:flex items-center gap-1.5 font-heading font-extrabold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md transition-all transform hover:scale-105 cursor-pointer ${
              isSlim
                ? 'bg-emerald-500 hover:bg-emerald-400 text-stone-950'
                : 'bg-[#b85d2d] hover:bg-[#a14e24] text-white'
            }`}
          >
            <span>VER KITS</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenSettings}
            title="Gerenciar Links de Afiliado Braip"
            className={`p-2 rounded-xl border transition-colors cursor-pointer ${
              isSlim 
                ? 'bg-stone-900 border-stone-800 text-stone-400 hover:text-white hover:bg-stone-800' 
                : 'bg-stone-100 border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-200'
            }`}
            aria-label="Gerenciar links de afiliado"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>

      </div>
    </header>
  );
};
