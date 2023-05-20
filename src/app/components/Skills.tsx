import React from "react";
import { skillsObj } from "../utils/skillsObj";
import SkillsItem from "./SkillsItem";
import styles from "../styles/skills.module.css"
type Props = {  };

function Skills({ }: Props) {
  return (
    <section id="skills" className={styles.skill_wrap}>
      <h2 className={styles.skill_title}>Skills</h2>
      <p>
        I'm able to manipulate some tools related to web development.
        Following is my tech list.
      </p>
      <div>
        {
          skillsObj.map(elt=> <SkillsItem skill={elt}  /> )[0]
        }
      </div>
    </section>
  );
}

export default Skills;
