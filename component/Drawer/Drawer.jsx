"use client";

import React from "react";
import styles from "./drawer.module.css";
import Image from "next/image";

const Drawer = ({ open, setOpenDrawer, data }) => {
  return (
    <>
      {/* OVERLAY */}
      <div
        className={open ? styles.overlayOpen : styles.overlayClose}
        onClick={() => setOpenDrawer(false)}
      ></div>

      {/* CONTAINER */}
      <div className={open === true ? styles.drawerOpen : styles.drawerClose}>
        
        {/* Close Icon */}
        <Image
          src="/assets/images/close.png"
          width="27"
          height="27"
          alt="logo"
          onClick={() => setOpenDrawer(false)}
          className={styles.icon}
        />

        {/* List */}
        <ul className={styles.dataWrap}>
          {data.map((menu) => (
            <li className={styles.menu} key={menu}>
              {menu}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Drawer;
