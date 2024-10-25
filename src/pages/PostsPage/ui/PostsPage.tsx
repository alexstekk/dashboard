import { PostsList } from 'entities/Posts/ui/PostList/PostsList';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Loader } from 'widgets/Loader';
import { selectPostsState } from 'entities/Posts/model/selectors/selectPostsState/selectPostsState';
import { fetchPosts } from 'entities/Posts/model/service/fetchPosts/fetchPosts';
import { selectPostsQty } from 'entities/Posts/model/selectors/selectPostsQty/selectPostsQty';
import { selectUsersQty } from 'entities/Users/model/selectors/selectUsersQty/selectUsersQty';
import { fetchUsers } from 'entities/Users/model/service/fetchUsers/fetchUsers';
import { usePaginate } from 'shared/lib/hooks/usePaginate/usePaginate';
import { selectPostsPageSize } from 'entities/Posts/model/selectors/selectPostsPageSize/selectPostsPageSize';
import { selectPostsPageNumber } from 'entities/Posts/model/selectors/selectPostsPageNumber/selectPostsPageNumber';
import { selectPostsTotal } from 'entities/Posts/model/selectors/selectPostsTotal/selectPostsTotal';
import { Pagination } from 'widgets/Pagination';
import { usersActions } from 'entities/Users';
import { postsActions } from 'entities/Posts/model/slice/postsSlice';
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
