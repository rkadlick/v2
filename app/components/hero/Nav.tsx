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

	return (
		<div className={navClass()}>
			<div>
				<Link href=""><Image alt="logo" src={logo} className={styles.logo} width={45} height={45} /></Link>
			</div>
			<div>
				<ul className={styles.navMenu}>
					<li className={monospace.className}>
						<Link href="#about" className={styles.navLink}><span className={styles.navNumber}>01.</span>About</Link>
					</li>
					<li className={monospace.className}>
						<Link href="#skills" className={styles.navLink}><span className={styles.navNumber}>02.</span>Skills</Link>
					</li>
					<li className={monospace.className}>
						<Link href="#projects" className={styles.navLink}><span className={styles.navNumber}>03.</span>Projects</Link>
					</li>
					<li className={monospace.className}>
						<Link href="#contact" className={styles.navLink}><span className={styles.navNumber}>04.</span>Contact</Link>
					</li>
					<ThemeToggle />
				</ul>
			</div>
			<HamburgNav />
		</div>
	);
}

export default Nav;
