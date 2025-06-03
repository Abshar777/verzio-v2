"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Users, BookOpen, Heart, Share2, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CourseProps {
  id: string;
  title: string;
  category: string;
  image: string;
  rating: number;
  lessons: number;
  students: number;
  price: number;
}

export function CourseCard({ course }: { course: CourseProps }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <motion.div
      className="group relative rounded-xl overflow-hidden bg-card shadow-md hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
        
        <div className="absolute top-3 left-3 bg-black/50 rounded-full px-2 py-1 text-xs text-white backdrop-blur-sm flex items-center">
          <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
          <span>{course.rating}</span>
        </div>
        
        <motion.div
          className="absolute right-3 top-3 z-10"
          whileHover={{ scale: 1.1 }}
        >
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className="h-8 w-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white transition-colors hover:bg-black/50"
          >
            <Heart 
              className={cn("h-4 w-4 transition-colors", 
                isFavorite ? "fill-red-500 text-red-500" : ""
              )} 
            />
          </button>
        </motion.div>
        
        <motion.div 
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <button className="h-12 w-12 rounded-full bg-white text-primary flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
            <Play className="h-5 w-5 ml-1" />
          </button>
        </motion.div>
      </div>

      <div className="p-4">
        <div className="space-y-2">
          <div className="text-xs font-medium text-muted-foreground">
            {course.category}
          </div>
          <h3 className="font-semibold text-lg line-clamp-2">
            {course.title}
          </h3>
          <div className="flex items-center text-sm text-muted-foreground space-x-4">
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-1" />
              <span>{course.lessons} Lesson</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{course.students} Students</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-semibold text-primary-foreground text-lg">
            $ {course.price.toFixed(2)}
          </span>
          <div className="flex space-x-2">
            <motion.button 
              className="p-2 rounded-full hover:bg-muted transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Share2 className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}