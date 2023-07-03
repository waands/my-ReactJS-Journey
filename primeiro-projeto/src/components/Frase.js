import styles from "./Frase.module.css";

function Frase() {
  return (
    <div className={styles.fraseContainer}>
      <p className={styles.fraseContent}>
        essa é uma frase que vai ser reutilizada
      </p>
    </div>
  );
}
export default Frase;
