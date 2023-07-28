import React from "react";
import styles from "./missionVision.module.css";
import Image from "next/image";
import MissionVissionCard from "../Card/MissionVissionCard/MissionVissionCard";

const MissionVision = () => {
  const missionVisonData = [
    {
      title: "Our Mission",
      image: "/assets/images/pinkBox.png",
      desc: "Our mission is to revolutionize the financial landscape by empowering individuals and businesses with innovative and secure financial solutions. We strive to bridge the gap between traditional banking systems and cutting-edge technology, ensuring a seamless and inclusive financial experience ....",
      descMobi:
        "Our mission is to revolutionize the financial landscape by empowering individuals and businesses with innovative and secure financial...",
    },
    {
      title: "Our Vision",
      image: "/assets/images/cylinders.png",
      desc: "  Our vision is to create a world where financial freedom is accessible to everyone, irrespective of their background or location. We envision a future where financial decisions are driven by data-driven insights , smart automation, and transparent practices, empowering individuals to make informed cho ....",
      descMobi:
        "Our vision is to create a world where financial freedom is accessible to everyone, irrespective of their background or location. We envision...",
    },
  ];

  return (
    <section className={styles.container}>
        {missionVisonData.map((data) => (
          <MissionVissionCard data={data} key={data.title} />
        ))}
    </section>
  );
};

export default MissionVision;
