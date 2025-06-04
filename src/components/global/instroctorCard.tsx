"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export interface InstructorProps {
  name: string;
  role: string;
  image: string;
}

export function InstructorCard({ instructor, index }: { instructor: InstructorProps; index: number }) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="overflow-hidden rounded-3xl bg-gradient-to-b from-blue-50 to-pink-50 dark:from-blue-950/20 dark:to-pink-950/20">
        <div className="aspect-[4/5] relative">
          <Image
            src={instructor.image}
            alt={instructor.name}
            fill
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-1">{instructor.name}</h3>
          <p className="text-sm  text-muted-foreground">
            {instructor.role}
           
          </p>
        </div>
      </div>
    </motion.div>
  );
}