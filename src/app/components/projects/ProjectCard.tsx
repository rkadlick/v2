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

function ProjectCard(props: { key: number; project: Project }) {

  console.log(props.project.image);
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectInfo}>
	  <div className={styles.projectLinks}>
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
        <h4 className={subheading.className + " " + styles.projectName}>
          {props.project.title}
        </h4>
        <p className={styles.projectText}>{props.project.body.raw}</p>
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
        <div className={styles.imgOverlay}></div>
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
