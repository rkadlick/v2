"use client";

import {
  faCodepen,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faFile, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./iconList.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { icon } from "@fortawesome/fontawesome-svg-core";

function IconList() {

  const iconArray = [
    { link: "https://github.com/rkadlick", icon: <FontAwesomeIcon className={styles.iconListIcon} icon={faGithub} /> },
    { link: "https://codepen.io/rykadlick", icon: <FontAwesomeIcon className={styles.iconListIcon} icon={faCodepen} />},
    { link: "https://www.linkedin.com/in/ryankadlick/", icon: <FontAwesomeIcon className={styles.iconListIcon}icon={faLinkedin}/>},
    { link: "./resume.pdf", icon: <FontAwesomeIcon className={styles.iconListIcon} icon={faFile} /> }
  ]

  const containerVariant = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1
    }
  }

  const iconsVariant = {
    hidden: {
      opacity: 0,
	  y: -20,
    },
    visible: {
      opacity: 1,
	  y: 0
    },
  };

  return (
    <div className={styles.iconListContainer}>
      <motion.ul 
	  	className={styles.iconList}
		  initial="hidden"
		  animate="visible"
		  variants={iconsVariant}
		  transition={{ duration: 1, delay: 0.5}}
	  >
    {iconArray.map((iconLink, index) => {
						const delay = (index * 0.15) + 0.8;
						return (
						<motion.li 
							key={index}
							initial="hidden"
							animate="visible"
							variants={iconsVariant}
							transition={{ duration: 1, delay }}
						>
						<Link href={iconLink.link} className={styles.navLink}>{iconLink.icon}</Link>
						</motion.li>
				)})}
      </motion.ul>
    </div>
  );
}

export default IconList;
