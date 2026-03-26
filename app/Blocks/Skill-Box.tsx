import Image, { StaticImageData } from "next/image";
import { Reveal } from "@/app/Animations/Reveal";

interface SkillBoxProps {
    img: StaticImageData
    name: string;
    description: string;
}

export default function SkillBox({ img, name, description }: SkillBoxProps){
    return(

    // {/* Logo */}
    <Reveal overlayDirection="up" width="100%">
        <div className="flex flex-col md:flex-row gap-5 md:p-5 items-center bg-[#f36c29] p-2 rounded hover:scale-105 transition-all duration-400 ease-out">
            <Image 
                src={img} 
                alt="Logo" 
                width="10" 
                height="10" 
                className="size-10" 
            />
            <div className="flex flex-col text-white font-inter font-bold md:text-left text-center">
                <h1>{name}</h1>
                <p className="text-[10px] my-2">{description}</p>
            </div>
        </div>
    </Reveal>
    );
};