'use client'

import React, { useEffect, useState } from 'react'
import logo from '../../images/tester.png'
import Image from 'next/image'
import Link from 'next/link'
import { monospace } from '@/fonts'
import styles from './nav.module.css'
import ThemeToggle from './ThemeToggle'
import useScrollDirection from '../../hooks/useScrollDirection'
import HamburgNav from './HamburgNav'
import { motion, useReducedMotion } from 'framer-motion'

function Nav() {
	const scrollDirection = useScrollDirection('down');
	const [scrolledToTop, setScrolledToTop] = useState(true);

	const handleScroll = () => {
		setScrolledToTop(window.scrollY < 100);
	  };
	
	  useEffect(() => {
	
		window.addEventListener('scroll', handleScroll);
	
		return () => {
		  window.removeEventListener('scroll', handleScroll);
		};
	  }, []);


	const navClass = () => {
		if(scrollDirection === 'up' && !scrolledToTop){
			return styles.navbar + " " + styles.scrollUp;
		} else if(scrollDirection === 'down' && !scrolledToTop){
			return styles.navbar + " " + styles.scrollDown;
		} else {
			return styles.navbar;
		}
	}

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

	const navVariant = {
		hidden: { opacity: 0 },
		visible: {
		  opacity: 1
		}
	  };

	const navTitleVariant = {
		hidden: {
			opacity: 0,
			y: -10
		},
		visible: {
			opacity: 1,
			y: 0,
		}
	}

	const navLinks = [
		{ link: '#about', span: '01.', text: 'About' },
		{ link: '#skills', span: '02.', text: 'Skills' },
		{ link: '#projects', span: '03.', text: 'Projects' },
		{ link: '#contact', span: '04.', text: 'Contact' },
	];

	return (
		<motion.div 
			className={navClass()}
			initial="hidden"
			animate="visible"
			variants={shouldReduceMotion ? reduceMotionVariant : navVariant}
			transition={{ duration: 1 }}
		>
			<div>
				<Link href=""><Image alt="logo" src={logo} className={styles.logo} width={45} height={45} /></Link>
			</div>
			<div>
				<ul className={styles.navMenu}>
					{navLinks.map((nav, index) => {
						const delay = index * 0.15;
						return (
						<motion.li 
							className={monospace.className}
							key={index}
							initial="hidden"
							animate="visible"
							variants={shouldReduceMotion ? reduceMotionVariant : navTitleVariant}
							transition={{ duration: 1.5, delay }}
						>
						<Link href={nav.link} className={styles.navLink}><span className={styles.navNumber}>{nav.span}</span>{nav.text}</Link>
						</motion.li>
				)})}
					<ThemeToggle />
				</ul>
			</div>
			<HamburgNav />
		</motion.div>
	);
}

export default Nav;
