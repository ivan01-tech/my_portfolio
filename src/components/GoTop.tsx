import styles from "../styles/gottop.module.css";
import LongLine from './LongLine';

type Props = {};

function GoTop({}: Props) {
  return (
    <div className={styles.gottop_wrap}>
      <div className={styles.gottop_content}>
        <LongLine />
      </div>
    </div>
  );
} 

export default GoTop;
