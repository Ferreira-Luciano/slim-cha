import React, { useState } from 'react';
import { 
  Flame, 
  Droplet, 
  ShieldCheck, 
  ArrowRight, 
  Truck, 
  Lock,
  Zap,
  Star,
  CheckCircle2,
  Sparkles,
  TrendingDown,
  Calendar,
  Award
} from 'lucide-react';
import { ASSETS, SLIM_CHA_KITS, SLIM_CHA_TESTIMONIALS, SLIM_CHA_FAQ, SLIM_CHA_REVIEWS } from '../data/productData';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';
import { GuaranteeSealBadge } from '../components/GuaranteeSealBadge';
import { FaqAccordion } from '../components/FaqAccordion';

interface SlimChaPageProps {
  getCheckoutUrl: (extraParams?: Record<string, string>) => string;
  onOpenSettings: () => void;
}

export const SlimChaPage: React.FC<SlimChaPageProps> = ({ getCheckoutUrl }) => {
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  const scrollToKits = () => {
    const el = document.getElementById('slim-kits');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#0a110d] text-stone-100">
      
      {/* 1. HERO SECTION (SLIM CHÁ) */}
      <section className="relative py-12 md:py-20 bg-gradient-to-b from-[#060c08] via-[#0d1a12] to-[#0a110d] border-b border-emerald-950/80 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-950/90 border border-emerald-500/40 text-emerald-400 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-6 shadow-sm">
                <Flame className="w-4 h-4 text-emerald-400" />
                <span>Fórmula Termogênica Concentrada • 100% Natural</span>
              </div>

              <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-5">
                Emagreça com Saúde, Sem Fome e <span className="text-emerald-400">Sem Efeito Sanfona</span>
              </h1>

              <p className="text-base sm:text-lg text-stone-300 leading-relaxed mb-8 max-w-xl">
                O Slim Chá acelera a queima da gordura profunda, desincha o corpo e regula o apetite logo nos primeiros dias de uso diário.
              </p>

              {/* 3 Pillars */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-8 max-w-lg">
                <div className="bg-emerald-950/40 border border-emerald-800/40 p-3 rounded-xl text-left">
                  <Flame className="w-5 h-5 text-emerald-400 mb-1" />
                  <span className="font-bold text-xs sm:text-sm text-stone-200 block">Termogênese</span>
                  <span className="text-[11px] text-stone-400">Queima 24h</span>
                </div>
                <div className="bg-emerald-950/40 border border-emerald-800/40 p-3 rounded-xl text-left">
                  <Droplet className="w-5 h-5 text-emerald-400 mb-1" />
                  <span className="font-bold text-xs sm:text-sm text-stone-200 block">Desinchaço</span>
                  <span className="text-[11px] text-stone-400">Zero retenção</span>
                </div>
                <div className="bg-emerald-950/40 border border-emerald-800/40 p-3 rounded-xl text-left">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 mb-1" />
                  <span className="font-bold text-xs sm:text-sm text-stone-200 block">Saciedade</span>
                  <span className="text-[11px] text-stone-400">Menos doces</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mb-4">
                <button
                  onClick={scrollToKits}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-stone-950 font-heading font-black text-base sm:text-lg px-8 sm:px-10 py-4 rounded-xl shadow-lg shadow-emerald-500/25 active:scale-95 transition-all cursor-pointer"
                >
                  <span>QUERO MEU SLIM CHÁ COM DESCONTO</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* 30 Days Guarantee Seal Visual Badge */}
              <div className="mb-4">
                <GuaranteeSealBadge theme="emerald" variant="hero" />
              </div>

              <div className="text-xs text-stone-400 font-medium">
                🔒 Pagamento Seguro na Braip • Frete com Rastreio • Garantia de 30 Dias
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-3xl overflow-hidden border-2 border-emerald-500/30 bg-emerald-950/20 shadow-2xl p-4">
                <img
                  src={ASSETS.slimHero}
                  alt="Slim Chá Frasco Oficial"
                  className="w-full h-auto object-cover rounded-2xl drop-shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-stone-950/90 border border-emerald-500/40 p-3 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-white block">Slim Chá Concentrado</span>
                    <span className="text-[11px] text-emerald-400">Fórmula Premium de Alta Eficácia</span>
                  </div>
                  <span className="bg-emerald-500 text-stone-950 text-xs font-black px-2.5 py-1 rounded-full">
                    OFICIAL
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. BENEFÍCIOS PRINCIPAIS */}
      <section className="py-14 bg-[#08130b] border-b border-emerald-950/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest block mb-1">
              TECNOLOGIA FITOTERÁPICA
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
              Como o Slim Chá Age no Seu Organismo
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-[#0e1d13] border border-emerald-900/60 p-6 rounded-2xl text-left">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base mb-1">Queima Acelerada</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Ativa a termogênese contínua, forçando as células a utilizarem a gordura estocada como fonte primária de energia.
              </p>
            </div>

            <div className="bg-[#0e1d13] border border-emerald-900/60 p-6 rounded-2xl text-left">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                <Droplet className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base mb-1">Efeito Anti-Inchaço</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Ação diurética natural que elimina a retenção de líquidos sem espoliar minerais essenciais.
              </p>
            </div>

            <div className="bg-[#0e1d13] border border-emerald-900/60 p-6 rounded-2xl text-left">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base mb-1">Bloqueio de Compulsão</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Controla os picos de insulina, acabando com a vontade incontrolável de comer carboidratos e doces à noite.
              </p>
            </div>

            <div className="bg-[#0e1d13] border border-emerald-900/60 p-6 rounded-2xl text-left">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base mb-1">Mais Disposição</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Dá energia limpa e foco ao longo de todo o dia, sem tremores, palpitações ou sensação de esgotamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CARDS ANTES E DEPOIS (PROVA SOCIAL INTERATIVA) */}
      <section className="py-16 bg-[#0a140e] border-b border-emerald-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Resultados Reais Verificados</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
              Cards de Antes e Depois com o Slim Chá
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-2">
              Veja a evolução de pessoas reais que transformaram sua saúde e autoestima.
            </p>
          </div>

          {/* Before and After Transformation Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {SLIM_CHA_TESTIMONIALS.map((t, idx) => (
              <div 
                key={t.id} 
                className="bg-[#0e1d13] border-2 border-emerald-800/60 rounded-3xl p-6 flex flex-col justify-between shadow-2xl hover:border-emerald-500/80 transition-all duration-300"
              >
                <div>
                  {/* Badge & Metrics Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-1 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-black px-3 py-1 rounded-full">
                      <TrendingDown className="w-3.5 h-3.5" />
                      <span>Eliminou {t.weightLostKg}kg</span>
                    </div>

                    <div className="flex items-center gap-1.5 bg-stone-900 text-stone-300 text-xs font-medium px-3 py-1 rounded-full border border-stone-800">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{t.durationWeeks} semanas de uso</span>
                    </div>
                  </div>

                  {/* Before & After Photo Card */}
                  <div className="relative rounded-2xl overflow-hidden mb-5 border border-emerald-950 bg-black/40 shadow-inner">
                    {t.image && (
                      <img
                        src={t.image}
                        alt={`Antes e Depois - ${t.name}`}
                        className="w-full h-64 object-cover"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    {/* Visual Before & After Labels */}
                    <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-xs text-stone-300 border border-stone-700 text-[11px] font-bold px-2.5 py-1 rounded-md">
                      ANTES
                    </div>
                    <div className="absolute top-3 right-3 bg-emerald-500 text-stone-950 font-black text-[11px] px-2.5 py-1 rounded-md shadow-md">
                      DEPOIS (-{t.weightLostKg}kg)
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <div className="flex items-center gap-1 text-amber-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs text-stone-400 ml-1 font-semibold">Avaliação 5.0</span>
                  </div>

                  <h3 className="font-heading font-black text-lg sm:text-xl text-white mb-2 leading-snug">
                    "{t.headline}"
                  </h3>

                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {t.story}
                  </p>
                </div>

                {/* Person Profile */}
                <div className="flex items-center justify-between pt-4 border-t border-emerald-950/80">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold text-xs">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <span className="font-bold text-sm text-white block">{t.name}, {t.age} anos</span>
                      <span className="text-xs text-stone-400">{t.city} - {t.state}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-bold bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-800/40">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Compra Verificada</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Micro CTA */}
          <div className="text-center mt-10">
            <button
              onClick={scrollToKits}
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold text-sm underline underline-offset-4 cursor-pointer"
            >
              <span>Quero ter resultados como esses • Ver kits promocionais</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. CANETA EMAGRECEDORA CONTINUIDADE SECTION */}
      <section className="py-14 bg-[#0d1c13] border-b border-emerald-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4">
            <Zap className="w-4 h-4" />
            <span>Continuidade Sem Efeito Rebote</span>
          </div>

          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight mb-4">
            Toma ou Já Tomou a Caneta Emagrecedora?
          </h2>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-8">
            Quem interrompe a caneta sofre com a volta rápida do apetite e a desaceleração metabólica. O Slim Chá é a transição natural mais indicada para <strong>manter o peso conquistado</strong>, preservar a saciedade e continuar secando sem química agressiva.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="bg-[#08120b] border border-emerald-900/60 p-5 rounded-2xl">
              <span className="text-emerald-400 font-black text-sm block mb-1">01. Zero Efeito Sanfona</span>
              <p className="text-xs text-stone-400">Mantém seu metabolismo ativo impedindo que a gordura volte a se acumular nas primeiras semanas.</p>
            </div>
            <div className="bg-[#08120b] border border-emerald-900/60 p-5 rounded-2xl">
              <span className="text-emerald-400 font-black text-sm block mb-1">02. Controle Natural da Fome</span>
              <p className="text-xs text-stone-400">Fibras e bioativos que prolongam a saciedade sem causar náuseas ou enjoos.</p>
            </div>
            <div className="bg-[#08120b] border border-emerald-900/60 p-5 rounded-2xl">
              <span className="text-emerald-400 font-black text-sm block mb-1">03. Desinchaço Digestivo</span>
              <p className="text-xs text-stone-400">Melhora o trânsito intestinal e combate a prisão de ventre comum nos tratamentos de perda de peso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CARDS DE PREÇOS (CONFORME A IMAGEM EXATA DO USUÁRIO) */}
      <section id="slim-kits" className="py-16 md:py-24 bg-[#070e09] border-b border-emerald-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
              <Award className="w-4 h-4" />
              <span>Tabela Oficial com Desconto Direto Braip</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Escolha o Kit Slim Chá Ideal Para Você
            </h2>

            <p className="text-stone-400 text-sm sm:text-base mt-2">
              Descontos de até 60% e parcelamento em até 3x sem juros com frete grátis nacional.
            </p>
          </div>

          {/* 3 CARDS EXATOS CONFORME A IMAGEM DO USUÁRIO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-end max-w-5xl mx-auto pt-6">
            {SLIM_CHA_KITS.map((kit) => {
              const checkoutLink = getCheckoutUrl({ kit: kit.id });
              const isCenter = kit.isFeatured;

              return (
                <div
                  key={kit.id}
                  className={`relative rounded-2xl sm:rounded-3xl bg-[#007a3d] text-white flex flex-col items-center text-center p-6 sm:p-7 shadow-2xl transition-all duration-300 ${
                    isCenter 
                      ? 'md:-translate-y-4 md:scale-105 z-10 border-2 border-[#7cb324] shadow-emerald-900/60' 
                      : 'border border-[#006030]'
                  }`}
                >
                  {/* Top Discount Badge Pill */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-[#7cb324] text-white font-bold text-xs sm:text-sm px-6 py-1.5 rounded-full shadow-md whitespace-nowrap tracking-wide">
                      {kit.discountBadge}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mt-2 mb-4">
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-white tracking-tight">
                      {kit.name}
                    </h3>
                    <p className="text-sm font-medium text-stone-200 mt-0.5">
                      {kit.durationLabel}
                    </p>
                  </div>

                  {/* Product Image */}
                  <div className="h-44 sm:h-48 w-full flex items-center justify-center my-2">
                    <img
                      src={kit.productImage}
                      alt={kit.name}
                      className="max-h-full max-w-full object-contain drop-shadow-xl hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Price Section */}
                  <div className="my-3 w-full">
                    <div className="text-xs sm:text-sm text-stone-200 font-medium">
                      Preço de tabela: <span className="line-through">{kit.tablePrice}</span>
                    </div>
                    <div className="text-xs sm:text-sm text-stone-200 font-medium mt-0.5">
                      Preço com desconto:
                    </div>
                    <div className="font-heading font-black text-3xl sm:text-4xl text-[#00ff66] tracking-tight my-1">
                      {kit.promotionalPrice}
                    </div>
                    <div className="text-xs sm:text-sm text-stone-200 font-medium">
                      {kit.installmentText}
                    </div>
                  </div>

                  {/* Free Shipping Block */}
                  <div className="my-4 flex flex-col items-center justify-center gap-1">
                    <div className="flex items-center justify-center gap-2">
                      <Truck className="w-6 h-6 text-[#00ff66] fill-[#00ff66]/20" />
                      <span className="font-heading font-black text-base sm:text-lg text-white tracking-wide">
                        {kit.shippingTitle}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-stone-100 tracking-wide">
                      {kit.shippingRegion}
                    </span>
                  </div>

                  {/* White CTA Button matching screenshot */}
                  <a
                    href={checkoutLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-[220px] bg-white text-[#007a3d] hover:bg-stone-100 font-heading font-black text-sm sm:text-base py-3 px-6 rounded-full shadow-lg active:scale-95 transition-all text-center tracking-wide cursor-pointer block mt-2"
                  >
                    {kit.buttonText}
                  </a>

                  {/* 30 Days Guarantee Micro Badge */}
                  <div className="mt-2.5">
                    <GuaranteeSealBadge theme="emerald" variant="compact" />
                  </div>

                </div>
              );
            })}
          </div>

          <div className="text-center mt-12 text-xs text-stone-400 flex items-center justify-center gap-2">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Compra 100% Segura e Criptografada via Plataforma Braip</span>
          </div>

        </div>
      </section>

      {/* 6. GUARANTEE SECTION */}
      <section className="py-14 bg-[#08120b] border-b border-emerald-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-[#0d1a11] border border-emerald-700/40 rounded-3xl p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-8 shadow-2xl">
            <div className="w-28 sm:w-36 shrink-0 flex items-center justify-center">
              <img
                src={ASSETS.guarantee}
                alt="Garantia 30 Dias"
                className="max-h-full max-w-full object-contain drop-shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-left flex-1">
              <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider block mb-1">
                Risco Zero Para Você
              </span>
              <h3 className="font-heading font-black text-2xl text-white mb-2">
                Garantia Incondicional de 30 Dias
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-4">
                Teste o Slim Chá por 30 dias. Se não notar diminuição do inchaço, maior saciedade e perda de medidas, devolveremos 100% do seu dinheiro sem burocracia.
              </p>
              <button
                onClick={scrollToKits}
                className="bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-black text-xs px-6 py-3 rounded-xl transition-all cursor-pointer"
              >
                QUERO EXPERIMENTAR COM RISCO ZERO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CARROSSEL DE DEPOIMENTOS DE CLIENTES COM FOTOS E ESTRELAS */}
      <TestimonialsCarousel
        theme="slim"
        testimonials={SLIM_CHA_REVIEWS}
        title="O Que Quem Já Toma o Slim Chá Está Falando"
        subtitle="Confira relatos e experiências de pessoas que incluíram o Slim Chá na sua rotina diária."
        onCtaClick={scrollToKits}
      />

      {/* 8. FAQ SECTION (EXPANDABLE ACCORDION WITH SCHEMA.ORG SEO) */}
      <FaqAccordion
        theme="emerald"
        items={SLIM_CHA_FAQ}
        title="Dúvidas Frequentes - Slim Chá"
        subtitle="Confira as respostas oficiais sobre modo de tomar, transição após caneta emagrecedora, envio rastreado pelos Correios e garantia incondicional."
        badgeLabel="Perguntas Frequentes"
        onCtaClick={scrollToKits}
        ctaText="ESCOLHER MEU KIT SLIM CHÁ AGORA"
        id="faq"
      />

    </div>
  );
};
