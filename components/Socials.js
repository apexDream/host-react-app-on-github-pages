import Link from "next/link"; 

import{
  FaArtstation, 
  FaYoutube,
} from 'react-icons/fa'

import{
  IoLogoLinkedin, 
} from "react-icons/io";



const Socials = () => {  
  return (
    <div className="flex item-center gap-x-5 text-lg">
         <Link href={''} className='hover:text-accent transition-all duration-300'>
          <FaYoutube />
         </Link>
         <Link href={''} className='hover:text-accent transition-all duration-300'>
          <IoLogoLinkedin />
         </Link>
         <Link href={''} className='hover:text-accent transition-all duration-300'>
          <FaArtstation />
         </Link>
    </div>
  );
};

export default Socials;
