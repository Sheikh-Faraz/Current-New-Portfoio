"use client";

import Image from "next/image";

// Blocks
import { Reveal } from "@/app/Animations/Reveal";

// Socials-Icons
import LinkedInIcon from "@/public/Socials/LinkedIn.png";
import GithubIcon from "@/public/Socials/Github.png";
import XIcon from "@/public/Socials/X-Twitter.png";
import InstagramIcon from "@/public/Socials/Instagram.png";

// Profile-Pic
// import ProfileImage from "@/public/Personal-Images/Hero-Profile-Img.png";

export default function Hero(){
    return(
    <>
        {/* All Container */}
        {/* <div className="bg-[#F57426] w-full overflow-hidden relative" id="#"> */}
        <div className="py-10 bg-linear-to-t from-[#0F2F41] to-[#2779A7] w-full overflow-hidden relative" id="#">

        {/* BOTH - LEFT & RIGHT CONTAINER */}
        <div className="flex flex-col min-[844px]:flex-row min-[844px]:gap-0 gap-10 justify-evenly items-center">

        {/* Left-Content-Container */}
        <div className="w-fit ">

        {/* Text */}
        <div className="flex flex-col w-fit">

            <Reveal overlayDirection="left">
            <h1 className="font-caveat text-white text-[100px] lg:text-[150px]">FARAZ.</h1>
            </Reveal>
            
            <h2 className="font-caveat text-white text-[30px] lg:text-[50px]">Full Stack Web Developer.</h2>

            {/* Logos/Socials-Icons */}
            <div className="flex justify-between items-center mt-10">  

            <a href="https://www.linkedin.com/in/sheikh-faraz-7b7b92356" target="_blank">
                {/* <div className="bg-[#f36c29] p-2 rounded-full hover:bg-[#fbc6b0] cursor-pointer hover:scale-110 transition-all duration-400 ease-out"> */}
                <div className="bg-[#0F2F41] p-2 rounded-full hover:bg-[#26485b] cursor-pointer hover:scale-110 transition-all duration-400 ease-out">
                <Image src={LinkedInIcon} alt="LinkedIn" className="size-7 lg:size-8.75" />
                </div>
            </a>

            <a href="https://github.com/Sheikh-Faraz" target="_blank">
                {/* <div className="bg-[#f36c29] p-2 rounded-full hover:bg-[#fbc6b0] cursor-pointer hover:scale-110 transition-all duration-400 ease-out"> */}
                <div className="bg-[#0F2F41] p-2 rounded-full hover:bg-[#26485b] cursor-pointer hover:scale-110 transition-all duration-400 ease-out">
                <Image src={GithubIcon} alt="Github" className="size-7 lg:size-8.75" />
                </div>
            </a>

            <a href="https://x.com/SFaraz9485" target="_blank">
                {/* <div className="bg-[#f36c29] p-2 rounded-full hover:bg-[#fbc6b0] cursor-pointer hover:scale-110 transition-all duration-400 ease-out"> */}
                <div className="bg-[#0F2F41] p-2 rounded-full hover:bg-[#26485b] cursor-pointer hover:scale-110 transition-all duration-400 ease-out">
                <Image src={XIcon} alt="X" className="size-7 lg:size-8.75" />
                </div>
            </a>

            <a href="https://www.instagram.com/sheikhfaraz82" target="_blank">
                {/* <div className="bg-[#f36c29] p-2 rounded-full hover:bg-[#fbc6b0] cursor-pointer hover:scale-110 transition-all duration-400 ease-out"> */}
                <div className="bg-[#0F2F41] p-2 rounded-full hover:bg-[#26485b] cursor-pointer hover:scale-110 transition-all duration-400 ease-out">
                <Image src={InstagramIcon} alt="Instagram" className="size-7 lg:size-8.75" />
                </div>
            </a>
                
            </div>

        </div>

        </div>  

        {/* Right-Content-Container  IMAGE */}
        {/* <div className="mx-10 md:mx-0 w-fit rounded-t-full overflow-hidden"> */}
        <div className="max-w-md rounded-t-full m-10 overflow-hidden">
        <Reveal overlayDirection="up">
            {/* <Image src={ProfileImage} alt="Profile-Pic" className="w-full h-auto" /> */}
            <video
                src="/videos/blue-coding.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
            />
        </Reveal>
        </div>

        </div>

        {/* <div className="z-100 pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-linear-to-b from-transparent to-[#984217]" /> */}
        </div>

        {/* Bottom Shadow */}
        {/* <div className="  bg-linear-to-t from-[#F57426] to-[#984217] h-12.5"/> */}

    </>
    );
};