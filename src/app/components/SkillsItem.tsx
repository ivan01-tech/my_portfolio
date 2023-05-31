import styles from "../styles/skillItem.module.css";
import Image from "next/image";

type Props = { skill: SkillType };

function SkillsItem({ skill }: Props) {
  return (
    <section className={styles.skill_wrap}>
      <Image src={skill.path} alt={skill.name} width={80} height={80} />
      <span>{skill.name}</span>
    </section>
  );
}

export default SkillsItem;
