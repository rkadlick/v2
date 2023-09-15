import React from 'react'
import { heading, monospace } from '@/styles/fonts';
import Image from 'next/image'
import testImg from '../../images/intro-image.svg'
import styles from './about.module.css'

function About() {

	return (

		<section id='about'>
			<div className={styles.aboutContainer}>
				<h3 className={ heading.className + ' ' + styles.aboutTitle}><span className={ monospace.className + ' numberHeader'}>01.</span>About Me</h3>
				<Image className={styles.aboutImage} src={testImg} alt='test' />
				<div className={styles.aboutText}>
					<p>As a lifelong musician, before tech I taught guitar and voice, ran a rehearsal studio, and booked concerts in NYC and beyond.</p>
					<p>In 2020, I took a leap and trained in modern app development at Fullstack Academy. I quickly absorbed new concepts, while bringing ambitious ideas and a positive attitude to every challenge.</p>
					<p>When I&apos;m not coding, I&apos;m usually doing yoga, testing out a new recipe, or writing a musical parody on guitar.</p>
				</div>
			</div>
			
		</section>
	);
}

export default About;
