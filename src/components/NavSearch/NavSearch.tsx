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

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
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
                <Button className={styles.nav__btn}>Search</Button>
            </form>
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
