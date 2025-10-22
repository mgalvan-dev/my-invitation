"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./carousel.module.css";

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);

  return (
    <div className={styles.carousel} ref={emblaRef}>
      <div className={styles.container}>
        <div className={styles.slide}>
          <Image
            src="/images/image-5.png"
            alt="Moni y Elio"
            fill
            loading="lazy"
            className={styles.image}
          />
        </div>
        <div className={styles.slide}>
          <Image
            src="/images/image-6.png"
            alt="Moni y Elio"
            fill
            loading="lazy"
            className={styles.image}
          />
        </div>
        <div className={styles.slide}>
          <Image
            src="/images/image-7.png"
            alt="Moni y Elio"
            fill
            loading="lazy"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
