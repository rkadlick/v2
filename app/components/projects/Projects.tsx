'use client'

import ProjectCard from "./ProjectCard";
import ProjectTile from "./ProjectTile";
import { heading, monospace } from "@/styles/fonts";
import styles from "./projects.module.css";
import { allProjects } from "contentlayer/generated";
import { motion, useReducedMotion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

function Projects() {
  const featuredProjects = allProjects.filter((project) => project.featured);


  const moreProjects = allProjects.filter((project) => !project.featured);

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

  const containerVariant = {
		hidden: { 
		  opacity: 0,
		  y: 50 },
		visible: { 
		  opacity: 1,
		  y: 0 },
	  };

    const [ref, inView] = useInView({
      triggerOnce: true, // Animation triggers only once when it comes into view
    });

  return (
    <section id="projects">
      <motion.div 
        className={styles.projectsContainer}
        initial="hidden"
        ref={ref}
        animate={inView ? "visible" : "hidden"}
        variants={shouldReduceMotion ? reduceMotionVariant : containerVariant}
        transition={{ duration: 1, delay: 0.1}}
      >
        <h3 className={heading.className + " " + styles.projectsTitle}>
          <span className={monospace.className + " numberHeader"}>03.</span>
          Projects
        </h3>
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} id={index} project={project} />
        ))}
        <h3 className={heading.className + " " + styles.projectsSubtitle}>
          Additional Projects
        </h3>
        <div 
          className={styles.moreProjects}
          
        >
		{moreProjects.map((project, index) => (
          <ProjectTile key={index} id={index} project={project} />
        ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
