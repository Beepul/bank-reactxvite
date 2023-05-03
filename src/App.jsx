import React, { useEffect, useState } from 'react';
import styles from './style';
import { Navbar, Billing, Business, Hero, Stats, CardDeal, Testimonials, Clients, CTA, Footer } from './components';
import Loader from './components/Loader';
import { motion } from 'framer-motion';

const App = () => {
	const [loading, setLoading] = useState(false);

	useEffect(()=>{
		setLoading(true);
		const timeout = setTimeout(()=>{
			setLoading(false);
		},4000);
		return () => clearTimeout(timeout)
	},[])
	
	return (
		<>
		{
			loading ? <Loader /> :
		<motion.div 
		initial={{opacity:0}}
		animate={{opacity:1}}
		className="bg-primary w-full overflow-hidden">
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>

			<div className={` bg-primary ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Hero />
				</div>
			</div>
			<div className={` bg-primary ${styles.paddingX} ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Stats />
					<Business />
					<Billing />
					<CardDeal />
					<Testimonials />
					<Clients />
					<CTA />
					<Footer />
				</div>
			</div>
		</motion.div>
		}
		</>
	);
};

export default App;
