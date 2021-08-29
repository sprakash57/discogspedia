import Button from 'common-components/Button';
import Pagination from 'components/Pagination';
import React, { useState } from 'react';
import styles from './NavSearch.module.scss';

type Props = {
    pagination?: Pagination;
    page: number;
    isPreviousData: boolean;
    onPaginate: (page: number) => void;
    onSearch: (query: string) => void;
}

const NavSearch = ({ onSearch, pagination, onPaginate, page, isPreviousData }: Props) => {
    const [query, setQuery] = useState("");
    const [hasFeedback, setHasFeedback] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query) {
            setHasFeedback(false);
            onSearch(query);
        } else {
            setHasFeedback(true);
        }
    }

    const handleQuery = (e: React.FormEvent<HTMLInputElement>) => {
        setQuery((e.target as HTMLInputElement).value);
    }

    return (
        <nav className={styles.nav}>
            <h1 className={styles.nav__h1}>DiscogsPedia</h1>
            <summary className={styles.nav__summary}>Find your favourite release right here.</summary>
            <form onSubmit={handleSearch} className={styles.nav__form}>
                <input
                    className={styles.nav__search}
                    type="search"
                    name="query"
                    onChange={handleQuery}
                    placeholder="Type Moderat..."
                />
                <Button>Search</Button>
            </form>
            {/* <small
                style={{ visibility: hasFeedback ? "visible" : "hidden" }}
                className={styles.nav__feedback}>
                Hmm... That doesn't look right. Did you forget to type something?
            </small> */}
            {!!pagination && (
                <Pagination
                    pagination={pagination}
                    isPreviousData={isPreviousData}
                    page={page}
                    onPaginate={onPaginate}
                />
            )}
        </nav>
    )
}

export default NavSearch
