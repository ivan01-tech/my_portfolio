"use client";
import { BsFillSunFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import styles from "../styles/header.module.css";
import ThemeBtn from "./ThemeBtn";
import { useMobile } from "../Hooks/useMobile";

type Props = {};

function Header({}: Props) {
  
  const { toggleMobileMenu } = useMobile()!;

  return (
    <header className={styles.header}>
      <section className={styles.header_wrap}>
        <div className={styles.header_left}>
          {/* open hambergur menu btn */}
          <button
            className={styles.header_hamburger}
            onClick={() => toggleMobileMenu(true)}
          >
            &#9776;
          </button>

          <Image
            src={"/logos/ivan01-tech.png"}
            width={100}
            height={30}
            alt="ivan01-tech"
            priority
          />
        </div>

        <nav aria-label="menu-full-screen" className={styles.navbar}>
          <ul className={styles.navbar_list}>
            <li>
              <Link href={"#home_banner"}>Accueil</Link>
            </li>
            <li>
              <Link href={"#skills"}>Skills</Link>
            </li>
            <li>
              <Link href={"/"}>Portfolio</Link>
            </li>
          </ul>

          <div className={styles.navbar_btn}>
            <Link href={"/"}>
              <Button>Contact Me</Button>
            </Link>
            <ThemeBtn>
              <BsFillSunFill />
            </ThemeBtn>
          </div>
        </nav>
      </section>
    </header>
  );
}

export default Header;
