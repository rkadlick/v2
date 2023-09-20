'use client'

import React from "react";
import Link from "next/link";
import { subheading, monospace } from "@/styles/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./projectTile.module.css";
import { Project } from "contentlayer/generated";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

function ProjectTile(props: { key: number; project: Project; id: number }) {

  const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once when it comes into view
  });
  const delay = props.id * 0.4;

  return (
    <motion.div 
      initial="hidden"
      ref={ref}
      animate={inView ? "visible" : "hidden"}
      variants={childVariants}
      transition={{ duration: 1, delay }}
      className={styles.projectTile}

    >
		<div className={styles.projectTileLinks}>
      {props.project.linkSource && (
        <Link
          href={props.project.linkSource}
          className={styles.projectLink}
          target="_blank"
        >
          <FontAwesomeIcon className={styles.projectIcon} icon={faGithub} />
        </Link>
		
      )}
	        {props.project.linkLive && (
        <Link
          href={props.project.linkLive}
          className={styles.projectLink}
          target="_blank"
        >
          <FontAwesomeIcon className={styles.projectIcon} icon={faUpRightFromSquare} />
        </Link>
		
      )}
	</div>
      <h4 className={subheading.className + " " + styles.projectName}>{props.project.title}</h4>
      <p className={styles.projectDescription}>{props.project.body.raw}</p>
      <div className={styles.projectTech}>
        {props.project.tech?.map((tech, index) => (
          <div key={index} className={monospace.className + " " + styles.tech}>
            {tech}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default ProjectTile;
