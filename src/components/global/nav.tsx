"use client";
import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { CiSearch } from "react-icons/ci";
import { motion, useScroll, useTransform } from "framer-motion";

const Nav = () => {
  const { scrollY } = useScroll();
  const scaleX = useTransform(scrollY, [0, 200], [1.01, 0.95]);
  const width = useTransform(scrollY, [0, 200], ["100%", "95%"]);
  return (
    <div className="w-full sticky top-0 z-50 md:px-15 px-5 py-5 flex justify-center items-center">
      <motion.div
        style={{ width }}
        className="w-full md:px-10 px-5 py-5 backdrop-blur-2xl bg-gray-200/80 flex justify-between items-center rounded-xl"
      >
        <div className="flex items-center gap-20">
          <h1 className="text-2xl flex items-center gap-2 font-bold uppercase text-primary">
            <img src="/images/logo2.png" alt="Verzio" className="w-10 h-10" />
            Verzio
          </h1>
          {/* <div className="hidden md:flex text-sm font-medium text-gray-700 justify-center items-center gap-5">
            <Link className="text-primary" href="/">Home</Link>
            <Link className="pointer-events-none opacity-50" href="/">About</Link>
            <Link className="pointer-events-none opacity-50" href="/">
              Contact
            </Link>
            <Link className="pointer-events-none opacity-50" href="/">Blog</Link>
          </div> */}
        </div>

        <div className="flex justify-center items-center gap-5">
          <div className="md:flex hidden relative justify-center items-center gap-2">
            <Input className="w-full" type="text" placeholder="Search" />
            <CiSearch className="text-gray-500 absolute right-3" />
          </div>
          <Button ><a href="#contact">Try for free</a></Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Nav;
