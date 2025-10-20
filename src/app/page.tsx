import Hero from "@/components/hero/hero";
import Timer from "@/components/timer/timer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero />
      <Timer />
    </main>
  );
}
