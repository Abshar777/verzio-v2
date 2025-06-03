"use client"
import Image from "next/image";
import Hero from "@/components/page-section/hero";
import CardIcons from "@/components/page-section/cardIcons";
import CoursesSection from "@/components/page-section/course-scetion";
import { JourneySection } from "@/components/page-section/journey-section";
import { CtaSection } from "@/components/page-section/cta-section";
import { PricingSection } from "@/components/page-section/pricingSection";
import { TeamSection } from "@/components/page-section/team-section";
export default function Home() {
  return (
   <div className="w-full md:px-10 h-full relative">
    <Hero />
    <CardIcons/>
    <CoursesSection/>
    <JourneySection/>
    <PricingSection/>
    <TeamSection/>
    <CtaSection/>
   </div>
  );
}
