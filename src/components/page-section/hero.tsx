"use client";
import React from "react";
import { Button } from "../ui/button";
import { HiRocketLaunch } from "react-icons/hi2";
import { motion } from "framer-motion";
import { TbSchool } from "react-icons/tb";
import { TbSchoolBell } from "react-icons/tb";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile()
  const students = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      color: "bg-yellow-400",
      x: isMobile ? "12%" : "35%",
      y: isMobile ? "0%" : "0%",
      delay: 0.1,
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      color: "bg-blue-500",
      x: isMobile ? "95%" : "70%",
      y: isMobile ? "0%" : "6%",
      delay: 0.2,
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      color: "bg-red-500",
      x: isMobile ? "12%" : "35%",
      y: isMobile ? "60%" : "47%",
      delay: 0.3,
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      color: "bg-blue-200",
      x: isMobile ? "95%" : "70%",
      y: isMobile ? "60%" : "53%",
      delay: 0.4,
    },
  ];

  //   EmpoweringTeachers,TransformingClassrooms

  return (
    <div className="w-full  overflow-hidden md:h-[70vh] xl:h-[80vh] px-10  py-5 grid md:grid-cols-2 relative">
      <div className="dot-container"></div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute giggle top-[10%] left-0 w-full h-full "
      >
        <HiRocketLaunch className="text-black/20  text-4xl" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute scale-x-[-1] giggle-2 top-[50%] left-0 w-full h-full "
      >
        <HiRocketLaunch className="text-black/20  text-4xl" />
      </motion.div>
      <div className="flex md:translate-x-0 translate-x-[-5%] flex-col gap-2 relative md:items-start items-center justify-center">
        <h1 className="text-4xl  uppercase lg:text-5xl  md:text-start text-center font-bold text-gray-900 leading-tight">
          Empowering <span className="text-blue-600">Teachers</span> Transforming
          Classrooms
          <br />
        </h1>
        <p className="text-sm text-gray-600  max-w-lg leading-relaxed">
          Welcome to VERZIO–The Language Chamber, where we define English
          communication and teaching excellence for educators.
        </p>
        <div className="flex items-center mt-10 gap-2">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute giggle-2 top-[70%] left-[90%] w-full h-full "
        >
          <TbSchool className="text-black/20  text-6xl" />
        </motion.div>
      </div>
      <div className="relative h-[400px] md:left-auto left-[-100px] md:scale-100 scale-[.6] lg:h-[500px]">
        {students.map((student) => (
          <motion.div
            key={student.id}
            className={cn(
              "absolute w-56 h-56",
              `top-[${student.y}] left-[${student.x}]`
            )}
            style={{ top: student.y, left: student.x }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: student.delay,
              duration: 0.6,
              type: "spring",
              stiffness: 50,
            }}
          >
            <motion.div
              className={`relative rounded-3xl p-1 ${student.color} shadow-lg overflow-hidden`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="absolute inset-0 bg-white dark:bg-black/20 mix-blend-overlay opacity-10"></div>
              <div className="bg-card rounded-2xl overflow-hidden aspect-square relative">
                <div className="absolute inset-0 bg-black/5 dark:bg-white/5 z-10"></div>
                <Image
                  src={student.image}
                  alt="Student"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        ))}

        <motion.div
          className="absolute rounded-xl bg-white dark:bg-gray-800 shadow-lg p-3 w-36"
          style={{ bottom: isMobile ? "10%" : "10%", left: isMobile ? "10%" : "15%" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <div className="bg-blue-500 text-white p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
            </div>
            <span className="text-sm font-medium">Live webinar</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute rounded-xl bg-white dark:bg-gray-800 shadow-lg p-3 w-40"
          style={{ top: isMobile ? "25%" : "25%", right: isMobile ? "-80%" : "50%" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-yellow-500 text-white p-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
                  <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path d="M17.5 17.5 16 16" />
                  <path d="m8 16-1.5 1.5" />
                  <path d="M12 15v2" />
                </svg>
              </div>
              <span className="text-xs font-medium">10K+</span>
            </div>
            <p className="text-xs text-muted-foreground">Online Students</p>
          </div>
        </motion.div>

        <motion.div
          className="absolute rounded-xl bg-white dark:bg-gray-800 shadow-lg p-3 w-40"
          style={{ top: isMobile ? "80%" : "30%", right: isMobile ? "-65%" : "5%" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-blue-500 text-white p-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 8h14" />
                  <path d="M5 12h14" />
                  <path d="M5 16h14" />
                </svg>
              </div>
              <span className="text-xs font-medium">80+</span>
            </div>
            <p className="text-xs text-muted-foreground">Available Courses</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
