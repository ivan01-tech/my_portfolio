import React from "react";
import styles from "../styles/banner.module.css";
import { FollowMeBtn } from "./FollowMeBtn";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { GrLinkedin, GrLinkedinOption } from "react-icons/gr";
import DownloaMyCV from "./DownloaMyCV";
import HireMe from "./HireMe";
import { socialNetworkLink } from "@/utils/constant";

type Props = {};

function Banner({}: Props) {
  return (
    <section className={styles.banner} id="home_banner">
      <section className={styles.banner_wrap}>
        <section className={styles.banner_header}>
          <h1 className={styles.banner_hello}>Hey, I'm</h1>
          <h1 className={styles.banner_name}>Silatsa Ivan</h1>
          <section className={styles.banner_description}>
            {/* <h3 className={styles.text}>
              <span className={styles.text_word}>A</span>{" "}
              <span className={styles.text_word}>React</span>{" "}
              <span className={styles.text_word}>Frontend</span>{" "}
              <span className={styles.text_word}>Developer</span>
            </h3> */}
            <h3 className={styles.text}>
              <span className={styles.text_word}>A</span>{" "}
              <span className={styles.text_word}>NodeJS</span>{" "}
              <span className={styles.text_word}>Backend</span>{" "}
              <span className={styles.text_word}>Developer</span>
            </h3>
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
            <FollowMeBtn link={socialNetworkLink.github}>
              <BsGithub />
            </FollowMeBtn>

            <FollowMeBtn link={socialNetworkLink.twitter}>
              <BsTwitter />
            </FollowMeBtn>

            <FollowMeBtn link={socialNetworkLink.linked}>
              <GrLinkedinOption />
            </FollowMeBtn>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Banner;
