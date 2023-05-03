import React from 'react';
import styles, { layout } from '../style';
import Button from './Button';
import { card } from '../assets';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@react-hook/media-query'

const CardDeal = () => {
	const isMobile = useMediaQuery('(max-width:520px)');

	return (
		<section className={layout.section}>
			<motion.div 
			initial={isMobile ? {opacity:0, y: 300} : {opacity:0,x: -500} }
			whileInView={isMobile ?  {opacity:1, y:0} : {opacity:1,x: 0} }
			transition={{ duration:1}}
			className={layout.sectionInfo}>
				<h2 className={styles.heading2}>
					Find a better card deal <br className="sm:block hidden" />in few easy steps.
				</h2>
				<p className={`${styles.paragraph} max-w-[470px]`}>
					Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç
					Aliquet ultrices ac, ametau.
				</p>
        <Button styles={"mt-10"}/>
			</motion.div>
      <motion.div 
	 initial={isMobile? {opacity:0, y:300} : {opacity:0,x: 500}}
	 whileInView={isMobile ? {opacity:1, y:0 } : {opacity:1, x: 0}}
	 transition={{ duration:1}}
	  className={layout.sectionImg}>
        <img src={card} alt='card' className="w-[100%] h-[100%]"/>
      </motion.div>
		</section>
	);
};

export default CardDeal;
