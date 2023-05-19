import React from "react";
import  styles  from "../styles/button.module.css";

type Props = {
  children: React.ReactNode;
};

function Button({ children }: Props) {
  return <button className={styles.btn}>{children}</button>;
}

export default Button;
