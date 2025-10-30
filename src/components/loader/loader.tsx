import styles from "./loader.module.css";

const Loader = () => (
  <div className={styles.backdrop}>
    <div className={styles.loader}></div>
  </div>
);

export default Loader;
