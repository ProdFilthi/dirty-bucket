import React from "react";
import { toast } from "sonner";

const PurchaseBtn = ({ tier }: { tier: string }) => {
  return (
    <div className="flex items-center justify-center my-10">
      <button
        className="py-3 rounded-lg cursor-pointer active:opacity-75 transition-all bg-green-700 w-80"
        type="button"
        onClick={() => toast.success(`You purchased the ${tier} tier!`)}
      >
        Purchase
      </button>
    </div>
  );
};

export default PurchaseBtn;
