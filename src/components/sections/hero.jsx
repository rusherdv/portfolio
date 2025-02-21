import { Button } from "../ui/button";
import { Github, Mail } from "lucide-react";
import ParticlesComponent from "../particles";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="min-h-screen flex flex-col justify-center relative max-sm:w-full max-sm:items-center"
    >
      <ParticlesComponent />
      <div className="container mx-auto xl:w-[1100px] flex items-center justify-between">
        <div className="animate-slide-in-left animate-duration-1000 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
          <p className="text-3xl sm:-mb-8 w-full md:text-left text-center font-semibold text-[#FCDC4D]">
            Hey there!, I&#39;m-
          </p>
          <h2 className="text-[120px] sm:h-[150px] w-full font-extrabold text-white md:text-left text-center -ml-1 max-sm:text-7xl">
            Rusher
          </h2>
          <div className="flex text-2xl font-semibold max-md:mx-auto md:text-left text-center w-8/12 max-sm:w-10/12 max-sm:text-lg">
            <h1 className="text-gray-400">
              <span className="text-white">Software Developer.</span> A
              self-taught programmer eager to work and learn more.
            </h1>
          </div>
          <div className="flex justify-between sm:w-[205px] gap-2 mt-2">
            <Link
              href="https://github.com/rusherdv"
              target="_blank"
              className="rounded-md flex items-center hover:bg-[#1D1D1D]/70 px-5 h-10 gap-2 text-sm font-semibold bg-[#1D1D1D] text-white"
            >
              <Github className="text-[#FCDC4D]" width={20} />
              Github
            </Link>
            <Link
              href="mailto:development093@gmail.com"
              target="_blank"
              className="rounded-md flex items-center px-5 h-10 gap-2 text-sm font-semibold bg-transparent hover:bg-[#1D1D1D] border-2 border-[#1D1D1D] text-white"
            >
              <Mail className="text-[#FCDC4D]" width={20} />
              Email
            </Link>
          </div>
        </div>
        <Image
          alt="rusherdv_"
          width={200}
          height={200}
          className="rounded-full animate-duration-1000 animate-slide-in-right opacity-90 z-50 hidden md:block"
          src="/profile.gif"
        />
      </div>
      <div className="w-full absolute bottom-5 flex justify-center animate-bouncing animate-iteration-count-infinite animate-duration-1000">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="25"
          width="25"
          viewBox="0 0 512 512"
        >
          <path
            fill="#fcdc4d"
            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
