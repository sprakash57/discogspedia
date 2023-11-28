import styles from "./Loader.module.scss";

const Loader = ({ size = 100 }: { size?: number }) => {
  return (
    <section
      role="status"
      aria-label="loading"
      className={styles.loader}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <span></span>
    </section>
  );
};

export default Loader;
