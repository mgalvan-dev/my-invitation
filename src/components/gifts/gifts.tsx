"use client";

import Lottie from "lottie-react";
import Gift from "@/lotties/Gifting.json";
import styles from "./gifts.module.css";

const Gifts = () => {
  const alias = "EEKARDT98";
  const cbu = "4530000800016774940224";

  return (
    <div className={styles.container}>
      <Lottie animationData={Gift} className={styles.lottie} />
      <div className={styles.text_container}>
        <p className={styles.title}>REGALOS</p>
        <p className={styles.subtitle}>
          Tu presencia es el mejor regalo. Si querés acompañar con algo
          material, puede ser algo para nuestro hogar o podés transferir al
          alias:
        </p>
        <div className={styles.description_container}>
          <p className={styles.description}>{alias}</p>
          <button
            className={styles.copy_button}
            onClick={() => {
              navigator.clipboard.writeText(alias);
            }}
          >
            Copiar
          </button>
        </div>
        <div className={styles.description_container}>
          <p className={styles.description}>{cbu}</p>
          <button
            className={styles.copy_button}
            onClick={() => {
              navigator.clipboard.writeText(cbu);
            }}
          >
            Copiar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
