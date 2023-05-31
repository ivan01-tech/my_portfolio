"use client";
import  { useRef } from "react";
import styles from "../styles/navbtn.module.css";
import { useMobile } from "@/app/Hooks/useMobile";
import { classActive} from "@/app/utils/constant";
import { getClassWithID } from "@/app/utils/getClassWithID";

type Props = {
  children: React.ReactNode;
  linkId: string;
  shouldCallToggle?: boolean;
  classname?:string
};

function NavBtn({ children, linkId, shouldCallToggle,classname }: Props) {
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const mobileMenu  = useMobile();

  let specialClassnameBtn = getClassWithID(linkId);

  /**
   * this helps to apply the scroll behavoir
   * the function to call went a link is clicked
   * @returns
   */
   const clickHandler = () => {
    const currentClass = classActive;

    const isActive = document.querySelectorAll(`.${currentClass}`);

    const doc = document.getElementById(linkId);

    shouldCallToggle && mobileMenu && mobileMenu?.toggleMobileMenu(false);

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
      className={`${styles.link_btn} ${specialClassnameBtn} ${classname}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}

export default NavBtn;
