"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Rocket,
  Plus,
  MessageCircle,
  Clock,
  Video,
  Crown,
  Users,
  Calendar,
  Play,
  ArrowRight,
  Zap,
  Target,
  Slack,
} from "lucide-react";
import { LuAlarmClock } from "react-icons/lu";
import { TbBrandTelegram, TbBrandWhatsapp } from "react-icons/tb";
import Gauge from "../global/speedoMeter";
import { LanguageChart } from "../global/langChart";

export default function Component() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      id: 1,
      title: "Interactive Training",
      subtitle: "Real-world communication exercises.",
      author: "Robert Fox",
      bgColor: "bg-gradient-to-br from-pink-400 to-pink-400",
      textColor: "text-white",
      icon: (
        <Rocket className="w-20 h-20 text-white opacity-25 hover:opacity-100 transition-all duration-500 ease-in-out absolute bottom-4 right-4" />
      ),
    },
    {
      id: 2,
      title: "Interactive Digital Tools",
      subtitle: "Avg Response Time:",
      metric: "398",
      unit: "Second",
      status: "Like",
      bgColor: "bg-gradient-to-br from-teal-400 to-cyan-400",
      textColor: "text-white",
      hasChart: true,
    },
    {
      id: 3,
      title: "Balanced practice sessions",
      subtitle: "Vocabulary building, Articulation, and Scripting.",
      description: "Join meeting on Google meet",
      bgColor: "bg-gradient-to-br from-purple-400 to-indigo-600",
      textColor: "text-white",
      hasAvatars: true,
    },
    {
      id: 4,
      title: "Time Management",
      image: "/images/time.png",
      bgColor: "bg-gradient-to-br from-pink-400 to-pink-400",
      textColor: "text-white",
      hasIllustration: true,
    },
    {
      id: 5,
      title: "These langusges have the most speakers",
      description: "Echo Chamber approach for daily practice",
      bgColor: "bg-gradient-to-br from-indigo-500 to-purple-500",
      textColor: "text-white",
      hasStreamIllustration: true,
    },
    {
      id: 6,
      title: "Fluency Reinforcement",

      description: "Echo Chamber approach for daily practice",
      bgColor: "bg-gradient-to-br from-pink-400 to-pink-400",
      textColor: "text-white",
      hasButton: true,
      hasPremiumIllustration: true,
    },
    {
      id: 7,
      title: "Courses",
      bgColor: "bg-gradient-to-br from-teal-400 to-emerald-400",
      textColor: "text-white",
      hasCourseList: true,
    },
  ];

  const courseCategories = [
    "VERZIO – Communicative English ",
    "Dynamation English Program for Students & Entrepreneurs",
    "Foreign Language Courses",
  ];

  return (
    <div className="min-h-[50vh] px-5 w-full  ">
      <div className="w-full ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {/* Workshop Card */}
          <Card
            className={`${cards[0].bgColor} ${cards[0].textColor} p-6 border-0 shadow-lg hover:shadow-xl transition-all group duration-500 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden`}
            // onMouseEnter={() => setHoveredCard(1)}
            // onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative z-10">
              <h3 className="text-lg font-medium mb-1">{cards[0].title}</h3>
              <h2 className="text-2xl font-bold mb-4">{cards[0].subtitle}</h2>
              <p className="text-sm opacity-90">{cards[0].author}</p>
            </div>
            <div
              className={`transition-transform text-6xl duration-700 translate-x-[200px] translate-y-[100px] group-hover:translate-x-[100px] group-hover:translate-y-[70px]  scale-x-[-1]`}
            >
              {cards[0].icon}
            </div>
          </Card>

          {/* Integrations Tools Card */}
          <Card
            className={`${cards[1].bgColor} ${cards[1].textColor} p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden`}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">{cards[1].title}</h3>
              <Plus className="w-6 h-6" />
            </div>
            <div className="flex justify-between items-center">
              <div className="mb-4">
                <p className="text-sm opacity-90 mb-2">{cards[1].subtitle}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">{cards[1].metric}</span>
                  <span className="text-sm opacity-75">{cards[1].status}</span>
                </div>
                <p className="text-xs opacity-75">{cards[1].unit}</p>
              </div>

              {/* Circular Progress */}
              <div className="relative  mb-4">
                <Gauge value={80} />
              </div>
            </div>

            {/* App Icons */}
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-white/10 bg-opacity-20 rounded-full flex items-center justify-center">
                <TbBrandWhatsapp className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-white/10 bg-opacity-20 rounded-full flex items-center justify-center">
                <Slack className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-white/10 bg-opacity-20 rounded-full flex items-center justify-center">
                <TbBrandTelegram className="w-4 h-4" />
              </div>
            </div>
          </Card>

          {/* Upcoming Meeting Card */}
          <Card
            className={`${cards[2].bgColor} ${cards[2].textColor} p-5 border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden`}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-medium">{cards[2].title}</h3>
                <h2 className="text-xl font-bold">{cards[2].subtitle}</h2>
              </div>
              <div className="bg-yellow-400 rounded-full p-2">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
            </div>

            <div className="flex flex-col w-1/2 p-2 md:translate-y-5 bg-white/10 rounded-lg gap-1">
              <p className="text-sm opacity-90 mb-4">{cards[2].description}</p>

              {/* Avatar Group */}
              <div className="flex -space-x-2">
                {["/images/a1.jpg", "/images/a2.jpg", "/images/a3.jpg"].map(
                  (i, ind) => (
                    <div
                      key={i}
                      className={`w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white transition-transform duration-300 ${
                        hoveredCard === 3 ? "scale-110" : ""
                      }`}
                      style={{ animationDelay: `${(ind + 1) * 100}ms` }}
                    >
                      <img
                        src={i}
                        alt="Avatar"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="bg-white/10 p-3 w-fit absolute bottom-6 right-4 rounded-full">
              <LuAlarmClock className="text-white text-3xl opacity-60" />
            </div>
          </Card>

          {/* Time Management Card */}
          <Card
            className={`${cards[3].bgColor} ${cards[3].textColor} p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden`}
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h2 className="text-xl font-bold mb-4">{cards[3].title}</h2>

            {/* Illustration placeholder */}
            <img
              src={cards[3].image}
              alt={cards[3].title}
              className="w-full h-full object-cover"
            />
          </Card>

          {/* Live Stream Card */}
          <Card
            className={`${cards[4].bgColor} ${cards[4].textColor} p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden lg:col-span-2`}
            onMouseEnter={() => setHoveredCard(5)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h2 className="text-2xl font-bold mb-4">{cards[4].title}</h2>

            <LanguageChart />
          </Card>

          {/* Go Premium Card */}
          <Card
            className={`${cards[5].bgColor} ${cards[5].textColor} p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden`}
            onMouseEnter={() => setHoveredCard(6)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h2 className="text-2xl font-bold mb-4">{cards[5].title}</h2>
            <p className="text-sm opacity-90 mb-6">{cards[5].description}</p>

            {/* Premium Illustration */}
            {/* <div className="mb-6">
              <div
                className={`w-20 h-16 bg-white/20 bg-opacity-30 rounded-lg mb-2 transition-transform duration-500 ${
                  hoveredCard === 6 ? "scale-105 rotate-2" : ""
                }`}
              ></div>
              <div className="w-4 h-8 bg-green-400 rounded-full"></div>
            </div> */}

            <Button
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white border border-white border-opacity-30 transition-all duration-300"
              size="sm"
            >
              Get Access
            </Button>

            <Crown className="w-8 h-8 opacity-20 absolute top-4 right-4" />
          </Card>

          {/* Courses Card */}
          <Card
            className={`${cards[6].bgColor} ${cards[6].textColor} p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden`}
            onMouseEnter={() => setHoveredCard(7)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h2 className="text-2xl font-bold mb-6">{cards[6].title}</h2>

            <div className="space-y-3">
              {courseCategories.map((course, index) => (
                <div
                  key={course}
                  className={`flex items-center justify-between p-2 bg-white/20 bg-opacity-10 rounded-lg transition-all duration-300 hover:bg-opacity-20 ${
                    hoveredCard === 7 ? "translate-x-2" : ""
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-sm font-medium">{course}</span>
                  <ArrowRight className="w-4 h-4 opacity-60" />
                </div>
              ))}
            </div>

            <Target className="w-8 h-8 opacity-20 absolute top-4 right-4" />
          </Card>
        </div>
      </div>
    </div>
  );
}
