import React, { useState } from 'react';
import { X, SlidersHorizontal, Check, Copy, ExternalLink, RotateCcw, Sparkles, Flame } from 'lucide-react';
import { SLIM_CHA_AFFILIATE_URL, DEFAULT_AFFILIATE_URL, AFFILIATE_LINKS } from '../data/productData';

interface AffiliateConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeProductTab: 'emagrecimento' | 'iarmonize';
  slimUrl: string;
  onSaveSlimUrl: (url: string) => void;
  getSlimCheckoutUrl: (extraParams?: Record<string, string>) => string;
  iarmonizeUrl: string;
  onSaveIarmonizeUrl: (url: string) => void;
  getIarmonizeCheckoutUrl: (extraParams?: Record<string, string>) => string;
}

export const AffiliateConfigModal: React.FC<AffiliateConfigModalProps> = ({
  isOpen,
  onClose,
  activeProductTab,
  slimUrl,
  onSaveSlimUrl,
  getSlimCheckoutUrl,
  iarmonizeUrl,
  onSaveIarmonizeUrl,
  getIarmonizeCheckoutUrl,
}) => {
  const [selectedTab, setSelectedTab] = useState<'emagrecimento' | 'iarmonize'>(activeProductTab);
  const [currentSlimUrl, setCurrentSlimUrl] = useState<string>(slimUrl);
  const [currentIarmonizeUrl, setCurrentIarmonizeUrl] = useState<string>(iarmonizeUrl);
  
  const [utmSource, setUtmSource] = useState<string>('');
  const [utmCampaign, setUtmCampaign] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const isSlim = selectedTab === 'emagrecimento';

  const handleSave = () => {
    if (isSlim) {
      onSaveSlimUrl(currentSlimUrl.trim() || SLIM_CHA_AFFILIATE_URL);
    } else {
      onSaveIarmonizeUrl(currentIarmonizeUrl.trim() || DEFAULT_AFFILIATE_URL);
    }
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  const handleReset = () => {
    if (isSlim) {
      setCurrentSlimUrl(SLIM_CHA_AFFILIATE_URL);
      onSaveSlimUrl(SLIM_CHA_AFFILIATE_URL);
    } else {
      setCurrentIarmonizeUrl(DEFAULT_AFFILIATE_URL);
      onSaveIarmonizeUrl(DEFAULT_AFFILIATE_URL);
    }
  };

  const activeDestinationUrl = isSlim
    ? getSlimCheckoutUrl(utmSource || utmCampaign ? { ...(utmSource ? { src: utmSource } : {}), ...(utmCampaign ? { utm_campaign: utmCampaign } : {}) } : undefined)
    : getIarmonizeCheckoutUrl(utmSource || utmCampaign ? { ...(utmSource ? { src: utmSource } : {}), ...(utmCampaign ? { utm_campaign: utmCampaign } : {}) } : undefined);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(activeDestinationUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const iarmonizePresets = [
    {
      title: 'Checkout Direto Braip (Recomendado)',
      desc: 'Link de checkout com plano plav449r',
      url: AFFILIATE_LINKS.directCheckout,
    },
    {
      title: 'Braip Ref Plano (plav449r)',
      desc: 'Link com cheq89gn',
      url: AFFILIATE_LINKS.braipRefPlan,
    },
    {
      title: 'Página de Vendas 1 (provwmw5)',
      desc: 'Página oficial de apresentação',
      url: AFFILIATE_LINKS.braipSalesPage1,
    },
    {
      title: 'Página de Vendas 2 (lip7nde8)',
      desc: 'Página alternativa',
      url: AFFILIATE_LINKS.braipSalesPage2,
    },
    {
      title: 'Presell PageLink (pagelink.site)',
      desc: 'Presell com código de afiliado',
      url: AFFILIATE_LINKS.pageLink,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in">
      <div className="relative w-full max-w-xl bg-white text-stone-900 border border-stone-300 rounded-3xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-stone-900 text-white flex items-center justify-center">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-stone-900">
                Gerenciar Links de Afiliado Braip
              </h3>
              <p className="text-[11px] text-stone-500">
                Altere seus links de checkout para Slim Chá e IArmonize a qualquer momento
              </p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-800 hover:bg-stone-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="pt-4 flex gap-2">
          <button
            onClick={() => setSelectedTab('emagrecimento')}
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              isSlim 
                ? 'bg-emerald-600 text-white shadow-sm' 
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Slim Chá (Emagrecimento)</span>
          </button>

          <button
            onClick={() => setSelectedTab('iarmonize')}
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              !isSlim 
                ? 'bg-[#b85d2d] text-white shadow-sm' 
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>IArmonize (4 Fórmulas)</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-4 space-y-4 text-left">
          
          {isSlim ? (
            /* Slim Chá Link Input */
            <div className="space-y-3">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                  Link de Afiliado Braip (Slim Chá):
                </label>
                <input
                  type="text"
                  value={currentSlimUrl}
                  onChange={(e) => setCurrentSlimUrl(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-800 font-mono focus:outline-hidden focus:border-emerald-500"
                />
                <p className="text-[11px] text-stone-500">
                  Link Padrão: <code className="text-emerald-700 font-mono">{SLIM_CHA_AFFILIATE_URL}</code>
                </p>
              </div>

              {/* Quick UTM Tags */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                    Origem / SRC (ex: instagram, google)
                  </label>
                  <input
                    type="text"
                    value={utmSource}
                    onChange={(e) => setUtmSource(e.target.value)}
                    placeholder="instagram_stories"
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-800 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                    Campanha (ex: ads_verao)
                  </label>
                  <input
                    type="text"
                    value={utmCampaign}
                    onChange={(e) => setUtmCampaign(e.target.value)}
                    placeholder="campanha_1"
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-800 focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Destination Preview */}
              <div className="p-3 bg-stone-100 rounded-xl border border-stone-200">
                <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
                  Link de Destino Gerado:
                </span>
                <p className="text-xs font-mono text-stone-800 break-all font-semibold">
                  {activeDestinationUrl}
                </p>
              </div>
            </div>
          ) : (
            /* IArmonize Presets and Input */
            <div className="space-y-3">
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                Selecione um dos links da Braip para IArmonize:
              </label>
              <div className="space-y-1.5">
                {iarmonizePresets.map((preset, idx) => {
                  const isSelected = currentIarmonizeUrl === preset.url;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIarmonizeUrl(preset.url)}
                      className={`w-full text-left p-2.5 rounded-xl border transition-all text-xs cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'bg-amber-50/90 border-[#b85d2d] ring-1 ring-[#b85d2d]'
                          : 'bg-stone-50 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      <div className="truncate">
                        <span className="font-bold text-stone-900 block truncate">{preset.title}</span>
                        <span className="text-[11px] text-stone-500 font-mono truncate block">{preset.url}</span>
                      </div>
                      {isSelected && (
                        <span className="shrink-0 bg-[#b85d2d] text-white p-1 rounded-full">
                          <Check className="w-3 h-3" />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                  Ou digite uma URL Customizada (IArmonize):
                </label>
                <input
                  type="text"
                  value={currentIarmonizeUrl}
                  onChange={(e) => setCurrentIarmonizeUrl(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-800 font-mono focus:outline-hidden focus:border-[#b85d2d]"
                />
              </div>

              {/* Quick UTM Tags */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                    Origem / SRC (ex: instagram, google)
                  </label>
                  <input
                    type="text"
                    value={utmSource}
                    onChange={(e) => setUtmSource(e.target.value)}
                    placeholder="instagram_stories"
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-800 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                    Campanha (ex: ads_verao)
                  </label>
                  <input
                    type="text"
                    value={utmCampaign}
                    onChange={(e) => setUtmCampaign(e.target.value)}
                    placeholder="campanha_1"
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-800 focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Destination Preview */}
              <div className="p-3 bg-stone-100 rounded-xl border border-stone-200">
                <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
                  Link de Destino Gerado:
                </span>
                <p className="text-xs font-mono text-stone-800 break-all font-semibold">
                  {activeDestinationUrl}
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1 py-1.5 px-2.5 rounded-lg hover:bg-stone-100 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restaurar Padrão</span>
            </button>
            <button
              onClick={copyToClipboard}
              className="text-xs text-stone-700 hover:text-stone-900 flex items-center gap-1 py-1.5 px-2.5 rounded-lg hover:bg-stone-100 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado!' : 'Copiar Link'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={activeDestinationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-stone-700 bg-stone-100 border border-stone-300 py-2 px-3 rounded-xl flex items-center gap-1.5 cursor-pointer hover:bg-stone-200"
            >
              <span>Testar Link</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={handleSave}
              className={`font-bold text-xs py-2 px-4 rounded-xl flex items-center gap-1.5 text-white shadow-md cursor-pointer transition-all ${
                isSlim ? 'bg-emerald-600 hover:bg-emerald-500' : 'bg-[#b85d2d] hover:bg-[#a14e24]'
              }`}
            >
              {savedSuccess ? <Check className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5" />}
              <span>{savedSuccess ? 'Salvo!' : 'Aplicar Link'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
