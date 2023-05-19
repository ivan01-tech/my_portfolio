"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ThemeBtn from "./ThemeBtn";
import { BsFacebook, BsFillSunFill, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { GrFacebook, GrFormClose, GrGithub, GrTwitter } from "react-icons/gr";
import Link from "next/link";
import styles from "../styles/mobile.module.css";
import { useMobile } from "@/app/Hooks/useMobile";
import Button from "./Button";
import { FollowMeBtn } from "./FollowMeBtn";

type Props = {};

function NavBarMobile({}: Props): React.JSX.Element {
  const mobileWrapperRef = useRef<HTMLElement | null>(null);

  const { toggleMobileMenu, ShowMobileMenu } = useMobile()!;
/* 
  useEffect(() => {
    if (!mobileWrapperRef?.current) return;

    const closeMobileMenu = function (e: MouseEvent) {
      e.stopPropagation();

      toggleMobileMenu(null);
    };

    mobileWrapperRef.current.addEventListener("click", function (e) {
      return toggleMobileMenu(false);
    });

    return () => {
      if (!mobileWrapperRef?.current) return;
      mobileWrapperRef.current.removeEventListener("click", closeMobileMenu);
    };
  }, []); */

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
              onClick={() => toggleMobileMenu(null)}
            >
              <GrFormClose />
            </button>
          </div>
        </section>

        <nav className={styles.mobile_nav}>
          <ul>
            <Link href={"/"}>
              <li>Accueil</li>
            </Link>
            <Link href={"/"}>
              <li>Skills</li>
            </Link>
            <Link href={"/"}>
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
