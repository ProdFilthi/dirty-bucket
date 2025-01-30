export interface PricingPlan {
  id: number;
  title: string;
  monthlyPlan: number;
  yearlyPlan: number;
  features: string[];
}
export const pricingPlan: PricingPlan[] = [
  {
    id: 1,
    title: "Starter",
    monthlyPlan: 2,
    yearlyPlan: 24, // 20 on discount
    features: [
      "You can upload up to 50 beats free",
      "You can have access to dashboard",
      "You can view in depth beat analytics",
      "No commission charges on your sales",
      "You have full time support in case of any issue",
    ],
  },
  {
    id: 2,
    title: "Semi-Pro",
    monthlyPlan: 5, // 4 on discount
    yearlyPlan: 60, // 50 on discount
    features: [
      "You can upload beats unlimited",
      "You can have access to dashboard",
      "You can view in depth beat analytics",
      "No commission on your sales",
      "You have full time support incase of any issue",
    ],
  },
  {
    id: 3,
    title: "Pro",
    monthlyPlan: 15, // 13.5 on discount
    yearlyPlan: 180, // 162 on discount
    features: [
      "You can upload beats unlimited",
      "You can get a custom website",
      "You can have a custom domain",
      "You can have access to dashboard",
      "You can view in depth beat analytics",
      "No commission on your sales",
      "You have full time support incase of any issue",
    ],
  },
];
