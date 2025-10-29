"use client";

import Lottie from "lottie-react";
import Gift from "@/lotties/Gifting.json"
import styles from "./gifts.module.css";

const Gifts = () => {
  const alias = "XXXXXXX";

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
        <p
          className={styles.description}
          onClick={() => {
            navigator.clipboard.writeText(alias);
          }}
        >
          {alias}
        </p>
      </div>
    </div>
  );
};

export default Gifts;
