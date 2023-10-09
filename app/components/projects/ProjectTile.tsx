import React from "react";
import Link from "next/link";
import { subheading, monospace } from "@/styles/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./projectTile.module.css";
import { Project } from "contentlayer/generated";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { motion, useReducedMotion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

function ProjectTile(props: { key: number; project: Project; id: number }) {

  function createParagraphs(text: String) {
    const paragraphs = text.split('\n').map((paragraph, index) => (
      <p key={index} className={styles.projectText}>{paragraph}</p>
    ));
    return paragraphs;
  }

  const shouldReduceMotion = useReducedMotion();


  const reduceMotionVariant = {
    hidden: {
      opacity: 1,
      x: 0,
      y: 0
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0
    }
  }

  const childVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1, 
      y: 0
    },
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
      variants={shouldReduceMotion ? reduceMotionVariant : childVariants}
      transition={{ duration: 1, delay }}
      className={styles.projectTile}

    >
		<div className={styles.projectTileLinks}>
      {props.project.linkSource && (
        <Link
          href={props.project.linkSource}
          className={styles.projectLink}
          target="_blank"
          aria-label="Source Link"
        >
          <FontAwesomeIcon className={styles.projectIcon} icon={faGithub} />
        </Link>
		
      )}
	        {props.project.linkLive && (
        <Link
          href={props.project.linkLive}
          className={styles.projectLink}
          target="_blank"
          aria-label="Live link"
        >
          <FontAwesomeIcon className={styles.projectIcon} icon={faUpRightFromSquare} />
        </Link>
		
      )}
	</div>
      <h4 className={subheading.className + " " + styles.projectName}>{props.project.title}</h4>
      {createParagraphs(props.project.body.raw)}
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
