import { classNames } from 'shared/lib/classNames/classNames';
import { Spinner } from 'shared/ui/Spinner/Spinner';
import styles from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames(styles.Loader, {}, [className])}>
        <Spinner />
    </div>
);
