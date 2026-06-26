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
          className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${activeBilling === 'monthly' ? 'bg-nocturnal-expedition text-white' : 'text-mystic-mint hover:text-white'}`}
        >
          Monthly
        </button>
        <button
          onClick={() => handleBilling('annual')}
          className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${activeBilling === 'annual' ? 'bg-nocturnal-expedition text-white' : 'text-mystic-mint hover:text-white'}`}
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
  const tiers = [
    { id: 'starter', name: 'Starter', desc: 'For independent developers.', pop: false },
    { id: 'professional', name: 'Professional', desc: 'Advanced telemetry.', pop: true },
    { id: 'scale', name: 'Scale', desc: 'Dedicated compute.', pop: false }
  ];
  return (
    <section className="w-full py-24 px-4 bg-oceanic-noir border-t border-nocturnal-expedition">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-mono text-arctic-powder mb-4">Compute Infrastructure</h2>
        </div>
        <PricingControls />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((t) => (
            <div key={t.id} className={`p-8 rounded-2xl border ${t.pop ? 'border-forsythia bg-nocturnal-expedition/20' : 'border-nocturnal-expedition bg-neutral-900/20'}`}>
              <h3 className="text-xl font-semibold mb-2 text-white">{t.name}</h3>
              <p className="text-mystic-mint text-sm mb-6 h-10">{t.desc}</p>
              <div className="mb-6 flex items-baseline gap-1"><IsolatedPriceText tier={t.id} /><span className="text-mystic-mint text-sm">/mo</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
