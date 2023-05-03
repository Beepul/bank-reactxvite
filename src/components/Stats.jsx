import React, { useState } from 'react'
import { stats } from '../constants';
import styles from '../style';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Stats = () => {
  const [countStart, setCountStart] = useState(false);

  return (
    <motion.section 
    initial={{opacity:0, y:100}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:1}}
    viewport={{ once: true, amount: 0.8 }}
    className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat,index)=>(
        <div key={stat.id} className={`flex-1 flex justify-center items-center flex-row m-3`}>
          <ScrollTrigger onEnter={()=>setCountStart(true)}>
          <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[46px] text-white'>
          {countStart && <CountUp end={parseInt(stat.value)}  duration={3} prefix={index !== stats.length -1 ? '' : '$'} suffix={index !== stats.length -1 ? '+' : 'M'}/>}
          </h4>

          </ScrollTrigger>
          <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{stat.title}</p>
        </div>
      ))}
    </motion.section>
  )
}

export default Stats