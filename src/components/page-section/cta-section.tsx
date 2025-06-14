"use client";

import { motion } from "framer-motion";
import { GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";    
import ContactForm from "./contactForm";
export function CtaSection() {
    const [count, setCount] = useState(200);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [count]);
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-foreground opacity-10" />
          
          {/* Animated dots background */}
          <div className="absolute  inset-0 overflow-hidden">
            {[...Array(count)].map((_, i) => (
              <motion.div
                key={i  }
                className="absolute w-2 h-2 giggle bg-white/10"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                
                }}
              />
            ))}
        
          </div>
          
          <div className="relative z-10 py-16 px-6 md:px-12 lg:px-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to start your learning journey?
              </h2>
              
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join thousands of students already learning with us. Get access to over Our courses and expert instructors.
              </p>
              
           
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1 }}
              >
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="w-full sm:w-auto"
                  onClick={() => {
                    window.location.href = "#contact";
                  }}
                >
                  Browse All Courses
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/20"
                  onClick={() => {
                    window.location.href = "#contact";
                  }}
                >
                  Talk to an Advisor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}