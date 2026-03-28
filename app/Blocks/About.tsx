"use client";

// Framer-Motion for Custom Animations
import { motion } from "framer-motion";

// BLocks
import { Reveal } from "@/app/Animations/Reveal";

import Image from "next/image";
import ProfileImage from "@/public/Personal-Images/Profile-pic.png";

export default function About() {
    return(
    // <div className="bg-[#F57426] items-center" id="about">
    <div className="bg-linear-to-t from-[#2779A7] to-[#0F2F41] items-center py-10" id="about">
    
    {/* BOTH - LEFT & RIGHT CONTAINER */}
    <div className="justify-evenly flex flex-col-reverse lg:flex-row lg:gap-0 gap-10 w-full items-center relative">

            {/* Right-Content-Container */}
            <div className="w-fit hover:rotate-5 transition-transform duration-500 m-5">

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                {/* <video
                    src="/videos/About-illustration.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    /> */}
                <Image 
                    src={ProfileImage}
                    alt="img"
                    height={400}
                    width={400}
                />
            </motion.div>

            </div>
        
        {/* Left-Container-Container */}
        <div className="flex flex-col justify-evenly w-fit items-center lg:text-left text-center lg:m-0 m-10">
            <Reveal overlayDirection="left" width="100%">
                <h1 className="font-caveat text-white text-[50px] md:text-[100px] my-5">ABOUT ME</h1>
            </Reveal>
        <div>
            <div className="font-inter italic text-white max-w-120 text-[15px]">
                <Reveal overlayDirection="left">
                   My name is Faraz, a Full-Stack Developer passionate about building innovative web solutions. I combine modern design principles with engineering to create high-quality digital experiences.
                </Reveal>

                <Reveal overlayDirection="left">
                    <p className="mt-5">
                        Since starting my journey in web development, I’ve worked hard to refine my skills. I explore cutting-edge tools to stay ahead and deliver practical, impactful results.
                    </p>
                </Reveal>
                <Reveal overlayDirection="left">
                    <p className="mt-5">
                        If you need a custom website, a dynamic application, or a business-driven solution, let’s talk. Together, we can turn your vision into a reality.
                    </p>
                </Reveal>
            </div>
        </div>

        </div>

          {/* <div className="z-100 pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-linear-to-b from-transparent to-[#984217]" /> */}

        </div>
        
        {/* Bottom Shadow/Gradien */}
        {/* <div className="bg-linear-to-t from-transparent to-[#984217] h-12.5"/> */}
    </div>
    );
}