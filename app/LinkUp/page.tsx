"use client";

import {Project2} from "@/components/project2"
import LinkUpImg from "@/public/Projects/Linkup.png"

export default function LinkUp(){
    return(
        <Project2 
            // title = "LinkUp Chat App"
            title = "LINKUP CHAT APP"
            year = "[2026]"
            category = "[FULL STACK PROJECT]"
            imageSrc = {LinkUpImg.src}
            imageAlt = "LInkUp Img"

            challengesTitle="The Challenges Faced"
            challengesIntro="For the LinkUp project, the goal was to build a real-time chat application using modern web technologies. The aim was to create an intuitive, responsive, and secure platform for seamless communication while maintaining performance and scalability."

            challengesList={[
                "Designing a responsive layout for optimal usability across all devices.",
                "Building secure authentication to protect user privacy.",
                "Implementing a dynamic chat interface that supports individual conversations.",
                "Using a consistent design system.",
                "Managing relationships between users and chat threads with a scalable database.",
                "Styling the application to be both functional and visually appealing.",
            ]}

            buildTitle="Build with"
            buildList={[
                "Next.js - React framework",
                "Tailwind CSS - Utility-first CSS framework",
                "TypeScript - For type safety",
                "React - JavaScript library",
                "NextAuth - Authentication",
                "shadcn/ui - Reusable component library",
            ]}

            buttonText="Visit Site"

            liveUrl="https://link-up-next-js-full-stack.vercel.app/"
        />
    );
};