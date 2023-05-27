import React from "react";
import { FollowMeBtn } from "./FollowMeBtn";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { socialNetworkLink } from "@/utils/constant";
import { ImLinkedin2 } from "react-icons/im";
import styles from "../styles/footer.module.css";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer_content}>
        <section>
          <p>Ivan01-tech &copy; Copyright 2023</p>
        </section>
        <section className={styles.follow_btn}>
          <FollowMeBtn link={socialNetworkLink.github} isWhite>
            <BsGithub />
          </FollowMeBtn>

          <FollowMeBtn link={socialNetworkLink.twitter} isWhite>
            <BsTwitter />
          </FollowMeBtn>

          <FollowMeBtn link={socialNetworkLink.linked} isWhite>
            <ImLinkedin2 />
          </FollowMeBtn>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
