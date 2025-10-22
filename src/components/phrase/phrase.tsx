import styles from "./phrase.module.css";

interface Props {
  text: string;
}

const Phrase = ({ text }: Props) => (
  <div className={styles.container}>
    <p className={styles.text}>{text}</p>
  </div>
);

export default Phrase;
