import ProjectCard from "./ProjectCard";
import ProjectTile from "./ProjectTile";
import { heading, monospace } from "@/styles/fonts";
import styles from "./projects.module.css";
import { allProjects } from "contentlayer/generated";

function Projects() {
  const featuredProjects = allProjects.filter((project) => project.featured);


  const moreProjects = allProjects.filter((project) => !project.featured);

  return (
    <section id="projects">
      <div className={styles.projectsContainer}>
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
      </div>
    </section>
  );
}

export default Projects;
