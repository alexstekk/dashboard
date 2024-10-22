import { classNames } from 'shared/lib/classNames/classNames';
import { FC, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styles from './StatInfoItem.module.scss';

interface ItemStatsProps extends LinkProps {
    className?: string;
    title?:string;
    icon?: ReactNode;
    count?:number;
}

export const StatInfoItem: FC<ItemStatsProps> = (props) => {
    const {
        children,
        className,
        icon,
        title,
        count,
        to,
    } = props;
    return (
        <Link to={to} className={classNames(styles.StatInfoItem, {}, [className])}>
            <div className={styles.icon}>{icon}</div>
            <p className={styles.count}>
                {count}
            </p>
            <p className={styles.title}>
                {title}
            </p>
        </Link>
    );
};
