import React from "react";
import styles from "../styles/skillItem.module.css";
import Image from "next/image";
type Props = { skill: SkillType };

function SkillsItem({ skill }: Props) {
  return (
    <section className={styles.skill_wrap}>
      <figure>
        <caption>
          <Image src={skill.path} alt={skill.name} width={50} height={50} />
        </caption>
        <figcaption>{skill.name}</figcaption>
      </figure>
    </section>
  );
}

export default SkillsItem;
