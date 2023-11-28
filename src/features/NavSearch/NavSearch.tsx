import Button from "components/Button";
import Pagination from "features/Pagination";
import React, { useState } from "react";
import styles from "./NavSearch.module.scss";

type Props = {
  pagination?: Pagination;
  page: number;
  onPaginate: (page: number) => void;
  onSearch: (query: string) => void;
};

const NavSearch = ({ onSearch, pagination, onPaginate, page }: Props) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleQuery = (e: React.FormEvent<HTMLInputElement>) => {
    setQuery((e.target as HTMLInputElement).value);
  };

  return (
    <nav className={styles.nav} role="search">
      <h1 className={styles.nav__h1}>Discogspedia</h1>
      <summary className={styles.nav__summary}>
        Find your favourite release right here.
      </summary>
      <form onSubmit={handleSearch} className={styles.nav__form}>
        <input
          aria-label="Search input"
          data-testid="query"
          className={styles.nav__search}
          type="search"
          name="query"
          onChange={handleQuery}
          value={query}
          placeholder="Type Moderat..."
        />
        <Button
          data-testid="btn-query"
          className={styles.nav__btn}
          aria-controls="search-results"
        >
          Search
        </Button>
      </form>
      <div id="search-results">
        {!!pagination && (
          <Pagination
            pagination={pagination}
            page={page}
            onPaginate={onPaginate}
          />
        )}
      </div>
    </nav>
  );
};

export default NavSearch;
