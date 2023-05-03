import React from 'react';
import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@react-hook/media-query'

const Billing = () => {
	const isMobile = useMediaQuery('(max-width:520px)');
	return (
		<section id="product" className={layout.sectionReverse}>
			<motion.div 
			initial={isMobile ? {opacity:0, y: 300} : {opacity:0,x: -500} }
			whileInView={isMobile ?  {opacity:1, y:0} : {opacity:1,x: 0} }
			transition={{ duration:1}}
			className={layout.sectionImgReverse}>
				<img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
				<div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
				<div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
			</motion.div>
        <motion.div 
		initial={isMobile? {opacity:0, y:300} : {opacity:0,x: 500}}
        whileInView={isMobile ? {opacity:1, y:0 } : {opacity:1, x: 0}}
        transition={{ duration:1}}
		className={layout.sectionInfo}>
          <h2 className={styles.heading2}>Easily control your  billing & invoicing.</h2>
          <p className={`${styles.paragraph}  mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
          <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
            <img src={apple} alt='apple' className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
            <img src={google} alt='google' className='w-[128px] h-[42px] object-contain  cursor-pointer'/>

          </div>
        </motion.div>
		</section>
	);
};

export default Billing;
