import { classNames } from 'shared/lib/classNames/classNames';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
    selectSingleUserById, selectUsersState, selectUsersQty, fetchUsers, UserCard,
} from 'entities/Users';
import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Loader } from 'widgets/Loader';
import {
    selectPostsQty, fetchPosts, selectPostsByUserId, PostsList,
} from 'entities/Posts';
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
