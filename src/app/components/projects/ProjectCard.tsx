import React from "react";
import Link from "next/link";
import Image from "next/image";
import testImg from "../../../images/intro-image.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { monospace, subheading } from "@/fonts";
import styles from "./projectCard.module.css";
import { Project } from "contentlayer/generated";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function createParagraphs(text: String) {
  const paragraphs = text.split('\n').map((paragraph, index) => (
    <p key={index} className={styles.projectText}>{paragraph}</p>
  ));
  return paragraphs;
}

function ProjectCard(props: { key: number; project: Project }) {

  console.log(props.project.image);
  return (
    <div className={styles.projectCard}>
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
          src={props.project.image || testImg}
          alt="test"
          width={640}
          height={360}
        />
      </div>
    </div>
  );
}

export default ProjectCard;
