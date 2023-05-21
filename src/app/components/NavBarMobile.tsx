"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ThemeBtn from "./ThemeBtn";
import { BsFillSunFill, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import Link from "next/link";
import styles from "../styles/mobile.module.css";
import { useMobile } from "@/app/Hooks/useMobile";
import Button from "./Button";
import { FollowMeBtn } from "./FollowMeBtn";

type Props = {};

function NavBarMobile({}: Props): React.JSX.Element {
  const mobileWrapperRef = useRef<HTMLElement | null>(null);
  const { toggleMobileMenu, ShowMobileMenu } = useMobile()!;

  /**
   * the function to call went a link is clicked
   * @returns
   */
  const clickHandler = () => toggleMobileMenu(null);

  useEffect(() => {
    console.log("object");
    if (
      !(mobileWrapperRef.current && mobileWrapperRef.current.addEventListener)
    )
      return;

    const closeMobileMenu = function (e:Event) {
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
            <Link href={"/"} onClick={clickHandler}>
              <li>Accueil</li>
            </Link>
            <Link href={"#skills"} onClick={clickHandler}>
              <li>Skills</li>
            </Link>
            <Link href={"/"} onClick={clickHandler}>
              <li>Portfolio</li>
            </Link>
          </ul>
        </nav>

        <div className={styles.nav_btn}>
          <Link href={"/"}>
            <Button>Download My CV</Button>
          </Link>
          <Link href={"/"}>
            <Button>Hire Me</Button>
          </Link>
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
