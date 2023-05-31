import React, { HTMLAttributes, useRef } from "react";
import styles from "../styles/button.module.css";
import { classActive } from "@/app/utils/constant";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fill?: boolean;
}

function Button({ children, fill, onClick, ...properties }: ButtonProps) {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  /**
   * this helps me to apply the scroll behavoir
   * the function to call went a link is clicked
   * @returns
   */
  const clickHandler = () => {
    const currentClass = classActive;
    const isActive = document.querySelector(`.${currentClass}`);
    const doc = document.getElementById("contacts");

    if (!doc) return;

    // we add the current class on the
    if (btnRef.current) {
      // remove the current class only id we found the target
      if (isActive) isActive.classList.remove(currentClass);

      btnRef.current.classList.add(currentClass);
    }

    doc.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={onClick ? onClick : clickHandler}
      className={`${styles.btn} ${fill ? styles["fill"] : ""}`}
      {...properties}
      ref={btnRef}
    >
      {children}
    </button>
  );
}

export default Button;
