import { faCodepen, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCode, faFile, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from './iconList.module.css'
import Link from "next/link";


function IconList() {

	return (
		<div className={styles.iconListContainer}>
			<ul className={styles.iconList}>
			<li>
					<Link href="https://github.com/rkadlick" target='_blank'><FontAwesomeIcon className={styles.iconListIcon} icon={faGithub} /></Link>
				</li>
				<li>
					<Link href="https://codepen.io/rykadlick" target='_blank'><FontAwesomeIcon className={styles.iconListIcon} icon={faCodepen} /></Link>
				</li>
				<li>
					<Link href="https://www.linkedin.com/in/ryankadlick/" target='_blank'> <FontAwesomeIcon className={styles.iconListIcon} icon={faLinkedin} /></Link>
				</li>
				<li>
					<Link href="./resume.pdf" target='_blank'><FontAwesomeIcon className={styles.iconListIcon} icon={faFile} /></Link>
				</li>
			</ul>
		</div>	
	)
}

export default IconList;