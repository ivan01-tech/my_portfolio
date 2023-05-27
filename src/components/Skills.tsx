"use client";
import { FaArrowRight, FaLine, FaLink } from "react-icons/fa";
import React from "react";
import { skillsObj } from "../utils/SkillSource";
import SkillsItem from "./SkillsItem";
import styles from "../styles/skills.module.css";
import Button from "./Button";
import { useModal } from "@/Hooks/useModal";
import { BsArrowRight } from "react-icons/bs";

type Props = {};

function Skills({}: Props) {
  const { toggleModal } = useModal()!;

  return (
    <section id="skills" className={styles.skill_wrap}>
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
            console.log("called !");
            toggleModal(true);
          }}
        >
          <span>See More </span>
          <BsArrowRight className={styles.arrLeft} />
        </Button>
      </div>
    </section>
  );
}

export default Skills;
