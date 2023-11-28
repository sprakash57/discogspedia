import { useState } from "react";
import Image from "components/Image";
import { ellipsisText } from "helpers/utils";
import styles from "./Release.module.scss";

type Props = {
  content: Result;
  onSelect: (content: Result) => void;
};

const Release = ({ content, onSelect }: Props) => {
  const [isSelected, setIsSelected] = useState(false);
  const { thumb, title, label, country, year, format, genre } = content;

  const handleSelect = () => {
    onSelect(content);
    setIsSelected(!isSelected);
  };

  return (
    <article
      title="Click to know more"
      className={styles.release}
      role="button"
      aria-label="Click to know more"
      aria-pressed={isSelected ? "true" : "false"}
      onClick={handleSelect}
      data-testid="more-details"
    >
      <Image src={thumb} alt="Cover" />
      <section className={styles.release__body}>
        <header className={styles.release__header}>
          <h2 title={title}>{ellipsisText(title)}</h2>
          <summary>{label[0]}</summary>
        </header>
        <div className={styles.release__content}>
          <div className={styles.release__info}>
            <p>
              <strong>Origin:</strong> {country}, {year}
            </p>
            <p>
              <strong>Genre:</strong> {genre.slice(0, 3).join(", ")}
            </p>
          </div>
          <div className={styles.release__metadata}>
            {format.slice(0, 3).map((item, i) => (
              <p key={`${item}-${i}`}>{item}</p>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};

export default Release;
