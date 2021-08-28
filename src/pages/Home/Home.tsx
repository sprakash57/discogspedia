import NavSearch from "components/NavSearch";
import Release from "components/Release";
import { useState } from "react";
import { useGetReleases } from "services/useGetReleases";
import styles from './Home.module.scss';

const Home = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const handleSearch = (query: string) => {
    setQuery(query);
  }

  const { data, status } = useGetReleases(query, page);

  const renderContent = () => {
    if (status === "loading") return <div>Loading...</div>

    if (status === "error") return <div>Something went wrong</div>

    if (status === "success" && data?.results.length) {
      return data.results.map(result => <Release key={result.id} content={result} />)
    }
    if (data?.results.length === 0) return <div>No results found</div>

    return <div>Looking for something?!</div>
  }

  return (
    <main>
      <NavSearch onSearch={handleSearch} />
      <section className={styles.releases}>
        {renderContent()}
      </section>
    </main>
  );
}

export default Home;
