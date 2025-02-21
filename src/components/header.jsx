"use client";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [open, setopen] = useState(false);
  return (
    <div className="animate-slide-in-top animate-duration-1000 h-16 z-50 header w-full flex px-10 justify-between items-center fixed backdrop-blur">
      <p className="text-[#FCDC4D] font-medium">rusher</p>
      <div className="text-sm flex items-center text-white space-x-4 lg:space-x-8 max-sm:hidden">
        <Link
          href="#hero"
          className="relative hover:cursor-pointer w-fit block group"
        >
          Home
          <span className="absolute block h-[2px] bg-[#FCDC4D] w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
        </Link>
        <Link
          href="#about"
          className="relative hover:cursor-pointer w-fit block group"
        >
          About
          <span className="absolute block h-[2px] bg-[#FCDC4D] w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
        </Link>
        <Link
          href="#projects"
          className="relative hover:cursor-pointer w-fit block group "
        >
          Projects
          <span className="absolute block h-[2px] bg-[#FCDC4D] w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
        </Link>
        <Link
          href="#contact"
          className="relative hover:cursor-pointer w-fit block group px-6 py-2 bg-[#FCDC4D] text-black rounded-md hover:bg-transparent border-2 border-[#FCDC4D] hover:text-white transition-all"
        >
          Contact
        </Link>
      </div>
      <Sheet open={open} onOpenChange={setopen}>
        <SheetTrigger className="sm:hidden block">
          <Menu width={30} height={30} className="text-white" />
        </SheetTrigger>
        <SheetContent className="w-screen sm:max-w-[80vw] lg:max-w-[60vw] xl:max-w-[500px] backdrop-blur-lg bg-black/20 border-black text-white">
          <SheetHeader>
            <SheetTitle className="text-2xl text-[#FCDC4D] text-left">
              rusher
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-8 mt-[50px]">
            <Link
              onClick={() => setopen(false)}
              href="#home"
              className="text-2xl"
            >
              Home
            </Link>
            <Link
              onClick={() => setopen(false)}
              href="#about"
              className="text-2xl"
            >
              About
            </Link>
            <Link
              onClick={() => setopen(false)}
              href="#projects"
              className="text-2xl"
            >
              Projects
            </Link>
            <Link
              onClick={() => setopen(false)}
              href="#contact"
              className="text-2xl"
            >
              Contact
            </Link>
          </div>
          <p className="m-auto gap-[3px] flex-1 h-full flex items-center text-sm mt-[120px] justify-center">
            Hosted by<span className="text-[#FCDC4D]">Vercel</span>
          </p>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
