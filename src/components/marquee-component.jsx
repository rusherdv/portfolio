import Image from "next/image";
import Marquee from "./ui/marquee";

const technologies = [
  {
    name: "HTML",
    img: "/icons/html.webp",
  },
  {
    name: "CSS",
    img: "/icons/css.webp",
  },
  {
    name: "Javascript",
    img: "/icons/javascript.webp",
  },
  { name: "Tailwind", img: "/icons/tailwind.webp" },
  {
    name: "React",
    img: "/icons/react.webp",
  },
  {
    name: "MySQL",
    img: "/icons/mysql.png",
  },
  {
    name: "NodeJS",
    img: "/icons/nodejs.webp",
  },
  {
    name: "Python",
    img: "/icons/python.webp",
  },
  {
    name: "NextUI",
    img: "/icons/nextui.webp",
  },
  {
    name: "Express",
    img: "/icons/express.png",
  },
  {
    name: "PostgreSQL",
    img: "/icons/postgresql.webp",
  },
  {
    name: "Postman",
    img: "/icons/postman.webp",
  },
  {
    name: "Git",
    img: "/icons/git.png",
  },
  {
    name: "Firebase",
    img: "/icons/firebase.webp",
  },
  {
    name: "Supabase",
    img: "/icons/supabase.webp",
  },
  {
    name: "MongoDB",
    img: "/icons/mongodb.webp",
  },
  {
    name: "NextJS",
    img: "/icons/nextjs.webp",
  },
];

export function MarqueeDemo() {
  return (
    <div className="relative mt-32 flex w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
      <Marquee>
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="w-[90px] h-[90px] flex items-center justify-center"
          >
            <Image
              alt={tech.name}
              src={tech.img}
              className="hover:scale-110 transition-all hover:cursor-pointer"
              width={50}
              height={50}
            />
          </div>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black to-transparent"></div>
    </div>
  );
}
