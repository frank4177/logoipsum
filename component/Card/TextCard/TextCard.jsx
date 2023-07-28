import React from "react";
import styles from "./textCard.module.css";
import Image from "next/image";

const TextCard = ({data}) => {
  return (
    <>
      <div className={styles.card}>

        {/* ICON */}
        <div  className={styles.iconWrap}>
        <Image
          src={data.icon}
          width="24"
          height="24"
          alt="icon"
          className={styles.icon}
        />
        </div>

        {/* TITLE */}
        <h4>{data.title}</h4>

        {/* DESCRIPTION */}
        <p>
          {data.desc}
        </p>
      </div>
    </>
  );
};

export default TextCard;
