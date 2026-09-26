import React from 'react';
import { ShieldCheck, Award, RotateCcw, CheckCircle2, Lock } from 'lucide-react';
import { ASSETS } from '../data/productData';

interface GuaranteeSealBadgeProps {
  theme?: 'emerald' | 'amber';
  variant?: 'hero' | 'compact';
  className?: string;
}

export const GuaranteeSealBadge: React.FC<GuaranteeSealBadgeProps> = ({
  theme = 'emerald',
  variant = 'hero',
  className = '',
}) => {
  const isEmerald = theme === 'emerald';

  if (variant === 'compact') {
    return (
      <div
        className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border text-xs font-medium transition-all ${
          isEmerald
            ? 'bg-emerald-950/60 border-emerald-500/30 text-emerald-300'
            : 'bg-amber-50 border-amber-300/80 text-amber-900'
        } ${className}`}
      >
        <div
          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
            isEmerald ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-200 text-amber-800'
          }`}
        >
          <Award className="w-3.5 h-3.5" />
        </div>
        <span className="font-bold">Garantia Blindada de 30 Dias</span>
        <span className="opacity-60">• Risco Zero</span>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full max-w-xl rounded-2xl p-4 sm:p-5 border transition-all shadow-sm ${
        isEmerald
          ? 'bg-gradient-to-r from-[#0d1f14] via-[#0b1a10] to-[#08130b] border-emerald-500/40 text-stone-200 shadow-emerald-950/30'
          : 'bg-gradient-to-r from-amber-50 via-white to-amber-50/70 border-amber-300/80 text-stone-800 shadow-amber-900/5'
      } ${className}`}
    >
      <div className="flex items-center gap-3.5 sm:gap-4">
        {/* Seal Graphic or Image */}
        <div className="relative shrink-0">
          <div
            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden flex items-center justify-center border-2 shadow-md ${
              isEmerald
                ? 'border-emerald-400/50 bg-[#09150d] shadow-emerald-500/20'
                : 'border-amber-400/70 bg-amber-100/50 shadow-amber-500/20'
            }`}
          >
            {ASSETS.guarantee ? (
              <img
                src={ASSETS.guarantee}
                alt="Selo 30 Dias de Garantia"
                className="w-full h-full object-cover transform scale-110"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-center">
                <Award className={`w-6 h-6 ${isEmerald ? 'text-emerald-400' : 'text-amber-600'}`} />
                <span className="text-[10px] font-black leading-none">30 DIAS</span>
              </div>
            )}
          </div>
          
          {/* Glowing dot */}
          <span
            className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center border border-white/40 shadow-sm ${
              isEmerald ? 'bg-emerald-500 text-stone-950' : 'bg-[#b85d2d] text-white'
            }`}
          >
            <ShieldCheck className="w-2.5 h-2.5 stroke-[3]" />
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 text-left">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span
              className={`font-heading font-black text-xs sm:text-sm tracking-wide flex items-center gap-1.5 ${
                isEmerald ? 'text-emerald-300' : 'text-[#8c3d17]'
              }`}
            >
              <Award className="w-3.5 h-3.5 shrink-0" />
              GARANTIA INCONDICIONAL DE 30 DIAS
            </span>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                isEmerald
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'bg-amber-100 text-amber-900 border border-amber-300'
              }`}
            >
              RISCO ZERO
            </span>
          </div>

          <p
            className={`text-xs sm:text-[13px] leading-relaxed line-clamp-2 ${
              isEmerald ? 'text-stone-300' : 'text-stone-600'
            }`}
          >
            Experimente por 30 dias. Se por qualquer motivo não ficar 100% satisfeito com seus resultados,
            devolvemos todo o seu dinheiro sem perguntas.
          </p>

          {/* Micro badges below */}
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px]">
            <span
              className={`inline-flex items-center gap-1 font-medium ${
                isEmerald ? 'text-emerald-400' : 'text-emerald-700'
              }`}
            >
              <CheckCircle2 className="w-3 h-3" />
              Satisfação Garantida
            </span>
            <span
              className={`inline-flex items-center gap-1 font-medium ${
                isEmerald ? 'text-stone-400' : 'text-stone-500'
              }`}
            >
              <RotateCcw className="w-3 h-3" />
              Reembolso 100% Sem Burocracia
            </span>
            <span
              className={`inline-flex items-center gap-1 font-medium ${
                isEmerald ? 'text-stone-400' : 'text-stone-500'
              }`}
            >
              <Lock className="w-3 h-3" />
              Braip Seguro
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
