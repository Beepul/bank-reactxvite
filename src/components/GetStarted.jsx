import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'
import { motion } from 'framer-motion'

const GetStarted = () => {
  return(
    <motion.div 
    initial={{y:-50}}
    animate={{ y: 50 }}
    transition={{ ease: "linear", duration: 2, repeat: Infinity, repeatType: 'reverse' }}
    // animate={{y:10}}
    // transition={{ease:'linear' ,repeat: Infinity, duration:0.5}}
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div>
          <div className='flex'>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2 text-gradient'>
            Get
          </p>
            <img src={arrowUp} className='w-[23px] h-[23px] object-contain' alt='arrow' />
          </div>
          <p className='font-poppins font-medium text-[18px] leading-[23px]'>
            <span className='text-gradient'>Started</span>
          </p>
        </div>
      </div>
    </motion.div>

  )
  }


export default GetStarted