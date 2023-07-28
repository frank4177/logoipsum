"use client";

import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Fade duration={500} triggerOnce={true}>
        <div className={styles.wrapper}>
          <Image
            src="/assets/images/logoWhite.png"
            width="137"
            height="27"
            alt="logo"
          />

          <div className={styles.menuWrap}>
            <div>
              <p>Support</p>
              <ul>
                <li>Blog</li>
                <li>Company</li>
              </ul>
            </div>

            <div>
              <p>Legal</p>
              <ul>
                <li>Term of use</li>
                <li>Privacy policy</li>
              </ul>
            </div>

            <div>
              <p>Follow</p>
              <ul>
                <li>Twitter</li>
                <li>Linkedin</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>
      </Fade>
      <hr />
      <div className={styles.bottomText}>Design with ❤️ for SaaS</div>
    </footer>
  );
};

export default Footer;
