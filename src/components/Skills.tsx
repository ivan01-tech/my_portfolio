"use client";
import  { useRef } from "react";
import { skillsObj } from "../utils/SkillSource";
import SkillsItem from "./SkillsItem";
import styles from "../styles/skills.module.css";
import Button from "./Button";
import { useModal } from "@/Hooks/useModal";
import { linkIDS } from "@/utils/constant";
import { useIntersectObserver } from "@/Hooks/useIntersecObserver";
import LongLine from "./LongLine";

type Props = {};

function Skills({}: Props) {
  const skillsRef = useRef<HTMLElement | null>(null);

  const { toggleModal } = useModal()!;

  /**
   *  to detect wheter the banner is visible and change the associated
   */
  useIntersectObserver(skillsRef, { threshold:.2 });

  return (
    <section ref={skillsRef} id={linkIDS.skills} className={styles.skill_wrap}>
      <h2 className="title">Skills</h2>

      <p className="description">
        I'm able to manipulate some tools related to web development. Following
        is my tech list.
      </p>

      <div className={styles.skills_item}>
        {skillsObj
          .map((elt, ind) => <SkillsItem key={elt.name + ind} skill={elt} />)
          .slice(0, 8)}
      </div>

      <div className={styles.view_all_sec}>
        <Button
          onClick={() => {
            //console.log("called !");
            toggleModal(true);
          }}
        >
          <span>See More </span>
          {/* <BsArrowRight className={styles.arrLeft} /> */}
          <LongLine />
        </Button>
      </div>
    </section>
  );
}

export default Skills;
