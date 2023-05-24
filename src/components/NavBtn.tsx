import React, { useCallback, useEffect, useRef } from "react";
import styles from "../styles/navbtn.module.css";
import { useMobile } from "@/Hooks/useMobile";
import { classActive } from "@/utils/constant";

type Props = {
  children: React.ReactNode;
  linkId: string;
  shouldCallToggle?: boolean;
};

function NavBtn({ children, linkId, shouldCallToggle }: Props) {
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const { toggleMobileMenu } = useMobile()!;

  /**
   * this helps me to apply the scroll behavoir
   * the function to call went a link is clicked
   * @returns
   */
  const clickHandler = () => {

    const currentClass = shouldCallToggle
      ? classActive.mobileClass
      : classActive.fullClass;

    const isActive = document.querySelector(`.${currentClass}`);

    const doc = document.getElementById(linkId);

    shouldCallToggle && toggleMobileMenu(false);

    console.log(currentClass, isActive, doc);

    if (!doc) return;

    // we add the current class on the 
    if(btnRef.current){
      // remove the current class only id we found the target
      if (isActive) isActive.classList.remove(currentClass);

      btnRef.current.classList.add(currentClass)
    }

    doc.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button ref={btnRef} className={styles.link_btn} onClick={clickHandler}>
      {children}
    </button>
  );
}

export default NavBtn;
