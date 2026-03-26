import Image from "next/image";

// Blocks
import { Reveal } from "@/app/Animations/Reveal";
import SkillBox from "@/app/Blocks/Skill-Box";

// Skills Logos
import Html from "@/public/Skills/html.png"
import Css from "@/public/Skills/css.png"
import JavaScript from "@/public/Skills/javascript.png"
import TailwindCSS from "@/public/Skills/tailwind.png"
import TypeScript from "@/public/Skills/typescript.png"
import Shadcn from "@/public/Skills/shadcn.png"
import NodeJS from "@/public/Skills/node.png"
import ExpressJS from "@/public/Skills/express.png"
import NextJS from "@/public/Skills/nextjs.png"
import ReactJS from "@/public/Skills/react.png"
import MongoDB from "@/public/Skills/mongodb.png"
import Mongoose from "@/public/Skills/mongoose.png"
import VSCode from "@/public/Skills/vscode.png"
import Github from "@/public/Skills/github.png"


export default function Skills() {
    return(
    <div className="bg-[#F57426] items-center flex px-10 pt-10 pb-20 " id="skills">
    
    {/* BOTH - LEFT & RIGHT CONTAINER */}
    <div className="justify-evenly flex flex-col gap-10 w-full items-center">
        
        {/* Left-Container-Container */}
        <div className="flex flex-col justify-evenly w-full text-center items-center mb-10">

            <Reveal overlayDirection="left" width="100%">
                <h1 className="font-caveat text-white text-[50px] md:text-[100px] my-5">TOOLS & STACK</h1>
            </Reveal>

            <Reveal overlayDirection="left">
                <p className="font-inter italic text-white text-[15px]">
                    A comprehensive overview of my technical skills, proficiency levels, and the tools I use to create exceptional digital experiences.
                </p>
            </Reveal>

        </div>

        {/* Right-Content-Container */}
        <div className="h-fit w-fit flex gap-10 lg:gap-20 items-center">

        {/* First-TWO-COLS & ONE Full Width */}
        <div className="flex flex-col gap-10">

        {/* 2nd & 3rd Cols */}
        <div className="flex flex-col gap-10 lg:flex-row">

        {/* First-Col */}
        <div className="flex flex-col gap-10">

            {/* Logo-1 */}
            <SkillBox img={Html} name="HTML 5" description="MARKUP LANGUAGE"/>

            {/* Logo-3 */}
            <SkillBox img={JavaScript} name="JavaScript" description="PROGRAMMING LANGUAGE"/>
        
            {/* Logo-5 */}
            <SkillBox img={ReactJS} name="React" description="FRONTEND LIBRARY"/>

        </div>

       {/* Second-Col */}
        <div className="flex flex-col gap-10">

            {/* Logo-2 */}
            <SkillBox img={Css} name="CSS 3" description="STYLESHEET LANGUAGE"/>

            {/* Logo-4 */}
            <SkillBox img={TypeScript} name="TypeScript" description="PROGRAMMING LANGUAGE"/>

            {/* Logo-6 */}
            <SkillBox img={NextJS} name="Next.js" description="FULL-STACK FRAMEWORK"/>

        </div>

        </div>

            {/* Logo */}
             <Reveal overlayDirection="up" width="100%">
                    <div className="flex flex-col justify-center md:flex-row gap-5 md:p-5 items-center bg-[#f36c29] p-2 rounded hover:scale-105 transition-all duration-400 ease-out">
                        <Image 
                            src={VSCode} 
                            alt="Logo" 
                            width="10" 
                            height="10" 
                            className="size-10" 
                        />
                        <div className="flex flex-col text-white font-inter font-bold md:text-left text-center">
                            <h1>VS Code</h1>
                            <p className="text-[10px] my-2">CODE EDITOR</p>
                        </div>
                    </div>
                </Reveal>

        </div>


        {/* Second-TWO-COLS & ONE Full Width */}
        <div className="flex flex-col gap-10">

        {/* 3rd & 4th Cols */}
        <div className="flex flex-col gap-10 lg:flex-row">

        {/* Third-Col */}
        <div className="flex flex-col gap-10">
            
            {/* Logo-1 */}
            <SkillBox img={Shadcn} name="Shadcn UI" description="COMPONENT LIBRARY"/>

            {/* Logo-2 */}
            <SkillBox img={NodeJS} name="Node.js" description="BACKEND RUNTIME ENVIRONMENT"/>

            {/* Logo-4 */}
            <SkillBox img={MongoDB} name="MongoDB" description="NO-SQL DATABASE"/>

        </div>

        {/* Fourth-Col */}
        <div className="flex flex-col gap-10">

            {/* Logo-6 */}
            <SkillBox img={TailwindCSS} name="Tailwind CSS" description="UTILITY-FIRST CSS FRAMEWORK"/>

            {/* Logo-3 */}
            <SkillBox img={ExpressJS} name="Express.js" description="BACKEND FRAMEWORK"/>

            {/* Logo-5 */}
            <SkillBox img={Mongoose} name="Mongoose" description="ODM LIBRARY"/>

        </div>

        </div>

            {/* Logo */}
            <Reveal overlayDirection="up" width="100%">
                    <div className="flex flex-col justify-center md:flex-row gap-5 md:p-5 items-center bg-[#f36c29] p-2 rounded hover:scale-105 transition-all duration-400 ease-out">
                        <Image 
                            src={Github} 
                            alt="Logo" 
                            width="10" 
                            height="10" 
                            className="size-10" 
                        />
                        <div className="flex flex-col text-white font-inter font-bold md:text-left text-center">
                            <h1>Github</h1>
                            <p className="text-[10px] my-2">VERSION CONTROL & COLLABORATION</p>
                        </div>
                    </div>
                </Reveal>

        </div>

        </div>

        </div>
    </div>
    );
}