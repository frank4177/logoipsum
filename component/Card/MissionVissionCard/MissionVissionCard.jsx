import React from "react";
import styles from "./MissionVissionCard.module.css";
import Image from "next/image";

const MissionVissionCard = ({ data }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.titleAndNav}>
          {/* TITLE */}
          <p>{data.title}</p>

          {/* ICON */}
          <Image
            src="/assets/images/arrowIcon.png"
            width="55"
            height="55"
            alt="icon"
            className={styles.icon}
          />
        </div>

        {/* IMAGE */}
        <Image
          src={data.image}
          width="245"
          height="278"
          alt="image"
          quality={100}
          className={styles.img}
        />

        {/* DESCRIPTION */}
        <p className={styles.desc}>{data.desc}</p>
        <p className={styles.mobileDesc}>{data.descMobi}</p>
      </div>
    </>
  );
};

export default MissionVissionCard;
