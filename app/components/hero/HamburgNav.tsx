'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { monospace } from '@/fonts'
import styles from './hamburgNav.module.css'
import ThemeToggle from './ThemeToggle'
import { CSSTransition } from 'react-transition-group'

function HamburgNav() {

	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<div className={styles.hamburgMenu}>
			<input type='checkbox' onChange={showSidebar} />
			<CSSTransition
				in={sidebar}
				timeout={300}
				classNames='hamburgIcon'
			>
				<div className={styles.hamburgIcon}>
					<span className={styles.hamburgLine1}></span>
					<span className={styles.hamburgLine2}></span>
					<span className={styles.hamburgLine3}></span>
				</div>
			</CSSTransition>
			<CSSTransition
				in={sidebar}
				timeout={300}
				classNames='sidebar'
				unmountOnExit
			>
				<ul className={styles.hamburgList}>
					<ThemeToggle />
					<li className={monospace.className}>
						<Link href="#about" className={styles.hamburgNavLink} onClick={showSidebar}><span className={styles.hamburgNavNumber}>01.</span>About</Link>
					</li>
					<li className={monospace.className}>
						<Link href="#skills" className={styles.hamburgNavLink} onClick={showSidebar}><span className={styles.hamburgNavNumber}>02.</span>Skills</Link>
					</li>
					<li className={monospace.className}>
						<Link href="#projects" className={styles.hamburgNavLink} onClick={showSidebar}><span className={styles.hamburgNavNumber}>03.</span>Projects</Link>
					</li>
					<li className={monospace.className}>
						<Link href="#contact" className={styles.hamburgNavLink} onClick={showSidebar}><span className={styles.hamburgNavNumber}>04.</span>Contact</Link>
					</li>
				</ul>
			</CSSTransition>
		</div>
	);
}

export default HamburgNav;
