"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export interface PriceFeature {
  text: string;
}

export interface PriceProps {
  name: string;
  price: number;
  features: PriceFeature[];
  icon: React.ReactNode;
}

export function PriceCard({ plan, index }: { plan: PriceProps; index: number }) {
  return (
    <motion.div
      className={cn("relative rounded-2xl bg-card p-8 shadow-lg hover:shadow-xl transition-shadow",
        index === 1 && "md:scale-110"
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="mb-6 flex justify-center">
        <div className="rounded-full bg-primary/10 p-3">
          {plan.icon}
        </div>
      </div>

      <h3 className="text-4xl font-semibold mb-4">{plan.name}</h3>
      
      {/* <div className="mb-6">
        <span className="text-4xl font-bold">${plan.price}</span>
        <span className="text-muted-foreground">/mth</span>
      </div> */}

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center text-sm">
            <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>

      <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
        Get started
      </Button>
    </motion.div>
  );
}