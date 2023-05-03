import React from 'react'
import { motion } from 'framer-motion'
import styles from '../style'

const Loader = () => {
    const loading = ['L','o','a','d','i','n','g']

    const containerVariants = {
        offScreen:{
            y:0
        },
        onScreen:{
            y:"-100vh",
            transition:{
                duration:0.5,
                when: "afterChildren",
                staggerChildren: 0.5
            }
        }
    }
    const loadingVariants = {
        offScreen:{
            y:100
        },
        onScreen:{
            y:0,
            transition:{
                duration:0.3,
            }
        }
    }
  return (
    <motion.div
    className='bg-dimWhite'>
        <motion.div 
        variants={containerVariants}
        initial="offScreen"
        animate="onScreen"
        className='h-[100vh] w-[100%] bg-primary flex justify-center items-center'>
            <motion.div 
            className='flex overflow-hidden'>
                {loading.map((item,index)=>(
                    <motion.h1 
                    variants={loadingVariants}
                    // initial={{y: index % 2 === 0 ? -70 : 70}}
                    // transition={{delay: index * 0.5}}
                    key={index}
                    className= {`font-poppins font-semibold text-[46px] text-white`}>{item}</motion.h1>
                ))}
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Loader