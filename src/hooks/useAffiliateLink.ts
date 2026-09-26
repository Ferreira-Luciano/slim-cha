import { useState, useEffect, useCallback } from 'react';
import { SLIM_CHA_AFFILIATE_URL, DEFAULT_AFFILIATE_URL } from '../data/productData';

const SLIM_STORAGE_KEY = 'braip_affiliate_slim_url';
const IARMONIZE_STORAGE_KEY = 'braip_affiliate_iarmonize_url';

export function useAffiliateLink() {
  const [slimUrl, setSlimUrl] = useState<string>(SLIM_CHA_AFFILIATE_URL);
  const [iarmonizeUrl, setIarmonizeUrl] = useState<string>(DEFAULT_AFFILIATE_URL);

  useEffect(() => {
    try {
      const savedSlim = localStorage.getItem(SLIM_STORAGE_KEY);
      if (savedSlim && savedSlim.startsWith('http')) {
        setSlimUrl(savedSlim);
      }
      const savedIarmonize = localStorage.getItem(IARMONIZE_STORAGE_KEY);
      if (savedIarmonize && savedIarmonize.startsWith('http')) {
        setIarmonizeUrl(savedIarmonize);
      }
    } catch {
      // Storage access safety
    }
  }, []);

  const updateSlimUrl = useCallback((newUrl: string) => {
    try {
      const finalUrl = newUrl && newUrl.trim().startsWith('http') ? newUrl.trim() : SLIM_CHA_AFFILIATE_URL;
      localStorage.setItem(SLIM_STORAGE_KEY, finalUrl);
      setSlimUrl(finalUrl);
    } catch {
      // Storage safety
    }
  }, []);

  const updateIarmonizeUrl = useCallback((newUrl: string) => {
    try {
      const finalUrl = newUrl && newUrl.trim().startsWith('http') ? newUrl.trim() : DEFAULT_AFFILIATE_URL;
      localStorage.setItem(IARMONIZE_STORAGE_KEY, finalUrl);
      setIarmonizeUrl(finalUrl);
    } catch {
      // Storage safety
    }
  }, []);

  // Preserva UTMs da URL atual para atribuição correta na Braip
  const buildUrlWithParams = useCallback((baseUrl: string, extraParams?: Record<string, string>) => {
    try {
      const url = new URL(baseUrl);
      if (typeof window !== 'undefined' && window.location.search) {
        const currentParams = new URLSearchParams(window.location.search);
        ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'src', 'sck'].forEach((key) => {
          const val = currentParams.get(key);
          if (val && !url.searchParams.has(key)) {
            url.searchParams.set(key, val);
          }
        });
      }
      if (extraParams) {
        Object.entries(extraParams).forEach(([k, v]) => {
          url.searchParams.set(k, v);
        });
      }
      return url.toString();
    } catch {
      return baseUrl;
    }
  }, []);

  const getSlimCheckoutUrl = useCallback((extraParams?: Record<string, string>) => {
    return buildUrlWithParams(slimUrl, extraParams);
  }, [buildUrlWithParams, slimUrl]);

  const getIarmonizeCheckoutUrl = useCallback((extraParams?: Record<string, string>) => {
    return buildUrlWithParams(iarmonizeUrl, extraParams);
  }, [buildUrlWithParams, iarmonizeUrl]);

  return {
    slimUrl,
    updateSlimUrl,
    getSlimCheckoutUrl,
    iarmonizeUrl,
    updateIarmonizeUrl,
    getIarmonizeCheckoutUrl,
  };
}
