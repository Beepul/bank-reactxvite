import React, { useRef, useState } from 'react';
import styles from '../style';
import { clients } from '../constants';
import { useScroll, useTransform,motion, useMotionValue, useVelocity, useSpring, wrap, useAnimationFrame } from 'framer-motion';


const Clients = ({baseVelocity = -5}) => {
	const baseX = useMotionValue(0);
	const { scrollY } = useScroll();
	const scrollVelocity = useVelocity(scrollY);
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 400
	  });
	  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
		clamp: false
	  });
	  const x = useTransform(baseX, (v) => `${wrap(30, -45, v)}%`);
	  const directionFactor = useRef(1);
	  useAnimationFrame((t, delta) => {
		let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
	
		/**
		 * This is what changes the direction of the scroll once we
		 * switch scrolling directions.
		 */
		if (velocityFactor.get() < 0) {
		  directionFactor.current = -1;
		} else if (velocityFactor.get() > 0) {
		  directionFactor.current = 1;
		}
	
		moveBy += directionFactor.current * moveBy * velocityFactor.get();
	
		baseX.set(baseX.get() + moveBy);
	  });
	return (
		<section className={`${styles.flexCenter} my-4`}>
			<motion.div 
			style={{x}}
			className={`${styles.flexCenter} flex-wrap w-full`}>
				{clients.map((client) => (
					<div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
						<img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain" />
					</div>
				))}
			</motion.div>
		</section>
	);
};

export default Clients;
