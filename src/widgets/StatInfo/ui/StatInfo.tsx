import { classNames } from 'shared/lib/classNames/classNames';
import { StatInfoItem } from 'shared/ui/StatInfoItem';
import UserIcon from 'shared/assets/icons/solar--user-circle-linear.svg';
import PostsIcon from 'shared/assets/icons/solar--file-text-linear.svg';
import ProductsIcon from 'shared/assets/icons/solar--shop-2-linear.svg';
import { AppRoutes } from 'shared/config/routerConfig/routerConfig';
import { useSelector } from 'react-redux';
import { fetchUsers, selectUsersQty } from 'entities/Users';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { fetchPosts, selectPostsQty } from 'entities/Posts';
import { fetchProducts, selectProductsQty } from 'entities/Products';
import { Loader } from 'widgets/Loader';
import styles from './StatInfo.module.scss';

interface StatInfoProps {
    className?: string;
}

export const StatInfo = ({ className }: StatInfoProps) => {
    const dispatch = useAppDispatch();
    const usersQty = useSelector(selectUsersQty);
    const postsQty = useSelector(selectPostsQty);
    const productQty = useSelector(selectProductsQty);
    useEffect(() => {
        if (!productQty) {
            dispatch(fetchProducts());
        }
    }, []);

    useEffect(() => {
        if (!usersQty) {
            dispatch(fetchUsers());
        }
    }, [usersQty]);

    useEffect(() => {
        if (!postsQty) {
            dispatch(fetchPosts());
        }
    }, []);

    if (!postsQty || !usersQty || !productQty) {
        return <Loader />;
    }

    return (
        <div className={classNames(styles.StatInfo, {}, [className])}>
            <StatInfoItem icon={<UserIcon />} title="Users" count={usersQty} to={AppRoutes.USERS} />
            <StatInfoItem icon={<PostsIcon />} title="Posts" count={postsQty} to={AppRoutes.POSTS} />
            <StatInfoItem icon={<ProductsIcon />} title="Products" count={productQty} to={AppRoutes.PRODUCTS} />
        </div>
    );
};
