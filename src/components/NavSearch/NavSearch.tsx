import Button from 'common-components/Button';
import React from 'react';
import styles from './NavSearch.module.scss';

const NavSearch = () => {
    const handleSearch = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as HTMLInputElement;
        console.log(target.value);
    }
    return (
        <header className={styles.nav}>
            <h1 className={styles.nav__h1}>DiscogsPedia</h1>
            <summary className={styles.nav__summary}>Find your favourite discogs release right here.</summary>
            <form onSubmit={handleSearch} className={styles.nav__form}>
                <input
                    className={styles.nav__search}
                    type="search"
                    name="book"
                    placeholder="What's next?"
                />
                <Button>Go</Button>
            </form>
        </header>
    )
}

export default NavSearch
