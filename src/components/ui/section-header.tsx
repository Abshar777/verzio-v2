"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  actionLink?: string;
  actionText?: string;
  centered?: boolean;
  children?: ReactNode;
}

export function SectionHeader({
  title,
  subtitle,
  actionLink,
  actionText,
  centered = false,
  children,
}: SectionHeaderProps) {
  return (
    <div className={`mb-8 ${centered ? "text-center" : "flex justify-between items-center"}`}>
      <div>
        <motion.h2 
          className="text-2xl md:text-3xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p 
            className="text-muted-foreground mt-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      {actionLink && actionText && !centered && (
        <Link 
          href={actionLink} 
          className="text-primary-foreground bg-primary hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium inline-flex items-center transition-all group"
        >
          {actionText}
          <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      )}
      {children}
    </div>
  );
}