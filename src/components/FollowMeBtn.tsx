import Link from "next/link";
import styles from "../styles/follower.module.css";
import React from "react";

type Props = { children: React.ReactNode; link: string;};

export const FollowMeBtn = (props: Props) => {
  return (
    <Link
      href={props.link}
      className={`${styles.follower_wrap}`}
    >
      {props.children}
    </Link>
  );
};
