import React from 'react'
import { heading, text, monospace } from '@/styles/fonts';
import Image from 'next/image'
import testImg from '../../images/intro-image.svg'
import styles from './contact.module.css'
import Logo from './Logo'

function Contact() {

	return (

		<section id='contact'>
			<div className={styles.contactContainer}>
				<h3 className={ heading.className + ' ' + styles.contactTitle}><span className={ monospace.className + ' numberHeader'}>04.</span>Contact</h3>
				<div className={styles.contactLogo}>
					<Logo />
				</div>
				<div className={styles.formContainer}>
					<p className={styles.contactText}>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
					<form className={styles.contactForm}>
						<input className={text.className + ' ' + styles.contactName} type='text' placeholder='Name' />
						<input className={text.className + ' ' + styles.contactEmail} type='text' placeholder='Email' />
						<textarea className={text.className + ' ' + styles.contactMessage} rows={4} placeholder='Message...'/>
						<input className={heading.className + ' ' + styles.contactSubmit} type='submit' value='Send' />
					</form>
				</div>
			</div>
		</section>
	);
}

export default Contact;
