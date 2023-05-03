import React, { useEffect, useState } from 'react'
import { logo,close,menu } from '../assets'
import { navLinks } from '../constants'
import { motion, useScroll } from 'framer-motion'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
 const [fix,setFix] = useState(false);
  const [y, setY] = useState(0);

  // console.log(y)
  const handleNavigation = (e) => {
    const window = e.currentTarget;
    // console.log(window)
    if (y > window.scrollY) {
      // console.log("scrolling up");
      setFix(true);
    } else if (y < window.scrollY) {
      setFix(false)
      // console.log("scrolling down");
    }
    setY(window.scrollY);
  };

  console.log(fix)
  useEffect(() => {
    setY(window.scrollY);
  }, []);
  
  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));
  
    return () => { // return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);
  return (
    <motion.nav
    initial={{y: -50, opacity:0}}
    animate={{y:0, opacity:1}}
    transition={{duration:1, type: 'tween'}}
    className={fix & y > 120 ? 'fixed right-0 left-0 top-0 flex py-6 px-[70px] bg-gradient-to-r from-[#171524] via-[#332e50] to-[#010510] justify-between items-center z-50 navbar' :`w-full flex py-6 justify-between items-center navbar`}>
      <img src={logo} alt='hoo-band' className='w-[124px] h-[32px]'/>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav,index)=>(
          <li 
            key={nav.id} 
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'}`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex justify-end items-center flex-1'>
        <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain' onClick={()=> setToggle((prev) => !prev)}/>
      </div>
      <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-20 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
      <ul className='list-none flex flex-col justify-end items-center flex-1'>
        {navLinks.map((nav,index)=>(
          <li 
            key={nav.id} 
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length-1 ? 'mr-0' : 'mb-4'}`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      </div>
    </motion.nav>
  )
}

export default Navbar