import Image from "next/image";
import styles from "./hero.module.css";

const Hero = () => (
  <div className={styles.hero}>
    <Image
      src="/images/image-3.png"
      alt="Moni y Elio"
      fill
      className={styles.image}
      loading="lazy"
    />
  </div>
);

export default Hero;
