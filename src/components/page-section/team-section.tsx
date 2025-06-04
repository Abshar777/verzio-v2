"use client";

import { motion } from "framer-motion";
import { InstructorCard, InstructorProps } from "../global/instroctorCard";
import { SectionHeader } from "../ui/section-header";

const instructors: InstructorProps[] = [
  {
    name: "Albert Flores",
    role: "Founder of",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Leslie Alexander",
    role: "Senior UI Designer",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Ronald Richards",
    role: "Senior Developer",
    image:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Eleanor Pena",
    role: "Senior UX Designer",
    image:
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const teamMembers = [
  {
    name: "ANAGHA K  ",
    role: "FLUENCY ARCHITECT",
    image: "/images/anaga.jpeg",
  },
  {
    name: "NAJILA HAWADHA ",
    role: "CHAIR OF EXPERSSION",
    image: "/images/najila.jpeg",
  },
  {
    name: "BASHEER PA  ",
    role: "impact Strategist & Coach",
    image: "/images/basheer.jpeg",
  },
  {
    name: "Nafila Shareefa MI",
    role: "Counsellor & Concept Developer",
    image: "/images/nafila.jpeg",
  },
  {
    name: "JINSH SHAJI   ",
    role: "LINGUISTIC NAVIGATOR",
    image: "/images/jinsh.jpeg",
  },
  {
    name: "ARATHI  ",
    role: "REACH AMBASSADOR",
    image: "/images/arathi.jpeg",
  },
  {
    name: "AKASH  ",
    role: "ONLINE PRESCENCE INNOVATOR",
    image: "/images/akash.jpeg",
  },
];

export function TeamSection() {
  return (
    <section className="py-16 overflow-hidden relative md:py-24">
      <div className="dot-container"></div>
      <div className="container mx-auto px-4">
        <SectionHeader title="Meet The Passionate Team" subtitle="" centered />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {teamMembers.map((instructor, index) => (
            <InstructorCard key={index} instructor={instructor} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
