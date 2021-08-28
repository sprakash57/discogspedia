import styles from './Release.module.scss';

const Release = ({ content }: { content: Result }) => {
    const { thumb, title, label, country, year, format, genre } = content;
    return (
        <article className={styles.release}>
            <section className={styles.release__img}>
                <img src={thumb} alt="thumb" />
            </section>
            <section className={styles.body}>
                <header className={styles.body__header}>
                    <h2>{title}</h2>
                    <summary>{label[0]}</summary>
                </header>
                <div className={styles.body__content}>
                    <div className={styles.info}>
                        <p><strong>Origin:</strong> {country}, {year}</p>
                        <p><strong>Genre:</strong> {genre.slice(0, 3).join(", ")}</p>
                    </div>
                    <div className={styles.format}>
                        {format.slice(0, 3).map((item, i) => <p key={i}>{item}</p>)}
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Release
