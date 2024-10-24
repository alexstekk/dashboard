import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchUsers } from 'entities/Users/model/service/fetchUsers/fetchUsers';
import { useSelector } from 'react-redux';
import { selectUsersState } from 'entities/Users';
import { Loader } from 'widgets/Loader';
import { UsersList } from 'entities/Users/ui/UsersList/UsersList';
import { selectUsersQty } from 'entities/Users/model/selectors/selectUsersQty/selectUsersQty';
import styles from './UsersPage.module.scss';

interface UsersPageProps {
    className?: string;
}

const UsersPage = ({ className }: UsersPageProps) => {
    const dispatch = useAppDispatch();
    const { isLoading, error, data } = useSelector(selectUsersState);
    const qty = useSelector(selectUsersQty);

    useEffect(() => {
        if (!qty) {
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
            <h1 className={styles.title}>Users</h1>
            <UsersList data={data} />
        </>
    );
};

export default UsersPage;
