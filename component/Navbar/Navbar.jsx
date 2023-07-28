"use client";

import React, { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Drawer from "../Drawer/Drawer";

const Navbar = () => {
  const navMenus = ["Home", "Our services", "Pricing", "Company"];
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <nav className={styles.container}>
        {/* LOGO */}
        <Image
          src="/assets/images/logoBlack.png"
          width="137"
          height="27"
          alt="logo"
        />

        
          {/* MENU */}
          <ul className={styles.menuWrap}>
            {navMenus.map((menu) => (
              <li className={styles.menu} key={menu}>
                {menu}
              </li>
            ))}
          </ul>

        {/* DRAWER */}
        <Drawer
          open={openDrawer}
          setOpenDrawer={setOpenDrawer}
          data={navMenus}
        />

        {/* HAMBURGER ICON */}
        <Image
          src="/assets/images/hamburger.png"
          width="27"
          height="27"
          alt="logo"
          onClick={() => setOpenDrawer(true)}
          className={styles.icon}
        />
      </nav>
    </>
  );
};

export default Navbar;
