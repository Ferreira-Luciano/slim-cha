import React, { useState, useEffect } from 'react';
import { ShoppingBag, X, CheckCircle2 } from 'lucide-react';
import { LIVE_PURCHASES } from '../data/productData';

export const LiveSalesPopup: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  useEffect(() => {
    if (isDismissed || !LIVE_PURCHASES.length) return;

    // Show popup after 4 seconds initially
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    // Loop interval
    const loopInterval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % LIVE_PURCHASES.length);
        setIsVisible(true);
      }, 3500); // 3.5s hidden before next one shows
    }, 11000); // total 11s cycle

    return () => {
      clearTimeout(initialTimer);
      clearInterval(loopInterval);
    };
  }, [isDismissed]);

  if (isDismissed || !isVisible || !LIVE_PURCHASES.length) return null;

  const sale = LIVE_PURCHASES[currentIndex];

  return (
    <div className="fixed bottom-20 left-4 z-40 max-w-xs sm:max-w-sm bg-white/95 border border-stone-300 rounded-2xl p-3 shadow-xl backdrop-blur-md transition-all duration-500 transform translate-y-0 animate-in fade-in slide-in-from-bottom-4">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-[#b85d2d]/15 text-[#b85d2d] border border-[#b85d2d]/25 flex items-center justify-center shrink-0 mt-0.5">
          <ShoppingBag className="w-4 h-4" />
        </div>

        <div className="flex-1 min-w-0 pr-1 text-left">
          <div className="flex items-center gap-1 text-[11px] text-[#b85d2d] font-bold mb-0.5">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            <span>Compra confirmada {sale.timeAgo}</span>
          </div>
          <p className="text-xs font-bold text-stone-900 truncate">
            {sale.name} • <span className="text-stone-500 font-normal">{sale.location}</span>
          </p>
          <p className="text-[11px] text-stone-600 truncate mt-0.5 font-medium">
            Adquiriu: <span className="text-[#b85d2d] font-bold">{sale.kit}</span>
          </p>
        </div>

        <button
          onClick={() => setIsDismissed(true)}
          className="text-stone-400 hover:text-stone-700 p-1 -mr-1 -mt-1 cursor-pointer"
          title="Fechar"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
