import { create } from "zustand";

interface PricingState {
  isYearly: boolean;
  togglePricing: () => void;
}

export const usePricingStore = create<PricingState>((set) => ({
  isYearly: false,
  togglePricing: () => set((state) => ({ isYearly: !state.isYearly })),
}));
