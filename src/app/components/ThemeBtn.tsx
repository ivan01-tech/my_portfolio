import styles from "../styles/theme.module.css";
type Props = { children: React.ReactNode };

function ThemeBtn({ children }: Props) {
  return <div className={styles.thme_wrap}>{children}</div>;
}

export default ThemeBtn;
