"use client";

import Lottie from "lottie-react";
import LocationMarker from "@/lotties/LocationMarker.json";
import styles from "./where.module.css";

const Where = () => {
  const googleMapsUrl = "https://maps.app.goo.gl/TreJkrXa1JyYUbPF8";

  return (
    <div className={styles.container}>
      <Lottie animationData={LocationMarker} className={styles.lottie} />
      <div className={styles.text_container}>
        <p className={styles.title}>FIESTA</p>
        <p className={styles.subtitle}>Salón Cala Eventos</p>
        <p className={styles.description}>San Martin 3526</p>
        <a
          className={styles.button}
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver mapa
        </a>
      </div>
    </div>
  );
};

export default Where;
