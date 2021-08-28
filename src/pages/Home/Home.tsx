import NavSearch from "components/NavSearch";
import Release from "components/Release";
import { fetchReleases } from "helpers/api";
import { useState } from "react";
import { useQuery } from "react-query";
import styles from './Home.module.scss';

const Home = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const { data, status, isPreviousData } = useQuery(
    ["allReleases", query, page],
    () => fetchReleases(query, page),
    {
      keepPreviousData: true,
      enabled: !!query
    }
  );

  const handleSearch = (query: string) => {
    setQuery(query);
  }

  return (
    <main>
      <NavSearch onSearch={handleSearch} />
      <section className={styles.releases}>
        <Release />
        <Release />
        <Release />
        <Release />
      </section>
    </main>
  );
}

export default Home;
