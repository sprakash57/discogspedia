import { forwardRef } from "react";
import Button from "components/Button";
import Image from "components/Image";
import Loader from "components/Loader";
import { ellipsisText } from "helpers/utils";
import styles from "./ReleaseDetail.module.scss";
import useGetRelease from "./hooks/useGetRelease";

type Props = {
  content: Result;
  onClose: () => void;
};

const ReleaseDetail = forwardRef<HTMLDivElement, Props>(
  ({ content, onClose }: Props, ref) => {
    const { data, status } = useGetRelease(content.id);

    if (status === "loading") return <Loader />;

    if (status === "success" && data) {
      const {
        thumb,
        title = "--",
        format,
        label,
        country = "--",
        genre,
      } = content;
      const { released, community, tracklist } = data;
      return (
        <div
          ref={ref}
          className={styles.details}
          role="dialog"
          aria-modal="true"
          aria-labelledby="releaseTitle"
          aria-describedby="releaseDescription"
        >
          <Button
            onClick={onClose}
            className={styles.details__btn}
            aria-label="Close"
            data-testid="close"
          >
            X
          </Button>
          <Image src={thumb} alt="Cover" />
          <h3 id="releaseTitle" title={title}>
            {ellipsisText(title)}
          </h3>
          <div id="releaseDescription" className={styles.details__basics}>
            <p>
              <strong>Country</strong>
              <span>{country}</span>
            </p>
            <p>
              <strong>Released</strong>
              <span>{released}</span>
            </p>
            <p>
              <strong>Genre</strong>
              <span>{genre?.slice(0, 5).join(", ")}</span>
            </p>
            <p>
              <strong>Formats</strong>
              <span>{format?.slice(0, 5).join(", ")}</span>
            </p>
            <p>
              <strong>Labels</strong>
              <span>{label?.slice(0, 3).join(", ")}</span>
            </p>
          </div>
          <h3>Statistics</h3>
          <div className={styles.details__basics}>
            <p>
              <strong>Have</strong>
              <span>{community.have}</span>
            </p>
            <p>
              <strong>Want</strong>
              <span>{community.want}</span>
            </p>
            <p>
              <strong>Count</strong>
              <span>{community?.rating.count}</span>
            </p>
            <p>
              <strong>Rating</strong>
              <span>{community?.rating.average}/5</span>
            </p>
          </div>
          <h3 id="tracklistLabel">Tracks</h3>
          <ul
            className={styles.details__tracks}
            aria-labelledby="tracklistLabel"
          >
            <li>
              <strong>Position</strong>
              <strong>Title</strong>
              <strong>Duration</strong>
            </li>
            {tracklist.map(({ position, title, duration }, i) => (
              <li key={position + title + duration}>
                <span>{position || "--"}</span>
                <span>{ellipsisText(title)}</span>
                <span>{duration || "--"}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return (
      <div className={styles.alert} role="alert">
        Something went wrong! Try another release.
      </div>
    );
  }
);

export default ReleaseDetail;
