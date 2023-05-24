"use client";
import {ImLinkedin2} from "react-icons/im"
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ThemeBtn from "./ThemeBtn";
import { BsFillSunFill, BsGithub, BsTwitter } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import styles from "../styles/mobile.module.css";
import { FollowMeBtn } from "./FollowMeBtn";
import { useMobile } from "@/Hooks/useMobile";
import DownloaMyCV from "./DownloaMyCV";
import HireMe from "./HireMe";
import NavBtn from "./NavBtn";
import { socialNetworkLink } from "@/utils/constant";

type Props = {};

function NavBarMobile({}: Props): React.JSX.Element {
  const mobileWrapperRef = useRef<HTMLElement | null>(null);
  const { toggleMobileMenu, ShowMobileMenu } = useMobile()!;

  /* useEffect(() => {
    if (
      !(mobileWrapperRef.current && mobileWrapperRef.current.addEventListener)
    )
      return;

    const closeMobileMenu = function (e: Event) {
      e.preventDefault()
      e.stopPropagation();
      toggleMobileMenu(false);
    };

    mobileWrapperRef.current.addEventListener("click", closeMobileMenu);

    return () => {
      if (
        !(mobileWrapperRef.current && mobileWrapperRef.current.addEventListener)
      )
        return;
      mobileWrapperRef.current.removeEventListener("click", closeMobileMenu);
    };
  }, [mobileWrapperRef]); */

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
      className={`${ShowMobileMenu ? styles["show_mobile_menu"] : ""} 
      ${styles.mobile_wrap}`}
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
                // e.stopPropagation();
                toggleMobileMenu(false);
              }}
            >
              <GrFormClose />
            </button>
          </div>
        </section>

        <nav className={styles.mobile_nav}>
          <ul>
            <li>
              <NavBtn shouldCallToggle linkId="home_banner">
                Accueil
              </NavBtn>
            </li>
            <li>
              <NavBtn shouldCallToggle linkId="skills">
                Skills
              </NavBtn>
            </li>
            <li>
              <NavBtn shouldCallToggle linkId="portfolio">
                Portfolio
              </NavBtn>
            </li>
          </ul>
        </nav>

        <div className={styles.nav_btn}>
          <DownloaMyCV />
          <HireMe />
        </div>

        <section className={styles.follow_btn}>
          <FollowMeBtn link={socialNetworkLink.github}>
            <BsGithub />
          </FollowMeBtn>

          <FollowMeBtn link={socialNetworkLink.twitter}>
            <BsTwitter />
          </FollowMeBtn>

          <FollowMeBtn link={socialNetworkLink.linked}>
            <ImLinkedin2 />
          </FollowMeBtn>
        </section>
      </section>
    </section>
  );
}

export default NavBarMobile;
