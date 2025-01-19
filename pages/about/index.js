import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Avatar from "../../components/Avatar";
import Circle from "../../components/Circles";
import CountUp from "react-countup";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


// data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="adobexd" />,
          <SiAdobephotoshop key="photoshop" />,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left relative">
      <Circle />
      {/* Avatar Image */}
      <div
        className="hidden xl:flex absolute bottom-0 -left-[5px] mix-blend-hard-light"
      >
        <Avatar  />
      </div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* title */}
        <div className="flex-1 flex flex-col justifyt-center">
          <h2 className="h2">
            Header
          </h2>
          <p className="max-w-[500px] mx-auto ml:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, blanditiis illum? 
            Magni animi voluptas reiciendis ab laborum fugiat, maxime nisi odit atque nobis temporibus, 
            veniam repellendus neque illum ea inventore.
          </p>
        <div>
          <div>
            {/* experience */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10
            after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={10} duration={5} />+ 
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-2-[100px]">Years of experience</div>
            </div>
          </div>
        </div>
        </div>
        {/* info */}
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {aboutData.map((item, itemIndex) => (
            <div
              key={itemIndex}
              onClick={() => setIndex(itemIndex)}
              className={`cursor-pointer capitalize xl:text-lg relative
                after:h-[2px] after:w-0 after:transition-all after:duration-300 
                after:absolute after:-bottom-1 after:left-0
                ${
                  index === itemIndex
                    ? "text-accent after:w-[100%] after:bg-accent"
                    : "text-white after:bg-white"
                } 
                hover:text-accent hover:after:w-[100%]`}
            >
              {item.title}
            </div>
          ))}
        </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return ( 
                <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-2-max gap-x-2 items-center text-white/60">
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((icon, itemIndex) =>{
                    return <div key={itemIndex} className="text-2xl text-white">{icon}</div>
                  })}
                  </div>
                </div>
              ); 
            })}
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;




