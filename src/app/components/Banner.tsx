"use client";
import React, { useRef } from "react";
import styles from "../styles/banner.module.css"
import DownloaMyCV from "./DownloaMyCV";
import HireMe from "./HireMe";
import { animationTime, linkIDS } from "@/app/utils/constant";
import { useIntersectObserver } from "@/app/Hooks/useIntersecObserver";
import Twitter from "./Twitter";
import GitHub from "./GitHub";
import LinkedIn from "./LinkedIn";
import useInterval from "@/app/Hooks/useInterval";

type Props = {};

function Banner({}: Props) {
  // to be able to set the innerHTML of the description DOM
  const bannerRef = useRef<HTMLElement | null>(null);
  const descriptionRef = useRef<HTMLElement | null>(null);

  /**
   *  to detect wheter the banner is visible and change the associated
   */
  useIntersectObserver(bannerRef, { rootMargin: "10%", threshold: 0.1 });

  let round = 3;
  // to set the content of the description after the aimation is completed
  useInterval(function () {
    if (!descriptionRef.current) return;

    let num = round % 3;

    descriptionRef.current.innerHTML =
      num === 0
        ? `
      <h3 class="text">
        <span class="text_word">A React Frontend Developer </span>
      </h3> 
    `
        : num === 1
        ? `
    <h3 class="text">
      <span class="text_word">A NodeJS Backend Developer </span>
    </h3>
    `
        : `
    <h3 class="text">
      <span class="text_word">A Fullstack JavaScript Dev</span>
    </h3>
    `;

    round = round + 1;
  }, animationTime);

  return (
    <section ref={bannerRef} className={styles.banner} id={linkIDS.home}>
      <section className={styles.banner_wrap}>
        <section className={styles.banner_header}>
          <h1 className={styles.banner_hello}>Hey, I'm</h1>
          <h1 className={styles.banner_name}>Silatsa Ivan</h1>

          <section ref={descriptionRef} className={styles.banner_description}>
            {/* decription content */}
            <h2 className={"text"}>
              <span className={"text_word"}>A NodeJS Backend Developer</span>
            </h2>
          </section>
        </section>

        <section className={styles.banner_middle}>
          I like to develop , test, and deploy web apps using JavaScript
          technologies.
        </section>

        <section className={styles.banner_footer}>
          <section className={styles.banner_hireme_section}>
            <DownloaMyCV />
            <HireMe />
          </section>

          <section className={styles.follow_btns}>
            <Twitter />
            <GitHub />
            <LinkedIn />
          </section>
        </section>
      </section>
    </section>
  );
}

export default Banner;
