'use client'

import React from 'react'
import Nav from './Nav';
import Rocket from './Rocket'
import Image from 'next/image'
import { heading, monospace, subheading } from '@/styles/fonts';
import styles from './hero.module.css'
import useScrollDirection from '@/app/hooks/useScrollDirection';

function Hero() {

	return (
		<header className={styles.hero}>
			<Nav />
			<section id="intro" className={styles.introSection}>
				<div className={styles.introContainer}>
					<div className={styles.introText}>
						<span className={monospace.className + ' ' + styles.greeting}>Hey, my name is</span>
						<h1 className={heading.className + " " + styles.introName}>Ryan Kadlick.</h1>
						<h2 className={subheading.className + " " + styles.introTitle}>I create unique designs and applications.</h2>
						<p className={styles.introDescription}>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m persuing a new adventure.</p>
						{/*
					<div className='intro-links-container'>
						<a href='' className='intro-link'><FontAwesomeIcon className='intro-icon' icon={faFile} />Resume</a>
					</div>
						*/}
					</div>
					<div className={styles.introImage}>
					<Rocket />
					</div>
				</div>
			</section>
		</header>
	);
}

export default Hero;
