"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export interface JourneyStepProps {
  title: string;
  description: string;
  icon: ReactNode;
  index: number;
}

export function JourneyCard({ step, index }: { step: JourneyStepProps; index: number }) {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
    >
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: index * 0.1 + 0.2 }}
          >
            {step.icon}
          </motion.div>
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
          {index + 1}
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
      <p className="text-sm text-muted-foreground">{step.description}</p>
    </motion.div>
  );
}