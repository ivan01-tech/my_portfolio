import React from "react";
import styles from "../styles/navbtn.module.css";
import { useMobile } from "@/Hooks/useMobile";
type Props = { children: React.ReactNode; linkId: string,shouldCallToggle?:boolean };

function NavBtn({ children, linkId,shouldCallToggle }: Props) {
  const { toggleMobileMenu } = useMobile()!;

  /**
   * this helps me to apply the scroll behavoir
   * the function to call went a link is clicked
   * @returns
   */
  const clickHandler = () => {
    shouldCallToggle && toggleMobileMenu(false);

    const doc = document.getElementById(linkId);

    if (!doc) return;
    
    doc.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button className={styles.link_btn} onClick={clickHandler}>
      {children}
    </button>
  );
}

export default NavBtn;
