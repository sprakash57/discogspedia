import NavSearch from "features/NavSearch";
import Release from "features/Release";
import { useState } from "react";
import { useGetReleases, useHandleOutsideClick } from "hooks";
import styles from "./Home.module.scss";
import Modal from "components/Modal";
import ReleaseDetail from "features/ReleaseDetail";
import Loader from "components/Loader";

const Home = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [release, setRelease] = useState<Result>();
  const releaseRef = useHandleOutsideClick(() => setIsOpen(false));
  const { data, status } = useGetReleases(query, page);

  const renderContent = () => {
    if (status === "loading") return <Loader />;

    if (status === "error")
      return (
        <div className={styles.alert} role="alert">
          Something went wrong! Try again.
        </div>
      );

    if (status === "success" && data?.results.length) {
      const { results } = data;
      const handleSelect = (content: Result) => {
        setIsOpen(true);
        setRelease(content);
      };

      return (
        <div className={styles.releases}>
          {results.map((result) => (
            <Release key={result.id} content={result} onSelect={handleSelect} />
          ))}
        </div>
      );
    }

    if (data?.results.length === 0)
      return (
        <div className={styles.alert} role="alert">
          No results found!
        </div>
      );

    return null;
  };

  const handleSearch = (query: string) => {
    // Fresh search should reset page to 1
    setPage(1);
    setQuery(query);
  };

  return (
    <main>
      <NavSearch
        pagination={data?.pagination}
        page={page}
        onPaginate={(page) => setPage(page)}
        onSearch={handleSearch}
      />
      {renderContent()}
      {!!release && (
        <Modal isOpen={isOpen}>
          <ReleaseDetail
            ref={releaseRef}
            content={release}
            onClose={() => setIsOpen(false)}
          />
        </Modal>
      )}
    </main>
  );
};

export default Home;
