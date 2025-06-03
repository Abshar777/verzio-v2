"use client";

import { Calendar, Users, Video, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { JourneyCard, JourneyStepProps } from "../global/journeyCard";
import { SectionHeader } from "../ui/section-header";

const journeySteps: JourneyStepProps[] = [
  {
    title: "Tell us about yourself",
    description: "Let us know about your learning style, what your current proficiency level is and your goals for learning.",
    icon: <FileText className="h-7 w-7 text-primary" />,
    index: 0
  },
  {
    title: "Get expertly matched",
    description: "Our class coordinator will pair you up with your perfect tutor based on your profile and preferences.",
    icon: <Users className="h-7 w-7 text-primary" />,
    index: 1
  },
  {
    title: "Take a free 30 min trial lesson",
    description: "Get familiar with your tutor and experience what it's like to learn with Live webinar.",
    icon: <Video className="h-7 w-7 text-primary" />,
    index: 2
  },
  {
    title: "Schedule future lessons",
    description: "Use your online calendar to pick dates and times that suit you for future classes.",
    icon: <Calendar className="h-7 w-7 text-primary" />,
    index: 3
  }
];

export function JourneySection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Start your learning journey" 
          subtitle="Simple Steps"
          centered 
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {journeySteps.map((step, index) => (
            <JourneyCard key={index} step={{...step, index}} index={index} />
          ))}
        </motion.div>
        
        <div className="mt-12 flex justify-center">
          <motion.button
            className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md font-medium transition-colors shadow-md"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Learning Today
          </motion.button>
        </div>
      </div>
    </section>
  );
}