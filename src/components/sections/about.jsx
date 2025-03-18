import React from "react";
import { MarqueeDemo } from "../marquee-component";
import Link from "next/link";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center container mx-auto xl:w-[1100px] justify-center min-h-screen"
    >
      <h2 className="text-white font-semibold text-4xl text-center">
        About Me
      </h2>
      <p className="text-gray-400 mt-1 mb-3 text-sm text-center">
        Skills & Journey
      </p>
      <div className="mt-6 flex justify-center items-center ">
        <div className="flex flex-col text-gray-200 text-sm gap-2 max-w-3xl">
          <p className="max-md:text-center">
            My name is <span className="text-[#FCDC4D]">Rusher</span>, and I am
            a software developer from Argentina. I started programming at the
            age of 14, turning a hobby into a true passion. Today, I specialize
            in web development and digital solutions.
          </p>
          <p className="max-md:text-center">
            I have strong skills in creating websites, applications, and digital
            projects, with experience in both frontend and backend development.
            My expertise allows me to design efficient, scalable, and
            user-friendly solutions tailored to different needs.
          </p>
          <p className="max-md:text-center">
            In March 2025, I co-founded{" "}
            <span className="text-[#FCDC4D] hover:cursor-pointer hover:underline ">
              <Link target="_blank" href="https://audens.ar/">
                Audens Solutions
              </Link>
            </span>
            , a web development and digital solutions agency, where I serve as
            the Head of Development. My focus is on delivering innovative and
            high-quality solutions, always adapting to new challenges with
            professionalism and commitment.
          </p>
        </div>
      </div>
      <MarqueeDemo />
    </div>
  );
};

export default AboutSection;
