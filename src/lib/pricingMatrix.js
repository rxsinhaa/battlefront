export const PRICING_MATRIX = {
  tierRate: { starter: 29, professional: 99, scale: 249 },
  discountMultiplier: 0.8,
  regionalTariff: {
    USD: { symbol: '$', rate: 1.0 },
    INR: { symbol: '₹', rate: 83.5 },
    EUR: { symbol: '€', rate: 0.92 }
  }
};

export const calculatePrice = (tier, currency, billing) => {
  const basePrice = PRICING_MATRIX.tierRate[tier];
  const currencyConfig = PRICING_MATRIX.regionalTariff[currency];
  const discount = billing === 'annual' ? PRICING_MATRIX.discountMultiplier : 1;
  const rawPrice = basePrice * currencyConfig.rate * discount;
  return `${currencyConfig.symbol}${Math.round(rawPrice)}`;
};

export const pricingEventEmitter = {
  listeners: [],
  subscribe(fn) { this.listeners.push(fn); return () => { this.listeners = this.listeners.filter(l => l !== fn); }; },
  emit(data) { this.listeners.forEach(fn => fn(data)); }
};
