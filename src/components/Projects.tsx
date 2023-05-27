import React from "react";
import styles from "../styles/projects.module.css";
import ProjectItem from "@/components/ProjectItem";
import { projectsSource } from "@/utils/PorjectsSource";

type Props = { };

function Projects({}: Props) {
  
  return (
    <section className={styles.projects_wrap} id="projects">
      <h2 className={`title`}>Projects</h2>
      <p className={`description`}>
Since i start web developement, i worked on many personal projects and here are some of them!
      </p>
      <div className={styles.project_items}>
        {projectsSource.map(project=> <ProjectItem project={project} /> )}
      </div>
    </section>
  );
}

export default Projects;
