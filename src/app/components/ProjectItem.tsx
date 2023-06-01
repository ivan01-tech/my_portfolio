import styles from "../styles/project.module.css";
import Image from "next/image";
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
          className={styles.image}
        />
      </section>
      <section className={styles.projectItem_right}>
        <h3 className={styles.projectItem_title}>{project.projectName}</h3>
        <p className={styles.projectItem_description}>{project.description}</p>

        <div className={styles.projectItem_tags}>
          {project.tags.map((tag, ind) => (
            <span className={styles.projectItem_tags_item} key={tag + ind}>
              {tag}
            </span>
          ))}
        </div>

        <div className={styles.projectItem_links}>
          <Link
            href={project.link || "#"}
            className={!project.link ? styles.link_disable : ""}
            prefetch={false}
          >
            Live View
          </Link>
          <Link
            href={project.source || "#"}
            className={!project.source ? styles.link_disable : ""}
            prefetch={false}
          >
            View Code
          </Link>
        </div>
      </section>
    </section>
  );
}

export default ProjectItem;
