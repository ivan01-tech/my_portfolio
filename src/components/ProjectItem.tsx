import React from "react";
import styles from "../styles/project.module.css";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import Link from "next/link";

type Props = { project: ProjectsItem };

function ProjectItem({ project }: Props) {
  return (
    <section className={styles.projectItem_wrap}>
      <section className={styles.projectItem_left}>
        <Image
          src={project.imagePath}
          alt={project.projectName}
          width={450}
          height={300}
        />
      </section>
      <section className={styles.projectItem_right}>
        <h3 className={styles.projectItem_title}>{project.projectName}</h3>
        <p className={styles.projectItem_description}>{project.description}</p>
        <div className={styles.projectItem_tags}>
          {project.tags.map((tag) => (
            <span className={styles.projectItem_tags_item}>
              <BsDot />
              <span>{tag}</span>
            </span>
          ))}
        </div>
        <div className={styles.projectItem_links}>
          <Link href={project.source || "#"}>
            <button>Live View</button>
          </Link>
          <Link href={project.link || "#"}>
            <button>View code</button>
          </Link>
        </div>
      </section>
    </section>
  );
}

export default ProjectItem;
