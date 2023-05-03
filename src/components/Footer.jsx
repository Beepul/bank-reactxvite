import React from 'react'
import { logo } from '../assets'
import styles from '../style';
import { footerLinks, socialMedia } from '../constants';
import { motion } from 'framer-motion';

const Footer = () => {
  const variants = {
    initial:{
      color:"rgba(255, 255, 255, 0.7)",
      y:50,
      opacity:0
    },
    whileInView:{
      y:0,
      opacity:1,
      transition:{
        type: 'tween',
        duration: 1
      }
    },
    whileHover:{
      color:"#00f6ff", 
      originX:0 ,
      scale: 1.2,
      transition:{
        type:'spring',
         stiffness: 300
      }
    }
  }
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img src={logo} alt="hoobank" className='w-[266px] h-[72px] object-contain'/>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((footer)=>(
            <div key={footer.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">{footer.title}</h4>
              <motion.ul 
              variants={variants}
              transition={{staggerChildren: 1}}
              
              className='list-none mt-4'>
                {footer.links.map((link,index)=>(
                  <motion.li 
                  variants={variants}
                  initial="initial"
              whileHover={"whileHover"}
              whileInView={"whileInView"}
                  
                  key={index} className={`font-poopins font-normal text-[16px] leading-[24px]   cursor-pointer ${index !== footer.links.length - 1 ? "mb-4" : "mb-0"}`}>{link.name}</motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>Copyright @ 2021 HooBank. All Rights Reserved.</p>
        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social,index)=>(
            <img key={social.id} src={social.icon} alt='social' className={`w-[20px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer