"use client";

import { useModal } from "@/Hooks/useModal";
import React from "react";
import styles from "../styles/modal.module.css";
import { GrFormClose } from "react-icons/gr";
import { skillsObj } from "@/utils/SkillSource";
import SkillsItem from "./SkillsItem";

type Props = {};

function ShowSkillsModal({}: Props) {
  const { ShowModal, toggleModal } = useModal()!;

  return (
    <aside
      className={`${styles.modal_wrap} ${ShowModal ? styles.shows_modal : ""}`}
    >
      <section className={styles.modal_content}>
        <div className={styles.modal_head}>
          <h1>Skills</h1>
          <div onClick={() => toggleModal(false)}>
            <GrFormClose />
          </div>
        </div>
        <div className={styles.modal_main}>
          {skillsObj.map((elt, ind) => (
            <SkillsItem key={elt.name + ind} skill={elt} />
          ))}
        </div>
      </section>
    </aside>
  );
}

export default ShowSkillsModal;
