"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ThemeBtn from "./ThemeBtn";
import { BsFillSunFill, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import styles from "../styles/mobile.module.css";
import { FollowMeBtn } from "./FollowMeBtn";
import { useMobile } from "@/Hooks/useMobile";
import DownloaMyCV from "./DownloaMyCV";
import HireMe from "./HireMe";

type Props = {};

function NavBarMobile({}: Props): React.JSX.Element {
  const mobileWrapperRef = useRef<HTMLElement | null>(null);
  const { toggleMobileMenu, ShowMobileMenu } = useMobile()!;

  /**
   * this helps me to apply the scroll behavoir
   * the function to call went a link is clicked
   * @returns
   */
  const clickHandler = (id: string) => {
    const doc = document.getElementById(id);

    if (!doc) {
      return;
    }

    doc.scrollIntoView({ behavior: "smooth" });
    toggleMobileMenu(false);
  };

  useEffect(() => {
    if (
      !(mobileWrapperRef.current && mobileWrapperRef.current.addEventListener)
    )
      return;

    const closeMobileMenu = function (e: Event) {
      toggleMobileMenu(null);
    };

    mobileWrapperRef.current.addEventListener("click", function (e) {
      return toggleMobileMenu(false);
    });

    return () => {
      if (
        !(mobileWrapperRef.current && mobileWrapperRef.current.addEventListener)
      )
        return;
      mobileWrapperRef.current.removeEventListener("click", closeMobileMenu);
    };
  }, [mobileWrapperRef]);

  /**
   *
   * @param e
   */
  /* function onClickHnadler(e: Event) {
    console.log("resized");
    toggleMobileMenu(false);
  }
  // to togle the state of the mobile menu base on the window size
  useEventListener("click", onClickHnadler, mobileWrapperRef); */

  return (
    <section
      className={`${ShowMobileMenu ? styles["show_mobile_menu"] : ""} ${
        styles.mobile_wrap
      }`}
      ref={mobileWrapperRef}
    >
      <section className={styles.mobile_container}>
        <section className={styles.mobile_container_head}>
          <Image
            src={"/logos/ivan01-tech.png"}
            width={100}
            height={30}
            alt="ivan01-tech"
            priority
          />
          <div>
            <ThemeBtn>
              <BsFillSunFill />
            </ThemeBtn>

            <button
              className={styles.mobile_close_btn}
              onClick={(e) => {
                toggleMobileMenu(null);
              }}
            >
              <GrFormClose />
            </button>
          </div>
        </section>

        <nav className={styles.mobile_nav}>
          <ul>
            <li>
              <button
                className={styles.link_btn}
                onClick={() => clickHandler("home_banner")}
              >
                Accueil
              </button>
            </li>
            <li>
              <button
                className={styles.link_btn}
                onClick={() => clickHandler("skills")}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                className={styles.link_btn}
                onClick={() => clickHandler("portfolio")}
              >
                Portfolio
              </button>
            </li>
          </ul>
        </nav>

        <div className={styles.nav_btn}>
          <DownloaMyCV />
          <HireMe />
        </div>

        <section className={styles.follow_btn}>
          <FollowMeBtn link={"/"}>
            <BsGithub />
          </FollowMeBtn>

          <FollowMeBtn link={"/"}>
            <BsTwitter />
          </FollowMeBtn>

          <FollowMeBtn link={"/"}>
            <BsLinkedin />
          </FollowMeBtn>
        </section>
      </section>
    </section>
  );
}

export default NavBarMobile;
