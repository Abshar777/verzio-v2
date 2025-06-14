"use client"
import Image from "next/image";
import Hero from "@/components/page-section/hero";
import CardIcons from "@/components/page-section/cardIcons";
import CoursesSection from "@/components/page-section/course-scetion";
import { JourneySection } from "@/components/page-section/journey-section";
import { CtaSection } from "@/components/page-section/cta-section";
import { PricingSection } from "@/components/page-section/pricingSection";
import { TeamSection } from "@/components/page-section/team-section";
import Vision from "@/components/page-section/vision";
import ContactForm from "@/components/page-section/contactForm";
export default function Home() {
  return (
   <div className="w-full md:px-10 h-full relative">
    <Hero />
    <CardIcons/>
    <CoursesSection/>
    <JourneySection/>
    <PricingSection/>
    <Vision/>
    <TeamSection/>
    <ContactForm/>
    <CtaSection/>
   </div>
  );
}
