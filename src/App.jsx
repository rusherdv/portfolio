import { useState, useEffect } from 'react'
import Menu from './components/menu'
import {Button} from "@nextui-org/react";
import { motion, useAnimation } from 'framer-motion';
import { Input} from '@chakra-ui/react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function App() {

  const [technologies, settechnologies] = useState([
    { name: 'HTML', img: 'https://cdn-icons-png.flaticon.com/512/174/174854.png' },
    { name: 'CSS', img: 'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png' },
    { name: 'Javascript', img: 'https://camo.githubusercontent.com/7a2b6137fa6818b1c85f86347a6b4a75ee52681d4a190c506df972e3c5459980/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6a6176617363726970742d6f726967696e616c2e737667' },
    { name: 'Tailwind', img: 'https://i.ibb.co/SVYbPfg/Tailwind-CSS.png' },
    { name: 'React', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png' },
    { name: 'React Native', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png' },
    { name: 'MySQL', img: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/mysql_logo_icon_169940.png' },
    { name: 'NodeJS', img: 'https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png' },
    { name: 'Python', img: 'https://camo.githubusercontent.com/d10e5aa8ba67f1eb109da4e98cd75adfa42df2e6019f8222cfa14c0088ac674d/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f707974686f6e2d6f726967696e616c2e737667' },
    { name: 'NextUI', img: 'https://avatars.githubusercontent.com/u/86160567?s=200&v=4' },
    { name: 'Express', img: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
    { name: 'MongoDB', img: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png' },
    { name: 'Postman', img: 'https://cdn.worldvectorlogo.com/logos/postman.svg' },
    { name: 'Git', img: 'https://camo.githubusercontent.com/b7ea09b0c030ae14623cfc3a52ab3ee0d07e0259a1b230139e65ba00454327c9/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6769742d73636d2d69636f6e2e737667' },
    { name: 'Firebase', img: 'https://www.gstatic.com/devrel-devsite/prod/vc33a3662809b7010f569d1a7af7b66f2061027596eda47df3ce361ab3299c1ea/firebase/images/touchicon-180.png' },
    { name: 'Supabase', img: 'https://cdn.stape.io/i/64522a269b32b387104684.png' },
  ])

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const controls = useAnimation();

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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start('up');
  }, []);

  const home = useRef(null)
  const aboutMe = useRef(null)
  const technologiesDiv = useRef(null)
  const projects = useRef(null)

  const executeScroll = (section) => {
    section.current.scrollIntoView()
  }


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current)
    emailjs.sendForm('service_ahzf0df', 'template_rbymhfx', form.current, 'UO3axzvlAiYBgDHNF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='h-full w-full bg-black'>
      <motion.div initial="hidden" animate="visible" variants={{hidden: { opacity: 0, y: -100 }, visible: { opacity: 1, y: 0 }}} transition={{ duration: 1 }} className='h-20 w-full border-b-1 border-gray-800 flex justify-between items-center fixed bg-black z-10'>
        <p className='text-[#FCDC4D] inter600 ml-10'>rusher</p>
        <div className='flex items-center text-white inter600 space-x-4 lg:space-x-8 mr-10 max-sm:hidden'>
          <p onClick={() => {executeScroll(home)}} className='relative hover:cursor-pointer w-fit block group'>Home
            <span className="absolute block h-[2px] bg-[#FCDC4D] w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
          </p>
          <p onClick={() => {executeScroll(aboutMe)}} className='relative hover:cursor-pointer w-fit block group'>About Me
            <span className="absolute block h-[2px] bg-[#FCDC4D] w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
          </p>
          <p onClick={() => {executeScroll(technologiesDiv)}} className='relative hover:cursor-pointer w-fit block group'>Technologies
            <span className="absolute block h-[2px] bg-[#FCDC4D] w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
          </p>
          <p onClick={() => {executeScroll(projects)}} className='relative hover:cursor-pointer w-fit block group'>Projects
            <span className="absolute block h-[2px] bg-[#FCDC4D] w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
          </p>
        </div>
        <Menu refs={{home,aboutMe,technologiesDiv,projects}} />
      </motion.div>

      <div ref={home} className='w-9/12 m-auto h-screen flex flex-col justify-center relative max-sm:w-full max-sm:items-center'>
        <motion.p initial="hidden" animate="visible" variants={{hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 }}} transition={{ duration: 0.5 }} className='text-3xl inter600 text-[#FCDC4D]'>Hey there!, I'm-</motion.p>
        <motion.h1 initial="hidden" animate="visible" variants={{hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 }}} transition={{ duration: 0.6 }} className='inter900 text-9xl text-white max-sm:text-7xl'>Rusher</motion.h1>
        <motion.div initial="hidden" animate="visible" variants={{hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 }}} transition={{ duration: 0.7 }} className='inter600 flex text-3xl w-7/12 max-sm:w-9/12 max-sm:text-lg'>
          <p className='text-gray-500'><span className='text-white'>Software Developer.</span> A self-taught developer with an interest in Computer Science.</p>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={{hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 }}} transition={{ duration: 0.8 }} className='flex justify-between w-[205px] mt-5'>
          <Button onClick={() => window.open('https://github.com/rusherdv', '_blank')} className='rounded-md bg-[#1D1D1D] text-white inter600' startContent={<svg xmlns="http://www.w3.org/2000/svg" height="16" width="15.5" viewBox="0 0 496 512"><path fill="#fcdc4d" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>}>Github</Button>
          <Button onClick={() => window.open('mailto:fdecabanas2004@gmail.com', '_blank')} className='rounded-md bg-[#1D1D1D] text-white inter600' startContent={<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#fcdc4d" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>}>Email</Button>
        </motion.div>
        <motion.div
          animate={controls}
          variants={{ up: { y: -10 }, down: { y: 0 } }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: .5, ease: 'linear' }}
        className='w-full absolute bottom-5 flex justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512">
            <path fill="#fcdc4d" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
          </svg>
        </motion.div>
      </div>
      
      <motion.div ref={aboutMe} id='about' initial="hidden" animate={controls} variants={fadeInUp} className='pt-[100px] w-9/12 m-auto'>
        <h2 className='text-white inter600 text-4xl'>About Me</h2>
        <p className='text-white inter400 w-full mt-4'><span className='text-[#FCDC4D]'>Rusher</span> is my tag on the Internet, but my real name is Federico. I am a software developer, I'm 19 years old and i'm from Argentina and I love programming and constantly facing challenges. I started doing this when I was 14 and to this day I have never stopped doing what I started as a hobby.</p>
      </motion.div>

      <motion.div ref={technologiesDiv} initial="hidden" animate={controls} variants={fadeInUp} className='pt-[100px] m-auto'>
        <h2 className='text-white inter600 text-4xl w-9/12 m-auto'>Technologies and tools</h2>
        <p className='text-white mt-4 inter400 w-9/12 m-auto'>Proficient in web development, I excel in JavaScript, CSS, HTML, and React for dynamic and engaging user interfaces. On the backend, I leverage Node.js and work with databases like MySQL and MongoDB. Skilled in version control with Git, and experienced in efficient styling using Tailwind CSS. Additionally, I bring versatility with Python for various tasks, ensuring a comprehensive skill set across the full development stack.</p>
        <div className='grid grid-cols-4 gap-4 mt-4 w-9/12 m-auto max-sm:grid-cols-1 max-lg:grid-cols-2 max-sm:justify-around'>
          {
            technologies.map((item, index) => {
              return (
                <div key={index} className='flex text-white inter600 items-center border-2 border-[#1D1D1D] rounded-lg p-3 max-sm:w-full'>
                  <img src={item.img} className='w-9' alt="" />
                  <p className='ml-2'>{item.name}</p>
                </div>
              )
            })
          }
        </div>

      </motion.div>

      <div className='w-9/12 m-auto max-sm:w-full'>
        <h2 ref={projects} className='text-white inter600 text-4xl pt-[100px] max-lg:flex max-lg:justify-center'>Projects</h2>
        <div className='mt-3 max-lg:flex max-lg:justify-center max-lg:flex-col max-lg:items-center'>
          <motion.div initial="hidden" animate={controls} variants={fadeInLeft} className='w-full p-5 max-2xl:w-full h-full relative overflow-hidden border-2 border-[#1D1D1D] rounded-md flex max-lg:flex-col max-lg:w-[60%] max-sm:w-11/12 max-lg:items-center'>
            <img className='w-[450px] h-[250px] object-cover rounded-md brightness-75' src="https://user-images.githubusercontent.com/105472000/258630512-da38bd63-3b8b-446b-acf1-fe094c09d8ca.png" alt="" />
            <div className='text-white flex flex-col justify-evenly w-full relative ml-5 mr-5 max-lg:ml-0 max-lg:mr-0 max-lg:mt-2'>
              <h3 className='inter600 text-3xl max-xl:text-2xl'>Pixels</h3>
              <div>
                <p className='inter400 text-lg max-xl:text-sm max-lg:mt-2'>A website, based on r/place of Reddit. You can write what do you want on pixels, coded on <span className='text-[#FCDC4D] inter600'>HTML</span>, <span className='text-[#FCDC4D] inter600'>CSS</span> and <span className='text-[#FCDC4D] inter600'>Javascript</span>.</p>
                <div className='flex mt-2 items-center'>
                  <div className='flex items-center border-2 border-[#1D1D1D] p-1 max-2xl:p-2 rounded-md h-[36px]'>
                    <img className='w-[20px] ml-2 max-2xl:ml-0' src="https://cdn-icons-png.flaticon.com/512/174/174854.png" alt="HTML"/>
                    <p className='inter600 text-sm mr-1 ml-1 pr-1 max-2xl:hidden'>HTML</p>
                  </div>

                  <div className='flex items-center border-2 border-[#1D1D1D] p-1 max-2xl:p-2 rounded-md h-[36px] ml-2'>
                    <img className='w-[20px] ml-2 max-2xl:ml-0' src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png" alt="CSS"/>
                    <p className='inter600 text-sm mr-1 ml-1 pr-1 max-2xl:hidden'>CSS</p>
                  </div>

                  <div className='flex items-center border-2 border-[#1D1D1D] p-1 max-2xl:p-2 rounded-md h-[36px] ml-2'>
                    <img className='w-[20px] ml-2 max-2xl:ml-0' src="https://camo.githubusercontent.com/7a2b6137fa6818b1c85f86347a6b4a75ee52681d4a190c506df972e3c5459980/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6a6176617363726970742d6f726967696e616c2e737667" alt="Javascript"/>
                    <p className='inter600 text-sm mr-1 ml-1 pr-1 max-2xl:hidden'>Javascript</p>
                  </div>
                </div>
              </div>
              <div className='flex items-center max-lg:flex-col max-lg:mt-2'>
                <Button onClick={() => window.open('https://github.com/rusherdv/pixels', '_blank')} className='rounded-md bg-[#FCDC4D] text-black inter600 max-lg:w-full'>Code</Button>
                <Button onClick={() => window.open('https://main--imaginative-stroopwafel-741c1a.netlify.app/','_blank')} className='rounded-md ml-2 bg-[#1D1D1D] text-white inter600 max-lg:w-full max-lg:ml-0 max-lg:mt-2'>Deploy</Button>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" animate={controls} variants={fadeInLeft} className='w-full p-5 max-2xl:w-full h-full relative overflow-hidden border-2 border-[#1D1D1D] rounded-md flex mt-5 max-lg:flex-col max-lg:w-[60%] max-sm:w-11/12 max-lg:items-center'>
            <img className='w-[450px] h-[250px] rounded-md object-cover brightness-75' src="https://user-images.githubusercontent.com/105472000/258630932-6f1d6e85-d16b-46e5-8cf6-59d950c3e131.png" alt="" />
            <div className='text-white flex flex-col justify-evenly w-full relative ml-5 mr-5 max-lg:ml-0 max-lg:mr-0 max-lg:mt-2'>
              <h3 className='inter600 text-3xl max-xl:text-2xl'>Password Security</h3>
              <div>
              <p className='inter400 text-lg max-xl:text-sm max-lg:mt-2'>A secure password generator and checker coded on <span className='text-[#FCDC4D] inter600'>HTML</span>, <span className='text-[#FCDC4D] inter600'>CSS</span> and <span className='text-[#FCDC4D] inter600'>Javascript</span>. This proyect is based on security points such as capital letters, numbers, extra characters.</p>
                <div className='flex mt-2 items-center'>
                  <div className='flex items-center border-2 border-[#1D1D1D] p-1 max-2xl:p-2 rounded-md h-[36px]'>
                    <img className='w-[20px] ml-2 max-2xl:ml-0' src="https://cdn-icons-png.flaticon.com/512/174/174854.png" alt="HTML"/>
                    <p className='inter600 text-sm mr-1 ml-1 pr-1 max-2xl:hidden'>HTML</p>
                  </div>

                  <div className='flex items-center border-2 border-[#1D1D1D] p-1 max-2xl:p-2 rounded-md h-[36px] ml-2'>
                    <img className='w-[20px] ml-2 max-2xl:ml-0' src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png" alt="CSS"/>
                    <p className='inter600 text-sm mr-1 ml-1 pr-1 max-2xl:hidden'>CSS</p>
                  </div>

                  <div className='flex items-center border-2 border-[#1D1D1D] p-1 max-2xl:p-2 rounded-md h-[36px] ml-2'>
                    <img className='w-[20px] ml-2 max-2xl:ml-0' src="https://camo.githubusercontent.com/7a2b6137fa6818b1c85f86347a6b4a75ee52681d4a190c506df972e3c5459980/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6a6176617363726970742d6f726967696e616c2e737667" alt="Javascript"/>
                    <p className='inter600 text-sm mr-1 ml-1 pr-1 max-2xl:hidden'>Javascript</p>
                  </div>
                </div>
              </div>
              <div className='flex items-center max-lg:flex-col max-lg:mt-2'>
                <Button onClick={() => window.open('https://github.com/rusherdv/PasswordSecurity', '_blank')} className='rounded-md bg-[#FCDC4D] text-black inter600 max-lg:w-full'>Code</Button>
                <Button onClick={() => window.open('https://fastidious-meerkat-69610d.netlify.app/', '_blank')} className='rounded-md ml-2 bg-[#1D1D1D] text-white inter600 max-lg:w-full max-lg:ml-0 max-lg:mt-2'>Deploy</Button>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" animate={controls} variants={fadeInLeft} className='w-full p-5 max-2xl:w-full h-full relative overflow-hidden border-2 border-[#1D1D1D] rounded-md flex mt-5 max-lg:flex-col max-lg:w-[60%] max-sm:w-11/12 max-lg:items-center'>
            <img className='w-[450px] h-[250px] object-cover rounded-md brightness-75' src="https://user-images.githubusercontent.com/105472000/261750712-7252b887-505e-4a3b-a5e7-f4bb1ca56690.png" alt="" />
            <div className='text-white flex flex-col justify-evenly w-full relative ml-5 mr-5 max-lg:ml-0 max-lg:mr-0 max-lg:mt-2'>
              <h3 className='inter600 text-3xl max-xl:text-2xl'>Dolar Now</h3>
              <div>
              <p className='inter400 text-lg max-xl:text-sm max-lg:mt-2'>This is a website to check the dolar price on ARS <span className='text-[#FCDC4D] inter600'>HTML</span>, <span className='text-[#FCDC4D] inter600'>CSS</span> and <span className='text-[#FCDC4D] inter600'>Javascript</span> with Fetch API. In addition, it allows you to see the historical price.</p>
                <div className='flex mt-2 items-center'>
                  <div className='flex items-center border-2 border-[#1D1D1D] p-1 max-2xl:p-2 rounded-md h-[36px]'>
                    <img className='w-[20px] ml-2 max-2xl:ml-0' src="https://cdn-icons-png.flaticon.com/512/174/174854.png" alt="HTML"/>
                    <p className='inter600 text-sm mr-1 ml-1 pr-1 max-2xl:hidden'>HTML</p>
                  </div>

                  <div className='flex items-center border-2 border-[#1D1D1D] p-1 max-2xl:p-2 rounded-md h-[36px] ml-2'>
                    <img className='w-[20px] ml-2 max-2xl:ml-0' src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png" alt="CSS"/>
                    <p className='inter600 text-sm mr-1 ml-1 pr-1 max-2xl:hidden'>CSS</p>
                  </div>

                  <div className='flex items-center border-2 border-[#1D1D1D] p-1 max-2xl:p-2 rounded-md h-[36px] ml-2'>
                    <img className='w-[20px] ml-2 max-2xl:ml-0' src="https://camo.githubusercontent.com/7a2b6137fa6818b1c85f86347a6b4a75ee52681d4a190c506df972e3c5459980/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6a6176617363726970742d6f726967696e616c2e737667" alt="Javascript"/>
                    <p className='inter600 text-sm mr-1 ml-1 pr-1 max-2xl:hidden'>Javascript</p>
                  </div>
                </div>
              </div>
              <div className='flex items-center max-lg:flex-col max-lg:mt-2'>
                <Button onClick={() => window.open('https://github.com/rusherdv/dolar', '_blank')} className='rounded-md bg-[#FCDC4D] text-black inter600 max-lg:w-full max-lg:ml-0'>Code</Button>
                <Button onClick={() => window.open('https://fastidious-fudge-b18244.netlify.app/', '_blank')} className='rounded-md ml-2 bg-[#1D1D1D] text-white inter600 max-lg:w-full max-lg:ml-0 max-lg:mt-2'>Deploy</Button>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" animate={controls} variants={fadeInLeft} className='w-full p-5 max-2xl:w-full h-full relative overflow-hidden border-2 border-[#1D1D1D] rounded-md flex mt-5 max-lg:flex-col max-lg:w-[60%] max-sm:w-11/12 max-lg:items-center'>
            <img className='w-[450px] h-[250px] rounded-md object-cover brightness-75' src="https://i.imgur.com/V1xsZFo.png" alt="" />
            <div className='text-white flex flex-col justify-evenly w-full relative ml-5 mr-5 max-lg:w-full max-lg:ml-0 max-lg:mr-0 max-lg:mt-2'>
              <h3 className='inter600 text-3xl max-xl:text-2xl'>Godzilla Store</h3>
              <div>
                <p className='inter400 text-lg max-xl:text-sm max-lg:mt-2'>Full stack Digital store for selling products online, with different languages ​​and prices. Coded in <span className='text-[#FCDC4D] inter600'>React</span>, <span className='text-[#FCDC4D] inter600'>NodeJS</span>, <span className='text-[#FCDC4D] inter600'>Express</span>, <span className='text-[#FCDC4D] inter600'>NextUI</span>, <span className='text-[#FCDC4D] inter600'>Supabase</span>.</p>
                <div className='flex mt-2 items-center'>

                  <div className='mr-2 flex items-center border-2 border-[#1D1D1D] p-1 max-2xl:p-2 rounded-md h-[36px]'>
                    <img className='w-[20px] ml-2 max-2xl:ml-0' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png" alt="React"/>
                    <p className='inter600 mr-1 ml-1 max-2xl:hidden'>React</p>
                  </div>

                  <div className='mr-2 flex items-center border-2 border-[#1D1D1D] p-1 max-2xl:p-2 rounded-md h-[36px]'>
                    <img className='w-[20px] ml-2 max-2xl:ml-0' src="https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png" alt="NodeJS"/>
                    <p className='inter600 mr-1 ml-1 max-2xl:hidden'>NodeJS</p>
                  </div>

                  <div className='mr-2 flex items-center border-2 border-[#1D1D1D] p-1 max-2xl:p-2 rounded-md'>
                    <div className='w-[20px] border-[1px] flex items-center justify-center rounded-sm'><img className='w-[20px]' src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4" alt="NextUI" /></div>
                    <p className='inter600 mr-1 ml-1 max-2xl:hidden'>NextUI</p>
                  </div>

                  <div className='mr-2 flex items-center border-2 border-[#1D1D1D] p-1 max-2xl:p-2 rounded-md h-[36px]'>
                    <img className='w-[50px]' src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Express"/>
                    <p className='inter600 mr-1 max-2xl:hidden'>Express</p>
                  </div>

                  <div className='flex items-center border-2 border-[#1D1D1D] p-1 max-2xl:p-2 rounded-md h-[36px]'>
                    <img className='w-[20px] max-2xl:ml-0' src="https://cdn.stape.io/i/64522a269b32b387104684.png" alt="Supabase"/>
                    <p className='inter600 mr-1 max-2xl:hidden'>Supabase</p>
                  </div>
                </div>
              </div>
              <div className='flex items-center max-lg:flex-col max-lg:mt-2'>
                <Button onClick={() => window.open('https://github.com/rusherdv/godzillaStore', '_blank')} className='rounded-md bg-[#FCDC4D] text-black inter600 max-lg:w-full'>Code</Button>
                <Button onClick={() => window.open('https://www.godzillastore.net.ar/', '_blank')} className='rounded-md ml-2 bg-[#1D1D1D] text-white inter600 max-lg:w-full max-lg:ml-0 max-lg:mt-2'>Deploy</Button>
              </div>
            </div>
          </motion.div>
          <Button onClick={() => window.open('https://github.com/rusherdv?tab=repositories', '_blank')} variant='bordered' className='text-white inter600 w-[60%] max-sm:w-11/12 rounded-md border-[#1D1D1D] mt-5 lg:hidden'>View More</Button>
        </div>
        <a href="https://github.com/rusherdv?tab=repositories" target='_blank' className="text-white inter400 text-sm text-right max-2xl:w-full mt-4 block max-lg:hidden hover:underline hover:cursor-pointer">View more</a>
        <div className='w-full m-auto flex flex-col items-center h-screen justify-center relative'>
          <h2 className='inter600 text-6xl text-white max-sm:text-center max-sm:w-10/12'>Keep in touch</h2>
          <form ref={form} onSubmit={sendEmail} className='mt-10 w-[400px] max-sm:w-11/12'>
            <label className='text-white inter400 text-xs'>Name</label>
            <Input autoComplete="off" name="user_name" placeholder='Name' focusBorderColor='#FCDC4D' className='text-white inter400 mt-1 mb-4'/>
            <label className='text-white inter400 text-xs '>Email</label>
            <Input autoComplete="off" name="user_email" placeholder='Email' focusBorderColor='#FCDC4D' className='text-white inter400 mt-1'/>
            <div className='flex flex-col w-full mt-4'>
              <label className='text-white inter400 text-xs '>Message</label>
              <textarea name="message" placeholder='Message' className='border text-white pt-3 pl-4 pr-4 pb-3 inter400 resize-none w-full max-h-24 rounded-lg bg-transparent overflow-y-auto mt-1 focus:border-[#FCDC4D] focus:border-2' cols="30" rows="10"/>
            </div>
            <Button type='submit' variant='bordered' className='rounded-lg mt-6 bg-[#FCDC4D] border-none text-black inter600 w-full hover:bg-[#cab454]'>Send</Button>
          </form>
          <p className='absolute bottom-6 text-white inter400 text-sm'>Hosted by <span className='text-[#FCDC4D]'>Vercel</span></p>
        </div>
      </div>
    </div>
  )
}

export default App
