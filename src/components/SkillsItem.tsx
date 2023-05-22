import React from "react";
import styles from "../styles/skillItem.module.css";
import Image from "next/image";

type Props = { skill: SkillType };

function SkillsItem({ skill }: Props) {
  return (
    <section className={styles.skill_wrap}>
      <figure className={styles.skill_content}>
        <div className={styles.skill_head}>
          <Image src={skill.path} alt={skill.name} width={80} height={80} />
        </div>
        <figcaption>{skill.name}</figcaption>
      </figure>
    </section>
  );
}

export default SkillsItem;
