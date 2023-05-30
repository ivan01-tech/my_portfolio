import React from "react";
import styles from "../styles/project.module.css";
import Image from "next/image";
import Link from "next/link";
import { GrFormView, GrView } from "react-icons/gr";
import { BsLink45Deg, BsViewStacked } from "react-icons/bs";

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
            <span className={styles.projectItem_tags_item}>{tag}</span>
          ))}
        </div>

        <div className={styles.projectItem_links}>
          <Link
            href={project.link || "#"}
            className={!project.link ? styles.link_disable : ""}
            prefetch={false}
          >
            <BsLink45Deg  />
            <span>View</span>
          </Link>
          <Link
            href={project.source || "#"}
            className={!project.source ? styles.link_disable : ""}
            prefetch={false}
          >
            <GrFormView />
            <span>Code</span>
          </Link>
        </div>
      </section>
    </section>
  );
}

export default ProjectItem;
