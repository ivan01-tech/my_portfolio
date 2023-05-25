import React from "react";
import styles from "../styles/projects.module.css";
import  ProjectItem  from "@/components/ProjectItem";

type Props = {};

function Projects({}: Props) {
  return (
    <section className={styles.projects_wrap} id="projects" >
      <h2 className={`title`}>Projects</h2>
      <p className={`description`}>
        I worked on many personal projects and here are some of it!
      </p>
      <div className={styles.project_items}>
        <ProjectItem />
        <span className={styles.separator} />
        <ProjectItem />
        <span className={styles.separator} />
        <ProjectItem />
        <span className={styles.separator} />
        <ProjectItem />
      </div>

    </section>
  );
}

export default Projects;
