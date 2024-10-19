import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Spinner.module.scss';

interface SpinnerProps {
    className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => (
    <div className={classNames(styles.Spinner, {}, [className, styles.loader])}>
        <span className="loader" />
    </div>
);
