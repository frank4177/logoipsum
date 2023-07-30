"use client"

import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.textWrap}>
          <h3>Who We Are</h3>
          <p>
            Cashwise is a leading fintech company dedicated to providing
            personalized financial services that cater to the unique needs and
            goals of our clients. With a team of industry experts, visionary
            technologists, and passionate financial enthusiasts, we bring
            together a perfect blend of financial expertise and technological
            prowess.
          </p>
        </div>
     

      <div className={styles.imgWrap}>
        <Image
          src="/assets/images/hero.png"
          width="856"
          height="513"
          alt="dashboard"
          className={styles.img}
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
