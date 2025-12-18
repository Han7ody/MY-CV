import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: 9,
    description: "A Simple option but powerful to manage your business",
    support: "Email support",
    emoji: "📦",
    recommended: false,
  },
  {
    name: "Premium",
    price: 49,
    description: "Unlimited product including apps integrations and more features",
    support: "Mon-Fri support",
    emoji: "⭐",
    recommended: true,
  },
  {
    name: "Ultimate",
    price: 99,
    description: "A wise option for large companies and individuals",
    support: "24/7 support",
    emoji: "🚀",
    recommended: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 px-6 lg:px-12">
      <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
        Pricing Plans
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative bg-card rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl ${
              plan.recommended ? "ring-2 ring-primary" : ""
            }`}
          >
            {plan.recommended && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-4 py-1 rounded-full">
                Recommended
              </span>
            )}

            <div className="text-5xl mb-4">{plan.emoji}</div>
            <h3 className="text-xl font-bold text-foreground mb-3">{plan.name}</h3>
            <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
            
            <div className="flex items-center justify-center gap-1 text-muted-foreground mb-4">
              <Check className="w-4 h-4 text-primary" />
              <span className="text-sm">{plan.support}</span>
            </div>

            <div className="mb-6">
              <span className="text-muted-foreground text-lg">$</span>
              <span className="text-4xl font-bold text-primary">{plan.price}</span>
              <span className="text-muted-foreground">/Month</span>
            </div>

            <Button
              className={`w-full rounded-full ${
                plan.recommended
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
              }`}
            >
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};
