"use client";

import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import { Reveal } from "@/app/Animations/Reveal";

import { Button } from "@/components/ui/button";

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";



interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  className?: string;
  logo?: {
    alt: string;
    title: string;
    className?: string;
  };
  menu?: MenuItem[];
}

const Navbar = ({
  logo = {
    alt: "logo",
    title: "SF.",
  },
  menu = [
    { title: "About", url: "/#about" },
    { title: "Skills", url: "/#skills" },
    { title: "Projects", url: "/#projects" },
    { title: "Contact", url: "/#contact" },
  ],
  className,
}: Navbar1Props) => {

  return (
    <section className={cn("py-4", className)}>
      <div className="text-white font-caveat my-5 w-full">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-evenly lg:flex">
          <div className="flex items-center gap-6">
            <div className="flex items-center">

              <NavigationMenu>
                <NavigationMenuList className="gap-20">
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>

            </div>
          </div>

          <div>

            {/* Logo */}
            <a href={"/"} className="flex items-center gap-2">
            <Reveal overlayDirection="down" width="100%">
                <span 
                  // className="text-[30px] font-semibold tracking-tighter font-caveat px-2 hover:text-[#fbc6b0] cursor-pointer hover:scale-110 transition-all duration-400 ease-out"
                  className="text-[30px] font-semibold tracking-tighter font-caveat px-2 hover:text-[#26485b] cursor-pointer hover:scale-110 transition-all duration-400 ease-out"
                >
                  {logo.title}
                </span>
              </Reveal>
            </a>

          </div>

        </nav>

        {/* ================= MOBILE ================= */}         
         <div className="flex lg:hidden justify-end pr-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white/20 transition"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>

            <SheetContent className="text-white bg-white/10 backdrop-blur-2xl border-white/20 z-999">

              <SheetHeader>
                <SheetTitle className="text-white text-xl font-caveat mt-5">
                  SF.
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-10 mt-10 px-2 font-caveat">

                {menu.map((item, i) => (

                  // For closing when click on mobile version
                  <SheetClose asChild key={item.title}>  

                  <motion.button
                    key={item.title}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.4,
                    }}
                    className="text-left text-xl font-medium group relative"
                  >
                    <a href={item.url}>
                       {item.title}
                        {/* <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#fbc6b0] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" /> */}
                        <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#26485b] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                    </a>
                  </motion.button>
                  </SheetClose>
                ))}

              </div>

            </SheetContent>
          </Sheet>

        </div>

      </div>
    </section>
  );
};



const renderMenuItem = ( item: MenuItem ) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>

      <Reveal overlayDirection="down">

      <NavigationMenuLink
        href={item.url}
        // className="relative group/nav inline-flex h-10 w-max items-center justify-center rounded-md py-2 text-[30px] font-medium hover:text-[#fbc6b0] cursor-pointer transition-colors duration-300 ease-out"
        className="relative group/nav inline-flex h-10 w-max items-center justify-center rounded-md py-2 text-[30px] font-medium hover:text-[#26485b] cursor-pointer transition-colors duration-300 ease-out"
        >

        {item.title}
        {/* <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#fbc6b0] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover/nav:scale-x-100" /> */}
        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#ffffff] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover/nav:scale-x-100" />

      </NavigationMenuLink>
      </Reveal>

    </NavigationMenuItem>
  );
};


export { Navbar };







