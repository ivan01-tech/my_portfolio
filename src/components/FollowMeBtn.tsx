import Link from "next/link";
import styles from "../styles/follower.module.css";
import React from "react";

type Props = { children: React.ReactNode; link: string; isWhite?: boolean };

export const FollowMeBtn = (props: Props) => {
  return (
    <Link
      href={props.link}
      className={`${styles.follower_wrap} ${
        props.isWhite ? "white_social_btn" : ""
      }`}
    >
      {props.children}
    </Link>
  );
};
