"use client";
import  { useRef } from "react";
import styles from "../styles/navbtn.module.css";
import { useMobile } from "@/Hooks/useMobile";
import { classActive, linkIDS, navBtns } from "@/utils/constant";
import { getClassWithID } from "@/utils/getClassWithID";

type Props = {
  children: React.ReactNode;
  linkId: string;
  shouldCallToggle?: boolean;
};

function NavBtn({ children, linkId, shouldCallToggle }: Props) {
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const { toggleMobileMenu } = useMobile()!;

  let specialClassnameBtn = getClassWithID(linkId);

  //console.log("class : ", specialClassnameBtn);
  /**
   * this helps to apply the scroll behavoir
   * the function to call went a link is clicked
   * @returns
   */
  const clickHandler = () => {
    const currentClass = classActive;

    const isActive = document.querySelectorAll(`.${currentClass}`);

    const doc = document.getElementById(linkId);

    shouldCallToggle && toggleMobileMenu(false);

    //console.log(currentClass, isActive, doc);

    if (!doc) return;

    // we add the current class on the
    if (btnRef.current) {
      // remove the current class only id we found the target
      if (isActive)
        isActive.forEach((elt) => {
          elt.classList.remove(currentClass);
        });

      const btns = document.querySelectorAll(`.${specialClassnameBtn}`);
      //console.log("current : ", btns);

      btns.forEach((elt) => {
        elt.classList.add(currentClass);
      });
    }

    doc.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      ref={btnRef}
      className={`${styles.link_btn} ${specialClassnameBtn}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}

export default NavBtn;
