"use client";

import {Project2} from "@/components/project2"
import GlobalHorizonsImg from "@/public/Projects/Global-Horizons.png"

export default function GlobalHorizons(){
    return(
        <Project2 
            // title = "Global Horizons Travel Agency"
            title = "GLOBAL HORIZONS TRAVEL SITE"
            year = "[2025]"
            category = "[FRONT END PROJECT]"
            imageSrc = {GlobalHorizonsImg.src}
            imageAlt = "Global Horizons Img"

            challengesTitle="The Challenges Faced"
            challengesIntro="For the Global Horizons platform, the goal was to create an engaging and reliable website for study abroad consultants..."

            challengesList={[
                "Designing a responsive layout for optimal usability across all devices.",
                "Integrating real-time chat and support functionality using Tidio.",
                "Implementing smooth animations without compromising performance.",
                "Using a consistent design system.",
                "Building a robust structure for programs and services.",
                "Styling the application to be functional and visually appealing.",
            ]}

            buildTitle="Build with"
            buildList={[
                "Next.js - React framework",
                "Tailwind CSS - Utility-first CSS framework",
                "TypeScript - For type safety",
                "React - JavaScript library",
                "AOS - animation library",
                "Tidio - Integrated chatbot for real-time support",
            ]}
            
            buttonText="Visit Site"

            liveUrl="https://global-horizons-consultants.vercel.app/"
        />
    );
};