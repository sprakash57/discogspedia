import Button from "components/Button";
import styles from "./Pagination.module.scss";

type Props = {
  pagination: Pagination;
  page: number;
  onPaginate: (page: number) => void;
};

const Pagination = ({ pagination, page, onPaginate }: Props) => {
  const { pages, urls } = pagination;

  const navigatePages = (type: string) => {
    if (type === "<") onPaginate(Math.max(page - 1, 0));
    else if (type === ">" && urls.next) onPaginate(page + 1);
    else if (type === "First") onPaginate(1);
    else onPaginate(pages);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const type = e.currentTarget.textContent as string;
    navigatePages(type);
  };

  return (
    <section className={styles.panel} aria-label="Page Navigation">
      <Button
        onClick={handleClick}
        disabled={!urls?.first}
        tabIndex={0}
        data-testid="first"
      >
        First
      </Button>
      <div className={styles.panel__prevnext}>
        <Button
          data-testid="prev"
          onClick={handleClick}
          disabled={!urls?.prev}
          tabIndex={0}
          title="Previous Page"
          aria-label="Previous Page"
        >
          {"<"}
        </Button>
        <span>
          {page} / {pages}
        </span>
        <Button
          data-testid="next"
          onClick={handleClick}
          disabled={!urls.next}
          tabIndex={0}
          title="Next Page"
          aria-label="Next Page"
        >
          {">"}
        </Button>
      </div>
      <Button
        onClick={handleClick}
        disabled={!urls?.next}
        tabIndex={0}
        data-testid="last"
      >
        Last
      </Button>
    </section>
  );
};

export default Pagination;
