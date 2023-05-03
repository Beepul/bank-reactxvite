import React from 'react'
import styles from '../style'
import Button from './Button'
import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <motion.h2 
        initial={{y:50, opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration: 1}}
        className={styles.heading2}>Let's try our service now!</motion.h2>
        <motion.p 
        initial={{y:50, opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration: 1}}
        className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to accept card payments and grow your business anywhere on the planet.</motion.p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  )
}

export default CTA