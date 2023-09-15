import React from 'react'
import { monospace } from '@/styles/fonts';
import styles from './footer.module.css'
import { faGithub, faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

function Footer() {

	return (

		<div id='footer' className={styles.footer}>
			<Link href='' className={styles.footerLink + " " + monospace.className}>Designed & Built by <span className={styles.name}>Ryan Kadlick</span>.</Link>
			<ul className={styles.iconList}>
				<li>
					<Link href="https://github.com/rkadlick" target='_blank'><FontAwesomeIcon className={styles.iconListIcon} icon={faGithub} /></Link>
				</li>
				<li>
					<Link href="https://codepen.io/rykadlick" target='_blank'><FontAwesomeIcon className={styles.iconListIcon} icon={faCodepen} /></Link>
				</li>
				<li>
					<Link href="https://www.linkedin.com/in/ryankadlick/" target='_blank'><FontAwesomeIcon className={styles.iconListIcon} icon={faLinkedin} /></Link>
				</li>
				<li>
					<Link href="#" target='_blank'><FontAwesomeIcon className={styles.iconListIcon} icon={faFile} /></Link>
				</li>
			</ul>
		</div>
	);
}

export default Footer;
