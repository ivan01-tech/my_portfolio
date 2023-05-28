"use client"
import React, { useRef } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import Image from "next/image";
import styles from "../styles/contacts.module.css";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { useIntersectObserver } from "@/Hooks/useIntersecObserver";

function Contact() {
  const contactsRef = useRef<HTMLElement | null>(null);
  /**
   *  to detect wheter the banner is visible and change the associated
   */
  useIntersectObserver(contactsRef, { rootMargin: "5%", threshold: 0.1 });

  return (
    <section ref={contactsRef} className={styles.contact_wrap}>
      <h2 className="title">Contacts</h2>
      <p className="description">
        You can use different way to contact mee. Fill free to choose your own.
      </p>
      <section className={styles.contacts} id="contacts">
        <div className={styles.contacts_left}>
          <Link prefetch={false} href="tel:+237681832508" className={styles.item}>
            <BsFillTelephoneFill />
            <span>+237 681-832-508</span>
          </Link>
          <Link prefetch={false} href={"mailto:ivansilatsa@gmail.com"} className={styles.item}>
            <GrMail />
            <span>ivansilatsa@gmail.com</span>
          </Link>
          <Link
            href={"https://twitter.com/ivansilatsa"}
            className={styles.item}
          >
            <FaTwitter />
            <span>@ivansilatsa</span>
          </Link>
        </div>

        <Image
          src="/media/undraw_contact_us_re_4qqt.svg"
          alt="contact us"
          width={800}
          height={500}
        />
      </section>
    </section>
  );
}

export default Contact;
