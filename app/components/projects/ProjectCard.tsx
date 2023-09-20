'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { monospace, subheading } from "@/fonts";
import styles from "./projectCard.module.css";
import { Project } from "contentlayer/generated";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

function createParagraphs(text: String) {
  const paragraphs = text.split('\n').map((paragraph, index) => (
    <p key={index} className={styles.projectText}>{paragraph}</p>
  ));
  return paragraphs;
}

function ProjectCard(props: { key: number; id: number, project: Project }) {

  const evenVariant = {
    hidden: { 
      opacity: 0,
      x: -500 },
    visible: { 
      opacity: 1,
      x: 0 },
  };

  const oddVariant = {
    hidden: { 
      opacity: 0,
      x: 500 },
    visible: { 
      opacity: 1,
      x: 0 }, 
  }

  const even = props.id % 2 === 0 ? true : false;

  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once when it comes into view
  });


  return (
    <motion.div 
      className={styles.projectCard}
      initial="hidden"
      ref={ref}
      animate={inView ? "visible" : "hidden"}
      variants={even ? evenVariant : oddVariant}
      transition={{ duration: 1 }}
    >
      <div className={styles.projectInfo}>
	  <div className={styles.projectHeader}>
    <h4 className={subheading.className + " " + styles.projectName}>
          {props.project.title}
        </h4>
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
      <div className={styles.projectTextContainer}>
        {createParagraphs(props.project.body.raw)}
      </div>
        <div className={styles.projectTech}>
          {props.project.tech?.map((tech, index) => (
            <div
              key={index}
              className={monospace.className + " " + styles.tech}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.projectDisplay}>
        <Image
          className={styles.projectImage}
          src={props.project.image || ""}
          alt="test"
          width={640}
          height={360}
        />
      </div>
    </motion.div>
  );
}

export default ProjectCard;
