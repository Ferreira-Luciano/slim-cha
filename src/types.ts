export interface KitItemRow {
  product: string;
  quantity: number;
}

export interface KitOffer {
  id: string;
  name: string;
  protocolDuration: string;
  price: number;
  installmentText: string;
  buttonText: string;
  productImage: string;
  items: KitItemRow[];
  checkoutUrl?: string;
  tag?: string;
  isBestSeller?: boolean;
  pixDiscountNote?: string;
}

export interface FormulaProduct {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  badge?: string;
  ingredients: string[];
  description?: string;
  category: 'hair' | 'sleep' | 'energy' | 'vital';
}

export interface Benefit {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  badge?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'produto' | 'entrega' | 'garantia' | 'seguranca';
}

export interface LivePurchase {
  name: string;
  location: string;
  kit: string;
  timeAgo: string;
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  city: string;
  state: string;
  weightLostKg?: number;
  durationWeeks?: number;
  headline: string;
  story: string;
  rating: number;
  image?: string;
  photo?: string;
  verified: boolean;
  productTag?: string;
  date?: string;
}

export interface SlimChaKit {
  id: string;
  bottlesCount: number;
  name: string;
  durationLabel: string;
  discountBadge: string;
  tablePrice: string;
  promotionalPrice: string;
  installmentText: string;
  shippingTitle: string;
  shippingRegion: string;
  buttonText: string;
  isFeatured?: boolean;
  productImage: string;
}


