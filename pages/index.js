import Image from "next/image";

import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtr from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import ProjectsBtn from "../components/ProjectsBtn";


const Home = () => {
  return(
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-grandient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto
                       xl:ml-20">
          {/* title */}
            <motion.h1
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'  
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl -mt-10"
            >
            Eli Anderson <br/> is a <span className="text-accent">Programmer</span>{''}
            </motion.h1>
            {/* subtitle */}
            <motion.p
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden' 
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Praesentium voluptas ab libero, ipsum accusantium autem, 
              culpa laborum assumenda nemo possimus rem dicta dolorum! 
              Voluptate officiis amet consequuntur veniam quibusdam quas.
              </motion.p>
              {/* btn */}
              <div className="flex justify-center xl:hidden">
                <ProjectsBtn />
              </div>
              <motion.div 
              variants={fadeIn('down', 0.4)} 
              initial="hidden" 
              animate="show"
              exit="hidden"
              className="hidden xl:flex"
              >
              <ProjectsBtn/>
              </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-screen h-full absolute right-0 bottom-0">
       {/* bg image */}
        <div className="bg-none xl:bg-scificircle xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full 
        absolute mix-blend-color-dodge translate-z-0"></div>
        {/* particles */}
          <ParticlesContainer /> 
        {/* avatar img */}
        <div className="w-full h-full max-w-[80%] sm:max-w-[70%] md:max-w-[60%] max-h-[80%] sm:max-h-[70%] md:max-h-[60%] absolute -bottom-32 lg:bottom-[25%]
        lg:right-[13%]">
          <Avatar />
        </div>
    </div>
  </div>
    
  )
};


export default Home;
