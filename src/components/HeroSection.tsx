import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Leaf, 
  TrendingUp, 
  Lock, 
  Truck, 
  Award,
  ArrowRight
} from 'lucide-react';
import { ASSETS } from '../data/productData';
import { GuaranteeSealBadge } from './GuaranteeSealBadge';

interface HeroSectionProps {
  onCtaClick: () => void;
  affiliateUrl: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="hero" className="relative py-12 md:py-20 lg:py-24 bg-[#faf6f0] overflow-hidden">
      {/* Background organic blur elements */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-amber-200/30 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#b85d2d]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copywriting strictly matching Screenshot 1 */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Top Badge: 100% Natural • Ciência & Natureza */}
            <div className="inline-flex items-center gap-2 border border-stone-400/60 bg-stone-100/80 text-stone-700 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full mb-6 w-fit shadow-xs">
              <span>100% Natural • Ciência & Natureza</span>
            </div>

            {/* Headline: Durma melhor, tenha mais energia e cabelo mais forte. */}
            <h1 className="font-serif-title font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#26221f] leading-[1.15] tracking-tight mb-5">
              Durma melhor, tenha mais energia e cabelo mais forte.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-8 max-w-xl">
              4 fórmulas pensadas para agir juntas. Resultado perceptível já nas primeiras semanas.
            </p>

            {/* 3 Pillars with Icons Matching Screenshot 1 */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-8 max-w-lg">
              <div className="flex flex-col items-start gap-1">
                <div className="w-8 h-8 rounded-lg bg-stone-200/80 flex items-center justify-center text-stone-700 mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-800" />
                </div>
                <span className="font-bold text-xs sm:text-sm text-stone-800 leading-tight">
                  Fórmulas avançadas
                </span>
              </div>

              <div className="flex flex-col items-start gap-1">
                <div className="w-8 h-8 rounded-lg bg-stone-200/80 flex items-center justify-center text-stone-700 mb-1">
                  <Leaf className="w-4 h-4 text-emerald-800" />
                </div>
                <span className="font-bold text-xs sm:text-sm text-stone-800 leading-tight">
                  Ingredientes de alta pureza
                </span>
              </div>

              <div className="flex flex-col items-start gap-1">
                <div className="w-8 h-8 rounded-lg bg-stone-200/80 flex items-center justify-center text-stone-700 mb-1">
                  <TrendingUp className="w-4 h-4 text-emerald-800" />
                </div>
                <span className="font-bold text-xs sm:text-sm text-stone-800 leading-tight">
                  Resultados reais
                </span>
              </div>
            </div>

            {/* CTA Button: QUERO MEU KIT AGORA */}
            <div className="mb-4">
              <button
                onClick={onCtaClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#b85d2d] hover:bg-[#a14e24] text-white font-heading font-extrabold text-base sm:text-lg px-8 sm:px-10 py-4 rounded-xl shadow-lg shadow-[#b85d2d]/25 hover:shadow-[#b85d2d]/35 transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer tracking-wider"
              >
                <span>QUERO MEU KIT AGORA</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* 30 Days Guarantee Visual Seal Badge */}
            <div className="mb-4">
              <GuaranteeSealBadge theme="amber" variant="hero" />
            </div>

            {/* Trust Guarantee: Pagamento seguro • Envio rápido • Compra 100% segura */}
            <div className="text-xs sm:text-sm text-stone-500 font-medium">
              Pagamento seguro • Envio rápido • Compra 100% segura
            </div>

            {/* Caneta Emagrecedora Compatibility Callout */}
            <div className="mt-6 p-3 rounded-xl bg-amber-50/80 border border-amber-200/70 text-left max-w-xl flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
              <p className="text-xs text-stone-700 leading-tight">
                <strong className="text-stone-900">Usa ou já usou caneta emagrecedora?</strong> IArmonize é ideal para combater a queda capilar (eflúvio telógeno) e repor energia sem efeito rebote.
              </p>
            </div>

          </div>

          {/* Right Column: Hero Visual from Screenshot 1 */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-stone-100">
              <img
                src={ASSETS.hero}
                alt="Mulher com pele radiante segurando IArmonize Vital"
                className="w-full h-auto object-cover max-h-[520px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-stone-200 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-serif-title font-bold text-sm text-stone-900 block">
                      IArmonize Vital 30ml
                    </span>
                    <span className="text-[11px] text-stone-500">
                      Gotas sublinguais de alta absorção
                    </span>
                  </div>
                  <span className="bg-amber-100 text-amber-900 text-[11px] font-bold px-2.5 py-1 rounded-full">
                    100% Natural
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
