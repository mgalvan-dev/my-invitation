"use client";

import { useEffect, useState } from "react";
import styles from "./timer.module.css";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-11-22T22:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }
  };

  useEffect(() => {
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.timer_container}>
      <h2 className={styles.title}>¡NOS CASAMOS!</h2>
      <div className={styles.timer}>
        <div className={styles.timer_box}>
          <span>{timeLeft.days}</span>
          <span>días</span>
        </div>
        <div className={styles.timer_box}>
          <span>{timeLeft.hours}</span>
          <span>horas</span>
        </div>
        <div className={styles.timer_box}>
          <span>{timeLeft.minutes}</span>
          <span>minutos</span>
        </div>
        <div className={styles.timer_box}>
          <span>{timeLeft.seconds}</span>
          <span>segundos</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
