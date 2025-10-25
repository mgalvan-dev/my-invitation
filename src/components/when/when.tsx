"use client";

import Lottie from "lottie-react";
import Calendar from "@/lotties/Calendar Appointment.json";
import styles from "./when.module.css";

const When = () => (
  <div className={styles.container}>
    <Lottie animationData={Calendar} className={styles.lottie} />
    <div className={styles.text_container}>
      <p className={styles.title}>¿CUÁNDO?</p>
      <p className={styles.subtitle}>22 DE NOVIEMBRE 2025</p>
    </div>
  </div>
);

export default When;
