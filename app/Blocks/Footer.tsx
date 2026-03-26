import Image from "next/image";

// Reveal Animation
import { Reveal } from "@/app/Animations/Reveal";

// Social-Icons
import LinkedInIcon from "@/public/Socials/LinkedIn.png";
import GithubIcon from "@/public/Socials/Github.png";
import XIcon from "@/public/Socials/X-Twitter.png";
import InstagramIcon from "@/public/Socials/Instagram.png";

export default function Footer() {
    return(
    <div className=" bg-linear-to-t from-[#984217] to-[#FE6E26] items-center flex flex-col " id="footer">
    
    {/* BOTH - LEFT & RIGHT CONTAINER */}
        
        {/* Left-Container-Container */}
        <div className="flex flex-col md:flex-row justify-evenly w-full h-full mt-30 items-center">

        <div className="flex flex-col items-center md:items-start">

            <Reveal overlayDirection="left">
                <h1 className="font-caveat text-white text-[30px] md:text-[50px]">Connect with Me.</h1>
            </Reveal>

            <Reveal overlayDirection="left">
                <p className="mt-5 text-white font-caveat text-[15px] md:text-[25px]">No commitments. Just a quick chat to see if we click.</p>
            </Reveal>

        </div>

        <div className="flex flex-col text-white items-end w-fit my-10">

           {/* Logo-1 */}
            <Reveal overlayDirection="left">
                <div className="flex gap-5 items-center p-3">
                    <p className="text-[15px] md:text-[20px] font-bold font-caveat">LinkedIn</p>    
                    <a href="https://www.linkedin.com/in/sheikh-faraz-7b7b92356" target="_blank">
                        <div className="bg-[#f36c29] p-2 rounded-full hover:bg-[#fbc6b0] cursor-pointer hover:scale-110 transition-all duration-400 ease-out">
                            <Image src={LinkedInIcon} alt="LinkedIn" className="size-8.75" />
                        </div>
                    </a>
                </div>
            </Reveal>

           {/* Logo-2 */}
           <Reveal overlayDirection="left">
                <div className="flex gap-5 items-center p-3">
                    <p className="text-[15px] md:text-[20px] font-bold font-caveat">Github</p>    
                    <a href="https://github.com/Sheikh-Faraz" target="_blank">
                        <div className="bg-[#f36c29] p-2 rounded-full hover:bg-[#fbc6b0] cursor-pointer hover:scale-110 transition-all duration-400 ease-out">
                            <Image src={GithubIcon} alt="Github" className="size-8.75" />
                        </div>
                    </a>
                </div>
           </Reveal>

           {/* Logo-3 */}
           <Reveal overlayDirection="left">
                <div className="flex gap-5 items-center p-3">
                    <p className="text-[15px] md:text-[20px] font-bold font-caveat">X / Twitter</p>    
                    <a href="https://x.com/SFaraz9485" target="_blank">
                        <div className="bg-[#f36c29] p-2 rounded-full hover:bg-[#fbc6b0] cursor-pointer hover:scale-110 transition-all duration-400 ease-out">
                            <Image src={XIcon} alt="X / Twitter" className="size-8.75" />
                        </div>
                    </a>
                </div>
           </Reveal>

           {/* Logo-4 */}
           <Reveal overlayDirection="left">
                <div className="flex gap-5 items-center p-3">
                    <p className="text-[15px] md:text-[20px] font-bold font-caveat">Instagram</p>    
                    <a href="https://www.instagram.com/sheikhfaraz82" target="_blank">
                        <div className="bg-[#f36c29] p-2 rounded-full hover:bg-[#fbc6b0] cursor-pointer hover:scale-110 transition-all duration-400 ease-out">
                            <Image src={InstagramIcon} alt="Instagram" className="size-8.75"/>
                        </div>
                    </a>
                </div>
           </Reveal>

        </div>

        </div>

        <Reveal overlayDirection="up">
            <p className="font-caveat text-[clamp(80px,20vw,350px)] text-white w-full text-center">
                FARAZ.
            </p>
        </Reveal>

    </div>

    );
}