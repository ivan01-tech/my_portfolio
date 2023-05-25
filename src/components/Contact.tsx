import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import Image from "next/image";
import styles from "../styles/contacts.module.css";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";

function Contact() {

  return (
    <section className={styles.contact_wrap}>
      <h2 className="title">Contacts</h2>
      <p className="description">
        You can use different way to contact mee. Fill free to choose your own.
      </p>
      <section className={styles.contacts} id="contacts">
        <div className={styles.contacts_left}>
          <Link href="tel:+237681832508" className={styles.item}>
            <BsFillTelephoneFill />
            <span>+237 681-832-508</span>
          </Link>
          <Link href={"mailto:ivansilatsa@gmail.com"} className={styles.item}>
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
        <div className={styles.contact_image}>
          <Image
            src="/media/undraw_contact_us_re_4qqt.svg"
            alt="contact us"
            width={300}
            height={300}
          />
        </div>
      </section>
    </section>
  );
}

export default Contact;
