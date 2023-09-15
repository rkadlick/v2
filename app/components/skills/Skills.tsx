import { faAndroid, faAws, faBootstrap, faCss3Alt, faGit, faHtml5, faJava, faJs, faNodeJs, faPhp, faPython, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faImages } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { subheading, heading, monospace } from '@/styles/fonts';
import styles from './skills.module.css'

function Skills() {

	return (
			<section id='skills'>
				<div className={styles.skillsContainer}>
					<h3 className={ heading.className + ' ' + styles.skillsTitle}><span className={ monospace.className + ' numberHeader'}>02.</span>Skills</h3>
					<div className={styles.skillsCarousel}>
						<div className={styles.skillsCard}>
							<h4 className={ subheading.className + ' ' + styles.skillsSubtitle}>FRONT-END</h4>
							<ul className={styles.skillsList}>
								<li className={ monospace.className + ' ' + styles.skillsItem}><FontAwesomeIcon className={styles.skillsIcon} icon={faHtml5} />HTML</li>
								<li className={ monospace.className + ' ' + styles.skillsItem}><FontAwesomeIcon className={styles.skillsIcon} icon={faCss3Alt} />CSS</li>
								<li className={ monospace.className + ' ' + styles.skillsItem}><FontAwesomeIcon className={styles.skillsIcon} icon={faJs} />Javascript</li>
								<li className={ monospace.className + ' ' + styles.skillsItem}><FontAwesomeIcon className={styles.skillsIcon} icon={faJs} />Typescript</li>
								<li className={ monospace.className + ' ' + styles.skillsItem}><FontAwesomeIcon className={styles.skillsIcon} icon={faReact} />React</li>
								<li className={ monospace.className + ' ' + styles.skillsItem}><FontAwesomeIcon className={styles.skillsIcon} icon={faReact} />NextJs</li>
								<li className={ monospace.className + ' ' + styles.skillsItem}><FontAwesomeIcon className={styles.skillsIcon} icon={faBootstrap} />Bootstrap</li>
							</ul>
						</div>
						<div className={styles.skillsCard}>
							<h4 className={ subheading.className + ' ' + styles.skillsSubtitle}>BACK-END</h4>
							<ul className={styles.skillsList}>
								<li className={ monospace.className + ' ' + styles.skillsItem}><FontAwesomeIcon className={styles.skillsIcon} icon={faJava} />Java</li>
								<li className={ monospace.className + ' ' + styles.skillsItem}><FontAwesomeIcon className={styles.skillsIcon} icon={faPython} />Python</li>
								<li className={ monospace.className + ' ' + styles.skillsItem}><FontAwesomeIcon className={styles.skillsIcon} icon={faAndroid} />Kotlin</li>
								<li className={ monospace.className + ' ' + styles.skillsItem}><FontAwesomeIcon className={styles.skillsIcon} icon={faDatabase} />SQL</li>
								<li className={ monospace.className + ' ' + styles.skillsItem}><FontAwesomeIcon className={styles.skillsIcon} icon={faPhp} />PHP</li>
								<li className={ monospace.className + ' ' + styles.skillsItem}><FontAwesomeIcon className={styles.skillsIcon} icon={faNodeJs} />NodeJs</li>
								<li className={ monospace.className + ' ' + styles.skillsItem}><FontAwesomeIcon className={styles.skillsIcon} icon={faCode} />Rest APIs</li>
							</ul>
						</div>
						<div className={styles.skillsCard}>
							<h4 className={ subheading.className + ' ' + styles.skillsSubtitle}>TOOLS</h4>
							<ul className={styles.skillsList}>
								<li className={ monospace.className + ' ' + styles.skillsItem}><FontAwesomeIcon className={styles.skillsIcon} icon={faGit} />Git</li>
								<li className={ monospace.className + ' ' + styles.skillsItem}><FontAwesomeIcon className={styles.skillsIcon} icon={faCode} />VSCode</li>
								<li className={ monospace.className + ' ' + styles.skillsItem}><FontAwesomeIcon className={styles.skillsIcon} icon={faWordpress} />Wordpress</li>
								<li className={ monospace.className + ' ' + styles.skillsItem}><FontAwesomeIcon className={styles.skillsIcon} icon={faAws} />AWS</li>
								<li className={ monospace.className + ' ' + styles.skillsItem}><FontAwesomeIcon className={styles.skillsIcon} icon={faAndroid} />Android Studio</li>
								<li className={ monospace.className + ' ' + styles.skillsItem}><FontAwesomeIcon className={styles.skillsIcon} icon={faImages} />Adobe Creative Suite</li>
								<li className={ monospace.className + ' ' + styles.skillsItem}><FontAwesomeIcon className={styles.skillsIcon} icon={faImages} />Affinity Creative Suite</li>
								
							</ul>
						</div>
					</div>
				</div>
			</section>
	);
}

export default Skills;
