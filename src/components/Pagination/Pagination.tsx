import Button from 'common-components/Button';
import React from 'react';
import styles from './Pagination.module.scss';

type Props = {
    pagination: Pagination;
    page: number;
    isPreviousData: boolean;
    onPaginate: (page: number) => void;
}

const Pagination = ({ pagination, page, isPreviousData, onPaginate }: Props) => {
    const { pages, urls } = pagination;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type = e.currentTarget.textContent;
        if (type === "<") onPaginate(Math.max(page - 1, 0));
        else if (type === ">" && !isPreviousData && urls.next) onPaginate(page + 1);
        else if (type === "First") onPaginate(1);
        else onPaginate(pages);
    }

    return (
        <section className={styles.panel} aria-label="Page Navigation">
            <Button onClick={handleClick} disabled={!urls?.first} tabIndex={0}>First</Button>
            <div className={styles.panel__prevnext}>
                <Button
                    onClick={handleClick}
                    disabled={!urls?.prev}
                    tabIndex={0}
                    title="Previous Page"
                >{"<"}</Button>
                <span>{page} / {pages}</span>
                <Button
                    onClick={handleClick}
                    disabled={!urls.next}
                    tabIndex={0}
                    title="Next Page"
                >{">"}</Button>
            </div>
            <Button onClick={handleClick} disabled={!urls?.next} tabIndex={0}>Last</Button>
        </section>
    )
}

export default Pagination
