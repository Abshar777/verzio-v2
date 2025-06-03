"use client";

import { motion } from "framer-motion";
import { Gem, Award, Crown } from "lucide-react";
import { PriceCard, PriceProps } from "../global/pricingCard";
import { SectionHeader } from "../ui/section-header";

const pricingPlans: PriceProps[] = [
  {
    name: "Basic Plan",
    price: 10,
    icon: <Gem className="w-6 h-6 text-primary" />,
    features: [
      { text: "Access to all basic features" },
      { text: "Standard Customer Support" },
      { text: "Limited Assessments And Quizzes" },
      { text: "Mobile And Desktop Access" },
      { text: "Monthly progress reports" },
    ],
  },
  {
    name: "Premium Plan",
    price: 40,
    icon: <Crown className="w-6 h-6 text-primary" />,
    features: [
      { text: "Early access to new courses" },
      { text: "One-on-one tutoring sessions" },
      { text: "Exclusive Webinars And Events" },
      { text: "Detailed Monthly Progress Report" },
      { text: "Certificate of completion for each course" },
    ],
  },
  {
    name: "Pro Plan",
    price: 30,
    icon: <Award className="w-6 h-6 text-primary" />,
    features: [
      { text: "Unlimited access to all courses" },
      { text: "Priority Customer Support" },
      { text: "Full Assessments And Quizzes" },
      { text: "Interactive Assignments And Projects" },
      { text: "Monthly progress reports" },
      { text: "Offline course access" },
    ],
  },
];

const verzioPrograms: PriceProps[] = [
  {
    name: "Beginning",
    price: 299,
    icon: <Gem className="w-6 h-6 text-primary" />,
    features: [
      { text: "Grammar & Usage" },
      { text: "Vocabulary Enhancement" },
      { text: "Speaking & Listening Skills" },
      { text: "Translation Exercises" },
      { text: "Certification Included" },
    ],
  },
  {
    name: "Middle",
    price: 499,
    icon: <Crown className="w-6 h-6 text-primary" />,
    features: [
      { text: "Advanced Grammar & Usage" },
      { text: "Interactive Debates" },
      { text: "Presentation Skills" },
      { text: "Classroom Engagement Strategies" },
      { text: "Certification Included" },
    ],
  },
  {
    name: "Advanced",
    price: 899,
    icon: <Award className="w-6 h-6 text-primary" />,
    features: [
      { text: "Leadership & Vision Building" },
      { text: "Capacity Enhancement Sessions" },
      { text: "Real-life Conversation Practice" },
      { text: "Customizable for Schools" },
      { text: "Certification Included" },
    ],
  },
];

export function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Simple, easy pricing"
          subtitle="Pricing Plans"
          centered
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {verzioPrograms.map((plan, index) => (
            <PriceCard key={index} plan={plan} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
