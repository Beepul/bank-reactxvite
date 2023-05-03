import React from 'react'
import { features } from '../constants'
import styles , { layout } from '../style'
import Button from './Button'
import { motion } from 'framer-motion'
import { useMediaQuery } from '@react-hook/media-query'

const FeatureCard = ({icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[60px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt='icons' className='w-[50%] h-[50%] object-contain'  />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>{title}</h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>{content}</p>
    </div>
  </div>
)

const Business = () => {
  const isMobile = useMediaQuery('(max-width:520px)');

  return (
    <section id="features" className={layout.section}>
      <motion.div
      	initial={isMobile ? {opacity:0, y: 300} : {opacity:0,x: -500} }
        whileInView={isMobile ?  {opacity:1, y:0} : {opacity:1,x: 0} }
        transition={{ duration:1}}
      className={layout.sectionInfo}
      >
        <h2 className={styles.heading2}>You do the business, <br className='sm:block hidden'/> we’ll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button styles="mt-10"/>
      </motion.div>
      <motion.div
      	initial={isMobile? {opacity:0, y:300} : {opacity:0,x: 500}}
        whileInView={isMobile ? {opacity:1, y:0 } : {opacity:1, x: 0}}
        transition={{ duration:1}}
      className={`${layout.sectionImg} flex-col`}>
        {features.map((fet,index)=>(
          <FeatureCard key={fet.id} {...fet} index={index}/>
        ))}
      </motion.div>
    </section>
  )
}

export default Business