"use client";

import Lottie from "lottie-react";
import Church from "@/lotties/iglesia.json";
import styles from "./ceremony.module.css";

const Ceremony = () => (
  <div className={styles.container}>
    <Lottie animationData={Church} className={styles.lottie} />
    <div className={styles.text_container}>
      <p className={styles.title}>CEREMONIA</p>
      <p className={styles.subtitle}>21:00 hs</p>
      <p className={styles.description}>Parroquia Santísimo Sacramento</p>
      <p className={styles.description}>Calle 105 y 14</p>
    </div>
  </div>
);

export default Ceremony;
