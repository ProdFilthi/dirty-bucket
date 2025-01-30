import PricingCard from "@/Cards/PricingCard";
import ToggleButton from "@/Lib/ToggleButton";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-6xl pb-4 text-center">Upgrade Your Plan</h1>
      <ToggleButton />
      <PricingCard />
    </div>
  );
};

export default page;
