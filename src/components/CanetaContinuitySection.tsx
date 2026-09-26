import React from 'react';
import { ArrowRight, CheckCircle2, Heart, Sparkles, Activity, ShieldCheck, Zap } from 'lucide-react';

interface CanetaContinuitySectionProps {
  onCtaClick: () => void;
}

export const CanetaContinuitySection: React.FC<CanetaContinuitySectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-16 md:py-20 bg-[#f5eee6] border-y border-stone-200/90 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#b85d2d]/10 border border-[#b85d2d]/20 text-[#b85d2d] text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 shadow-xs">
            <Activity className="w-4 h-4 text-[#b85d2d]" />
            <span>Suporte Nutricional & Continuidade</span>
          </div>

          <h2 className="font-serif-title font-bold text-2xl sm:text-3xl md:text-4xl text-[#26221f] tracking-tight leading-tight">
            Usa ou Já Usou a Caneta Emagrecedora?<br />
            <span className="text-[#b85d2d]">O IArmonize é a Continuidade Perfeita Para Você</span>
          </h2>

          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            O emagrecimento rápido com canetas injetáveis frequentemente provoca <strong>queda intensa de cabelo (eflúvio telógeno)</strong>, perda de massa e fadiga celular. O protocolo IArmonize repõe exatamente o que o corpo precisa para se manter firme, nutrido e com energia.
          </p>
        </div>

        {/* 4 Pillars of Transition / Continuity */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          
          <div className="bg-white border border-stone-200 rounded-2xl p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#b85d2d] flex items-center justify-center mb-3 font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title font-bold text-base text-stone-900 mb-1.5">
                Cessa a Queda Capilar
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                IArmonize Hair fornece Queratina, Silício Orgânico, Biotina e Ferro que nutrem os folículos e interrompem a queda pós-emagrecimento.
              </p>
            </div>
            <span className="mt-4 text-[11px] font-bold text-[#b85d2d] flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Fios Mais Fortes
            </span>
          </div>

          <div className="bg-white border border-stone-200 rounded-2xl p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#b85d2d] flex items-center justify-center mb-3 font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title font-bold text-base text-stone-900 mb-1.5">
                Energia sem Fadiga
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                A Coenzima Q10 e o Magnésio Dimalato do IArmonize Energy restauram a produção de ATP mitocondrial, combatendo a fraqueza física.
              </p>
            </div>
            <span className="mt-4 text-[11px] font-bold text-[#b85d2d] flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Disposição Constante
            </span>
          </div>

          <div className="bg-white border border-stone-200 rounded-2xl p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#b85d2d] flex items-center justify-center mb-3 font-bold">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title font-bold text-base text-stone-900 mb-1.5">
                Sono Reparador & Ansiedade
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                IArmonize Sleep regula neurotransmissores com L-Theanine e 5-HTP, controlando a ansiedade noturna e a compulsão alimentar.
              </p>
            </div>
            <span className="mt-4 text-[11px] font-bold text-[#b85d2d] flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Ciclo Circadiano
            </span>
          </div>

          <div className="bg-white border border-stone-200 rounded-2xl p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#b85d2d] flex items-center justify-center mb-3 font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title font-bold text-base text-stone-900 mb-1.5">
                Imunidade Sublingual
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                O veículo sublingual de IArmonize Vital garante rápida absorção de Vitaminas D, K2, E e complexo B sem sobrecarregar o estômago.
              </p>
            </div>
            <span className="mt-4 text-[11px] font-bold text-[#b85d2d] flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Absorção Direta
            </span>
          </div>

        </div>

        {/* Real Testimony / Quote box */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-sm">
          <div className="flex items-start gap-3.5 text-left">
            <div className="w-10 h-10 rounded-full bg-[#b85d2d] text-white font-serif font-black flex items-center justify-center shrink-0">
              ”
            </div>
            <div>
              <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed">
                "Perdi peso com a injeção, mas meu cabelo começou a cair tufos inteiros e vivia esgotada. O IArmonize Hair e o Vital recuperaram a densidade dos meus fios em 40 dias e me devolveram a vitalidade."
              </p>
              <span className="text-[11px] font-bold text-[#b85d2d] block mt-1">
                — Dra. Camila V., 38 anos (Protocolo de Continuidade IArmonize)
              </span>
            </div>
          </div>

          <button
            onClick={onCtaClick}
            className="shrink-0 w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b85d2d] hover:bg-[#a14e24] text-white font-heading font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md transition-transform hover:scale-105 cursor-pointer"
          >
            <span>ESCOLHER MEU PROTOCOLO</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
