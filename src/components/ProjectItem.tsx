import React from "react";
import styles from "../styles/project.module.css";
import Image from "next/image";
import { BsDot } from "react-icons/bs";

function ProjectItem() {
  return (
    <section className={styles.projectItem_wrap}>
      <section className={styles.projectItem_left}>
        <Image
          src="/media/note-taking-app.png"
          alt="note-taking-app"
          width={450}
          height={300}
        />
      </section>
      <section className={styles.projectItem_right}>
        <h3 className={styles.projectItem_title}>Note taking App</h3>
        <p className={styles.projectItem_description}>
          It's an application that can help people store their notes, modify
          them, and delete them. They can also search them by tags. I used
          ReactJS and Typescript to build this application.
        </p>
        <div className={styles.projectItem_tags}>
          <span className={styles.projectItem_tags_item}>
            <BsDot />
            <span>React</span>
          </span>
          <span className={styles.projectItem_tags_item}>
            <BsDot />
            <span>TypeScript</span>
          </span><span className={styles.projectItem_tags_item}>
            <BsDot />
            <span>Css Module</span>
          </span>
        </div>
        <div className={styles.projectItem_links}>
          <button>Live View</button>
          <button>View code</button>
        </div>
      </section>
    </section>
  );
}

export default ProjectItem;
