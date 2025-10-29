"use client";

import Lottie from "lottie-react";
import Church from "@/lotties/iglesia.json";
import styles from "./ceremony.module.css";

const Ceremony = () => (
  <div className={styles.container}>
    <Lottie animationData={Church} className={styles.lottie} />
    <div className={styles.text_container}>
      <p className={styles.title}>CEREMONIA</p>
      <p className={styles.subtitle}>20:30 hs</p>
      <p className={styles.description}>Iglesia San Justo</p>
    </div>
  </div>
);

export default Ceremony;
