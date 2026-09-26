import React from 'react';
import { FORMULAS_DATA } from '../data/productData';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

interface FormulasSectionProps {
  onSelectFormulaCta: () => void;
}

export const FormulasSection: React.FC<FormulasSectionProps> = ({ onSelectFormulaCta }) => {
  return (
    <section id="formulas" className="py-16 md:py-24 bg-[#f5eee6] border-y border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#b85d2d] bg-[#b85d2d]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Sinergia Farmacêutica Inteligente
          </span>
          <h2 className="font-serif-title font-bold text-3xl sm:text-4xl md:text-5xl text-[#26221f] tracking-tight">
            4 Fórmulas Exclusivas Pensadas Para Agir Juntas
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Cada ativo foi selecionado com rigor científico e dosagens terapêuticas ideais para atuar em sinergia celular.
          </p>
        </div>

        {/* 4 Cards Exactly Matching Images 2 & 3 */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* Card 1: IArmonize Hair */}
          <div className="bg-[#ede7df] border border-stone-300/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-10 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-32 sm:w-40 h-36 sm:h-44 shrink-0 flex items-center justify-center">
              <img
                src={FORMULAS_DATA[0].image}
                alt={FORMULAS_DATA[0].name}
                className="max-h-full max-w-full object-contain drop-shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 text-left w-full">
              <h3 className="font-serif-title font-bold text-2xl sm:text-3xl text-[#4a2e18] mb-4">
                IArmonize Hair - 90 cápsulas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-stone-700 text-sm sm:text-base">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4a2e18] shrink-0" />
                    <span>Queratina</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4a2e18] shrink-0" />
                    <span>Biotina</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4a2e18] shrink-0" />
                    <span>Complexo B</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4a2e18] shrink-0" />
                    <span>Silício Orgânico</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4a2e18] shrink-0" />
                    <span>Ferro</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4a2e18] shrink-0" />
                    <span>Metionina</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4a2e18] shrink-0" />
                    <span>L Cisteína</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4a2e18] shrink-0" />
                    <span>PABA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4a2e18] shrink-0" />
                    <span>Levedura medicinal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4a2e18] shrink-0" />
                    <span>MSM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: IArmonize Sleep */}
          <div className="bg-[#e8edf2] border border-blue-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-10 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-32 sm:w-40 h-36 sm:h-44 shrink-0 flex items-center justify-center">
              <img
                src={FORMULAS_DATA[1].image}
                alt={FORMULAS_DATA[1].name}
                className="max-h-full max-w-full object-contain drop-shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 text-left w-full">
              <h3 className="font-serif-title font-bold text-2xl sm:text-3xl text-[#1e3a5f] mb-4">
                IArmonize Sleep - 90 cápsulas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-stone-700 text-sm sm:text-base">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a5f] shrink-0" />
                    <span>Melatonina 5mg</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a5f] shrink-0" />
                    <span>L Theanine 200mg</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a5f] shrink-0" />
                    <span>5-HTP 50mg</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a5f] shrink-0" />
                    <span>Magnésio Treonato 150mg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: IArmonize Energy */}
          <div className="bg-[#f7f2e6] border border-amber-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-10 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-32 sm:w-40 h-36 sm:h-44 shrink-0 flex items-center justify-center">
              <img
                src={FORMULAS_DATA[2].image}
                alt={FORMULAS_DATA[2].name}
                className="max-h-full max-w-full object-contain drop-shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 text-left w-full">
              <h3 className="font-serif-title font-bold text-2xl sm:text-3xl text-[#946114] mb-4">
                IArmonize Energy - 90 cápsulas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-stone-700 text-sm sm:text-base">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#946114] shrink-0" />
                    <span>Coenzima Q10 150mg</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#946114] shrink-0" />
                    <span>Magnésio Dimalato 200mg</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#946114] shrink-0" />
                    <span>Zinco 7mg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: IArmonize Vital */}
          <div className="bg-[#f8edea] border border-rose-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-10 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-32 sm:w-40 h-36 sm:h-44 shrink-0 flex items-center justify-center">
              <img
                src={FORMULAS_DATA[3].image}
                alt={FORMULAS_DATA[3].name}
                className="max-h-full max-w-full object-contain drop-shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 text-left w-full">
              <h3 className="font-serif-title font-bold text-2xl sm:text-3xl text-[#8e2b3c] mb-4">
                IArmonize Vital - 30ml
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-stone-700 text-sm sm:text-base">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8e2b3c] shrink-0" />
                    <span>Vitamina D</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8e2b3c] shrink-0" />
                    <span>Vitamina A</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8e2b3c] shrink-0" />
                    <span>Vitamina K2 MK7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8e2b3c] shrink-0" />
                    <span>Vitamina E</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8e2b3c] shrink-0" />
                    <span>Vitamina B9 (Ácido Fólico)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8e2b3c] shrink-0" />
                    <span>Vitamina B12</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8e2b3c] shrink-0" />
                    <span>Veículo Sublingual</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA to choose kits */}
        <div className="text-center mt-12">
          <button
            onClick={onSelectFormulaCta}
            className="inline-flex items-center gap-2.5 bg-[#b85d2d] hover:bg-[#a14e24] text-white font-heading font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-md transition-transform hover:scale-105 cursor-pointer"
          >
            <span>ESCOLHA SEU KIT COM ESSAS FÓRMULAS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
