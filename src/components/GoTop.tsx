import { BsArrowRight } from "react-icons/bs";
import styles from "../styles/gottop.module.css";

type Props = {};

function GoTop({}: Props) {
  return (
    <div className={styles.gottop_wrap}>
      <div className={styles.gottop_content}>
        <BsArrowRight />
      </div>
    </div>
  );
}

export default GoTop;
