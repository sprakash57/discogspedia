import Button from 'common-components/Button';
import React, { useState } from 'react';
import styles from './NavSearch.module.scss';

type Props = {
    onSearch: (query: string) => void;
}

const NavSearch = ({ onSearch }: Props) => {
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
            <summary className={styles.nav__summary}>Find your favourite discogs release right here.</summary>
            <form onSubmit={handleSearch} className={styles.nav__form}>
                <input
                    className={styles.nav__search}
                    type="search"
                    name="query"
                    onChange={handleQuery}
                    placeholder="What's next?"
                />
                <Button>Go</Button>
            </form>
            {hasFeedback && <small className={styles.nav__feedback}>Hmm... That doesn't look right. Did you forget to type something?</small>}
        </nav>
    )
}

export default NavSearch
