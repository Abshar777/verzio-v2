"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function CompliancePage() {
  return (
    <div className="min-h-screen overflow-hidden relative">
        <div className="dot-container"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative overflow-hidden">
          {/* Orange wave decoration */}
     

          {/* Logo */}
     

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left content */}
            <div className="z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <div className=" text-primary uppercase text-4xl md:text-5xl font-bold py-3  mb-8">
                  Our Core Competence
                </div>
              </motion.div>

              <ContentSection
                index={0}
                title="English Communication Program"
                description="Strengthen grammar, vocabulary, and fluency."
              />

              <ContentSection
                index={1}
                title="Faculty Dynamation"
                description="Transform teaching skills through leadership & presentation training."
              />

              <ContentSection
                index={2}
                title="Innovative Learning Approach"
                description="Interactive sessions, real-time practice & reinforcement."
              />

              <ContentSection
                index={3}
                title="Flexible Learning"
                description="Online & offline training tailored as per requirement"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="mt-12"
              >
                <Link
                  href="#"
                  className="inline-flex items-center bg-primary hover: text-white font-bold py-3 px-6 rounded-md text-lg transition-colors"
                >
                  Get Certified Today!
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>

            {/* Right image */}
            <motion.div
              className="relative z-10 flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative w-full bg-gray-500 max-w-md rounded-xl h-[500px] lg:h-[600px]">
              <video src="/3.mp4" autoPlay muted loop className="w-full h-full object-cover rounded-xl"></video>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContentSection({ index, title, description }: { index: number; title: string; description: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
      className="mb-8"
    >
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  )
}
