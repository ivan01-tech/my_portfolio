"use client"
import  { useRef } from "react";
import styles from "../styles/projects.module.css";
import ProjectItem from "@/components/ProjectItem";
import { projectsSource } from "@/utils/PorjectsSource";
import { linkIDS } from "@/utils/constant";
import { useIntersectObserver } from "@/Hooks/useIntersecObserver";

type Props = {};

function Projects({}: Props) {
  const projectRef = useRef<HTMLElement | null>(null);

  /**
   *  to detect wheter the banner is visible and change the associated
  */ 
  useIntersectObserver(projectRef, { rootMargin: "0%",threshold:.2 });
  return (
    <section ref={projectRef} className={styles.projects_wrap} id={linkIDS.projects}>
      <h2 className={`title`}>Projects</h2>
      <p className={`description`}>
        Since i start web developement, i worked on many personal projects and
        here are some of them!
      </p>
      <div className={styles.project_items}>
        {projectsSource.map((project,ind) => (
          <ProjectItem project={project} key={ind+project.projectName} />
        ))}
        
      </div>
    </section>
  );
}

export default Projects;
