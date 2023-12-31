'use client'

import React from 'react'
import { monospace } from '@/styles/fonts';
import styles from './footer.module.css'
import { faGithub, faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { motion, useReducedMotion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

function Footer() {

	const shouldReduceMotion = useReducedMotion();


	const reduceMotionVariant = {
	  hidden: {
		opacity: 1,
		x: 0,
		y: 0
	  },
	  visible: {
		opacity: 1,
		x: 0,
		y: 0
	  }
	}

	const containerVariant = {
		hidden: { 
		  opacity: 0,
		  y: 30 },
		visible: { 
		  opacity: 1,
		  y: 0 },
	};

    const [ref, inView] = useInView({
      triggerOnce: true, // Animation triggers only once when it comes into view
    });

	return (

		<motion.div 
			id='footer' 
			className={styles.footer}
			initial="hidden"
			ref={ref}
			animate={inView ? "visible" : "hidden"}
			variants={shouldReduceMotion ? reduceMotionVariant : containerVariant}
			transition={{ duration: 1, delay: 0.1}}
		>
			<Link href="https://github.com/rkadlick" className={styles.footerLink + " " + monospace.className}>Designed & Built by <span className={styles.name}>Ryan Kadlick</span>.</Link>
			<ul className={styles.iconList}>
				<li>
					<Link href="https://github.com/rkadlick" target='_blank' aria-label='Github'><FontAwesomeIcon className={styles.iconListIcon} icon={faGithub} /></Link>
				</li>
				<li>
					<Link href="https://codepen.io/rykadlick" target='_blank' aria-label='CodePen'><FontAwesomeIcon className={styles.iconListIcon} icon={faCodepen} /></Link>
				</li>
				<li>
					<Link href="https://www.linkedin.com/in/ryankadlick/" target='_blank' aria-label='LinkedIn'><FontAwesomeIcon className={styles.iconListIcon} icon={faLinkedin} /></Link>
				</li>
				<li>
					<Link href="/resume.pdf" target='_blank' aria-label='Resume'><FontAwesomeIcon className={styles.iconListIcon} icon={faFile} /></Link>
				</li>
			</ul>
		</motion.div>
	);
}

export default Footer;
