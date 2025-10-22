import Hero from "@/components/hero/hero";
import Timer from "@/components/timer/timer";
import Phrase from "@/components/phrase/phrase";
import Carousel from "@/components/carousel/carousel";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero />
      <Timer />
      <Phrase text="Con mucha ilusión y la bendición de Dios, queremos vivir este momento rodeados de personas que han formado parte de nuestra historia" />
      <Carousel />
    </main>
  );
}
