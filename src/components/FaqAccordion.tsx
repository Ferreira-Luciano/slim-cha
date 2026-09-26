import React, { useState, useId } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  ArrowRight, 
  Search, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Lock,
  MessageCircleQuestion,
  Filter
} from 'lucide-react';
import { FaqItem } from '../types';

interface FaqAccordionProps {
  items: FaqItem[];
  theme?: 'emerald' | 'amber';
  title?: string;
  subtitle?: string;
  badgeLabel?: string;
  onCtaClick?: () => void;
  ctaText?: string;
  id?: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  items,
  theme = 'emerald',
  title = 'Perguntas Frequentes',
  subtitle = 'Tire todas as suas dúvidas sobre modo de uso, entrega rápida pelos Correios e garantia incondicional de 30 dias.',
  badgeLabel = 'Tire Suas Dúvidas',
  onCtaClick,
  ctaText = 'ESCOLHER MEU KIT COM DESCONTO',
  id = 'faq',
}) => {
  const isEmerald = theme === 'emerald';
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const componentId = useId();

  const toggleItem = (itemId: string) => {
    setOpenIds((prev) => 
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const expandAll = () => {
    setOpenIds(items.map((i) => i.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  // Filter categories
  const categories = [
    { key: 'todas', label: 'Todas as Dúvidas' },
    { key: 'produto', label: 'Modo de Uso' },
    { key: 'seguranca', label: 'Segurança & Caneta' },
    { key: 'entrega', label: 'Envio & Rastreio' },
    { key: 'garantia', label: 'Garantia 30 Dias' },
  ];

  const filteredItems = items.filter((item) => {
    const matchesCategory = selectedCategory === 'todas' || item.category === selectedCategory;
    const matchesSearch = 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Schema.org FAQPage structured JSON-LD object for SEO Rich Snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 transition-colors relative overflow-hidden ${
        isEmerald 
          ? 'bg-[#060c08] border-t border-emerald-950/80 text-stone-100' 
          : 'bg-[#faf6f0] border-t border-stone-200 text-stone-900'
      }`}
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      {/* Dynamic SEO JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Decorative gradient blur background */}
      <div 
        className={`absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-3xl rounded-full pointer-events-none opacity-20 ${
          isEmerald ? 'bg-emerald-500' : 'bg-amber-400'
        }`} 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <div 
            className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3.5 border ${
              isEmerald 
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                : 'bg-[#b85d2d]/10 border-[#b85d2d]/20 text-[#b85d2d]'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{badgeLabel}</span>
          </div>

          <h2 
            className={`font-black text-2xl sm:text-3xl md:text-4xl tracking-tight mb-3 ${
              isEmerald ? 'font-heading text-white' : 'font-serif-title text-[#26221f]'
            }`}
          >
            {title}
          </h2>

          <p 
            className={`text-sm sm:text-base leading-relaxed ${
              isEmerald ? 'text-stone-400' : 'text-stone-600'
            }`}
          >
            {subtitle}
          </p>
        </div>

        {/* Search & Category Controls */}
        <div className="mb-8 space-y-4">
          {/* Quick Search */}
          <div className="relative max-w-md mx-auto">
            <Search 
              className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${
                isEmerald ? 'text-emerald-400/60' : 'text-stone-400'
              }`} 
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Pesquise sua dúvida (ex: como tomar, caneta, frete)..."
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm border transition-all outline-hidden ${
                isEmerald
                  ? 'bg-[#0d1c12] border-emerald-800/60 text-white placeholder-stone-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400'
                  : 'bg-white border-stone-300 text-stone-900 placeholder-stone-400 focus:border-[#b85d2d] focus:ring-1 focus:ring-[#b85d2d]'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-200 cursor-pointer"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`text-xs px-3 sm:px-3.5 py-1.5 rounded-full font-semibold transition-all cursor-pointer border ${
                    isSelected
                      ? isEmerald
                        ? 'bg-emerald-500 text-stone-950 border-emerald-400 shadow-sm shadow-emerald-500/20'
                        : 'bg-[#b85d2d] text-white border-[#b85d2d] shadow-sm shadow-[#b85d2d]/20'
                      : isEmerald
                        ? 'bg-[#0a160e] text-stone-400 border-emerald-900/40 hover:text-white hover:border-emerald-700/60'
                        : 'bg-white/80 text-stone-600 border-stone-200 hover:text-stone-900 hover:border-stone-300'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Expand/Collapse All shortcuts */}
          <div className="flex items-center justify-between text-[11px] text-stone-400 px-2 pt-1">
            <span>Mostrando {filteredItems.length} de {items.length} dúvidas</span>
            <div className="flex items-center gap-3">
              <button 
                onClick={expandAll}
                className={`hover:underline cursor-pointer ${isEmerald ? 'text-emerald-400' : 'text-[#b85d2d]'}`}
              >
                Expandir todas
              </button>
              <span>•</span>
              <button 
                onClick={collapseAll}
                className="hover:underline cursor-pointer text-stone-400 hover:text-stone-200"
              >
                Recolher todas
              </button>
            </div>
          </div>
        </div>

        {/* Accordion Questions List */}
        <div className="space-y-3">
          {filteredItems.length === 0 ? (
            <div className={`p-8 text-center rounded-2xl border ${
              isEmerald ? 'bg-[#0d1c12] border-emerald-900/60' : 'bg-white border-stone-200'
            }`}>
              <MessageCircleQuestion className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm font-semibold mb-1">Nenhuma dúvida encontrada para "{searchQuery}".</p>
              <p className="text-xs text-stone-400">Tente buscar por termos mais genéricos ou limpe a pesquisa.</p>
            </div>
          ) : (
            filteredItems.map((faq, index) => {
              const isOpen = openIds.includes(faq.id);
              const questionId = `faq-q-${componentId}-${faq.id}`;
              const answerId = `faq-a-${componentId}-${faq.id}`;

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? isEmerald
                        ? 'bg-[#0c1a11] border-emerald-500/50 shadow-md shadow-emerald-950/40 ring-1 ring-emerald-500/20'
                        : 'bg-white border-[#b85d2d]/50 shadow-md shadow-amber-950/5 ring-1 ring-[#b85d2d]/20'
                      : isEmerald
                        ? 'bg-[#09140c] border-emerald-950/90 hover:border-emerald-800/60'
                        : 'bg-white/80 border-stone-200 hover:border-stone-300'
                  }`}
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  {/* Accordion Header / Button */}
                  <button
                    type="button"
                    id={questionId}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggleItem(faq.id)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 sm:gap-4 cursor-pointer select-none group"
                  >
                    <div className="flex items-center gap-3">
                      <span 
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                          isOpen
                            ? isEmerald
                              ? 'bg-emerald-500 text-stone-950'
                              : 'bg-[#b85d2d] text-white'
                            : isEmerald
                              ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/40 group-hover:border-emerald-600'
                              : 'bg-stone-100 text-stone-600 border border-stone-200 group-hover:border-stone-300'
                        }`}
                      >
                        {index + 1}
                      </span>
                      <span 
                        itemProp="name"
                        className={`font-bold text-sm sm:text-base leading-snug transition-colors ${
                          isEmerald
                            ? isOpen ? 'text-white' : 'text-stone-200 group-hover:text-emerald-300'
                            : isOpen ? 'text-[#26221f]' : 'text-stone-800 group-hover:text-[#b85d2d]'
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <div 
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? isEmerald
                            ? 'rotate-180 bg-emerald-500/20 text-emerald-300'
                            : 'rotate-180 bg-[#b85d2d] text-white'
                          : isEmerald
                            ? 'bg-[#0d1e13] text-stone-400 group-hover:text-white'
                            : 'bg-stone-100 text-stone-500 group-hover:bg-stone-200'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Accordion Expandable Content */}
                  {isOpen && (
                    <div
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                      className={`px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t transition-all ${
                        isEmerald
                          ? 'border-emerald-950/80 text-stone-300 bg-emerald-950/10'
                          : 'border-stone-100 text-stone-600 bg-stone-50/50'
                      }`}
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <p itemProp="text" className="pl-9 sm:pl-10">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* WhatsApp & Trust Support Callout */}
        <div className={`mt-8 p-4 sm:p-5 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left ${
          isEmerald 
            ? 'bg-[#0b170f] border-emerald-900/60' 
            : 'bg-white border-stone-200'
        }`}>
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
              isEmerald ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-100 text-[#b85d2d]'
            }`}>
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className={`text-xs sm:text-sm font-bold ${isEmerald ? 'text-white' : 'text-stone-900'}`}>
                Ainda tem alguma dúvida sobre seu pedido?
              </p>
              <p className={`text-[11px] sm:text-xs ${isEmerald ? 'text-stone-400' : 'text-stone-500'}`}>
                Nosso suporte oficial via WhatsApp e equipe Braip estão prontos para te atender.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 text-xs font-semibold">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${
              isEmerald 
                ? 'bg-emerald-950 border-emerald-500/40 text-emerald-300' 
                : 'bg-stone-50 border-stone-300 text-stone-700'
            }`}>
              <Lock className="w-3.5 h-3.5 text-emerald-500" />
              Compra 100% Segura
            </span>
          </div>
        </div>

        {/* Bottom CTA to buy kit */}
        {onCtaClick && (
          <div className="mt-10 text-center">
            <button
              onClick={onCtaClick}
              className={`inline-flex items-center justify-center gap-2.5 font-heading font-black text-xs sm:text-sm px-8 py-4 rounded-xl shadow-lg transition-all active:scale-95 cursor-pointer tracking-wider ${
                isEmerald
                  ? 'bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-stone-950 shadow-emerald-500/25'
                  : 'bg-[#b85d2d] hover:bg-[#a14e24] text-white shadow-[#b85d2d]/25 hover:scale-[1.02]'
              }`}
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
