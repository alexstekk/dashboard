import { classNames } from 'shared/lib/classNames/classNames';
import { StatInfoItem } from 'shared/ui/StatInfoItem';
import UserIcon from 'shared/assets/icons/solar--user-circle-linear.svg';
import PostsIcon from 'shared/assets/icons/solar--file-text-linear.svg';
import ProductsIcon from 'shared/assets/icons/solar--shop-2-linear.svg';
import { AppRoutes } from 'shared/config/routerConfig/routerConfig';
import { useSelector } from 'react-redux';
import { selectUsersQty } from 'entities/Users/model/selectors/selectUsersQty/selectUsersQty';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { fetchUsers } from 'entities/Users/model/service/fetchUsers/fetchUsers';
import { selectPostsQty } from 'entities/Posts/model/selectors/selectPostsQty/selectPostsQty';
import { fetchPosts } from 'entities/Posts/model/service/fetchPosts/fetchPosts';
import styles from './StatInfo.module.scss';

interface StatInfoProps {
    className?: string;
}

export const StatInfo = ({ className }: StatInfoProps) => {
    const dispatch = useAppDispatch();
    const usersQty = useSelector(selectUsersQty);
    const postsQty = useSelector(selectPostsQty);

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

    return (
        <div className={classNames(styles.StatInfo, {}, [className])}>
            <StatInfoItem icon={<UserIcon />} title="Users" count={usersQty} to={AppRoutes.USERS} />
            <StatInfoItem icon={<PostsIcon />} title="Posts" count={postsQty} to={AppRoutes.POSTS} />
            <StatInfoItem icon={<ProductsIcon />} title="Products" count={153} to={AppRoutes.PRODUCTS} />
        </div>
    );
};
