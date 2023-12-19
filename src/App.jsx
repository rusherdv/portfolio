import { useState, useEffect } from 'react'
import Menu from './components/menu'
import {Button, ButtonGroup} from "@nextui-org/react";
import { motion, useAnimation } from 'framer-motion';
import { useRef } from 'react';

function App() {

  const [skills, setSkills] = useState([
    { name: 'HTML', img: 'https://cdn-icons-png.flaticon.com/512/174/174854.png' },
    { name: 'CSS', img: 'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png' },
    { name: 'Javascript', img: 'https://camo.githubusercontent.com/7a2b6137fa6818b1c85f86347a6b4a75ee52681d4a190c506df972e3c5459980/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6a6176617363726970742d6f726967696e616c2e737667' },
    { name: 'TailwindCSS', img: 'https://i.ibb.co/SVYbPfg/Tailwind-CSS.png' },
    { name: 'React', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png' },
    { name: 'MySQL', img: 'https://camo.githubusercontent.com/ef8a5aaa11f861e3692439d030c83a18d6d5ebc387d6e74ca4bba728aaeac7ad/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6d7973716c2d6f726967696e616c2d776f72646d61726b2e737667' },
    { name: 'Git', img: 'https://camo.githubusercontent.com/b7ea09b0c030ae14623cfc3a52ab3ee0d07e0259a1b230139e65ba00454327c9/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6769742d73636d2d69636f6e2e737667' },
    { name: 'NodeJS', img: 'https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png' },
    { name: 'Python', img: 'https://camo.githubusercontent.com/d10e5aa8ba67f1eb109da4e98cd75adfa42df2e6019f8222cfa14c0088ac674d/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f707974686f6e2d6f726967696e616c2e737667' },
    { name: 'Firebase', img: 'https://www.gstatic.com/devrel-devsite/prod/vc33a3662809b7010f569d1a7af7b66f2061027596eda47df3ce361ab3299c1ea/firebase/images/touchicon-180.png' },
    { name: 'Supabase', img: 'https://cdn.stape.io/i/64522a269b32b387104684.png' },
    { name: 'NextUI', img: 'https://avatars.githubusercontent.com/u/86160567?s=200&v=4' },
    { name: 'Express', img: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
    { name: 'MongoDB', img: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png' }
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

  const myRef = useRef(null)

  const executeScroll = () => {
    console.log(myRef.current)
    myRef.current.scrollIntoView()
  }


  return (
    <div className='h-full w-full bg-black pb-20'>
      <motion.div initial="hidden" animate="visible" variants={{hidden: { opacity: 0, y: -100 }, visible: { opacity: 1, y: 0 }}} transition={{ duration: 1 }} className='h-20 w-full border-b-1 border-gray-800 flex justify-between items-center fixed bg-black z-10'>
        <p className='text-[#FCDC4D] inter600 ml-10'>rusher</p>
        <div className='flex items-center text-white inter600 space-x-4 lg:space-x-8 mr-10 max-sm:hidden'>
          <p className='relative hover:cursor-pointer w-fit block group'>Home
            <span className="absolute block h-[2px] bg-[#FCDC4D] w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
          </p>
          <p onClick={executeScroll} className='relative hover:cursor-pointer w-fit block group'>About Me
            <span className="absolute block h-[2px] bg-[#FCDC4D] w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
          </p>
          <p className='relative hover:cursor-pointer w-fit block group'>Skills
            <span className="absolute block h-[2px] bg-[#FCDC4D] w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
          </p>
          <p className='relative hover:cursor-pointer w-fit block group'>Projects
            <span className="absolute block h-[2px] bg-[#FCDC4D] w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
          </p>
        </div>
        <Menu/>
      </motion.div>
      <div className='w-9/12 m-auto h-screen flex flex-col justify-center relative'>
        <motion.p initial="hidden" animate="visible" variants={{hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 }}} transition={{ duration: 0.5 }} className='text-3xl inter600 text-[#FCDC4D]'>Hey there!, I'm-</motion.p>
        <motion.h1 initial="hidden" animate="visible" variants={{hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 }}} transition={{ duration: 0.6 }} className='inter900 text-9xl text-white'>Rusher</motion.h1>
        <motion.div initial="hidden" animate="visible" variants={{hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 }}} transition={{ duration: 0.7 }} className='inter600 flex text-3xl'>
          <p className='text-gray-500 w-7/12'><span className='text-white'>Software Engineer.</span> A self-taught developer with an interest in Computer Science.</p>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={{hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 }}} transition={{ duration: 0.8 }} className='flex justify-between w-[205px] mt-5'>
          <Button className='rounded-md bg-[#1D1D1D] text-white inter600' startContent={<svg xmlns="http://www.w3.org/2000/svg" height="16" width="15.5" viewBox="0 0 496 512"><path fill="#fcdc4d" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>}>Github</Button>
          <Button className='rounded-md bg-[#1D1D1D] text-white inter600' startContent={<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#fcdc4d" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>}>Email</Button>
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
      
      <motion.div ref={myRef} id='about' initial="hidden" animate={controls} variants={fadeInUp} className='pt-[100px] w-9/12 m-auto'>
        <h2 className='text-white inter600 text-4xl'>About Me</h2>
        <p className='text-white inter400 w-full mt-4'><span className='text-[#FCDC4D]'>Rusher</span> is my tag on the Internet, but my real name is Federico. I am a software developer, I'm 19 years old and i'm from Argentina and I love programming and constantly facing challenges. I started doing this when I was 14 and to this day I have never stopped doing what I started as a hobby.</p>
      </motion.div>
      <motion.div initial="hidden" animate={controls} variants={fadeInUp} className='w-9/12 m-auto mt-32'>
        <h2 className='text-white inter600 text-4xl'>Skills</h2>
        <p className='text-white mt-4 inter400'>Proficient in web development, I excel in JavaScript, CSS, HTML, and React for dynamic and engaging user interfaces. On the backend, I leverage Node.js and work with databases like MySQL and MongoDB. Skilled in version control with Git, and experienced in efficient styling using Tailwind CSS. Additionally, I bring versatility with Python for various tasks, ensuring a comprehensive skill set across the full development stack.</p>
        <div className='flex flex-wrap justify-start mt-4'>
        {
          skills.map((item,index) => {
            return(
              <div key={index} className='flex text-white inter600 items-center border-2 border-[#1D1D1D] rounded-lg p-3 w-44 mt-4 mr-4'>
                <img src={item.img} className='w-10' alt="" />
                <p className='ml-2'>{item.name}</p>
              </div>
            )
          })
        }
        </div>
      </motion.div>
      <div className='w-9/12 m-auto mt-32'>
        <h2 className='text-white inter600 text-4xl'>Projects</h2>
        <div className='mt-3'>
          <motion.div initial="hidden" animate={controls} variants={fadeInLeft} className='w-11/12 max-2xl:w-full h-full relative overflow-hidden border-2 border-[#1D1D1D] rounded-md flex'>
            <img className='w-[450px] h-[250px] max-xl:w-[400px] max-xl:h[200px] object-cover' src="https://user-images.githubusercontent.com/105472000/258630512-da38bd63-3b8b-446b-acf1-fe094c09d8ca.png" alt="" />
            <div className="w-[450px] h-[250px] max-xl:w-[400px] max-xl:h[200px] absolute inset-0 bg-gradient-to-r from-transparent to-black"></div>
            <div className='text-white flex flex-col justify-evenly w-full relative'>
              <h3 className='inter600 text-3xl'>Pixels</h3>
              <div>
                <p className='inter400 text-lg'>A website, based on r/place of Reddit. You can write what do you want on pixels, coded on <span className='text-[#FCDC4D] inter600'>HTML</span>, <span className='text-[#FCDC4D] inter600'>CSS</span> and <span className='text-[#FCDC4D] inter600'>Javascript</span>.</p>
                <div className='flex mt-2 items-center'>
                  <div className='flex items-center border-2 border-red-500 p-1 rounded-md h-[36px]'>
                    <img className='w-[20px] ml-2' src="https://cdn-icons-png.flaticon.com/512/174/174854.png" alt="HTML"/>
                    <p className='inter600 mr-1 ml-1'>HTML</p>
                  </div>

                  <div className='flex items-center border-2 border-blue-500 p-1 rounded-md h-[36px] ml-2'>
                    <img className='w-[20px] ml-2' src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png" alt="CSS"/>
                    <p className='inter600 mr-1 ml-1'>CSS</p>
                  </div>

                  <div className='flex items-center border-2 border-yellow-500 p-1 rounded-md h-[36px] ml-2'>
                    <img className='w-[20px] ml-2' src="https://camo.githubusercontent.com/7a2b6137fa6818b1c85f86347a6b4a75ee52681d4a190c506df972e3c5459980/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6a6176617363726970742d6f726967696e616c2e737667" alt="Javascript"/>
                    <p className='inter600 mr-1 ml-1'>Javascript</p>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <Button className='rounded-md bg-[#FCDC4D] text-black inter600'>Code</Button>
                <Button className='rounded-md ml-2 bg-[#1D1D1D] text-white inter600'>Deploy</Button>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" animate={controls} variants={fadeInLeft} className='w-11/12 max-2xl:w-full h-full relative overflow-hidden border-2 border-[#1D1D1D] rounded-md flex mt-10'>
            <img className='w-[450px] h-[250px] max-xl:w-[400px] max-xl:h[200px] object-cover' src="https://user-images.githubusercontent.com/105472000/258630932-6f1d6e85-d16b-46e5-8cf6-59d950c3e131.png" alt="" />
            <div className="w-[450px] h-[250px] max-xl:w-[400px] max-xl:h[200px] absolute inset-0 bg-gradient-to-r from-transparent to-black"></div>
            <div className='text-white flex flex-col justify-evenly w-full relative'>
              <h3 className='inter600 text-3xl'>Password Security</h3>
              <div>
                <p className='inter400 text-lg'>A secure password generator and checker coded on <span className='text-[#FCDC4D] inter600'>HTML</span>, <span className='text-[#FCDC4D] inter600'>CSS</span> and <span className='text-[#FCDC4D] inter600'>Javascript</span>. This proyect is based on security points such as capital letters, numbers, extra characters.</p>
                <div className='flex mt-2 items-center'>
                  <div className='flex items-center border-2 border-red-500 p-1 rounded-md h-[36px]'>
                    <img className='w-[20px] ml-2' src="https://cdn-icons-png.flaticon.com/512/174/174854.png" alt="HTML"/>
                    <p className='inter600 mr-1 ml-1'>HTML</p>
                  </div>

                  <div className='flex items-center border-2 border-blue-500 p-1 rounded-md h-[36px] ml-2'>
                    <img className='w-[20px] ml-2' src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png" alt="CSS"/>
                    <p className='inter600 mr-1 ml-1'>CSS</p>
                  </div>

                  <div className='flex items-center border-2 border-yellow-500 p-1 rounded-md h-[36px] ml-2'>
                    <img className='w-[20px] ml-2' src="https://camo.githubusercontent.com/7a2b6137fa6818b1c85f86347a6b4a75ee52681d4a190c506df972e3c5459980/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6a6176617363726970742d6f726967696e616c2e737667" alt="Javascript"/>
                    <p className='inter600 mr-1 ml-1'>Javascript</p>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <Button className='rounded-md bg-[#FCDC4D] text-black inter600'>Code</Button>
                <Button className='rounded-md ml-2 bg-[#1D1D1D] text-white inter600'>Deploy</Button>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" animate={controls} variants={fadeInLeft} className='w-11/12 max-2xl:w-full h-full relative overflow-hidden border-2 border-[#1D1D1D] rounded-md flex mt-10'>
            <img className='w-[450px] h-[250px] max-xl:w-[400px] max-xl:h[200px] object-cover' src="https://user-images.githubusercontent.com/105472000/261750712-7252b887-505e-4a3b-a5e7-f4bb1ca56690.png" alt="" />
            <div className="w-[450px] h-[250px] max-xl:w-[400px] max-xl:h[200px] absolute inset-0 bg-gradient-to-r from-transparent to-black"></div>
            <div className='text-white flex flex-col justify-evenly w-full relative'>
              <h3 className='inter600 text-3xl'>Dolar Now</h3>
              <div>
                <p className='inter400 text-lg'>This is a website to check the dolar price on ARS <span className='text-[#FCDC4D] inter600'>HTML</span>, <span className='text-[#FCDC4D] inter600'>CSS</span> and <span className='text-[#FCDC4D] inter600'>Javascript</span> with Fetch API. In addition, it allows you to see the historical price.</p>
                <div className='flex mt-2 items-center'>

                  <div className='flex items-center border-2 border-red-500 p-1 rounded-md h-[36px]'>
                    <img className='w-[20px] ml-2' src="https://cdn-icons-png.flaticon.com/512/174/174854.png" alt="HTML"/>
                    <p className='inter600 mr-1 ml-1'>HTML</p>
                  </div>

                  <div className='flex items-center border-2 border-blue-500 p-1 rounded-md h-[36px] ml-2'>
                    <img className='w-[20px] ml-2' src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png" alt="CSS"/>
                    <p className='inter600 mr-1 ml-1'>CSS</p>
                  </div>

                  <div className='flex items-center border-2 border-yellow-500 p-1 rounded-md h-[36px] ml-2'>
                    <img className='w-[20px] ml-2' src="https://camo.githubusercontent.com/7a2b6137fa6818b1c85f86347a6b4a75ee52681d4a190c506df972e3c5459980/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6a6176617363726970742d6f726967696e616c2e737667" alt="Javascript"/>
                    <p className='inter600 mr-1 ml-1'>Javascript</p>
                  </div>

                </div>
              </div>
              <div className='flex items-center'>
                <Button className='rounded-md bg-[#FCDC4D] text-black inter600'>Code</Button>
                <Button className='rounded-md ml-2 bg-[#1D1D1D] text-white inter600'>Deploy</Button>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" animate={controls} variants={fadeInLeft} className='w-11/12 max-2xl:w-full h-full relative overflow-hidden border-2 border-[#1D1D1D] rounded-md flex mt-10'>
            <img className='w-[450px] h-[250px] max-xl:w-[400px] max-xl:h[200px] object-cover' src="https://i.imgur.com/V1xsZFo.png" alt="" />
            <div className="w-[450px] h-[250px] max-xl:w-[400px] max-xl:h[200px] absolute inset-0 bg-gradient-to-r from-transparent to-black"></div>
            <div className='text-white flex flex-col justify-evenly w-full relative'>
              <h3 className='inter600 text-3xl'>Godzilla Store</h3>
              <div>
                <p className='inter400 text-lg'>Full stack Digital store for selling products online, with different languages ​​and prices. Coded in <span className='text-[#FCDC4D] inter600'>React</span>, <span className='text-[#FCDC4D] inter600'>NodeJS</span>, <span className='text-[#FCDC4D] inter600'>Express</span>, <span className='text-[#FCDC4D] inter600'>NextUI</span>, <span className='text-[#FCDC4D] inter600'>Supabase</span>.</p>
                <div className='flex mt-2 items-center'>

                  <div className='flex items-center bg-blue-400 p-1 rounded-md h-[36px]'>
                    <img className='w-[20px] ml-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png" alt="React"/>
                    <p className='inter600 mr-1 ml-1'>React</p>
                  </div>

                  <div className='ml-2 flex items-center border-2 border-green-700 p-1 rounded-md h-[36px]'>
                    <img className='w-[20px] ml-2' src="https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png" alt="NodeJS"/>
                    <p className='inter600 mr-1 ml-1'>NodeJS</p>
                  </div>

                  <div className='ml-2 flex items-center border-[2px] border-white p-1 rounded-md'>
                    <div className='w-[20px] border-[1px] flex items-center justify-center rounded-sm'><img className='w-[20px]' src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4" alt="NextUI" /></div>
                    <p className='inter600 mr-1 ml-1'>NextUI</p>
                  </div>

                  <div className='ml-2 flex items-center bg-white p-1 rounded-md h-[36px]'>
                    <img className='w-[50px]' src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Express"/>
                    <p className='inter600 mr-1 text-black'>Express</p>
                  </div>

                  <div className='ml-2 flex items-center bg-green-700 p-1 rounded-md h-[36px]'>
                    <img className='w-[20px]' src="https://cdn.stape.io/i/64522a269b32b387104684.png" alt="Supabase"/>
                    <p className='inter600 mr-1'>Supabase</p>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <Button className='rounded-md bg-[#FCDC4D] text-black inter600'>Code</Button>
                <Button className='rounded-md ml-2 bg-[#1D1D1D] text-white inter600'>Deploy</Button>
              </div>
            </div>
          </motion.div>


        </div>
      </div>
    </div>
  )
}

export default App
