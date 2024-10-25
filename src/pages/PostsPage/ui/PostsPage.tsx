import {
    fetchPosts,
    PostsList,
    selectPostsPageNumber,
    selectPostsPageSize,
    selectPostsQty,
    selectPostsState,
    selectPostsTotal,
    postsActions,
} from 'entities/Posts';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Loader } from 'widgets/Loader';
import { fetchUsers, selectUsersQty } from 'entities/Users';
import { usePaginate } from 'shared/lib/hooks/usePaginate/usePaginate';
import { Pagination } from 'widgets/Pagination';
import styles from './PostsPage.module.scss';

interface PostsPageProps {
    className?: string;
}

const PostsPage = ({ className }: PostsPageProps) => {
    const dispatch = useAppDispatch();
    const { isLoading, error, data } = useSelector(selectPostsState);
    const postsQty = useSelector(selectPostsQty);
    const userQty = useSelector(selectUsersQty);

    const pageSize = useSelector(selectPostsPageSize);
    const pageNumber = useSelector(selectPostsPageNumber);
    const totalUsers = useSelector(selectPostsTotal);

    const { dataToShow, pagesArr } = usePaginate(data, pageSize, totalUsers, pageNumber);

    const onChangePage = (pageNumber: number) => {
        dispatch(postsActions.setPageNumber(pageNumber));
    };

    useEffect(() => {
        if (!postsQty) {
            dispatch(fetchPosts());
        }
    }, []);
    useEffect(() => {
        if (!userQty) {
            dispatch(fetchUsers());
        }
    }, []);

    if (isLoading) {
        return <Loader />;
    }
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <h1 className={styles.title}>Posts</h1>
            <PostsList postsData={dataToShow} />
            <Pagination
                pages={pagesArr}
                pageNumber={pageNumber}
                action={onChangePage}
            />
        </>
    );
};

export default PostsPage;
