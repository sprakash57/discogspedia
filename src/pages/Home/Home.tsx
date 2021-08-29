import Pagination from "components/Pagination";
import NavSearch from "components/NavSearch";
import Release from "components/Release";
import { useState } from "react";
import { useGetReleases, useGetOuterRef } from "helpers/hooks";
import styles from './Home.module.scss';
import Modal from "common-components/Modal";
import ReleaseDetail from "components/ReleaseDetail";

const Home = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [release, setRelease] = useState<Result>();
  const releaseRef = useGetOuterRef(() => setIsOpen(false));

  const handleSearch = (query: string) => {
    setQuery(query);
  }

  const { data, status, isPreviousData } = useGetReleases(query, page);

  const renderContent = () => {
    if (status === "loading") return <div>Loading...</div>

    if (status === "error") return <div>Something went wrong</div>

    if (status === "success" && data?.results.length) {
      const { results, pagination } = data;
      const handlePagination = (page: number) => {
        setPage(page);
      }
      const handleSelect = (content: Result) => {
        setIsOpen(true);
        setRelease(content);
      }

      return (
        <>
          <Pagination
            pagination={pagination}
            isPreviousData={isPreviousData}
            page={page}
            onPaginate={handlePagination}
          />
          <div className={styles.releases}>
            {results.map(result => <Release key={result.id} content={result} onSelect={handleSelect} />)}
          </div>
        </>
      )
    }
    if (data?.results.length === 0) return <div>No results found</div>

    return <div>Looking for something?!</div>
  }

  return (
    <main>
      <NavSearch onSearch={handleSearch} />
      <section>
        {renderContent()}
      </section>
      {!!release && (
        <Modal isOpen={isOpen}>
          <ReleaseDetail content={release} ref={releaseRef} />
        </Modal>
      )}
    </main>
  );
}

export default Home;
