'use client';

import { useState, useEffect } from 'react';
import { calculatePrice, pricingEventEmitter } from '../lib/pricingMatrix';

function PricingControls() {
  const [activeBilling, setActiveBilling] = useState('monthly');

  const handleBilling = (type) => {
    setActiveBilling(type);
    pricingEventEmitter.emit({ billing: type });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">

      {/* Billing Toggle */}
      <div className="flex bg-neutral-900/50 p-1 rounded-lg border border-nocturnal-expedition">
        <button
          onClick={() => handleBilling('monthly')}
          className={`px-6 py-2 rounded-md text-sm font-semibold transition-all cursor-pointer ${activeBilling === 'monthly' ? 'bg-nocturnal-expedition text-white' : 'text-mystic-mint hover:text-white'}`}
        >
          Monthly
        </button>
        <button
          onClick={() => handleBilling('annual')}
          className={`px-6 py-2 rounded-md text-sm font-semibold transition-all cursor-pointer ${activeBilling === 'annual' ? 'bg-nocturnal-expedition text-white' : 'text-mystic-mint hover:text-white'}`}
        >
          Annually (-20%)
        </button>
      </div>

      {/* Restored Currency Dropdown with aria-label for perfect 100 Accessibility */}
      <select
        aria-label="Select Currency"
        onChange={(e) => pricingEventEmitter.emit({ currency: e.target.value })}
        className="bg-neutral-900/50 text-arctic-powder border border-nocturnal-expedition p-2 rounded-lg outline-none focus:border-forsythia cursor-pointer font-mono text-sm"
      >
        <option value="USD">USD ($)</option>
        <option value="INR">INR (₹)</option>
        <option value="EUR">EUR (€)</option>
      </select>

    </div>
  );
}

function IsolatedPriceText({ tier }) {
  const [config, setConfig] = useState({ currency: 'USD', billing: 'monthly' });
  useEffect(() => {
    const unsubscribe = pricingEventEmitter.subscribe((newState) => setConfig(prev => ({ ...prev, ...newState })));
    return unsubscribe;
  }, []);
  return <span className="text-4xl font-mono font-bold text-arctic-powder transition-all duration-150 ease-out">{calculatePrice(tier, config.currency, config.billing)}</span>;
}

export function PricingSection() {
  const [selectedTier, setSelectedTier] = useState('professional');

  const tiers = [
    { id: 'starter', name: 'Starter', desc: 'For independent developers.' },
    { id: 'professional', name: 'Professional', desc: 'Advanced telemetry.' },
    { id: 'scale', name: 'Scale', desc: 'Dedicated compute.' }
  ];

  return (
    <section id="pricing" className="w-full py-24 px-4 bg-oceanic-noir border-t border-nocturnal-expedition">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-mono text-arctic-powder mb-4">Compute Infrastructure</h2>
        </div>
        
        <PricingControls />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((t) => {
            const isSelected = selectedTier === t.id;
            return (
              <article 
                key={t.id} 
                onClick={() => setSelectedTier(t.id)}
                className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 relative z-10 overflow-visible cursor-pointer ${
                  isSelected 
                    ? 'border-forsythia bg-nocturnal-expedition/20 shadow-lg shadow-forsythia/5 scale-[1.02]' 
                    : 'border-nocturnal-expedition/30 bg-neutral-900/20 hover:border-nocturnal-expedition/70'
                }`}
              >
                {/* Subtle radial glow behind selected card */}
                {isSelected && (
                  <div className="absolute -inset-8 bg-forsythia/5 blur-3xl rounded-full opacity-100 pointer-events-none -z-10 animate-pulse" />
                )}

                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-semibold text-white font-mono">{t.name}</h3>
                  {isSelected && (
                    <span className="text-[10px] font-mono uppercase bg-forsythia text-oceanic-noir px-2 py-0.5 rounded font-bold tracking-wider">
                      Selected
                    </span>
                  )}
                </div>
                <p className="text-mystic-mint text-sm mb-6 h-10 font-sans">{t.desc}</p>
                
                <div className="mb-6 flex items-baseline gap-1">
                  <IsolatedPriceText tier={t.id} />
                  <span className="text-mystic-mint text-sm font-sans">/mo</span>
                </div>

                {/* Feature lists */}
                <ul className="space-y-4 font-sans text-sm text-mystic-mint/90 border-t border-nocturnal-expedition/30 pt-6">
                  {t.id === 'starter' && (
                    <>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-mystic-mint/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        Core Telemetry Engine
                      </li>
                      <li className="flex items-center gap-2 text-mystic-mint/40">
                        <svg className="w-4 h-4 text-mystic-mint/20 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        10GB Data Transfer
                      </li>
                      <li className="flex items-center gap-2 text-mystic-mint/40">
                        <svg className="w-4 h-4 text-mystic-mint/20 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        Community Support
                      </li>
                    </>
                  )}
                  {t.id === 'professional' && (
                    <>
                      <li className="flex items-center gap-2 text-arctic-powder">
                        <svg className={`w-4 h-4 shrink-0 stroke-current ${isSelected ? 'text-forsythia' : 'text-mystic-mint/60'}`} fill="none" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        Advanced telemetry
                      </li>
                      <li className="flex items-center gap-2 text-arctic-powder">
                        <svg className={`w-4 h-4 shrink-0 stroke-current ${isSelected ? 'text-forsythia' : 'text-mystic-mint/60'}`} fill="none" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        100TB Data Transfer
                      </li>
                      <li className="flex items-center gap-2 text-arctic-powder">
                        <svg className={`w-4 h-4 shrink-0 stroke-current ${isSelected ? 'text-forsythia' : 'text-mystic-mint/60'}`} fill="none" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        Dedicated Support
                      </li>
                    </>
                  )}
                  {t.id === 'scale' && (
                    <>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-deep-saffron shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        Dedicated Compute Nodes
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-deep-saffron shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        Unlimited Data Transfer
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-deep-saffron shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        24/7 Enterprise SLA
                      </li>
                    </>
                  )}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
