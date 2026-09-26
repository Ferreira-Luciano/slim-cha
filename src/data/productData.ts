// Images for IArmonize
import heroWoman from '@/src/assets/images/iarmonize_hero_woman_1790035773101.jpg';
import sleepBottle from '@/src/assets/images/iarmonize_sleep_bottle_1790035783048.jpg';
import energyBottle from '@/src/assets/images/iarmonize_energy_bottle_1790035793184.jpg';
import hairBottle from '@/src/assets/images/iarmonize_hair_bottle_1790035803449.jpg';
import vitalDropper from '@/src/assets/images/iarmonize_vital_dropper_1790035813666.jpg';
import kitCombo from '@/src/assets/images/iarmonize_kit_combo_1790035824644.jpg';

// Images for Slim Chá (Emagrecimento)
import slimChaHero from '@/src/assets/images/slim_cha_hero_1790033613600.jpg';
import slimChaBottles from '@/src/assets/images/slim_cha_bottles_1790033622780.jpg';
import slimCha1Bottle from '@/src/assets/images/slim_cha_1_bottle_1790034138650.jpg';
import slimCha2Bottles from '@/src/assets/images/slim_cha_2_bottles_1790034148288.jpg';
import guaranteeSeal from '@/src/assets/images/guarantee_seal_1790033631836.jpg';
import beforeAfterMan from '@/src/assets/images/before_after_man_1790033647016.jpg';
import beforeAfterWoman from '@/src/assets/images/before_after_woman_1790033655575.jpg';

// Customer Review Avatars
import customerSlimMariana from '@/src/assets/images/customer_slim_mariana_1790432712409.jpg';
import customerSlimRodrigo from '@/src/assets/images/customer_slim_rodrigo_1790432724700.jpg';
import customerIarmPatricia from '@/src/assets/images/customer_iarm_patricia_1790432734177.jpg';
import customerIarmLucas from '@/src/assets/images/customer_iarm_lucas_1790432743887.jpg';

import { KitOffer, FormulaProduct, FaqItem, LivePurchase, SlimChaKit, Testimonial } from '../types';

export const ASSETS = {
  // IArmonize
  hero: heroWoman,
  sleep: sleepBottle,
  energy: energyBottle,
  hair: hairBottle,
  vital: vitalDropper,
  kitCombo: kitCombo,
  customerIarmPatricia: customerIarmPatricia,
  customerIarmLucas: customerIarmLucas,
  // Slim Chá
  slimHero: slimChaHero,
  slimBottles: slimChaBottles,
  slim1Bottle: slimCha1Bottle,
  slim2Bottles: slimCha2Bottles,
  guarantee: guaranteeSeal,
  beforeAfterMan: beforeAfterMan,
  beforeAfterWoman: beforeAfterWoman,
  customerSlimMariana: customerSlimMariana,
  customerSlimRodrigo: customerSlimRodrigo,
};

// ==========================================
// 1. SLIM CHÁ (PÁGINA DE EMAGRECIMENTO)
// ==========================================
export const SLIM_CHA_AFFILIATE_URL = 'https://ev.braip.com/ref?pv=prog6k54&af=afiqeq48op';

export const SLIM_CHA_KITS: SlimChaKit[] = [
  {
    id: 'slim-kit-2',
    bottlesCount: 2,
    name: 'Kit com 2 frascos',
    durationLabel: 'Tratamento 2 meses',
    discountBadge: '40% Desconto',
    tablePrice: 'R$433,72',
    promotionalPrice: 'R$299,90',
    installmentText: 'Ou em até 3x sem juros',
    shippingTitle: 'FRETE GRÁTIS',
    shippingRegion: 'PARA TODAS REGIÕES',
    buttonText: 'QUERO ESTE',
    productImage: ASSETS.slim2Bottles
  },
  {
    id: 'slim-kit-3',
    bottlesCount: 3,
    name: 'Kit com 3 frascos',
    durationLabel: 'Tratamento 3 meses',
    discountBadge: '60% Desconto',
    tablePrice: 'R$719,84',
    promotionalPrice: 'R$414,90',
    installmentText: 'Ou em até 3x sem juros',
    shippingTitle: 'FRETE GRÁTIS',
    shippingRegion: 'PARA TODAS REGIÕES',
    buttonText: 'QUERO ESTE',
    isFeatured: true,
    productImage: ASSETS.slimBottles
  },
  {
    id: 'slim-kit-1',
    bottlesCount: 1,
    name: 'Kit com 1 frasco',
    durationLabel: 'Tratamento 1 mês',
    discountBadge: '20% Desconto',
    tablePrice: 'R$191,88',
    promotionalPrice: 'R$159,90',
    installmentText: 'Ou em até 3x sem juros',
    shippingTitle: 'FRETE GRÁTIS',
    shippingRegion: 'SP – RJ – MG – ES',
    buttonText: 'QUERO ESTE',
    productImage: ASSETS.slim1Bottle
  }
];


export const SLIM_CHA_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Renata Albuquerque',
    age: 36,
    city: 'Campinas',
    state: 'SP',
    weightLostKg: 14.5,
    durationWeeks: 8,
    image: ASSETS.beforeAfterWoman,
    headline: '-14,5kg em 8 semanas sem passar fome',
    story: 'Eu vivia inchada e com compulsão por doces no fim da tarde. O Slim Chá tirou minha ansiedade e acelerou meu metabolismo. Consegui entrar nos meus vestidos antigos sem sofrimento!',
    rating: 5,
    verified: true
  },
  {
    id: 'test-2',
    name: 'Carlos Eduardo Matos',
    age: 42,
    city: 'Belo Horizonte',
    state: 'MG',
    weightLostKg: 18.2,
    durationWeeks: 12,
    image: ASSETS.beforeAfterMan,
    headline: '-18,2kg: Acabou o cansaço e a barriga pesada',
    story: 'Trabalho sentado o dia todo e acumulava muita gordura no abdômen. Tomei o Slim Chá diariamente e em menos de 3 meses perdi mais de 18kg. Minha disposição para treinar e brincar com meus filhos mudou da água pro vinho.',
    rating: 5,
    verified: true
  }
];

export const SLIM_CHA_FAQ: FaqItem[] = [
  {
    id: 'sc-faq-1',
    question: 'Como devo tomar o Slim Chá?',
    answer: 'Recomenda-se tomar diariamente pela manhã em jejum ou logo antes das principais refeições para acelerar o efeito termogênico e controlar a saciedade ao longo do dia.',
    category: 'produto'
  },
  {
    id: 'sc-faq-2',
    question: 'Posso usar o Slim Chá como continuidade após a caneta emagrecedora?',
    answer: 'Sim! O Slim Chá é a transição mais indicada para evitar o efeito sanfona após interromper a caneta emagrecedora, mantendo o metabolismo acelerado e regulando o apetite naturalmente.',
    category: 'seguranca'
  },
  {
    id: 'sc-faq-3',
    question: 'Qual é o prazo de entrega do Slim Chá?',
    answer: 'O envio é realizado via Correios com código de rastreamento enviado diretamente no seu WhatsApp e e-mail. A entrega média varia de 3 a 7 dias úteis para a maior parte do Brasil.',
    category: 'entrega'
  },
  {
    id: 'sc-faq-4',
    question: 'O Slim Chá tem garantia?',
    answer: 'Sim! Você conta com 30 dias de garantia incondicional. Se não notar diminuição do inchaço e perda de medidas, você pode solicitar o reembolso integral sem burocracia.',
    category: 'garantia'
  },
  {
    id: 'sc-faq-5',
    question: 'O Slim Chá é aprovado e seguro?',
    answer: 'Sim! Fórmula 100% natural, com ativos de alta pureza fitoterápica dispensados de registro sanitário conforme as normas da RDC da Anvisa, sem efeitos colaterais e sem causar taquicardia.',
    category: 'seguranca'
  },
  {
    id: 'sc-faq-6',
    question: 'Quais são as formas de pagamento aceitas?',
    answer: 'Você pode pagar via Pix com aprovação imediata e envio prioritário, ou parcelar no cartão de crédito em até 12x através da plataforma 100% segura e criptografada da Braip.',
    category: 'entrega'
  }
];


// ==========================================
// 2. IARMONIZE (PÁGINA DE PROTOCOLOS E BELEZA)
// ==========================================
export const AFFILIATE_LINKS = {
  directCheckout: 'https://pay.braip.co/ref?pl=plav449r&ck=cheq89gn&af=afi7g8728y',
  braipRefPlan: 'https://ev.braip.com/ref?pl=plav449r&ck=cheq89gn&af=afi7g8728y',
  braipSalesPage1: 'https://ev.braip.com/ref?pv=provwmw5&af=afi7g8728y',
  braipSalesPage2: 'https://ev.braip.com/pv/lip7nde8/afi7g8728y',
  pageLink: 'https://pagelink.site/ref?pl=plav449r&ck=cheq89gn&af=afi7g8728y',
};

export const DEFAULT_AFFILIATE_URL = AFFILIATE_LINKS.directCheckout;

export const FORMULAS_DATA: FormulaProduct[] = [
  {
    id: 'formula-hair',
    name: 'IArmonize Hair',
    subtitle: '90 cápsulas • Para Cabelos',
    image: ASSETS.hair,
    badge: 'Saúde Capilar & Unhas',
    category: 'hair',
    description: 'Fórmula completa desenvolvida para acelerar o crescimento, fortalecer a raiz e cessar a queda capilar de dentro para fora.',
    ingredients: [
      'Queratina',
      'Biotina',
      'Complexo B',
      'Silício Orgânico',
      'Ferro',
      'Metionina',
      'L Cisteína',
      'PABA',
      'Levedura medicinal',
      'MSM'
    ]
  },
  {
    id: 'formula-sleep',
    name: 'IArmonize Sleep',
    subtitle: '90 cápsulas • Para Relaxamento',
    image: ASSETS.sleep,
    badge: 'Sono Profundo & REM',
    category: 'sleep',
    description: 'Combinação sinérgica de neuroindutores que desaceleram a mente, induzem o sono reparador e restauram o equilíbrio do ciclo circadiano.',
    ingredients: [
      'Melatonina 5mg',
      'L Theanine 200mg',
      '5-HTP 50mg',
      'Magnésio Treonato 150mg'
    ]
  },
  {
    id: 'formula-energy',
    name: 'IArmonize Energy',
    subtitle: '90 cápsulas • Para Energia e Disposição',
    image: ASSETS.energy,
    badge: 'Vitalidade Mitocondrial',
    category: 'energy',
    description: 'Potencializador celular que ativa as mitocôndrias, eliminando o cansaço físico e mental sem causar picos ou quedas bruscas de ansiedade.',
    ingredients: [
      'Coenzima Q10 150mg',
      'Magnésio Dimalato 200mg',
      'Zinco 7mg'
    ]
  },
  {
    id: 'formula-vital',
    name: 'IArmonize Vital',
    subtitle: '30ml • Para Imunidade Sublingual',
    image: ASSETS.vital,
    badge: 'Alta Biodisponibilidade',
    category: 'vital',
    description: 'Blend vitamínico nobre em gotas sublinguais de absorção imediata, fortalecendo a imunidade, a saúde óssea e a longevidade celular.',
    ingredients: [
      'Vitamina D',
      'Vitamina A',
      'Vitamina K2 MK7',
      'Vitamina E',
      'Vitamina B9 (Ácido Fólico)',
      'Vitamina B12',
      'Veículo Sublingual'
    ]
  }
];

export const KITS_DATA: KitOffer[] = [
  {
    id: 'kit-sleep',
    name: 'IArmonize Sleep',
    protocolDuration: '3 meses de protocolo',
    price: 167.00,
    installmentText: 'Em até 3x de R$ 55,67 sem juros',
    buttonText: 'GARANTIR MEU IARMONIZE SLEEP',
    productImage: ASSETS.sleep,
    items: [{ product: 'IArmonize Sleep - 90 cápsulas', quantity: 1 }],
    checkoutUrl: DEFAULT_AFFILIATE_URL,
  },
  {
    id: 'kit-energy',
    name: 'IArmonize Energy',
    protocolDuration: '3 meses de protocolo',
    price: 167.00,
    installmentText: 'Em até 3x de R$ 55,67 sem juros',
    buttonText: 'GARANTIR MEU IARMONIZE ENERGY',
    productImage: ASSETS.energy,
    items: [{ product: 'IArmonize Energy - 90 cápsulas', quantity: 1 }],
    checkoutUrl: DEFAULT_AFFILIATE_URL,
  },
  {
    id: 'kit-vital-1',
    name: 'IArmonize Vital',
    protocolDuration: '1 mês de protocolo',
    price: 97.00,
    installmentText: 'Em até 3x de R$ 32,33 sem juros',
    buttonText: 'GARANTIR MEU IARMONIZE VITAL',
    productImage: ASSETS.vital,
    items: [{ product: 'IArmonize Vital - 30ml', quantity: 1 }],
    checkoutUrl: DEFAULT_AFFILIATE_URL,
  },
  {
    id: 'kit-sleep-energy',
    name: 'Sleep + Energy',
    protocolDuration: '3 meses de protocolo',
    price: 297.00,
    installmentText: 'Em até 3x de R$ 99,00 sem juros',
    buttonText: 'GARANTIR MEU SLEEP + ENERGY',
    productImage: ASSETS.energy,
    tag: 'COMBO EQUILÍBRIO',
    items: [
      { product: 'IArmonize Sleep - 90 cápsulas', quantity: 1 },
      { product: 'IArmonize Energy - 90 cápsulas', quantity: 1 }
    ],
    checkoutUrl: DEFAULT_AFFILIATE_URL,
  },
  {
    id: 'kit-vital-2',
    name: '2 Frascos IArmonize Vital',
    protocolDuration: '2 meses de protocolo',
    price: 167.00,
    installmentText: 'Em até 3x de R$ 55,67 sem juros',
    buttonText: 'GARANTIR MEU IARMONIZE VITAL',
    productImage: ASSETS.vital,
    items: [{ product: 'IArmonize Vital - 30ml', quantity: 2 }],
    checkoutUrl: DEFAULT_AFFILIATE_URL,
  },
  {
    id: 'kit-vital-3',
    name: '3 Frascos IArmonize Vital',
    protocolDuration: '3 meses de protocolo',
    price: 227.00,
    installmentText: 'Em até 3x de R$ 75,67 sem juros',
    buttonText: 'GARANTIR MEU IARMONIZE VITAL',
    productImage: ASSETS.vital,
    tag: 'MAIOR ECONOMIA VITAL',
    items: [{ product: 'IArmonize Vital - 30ml', quantity: 3 }],
    checkoutUrl: DEFAULT_AFFILIATE_URL,
  },
  {
    id: 'kit-hair-1',
    name: 'IArmonize Hair',
    protocolDuration: '45 dias de protocolo',
    price: 267.00,
    installmentText: 'Em até 3x de R$ 89,00 sem juros',
    buttonText: 'GARANTIR MEU IARMONIZE HAIR',
    productImage: ASSETS.hair,
    items: [{ product: 'IArmonize Hair - 90 cápsulas', quantity: 1 }],
    checkoutUrl: DEFAULT_AFFILIATE_URL,
  },
  {
    id: 'kit-hair-2',
    name: '2 frascos IArmonize Hair',
    protocolDuration: '3 meses de protocolo',
    price: 444.00,
    installmentText: 'Em até 3x de R$ 148,00 sem juros',
    buttonText: 'GARANTIR MEU IARMONIZE HAIR',
    productImage: ASSETS.hair,
    tag: 'TRATAMENTO COMPLETO CABELO',
    items: [{ product: 'IArmonize Hair - 90 cápsulas', quantity: 2 }],
    checkoutUrl: DEFAULT_AFFILIATE_URL,
  },
  {
    id: 'kit-completo',
    name: 'Kit IArmonize',
    protocolDuration: '3 meses de protocolo',
    price: 1256.00,
    installmentText: 'Em até 10x de R$ 125,60 sem juros',
    pixDiscountNote: 'Via Pix com 5% de desconto',
    buttonText: 'GARANTIR MEU KIT IARMONIZE',
    productImage: ASSETS.kitCombo,
    isBestSeller: true,
    tag: 'PROTOCOLO TOTAL • COM NÉCESSAIRE',
    items: [
      { product: 'IArmonize Hair - 90 cápsulas', quantity: 2 },
      { product: 'IArmonize Sleep - 90 cápsulas', quantity: 1 },
      { product: 'IArmonize Energy - 90 cápsulas', quantity: 1 },
      { product: 'IArmonize Vital - 30ml', quantity: 3 }
    ],
    checkoutUrl: DEFAULT_AFFILIATE_URL,
  },
];

export const IARMONIZE_FAQ: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'As 4 fórmulas do IArmonize podem ser tomadas juntas?',
    answer: 'Sim! As fórmulas IArmonize foram desenvolvidas para atuar em sinergia complementar: o Energy pela manhã para ativação mitocondrial, o Vital em gotas sublinguais para imunidade diária, o Hair para fortalecimento de fios e unhas, e o Sleep à noite para indução do sono reparador.',
    category: 'produto'
  },
  {
    id: 'faq-2',
    question: 'Qual o diferencial dos veículos sublinguais do IArmonize Vital?',
    answer: 'A administração sublingual permite que as vitaminas D3, A, K2 MK7, E e complexo B entrem direto na corrente sanguínea através dos microvasos da mucosa bucal, sem passar pela degradação da acidez estomacal, garantindo absorção até 4x superior.',
    category: 'produto'
  },
  {
    id: 'faq-3',
    question: 'Quem fez ou faz uso de caneta emagrecedora pode usar o IArmonize?',
    answer: 'Sim, é altamente recomendado! O emagrecimento rápido frequente com canetas emagrecedoras causa eflúvio telógeno (queda acentuada de cabelo) e fadiga mitocondrial. O IArmonize Hair repõe queratina, silício inteligente, biotina e ferro, enquanto Vital e Energy recuperam a disposição e vigor.',
    category: 'seguranca'
  },
  {
    id: 'faq-4',
    question: 'Qual é o prazo de entrega e como rastrear?',
    answer: 'Os pedidos são despachados de forma rápida para todo o Brasil pela plataforma oficial Braip, com rastreio enviado em tempo real por WhatsApp e e-mail. A entrega média varia de 3 a 7 dias úteis.',
    category: 'entrega'
  },
  {
    id: 'faq-5',
    question: 'O IArmonize possui garantia incondicional?',
    answer: 'Sim! Garantia total incondicional de 30 dias. Se você utilizar o protocolo e não notar resultados reais na sua vitalidade, sono ou vigor capilar, você pode solicitar 100% de reembolso sem perguntas.',
    category: 'garantia'
  },
  {
    id: 'faq-6',
    question: 'Como funciona o pagamento na plataforma oficial?',
    answer: 'O checkout é processado na plataforma oficial Braip com criptografia de ponta a ponta. Você pode pagar via Pix com aprovação imediata ou parcelar em até 10x sem juros no cartão de crédito.',
    category: 'entrega'
  }
];

export const FAQ_DATA = IARMONIZE_FAQ;

export const LIVE_PURCHASES: LivePurchase[] = [
  { name: 'Mariana S.', location: 'São Paulo - SP', kit: 'Kit IArmonize Completo', timeAgo: 'há 2 minutos' },
  { name: 'Camila P.', location: 'Belo Horizonte - MG', kit: '2 frascos IArmonize Hair', timeAgo: 'há 5 minutos' },
  { name: 'Juliana R.', location: 'Rio de Janeiro - RJ', kit: 'Sleep + Energy', timeAgo: 'há 9 minutos' },
  { name: 'Patrícia M.', location: 'Curitiba - PR', kit: '3 Frascos IArmonize Vital', timeAgo: 'há 14 minutos' },
  { name: 'Fernanda T.', location: 'Brasília - DF', kit: 'Kit IArmonize Completo', timeAgo: 'há 18 minutos' },
  { name: 'Luciana F.', location: 'Porto Alegre - RS', kit: 'Compre 2 Leve 3 Slim Chá', timeAgo: 'há 4 minutos' },
  { name: 'Marcos V.', location: 'Goiânia - GO', kit: 'Compre 3 Leve 5 Slim Chá', timeAgo: 'há 7 minutos' },
];

export const SLIM_CHA_REVIEWS: Testimonial[] = [
  {
    id: 'sc-rev-1',
    name: 'Mariana Santos',
    age: 34,
    city: 'São Paulo',
    state: 'SP',
    weightLostKg: 9.8,
    durationWeeks: 6,
    photo: ASSETS.customerSlimMariana,
    headline: 'Perdi 9,8kg em 6 semanas e o inchaço sumiu!',
    story: 'O que mais me impressionou foi o controle da ansiedade de comer doce à tarde. O gosto é suave e tomo todas as manhãs em jejum. Minha disposição para trabalhar e treinar aumentou 100%!',
    rating: 5,
    verified: true,
    productTag: 'Kit com 3 frascos (60% OFF)',
    date: 'há 3 dias'
  },
  {
    id: 'sc-rev-2',
    name: 'Rodrigo Vasconcelos',
    age: 43,
    city: 'Ribeirão Preto',
    state: 'SP',
    weightLostKg: 11.2,
    durationWeeks: 8,
    photo: ASSETS.customerSlimRodrigo,
    headline: 'Zero cansaço e menos 11kg na balança',
    story: 'Minha barriga diminuiu visivelmente logo na segunda semana. Não sinto mais aquele peso e sonolência após o almoço, e a entrega pelos Correios com rastreio da Braip levou apenas 4 dias.',
    rating: 5,
    verified: true,
    productTag: 'Kit com 2 frascos (40% OFF)',
    date: 'há 5 dias'
  },
  {
    id: 'sc-rev-3',
    name: 'Renata Albuquerque',
    age: 36,
    city: 'Campinas',
    state: 'SP',
    weightLostKg: 14.5,
    durationWeeks: 8,
    photo: ASSETS.beforeAfterWoman,
    headline: 'Melhor transição pós-caneta emagrecedora!',
    story: 'Tinha pavor do efeito sanfona após interromper a caneta. O Slim Chá manteve meu metabolismo no ritmo acelerado, controlou minha saciedade naturalmente e me fez queimar mais gordura.',
    rating: 5,
    verified: true,
    productTag: 'Kit com 3 frascos (Tratamento 3 meses)',
    date: 'há 1 semana'
  },
  {
    id: 'sc-rev-4',
    name: 'Carlos Eduardo Matos',
    age: 42,
    city: 'Belo Horizonte',
    state: 'MG',
    weightLostKg: 18.2,
    durationWeeks: 12,
    photo: ASSETS.beforeAfterMan,
    headline: '18kg eliminados e autoestima renovada',
    story: 'Trabalho sentado e acumulava muita gordura visceral. Com o Slim Chá a queima calórica foi contínua, minhas calças antigas já estão caindo e a saúde está impecável nos exames.',
    rating: 5,
    verified: true,
    productTag: 'Kit com 3 frascos (Tratamento 3 meses)',
    date: 'há 2 semanas'
  },
  {
    id: 'sc-rev-5',
    name: 'Luciana F. Mendes',
    age: 39,
    city: 'Curitiba',
    state: 'PR',
    weightLostKg: 8.4,
    durationWeeks: 5,
    photo: ASSETS.customerSlimMariana,
    headline: 'Desinchaço imediato desde os primeiros dias',
    story: 'Sofria muito com retenção de líquido nas pernas e abdômen. Em menos de uma semana tomando o Slim Chá senti meu corpo mais leve e a digestão super regular. Super recomendo!',
    rating: 5,
    verified: true,
    productTag: 'Kit com 2 frascos',
    date: 'há 2 semanas'
  }
];

export const IARMONIZE_REVIEWS: Testimonial[] = [
  {
    id: 'iarm-rev-1',
    name: 'Patrícia Meirelles',
    age: 41,
    city: 'Florianópolis',
    state: 'SC',
    photo: ASSETS.customerIarmPatricia,
    headline: 'Meu cabelo parou de cair e voltou a crescer com força!',
    story: 'Após uma fase de muito estresse e emagrecimento rápido, meu cabelo caía em tufos. Com 4 semanas de IArmonize Hair, a raiz ficou extremamente forte e o brilho dos fios é notável.',
    rating: 5,
    verified: true,
    productTag: 'IArmonize Hair (90 cápsulas)',
    date: 'há 2 dias'
  },
  {
    id: 'iarm-rev-2',
    name: 'Lucas Fontes',
    age: 38,
    city: 'Rio de Janeiro',
    state: 'RJ',
    photo: ASSETS.customerIarmLucas,
    headline: 'Acordo revigorado sem aquela sonolência pesada',
    story: 'O IArmonize Sleep desacelera a mente à noite de forma suave. Junto com o Energy pela manhã, meu dia rende o dobro sem picos de ansiedade ou palpitações de cafeína.',
    rating: 5,
    verified: true,
    productTag: 'Combo Sleep + Energy',
    date: 'há 4 dias'
  },
  {
    id: 'iarm-rev-3',
    name: 'Dra. Camila Portela',
    age: 45,
    city: 'Brasília',
    state: 'DF',
    photo: ASSETS.hero,
    headline: 'A absorção sublingual do Vital faz total diferença',
    story: 'Como profissional de saúde valorizo fórmulas biodisponíveis. As gotas sublinguais do IArmonize Vital elevaram minha imunidade e disposição sem agredir a mucosa gástrica.',
    rating: 5,
    verified: true,
    productTag: '3 Frascos IArmonize Vital (Sublingual)',
    date: 'há 6 dias'
  },
  {
    id: 'iarm-rev-4',
    name: 'Fernanda Tavares',
    age: 35,
    city: 'Salvador',
    state: 'BA',
    photo: ASSETS.customerIarmPatricia,
    headline: 'O Kit Completo é o melhor investimento em autocuidado',
    story: 'Valeu cada centavo. A nécessaire é de altíssima qualidade, o parcelamento em 10x sem juros facilitou muito e hoje durmo como um bebê, meu cabelo está volumoso e sinto disposição o dia todo.',
    rating: 5,
    verified: true,
    productTag: 'Kit IArmonize Completo • Com Nécessaire',
    date: 'há 1 semana'
  },
  {
    id: 'iarm-rev-5',
    name: 'Marcos Vinícius',
    age: 44,
    city: 'Porto Alegre',
    state: 'RS',
    photo: ASSETS.customerIarmLucas,
    headline: 'Fim do cansaço mitocondrial e da fadiga mental',
    story: 'Trabalho com metas intensas e vivia exausto. O IArmonize Energy me deu clareza mental e foco limpo sem me deixar elétrico. Fórmula nota 10!',
    rating: 5,
    verified: true,
    productTag: 'IArmonize Energy (Vitalidade Mitocondrial)',
    date: 'há 12 dias'
  }
];
