import React from "react";
import { MarqueeDemo } from "../marquee-component";
import Image from "next/image";

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
      <div className="mt-6 flex justify-center items-start md:justify-between">
        <div className="flex w-11/12 md:w-8/12 flex-col items-start justify-center">
          <div className="flex flex-col text-gray-200 text-sm gap-2">
            <p className="max-md:text-center">
              My online name is <span className="text-[#FCDC4D]">Rusher</span>,
              and I’m a software developer from Argentina. I’m 20 years old and
              started programming when I was 14, beginning as a hobby that soon
              grew into a true passion. Today, coding is what drives me to face
              new challenges and continuously learn.
            </p>
            <p className="max-md:text-center">
              In web development, I’m skilled in technologies like JavaScript,
              CSS, HTML, and React, allowing me to create dynamic and engaging
              user interfaces. On the backend, I work with Node.js and databases
              such as MySQL and PostgreSQL. I’m proficient in version control
              with Git and use Tailwind CSS for efficient styling. Recently,
              I’ve also learned Next.js, which I now use frequently to elevate
              my projects. With experience in Python, I have a well-rounded
              approach to building robust, efficient applications.
            </p>
            <p className="max-md:text-center">
              This combination of skills, along with my dedication, enables me
              to adapt to a wide range of projects, always striving for
              innovative and effective solutions.
            </p>
          </div>
        </div>
        <div className="w-fit flex-col hidden md:flex items-start justify-center">
          <div className="flex gap-2 items-center text-white">
            <div className="bg-[#1D1D1D]/70 flex items-center justify-center rounded-sm w-16 h-16">
              <Image
                alt="Youtube"
                src="/icons/youtube.webp"
                className="px-2"
                width={150}
                height={150}
              />
            </div>
            <div className="flex flex-col w-fit">
              <p className="w-fit text-sm">YouTube</p>
              <p className="w-fit font-extralight text-gray-200 text-sm">
                October 10, 2020 - March 10, 2021
              </p>
              <p className="w-fit text-gray-400 text-xs">LUA, HTML, CSS, SQL</p>
            </div>
          </div>
          <div className="ml-[32px] w-[2px] bg-[#1D1D1D] h-[50px]" />
          <div className="flex gap-2 items-center text-white">
            <div className="bg-[#1D1D1D]/70 flex items-center justify-center rounded-sm w-16 h-16">
              <Image
                alt="Udemy"
                src="/icons/udemy.png"
                width={150}
                height={150}
              />
            </div>
            <div className="flex flex-col w-fit">
              <p className="w-fit text-sm">Udemy</p>
              <p className="w-fit font-extralight text-gray-200 text-sm">
                January 1, 2023 - April 12, 2023
              </p>
              <p className="w-fit text-gray-400 text-xs">
                Javascript, React, NodeJS
              </p>
            </div>
          </div>
          <div className="ml-[32px] w-[2px] bg-[#1D1D1D] h-[50px]" />
          <div className="flex gap-2 items-center text-white">
            <div className="bg-[#1D1D1D]/70 flex items-center justify-center rounded-sm w-16 h-16">
              <Image
                alt="Youtube"
                src="/icons/youtube.webp"
                className="px-2"
                width={150}
                height={150}
              />
            </div>
            <div className="flex flex-col w-fit">
              <p className="w-fit text-sm">YouTube</p>
              <p className="w-fit font-extralight text-gray-200 text-sm">
                May 1, 2024 - October 10, 2024
              </p>
              <p className="w-fit text-gray-400 text-xs">
                NextJS, MongoDB, Git
              </p>
            </div>
          </div>
        </div>
      </div>
      <MarqueeDemo />
    </div>
  );
};

export default AboutSection;
