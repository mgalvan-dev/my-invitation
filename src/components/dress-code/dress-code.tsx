"use client";

import Lottie from "lottie-react";
import Diamond from "@/lotties/Diamond - Back to basics!.json";
import styles from "./dress-code.module.css";

const DressCode = () => {
  return (
    <div className={styles.container}>
      <Lottie animationData={Diamond} className={styles.lottie} />
      <div className={styles.text_container}>
        <p className={styles.title}>DRESS CODE</p>
        <p className={styles.subtitle}>Formal elegante</p>
      </div>
    </div>
  );
};

export default DressCode;
