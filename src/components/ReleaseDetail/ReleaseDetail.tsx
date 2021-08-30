import Button from 'common-components/Button';
import Image from 'common-components/Image';
import Loader from 'common-components/Loader';
import { useGetRelease } from 'helpers/hooks';
import { ellipsisText } from 'helpers/utils';
import { forwardRef } from 'react';
import styles from './ReleaseDetail.module.scss';

type Props = {
    content: Result;
    onClose: () => void;
}

const ReleaseDetail = forwardRef<HTMLDivElement, Props>(({ content, onClose }: Props, ref) => {
    const { data, status } = useGetRelease(content.id);

    if (status === "loading") return <Loader />;

    if (status === "success" && data) {
        const { thumb, title = "--", format, label, country = "--", genre } = content;
        const { released, community, tracklist } = data;
        return (
            <div ref={ref} className={styles.details}>
                <Button
                    onClick={onClose}
                    className={styles.details__btn}
                    aria-label="Close"
                    data-testid="close"
                >
                    X
                </Button>
                <Image src={thumb} alt="Cover" />
                <h3 title={title}>{ellipsisText(title)}</h3>
                <div className={styles.details__basics}>
                    <p><strong>Country</strong><span>{country}</span></p>
                    <p><strong>Released</strong><span>{released}</span></p>
                    <p><strong>Genre</strong><span>{genre?.slice(0, 5).join(", ")}</span></p>
                    <p><strong>Formats</strong><span>{format?.slice(0, 5).join(", ")}</span></p>
                    <p><strong>Labels</strong><span>{label?.slice(0, 3).join(", ")}</span></p>
                </div>
                <h3>Statistics</h3>
                <div className={styles.details__basics}>
                    <p><strong>Have</strong><span>{community.have}</span></p>
                    <p><strong>Want</strong><span>{community.want}</span></p>
                    <p><strong>Count</strong><span>{community?.rating.count}</span></p>
                    <p><strong>Rating</strong><span>{community?.rating.average}/5</span></p>
                </div>
                <h3>Tracks</h3>
                <ul className={styles.details__tracks}>
                    <li>
                        <strong>Position</strong>
                        <strong>Title</strong>
                        <strong>Duration</strong>
                    </li>
                    {tracklist.map(({ position, title, duration }, i) => (
                        <li key={i}>
                            <span>{position || "--"}</span>
                            <span>{ellipsisText(title)}</span>
                            <span>{duration || "--"}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
    return <div className={styles.alert} role="alert">Something went wrong! Try another release.</div>
})

export default ReleaseDetail
