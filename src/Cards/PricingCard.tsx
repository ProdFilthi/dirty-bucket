"use client";
import { pricingPlan } from "@/Lib/PricingData";
import { usePricingStore } from "@/store/Store";

const PricingCard = () => {
  const { isYearly } = usePricingStore();
  return (
    <div className="flex items-center justify-center gap-4">
      {pricingPlan.map((plan) => (
        <div
          key={plan.id}
          className="flex items-start pt-4 justify-center w-[380px] h-[520px] mx-auto border-neutral-700 border rounded-lg cursor-pointer"
        >
          <div className="flex flex-col">
            <h1 className="text-center text-4xl font-bold">{plan.title}</h1>
            <div className="flex items-center justify-center py-4">
              <div className="text-3xl">
                <span className="align-super opacity-40">$</span>
                <span className="text-5xl">
                  {isYearly ? plan.yearlyPlan : plan.monthlyPlan}
                </span>
                <span className="text-[20px] opacity-40">
                  / {isYearly ? "Year" : "Month"}
                </span>
              </div>
            </div>
            <div className="flex items-start flex-col leading-12 mx-4 text-sm">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span>✅</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingCard;
