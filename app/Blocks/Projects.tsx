"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from 'lenis';

// Blocks
import { Reveal } from "@/app/Animations/Reveal";
import Button from "@/app/Blocks/CustomButton";

// Projects-Images
import LinkUpProject from "@/public/Projects/Linkup.png";
import GlobalHorizonsProject from "@/public/Projects/Global-Horizons.png";


export default function Projects() {

  useEffect(() => {


  // Creates a new instance of Lenis (smooth scroll library).
    const lenis = new Lenis({

      smoothWheel: true,  // Makes mouse wheel scrolling smoother.

    });


  // Defines a function called raf (request animation frame loop).

    function raf(time: number) {  // time = timestamp automatically provided by browser.

      lenis.raf(time); // Updates Lenis on every frame. This is what keeps the smooth scrolling running.

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf); // Tells the browser: “Run raf again on the next frame”. 
                                // This creates a loop (60fps animation loop).
                                // Starts the loop for the first time.

  }, []);

  return (
    // <main className="relative bg-[#F57426] px-10" id="projects">
    <main className="relative bg-linear-to-t from-[#2779A7] to-[#0F2F41] px-10 pb-15" id="projects">

      <div className="flex flex-col py-15 text-center justify-center items-center w-full">
      <Reveal overlayDirection="up" width="100%">
        <h1 className="font-caveat text-white text-[50px] md:text-[100px] my-5 w-full">
          MY PROJECTS
        </h1>
      </Reveal>

      <Reveal overlayDirection="up">
        <p className="font-inter italic text-white text-[15px]">
          Here are some of my recent projects showcasing my skills and experience.
        </p>
      </Reveal>
      </div>


      <Section1 />
      <Section2 />

      {/* <Section3 /> */}

    </main>
  );
}




// 🔴 SECTION 1 (same style as others: image + fade-up text)

const Section1 = () => {

  const ref = useRef(null);  // Creates a reference to the DOM element. Used to track scroll position of this section.


  // Tracks how much this section is visible in the viewport.

  const { scrollYProgress } = useScroll({  // scrollYProgress
                                           // - Value from 0 → 1
                                           // - 0 = not visible
                                           // - 1 = fully reached target point

    target: ref,

    offset: ["start end", "center center"], // Animation starts when:
                                            // - section starts entering viewport
                                            // Ends when:
                                            // - section reaches center of screen

  });


  // Maps scroll progress to opacity. 👉 Fade-in effect.
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]); // When scroll goes:
                                                                 // 0 → 1
                                                                 // opacity goes 0 → 1

  // Moves element vertically. Creates slide-up effect.                                                                //  
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]); // Starts at y = 50px (below)
                                                            // Ends at y = 0 (original position)


  return (
    // <section ref={ref} className="h-[110vh] sticky top-0 z-10">
      // <div className="relative w-full h-full">
    <section ref={ref} className="h-[110vh] sticky top-0 z-10 flex items-center justify-center rounded-md bg-[#26485b]">
      <div className="relative w-[97%] h-[95%] rounded-3xl overflow-hidden shadow-xl">

        <Image
          src={LinkUpProject}
          alt="img"
          fill
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* text */}
        {/* motion.div = animated div (Framer Motion). */}
        <motion.div   //Applies: dynamic opacity, dynamic vertical movement
          style={{ opacity, y }}
          className="absolute inset-0 flex flex-col text-center justify-center items-center text-white text-[20px]"
        >
            FULL-STACK PROJECT

            <div className="text-[clamp(25px,40px,80px)]">Link Up</div>
            <Button text="View this project" to="/LinkUp" />
        </motion.div>
        
      </div>
    </section>
  );
};


// 🟠 SECTION 2
const Section2 = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    // <section ref={ref} className="h-[110vh] sticky top-0 z-20">
      // <div className="relative w-full h-full">
    <section ref={ref} className="h-[110vh] sticky top-0 z-10 flex items-center justify-center rounded-md bg-[#26485b]">
      <div className="relative w-[97%] h-[95%] rounded-3xl overflow-hidden shadow-xl">
        <Image 
          src={GlobalHorizonsProject} 
          alt="img" 
          fill 
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* text */}
        <motion.div
          style={{ opacity, y }}
          className="absolute inset-0 flex flex-col justify-center text-center items-center text-white text-[20px]"
        >
          FRONT-END PROJECT
          <div className="text-[clamp(25px,40px,80px)]">Global Horizons</div>
            <Button text="View this project" to="/Global-Horizons" />
        </motion.div>
      </div>
    </section>
  );
};



// 🟡 SECTION 3 - FOR LATER IF NEED JUST IN CASE
// const Section3 = () => {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "center center"],
//   });

//   const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
//   const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

//   return (
//     <section ref={ref} className="h-screen sticky top-0 z-30">
//       <div className="relative w-full h-full">
//         <Image src={ProjectImgThree} alt="img" fill className="object-cover" />

//         <div className="absolute inset-0 bg-black/40" />

//         {/* text */}
//         <motion.div
//           style={{ opacity, y }}
//           className="absolute inset-0 flex flex-col items-center justify-center text-white text-[20px]"
//         >
//           NEXUS CREATIVE
//           <div className="text-[100px]">Deserted Frontiers</div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };