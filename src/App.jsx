import { useState, useEffect } from "react";
import Menu from "./components/menu";
import { Button } from "@nextui-org/react";
import { motion, useAnimation } from "framer-motion";
import { Input } from "@chakra-ui/react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { showNotification } from "./helpers/utils";

function App() {
  const [technologies, settechnologies] = useState([
    {
      name: "HTML",
      img: "/icons/html.png",
    },
    {
      name: "CSS",
      img: "/icons/css.webp",
    },
    {
      name: "Javascript",
      img: "/icons/javascript.png",
    },
    { name: "Tailwind", img: "/icons/tailwind.png" },
    {
      name: "React",
      img: "/icons/react.png",
    },
    {
      name: "React Native",
      img: "/icons/react.png",
    },
    {
      name: "MySQL",
      img: "/icons/mysql.png",
    },
    {
      name: "NodeJS",
      img: "/icons/nodejs.png",
    },
    {
      name: "Python",
      img: "/icons/python.png",
    },
    {
      name: "NextUI",
      img: "/icons/nextui.png",
    },
    {
      name: "Express",
      img: "/icons/express.png",
    },
    {
      name: "PostgreSQL",
      img: "/icons/postgresql.png",
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
      img: "/icons/firebase.png",
    },
    {
      name: "Supabase",
      img: "/icons/supabase.webp",
    },
  ]);
  const [message, setmessage] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState();
  const [iphoneTime, setIphoneTime] = useState("");
  const controls = useAnimation();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      minutes = String(minutes).padStart(2, "0");
      const currentTime = `${hours}:${minutes}`;
      setIphoneTime(currentTime);
      const secondsUntilNextMinute = 60 - now.getSeconds();
      setTimeout(updateTime, secondsUntilNextMinute * 1000);
    };
    updateTime();
    return () => clearTimeout();
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    controls.start({
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.5 },
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start("up");
  }, []);

  const home = useRef(null);
  const aboutMe = useRef(null);
  const technologiesDiv = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  const form = useRef();

  const executeScroll = (ref) => {
    const headerHeight = document.querySelector(".header").offsetHeight;
    window.scrollTo({
      top: ref.current.offsetTop - headerHeight - 40,
      behavior: "smooth",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_APP_SERVICE,
        import.meta.env.VITE_REACT_APP_TEMPLATE,
        form.current,
        import.meta.env.VITE_REACT_APP_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            showNotification("Email sent", "success");
            setmessage("");
            setemail("");
            setsubject("");
            setname("");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="h-full w-full bg-black">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1 }}
        className="h-20 header w-full border-b-1 border-gray-800 flex justify-between items-center fixed bg-black z-10"
      >
        <p className="text-[#FCDC4D] inter600 ml-10">rusher</p>
        <div className="flex items-center text-white inter600 space-x-4 lg:space-x-8 mr-10 max-sm:hidden">
          <p
            onClick={() => {
              executeScroll(home);
            }}
            className="relative hover:cursor-pointer w-fit block group"
          >
            Home
            <span className="absolute block h-[2px] bg-[#FCDC4D] w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
          </p>
          <p
            onClick={() => {
              executeScroll(aboutMe);
            }}
            className="relative hover:cursor-pointer w-fit block group"
          >
            About Me
            <span className="absolute block h-[2px] bg-[#FCDC4D] w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
          </p>
          <p
            onClick={() => {
              executeScroll(technologiesDiv);
            }}
            className="relative hover:cursor-pointer w-fit block group"
          >
            Technologies
            <span className="absolute block h-[2px] bg-[#FCDC4D] w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
          </p>
          <p
            onClick={() => {
              executeScroll(projects);
            }}
            className="relative hover:cursor-pointer w-fit block group "
          >
            Projects
            <span className="absolute block h-[2px] bg-[#FCDC4D] w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
          </p>
          <p
            onClick={() => {
              executeScroll(contact);
            }}
            className="relative hover:cursor-pointer w-fit block group px-6 py-2 bg-[#FCDC4D] text-black rounded-md hover:bg-transparent border-2 border-[#FCDC4D] hover:text-white transition-all"
          >
            Contact
          </p>
        </div>
        <Menu refs={{ home, aboutMe, technologiesDiv, projects, contact }} />
      </motion.div>

      <div
        ref={home}
        className="w-9/12 m-auto h-screen flex flex-col justify-center relative max-sm:w-full max-sm:items-center"
      >
        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="text-3xl inter600 text-[#FCDC4D]"
        >
          Hey there!, I'm-
        </motion.p>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="inter900 text-9xl text-white max-sm:text-7xl"
        >
          Rusher
        </motion.h1>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
          className="inter600 flex text-3xl w-7/12 max-sm:w-9/12 max-sm:text-lg"
        >
          <p className="text-gray-500">
            <span className="text-white">Software Developer.</span> A
            self-taught developer with an interest in Computer Science.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="flex justify-between w-[205px] mt-5"
        >
          <Button
            onClick={() => window.open("https://github.com/rusherdv", "_blank")}
            className="rounded-md bg-[#1D1D1D] text-white inter600"
            startContent={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="15.5"
                viewBox="0 0 496 512"
              >
                <path
                  fill="#fcdc4d"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                />
              </svg>
            }
          >
            Github
          </Button>
          <Button
            onClick={() =>
              window.open("mailto:development093@gmail.com", "_blank")
            }
            className="rounded-md bg-[#1D1D1D] text-white inter600"
            startContent={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#fcdc4d"
                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                />
              </svg>
            }
          >
            Email
          </Button>
        </motion.div>
        <motion.div
          animate={controls}
          variants={{ up: { y: -10 }, down: { y: 0 } }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.5,
            ease: "linear",
          }}
          className="w-full absolute bottom-5 flex justify-center dissapear"
        >
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
        </motion.div>
      </div>

      <div ref={aboutMe} className="w-9/12 m-auto">
        <h2 className="text-white inter600 text-4xl">About Me</h2>
        <p className="text-white inter400 w-full mt-4">
          <span className="text-[#FCDC4D]">Rusher</span> is my tag on the
          Internet, but my real name is Federico. I am a software developer, I'm
          19 years old and i'm from Argentina and I love programming and
          constantly facing challenges. I started doing this when I was 14 and
          to this day I have never stopped doing what I started as a hobby.
        </p>
      </div>

      <div ref={technologiesDiv} className="mt-10 m-auto">
        <h2 className="text-white inter600 text-4xl w-9/12 m-auto">
          Technologies and tools
        </h2>
        <p className="text-white mt-4 inter400 w-9/12 m-auto">
          Proficient in web development, I excel in JavaScript, CSS, HTML, and
          React for dynamic and engaging user interfaces. On the backend, I
          leverage Node.js and work with databases like MySQL and PostgreSQL.
          Skilled in version control with Git, and experienced in efficient
          styling using Tailwind CSS. Additionally, I bring versatility with
          Python for various tasks, ensuring a comprehensive skill set across
          the full development stack.
        </p>
        <div className="grid grid-cols-4 gap-4 mt-4 w-9/12 m-auto max-sm:grid-cols-1 max-lg:grid-cols-2 max-sm:justify-around">
          {technologies.map((item, index) => {
            return (
              <div
                key={index}
                className="flex text-white entryFromBottom inter600 items-center border-2 border-[#1D1D1D] rounded-lg p-3 max-sm:w-full"
              >
                <img src={item.img} className="w-9" alt="" />
                <p className="ml-2">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-9/12 m-auto max-sm:w-9/12">
        <h2
          ref={projects}
          className="text-white inter600 text-4xl max-lg:mt-20 mt-60"
        >
          Projects
        </h2>
        <div className="mt-3 relative flex flex-col justify-center items-center w-full">
          <div className="flex w-full gap-5 mb-5 max-lg:flex-col">
            <div className="flex-1 h-[500px] entryFromLeft max-2xl:h-fit lg:hover:cursor-pointer relative group max-lg:flex max-lg:flex-col-reverse">
              <div className="text-white absolute z-10 opacity-0 group-hover:opacity-100 transition-all lg:bottom-10 lg:left-10 max-lg:opacity-100 max-lg:relative max-lg:mt-4">
                <h3 className="text-4xl inter600 group">Monarchy</h3>
                <p className="text-sm inter400 w-10/12 group text-gray-300">
                  E-commerce for roleplay server of fivem, the frontend is based
                  on ReactJS and the backend is composed by NodeJS, Express and
                  PostgreSQL.
                </p>
                <Button
                  onClick={() =>
                    window.open(
                      "https://github.com/rusherdv/monarchy-store",
                      "_blank"
                    )
                  }
                  className="rounded-md bg-[#1D1D1D] text-white inter600 mt-2"
                  startContent={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="15.5"
                      viewBox="0 0 496 512"
                    >
                      <path
                        fill="#ffff"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      />
                    </svg>
                  }
                >
                  View code
                </Button>
              </div>
              <img
                src="/monarchy.png"
                className="w-full max-lg:h-[300px] max-sm:h-[250px] rounded-md h-full max-2xl:h-auto object-cover transition-all lg:hover:opacity-20 lg:group-hover:opacity-20"
                alt=""
              />
            </div>

            <div className="h-[500px] w-[35%] entryFromLeft max-lg:w-full max-2xl:w-5/12 max-2xl:h-fit lg:hover:cursor-pointer relative group max-lg:flex max-lg:flex-row-reverse max-sm:flex-col-reverse ">
              <div className="text-white absolute max-lg:ml-10 z-10 opacity-0 group-hover:opacity-100 transition-all lg:bottom-10 lg:left-10 max-sm:mt-4 max-sm:ml-0 max-lg:opacity-100 max-lg:relative">
                <h3 className="text-4xl inter600 group">Password Generator</h3>
                <p className="text-sm inter400 w-10/12 group">
                  Light website developed on vanilla Javascript to create a
                  secure password or check how secure is your password.
                </p>
                <Button
                  onClick={() =>
                    window.open(
                      "https://github.com/rusherdv/password-security",
                      "_blank"
                    )
                  }
                  className="rounded-md bg-[#1D1D1D] text-white inter600 mt-2"
                  startContent={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="15.5"
                      viewBox="0 0 496 512"
                    >
                      <path
                        fill="#ffff"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      />
                    </svg>
                  }
                >
                  View code
                </Button>
              </div>
              <img
                src="/password.png"
                className="w-full max-lg:h-[350px] rounded-md h-full max-2xl:h-auto object-cover transition-all lg:hover:opacity-20 lg:group-hover:opacity-20"
                alt=""
              />
            </div>
          </div>
          <div className="flex w-full gap-5 mb-5 max-lg:flex-col">
            <div className="w-[35%] max-lg:w-full max-2xl:w-5/12 max-2xl:h-fit entryFromLeft lg:hover:cursor-pointer relative group max-lg:flex max-lg:flex-row-reverse max-sm:flex-col-reverse">
              <div className="text-white max-lg:ml-10 absolute z-10 opacity-0 group-hover:opacity-100 transition-all lg:bottom-10 lg:left-10 max-sm:mt-4 max-sm:ml-0 max-lg:opacity-100 max-lg:relative">
                <h3 className="text-4xl inter600 group">Chatify</h3>
                <p className="text-sm inter400 w-10/12 group">
                  Real time chat app programmed on ReactJS and using Firebase
                  for backend and database.
                </p>
                <Button
                  onClick={() =>
                    window.open("https://github.com/rusherdv/chatify", "_blank")
                  }
                  className="rounded-md bg-[#1D1D1D] text-white inter600 mt-2"
                  startContent={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="15.5"
                      viewBox="0 0 496 512"
                    >
                      <path
                        fill="#ffff"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      />
                    </svg>
                  }
                >
                  View code
                </Button>
              </div>
              <img
                src="/chatify.png"
                className="w-full rounded-md h-full object-cover transition-all max-lg:h-[350px] lg:hover:opacity-20 lg:group-hover:opacity-20"
                alt=""
              />
            </div>
            <div className="flex-1 h-[500px] entryFromLeft max-2xl:h-fit entryFromLeft lg:hover:cursor-pointer relative group max-lg:flex max-lg:flex-col-reverse">
              <div className="text-white absolute z-10 opacity-0 group-hover:opacity-100 transition-all lg:bottom-10 lg:left-10 max-lg:opacity-100 max-lg:relative max-lg:mt-4">
                <h3 className="text-4xl inter600 group">3D Concessionarie</h3>
                <p className="text-sm inter400 w-10/12 group">
                  Concessionarie developed on ThreeJS to inspect vehicles and
                  change color of the chassis and the wheels.
                </p>
                <Button
                  onClick={() =>
                    window.open(
                      "https://github.com/rusherdv/3d-concessionaire",
                      "_blank"
                    )
                  }
                  className="rounded-md bg-[#1D1D1D] text-white inter600 mt-2"
                  startContent={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="15.5"
                      viewBox="0 0 496 512"
                    >
                      <path
                        fill="#ffff"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      />
                    </svg>
                  }
                >
                  View code
                </Button>
              </div>
              <img
                src="/concessionarie.png"
                className="w-full rounded-md h-full object-cover transition-all max-lg:h-[300px] max-sm:h-[250px] lg:hover:opacity-20 lg:group-hover:opacity-20"
                alt=""
              />
            </div>
          </div>
          <div className="flex w-full gap-5">
            <div className="flex-1 h-[500px] entryFromLeft max-2xl:h-fit entryFromLeft lg:hover:cursor-pointer relative group max-lg:flex max-lg:flex-col-reverse">
              <div className="text-white absolute z-10 opacity-0 group-hover:opacity-100 transition-all lg:bottom-10 lg:left-10 max-lg:opacity-100 max-lg:relative max-lg:mt-4">
                <h3 className="text-4xl inter600 group">Discord Clon</h3>
                <p className="text-sm inter400 w-10/12 group">
                  FullStack Discord login clon based on ReactJS, NodeJS, MySQL.
                  Sign up and sign in on discord, confirm email and reset
                  password.
                </p>
                <Button
                  onClick={() =>
                    window.open("https://github.com/rusherdv", "_blank")
                  }
                  className="rounded-md bg-[#1D1D1D] text-white inter600 mt-2"
                  startContent={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="15.5"
                      viewBox="0 0 496 512"
                    >
                      <path
                        fill="#ffff"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      />
                    </svg>
                  }
                >
                  View code
                </Button>
              </div>
              <img
                src="/discord.png"
                className="w-full rounded-md h-full object-cover transition-all max-lg:h-[300px] max-sm:h-[250px] lg:hover:opacity-20 lg:group-hover:opacity-20"
                alt=""
              />
            </div>
            <div className="w-[35%] max-lg:hidden max-2xl:w-5/12 max-2xl:h-fit entryFromLeft hover:cursor-pointer relative group">
              <div className="text-white absolute bottom-10 left-10 z-10 opacity-0 group-hover:opacity-100 transition-all">
                <h3 className="text-4xl inter600 group">Simon Game</h3>
                <p className="text-sm inter400 w-10/12 group">
                  Simple simon says game coded on HTML, CSS and Javascript.
                </p>
                <Button
                  onClick={() =>
                    window.open(
                      "https://github.com/rusherdv/simon-color",
                      "_blank"
                    )
                  }
                  className="rounded-md bg-[#1D1D1D] text-white inter600 mt-2"
                  startContent={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="15.5"
                      viewBox="0 0 496 512"
                    >
                      <path
                        fill="#ffff"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      />
                    </svg>
                  }
                >
                  View code
                </Button>
              </div>
              <img
                src="/simon.png"
                className="w-full rounded-md h-full object-cover transition-all hover:opacity-20 group-hover:opacity-20"
                alt=""
              />
            </div>
          </div>
        </div>
        <a
          href="https://github.com/rusherdv?tab=repositories"
          target="_blank"
          className="text-white inter400 text-sm text-right w-full mt-4 block hover:underline hover:cursor-pointer"
        >
          View more
        </a>
        <div
          ref={contact}
          className="w-full m-auto flex items-center justify-around relative my-36 entryFromBottom max-sm:mb-20"
        >
          <div>
            <div className="max-sm:text-center w-[420px] text-white max-lg:w-full">
              <h2 className="inter600 text-6xl">Let's connect!</h2>
              <p className="inter400 mt-2">
                If you have questions, job opportunities, or simply want to
                reach out, email me down. You can also find me on my social
                media to keep up with my work.
              </p>
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-2 w-[400px] max-lg:w-full"
            >
              <label className="text-white inter400 text-xs">Name</label>
              <Input
                autoComplete="off"
                name="user_name"
                placeholder="Name"
                onChange={(e) => setname(e.target.value)}
                value={name}
                focusBorderColor="#FCDC4D"
                className="text-white inter400 mt-1 mb-4"
              />
              <label className="text-white inter400 text-xs ">Email</label>
              <Input
                autoComplete="off"
                name="user_email"
                placeholder="Email"
                onChange={(e) => setemail(e.target.value)}
                value={email}
                focusBorderColor="#FCDC4D"
                className="text-white inter400 mt-1 mb-4"
              />
              <label className="text-white inter400 text-xs">Subject</label>
              <Input
                autoComplete="off"
                placeholder="Subject"
                onChange={(e) => setsubject(e.target.value)}
                value={subject}
                focusBorderColor="#FCDC4D"
                className="text-white inter400 mt-1"
              />
              <div className="flex flex-col w-full mt-4">
                <label className="text-white inter400 text-xs ">Message</label>
                <textarea
                  name="message"
                  onChange={(e) => setmessage(e.target.value)}
                  value={message}
                  placeholder="Message"
                  className="border text-white pt-3 pl-4 pr-4 pb-3 inter400 resize-none w-full max-h-24 rounded-lg bg-transparent overflow-y-auto mt-1 focus:border-[#FCDC4D] focus:border-2"
                  cols="30"
                  rows="10"
                />
              </div>
              <Button
                type="submit"
                variant="bordered"
                className="rounded-lg mt-6 bg-[#FCDC4D] border-none text-black inter600 w-full hover:bg-[#cab454]"
              >
                Send
              </Button>
            </form>
          </div>
          <div className="w-[290px] max-lg:hidden h-[600px] iphone flex items-start overflow-hidden">
            <div className="bg-black w-[92%] h-[96%] m-auto mb-[13px] rounded-[35px] flex flex-col relative">
              <div className="flex justify-between mt-3 ml-5 mr-8">
                <p className="text-white inter400 text-sm">{iphoneTime}</p>
                <img
                  src="/iphoneIcons.png"
                  className=" w-16 object-cover"
                  alt=""
                />
              </div>
              <div className="spotifyanimation absolute top-2 left-0 right-0 opacity-0 mx-auto border-1 border-gray-700 h-7 rounded-full bg-black flex justify-between px-2 items-center">
                <img src="/icons/spotify.png" className="w-4" alt="" />
                <div className="spotifyContainer">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
              </div>
              <div className="bg-gray-100/60 w-11/12 rounded-tl-lg mt-6 rounded-tr-lg h-2 m-auto relative z-10"></div>
              <div className="bg-white flex-1 rounded-b-[35px] rounded-t-lg px-4 chat pb-5 overflow-y-auto z-20 relative">
                <div className="w-8 h-1 bg-gray-400/80 rounded-md m-auto mt-2" />
                <p
                  className="inter400 text-blue-700 text-sm hover:cursor-pointer"
                  title="Cancel"
                >
                  Cancel
                </p>
                <div className="flex items-center justify-between mt-4">
                  <h5 className="inter900 text-2xl">New message</h5>
                  <div className="w-8 h-8 bg-blue-500 hover:cursor-pointer flex justify-center items-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      width={13}
                    >
                      <path
                        fill="#fff"
                        d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="w-full border-b-2 text-xs inter400 border-gray-300 pb-2 flex mt-4">
                  <p className="text-gray-800">To:</p>
                  <span className="text-blue-500 ml-1">Rusher</span>
                </div>

                <div className="w-full border-b-2 text-xs inter400 border-gray-300 pb-2 mt-2">
                  <p className="text-gray-800">
                    {email === "From:" ? "" : `From: ${email}`}
                  </p>
                </div>

                <div className="w-full border-b-2 text-xs inter400 border-gray-300 pb-2 mt-2">
                  <p className="text-gray-800 ">
                    Subject:
                    <span
                      className={`${
                        subject === ""
                          ? "text-gray-500 inter400"
                          : "text-gray-600 inter600"
                      } ml-1 `}
                    >
                      {subject === "" ? "" : subject}
                    </span>
                  </p>
                </div>

                <div className="mt-2">
                  <p
                    className={`${
                      message === "" ? "text-gray-500" : "text-black"
                    } inter400 text-sm`}
                  >
                    {message === "" ? "Type a message" : message}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-white inter400 text-sm flex justify-center pb-5">
          Hosted by <span className="text-[#FCDC4D] ml-1">Vercel</span>
        </p>
      </div>
    </div>
  );
}

export default App;
