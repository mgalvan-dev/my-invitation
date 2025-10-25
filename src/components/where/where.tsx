"use client";

import Lottie from "lottie-react";
import Calendar from "@/lotties/Calendar Appointment.json";
import styles from "./where.module.css";

const Where = () => (
  <div className={styles.container}>
    <Lottie animationData={Calendar} className={styles.lottie} />
    <div className={styles.text_container}>
      <p className={styles.title}>¿DÓNDE?</p>
      <p className={styles.subtitle}>Salón Cala Eventos</p>
      <p className={styles.description}>San Martin 3526</p>
      <button className={styles.button}>Ver mapa</button>
    </div>
  </div>
);

export default Where;
