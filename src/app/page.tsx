import Hero from "@/components/hero/hero";
import Timer from "@/components/timer/timer";
import Phrase from "@/components/phrase/phrase";
import Carousel from "@/components/carousel/carousel";
import When from "@/components/when/when";
import Where from "@/components/where/where";
import Ceremony from "@/components/ceremony/ceremony";
import SecondCarousel from "@/components/second-carousel/second-carousel";
import DressCode from "@/components/dress-code/dress-code";
import ConfirmForm from "@/components/confirm-form/confirm-form";
import Gifts from "@/components/gifts/gifts";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero />
      <div className={styles.container}>
        <Timer />
        <Phrase text="Con mucha ilusión y la bendición de Dios, queremos vivir este momento rodeados de personas que han formado parte de nuestra historia" />
        <Carousel />
        <When />
        <Ceremony />
        <Where />
        <SecondCarousel />
        <Phrase text="Algunos lo llamarán destino, a nosotros nos gusta llamarlo magia" />
        <DressCode />
        <Gifts />
        <ConfirmForm />
      </div>
      <Phrase text="Elio & Talia" />
    </main>
  );
}
