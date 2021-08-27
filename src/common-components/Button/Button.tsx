import { clsx } from 'helpers/utils';
import styles from './Button.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string | React.ReactNode;
    className?: string;
}

const Button = ({ children, className, ...rest }: Props) => {
    return (
        <button
            className={clsx(styles.btn, className)}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button
