import React, { useState, useEffect, useRef } from 'react';
import { 
  Star, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  ShieldCheck, 
  Sparkles,
  TrendingDown
} from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsCarouselProps {
  theme: 'slim' | 'iarmonize';
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  onCtaClick?: () => void;
}

export const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
  theme,
  testimonials,
  title,
  subtitle,
  onCtaClick,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isSlim = theme === 'slim';
  const total = testimonials.length;

  // Touch swipe support
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Responsive items per view: mobile 1, tablet 2, desktop 3
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, total - itemsPerView);

  // Auto slide every 5 seconds if not paused
  useEffect(() => {
    if (isPaused || maxIndex <= 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const defaultTitle = isSlim 
    ? 'Quem Experimentou, Aprovou e Recomenda' 
    : 'O Que Nossos Clientes Dizem Sobre o Protocolo';

  const defaultSubtitle = isSlim
    ? 'Relatos e experiências de quem incluiu o Slim Chá na sua rotina diária de autocuidado.'
    : 'Relatos e experiências de quem incluiu os suplementos IArmonize no seu dia a dia.';

  return (
    <section 
      className={`py-16 md:py-24 relative overflow-hidden transition-colors ${
        isSlim 
          ? 'bg-[#060c08] border-b border-emerald-950/80 text-stone-100' 
          : 'bg-[#faf6f0] border-b border-stone-200 text-stone-900'
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className={`inline-flex items-center gap-2 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 shadow-sm ${
            isSlim 
              ? 'bg-emerald-950/90 text-emerald-400 border border-emerald-500/40' 
              : 'bg-[#b85d2d]/10 text-[#b85d2d] border border-[#b85d2d]/20'
          }`}>
            <Sparkles className="w-4 h-4" />
            <span>Relatos e Experiências de Usuários</span>
          </div>

          <h2 className={`font-heading font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight ${
            isSlim ? 'text-white' : 'text-[#26221f]'
          }`}>
            {title || defaultTitle}
          </h2>

          <p className={`text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed ${
            isSlim ? 'text-stone-300' : 'text-stone-600'
          }`}>
            {subtitle || defaultSubtitle}
          </p>

          {/* Trust Banner with Factual Items */}
          <div className={`mt-6 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 py-2.5 px-5 rounded-2xl border ${
            isSlim 
              ? 'bg-[#0d1c13] border-emerald-800/40 text-stone-200' 
              : 'bg-white border-stone-200 text-stone-800 shadow-sm'
          }`}>
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <CheckCircle2 className={`w-4 h-4 ${isSlim ? 'text-emerald-400' : 'text-[#b85d2d]'}`} />
              <span>Fórmula Original & Certificada</span>
            </div>

            <span className="hidden sm:inline opacity-30">|</span>

            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <ShieldCheck className={`w-4 h-4 ${isSlim ? 'text-emerald-400' : 'text-[#b85d2d]'}`} />
              <span>Checkout Oficial Braip</span>
            </div>

            <span className="hidden sm:inline opacity-30">|</span>

            <div className="flex items-center gap-1.5 text-xs text-stone-400 font-medium">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Envio com Código de Rastreio</span>
            </div>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div className="relative">
          
          {/* Track Container */}
          <div 
            className="overflow-hidden py-2"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {testimonials.map((item) => (
                <div 
                  key={item.id}
                  className="px-2.5 sm:px-3 shrink-0"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className={`h-full flex flex-col justify-between rounded-3xl p-6 sm:p-7 border shadow-xl transition-all duration-300 hover:scale-[1.01] ${
                    isSlim 
                      ? 'bg-[#0d1a12] border-emerald-900/60 hover:border-emerald-500/60 shadow-black/40' 
                      : 'bg-white border-stone-200/90 hover:border-[#b85d2d]/40 shadow-stone-200/50'
                  }`}>
                    
                    {/* Top: Customer Profile & Stars */}
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          {/* Avatar with fallback */}
                          <div className="relative shrink-0">
                            {item.photo || item.image ? (
                              <img 
                                src={item.photo || item.image} 
                                alt={item.name} 
                                className="w-13 h-13 rounded-full object-cover border-2 shadow-sm"
                                style={{ borderColor: isSlim ? '#059669' : '#b85d2d' }}
                                referrerPolicy="no-referrer"
                              />
                            ) : (
                              <div className={`w-13 h-13 rounded-full flex items-center justify-center font-black text-base ${
                                isSlim ? 'bg-emerald-800 text-white' : 'bg-[#b85d2d] text-white'
                              }`}>
                                {item.name.charAt(0)}
                              </div>
                            )}

                            {/* Mini check badge on avatar */}
                            <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-stone-950 p-0.5 rounded-full shadow-sm">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                            </span>
                          </div>

                          <div>
                            <h4 className={`font-heading font-black text-sm sm:text-base leading-tight ${
                              isSlim ? 'text-white' : 'text-stone-900'
                            }`}>
                              {item.name}
                            </h4>
                            <p className="text-xs text-stone-400 mt-0.5">
                              {item.age} anos · {item.city} - {item.state}
                            </p>
                          </div>
                        </div>

                        {/* Top Quote Icon */}
                        <div className={`p-2 rounded-xl opacity-60 ${
                          isSlim ? 'bg-emerald-950/60 text-emerald-400' : 'bg-stone-100 text-[#b85d2d]'
                        }`}>
                          <Quote className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Stars & Tag Row */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-stone-200/20">
                        <div className="flex items-center gap-1 text-amber-400">
                          {[...Array(item.rating || 5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>

                        {item.date && (
                          <span className="text-[11px] text-stone-400 font-medium">
                            {item.date}
                          </span>
                        )}
                      </div>

                      {/* Weight Loss / Metric Highlight Pill (if available) */}
                      {item.weightLostKg && (
                        <div className="mb-3 inline-flex items-center gap-1.5 py-1 px-2.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-black">
                          <TrendingDown className="w-3.5 h-3.5" />
                          <span>Eliminou {item.weightLostKg}kg em {item.durationWeeks || 8} semanas</span>
                        </div>
                      )}

                      {/* Review Headline */}
                      <h5 className={`font-heading font-bold text-base sm:text-lg mb-2 leading-snug ${
                        isSlim ? 'text-emerald-300' : 'text-[#b85d2d]'
                      }`}>
                        "{item.headline}"
                      </h5>

                      {/* Review Story */}
                      <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                        isSlim ? 'text-stone-300' : 'text-stone-600'
                      }`}>
                        {item.story}
                      </p>
                    </div>

                    {/* Bottom: Verified Purchase Tag & Product Kit */}
                    <div className={`pt-3 border-t flex flex-wrap items-center justify-between gap-2 text-[11px] ${
                      isSlim ? 'border-emerald-950/80 text-stone-400' : 'border-stone-100 text-stone-500'
                    }`}>
                      <div className="flex items-center gap-1 text-emerald-500 font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>Compra Verificada na Braip</span>
                      </div>

                      {item.productTag && (
                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold truncate max-w-[190px] ${
                          isSlim ? 'bg-stone-900 text-stone-300' : 'bg-stone-100 text-stone-700'
                        }`}>
                          {item.productTag}
                        </span>
                      )}
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          {maxIndex > 0 && (
            <>
              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Depoimento anterior"
                className={`absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shadow-xl transition-all cursor-pointer hover:scale-105 active:scale-95 ${
                  isSlim 
                    ? 'bg-[#0d1a12] text-white border border-emerald-500/50 hover:bg-emerald-600' 
                    : 'bg-white text-stone-800 border border-stone-300 hover:bg-[#b85d2d] hover:text-white'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Próximo depoimento"
                className={`absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shadow-xl transition-all cursor-pointer hover:scale-105 active:scale-95 ${
                  isSlim 
                    ? 'bg-[#0d1a12] text-white border border-emerald-500/50 hover:bg-emerald-600' 
                    : 'bg-white text-stone-800 border border-stone-300 hover:bg-[#b85d2d] hover:text-white'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

        </div>

        {/* Pagination Dots */}
        {maxIndex > 0 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx 
                    ? isSlim ? 'w-8 bg-emerald-500' : 'w-8 bg-[#b85d2d]'
                    : isSlim ? 'w-2.5 bg-emerald-950 border border-emerald-800' : 'w-2.5 bg-stone-300'
                }`}
              />
            ))}
          </div>
        )}

        {/* Micro CTA under Testimonials */}
        {onCtaClick && (
          <div className="text-center mt-10">
            <button
              type="button"
              onClick={onCtaClick}
              className={`font-heading font-black text-xs sm:text-sm py-3 px-6 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer uppercase tracking-wider ${
                isSlim
                  ? 'bg-emerald-500 hover:bg-emerald-400 text-stone-950'
                  : 'bg-[#b85d2d] hover:bg-[#a14e24] text-white'
              }`}
            >
              Quero Ter Resultados Como Esses · Ver Kits Oficiais
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
