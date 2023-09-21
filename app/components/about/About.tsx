'use client'

import { heading, monospace } from '@/styles/fonts';
import Image from 'next/image'
import styles from './about.module.css'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

function About() {

	const imageVariant = {
		hidden: { 
		  opacity: 0,
		  x: -500 },
		visible: { 
		  opacity: 1,
		  x: 0 },
	  };

	  const textVariant = {
		hidden: { 
		  opacity: 0,
		  x: 500 },
		visible: { 
		  opacity: 1,
		  x: 0 },
	  };

	  const [ref, inView] = useInView({
		triggerOnce: true, // Animation triggers only once when it comes into view
	  });

	return (
		<section id='about'>
			<div className={styles.aboutContainer}>
				<h3 className={ heading.className + ' ' + styles.aboutTitle}><span className={ monospace.className + ' numberHeader'}>01.</span>About Me</h3>
				<motion.div
					className={styles.imageContainer}
					initial="hidden"
					ref={ref}
					animate={inView ? "visible" : "hidden"}
					variants={imageVariant}
					transition={{ duration: 1 }}
				>
				<Image className={styles.aboutImage} src='/about.png' alt='test' width={512} height={512} />
				</motion.div>
				<motion.div 
					className={styles.aboutText}
					initial="hidden"
					ref={ref}
					animate={inView ? "visible" : "hidden"}
					variants={textVariant}
					transition={{ duration: 1 }}
				>
					<p>As a lifelong musician, before tech I taught guitar and voice, ran a rehearsal studio, and booked concerts in NYC and beyond.</p>
					<p>In 2020, I took a leap and trained in modern app development at Fullstack Academy. I quickly absorbed new concepts, while bringing ambitious ideas and a positive attitude to every challenge.</p>
					<p>When I&apos;m not coding, I&apos;m usually doing yoga, testing out a new recipe, or writing a musical parody on guitar.</p>
				</motion.div>
			</div>
			
		</section>
	);
}

export default About;
