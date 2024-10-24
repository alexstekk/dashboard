import { classNames } from 'shared/lib/classNames/classNames';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { selectSingleUserById, selectUsersState } from 'entities/Users';
import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';
import { useEffect } from 'react';
import { selectUsersQty } from 'entities/Users/model/selectors/selectUsersQty/selectUsersQty';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchUsers } from 'entities/Users/model/service/fetchUsers/fetchUsers';
import { Loader } from 'widgets/Loader';
import { UserCard } from 'entities/Users/ui/UserCard/UserCard';
import { selectPostsQty } from 'entities/Posts/model/selectors/selectPostsQty/selectPostsQty';
import { fetchPosts } from 'entities/Posts/model/service/fetchPosts/fetchPosts';
import { selectPostsByUserId } from 'entities/Posts/model/selectors/selectPostsByUserId/selectPostsByUserId';
import { PostsList } from 'entities/Posts/ui/PostList/PostsList';
import styles from './SingleUserViewPage.module.scss';

interface SingleUserViewPageProps {
    className?: string;
}

const SingleUserViewPage = ({ className }: SingleUserViewPageProps) => {
    const navigate = useNavigate();
    const { id } = useParams();

    const dispatch = useAppDispatch();

    const UsersQty = useSelector(selectUsersQty);
    const postsQty = useSelector(selectPostsQty);
    const { isLoading, error } = useSelector(selectUsersState);
    const userData = useSelector((state: StateSchema) => selectSingleUserById(state, Number(id)) || {});
    const userPosts = useSelector((state: StateSchema) => selectPostsByUserId(state, Number(id))) || [];
    console.log(userPosts);

    useEffect(() => {
        if (!UsersQty) {
            dispatch(fetchUsers());
        }
    }, []);

    useEffect(() => {
        if (!postsQty) {
            dispatch(fetchPosts());
        }
    }, []);

    if (isLoading) {
        return <Loader />;
    }
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className={classNames(styles.SingleUserViewPage, {}, [className])}>
            <UserCard user={userData} />
            <PostsList postsData={userPosts} />
            <div className={styles.buttons}>
                <Button
                    variant={ButtonVariant.OUTLINE}
                    onClick={() => { navigate(-1); }}
                >
                    Back
                </Button>
            </div>
        </div>
    );
};

export default SingleUserViewPage;
