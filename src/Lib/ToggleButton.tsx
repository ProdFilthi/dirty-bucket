"use client";
import { usePricingStore } from "@/store/Store";
const ToggleButton = () => {
  const { isYearly, togglePricing } = usePricingStore();
  return (
    <div className="w-36 flex items-center justify-center">
      <div className="flex space-x-1 border border-neutral-700 p-2 rounded-lg shadow-lg mb-4">
        <button
          type="button"
          className={`px-1 py-1 text-[12px] rounded-lg border active:opacity-75 ${
            !isYearly
              ? " border-green-700 bg-green-800"
              : "bg-neutral-800 border-neutral-600"
          } cursor-pointer transition-all`}
          onClick={togglePricing}
        >
          Monthly
        </button>
        <button
          type="button"
          className={`px-1 py-1 text-[12px] rounded-lg border active:opacity-75 ${
            isYearly
              ? " border-green-700 bg-green-800"
              : "bg-neutral-800 border-neutral-600"
          } cursor-pointer transition-all`}
          onClick={togglePricing}
        >
          Annually
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;
