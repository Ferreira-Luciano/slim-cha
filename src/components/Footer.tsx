import React from 'react';
import { Lock, Sparkles, Flame } from 'lucide-react';
import { ActiveProductPage } from './Header';

interface FooterProps {
  activePage: ActiveProductPage;
  onSelectPage: (page: ActiveProductPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ activePage, onSelectPage }) => {
  return (
    <footer className="bg-[#12100e] text-stone-400 py-12 border-t border-stone-800 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 text-left">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#b85d2d] flex items-center justify-center text-white font-black">
                <Sparkles className="w-4 h-4 text-amber-200" />
              </div>
              <span className="font-heading font-extrabold text-lg text-white">
                Portal Oficial • Braip Checkout
              </span>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed max-w-md">
              Oferecemos duas linhas especializadas com tecnologia de ponta: <strong>Slim Chá</strong> para queima de gordura e controle da saciedade, e <strong>IArmonize</strong> para revitalização capilar, sono profundo e energia celular.
            </p>
            <div className="mt-4 flex items-center gap-2 text-emerald-400 font-semibold text-[11px]">
              <Lock className="w-3.5 h-3.5" />
              <span>Ambiente de Pagamento Blindado e Criptografado pela Plataforma Braip</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Nossas Páginas de Vendas
            </h4>
            <div className="space-y-2 text-xs">
              <button
                onClick={() => onSelectPage('emagrecimento')}
                className={`w-full text-left flex items-center gap-1.5 p-2 rounded-lg transition-colors cursor-pointer ${
                  activePage === 'emagrecimento' 
                    ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 font-bold' 
                    : 'text-stone-400 hover:text-white hover:bg-stone-900'
                }`}
              >
                <Flame className="w-3.5 h-3.5 text-emerald-400" />
                <span>Página 1: Slim Chá (Emagrecimento)</span>
              </button>

              <button
                onClick={() => onSelectPage('iarmonize')}
                className={`w-full text-left flex items-center gap-1.5 p-2 rounded-lg transition-colors cursor-pointer ${
                  activePage === 'iarmonize' 
                    ? 'bg-[#b85d2d]/20 text-amber-300 border border-[#b85d2d]/40 font-bold' 
                    : 'text-stone-400 hover:text-white hover:bg-stone-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Página 2: IArmonize (4 Fórmulas)</span>
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Formas de Pagamento
            </h4>
            <div className="flex flex-wrap gap-2 mb-3">
              {['PIX Instantâneo', 'Cartão até 10x ou 12x', 'Sem Juros'].map((payment, i) => (
                <span key={i} className="bg-stone-900 border border-stone-800 text-[11px] text-stone-300 px-2 py-1 rounded">
                  {payment}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-stone-500">
              Certificação SSL 256 bits com total sigilo de dados.
            </p>
          </div>

        </div>

        {/* Regulatory Box */}
        <div className="p-4 bg-stone-900/60 rounded-xl border border-stone-800/80 mb-8 text-[11px] leading-relaxed text-stone-400 text-left">
          <p className="mb-2">
            <strong>AVISO LEGAL E REGULATÓRIO:</strong> Suplementos alimentares dispensados de registro conforme RDC nº 240/2018 da ANVISA. Estes produtos não substituem acompanhamento médico ou tratamentos de saúde específicos. Venda online exclusiva e autorizada.
          </p>
          <p>
            Consulte sempre seu médico ou nutricionista ao iniciar qualquer protocolo alimentar ou de suplementação.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} Slim Chá & IArmonize Oficial. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4 text-stone-500">
            <span className="hover:text-stone-300">Termos de Uso</span>
            <span>•</span>
            <span className="hover:text-stone-300">Política de Privacidade</span>
            <span>•</span>
            <span className="hover:text-stone-300">Políticas de Entrega</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
