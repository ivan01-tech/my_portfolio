import React, { HTMLAttributes } from "react";
import styles from "../styles/button.module.css";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fill?: boolean;
}

function Button({ children, fill, onClick, ...properties }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${fill ? styles["fill"] : ""}`}
      {...properties}
    >
      {children}
    </button>
  );
}

export default Button;
