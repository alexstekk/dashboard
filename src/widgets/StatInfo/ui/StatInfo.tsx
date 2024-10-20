import { classNames } from 'shared/lib/classNames/classNames';
import { StatInfoItem } from 'entities/StatInfoItem';
import UserIcon from 'shared/assets/icons/solar--user-circle-linear.svg';
import PostsIcon from 'shared/assets/icons/solar--file-text-linear.svg';
import ProductsIcon from 'shared/assets/icons/solar--shop-2-linear.svg';
import { AppRoutes } from 'shared/config/routerConfig/routerConfig';
import styles from './StatInfo.module.scss';

interface StatInfoProps {
    className?: string;
}

export const StatInfo = ({ className }: StatInfoProps) => (
    <div className={classNames(styles.StatInfo, {}, [className])}>
        <StatInfoItem icon={<UserIcon />} title="Users" count={300} to={AppRoutes.USERS} />
        <StatInfoItem icon={<PostsIcon />} title="Posts" count={938} to={AppRoutes.POSTS} />
        <StatInfoItem icon={<ProductsIcon />} title="Products" count={153} to={AppRoutes.PRODUCTS} />

    </div>
);
