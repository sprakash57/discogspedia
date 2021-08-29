import Button from 'common-components/Button';
import Image from 'common-components/Image';
import { ellipsisText } from 'helpers/utils';
import styles from './Release.module.scss';

type Props = {
    content: Result;
    onSelect: (content: Result) => void;
}

const Release = ({ content, onSelect }: Props) => {
    const { thumb, title, label, country, year, format, genre } = content;
    return (
        <article className={styles.release}>
            <Image src={thumb} alt="Cover" />
            <section className={styles.body}>
                <header className={styles.body__header}>
                    <h2 title={title}>{ellipsisText(title)}</h2>
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
            <section className={styles.release__detail}>
                <Button onClick={() => onSelect(content)}>More Details</Button>
            </section>
        </article>
    )
}

export default Release
