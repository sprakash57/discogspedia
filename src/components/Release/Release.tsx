import styles from './Release.module.scss';

const Release = () => {
    return (
        <article className={styles.release}>
            <section className={styles.release__img}>
                <img src="https://img.discogs.com/G301AaL_XJzcGCleTo-9gZMJmsg=/fit-in/150x150/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1786820-1420405895-2270.jpeg.jpg" alt="thumb" />
            </section>
            <section className={styles.body}>
                <header className={styles.body__header}>
                    <h2>Moderat - Moderat</h2>
                    <summary>BPitch Control</summary>
                </header>
                <div className={styles.info}>
                    <p><strong>Origin:</strong> Germany, 2009</p>
                    <p><strong>Genre:</strong> Electronic, HipHop</p>
                </div>
                <div className={styles.format}>
                    {["Vinyl", "CD", "Album"].map(item => <p key={item}>{item}</p>)}
                </div>
            </section>
        </article>
    )
}

export default Release
