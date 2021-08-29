import { useState } from 'react';
import styles from './Image.module.scss';
import NoThumb from 'assets/default.jpg';
import { clsx } from 'helpers/utils';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    containerClassName?: string;
    containerAttributes?: Record<string, any>;
    className?: string;
}

const Image = ({ src, alt, containerAttributes, containerClassName, className, ...rest }: Props) => {
    const [thumb, setThumb] = useState(src);

    const handleNoImage = () => {
        setThumb(NoThumb)
    }

    return (
        <figure className={clsx(styles.figure, containerClassName)} {...containerAttributes}>
            <img
                className={clsx(styles.figure__img, className)}
                src={thumb}
                alt={alt}
                onError={handleNoImage}
                {...rest}
            />
        </figure>
    )
}

export default Image
