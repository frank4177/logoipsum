import React from "react";
import styles from "./joinUs.module.css";
import Image from "next/image";

const JoinUs = () => {
  return (
    <section className={styles.joinUs}>
      <div className={styles.wrapper}>
        <h3>Join Us on Our Financial Journey</h3>
        <p>
          We invite you to embark on this exciting financial journey with us. At
          [Your Fintech Company Name], we believe in a collaborative approach,
          where our clients become our partners. Together, we can shape a future
          where financial possibilities are limitless.
        </p>

        <div className={styles.paymentBadge}>
          <Image
            src="/assets/images/applestore.png"
            width="176"
            height="67"
            alt="apple store"
            className={styles.badge}
          />
          <Image
            src="/assets/images/playstore.png"
            width="176"
            height="67"
            alt="play store"
            className={styles.badge}
          />
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
