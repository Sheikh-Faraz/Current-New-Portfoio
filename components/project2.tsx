"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Project2Props {
  title: string;
  year: string;
  category: string;
  imageSrc: string;
  imageAlt: string;

  // NEW STRUCTURED CONTENT
  challengesTitle: string;
  challengesIntro: string;
  challengesList: string[];

  buildTitle: string;
  buildList: string[];

  buttonText: string;

  liveUrl?: string;

  className?: string;
}

const Project2 = ({
  title = "DIGITAL",
  year = "[2024]",
  category = "[BRAND IDENTITY]",
  imageSrc = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/artistic-portrait-glitch-yqp6z.png",
  imageAlt = "Creative workspace",

  challengesTitle = "The Challenges Faced",
  challengesIntro = "For the Global Horizons platform, the goal was to create an engaging and reliable website...",
  challengesList = [],

  buildTitle = "Build with",
  buildList = [],

  buttonText = "Visit Site",

  liveUrl = "https://your-live-project.com",

  className,

}: Project2Props) => {

  return (
    // <section className={cn("py-24 bg-[#FE6E26]", className)}>
    <section className={cn("py-24 bg-linear-to-t from-[#0F2F41] to-[#2779A7]", className)}>
      <div className="px-6 md:px-10 text-white">

        {/* ===== HEADER ===== */}
        <div className="py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* LEFT */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className=" text-5xl md:text-7xl lg:text-8xl leading-none font-light tracking-tight"
            >
              {title}
            </motion.h1>

            <div className="mt-6 flex gap-10 text-sm tracking-wider uppercase">
              <div>
                <span className="block text-white/70">Year</span>
                <span>{year}</span>
              </div>
              <div>
                <span className="block text-white/70">Category</span>
                <span>{category}</span>
              </div>
            </div>
          </div>

          {/* RIGHT BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              // className="group border-white text-black hover:bg-white hover:text-[#60666e] transition"
              className="group border-white text-black hover:bg-[#0F2F41] hover:text-white transition duration-400 outline-none"
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                {buttonText}
              </a>
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

        </div>

        {/* ===== IMAGE ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-xl"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={2000}
            height={2000}
            className="w-full h-full transition duration-700 hover:scale-105"
          />
          {/* <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover transition duration-700 hover:scale-105"
          /> */}
        </motion.div>

        {/* ===== DESCRIPTION ===== */}
        <div className="mx-auto max-w-5xl py-16 space-y-12">

          {/* Challenges */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-3xl font-semibold mb-4"
            >
              {challengesTitle}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-white/80 mb-6 leading-relaxed"
            >
              {challengesIntro}
            </motion.p>

            <ul className="list-disc pl-5 space-y-2 text-white/80">
              {challengesList.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Build With */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-3xl font-semibold mb-4"
            >
              {buildTitle}
            </motion.h2>

            <ul className="list-disc pl-5 space-y-2 text-white/80">
              {buildList.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export { Project2 };