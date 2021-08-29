import styles from './Loader.module.scss';

const Loader = ({ size = 100 }: { size?: number }) => {
    return (
        <section className={styles.loader} style={{ width: `${size}px`, height: `${size}px` }}>
            <span></span>
            <span></span>
            <span></span>
        </section>
    )
}

export default Loader;
