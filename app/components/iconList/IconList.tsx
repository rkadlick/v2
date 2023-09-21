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

function IconList() {
  const icons = {
    hidden: {
      opacity: 0,
	  y: 200,
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
		  variants={icons}
		  transition={{ duration: 3, delay: 0.5 }}
	  >
        <li>
          <Link href="https://github.com/rkadlick" target="_blank">
            <FontAwesomeIcon className={styles.iconListIcon} icon={faGithub} />
          </Link>
        </li>
        <li>
          <Link href="https://codepen.io/rykadlick" target="_blank">
            <FontAwesomeIcon className={styles.iconListIcon} icon={faCodepen} />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/ryankadlick/" target="_blank">
            {" "}
            <FontAwesomeIcon
              className={styles.iconListIcon}
              icon={faLinkedin}
            />
          </Link>
        </li>
        <li>
          <Link href="./resume.pdf" target="_blank">
            <FontAwesomeIcon className={styles.iconListIcon} icon={faFile} />
          </Link>
        </li>
      </motion.ul>
    </div>
  );
}

export default IconList;
