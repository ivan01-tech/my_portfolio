import React from "react";
import { FollowMeBtn } from "./FollowMeBtn";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { socialNetworkLink } from "@/utils/constant";
import { ImLinkedin2 } from "react-icons/im";
import styles from "../styles/footer.module.css";
import LinkedIn from "./LinkedIn";
import GitHub from "./GitHub";
import Twitter from "./Twitter";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer_content}>
        <section>
          <p>Ivan01-tech &copy; Copyright 2023</p>
        </section>
        <section className={styles.follow_btn}>
          <Twitter />
          <GitHub />
          <LinkedIn />
        </section>
      </section>
    </footer>
  );
}

export default Footer;
