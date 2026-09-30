import React, { useState, useEffect } from 'react';
import { Header, ActiveProductPage } from './components/Header';
import { SlimChaPage } from './pages/SlimChaPage';
import { IArmonizePage } from './pages/IArmonizePage';
import { StickyMobileBar } from './components/StickyMobileBar';
import { AffiliateConfigModal } from './components/AffiliateConfigModal';
import { Footer } from './components/Footer';
import { useAffiliateLink } from './hooks/useAffiliateLink';

export default function App() {
  const [activePage, setActivePage] = useState<ActiveProductPage>('emagrecimento');
  const [isConfigOpen, setIsConfigOpen] = useState(false);

  const {
    slimUrl,
    updateSlimUrl,
    getSlimCheckoutUrl,
    iarmonizeUrl,
    updateIarmonizeUrl,
    getIarmonizeCheckoutUrl,
  } = useAffiliateLink();

  // Check URL hash or search params on mount
  useEffect(() => {
    try {
      const hash = window.location.hash.toLowerCase();
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('p') || params.get('page');

      if (hash === '#iarmonize' || pageParam === 'iarmonize') {
        setActivePage('iarmonize');
      } else if (hash === '#emagrecimento' || hash === '#slimcha' || pageParam === 'emagrecimento') {
        setActivePage('emagrecimento');
      }
    } catch {
      // Fallback
    }
  }, []);

  // Dynamic SEO Synchronization
  useEffect(() => {
    const isSlim = activePage === 'emagrecimento';
    const pageTitle = isSlim
      ? 'Slim Chá Oficial – Emagreça com Saúde, Sem Fome e Sem Efeito Sanfona'
      : 'IArmonize Oficial – Saúde, Sono Reparador, Cabelos Fortes & Energia';
    const pageDesc = isSlim
      ? 'Página oficial do Slim Chá. Fórmula termogênica 100% natural para emagrecimento rápido, queima de gordura e desinchaço. Até 60% OFF com Frete Grátis na Braip.'
      : 'Fórmula exclusiva IArmonize Integra Pharma com suplementos Hair, Sleep, Energy e Vital. Melhore sua qualidade de vida com frete grátis na Braip.';
    
    document.title = pageTitle;

    // Helper to update or create meta tags
    const updateMeta = (nameOrProperty: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${nameOrProperty}"]` : `meta[name="${nameOrProperty}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (isProperty) {
          el.setAttribute('property', nameOrProperty);
        } else {
          el.setAttribute('name', nameOrProperty);
        }
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    updateMeta('description', pageDesc);
    updateMeta('title', pageTitle);
    updateMeta('og:title', pageTitle, true);
    updateMeta('og:description', pageDesc, true);
    updateMeta('twitter:title', pageTitle);
    updateMeta('twitter:description', pageDesc);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const currentOrigin = typeof window !== 'undefined' ? window.location.origin : '';
    canonical.setAttribute('href', `${currentOrigin}/${isSlim ? '#emagrecimento' : '#iarmonize'}`);
  }, [activePage]);

  const handleSelectPage = (page: ActiveProductPage) => {
    setActivePage(page);
    try {
      window.location.hash = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      // Ignore
    }
  };

  const scrollToKits = () => {
    const kitElementId = activePage === 'emagrecimento' ? 'slim-kits' : 'kits';
    const el = document.getElementById(kitElementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const checkoutUrl = activePage === 'emagrecimento' 
        ? getSlimCheckoutUrl() 
        : getIarmonizeCheckoutUrl();
      window.location.href = checkoutUrl;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col antialiased transition-colors duration-300 ${
      activePage === 'emagrecimento' 
        ? 'bg-[#0a110d] text-stone-100 selection:bg-emerald-500 selection:text-stone-950' 
        : 'bg-[#faf6f0] text-stone-900 selection:bg-[#b85d2d] selection:text-white'
    }`}>
      {/* 1. Header with Persistent Dual Page Switcher */}
      <Header
        activePage={activePage}
        onSelectPage={handleSelectPage}
        onOpenSettings={() => setIsConfigOpen(true)}
        onScrollToKits={scrollToKits}
      />

      {/* 2. Main Sales Page View */}
      <main className="flex-1">
        {activePage === 'emagrecimento' ? (
          <SlimChaPage
            getCheckoutUrl={getSlimCheckoutUrl}
            onOpenSettings={() => setIsConfigOpen(true)}
          />
        ) : (
          <IArmonizePage
            getCheckoutUrl={getIarmonizeCheckoutUrl}
          />
        )}
      </main>

      {/* 3. Footer with Navigation Between Both Products */}
      <Footer
        activePage={activePage}
        onSelectPage={handleSelectPage}
      />

      {/* 4. Sticky Mobile Conversion Bar */}
      <StickyMobileBar
        activePage={activePage}
        onCtaClick={scrollToKits}
        affiliateUrl={activePage === 'emagrecimento' ? getSlimCheckoutUrl() : getIarmonizeCheckoutUrl()}
      />

      {/* 6. Affiliate Config Modal Supporting Both Products */}
      <AffiliateConfigModal
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        activeProductTab={activePage}
        slimUrl={slimUrl}
        onSaveSlimUrl={updateSlimUrl}
        getSlimCheckoutUrl={getSlimCheckoutUrl}
        iarmonizeUrl={iarmonizeUrl}
        onSaveIarmonizeUrl={updateIarmonizeUrl}
        getIarmonizeCheckoutUrl={getIarmonizeCheckoutUrl}
      />
    </div>
  );
}
