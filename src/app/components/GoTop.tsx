import styles from "../styles/gottop.module.css";
import LongLine from './LongLine';
import NavBtn from "./NavBtn";

type Props = {};

function GoTop({}: Props) {
  return (
    <div className={styles.gottop_wrap}>
      <NavBtn linkId={"home_banner"} classname={styles.gottop_content}>
        <LongLine />
      </NavBtn>
    </div>
  );
} 

export default GoTop;
