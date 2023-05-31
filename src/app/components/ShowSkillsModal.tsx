"use client";
import { useModal } from "@/app/Hooks/useModal";
import styles from "../styles/modal.module.css";
import { skillsObj } from "@/app/utils/SkillSource";
import SkillsItem from "./SkillsItem";
import CloseBtn from "./CloseBtn";

type Props = {};

function ShowSkillsModal({}: Props) {
  const modalcontext = useModal();

  return (
    <aside
      className={`${styles.modal_wrap} ${
        modalcontext && modalcontext.ShowModal ? styles.shows_modal : ""
      }`}
    >
      <section className={styles.modal_content}>
        <div className={styles.modal_head}>
          <h1>Skills</h1>
          <div onClick={() => modalcontext && modalcontext?.toggleModal(false)}>
            <CloseBtn />
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
