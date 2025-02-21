import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      img: "/projects/vbucks.ar.webp",
      name: "vbucks.ar",
      description: `Complete Web App for selling Fortnite related products.`,
      github: "",
      demo: "",
      live: "https://vbucks.ar/",
      display: "3x2",
      technologies: ["NextJS", "MongoDB", "TailwindCSS", "shadcn", "Resend"],
    },
    {
      img: "/projects/robux.ar.webp",
      name: "robux.ar",
      description: `Complete Web App with automated Robux instant delivery.`,
      github: "",
      demo: "",
      live: "https://robux.ar/",
      display: "3x2",
      technologies: ["NextJS", "MongoDB", "Rest-API", "rbxcrate"],
    },
    {
      img: "/projects/vip-gaming.net.webp",
      name: "VIP Gaming",
      description: `Complete Web E-Commerce with automated e-mail delivery.`,
      github: "",
      demo: "",
      live: "https://vip-gaming.net",
      display: "3x2",
      technologies: ["NextJS", "MongoDB", "Rest-API", "Resend"],
    },
    {
      img: "/projects/berlingonzalez.shop.webp",
      name: "Berlin Gonzalez Shop",
      description: `Store app with auth, delivery and dashboard.`,
      github: "",
      demo: "",
      live: "https://berlingonzalez.shop",
      display: "3x2",
      technologies: ["NextJS", "MongoDB", "TailwindCSS", "shadcn"],
    },
    {
      img: "/projects/lpcgames.com.webp",
      name: "LPC Store",
      description: `Store app with auth, delivery and dashboard.`,
      github: "",
      demo: "",
      live: "https://lpcgames.com",
      display: "3x2",
      technologies: ["NextJS", "MongoDB", "TailwindCSS", "shadcn"],
    },
    {
      img: "/projects/monarchy.webp",
      name: "Monarchy Store",
      description: `E-commerce for roleplay server of fivem`,
      github: "https://github.com/rusherdv/monarchy-store",
      demo: "",
      live: "",
      display: "2x1",
      technologies: ["React", "PostgreSQL", "NodeJS", "express"],
    },
    {
      img: "/projects/password.webp",
      name: "Password Generator",
      description: `Light website to create a secure password or check how secure is your password.`,
      github: "https://github.com/rusherdv/password-security",
      demo: "https://fastidious-meerkat-69610d.netlify.app",
      live: "",
      display: "1x1",
      technologies: ["HTML", "CSS", "Javascript"],
    },
    {
      img: "/projects/chatify.webp",
      name: "Chatify",
      description: `Real time chat app.`,
      github: "https://github.com/rusherdv/chatify",
      demo: "",
      live: "",
      display: "1x1",
      technologies: ["React", "TailwindCSS", "Firebase"],
    },
    {
      img: "/projects/concessionarie.webp",
      name: "3D Concessionarie",
      description: `Concessionarie to inspect vehicles and change color of the chassis and the wheels.`,
      github: "https://github.com/rusherdv/3d-concessionaire",
      demo: "https://3dconcessionarie.netlify.app",
      live: "",
      display: "2x1",
      technologies: ["React", "ThreeJS", "TailwindCSS", "NextUI"],
    },
    {
      img: "/projects/discord.webp",
      name: "Discord Clon",
      description: `FullStack Discord login clon. Sign up and sign in on discord, confirm email and reset password.`,
      github: "https://github.com/rusherdv/discord-login-clon",
      demo: "",
      live: "",
      display: "2x1",
      technologies: ["React", "NodeJS", "TailwindCSS", "express", "SQL"],
    },
    {
      img: "/projects/simon.webp",
      name: "Simon Game",
      description: `Simple simon says game.`,
      github: "https://github.com/rusherdv/simon-color",
      demo: "https://simoncolorgame.netlify.app",
      live: "",
      display: "1x1",
      technologies: ["HTML", "CSS", "Javascript"],
    },
  ];

  return (
    <div
      id="projects"
      className="w-10/12 container mx-auto xl:w-[1100px] scroll-mt-[10px] min-h-screen"
    >
      <h2 className="text-white font-semibold text-4xl text-center">
        Projects
      </h2>
      <p className="text-gray-400 mt-1 mb-3 text-sm text-center">
        Most recent works
      </p>
      <div className="grid gap-2 lg:gap-5 mt-8 w-full grid-cols-1 lg:grid-cols-3 auto-rows-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative h-fit min-h-[350px] group ${
              project.display === "2x1"
                ? "lg:col-span-2 lg:h-[350px] lg:row-span-1"
                : project.display === "3x1"
                ? "lg:col-span-3 lg:row-span-1 lg:h-[450px]"
                : project.display === "3x2"
                ? "lg:col-span-3 lg:row-span-2 lg:h-[700px]"
                : "hidden lg:block col-span-1 lg:h-[350px]"
            }`}
          >
            <div className="absolute hidden lg:block z-10 opacity-0 lg:group-hover:opacity-100 transition-all text-white lg:bottom-8 lg:left-8 max-lg:mt-4">
              <h3 className="text-3xl lg:text-4xl font-semibold ">
                {project.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                {project.technologies.map((t, index) => (
                  <div
                    key={index}
                    className="text-xs bg-[#1D1D1D] px-2 py-1 rounded-lg"
                  >
                    #{t}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-300 mt-1">
                {project.description}
              </p>
              <div className="flex items-center gap-2 mt-2">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="rounded-sm w-fit gap-2 flex items-center bg-[#1D1D1D] hover:bg-[#141414] transition-all text-white text-xs px-4 py-2"
                  >
                    <svg
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                    >
                      <path
                        fill="currentColor"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      />
                    </svg>
                    View code
                  </Link>
                )}
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="rounded-sm font-semibold w-fit gap-2 flex items-center transition-all hover:bg-[#dbbf43] bg-[#FCDC4D] text-black text-xs px-4 py-2"
                  >
                    <svg
                      className="text-black"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M128 32C92.7 32 64 60.7 64 96l0 256 64 0 0-256 384 0 0 256 64 0 0-256c0-35.3-28.7-64-64-64L128 32zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480l486.4 0c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2L19.2 384z"
                      />
                    </svg>
                    View demo
                  </Link>
                )}
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    className="rounded-sm font-semibold w-fit gap-2 flex items-center bg-transparent transition-all border hover:bg-[#FCDC4D] hover:text-black border-[#FCDC4D] text-white text-xs px-4 py-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Live
                  </Link>
                )}
              </div>
            </div>

            <div className="relative w-full h-[350px] lg:h-full">
              <Image
                fill
                src={project.img}
                alt={project.name}
                className="w-full h-full object-cover rounded-md transition-all hover:cursor-pointer lg:group-hover:opacity-20"
              />
            </div>
            <div className="lg:hidden mt-4 border-b-2 border-gray-800 pb-2">
              <h3 className="text-3xl text-white lg:text-4xl font-semibold ">
                {project.name}
              </h3>
              <p className="text-sm w-full text-gray-300 mt-1">
                {project.description}
              </p>
              <div className="flex flex-col items-center gap-2 mt-2">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="rounded-sm w-full gap-2 flex items-center bg-[#1D1D1D] text-white text-xs px-4 py-2"
                  >
                    <svg
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                    >
                      <path
                        fill="currentColor"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      />
                    </svg>
                    View code
                  </Link>
                )}
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="rounded-sm font-semibold w-full gap-2 flex items-center bg-[#FCDC4D] text-black text-xs px-4 py-2"
                  >
                    <svg
                      className="text-black"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M128 32C92.7 32 64 60.7 64 96l0 256 64 0 0-256 384 0 0 256 64 0 0-256c0-35.3-28.7-64-64-64L128 32zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480l486.4 0c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2L19.2 384z"
                      />
                    </svg>
                    View demo
                  </Link>
                )}
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    className="rounded-sm font-semibold w-full gap-2 flex items-center bg-transparent transition-all border hover:bg-[#FCDC4D] hover:text-black border-[#FCDC4D] text-white text-xs px-4 py-2"
                  >
                    <svg
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"
                      />
                    </svg>
                    View Live
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://github.com/rusherdv?tab=repositories"
        target="_blank"
        className="text-white text-sm text-right w-full mt-4 block hover:underline hover:cursor-pointer"
      >
        View more
      </a>
    </div>
  );
};

export default ProjectsSection;
