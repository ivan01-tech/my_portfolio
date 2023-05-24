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
          <p>Ivan01-tech © Copyright</p>
        </section>
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
    </footer>
  );
}

export default Footer;
