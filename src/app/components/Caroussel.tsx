"use client";
import { useEffect } from "react";
import styles from "../styles/caroussel.module.css";
import Image from "next/image";
type Props = { children: React.ReactNode };

function Caroussel({ children }: Props) {

  useEffect(function () {
    // const 
  }, []);

  return (
    <section className={styles.carousssel_wrap}>
      <div className={styles.car_left}>
        <button>
          <Image
            width={30}
            height={30}
            src={"/media/arrowl.png"}
            alt="arrow left image"
          />
        </button>
      </div>
      <div className={styles.car_content}>{children}</div>
      <div className={styles.car_right}>
        <button>
          <Image
            src={"/media/arrowr.png"}
            alt="arrow right image"
            width={30}
            height={30}
          />
        </button>
      </div>
    </section>
  );
}

export default Caroussel;
