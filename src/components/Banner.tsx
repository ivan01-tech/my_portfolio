import React from "react";
import styles from "../styles/banner.module.css";
import Button from "./Button";
import Link from "next/link";
import { FollowMeBtn } from "./FollowMeBtn";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";

type Props = {};

function Banner({}: Props) {
  return (
    <section className={styles.banner} id="home">
      <section className={styles.banner_wrap}>
        <section className={styles.banner_header}>
          <h1 className={styles.banner_hello}>Hey, I'm</h1>
          {/* <h1 className={styles.banner_hello}>Hey , I'm</h1> */}
          <h1 className={styles.banner_name}>Silatsa Ivan</h1>
          <section className={styles.banner_description}>
            <h3 className={styles.text}>
              {/* <span className={styles.text_word}>A</span>{" "}
              <span className={styles.text_word}>React</span>{" "}
              <span className={styles.text_word}>Frontend</span>{" "}
              <span className={styles.text_word}>Developer</span> */}
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
            <Link href={"/media/ivan01-tech_cv-min.pdf"}>
              <Button>Download My CV</Button>
            </Link>
            <Link href={"/"}>
              <Button fill>Hire Me</Button>
            </Link>
          </section>

          <section className={styles.follow_btns}>
            <FollowMeBtn link={"/"}>
              <BsGithub />
            </FollowMeBtn>

            <FollowMeBtn link={"/"}>
              <BsTwitter />
            </FollowMeBtn>

            <FollowMeBtn link={"/"}>
              <GrLinkedin />
            </FollowMeBtn>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Banner;
