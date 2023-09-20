import {
	faAndroid,
	faAws,
	faBootstrap,
	faCss3Alt,
	faGit,
	faHtml5,
	faJava,
	faJs,
	faNodeJs,
	faPhp,
	faPython,
	faReact,
	faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import {
	faCode,
	faDatabase,
	faImages,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { subheading, heading, monospace } from "@/styles/fonts";
import styles from "./skills.module.css";

function Skills() {
	const frontend = [
		{ icon: <FontAwesomeIcon className={styles.skillsIcon} icon={faHtml5} />, text: 'HTML' },
		{ icon: <FontAwesomeIcon className={styles.skillsIcon} icon={faCss3Alt} />, text: 'CSS' },
		{ icon: <FontAwesomeIcon className={styles.skillsIcon} icon={faJs} />, text: 'Javascript' },
		{ icon: <FontAwesomeIcon className={styles.skillsIcon} icon={faJs} />, text: 'Typescript' },
		{ icon: <FontAwesomeIcon className={styles.skillsIcon} icon={faReact} />, text: 'React' },
		{ icon: <FontAwesomeIcon className={styles.skillsIcon} icon={faReact} />, text: 'NextJs' },
		{ icon: <FontAwesomeIcon className={styles.skillsIcon} icon={faBootstrap} />, text: 'Bootstrap' },
	];

	const backend = [
		{ icon: <FontAwesomeIcon className={styles.skillsIcon} icon={faJava} />, text: 'Java' },
		{ icon: <FontAwesomeIcon className={styles.skillsIcon} icon={faPython} />, text: 'Python' },
		{ icon: <FontAwesomeIcon className={styles.skillsIcon} icon={faAndroid} />, text: 'Kotlin' },
		{ icon: <FontAwesomeIcon className={styles.skillsIcon} icon={faDatabase} />, text: 'SQL' },
		{ icon: <FontAwesomeIcon className={styles.skillsIcon} icon={faPhp} />, text: 'PHP' },
		{ icon: <FontAwesomeIcon className={styles.skillsIcon} icon={faNodeJs} />, text: 'NodeJs' },
		{ icon: <FontAwesomeIcon className={styles.skillsIcon} icon={faCode} />, text: 'Rest APIs' },
	  ];

	const tools = [
		{ icon: <FontAwesomeIcon className={styles.skillsIcon} icon={faGit} />, text: 'Git' },
		{ icon: <FontAwesomeIcon className={styles.skillsIcon} icon={faCode} />, text: 'VSCode' },
		{ icon: <FontAwesomeIcon className={styles.skillsIcon} icon={faWordpress} />, text: 'Wordpress' },
		{ icon: <FontAwesomeIcon className={styles.skillsIcon} icon={faAws} />, text: 'AWS' },
		{ icon: <FontAwesomeIcon className={styles.skillsIcon} icon={faAndroid} />, text: 'Android Studio' },
		{ icon: <FontAwesomeIcon className={styles.skillsIcon} icon={faImages} />, text: 'Adobe Creative Suite' },
		{ icon: <FontAwesomeIcon className={styles.skillsIcon} icon={faImages} />, text: 'Affinity Creative Suite' },
	  ];

	return (
		<section id="skills">
			<div className={styles.skillsContainer}>
				<h3 className={heading.className + " " + styles.skillsTitle}>
					<span className={monospace.className + " numberHeader"}>02.</span>
					Skills
				</h3>
				<div className={styles.skillsCarousel}>
					<div className={styles.skillsCard}>
						<h4 className={subheading.className + " " + styles.skillsSubtitle}>
							FRONT-END
						</h4>
						<ul className={styles.skillsList}>
							{frontend.map((skill, index) => (
								<li 
									className={monospace.className + " " + styles.skillsItem}
									key={index}
								>
									{skill.icon}{skill.text}
								</li>
							))}
						</ul>
					</div>
					<div className={styles.skillsCard}>
						<h4 className={subheading.className + " " + styles.skillsSubtitle}>
							BACK-END
						</h4>
						<ul className={styles.skillsList}>
						{backend.map((skill, index) => (
								<li 
									className={monospace.className + " " + styles.skillsItem}
									key={index}
								>
									{skill.icon}{skill.text}
								</li>
							))}
						</ul>
					</div>
					<div className={styles.skillsCard}>
						<h4 className={subheading.className + " " + styles.skillsSubtitle}>
							TOOLS
						</h4>
						{tools.map((skill, index) => (
								<li 
									className={monospace.className + " " + styles.skillsItem}
									key={index}
								>
									{skill.icon}{skill.text}
								</li>
							))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
